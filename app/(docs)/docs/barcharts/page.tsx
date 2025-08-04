"use client"

import ChartDisplay from "@/app/utils/chart-display";
import { GradientMixedBarChart } from "@/charts/barcharts/gradient-bar/gradient-mixed-barchart";
import { GradientMixedHorizontalBarChart } from "@/charts/barcharts/gradient-bar/gradient-mixed-horizontal-barchart";
import { HoverGlowBarChart } from "@/charts/barcharts/hover-glow/hover-glow-barchart";
import HoverGlowHorizontalBarChart from "@/charts/barcharts/hover-glow/hover-glow-horizontal-barchart";
import { HoverGlowSimpleBarChart } from "@/charts/barcharts/hover-glow/hover-glow-simple-barchart";
import{LiquidFillBarchart }from "@/charts/barcharts/liquid-effect-bar/liquid-fill-barchart";
import HoverGlowBarChartJson from "@/public/chart/hover-glow-barchart.json"
import HoverGlowHorizontalBarChartJson from "@/public/chart/hover-glow-horizontal-barchart.json";
import HoverGlowSimpleBarChartJson from "@/public/chart/hover-glow-simple-barchart.json"
import LiquidFillBarChartJson from "@/public/chart/liquid-fill-barchart.json"
import GradientMixedBarChartJson from "@/public/chart/gradient-mixed-barchart.json"
import { LiquidHoverBarChart } from "@/charts/barcharts/liquid-effect-bar/liquid-hover-barchart";
export default function () {

  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`


  return <div className="max-w-7xl min-w-2xl">


    <div className="text-2xl lg:ml-6 mt-12 text-foreground font-semibold">
      Bar charts
    </div>
    <div className="text-[17px] lg:ml-6 text-muted-foreground">
      Integrate these cool bar chart in your project with just one click
    </div>


      <div className="lg:ml-6 mt-6 lg:mt-8"> 
        <div className="text-[17px] font-medium text-foreground">Liquid Effect BarChart</div>
        <div className="text-[17px] text-muted-foreground">The barcharts glow on hover and are perfect for your techy dashboards</div>
      </div>
        
      
    <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full pr-12 lg:ml-4 mb-8">
      <ChartDisplay component={<LiquidFillBarchart />} children={<LiquidFillBarchart/>} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Liquid Fill" className="w-full lg:min-w-sm"  clicommand={`${clicommand}/liquid-fill-barchart.json`}  />

      <ChartDisplay component={<LiquidHoverBarChart />} children={<LiquidHoverBarChart/>} jsoncontent={LiquidFillBarChartJson.files[0].content} charttype="Barchart - Hover me" className=" w-full lg:min-w-sm"  clicommand={`${clicommand}/liquid-fill-barchart.json`}  />
    </div>

      <div className="lg:ml-6 mt-6 lg:mt-8"> 
        <div className="text-[17px] font-medium text-foreground">Hover Glow Barcharts</div>
        <div className="text-[17px] text-muted-foreground">The barcharts glow on hover and are perfect for your techy dashboards</div>
      </div>
    <div className = "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-full pr-12 lg:ml-4 mb-8">


      <ChartDisplay component={<HoverGlowBarChart />} children={<HoverGlowBarChart />} jsoncontent={HoverGlowBarChartJson?.files[0].content} charttype="Barchart" className="lg:max-w-md" clicommand=
        {`${clicommand}/hover-glow-barchart.json`} />


      <ChartDisplay component={<HoverGlowHorizontalBarChart />} children={<HoverGlowHorizontalBarChart />} jsoncontent={HoverGlowHorizontalBarChartJson?.files[0].content} charttype="Barchart - horizontal" className="lg:max-w-md" clicommand={`${clicommand}/hover-glow-horizontal-barchart.json`} />


      <ChartDisplay component={<HoverGlowSimpleBarChart />} children={<HoverGlowSimpleBarChart />} jsoncontent={HoverGlowSimpleBarChartJson.files[0].content} charttype="Barchart - simple" className="lg:max-w-md" clicommand= {`${clicommand}/hover-glow-simple-barchart.json`} />




    </div>


         <div className="lg:ml-6 lg:mt-12"> 
        <div className="text-[17px] font-medium text-foreground">Gradient Barcharts</div>
        <div className="text-[17px] text-muted-foreground">The barcharts have a gradient effect on the one with highest value</div>
      </div>

        <div className = "grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-full pr-12 lg:ml-4 mb-8">


 
      <ChartDisplay component={<GradientMixedBarChart />} children={<GradientMixedBarChart />} jsoncontent={GradientMixedBarChartJson.files[0].content} charttype="Barchart" className="w-full" clicommand={`${clicommand}/gradient-mixed-barchart.json`}/>

      <ChartDisplay component={<GradientMixedHorizontalBarChart />} children={<GradientMixedHorizontalBarChart layout="vertical" />} jsoncontent={""} charttype="Barchart" className="w-full " clicommand=""  />


        </div>
  </div>
}