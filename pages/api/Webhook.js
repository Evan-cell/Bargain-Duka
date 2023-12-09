import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Secure connection to firebase
const serviceAccount = require('../../permissions.json');
const app = !admin.apps.length ? admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_KEY;

const fulfillOrder = async (session) => {
    try {
      await app
        .firestore()
        .collection("users")
        .doc(session.metadata.email)
        .collection("orders")
        .doc(session.id)
        .set({
          amount: session.amount_total / 100,
          amount_shipping: session.total_details.amount_shipping / 100,
          images: [session.metadata.images], // Wrap the URL in an array
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
  
      console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
    } catch (error) {
      console.error(`Error fulfilling order: ${error.message}`);
    }
  };
  export default async (req, res) => {
    if (req.method === 'POST') {
      try {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers['stripe-signature'];
  
        let event;
  
        // Verify that the event came from Stripe
        try {
          event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch (err) {
          console.log('Error', err.message);
          return res.status(400).send(`Webhook error: ${err.message}`);
        }
  
        // Handle checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
          const session = event.data.object;
          // Fulfill order asynchronously
          await fulfillOrder(session);
          console.log(`Order fulfilled for session ${session.id}`);
          res.status(200).end();
        }
      } catch (error) {
        console.error(`Error processing webhook: ${error.message}`);
        res.status(500).end();
      }
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  };
  
  

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
