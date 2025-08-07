"use client"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An area chart with a legend"

const chartData = [
  { month: "January", desktop: 120, mobile: 220 },
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

export function IntersectionAreaChart() {
  return (
    <Card className="border-none rounded-none">
      <CardHeader>
        <CardTitle>Area Chart </CardTitle>
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
            <CartesianGrid vertical={false} strokeDasharray={3} />
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

            {/* Stripe Pattern */}
            <defs>
              <pattern
                id="stripe-pattern"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(-45)"
              >
                <rect x="0" y="0" width="2" height="6" fill="#d1d5db" />
              </pattern>
            </defs>

       
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#stripe-pattern)"
              fillOpacity={0.4}
              stroke="var(--foreground)"
              strokeWidth={3}
              isAnimationActive={true}
              animationDuration={1500}
            />

            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--background)"
              strokeDasharray="6 6"
              fillOpacity={0.4}
              stroke="var(--muted-foreground)"
              strokeWidth={2}
              isAnimationActive={true}
              animationDuration={1500}
              className="animated-stroke"
            />

            <ChartLegend content={<ChartLegendContent />} />
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

      {/* Scoped stroke animation style  
      NOTE : Only work in Nextjs projects if you are using it in react add these styles to your index.css file*/}

      
      <style jsx>{`
        :global(.animated-stroke path) {
          stroke-dasharray: 6 6;
          stroke-dashoffset: 0;
          animation: dashmove 2s linear infinite;
        }

        @keyframes dashmove {
          to {
            stroke-dashoffset: -12;
          }
        }
      `}</style>
    </Card>
  )
}
