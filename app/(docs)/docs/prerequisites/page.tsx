import { CLIBlock } from "@/components/ui/chart-code-block/code-block";
import Link from "next/link";


export default function Prerequisites() {


  return (
    <>
      <div className="flex flex-col">

        <div className="max-w-3xl mx-12 px-6 py-8">
          <h1 className="text-3xl font-semibold text-shadow-popover">Prerequisites</h1>

          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            Just install the following libraries to get started
          </p>
        </div>

        <div className="max-w-3xl mx-12 px-6 ">

            
          <h1 className="text-2xl font-semibold text-shadow-popover">Create a Next Js Project</h1>

         
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            The quickest way to create a new Next.js app is using create-next-app, which sets up everything automatically for you. To create a project, run:
          </p>

          <CLIBlock text="npx create-next-app@latest" />

          <div className="text-[17px] text-foreground/80 mt-4 mb-4">
            On installation, you'll see the following prompts:
          </div>

          <CLIBlock text="What is your project named? my-app
         Would you like to use TypeScript? No / Yes
      Would you like to use ESLint? No / Yes
      Would you like to use Tailwind CSS? No / Yes
      Would you like your code inside a `src/` directory? No / Yes
      Would you like to use App Router? (recommended) No / Yes
      Would you like to use Turbopack for `next dev`?  No / Yes
      Would you like to customize the import alias (`@/*` by default)? No / Yes
      What import alias would you like configured? @/*"/>
        </div>

          <div className="max-w-3xl mx-12 px-6 ">
              <h1 className="text-2xl font-semibold text-shadow-popover">Install Recharts</h1>
                  
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
              Install Recharts by running the following command 
              <Link className="underline hover:underline-foreground text-foreground ml-2" href= "https://recharts.org/en-US">Recharts Documentation</Link>
          </p>

          </div>

      </div>
    </>

  )
}