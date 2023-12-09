import { buffer } from 'micro'
import * as admin from 'firebase-admin'

// >secuere connection to firebase
const serviceAccount = require('../../permissions.json')

const app = !admin.apps.length ? admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
}) : admin.app()
// stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_SIGNING_KEY

const fulfillOrder = async (session) => {
    return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
        amaount:session.amaount_total / 100,
        amaount_shipping: session.total_details.amaount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(()=>{
        console.log(`SUCCESS:Order ${session.id} has been added to the DB`)
    })
}

export default async (req,res) => {
    if (req.method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
        const sig = req.header["stripe-signature"]

        let event;

        // we verify tha the event came from stripe
        try {
            event = stripe.webhooks.constructEvent(payload,sig,endpointSecret)
        } catch(err) {
            console.log('error', err.message)
            return res.status(400).send(`webhook error : ${err.message}`)
        }
        //  handle checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            // fulfill order
            return fulfillOrder(session).then(() => res.status(200))
            .catch((err)=>res.status(400).send(`Webhook Error: ${err.message}`))
        }
    }
}
export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    }
}