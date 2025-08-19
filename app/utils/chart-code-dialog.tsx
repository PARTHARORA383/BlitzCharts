import { Button } from "@/components/ui/button"
import ChartCodeDisplay from "@/components/ui/chart-code-block/chart-code-display"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ChartCodePreviewProps{
  name : string,
  children : React.ReactNode,
  code : string,
  clicommand  : string,
  component : React.ReactNode,
}

export function DialogDemo({children  , name , code , component , clicommand}:ChartCodePreviewProps) {
  return (
    <Dialog>

        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Chart code</DialogTitle>
      
          </DialogHeader>
  
               <ChartCodeDisplay clicommand= {clicommand} code={code} component = {component}/>
         
              <DialogFooter>
            <DialogClose asChild>
             
            </DialogClose>
        
          </DialogFooter>
        </DialogContent>

    </Dialog>
  )
}
