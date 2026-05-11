import { useLayoutEffect, type ReactNode } from 'react'

function applyLightTheme() {
  if (typeof document === 'undefined') return
  document.documentElement.classList.remove('dark')
}

/** Fija el sitio en modo claro; el modo oscuro no está disponible. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    applyLightTheme()
    try {
      localStorage.removeItem('taronjatech-theme')
    } catch {
      // ignore storage errors
    }
  }, [])

  return <>{children}</>
}
