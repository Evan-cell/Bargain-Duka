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

export default async (req,res) => {
    if (req.method === 'POST'){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString()
    }
}