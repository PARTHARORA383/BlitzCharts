
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


  return <div className={cn("relative bg-border/0 border-[2px]  border-muted shadow-xl rounded-lg  overflow-hidden ",
    
    className
  )}>
<div className="flex items-center justify-between gap-2 px-4 py-2 ">
  <span className="truncate">{charttype}</span>

  <ChartCodeSheet
    clicommand={clicommand}
    component={component}
    name={charttype}
    code={code}
  >
    <Button
      variant="outline"
      size="sm"
      className="h-[clamp(1.5rem,1.8vw,1.75rem)] px-2 font-medium"
    >
      View Code
    </Button>
  </ChartCodeSheet>
</div>




    <div className="w-full border-[1px] border-border"></div>
      {children}

  </div>
}

