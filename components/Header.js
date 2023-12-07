import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon,Bars3Icon, ShoppingCartIcon,ShoppingBagIcon} from '@heroicons/react/24/solid'

import { useSession, signIn, signOut } from "next-auth/react"
import {  Router,useRouter} from 'next/router'
function Header() {
  const { data: session } = useSession();
  const router = useRouter()
  
  return (
    <header>
      {/* top nav */}
      <div className='flex items-center bg-amazon_blue-light p-1 flex-grow py-2'>
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
          <Image
          onClick={()=>router.push('/')}
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
          <div onClick={!session ? signIn : signOut} className='cursor-pointer hover:underline'>
            <p>
              {session ? `Hello, ${session.user.name}`: 'Sign In'}
            </p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='cursor-pointer hover:underline'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div onClick={()=>router.push('/checkout')} className='relaative flex items-center cursor-pointer hover:underline'>
          
            <span className='absolute top-4 right-4 md:top-3 md:right-16  h-4 w-4 bg-emerald-600 text-center rounded-full text-white font-bold'>4</span>
            <ShoppingCartIcon className='h-10'/>
            <p className='hidden md:inline mt-2 font-extrabold md:text-sm'>Basket</p>
          </div>
          
        </div>
      </div>
      {/* bottom nav */}
      <div className='flex items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm'>
        <p className='font-extrabold md:text-sm flex items-center'>
          <Bars3Icon className='h-6 mr-1'/>
          All
        </p>
        <p className='font-extrabold md:text-sm cursor-pointer'>Prime Video</p>
        <p className='font-extrabold md:text-sm cursor-pointer'>Duka Business</p>
        <p className='font-extrabold md:text-sm cursor-pointer'>Today's Deals</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Electronics</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Food & Grocery</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Prime</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Buy Again</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Shopper Toolkit</p>
        <p className='hidden lg:inline-flex font-extrabold md:text-sm cursor-pointer'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header