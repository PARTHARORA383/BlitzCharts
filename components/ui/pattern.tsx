

import { cn } from "@/lib/utils"
import { motion, number } from 'motion/react'
import { useTheme } from "next-themes"
import { it } from "node:test"
import { useEffect, useState } from "react"

export function StripePattern({ className, text }: { className?: string, text?: string }) {
 
  return <div>

    <div className={cn("relative p-4 py-8  border-none lg:ml-6", className)}>
      <svg className="absolute left-0 top-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="stripe-pattern"
            width="10"
            height="8"
            patternUnits="userSpaceOnUse"
            patternTransform={"rotate(15)"}
          >
            <rect width="1" height="8" fill="var(--muted-foreground)" opacity={0.4} />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#stripe-pattern)" />
      </svg>
      {text}
    </div>
  </div>
}


export function BallDroppingPattern({ }) {

  const balls = Array.from({ length: 12 })
  const randomX = Math.floor(Math.random() * 100)
  const randomDelay = Math.random() * 2
  const isOrange = Math.random() > 0.7
  return (

    <div className="absolute inset-0 pointer-events-none">
      {balls.map((_, index) => {

        return (

          <motion.div
            key={index}
            className={`absolute top-0 w-2 h-2 rounded-full ${isOrange ? "bg-orange-500" : "bg-gray-400"}`}
            style={{ left: `${randomX}%` }}
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: 100, opacity: 0 }}
            transition={{
              duration: 2,
              delay: randomDelay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeIn",
            }}
          />

        )
      })}
    </div>

  )
}


export function Sparkles (){

 const {theme} = useTheme()

   const isDark = theme?.endsWith("-dark")

  const [sparkleoffsets , setSparkleoffsets] = useState<number[]>([]);

  useEffect(()=>{
    const random = Array.from({length : 30},
       ()=>{ return ( Math.random() * -100)} 
    )
    setSparkleoffsets(random);
    random.map((item)=>(
      console.log("this is the random array" + item)
    ))
  },[])

  return (
    <div className="absolute inset-0 ">
      {sparkleoffsets.map((offset ,index)=>(

        <motion.div
        key = {index}
        initial = {{x : 0 , y:0}}
        animate = {{ x : `${offset}px` , 
          y :  `${offset}px`,
          
            inset: `calc(${Math.random() + 100} + ${offset}px)`,
            scale: [1, 1.2, 0],}}
               transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType :"reverse"
          }}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `3px`,
            height: `3px`,
            borderRadius: "50%",
            zIndex: 1,
          }}

         className={` inline-block ${isDark ? "bg-neutral-200" : "bg-orange-500"}   bg-neutral-200 rounded-full"
        `}/>

      ))}
    </div>
  )
}



export function WovenPattern(){

return (
          <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
          }}
        />
)

}