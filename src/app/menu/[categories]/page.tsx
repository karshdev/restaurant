
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props={
  params:{categories:string}
}

const getData=async (categories:string)=>{
  const res=await fetch(`${process.env.NEXTAUTH_URL}/api/products?cat=${categories}`,{
  cache:"no-store"
  })
  if(!res.ok){
    throw new Error("failed")
  }
  return res.json()
 }
const CategoryPage = async({params}:props) => {
  
  const products:Product[]=await getData(params.categories) 
  return (
    <div className="flex flex-wrap text-red-500">
      {products?.map((item) => (
        <Link className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item?.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;