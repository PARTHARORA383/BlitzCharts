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
import { WovenPattern } from "@/components/ui/pattern";
import { ChartRenderGrid } from "@/app/utils/chart-render-grid";


export default function BarchartHome() {

  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`



  const charts = [

    <ChartDisplay component={<LiquidFillBarchart />} children={<LiquidFillBarchart />} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Liquid Fill" className="" clicommand={`${clicommand}/liquid-fill-barchart.json`} />,
    <ChartDisplay component={<LiquidHoverBarChart />} children={<LiquidHoverBarChart />} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Hover me" className=" " clicommand={`${clicommand}/liquid-fill-barchart.json`} />,

    <ChartDisplay component={<HoverGlowBarChart />} children={<HoverGlowBarChart />} jsoncontent={HoverGlowBarChartJson?.files[0].content} charttype="Barchart" className="w-full" clicommand=
      {`${clicommand}/hover-glow-barchart.json`} />,

    <ChartDisplay component={<HoverGlowSimpleBarChart />} children={<HoverGlowSimpleBarChart />} jsoncontent={HoverGlowSimpleBarChartJson.files[0].content} charttype="Barchart - simple" className="w-full" clicommand={`${clicommand}/hover-glow-simple-barchart.json`} />,

    <ChartDisplay component={<GradientMixedBarChart />} children={<GradientMixedBarChart />} jsoncontent={GradientMixedBarChartJson.files[0].content} charttype="Barchart" className="w-full" clicommand={`${clicommand}/gradient-mixed-barchart.json`} />,
  ]



  return <div className="w-full max-w-9xl">


  <ChartRenderGrid children={charts} heading="Bar Charts"/>


  </div>
}