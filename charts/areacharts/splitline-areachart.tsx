"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { motion } from "motion/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useState } from "react"

export const description = "An area chart with gradient fill that animates reveal on hover"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-mobile)",
  },
} satisfies ChartConfig

export function SplitLineAreaChart() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isInside, setIsInside] = useState(false)

  const splitOffset =
    hoverIndex != null
      ? (hoverIndex / (chartData.length - 1)) * 100
      : 100

  return (
    <div className="relative">
      {/* Glowing cursor */}
      {isInside && (
        <div
          className="pointer-events-none fixed z-50 w-24 h-24 rounded-full bg-yellow-600 opacity-60 blur-3xl"
          style={{
            left: mousePos.x - 48,
            top: mousePos.y - 48,
          }}
        />
      )}

      <Card
     className="border-none rounded-none"
      >
        <CardHeader>
          <CardTitle>Area Chart</CardTitle>
          <CardDescription>
            Hover to reveal chart fill up to that point
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer 
             onMouseMove={(e) => {
          setMousePos({ x: e.clientX, y: e.clientY })
        }}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => {
          setIsInside(false)
          setHoverIndex(null)
        }} 
          config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
                top: 12,
              }}
              onMouseMove={(state) => {
                if (state && state.activeTooltipIndex != null) {
                  setHoverIndex(state.activeTooltipIndex)
                }
              }}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="1" y2="0">
                  <motion.stop
                    offset="0%"
                    stopColor="var(--foreground)"
                    stopOpacity={0.8}
                  />
                  <motion.stop
                    stopColor="var(--foreground)"
                    stopOpacity={0.8}
                    animate={{ offset: `${splitOffset}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <motion.stop
                    stopColor="var(--foreground)"
                    stopOpacity={0.1}
                    animate={{ offset: `${splitOffset + 0.1}%` }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--background)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                stroke="url(#fillMobile)"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 leading-none font-medium">
                Trending up by 5.2% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-muted-foreground flex items-center gap-2 leading-none">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
