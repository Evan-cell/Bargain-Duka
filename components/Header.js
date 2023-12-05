import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header>
      {/* top nav */}
      <div>
        <div>
          <Image
          src="https://rb.gy/rvdflm"
          width={150}
          height={40}
          />
        </div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  )
}

export default Header