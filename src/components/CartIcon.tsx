"use client"
import { useCartStore } from '@/utils/store'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const CartIcon = () => {
  const { totalItems } = useCartStore()
  const{data}=useSession()

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <>
    {
      data?.user?.isAdmin ?
        (
          <Link href="/add" className='flex items-center gap-4 cursor-pointer'>
            <span>Add Items</span>
          </Link>
        )

        :

        (<Link href="/cart" className='flex items-center gap-4'>
          <div className="relative 2-8 h-8 md:w-5 md:h-5">
            <Image src="/cart.png" alt="" fill />
          </div>
          <span>Cart {totalItems}</span>
        </Link>
        )
    }
    </>
  )
}

export default CartIcon
