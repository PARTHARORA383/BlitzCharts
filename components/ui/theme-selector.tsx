"use client"
import { useTheme } from "next-themes"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { useEffect, useState } from "react"

const baseThemes = ["default", "amethyst" ]

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted || !theme) return null

  const isDark = theme.endsWith("-dark")


  return (
    <Select
      value={theme.replace("-light", "").replace("-dark", "")}
      onValueChange={(newBaseTheme: string) =>
        setTheme(`${newBaseTheme}-${isDark ? "dark" : "light"}`)
      }
    >
      <SelectTrigger className="w-[180px]">
        Theme
      </SelectTrigger>
      <SelectContent>
        {baseThemes.map((t) => (
          <SelectItem key={t} value={t}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
