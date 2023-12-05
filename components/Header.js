import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon,Bars3Icon, ShoppingCartIcon,ShoppingBagIcon} from '@heroicons/react/24/solid'
import { } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className='flex items-center bg-amazon_blue-light p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
          src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
          width={150}
          height={40}
          objectFit='contain'
          className='cursor-pointer h-10 w-16'
          />
        </div>
        {/* search */}
        <div className='hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-emerald-600 hover:bg-emerald-500'>
        <input type="text" className='p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4 '/>
        <MagnifyingGlassIcon className='h-12 p-4 text-white'/>
        </div>
        {/* right */}
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='cursor-pointer hover:underline'>
            <p>Hello Evan</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='cursor-pointer hover:underline'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relaative flex items-center cursor-pointer hover:underline'>
            <span className='absolute top-4 right-4 md:top-3 md:right-16  h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>4</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>Basket</p>
          </div>
          
        </div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  )
}

export default Header