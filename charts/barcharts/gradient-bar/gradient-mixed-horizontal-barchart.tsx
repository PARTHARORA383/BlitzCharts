"use client"

import { TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Rectangle,
} from "recharts"
import type { LayoutType } from "recharts/types/util/types"
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

export const description = "A bar chart with an active bar"

const chartData = [
  { browser: "chrome", visitors: 187 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 275 },
  { browser: "edge", visitors: 173 },
  { browser: "other", visitors: 90 },
]

const maxvalue = Math.max(...chartData.map((item) => item.visitors))

const NewChartData = chartData.map((item) => ({
  ...item,
  fill: item.visitors === maxvalue ? "url(#indigoGradient)" : "var(--secondary)",
}))

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Deepseek", color: "var(--chart-2)" },
  firefox: { label: "Chatgpt", color: "var(--chart-3)" },
  edge: { label: "Claude", color: "var(--chart-4)" },
  other: { label: "Other", color: "var(--chart-5)" },
} satisfies ChartConfig

export function GradientMixedHorizontalBarChart({ layout = "vertical" }: { layout?: LayoutType }) {
  return (
    <Card className="border-none rounded-none">
      <CardHeader>
        <CardTitle>Bar Chart - Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            layout={layout}
            data={NewChartData}
            margin={{ left:5 }}
          >
            <CartesianGrid vertical={false} horizontal = {false} />
            <XAxis type="number" dataKey="visitors" hide />
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />

            {/* Gradients */}
            <defs>
    
              <linearGradient id="indigoGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="96%" stopColor="#5C5CFF" />
              </linearGradient>
            </defs>

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Bar
              dataKey="visitors"
        
              shape={(props: any) => {
                const { x, y, width, height, payload } = props
                return (
                  <Rectangle
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={payload.fill}
                    rx={4}
                    ry={4}
                  />
                )
              }}
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
  )
}
