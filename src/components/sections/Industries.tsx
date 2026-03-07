import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const industryKeys = [
  'industries.fintech',
  'industries.ecommerce',
  'industries.logistics',
  'industries.realEstate',
  'industries.education',
  'industries.professional',
] as const

const icons: Record<string, string> = {
  'industries.fintech': '◆',
  'industries.ecommerce': '◇',
  'industries.logistics': '▸',
  'industries.realEstate': '▢',
  'industries.education': '◈',
  'industries.professional': '◎',
}

export function Industries() {
  const { t } = useI18n()

  return (
    <Section id="industries" ariaLabel={t('industries.title')}>
      {/* Líneas naranjas con efecto de ola (igual que en Services) */}
      <div className="w-full overflow-hidden py-2" aria-hidden>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 180"
          className="h-auto w-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-grad-industries" x1="0" x2="1">
              <stop offset="0" stopColor="#FF6A00" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF6A00" stopOpacity="0.35" />
              <stop offset="1" stopColor="#FF6A00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="animate-wave-float">
            <path
              d="M0 90 C 320 10, 640 170, 960 90 S 1600 10, 1920 90"
              fill="none"
              stroke="url(#wave-grad-industries)"
              strokeWidth="2"
            />
          </g>
          <g className="animate-wave-float-2">
            <path
              d="M0 120 C 320 40, 640 200, 960 120 S 1600 40, 1920 120"
              fill="none"
              stroke="url(#wave-grad-industries)"
              strokeWidth="1"
              opacity="0.7"
            />
          </g>
        </svg>
      </div>
      <Container>
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('industries.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {industryKeys.map((key, i) => (
            <div
              key={key}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:bg-gray-50/50 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + i * 0.05}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent text-lg transition-colors group-hover:bg-accent group-hover:text-white"
                aria-hidden
              >
                {icons[key] ?? '•'}
              </span>
              <span className="text-sm font-medium text-gray-800">
                {t(key)}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-600 max-w-xl mx-auto px-4 py-3 rounded-lg bg-gray-50 border border-gray-100">
          {t('industries.notListed')}
        </p>
      </Container>
    </Section>
  )
}
