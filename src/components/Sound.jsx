"use client"
import { motion } from "framer-motion"
import { Volume2, VolumeX } from "lucide-react"
import React, { useEffect, useState, useRef } from "react"
import { createPortal } from "react-dom"

const Mmodel = ({ onClose, toggle }) => {
    return createPortal(
        <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-background/20 border-accent/30 border-solid backdrop-blur-[6px]
            py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8
            ">
                <p className="font-light">Do you like to play the background music</p>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        onClick={toggle}
                        className="px-4 py-2 border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
                    >
                        Yes
                    </button>
                    <button
                        onClick={toggle}
                        className="px-4 py-2 border-accent/30 border-solid hover:shadow-glass-sm rounded"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById('my-modal')
    );
};

const Sound=()=>{
    const audioRef=useRef(null);
    const [isPlaying,setIsPlaying]=useState(false);
    const [showModel,setShowModel]=useState(false);

    const handleFirstUserInteraction=()=>{
        const musicConsent=localStorage.getItem('musicConsent');
        if(musicConsent==='true'&&!isPlaying){
            audioRef.current.play();
            setIsPlaying(true);
        }
        ['click','keydown','touchstart'].forEach((event)=>
            document.removeEventListener(event,handleFirstUserInteraction)
        );
    };
    useEffect(()=>{
    const consent=localStorage.getItem('musicConsent');
    const consentTime=localStorage.getItem('consentTime');
    if(
        consent &&
        consentTime &&
        new Date(consentTime).getTime()+3*24*60*60*1000>new Date()
    ){
        setIsPlaying(consent==='true');
        if(consent==='true'){
            ['click','keydown','touchstart'].forEach((event)=>
            document.addEventListener(event,handleFirstUserInteraction)
        );
        }
    }else{
        setShowModel(true);
    }
    },[]);
    

}