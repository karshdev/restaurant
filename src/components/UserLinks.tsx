"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';


const UserLinks = () => {
    const {status}=useSession();
  return (
    <div>
        {status==="authenticated" ? (
            <div>
            <Link href="/orders">Orders</Link>
            <span className="m-4 cursor-pointer" onClick={()=>signOut()}>LogOut</span>
            </div>
        )
        :
        (
 <Link href="/login">Login</Link>
        )
}
    </div>
  )
}

export default UserLinks
