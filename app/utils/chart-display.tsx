
import { cn } from "@/lib/utils"
import ChartCodeSheet from "./chart-code-sheet"
import { Button } from "@/components/ui/button"
interface ChartDisplayProps{
children : React.ReactNode,
component : React.ReactNode,
charttype : string,
className ? : string,
jsoncontent : any,
clicommand  : string

}

export default function ChartDisplay({children , charttype ,className , jsoncontent , component , clicommand} : ChartDisplayProps){

  const code = jsoncontent;


  return <div className={cn("relative bg-border/0 border-2 shadow-lg rounded-lg pt-10 overflow-hidden ",
    
    className
  )}>
    
    <div className="absolute top-2 left-4">{charttype}</div>
    <div className="absolute top-1.5 right-4">
      <ChartCodeSheet clicommand={clicommand} component = {component}  name = {charttype} code={code}>
    <Button size = "sm" className="h-7 bg-transparent text-foreground/90 cursor-pointer text-[13px] transition-colors duration-200 border border-muted-foreground  hover:bg-transparent hover:border-accent-foreground"> View Code</Button>
      </ChartCodeSheet>
    </div>



    <div className="w-full border-[1px] border-border"></div>
      {children}

  </div>
}