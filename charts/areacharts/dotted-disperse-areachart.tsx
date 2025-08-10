"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A stacked area chart"

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
    color: "var(--chart-2)",
  },
} satisfies ChartConfig


export function DottedAreaChart() {

  const [hovered, setHovered] = useState(false)

  {
    //Generating dots matrix for the pattern
  }
  const rows = 6
  const cols = 15
  const spacing = 20
  const dotRadius = 3

  const dots = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push({
        id: `${row}-${col}`,
        cx: col * spacing + 10,
        cy: row * spacing + 10,
      })
    }
  }


  return (

    <>
      <Card className="rounded-none border-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
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
                content={<ChartTooltipContent indicator="dot" />}
              />

              <defs>
                {/* Animated Pattern */}


                <pattern
                  id="dotGridPattern"
                  patternUnits="userSpaceOnUse"
                  width={cols * spacing}
                  height={rows * spacing}
                >
                  {dots.map((dot) => {
                    const angle = Math.random() * Math.PI * 2;
                    const distance = 15 + Math.random() * 10;
                    const targetCx = dot.cx + Math.cos(angle) * distance;
                    const targetCy = dot.cy + Math.sin(angle) * distance;

                    return (
                      <motion.circle
                        key={dot.id}
                        cx={dot.cx}
                        cy={dot.cy}
                        r={dotRadius}
                        fill="#555"
                        animate={
                          hovered
                            ? { cx: targetCx, cy: targetCy, opacity: 0.5 }
                            : { cx: dot.cx, cy: dot.cy, opacity: 1 }
                        }
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    );
                  })}
                </pattern>



                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#dotGridPattern)"
                fillOpacity={0.4}
                stroke="var(--foreground)"
                filter="url(#glow)"
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
