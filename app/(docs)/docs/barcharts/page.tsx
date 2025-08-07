"use client"

import ChartDisplay from "@/app/utils/chart-display";
import { GradientMixedBarChart } from "@/charts/barcharts/gradient-bar/gradient-mixed-barchart";
import { GradientMixedHorizontalBarChart } from "@/charts/barcharts/gradient-bar/gradient-mixed-horizontal-barchart";
import { HoverGlowBarChart } from "@/charts/barcharts/hover-glow/hover-glow-barchart";
import HoverGlowHorizontalBarChart from "@/charts/barcharts/hover-glow/hover-glow-horizontal-barchart";
import { HoverGlowSimpleBarChart } from "@/charts/barcharts/hover-glow/hover-glow-simple-barchart";
import { LiquidFillBarchart } from "@/charts/barcharts/liquid-effect-bar/liquid-fill-barchart";
import HoverGlowBarChartJson from "@/public/chart/hover-glow-barchart.json"
import HoverGlowHorizontalBarChartJson from "@/public/chart/hover-glow-horizontal-barchart.json";
import HoverGlowSimpleBarChartJson from "@/public/chart/hover-glow-simple-barchart.json"
import LiquidFillBarChartJson from "@/public/chart/liquid-fill-barchart.json"
import GradientMixedBarChartJson from "@/public/chart/gradient-mixed-barchart.json"
import { LiquidHoverBarChart } from "@/charts/barcharts/liquid-effect-bar/liquid-hover-barchart";
import { LiquidFillHorizontalBarchart } from "@/charts/barcharts/liquid-effect-bar/liquid-fil-horizontal-barchart";


export default function BarchartHome () {

  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`


  return <div className="max-w-9xl ">

    <div className=" relative text-2xl lg:ml-6 lg:mt-6 mt-6 mr-6 lg:mr-6  text-foreground font-semibold  border-[1px] ">
      <div className="h-full w-full bg-[var(--background-custom)] dark:bg-[var(--sidebar-custom)] relative text-muted-foreground ">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      `,
          }}
        />
        <p className="p-2 text-foreground">Bar charts</p>
      </div>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full pr-6 lg:pr-12 lg:ml-4 mb-8">

      <ChartDisplay component={<LiquidFillBarchart />} children={<LiquidFillBarchart />} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Liquid Fill" className="w-full " clicommand={`${clicommand}/liquid-fill-barchart.json`} />

      <ChartDisplay component={<LiquidHoverBarChart />} children={<LiquidHoverBarChart />} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Hover me" className=" w-full " clicommand={`${clicommand}/liquid-fill-barchart.json`} />

      <ChartDisplay component={<LiquidFillHorizontalBarchart />} children={<LiquidFillHorizontalBarchart />} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Horizontal Fill" className=" w-full " clicommand={`${clicommand}/liquid-fill-barchart.json`} />

    </div>



    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-full pr-6 lg:pr-12 lg:ml-4 mb-8">

      <ChartDisplay component={<HoverGlowBarChart />} children={<HoverGlowBarChart />} jsoncontent={HoverGlowBarChartJson?.files[0].content} charttype="Barchart" className="w-full" clicommand=
        {`${clicommand}/hover-glow-barchart.json`} />

      <ChartDisplay component={<HoverGlowHorizontalBarChart />} children={<HoverGlowHorizontalBarChart />} jsoncontent={HoverGlowHorizontalBarChartJson?.files[0].content} charttype="Barchart - horizontal" className="w-full" clicommand={`${clicommand}/hover-glow-horizontal-barchart.json`} />

      <ChartDisplay component={<HoverGlowSimpleBarChart />} children={<HoverGlowSimpleBarChart />} jsoncontent={HoverGlowSimpleBarChartJson.files[0].content} charttype="Barchart - simple" className="w-full" clicommand={`${clicommand}/hover-glow-simple-barchart.json`} />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-full pr-6 lg:pr-12 lg:ml-4 mb-8">

      <ChartDisplay component={<GradientMixedBarChart />} children={<GradientMixedBarChart />} jsoncontent={GradientMixedBarChartJson.files[0].content} charttype="Barchart" className="w-full" clicommand={`${clicommand}/gradient-mixed-barchart.json`} />

      <ChartDisplay component={<GradientMixedHorizontalBarChart />} children={<GradientMixedHorizontalBarChart layout="vertical" />} jsoncontent={""} charttype="Barchart" className="w-full " clicommand="" />

 


    </div>
  </div>
}