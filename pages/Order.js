// Order.js
import Header from '@/components/Header';
import moment from 'moment/moment';
import { getSession } from 'next-auth/react';
import React from 'react';
import { collection, getDocs, orderBy } from 'firebase/firestore'; // Import necessary Firestore functions
import db from '../Firebase'; // Import the Firestore instance

function Order({ orders }) {
  console.log(orders);
  return (
    <div>
      <Header />
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-emerald-700'>
          Your Orders
        </h1>
        {session ? (
          <h2>orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
        <div className='mt-5 space-y-4'></div>
      </main>
    </div>
  );
}

export default Order;

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        props: {},
      };
    }

  // Fetch orders from Firestore
  const stripeOrders = await getDocs(
    collection(db, 'users', session.user.email, 'orders'),
    orderBy('timestamp', 'desc')
  );

  // Process orders data
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
