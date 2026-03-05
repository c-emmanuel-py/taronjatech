import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react'
import { type Lang, t as translate } from './translations'

type LanguageContextValue = {
  language: Lang
  setLanguage: (lang: Lang) => void
  t: (key: string) => string
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es'
    const stored = localStorage.getItem('taronjatech-lang') as Lang | null
    const lang = stored === 'en' || stored === 'es' ? stored : 'es'
    document.documentElement.lang = lang === 'es' ? 'es' : 'en'
    return lang
  })

  const setLanguage = useCallback((lang: Lang) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('taronjatech-lang', lang)
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'es' ? 'es' : 'en'
    }
  }, [])

  const t = useCallback((key: string) => translate(language, key), [language])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
