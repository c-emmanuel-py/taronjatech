import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/utils/cn'

type Variant = 'light' | 'dark'

export function LanguageToggle({ variant = 'light' }: { variant?: Variant }) {
  const { language, setLanguage } = useI18n()
  const isDark = variant === 'dark'

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className={cn(
        'flex rounded-lg p-0.5',
        isDark
          ? 'border border-white/25 bg-white/10'
          : 'border border-gray-200 bg-gray-50'
      )}
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={cn(
          'rounded-md px-2.5 py-1 text-sm font-medium transition-colors',
          isDark
            ? language === 'es'
              ? 'bg-white/25 text-white'
              : 'text-gray-300 hover:text-white'
            : language === 'es'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
        )}
        aria-pressed={language === 'es'}
        aria-label="Español"
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={cn(
          'rounded-md px-2.5 py-1 text-sm font-medium transition-colors',
          isDark
            ? language === 'en'
              ? 'bg-white/25 text-white'
              : 'text-gray-300 hover:text-white'
            : language === 'en'
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
        )}
        aria-pressed={language === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
