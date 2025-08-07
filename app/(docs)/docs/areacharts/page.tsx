"use client"

import ChartDisplay from "@/app/utils/chart-display"
import { ChartRenderGrid } from "@/app/utils/chart-render-grid"
import { IntersectionAreaChart } from "@/charts/areacharts/intersection-areachart"
import { WovenPattern } from "@/components/ui/pattern"
import IntersectionAreaChartJson from "@/public/chart/intersection-areachart.json"


export default function AreaChartHome (){


  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`


  const components = [
    <ChartDisplay children = {<IntersectionAreaChart/>} component = {<IntersectionAreaChart/>} charttype="Area" jsoncontent= {IntersectionAreaChartJson.files[0].content} clicommand={`${clicommand}/intersection-areachart.json`}className="w-full"/>,
  ]

  return(
    <div className="max-w-9xl">

          <div className=" relative text-2xl lg:ml-6 lg:mt-6 mt-6 mr-6 lg:mr-6  text-foreground font-semibold  border-[1px] ">
            <div className="h-full w-full bg-[var(--background-custom)] dark:bg-[var(--sidebar-custom)] relative text-muted-foreground ">
              <WovenPattern/>
              <p className="p-2 text-foreground">Area Charts</p>
            </div>
          </div>
      

      <ChartRenderGrid children={components}/>
    </div>
  )
}