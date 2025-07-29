"use client"

import { cn } from "@/lib/utils";
import { Sidebar ,SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../ui/sidebar";
import { title } from "process";
import { usePathname } from "next/navigation";


const GettingStarted = [
  {
    title: "Introduction",
    url: "docs/Introduction",
    
  },
  {
    title: "Prerequisites",
    url: "docs/Prequisites",
   
  },

]

const Charts = [
  {
    title : "Barcharts",
    url : "animated-barcharts"
  }
]




export function DocsSidebar(){

const pathname = usePathname()

  return (

    <Sidebar className="bg-transparent">
      <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel className="text-[15px] ">Getting Started</SidebarGroupLabel>
        <SidebarMenu>
        {GettingStarted.map((item)=>(
          <SidebarMenuItem  key={item.title}>
              <SidebarMenuButton className={cn("text-[15px]")}asChild>
                    <a href={item.url}>
                      
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>

          </SidebarMenuItem>
        ))}
        </SidebarMenu>
      </SidebarGroup>

<SidebarSeparator/>        
      <SidebarGroup>
        <SidebarGroupLabel className="text-[16px]">Charts</SidebarGroupLabel>
        <SidebarMenu>
        {Charts.map((item)=>(
            <SidebarMenuItem className={cn('text-[15px]')} key={item.title}>
   <SidebarMenuButton 
   isActive={pathname === item.url} 
   className={cn(`text-[15px] `)}asChild>
                    <a href={item.url}>
                      
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
              
            </SidebarMenuItem>
        ))}


        </SidebarMenu>
      </SidebarGroup>
      </SidebarContent>

    </Sidebar>
  )
}

