import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";


interface ChartCodePreviewProps{
  name : string,
  children : React.ReactNode,
  code : string
}

export default function ChartCodeSheet({
  children 
}:ChartCodePreviewProps){

  return (
    <Sheet >
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="">
        <SheetHeader>
          <SheetTitle>Code</SheetTitle>
          <SheetDescription>
            Get the code of your favourite chart
          </SheetDescription>
        </SheetHeader>

        
      </SheetContent>
    </Sheet>

  )
}