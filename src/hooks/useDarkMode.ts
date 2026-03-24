import { useState, useCallback } from 'react'

export function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  const toggle = useCallback(() => {
    document.documentElement.classList.toggle('dark')
    setIsDark(prev => !prev)
  }, [])

  return { isDark, toggle } as const
}
