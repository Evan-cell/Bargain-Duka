import CheckoutProduct from '@/components/CheckoutProduct'
import Header from '@/components/Header'
import { selectItems } from '@/slices/basketSlice'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

function Checkout() {
    const items = useSelector(selectItems)
    const session = useSession()
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
                    <h2 className='whitespace-nowrap'>
                        Subtotal ({items.length})
                    <span className='font-bold'></span>
                    </h2>
                    <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to gray-500 border-gray-200 cursor-not-allowed'}`}>
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