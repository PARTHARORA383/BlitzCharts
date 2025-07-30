
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from '@/components/ui/tabs'
import CodeBlock, { CLIBlock } from './code-block'


interface ChartCodeDisplayProps{
  code : string
  component : React.ReactNode,
  clicommand : string
}

export default function ChartCodeDisplay({code , component , clicommand}:ChartCodeDisplayProps) {

  return (

    <Tabs defaultValue="code" className="w-[600px]">
        <CLIBlock text= {clicommand}/>
      <TabsList className='gap-2 mt-4'>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
      <CodeBlock code={code}/>
      </TabsContent>
      <TabsContent className='border-2 rounded-xl overflow-hidden max-h-[450px]' 
      value="preview">{component}</TabsContent>
    </Tabs>
  )
}