import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";




export default function RootLayout({children} : {children : React.ReactNode}){


  return (
  <SidebarProvider>
 <DocsSidebar/>
  
        <SidebarTrigger />
        {children}
 
    </SidebarProvider>
  )
}