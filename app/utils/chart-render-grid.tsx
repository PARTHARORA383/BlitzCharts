

interface ChartRenderGridProps{
  children : React.ReactNode[]
}

export function ChartRenderGrid({children}:ChartRenderGridProps){

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full pr-6 lg:pr-12 lg:ml-4 mb-8">
    {children.map((child , index)=>(
      <div key={index}>
      {child}
      </div>
    ))}
    </div>
  )
}