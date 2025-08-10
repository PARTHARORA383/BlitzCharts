

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

export const description = "An area chart with gradient fill"

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
    color: "var(--chart-3)",
  }
} satisfies ChartConfig

export function SmoothGradientAreaChart() {

  const [hovered, setHovered] = useState(false)

  return (
    <Card
    className="border-none rounded-none"
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <defs>
              <motion.linearGradient id="fillDesktop" 
                x = "0"  y = "0" x2 = "1" y2 = "0"
              >
                <motion.stop
                  initial={{ offset: "0%" }}
                  animate={{ offset: hovered ? "5%" : "0%" }}
                  transition={{ duration: 0.3  , ease: "linear" }}
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <motion.stop
                  initial={{ offset: "0%" }}
                  animate={{ offset: hovered ? "95%" : "0%" }}
                      transition={{ duration: 0.3  , ease: "linear" }}
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </motion.linearGradient>
       
            </defs>
        
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
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
  )
}
