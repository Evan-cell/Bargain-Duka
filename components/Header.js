import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon,Bars3Icon, ShoppingCartIcon} from '@heroicons/react/24/solid'

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
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  )
}

export default Header