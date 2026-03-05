import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/utils/cn'

export function LanguageToggle() {
  const { language, setLanguage } = useI18n()

  return (
    <div
      role="group"
      aria-label="Idioma / Language"
      className="flex rounded-lg border border-gray-200 bg-gray-50 p-0.5"
    >
      <button
        type="button"
        onClick={() => setLanguage('es')}
        className={cn(
          'rounded-md px-2.5 py-1 text-sm font-medium transition-colors',
          language === 'es'
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
          language === 'en'
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
