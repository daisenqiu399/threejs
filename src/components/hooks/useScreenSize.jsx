"use client";
import { useEffect,useState } from "react";
const usescreenSize=()=>{
    const [screenSize,setScreenSize]=useState();
    useEffect(()=>{
       function getSceenSize(){
        return window.innerWidth;
       }
       function handleResize(){
        setScreenSize(getSceenSize());
       }
       handleResize();
       window.addEventListener('resize',handleResize);
       return ()=>window.removeEventListener('resize',handleResize)
    },[])
    return screenSize;
};
export default usescreenSize