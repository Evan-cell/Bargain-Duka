import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import {  addToBasket,removeFromBasket  } from '../slices/basketSlice'

function CheckoutProduct({id,title,price,rating,description,category,image,hasPrime}) {
    const dispatch = useDispatch()

    const handleAddToBasket = () => {
        const product = { id, title, price, description, category, image ,hasPrime};
        dispatch(addToBasket(product));
      };
      const handleRemoveFromBasket = () => {
        dispatch(removeFromBasket({id}))
      }

  return (
    <div className='grid grid-cols-5'>
        <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
        alt='product'
        />
        {/* middle */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
        {Array(rating)
        .fill()
        .map((_,i)=>(
            <StarIcon 
            key={i}
            className='h-5 text-emerald-600'
            />
        ))}
        </div>
        <p className='text-sm my-2 line-clamp-3'>{description}</p>
        <p className='font-bold'>${price}</p>
        {hasPrime && (
            <div className='flex items-center space-x-2'>
                <img className='h-12' loading='lazy' src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF" alt="" />
                <p className='text-sm'>Free Next day Delivery</p>
            </div>
        )}
        </div>
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
            <button onClick={handleAddToBasket} className='button '>Add to Basket</button>
            <button onClick={handleRemoveFromBasket} className='button'>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct