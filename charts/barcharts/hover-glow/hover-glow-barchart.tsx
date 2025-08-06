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
  { month: "January", Revenue: 2560.12 },
  { month: "February", Revenue: 2750.87 },
  { month: "March", Revenue: 2389.42 },
  { month: "April", Revenue: 1975.00 },
  { month: "May", Revenue: 3050.00 },
  { month: "June", Revenue: 3055.12 },
];

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig


// CustomTooltip.tsx
import React from "react";

type Props = {
  active?: boolean;
  payload?: any[];
  label?: string | number;
};

export default function CustomTooltip({ active, payload, label }: Props) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className=" p-3 rounded shadow-xl border-2 border-border text-sm w-[160px]">

      {payload.map((item, index) => (
        <div key={index} className="flex justify-between gap-2 text-secondary-foreground">
          <span>{item.name} :</span>
          <span className="">${item.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}



export function HoverGlowBarChart() {
  const [hoveredIndex , setHoveredIndex ] = useState(null);
  return (
    <Card className="rounded-none border-none">
      <CardHeader>
        <CardTitle className="text-neutral-400">Performance Overview</CardTitle>
              <CardDescription className="text-xl text-neutral-100 flex gap-2 items-baseline-last">$ 15,780.53 
                <span className="text-green-400 font-medium text-sm"> +15.3%</span>
              
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
              content={<ChartTooltipContent hideLabel 
              indicator="dashed"/>  
              
              }
              
            />
{/* 
            <ChartTooltip content={CustomTooltip} cursor ={{opacity : 0}}/> */}
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
            dataKey="Revenue"
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
                  fill={isHover ? "#5C5CFF" : "var(--secondary)"}
                  filter={isHover ? "url(#glow)": "none"} 
                  rx={4}
                  ry={4}
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
          Trending up by 15.3% this month <TrendingUp className="h-4 w-4" />
        </div>
            <div className="text-muted-foreground leading-none">
            January - June 2025
        </div>
   
      </CardFooter>
    </Card>
  )
}
