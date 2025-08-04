

"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { motion } from 'motion/react'
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

export const description = "A bar chart"

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


function RoundedBarBackground(props: any) {
  const { x, y, width, height } = props
  return (
    <>

      <defs>
        <pattern
          id="stripe-pattern"
          width="12" height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(15)">

          <motion.rect
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            transition={{ duration: 2, ease: "easeIn" }}
            width="1" height="8" fill="var(--muted-foreground)" />
        </pattern>
      </defs>

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        ry={8}
        fill="var(--secondary)"
      />

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        ry={8}
        fill="url(#stripe-pattern)"

      />
    </>
  )
}

function LiquidHoverBarChart() {

  const [hoverIndex, setHoverIndex] = useState(false);

  return (
    <Card className="border-none r">


      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer onMouseEnter={() => {
          setHoverIndex(true);
        }}
          onMouseLeave={() => {
            setHoverIndex(false);
          }} config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <defs >
              <pattern
                id="wave-water"
                patternUnits="userSpaceOnUse"
                width="200%"
                height="200%">
                <motion.rect
                  initial={{ translateY: "0%" }}
                  animate={hoverIndex ? { translateY: "0%" } : { translateY: "20%" }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                  width="200%"
                  height="200%"
                  fill="#5C5CFF"
                />

              </pattern>

            </defs>

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="url(#wave-water)"
              background={<RoundedBarBackground />}
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}


export {
  LiquidHoverBarChart,
  RoundedBarBackground
}