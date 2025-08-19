"use client"
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus , atomOneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { CopyToClipboard } from "./copy-to-clipboard";
import { useTheme } from "next-themes";


export default function CodeBlock({ code }: { code: string }) {
 
  const{theme , setTheme} = useTheme();


  return (
    <div className=" relative max-h-[450px] overflow-y-scroll overflow-x-scroll rounded-lg scrollbar-hide mx-auto ">

    <SyntaxHighlighter
      language="tsx"
      style={theme?.endsWith("dark") ? vscDarkPlus : atomOneLight}
      wrapLongLines
      customStyle={{
        borderRadius: "0.5rem",
      }}   
       codeTagProps={{
    style: { fontSize: "0.95rem" } 
  }}
      >
      {code} 
    </SyntaxHighlighter>

    <CopyToClipboard code={code}/>
      </div>
  );
}

export function CLIBlock ({text} : {text : string}){

  return(
    <div className=" relative border-[3px] border-dashed shadow-sm rounded-md bg-border/40 ">

      <CopyToClipboard code={text} position="top-1.5 right-8 " width="w-4.5" height="h-4.5"/>
      <div className="w-full relative  border-b-2 text-muted-foreground pl-2 pt-2 pb-2 text-sm ">CLI
      </div>
      <div className="text-foreground lg:max-w-3xl pl-4 pt-2 pr-2 pb-2 whitespace-pre-wrap">
       {text.split('\n').map((line , index)=>(
        <div key={index} >
          {line}
        </div>
       ))}
      </div>

    </div>
  )
}
