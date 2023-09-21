"use client"
import Link from "next/link";
import React from "react";

const Fotter = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/"  >
        <span className="text-xl bg-orange-300 font-bold rounded-md p-1">
          AJTKH
        </span> 
      </Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Fotter;