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
    <div>
        <p>{category}</p>
        <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
        />
        <h4>{title}</h4>
        <div className='flex'>
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className='h-5'/>
            )
            )}
        
        </div>
        
        <p>{description}</p>
        <div>
            <CurrencyFormat quantity={price} CurrencyFormat="ksh" />
        </div>
        {hasPrime && (
            <div>
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF" alt="" />
                <p>Free next-day delivery</p>
            </div>
        )}
        <button>Add to Basket</button>
    </div>
  )
}

export default Product