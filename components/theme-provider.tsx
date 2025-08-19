"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// @ts-ignore
import { type ThemeProviderProps } from "next-themes/dist/types"
import { usePathname } from "next/navigation"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()

  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="default-light"
      enableSystem={true}
      disableTransitionOnChange={true}
      storageKey="blitzcharts-theme"
      // Only force light on the root route "/"
      forcedTheme={pathname === "/" ? "default-light" : undefined}
      // @ts-ignore
      themes={[
        "default-light", "default-dark",
        "amethyst-light", "amethyst-dark",
        "bubblegum-light", "bubblegum-dark",
        "supabase-light", "supabase-dark",
      ]}
    >
      {children}
    </NextThemesProvider>
  )
}
