import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider"
import { Topbar } from "@/components/ui/topbar";


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (

    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Topbar />

      <div className="lg:mr-12 ">
          

        <SidebarProvider>
          <DocsSidebar />
          <SidebarTrigger />
       
          {children}

        </SidebarProvider>
      </div>
    </ThemeProvider>
  )
}