"use client"
//@ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//@ts-ignore
import { vscDarkPlus} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "./copy-to-clipboard";


export default function CodeBlock({ code }: { code: string }) {
  return (
    <div className=" relative max-h-[450px] overflow-scroll  rounded-lg scrollbar-hide">

    <SyntaxHighlighter
      language="tsx"
      style={vscDarkPlus}
      wrapLongLines
      customStyle={{
        borderRadius: "0.5rem",
      }}   
       codeTagProps={{
    style: { fontSize: "0.95rem" } // Tailwind equivalent of text-xl
  }}
      >
      {code} {/* Important: it’s a double string, you must parse it */}
    </SyntaxHighlighter>

    <CopyToClipboard code={code}/>
      </div>
  );
}

export function CLIBlock ({text} : {text : string}){

  return(
    <div className=" relative border-2 rounded-md bg-border/40 ">

      <CopyToClipboard code={text} position="top-1.5 right-8 "/>
      <div className="w-full relative  border-b-2 text-muted-foreground pl-2 pt-1 pb-1">CLI
      </div>
      <div className="text-foreground max-w-lg pl-2 pt-1.5 pb-1.5">
        {text}
      </div>

    </div>
  )
}
