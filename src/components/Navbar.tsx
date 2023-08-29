
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from "./CartIcon"
import Phone from 'public/phone.png'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import { useCartStore } from '@/utils/store'
import UserLinks from './UserLinks'
const Navbar = () => {
    const user=false;
  return (
    <div className='h-12 text-red-500 p-4 flex  items-center justify-between border-b-2 border-b-red-500 uppercase md:h-16'>
        <div className='hidden md:flex gap-4'>
            <Link href="/">Homepage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/">Contact</Link>
        </div>
      <div className='text-xl bg-orange-300 font-bold rounded-md p-1'>
    <Link href="/">
     AAO JI TE KHAO JI
    </Link>
      </div>
      <div className='md:hidden'>
   <Menu/>
      </div>
      <div className='hidden md:flex gap-4'>
        <UserLinks/>
        <CartIcon/>
          <div className="flex items-center gap-1 bg-orange-300 flex items-center justify-center px-1 rounded-md text-sm">
            <Image src={Phone} height={13} width={13} alt=""/>
            <span>70181-20917</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar
