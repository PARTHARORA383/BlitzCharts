"use client"

import ChartDisplay from "@/app/utils/chart-display"
import { ChartRenderGrid } from "@/app/utils/chart-render-grid"
import { DottedAreaChart } from "@/charts/areacharts/dotted-disperse-areachart"
import {  SmoothGradientAreaChart } from "@/charts/areacharts/smooth-gradient-areachart"
import { IntersectionAreaChart } from "@/charts/areacharts/intersection-areachart"
import {SplitLineAreaChart } from "@/charts/areacharts/splitline-areachart"
import IntersectionAreaChartJson from "@/public/chart/intersection-areachart.json"
import SplitlineAreaChartJson from "@/public/chart/splitline-areachart.json"
import DottedDisperseAreaChartJson from "@/public/chart/dotted-disperse-areachart.json"
import SmoothGradientAreachartJson from "@/public/chart/smooth-gradient-areachart.json"


export default function AreaChartHome (){


  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`


  const components = [
    <ChartDisplay children = {<IntersectionAreaChart/>} component = {<IntersectionAreaChart/>} charttype="Moving-Stroke" jsoncontent= {IntersectionAreaChartJson.files[0].content} clicommand={`${clicommand}/intersection-areachart.json`}className="w-full"/>,

    <ChartDisplay children = {<SplitLineAreaChart/>} component = {<SplitLineAreaChart/>} charttype="Animated-Reveal" jsoncontent= {SplitlineAreaChartJson.files[0].content} clicommand={`${clicommand}/splitline-areachart.json`}className="w-full"/>,

    <ChartDisplay children = {<DottedAreaChart/>} component = {<DottedAreaChart/>} charttype="Dispersing-Dots" jsoncontent= {DottedDisperseAreaChartJson.files[0].content} clicommand={`${clicommand}/dotted-disperse-areachart.json`}className="w-full"/>,

    <ChartDisplay children = {<SmoothGradientAreaChart/>} component = {<SmoothGradientAreaChart/>} charttype="Smooth-Gradient" jsoncontent= {SmoothGradientAreachartJson.files[0].content} clicommand={`${clicommand}/smooth-gradient-areachart.json`}className="w-full"/>,
  ]

  return(
    <div className="w-full max-w-9xl">
      <ChartRenderGrid children={components} heading="Area Charts"/>
    </div>
  )
}