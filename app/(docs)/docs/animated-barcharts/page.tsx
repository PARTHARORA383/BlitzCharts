"use client"

import ChartDisplay from "@/app/utils/chart-display";
import { HoverGlowBarChart } from "@/charts/barcharts/hover-glow/hover-glow-barchart";
import HoverGlowHorizontalBarChart from "@/charts/barcharts/hover-glow/hover-glow-horizontal-barchart";
import { HoverGlowSimpleBarChart } from "@/charts/barcharts/hover-glow/hover-glow-simple-barchart";

export default function () {



  return <div className="max-w-fit">

    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20 w-full pr-12 lg:ml-4">
      
        <ChartDisplay children={<HoverGlowBarChart />} jsoncontent={""} charttype="Barchart" className=" max-w-md" />
  
   
        <ChartDisplay children={<HoverGlowHorizontalBarChart />} jsoncontent={""}  charttype="Barchart" className="max-w-md" />
      
 
        <ChartDisplay children={<HoverGlowSimpleBarChart />} jsoncontent={""} charttype="Barchart" className="max-w-md" />
      
 
    
    </div>
  </div>
}