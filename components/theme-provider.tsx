
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
//@ts-ignore
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}
        defaultTheme="default-light"
    attribute="class"
    enableSystem={false}
    disableTransitionOnChange={true}
    storageKey="blitzcharts-theme"
    // @ts-ignore
   themes={[
        "default-light", "default-dark",
        "amethyst-light", "amethyst-dark",
        "bubblegum-light", "bubblegum-dark",
        "supabase-light", "supabase-dark"
      ]}
  
  >{children}</NextThemesProvider>
}
