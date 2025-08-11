
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

    const isDark = theme?.endsWith("-dark")
  const baseTheme = theme?.replace("-light", "").replace("-dark", "")

  return (
    <Button variant="outline" size="icon" onClick={() =>
    setTheme(`${baseTheme}-${isDark ? "light" : "dark"}`)}
  >
      {theme?.endsWith("-light") ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
