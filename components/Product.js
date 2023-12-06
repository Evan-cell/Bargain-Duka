import Image from 'next/image'
import React, { useState } from 'react'
import {  StarIcon  } from '@heroicons/react/24/solid'
import CurrencyFormat from 'react-currency-format';
const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({id,title,price,description,category,image}) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING -MIN_RATING + 1)) + MIN_RATING
    )
    const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xm italic text-gray-400'>{category}</p>
        <Image
        className=''
        src={image}
        height={200}
        width={200}
        objectFit='contain'
        />
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className='h-5 text-emerald-600'/>
            )
            )}
        
        </div>
        
        <p className='text-xm my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <CurrencyFormat quantity={price} CurrencyFormat="ksh" />
        </div>
        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <img className='w-12' src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF" alt="" />
                <p className='text-xm text-gray-500'>Free next-day delivery</p>
            </div>
        )}
        <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product