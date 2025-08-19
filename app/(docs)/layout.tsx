import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import { Topbar } from "@/components/ui/topbar";


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (

    <ThemeProvider attribute="class" enableSystem>
      <Topbar />

      <div className=" mr-4 md:mr-8 lg:mr-16">

        <SidebarProvider>
          <DocsSidebar />
          <SidebarTrigger />
          {children}

        </SidebarProvider>
      </div>
    </ThemeProvider>
  )
}