"use client";

import { useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig;



// export function DottedBackground (props :any){
//   const {x , y , width , height} = props


//   return (<>
//     <svg>
    
//     </svg>
      
//           </>
//   )
// }



export function DelayMovementBarChart() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    chartData.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, i * 800); 
    });
  }, []);

  return (
    <Card className="border-none rounded-none font-sans">
      <CardHeader>
        <CardTitle>Bar Chart </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData.slice(0, visibleCount)}>
            <defs>
        <pattern
        id="dotted-pattern" 
        width={12}
        height={12}
        patternUnits="userSpaceOnUse"
        >
          <circle cx={2} cy={2} r={1.5} fill="var(--muted-foreground)" />
        </pattern>


      </defs>
          <rect x = {0} y = {0} width={"200%"} height={"85%"} rx= {4} ry={4} fill="url(#dotted-pattern" opacity={0.3} />



            <CartesianGrid vertical={false} horizontal = {false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              fill="#AFAFFF"
              radius={4}
              isAnimationActive={true}
              animationDuration={800}
          
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
