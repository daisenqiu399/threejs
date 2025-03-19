"use client"
import React from "react";
import { BtnList } from "@/app/data";
import NvaButton from "./NavButton";

const Navigation = () => {
  const angleIncrement=360/BtnList.length;
  const radius='calc(20vw - 1rem)';


  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;
         return <NvaButton key={btn.label} x={x} y={y} {...btn}/>

          
        })}
      </div>
    </div>
  );
}

export default Navigation;
