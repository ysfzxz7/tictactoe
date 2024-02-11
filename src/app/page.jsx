"use client"
import { Vidaloka } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  
  const [value, setValue] = useState("")
  const handClick = (e)=>{
    console.log(e.target.id);
    setValue("O")
  }
  

  return (
      <div className="w-[60%] h-[60%] border flex justify-center items-center">
        <div className="w-38 h-38 border shadow bg-white rounded ">
          <div className="flex" >
            <div className=" bg-yellow-100 border w-12 h-12 flex items-center justify-center font-extrabold text-2xl" id="1" onClick={handClick} > {value} </div>
            <div className=" bg-yellow-100 border w-12 h-12" id="2" onClick={handClick}></div>
            <div className=" bg-yellow-100 border w-12 h-12" id="3" onClick={handClick}></div>
          </div>
          <div className="flex" >
            <div className=" bg-yellow-100 border w-12 h-12" id="4" onClick={handClick}></div>
            <div className=" bg-yellow-100 border w-12 h-12" id="5" onClick={handClick}></div>
            <div className=" bg-yellow-100 border w-12 h-12" id="6" onClick={handClick}></div>
          </div>
          <div className="flex" >
            <div className=" bg-yellow-100 border w-12 h-12" id="7" onClick={handClick}></div>
            <div className=" bg-yellow-100 border w-12 h-12" id="8" onClick={handClick}></div>
            <div className=" bg-yellow-100 border w-12 h-12" id="9" onClick={handClick}></div>
          </div>


        </div>
      </div>
  );
}
