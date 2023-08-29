"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import CartIcon from 'public/cart.png'

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];
const Menu = () => {
    const[open,setopen]=useState(false)
const user=false;
  return (
    <div>
       <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setopen(!open)}
        className="cursor-pointer"
      />
 {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setopen(false)}>
              {item.title}
            </Link>
          ))}
      
    
 
<Link
            href={user ? "/orders" : "login"}
            onClick={() => setopen(false)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setopen(false)} className="flex items-center gap-4">
            <Image src={CartIcon} height={20} width={20} alt=""/>
            <span>Cart(3)</span>
          </Link>
</div>
 )
}
</div>
)}

export default Menu
