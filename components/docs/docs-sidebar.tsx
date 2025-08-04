"use client"

import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "../ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { blitzFont } from "../ui/typography";
import path from "path";

const GettingStarted = [
  {
    title: "Introduction",
    url: "introduction",

  },
  {
    title: "Prerequisites",
    url: "prerequisites",

  },

]

const Charts = [
  {
    title: "Barcharts",
    url: "barcharts"
  },
  {
    title: "AreaCharts",
    url: "barcharts"
  },
  {
    title: "PieCharts",
    url: "barcharts"
  },
  {
    title: "Histograms",
    url: "barcharts"
  }
]




export function DocsSidebar() {

  const pathname = usePathname()

  return (

    <Sidebar className="border-none ">
      <SidebarContent className="lg:pl-12 pt-20 bg-[var(--background-custom)] dark:bg-[var(--sidebar-custom)]">

        <SidebarHeader> </SidebarHeader>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[15px]">Getting Started</SidebarGroupLabel>
          <SidebarMenu>
            {GettingStarted.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                isActive ={pathname.endsWith(item.url)}
                className={cn("text-[15px]")} asChild>
                  
                  <a href={item.url}>

                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>

              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[16px]">Charts </SidebarGroupLabel>
          <SidebarMenu>
            {Charts.map((item) => (
              <SidebarMenuItem className={cn('text-[15px]')} key={item.title}>
                <SidebarMenuButton
                  isActive={pathname.endsWith(item.url)}
                  className={cn(`text-[15px]`)} asChild>
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

