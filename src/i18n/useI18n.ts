import { useContext } from 'react'
import { LanguageContext } from './LanguageProvider'
import type { Lang } from './translations'

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx as { language: Lang; setLanguage: (l: Lang) => void; t: (key: string) => string }
}
