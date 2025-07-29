
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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


export function HoverGlowSimpleBarChart() {
  const [hoveredIndex , setHoveredIndex ] = useState(null);
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Bar Chart - Simple</CardTitle>
         <CardDescription className="">          Showing total visitors for the last 6 months
 </CardDescription>
        
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel indicator="line"/>}
            />
            <defs>
              <filter id= "glow" x = "-50%" y = "-50%" height="200%" width="200%">
                <feGaussianBlur stdDeviation={3}
                result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in = "coloredBlur"/>
                  <feMergeNode in  = "SourceGraphic"/>
                </feMerge>

                  

              </filter>
            </defs>
          <Bar
            dataKey="desktop"
            radius={4}
            shape={(props:any) => {
              const { x, y, width, height,  index } = props;
              const isHover = hoveredIndex === index;
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={isHover ? "var(--chart-4)" : "#262626"}
                  filter={isHover ? "url(#glow)": "none"} 
                  rx={10}
                  ry={10}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            }}
          />
          <Bar
            dataKey="mobile"
            radius={4}
            shape={(props:any) => {
              const { x, y, width, height,  index } = props;
              const isHover = hoveredIndex === index;
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={isHover ? "var(--chart-1)" : "#0A0A0A"}
                  filter={isHover ? "url(#glow)": "none"} 
                  rx={10}
                  ry={10}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
              );
            }}
          />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-md">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
          <div className="text-muted-foreground leading-none">
            January - June 2025
        </div>
      </CardFooter>
    </Card>
  )
}
