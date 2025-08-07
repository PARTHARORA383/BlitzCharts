import ChartDisplay from "@/app/utils/chart-display";
import { ChartRenderGrid } from "@/app/utils/chart-render-grid";
import { ChartPieSimple } from "@/charts/piecharts/testing";



export default function PieChartHome (){

  const components = [
    <ChartDisplay children = {<ChartPieSimple/>} component = {<ChartPieSimple/>} charttype="Pie" jsoncontent="" clicommand="" className="w-full"/>,
    <ChartDisplay children = {<ChartPieSimple/>} component = {<ChartPieSimple/>} charttype="Pie" jsoncontent="" clicommand="" className="w-full"/>,
    <ChartDisplay children = {<ChartPieSimple/>} component = {<ChartPieSimple/>} charttype="Pie" jsoncontent="" clicommand="" className="w-full"/>,

  ]

  return(
    <div className="max-w-9xl">
      <ChartRenderGrid children={components}/>
    </div>
  )
}