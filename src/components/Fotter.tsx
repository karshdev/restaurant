"use client"
import Link from "next/link";
import React from "react";

const Fotter = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const[active,setactive]=React.useState(false)
  const breakpoint = 700;
  React.useEffect(() => {
   const handleResizeWindow = () => {
    setWidth(window.innerWidth)
    if(width > breakpoint){
  setactive(false)
    }else{
 setactive(true)
    }
   }
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [width]);
  
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/"  >
        <span className="text-xl bg-orange-300 font-bold rounded-md p-1">
          {active ? "AJTKH" : "AAO JI TE KHAO JI"}
        </span>
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Fotter;