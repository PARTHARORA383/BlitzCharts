"use client"

import ChartDisplay from "@/app/utils/chart-display";
import { HoverGlowBarChart } from "@/charts/barcharts/hover-glow/hover-glow-barchart";
import HoverGlowHorizontalBarChart from "@/charts/barcharts/hover-glow/hover-glow-horizontal-barchart";
import { HoverGlowSimpleBarChart } from "@/charts/barcharts/hover-glow/hover-glow-simple-barchart";
import   HoverGlowBarChartJson from "@/public/chart/hover-glow-barchart.json"

export default function () {

const baseUrl = `https://blitz-charts.vercel.app/chart`

  return <div className="max-w-fit">


    <div className="text-2xl lg:ml-8 mt-12 text-foreground font-semibold">
      Bar charts
    </div>
    <div className="text-[17px] lg:ml-8 text-muted-foreground">
      Integrate these cool bar chart in your project with just one click
    </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 w-full pr-12 lg:ml-4">

        <ChartDisplay component= {<HoverGlowBarChart/>} children={<HoverGlowBarChart />} jsoncontent={HoverGlowBarChartJson?.files[0].content} charttype="Barchart" className=" max-w-md" clicommand={`npx shadcn@latest add ${baseUrl}/hover-glow-barchart.json`} />
  
   
        <ChartDisplay component= {<HoverGlowHorizontalBarChart/>} children={<HoverGlowHorizontalBarChart />} jsoncontent={""}  charttype="Barchart" className="max-w-md" clicommand="" />
      
 
        <ChartDisplay component = {<HoverGlowSimpleBarChart/>}children={<HoverGlowSimpleBarChart />} jsoncontent={""} charttype="Barchart" className="max-w-md" clicommand="" />
      
 
    
    </div>
  </div>
}