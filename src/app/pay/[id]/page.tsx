"use client"

import React, { useEffect, useState } from 'react'
import {StripeElementsOptions, loadStripe}  from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/CheckoutForm';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const Page = ({params}:{params:{id:string}}) => {
    const [clientSecret, setClientSecret] = useState("");
    const{id}=params
console.log(id)
    useEffect(()=>{
       const makrequest=async ()=>{
         try{ 
            const res=await fetch(`${process.env.NEXTAUTH_URL}/api/create-intent/${id}`,{
                method:"POST",

            })
            const data=await res.json()
          
            setClientSecret(data.clientSecret)

         }catch(err){
         console.log(err);
         
         }  
             }
       makrequest()
    },[id])

const options:StripeElementsOptions={
    clientSecret,
    appearance:{
        theme:"stripe"
    }
}

  return (
    <div>
       {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
      <CheckoutForm/>
        </Elements>
      )}
    </div>
  )
}

export default Page
