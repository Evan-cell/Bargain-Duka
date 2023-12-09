import Header from '@/components/Header'
import { getSession } from 'next-auth/react'
import React from 'react'

function Order({orders}) {
  return (
    <div>
        <Header/>
        <main className='max-w-screen-lg mx-auto p-10'>
            <h1 className='text-3xl border-b mb-2 pb-1 border-emerald-700'>Your Orders</h1>
            {session ? (
                <h2>orders</h2>
            ):
            <h2>please Sign in to see your orders</h2>
            }
            <div className='mt-5 space-y-4'></div>
        </main>
    </div>
  )
}

export default Order

export async function getServerSideProps(context) {
    const stripe = require('stripe'(process.env.STRIPE_SECRET_KE))
    const session = getSession(context)
    if(!session) {
        return {
            props: {}
        }
    }
    // firebase db
    const stripeOrders = await
     db.collection('users')
    .doc(session.user.email)
    .collection('orders')
    .orderBy("timestamp","desc")
    .get()
    // stripe orders
    const orders
}