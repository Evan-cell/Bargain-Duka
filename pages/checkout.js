import CheckoutProduct from '@/components/CheckoutProduct'
import Header from '@/components/Header'
import { selectItems, selectTotal } from '@/slices/basketSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const stripePromise = loadStripe(process.env.stripe_public_key)

function Checkout() {
    const items = useSelector(selectItems)
    const session = useSession()
    const total = useSelector(selectTotal)
    const checkoutSession = async () =>{
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-checkout-session',
        {
            items:items,
            email:session.user.email
        })

    }
  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex  '>
            {/* left */}
            <div className='flex-grow lg:w-3/4 m-5 shadow-lg'>
                <Image
                src='https://links.papareact.com/ikj'
                width={1020}
                height={250}
                objectFit='contain'
                alt=''
                />
                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>
                        {items.length === 0 ? 'Your Basket is Empty' : 'Shopping Basket'}
                    </h1>
                    <div className=''>
                        {items.map((item,i)=>(
                            <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}
                            />
                        ))}
                   </div>
                </div>

            </div>
            {/* right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                    <h2 className='whitespace-nowrap font-semibold'>
                        Subtotal ({items.length} items:)
                    <span className='font-bold'>${total}</span>
                    </h2>
                    <button onClick={checkoutSession} role='link' disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to gray-500 border-gray-200 cursor-not-allowed'}`}>
                        {!session ? "Sign In to Checkout " : "Proceed to Checkout"}
                    </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default Checkout