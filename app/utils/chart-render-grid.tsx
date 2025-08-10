"use client"

import { WovenPattern } from "@/components/ui/pattern"


interface ChartRenderGridProps{
  children : React.ReactNode[],
  heading?: string
}

export function ChartRenderGrid({children , heading}:ChartRenderGridProps){

  return(<>
      
          <div className=" relative text-2xl lg:ml-6 lg:mt-6 mt-6  text-foreground font-semibold  border-[1px] ">
            <div className="h-full w-full bg-[var(--background-custom)] dark:bg-[var(--sidebar-custom)] relative text-muted-foreground ">
              <WovenPattern/>
              <p className="p-2 text-foreground">{heading}</p>
            </div>
          </div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full lg:ml-4 mb-8">
    {children.map((child , index)=>(
      <div key={index}>
      {child}
      </div>
    ))}
    </div>
    </>
  )
}