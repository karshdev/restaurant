"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const DeleteButton = ({id}:{id:string}) => {
    const{data:session,status}=useSession()
    const router=useRouter()
    if(status==="loading"){
        return <p>Loading.....</p>
    }
    if(status==="unauthenticated" || !session?.user.isAdmin){
    return
    }
    const handleDelete=async ()=>{
 const res=await fetch(`http://localhost:3000/api/products/${id}`,{
    method:"DELETE"
 })
 if(res.status===200){
    router.push("/menu")
 }else{
    const data=await res.json()
    console.log(data.message)
 }
    }
  return (
    <button className='uppercase  bg-red-500 text-white p-3 ring-1 ring-red-500 absolute top-4 right-4' onClick={handleDelete}>DelteButton</button>
  )
}

export default DeleteButton
