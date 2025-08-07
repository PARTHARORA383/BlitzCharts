import { CLIBlock } from "@/components/ui/chart-code-block/code-block";
import Link from "next/link";

export default function Prerequisites() {
  return (
    <div className="flex flex-col mb-8">
      {/* Step 1 */}
      <div className="max-w-3xl mx-12 px-6 py-8 flex items-start gap-4">

        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-shadow-popover">Installation</h1>
          <p className="text-[17px] text-foreground/80 mt-2">
            Just install the following libraries to get started
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="max-w-3xl mx-12 px-6 flex items-start gap-4">
        <div className="text-2xl font-bold text-muted-foreground">
        1.

        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-shadow-popover">Create a Next Js Project</h1>
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            The quickest way to create a new Next.js app is using create-next-app, which sets up everything automatically for you. To create a project, run:
          </p>

          <CLIBlock text="  npx create-next-app@latest" />

          <div className="text-[17px] text-foreground/80 mt-4 mb-4">
            On installation, you'll see the following prompts:
          </div>

          <CLIBlock
            text={`  What is your project named? my-app\n
  Would you like to use TypeScript? No / Yes\n
  Would you like to use ESLint? No / Yes\n
  Would you like to use Tailwind CSS? No / Yes\n
  Would you like your code inside a \`src/\` directory? No / Yes\n
  Would you like to use App Router? (recommended) No / Yes\n
  Would you like to use Turbopack for \`next dev\`?  No / Yes\n
  Would you like to customize the import alias (\`@/*\` by default)? No / Yes\n
  What import alias would you like configured? @/*`} />

          <div className="text-[17px] text-foreground/80 mt-4 mb-4">
            Open the app using 
          </div>
          <CLIBlock text="  cd my-app" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="max-w-3xl mx-12 px-6 mt-8 flex items-start gap-4">
        <div className="text-2xl font-bold text-muted-foreground">2.</div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-shadow-popover">Install Dependencies</h1>
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            Install these Dependencies to get started with BlitzCharts
          </p>
          <CLIBlock text="  npm install recharts motion" />
        </div>
      </div>

      {/* Step 4 */}
      <div className="max-w-3xl mx-12 px-6 mt-8 flex items-start gap-4">
        <div className="text-2xl font-bold text-muted-foreground">3.</div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-shadow-popover">Initialize Shadcn UI</h1>
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            Add these shadcn components
          </p>
          <CLIBlock text="  npx shadcn@latest init" />
        </div>
      </div>

      {/* Step 5 */}
      <div className="max-w-3xl mx-12 px-6 mt-8 flex items-start gap-4">
        <div className="text-2xl font-bold text-muted-foreground">4.</div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-shadow-popover">Add Shadcn components</h1>
          <p className="text-[17px] text-foreground/80 mb-6 mt-2">
            Add these shadcn components
          </p>
          <CLIBlock text="  npx shadcn@latest add card chart" />
        </div>
      </div>

      {/* Step 6 */}
      <div className="max-w-3xl mx-12 px-6 mt-8 flex items-start gap-4">
        <div className="text-2xl font-bold text-muted-foreground">5.</div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-shadow-popover">You are all set</h1>
          <div className="text-[17px] text-foreground/80 mt-2 mb-4">
            Run your app using the following command
          </div>
          <CLIBlock text="  npm run dev" />
        </div>
      </div>
    </div>
  )
}
