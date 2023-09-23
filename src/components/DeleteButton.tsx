"use client"
import axios from 'axios'
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
 const res=await axios.delete(`/api/products/${id}`)
 if(res.status===200){
    router.push("/menu")
 }else{
    const data=await res.data
  
 }
    }
  return (
    <button className='uppercase  bg-red-500 text-white p-3 ring-1 ring-red-500 absolute top-4 right-4' onClick={handleDelete}>DelteButton</button>
  )
}

export default DeleteButton
