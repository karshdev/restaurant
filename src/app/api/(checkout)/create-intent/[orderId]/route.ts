import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export const POST= async( request: NextRequest,{params}:{params:{orderId:string}})=>{
const{orderId}=params
console.log("orderID" ,orderId);

const order=await prisma.order.findUnique({
    where:{
       id:orderId,
    }
})
console.log(order)

    try{
        if(order){
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 100 * 100,
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });
      await prisma.order.update({
        where:{
            id:orderId
        },
        data: {intent_id:paymentIntent.id},
      })
      return new NextResponse(JSON.stringify({clientSecret: paymentIntent.client_secret }),{
        status:200,
    }) 
}else{
    return new NextResponse(JSON.stringify({messgae:"Not found"}),{
        status:404 
    })
}
}catch(err){
    console.log(err)
}
}