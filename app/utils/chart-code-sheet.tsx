import ChartCodeDisplay from "@/components/ui/chart-code-block/chart-code-display";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


interface ChartCodePreviewProps{
  name : string,
  children : React.ReactNode,
  code : string,
  clicommand  : string,
  component : React.ReactNode,
}

export default function ChartCodeSheet({
  children  , name , code , component , clicommand
}:ChartCodePreviewProps){

  return (
    <Sheet  >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="lg:pl-8 pl-2 pr-2 lg:pr-8 bg-popover">
        <SheetHeader>
          <SheetTitle>
            <div className="text-xl"> 
              {name}
              </div>
              </SheetTitle>
          <SheetDescription>
            Get the code of your favourite chart
          </SheetDescription>
        </SheetHeader>
            <ChartCodeDisplay clicommand= {clicommand} code={code} component = {component}/>
      </SheetContent>
    </Sheet>

  )
}