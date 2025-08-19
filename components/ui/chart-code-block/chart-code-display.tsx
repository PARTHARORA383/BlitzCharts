
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
  clicommand : string,
  themecli?: string
}

export default function ChartCodeDisplay({code , component , clicommand ,themecli}:ChartCodeDisplayProps) {

  return (

    <Tabs defaultValue="code" className="max-w-3xl w-full">
        <CLIBlock text= {clicommand}/>

      <TabsList className='gap-2 mt-4'>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
      <CodeBlock code={code}/>
      </TabsContent>
      <TabsContent className='border-2 rounded-xl overflow-hidden max-h-[450px] z-50' 
      value="preview">{component}</TabsContent>
    </Tabs>
  )
}