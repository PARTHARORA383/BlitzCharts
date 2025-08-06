"use client"

import { blitzFont } from "./typography"
import { useState } from "react"
import { AnimatePresence, motion } from 'motion/react'

export default function HireUs() {
  const [isClicked, setIsClicked] = useState(false)

  return <div className="relative">

    <div className="fixed  z-50 bottom-10 right-4 border-2 shadow-xl border-foreground/10 text-3xl text-white bg-amber-500 rounded-full w-14 h-14 active:scale:95 hover:scale-105 transition-transform duration-200"
      onClick={() => {
        setIsClicked(!isClicked);
      }}>
      <div className={` ${blitzFont.className} flex  w-full h-full items-center justify-center cursor-default`}>
        B
      </div>
    </div>
    <AnimatePresence>

      {isClicked && <motion.div
        initial={{
          y: -50, x: 0, scaleY: "30%"
        }}
        animate={{ y: -50, x: 0, scaleY: "100%", transformOrigin: "bottom" }}
        exit={{ y: -50, x: 0, scaleY: "30%", transformOrigin: "bottom" }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className="w-[400px] fixed z-50 bottom-20 right-10 border-2  bg-background rounded-xl shadow-lg p-2`"
      >
{/* 
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      `,
    }}
  />
  */}
 

      <div className="flex items-center justify-center p-4 "> 
        <div className="text-lg"> Meet The Creator</div>
      </div>

      <div className="h-[200px]"></div>
      <div className=" flex items-center justify-center p-4 border-t-2">
           <div className="text-lg border-2 border-dashed px-24 py-2"> Available for Work</div>
      </div>

      
      </motion.div>}
    </AnimatePresence>

  </div>
}

function CreatorDetails() {

  return <div></div>
}




import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="box-button">
        <div className="button"><span>Button</span></div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .box-button {
    cursor: pointer;
    border: 4px solid black;
    background-color: gray;
    padding-bottom: 10px;
    transition: 0.1s ease-in-out;
    user-select: none;
  }

  .button {
    background-color: #dddddd;
    border: 4px solid #fff;
    padding: 3px 8px;
  }

  .button span {
    font-size: 1.2em;
    letter-spacing: 1px;
  }

  .box-button:active {
    padding: 0;
    margin-bottom: 10px;
    transform: translateY(10px);
  }`;


