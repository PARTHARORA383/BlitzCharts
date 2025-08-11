
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

export const description = "A simple area chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function DottedRevealAreaChart() {

  const [hovered, setHovered] = useState(false)

  const dots = []
  const rows = 6
  const cols = 15
  const spacing = 20
  const dotRadius = 3


  for (let row = 0 ; row< rows ; row++){
    for(let col = 0 ; col < cols ; col++){
      const x = col* spacing
      const y = row* spacing
      dots.push({
        id: `${row}-${col}`,
        cx: col * spacing + 10,
        cy: row * spacing + 10,}
      )
  
    }
  }


  return (

    <>
   


    <Card onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false) }>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
              />
             <defs>
  <pattern
  width={cols * spacing}
  height={rows * spacing}
  id="dots"
  patternUnits="userSpaceOnUse"
>
  {dots.map((dot) => {
    const [row, col] = dot.id.split("-").map(Number)
  const delay = row * cols * 0.02 + col * 0.02

    return (
      <motion.circle
        key={dot.id}
        initial={{ r: 3 }}
        animate={{
          fill: hovered ? "var(--foreground)" : "var(--accent)",
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
          delay
        }}
        cx={dot.cx}
        cy={dot.cy}
        r={dotRadius}
      />
    )
  })}
</pattern>
    </defs>

            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#dots)"
              fillOpacity={0.4}
              stroke="var(--foreground)"
              />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
              </>
  )
}
