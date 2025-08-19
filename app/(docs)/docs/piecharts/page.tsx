"use client";
// import ChartDisplay from "@/app/utils/chart-display";
// import { ChartRenderGrid } from "@/app/utils/chart-render-grid";
// import { ChartPieDonut } from "@/charts/piecharts/donut-piechart";
// import { HighlightPiechart } from "@/charts/piecharts/highlight-piechart";
// import  {PieChart3D}  from "@/charts/piecharts/three";


export default function PieChartHome (){

  const baseUrl = `https://blitz-charts.vercel.app/chart`
  const clicommand = `npx shadcn@latest add ${baseUrl}`


  const components = [
    // <ChartDisplay children = {<HighlightPiechart/>} component = {<HighlightPiechart/>} charttype="Moving-Stroke" jsoncontent= {""} clicommand={`${clicommand}/intersection-areachart.json`}className="w-full"/>,

  ]

  return(
    <div className="w-full max-w-9xl">
      {/* <ChartRenderGrid children={components} heading="Pie Charts"/> */}
    </div>
  )
}