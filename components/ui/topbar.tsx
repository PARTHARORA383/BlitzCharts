// components/topbar.tsx
"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/ui/toglebutton"
import { Button } from "@/components/ui/button"
import { Github, Sparkle } from "lucide-react"
import { blitzFont } from "./typography"
import {motion } from 'motion/react'
import { Sparkles } from "./pattern"
import { ThemeSelector } from "./theme-selector"

export function Topbar() {
  
const balls = Array.from({ length: 12 })

  return (
    <header className=" sticky top-0 z-50 w-full border-b-2 border-border/40 bg-[var(--background)]">
 
 
      <Sparkles/>

      <div className=" relative flex items-center  lg:justify-center px-4 py-3">
        {/* Left: Brand */}
        <Link href="/" className={` ${blitzFont.className} text-2xl font-bold tracking-tight`
        }>
          BlitzCharts
        </Link>
        
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
              {/* <Button asChild variant= "default">
            <a
              href="https://twitter.com/partharora9128"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work with us
            </a>
          </Button> */}

        </div>
      </div>
    </header>
  )
}
