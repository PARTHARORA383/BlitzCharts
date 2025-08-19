// components/topbar.tsx
"use client"

import Link from "next/link"
import { blitzFont } from "./typography"
import { ThemeToggle } from "@/components/ui/toglebutton"
import { Button } from "@/components/ui/button"
import { Github, Sparkle, UserRound } from "lucide-react"
import {motion } from 'motion/react'
import { Sparkles } from "./pattern"
import { ThemeSelector } from "./theme-selector"
import { useRouter } from "next/navigation"

export function Topbar() {
  
const balls = Array.from({ length: 12 })
const router= useRouter()
  return (
    <header className=" sticky top-0 z-50 w-full border-b-2 border-border/40 bg-[var(--background)]">
 
 
      <Sparkles/>

      <div className=" relative flex items-center  lg:justify-center px-4 py-3">
        {/* Left: Brand */}
          <a
          href="/"
         className={` ${blitzFont.className} text-2xl font-bold tracking-tight`
        }>
          BlitzCharts
        </a>
        
        {/* Right: GitHub + Theme Toggle */}
        <div className="absolute right-2 lg:right-8 flex items-center gap-2">

        <ThemeSelector/>

          <Button
            asChild
            variant="outline"
            className="gap-1 rounded-xl"
          >
            <a
              href="https://github.com/partharora383/blitzcharts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>

          <ThemeToggle />

        </div>
      </div>
    </header>
  )
}
