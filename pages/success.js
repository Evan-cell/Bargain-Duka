import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import React from 'react'

function success() {
    const router = useRouter()
  return (
    <div className='bg-gray-100 h-screen'>
        <Header/>
        <div className='max-w-screen-lg mx-auto mt-5'>
            <div className='flex flex-col p-10 bg-white '>
                <div className='flex items-center space-x-2 mb-5'>
                  <CheckCircleIcon className='text-emerald-600 h-10'/>  
                  <h1 className='text-3xl'>Thankyou,Your order has been confirmed!</h1>
                </div>
                <p>Thank you for shopping with us. We'll send a confirmation once the item has been shipped,if you would like to check the status of the order(s) please press the link below</p>
                <button onClick={()=>router.push("/Order")} className='button mt-8'>Go to my orders</button>
            </div>
        </div>
    </div>
  )
}

export default success