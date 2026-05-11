import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'

const industryKeys = [
  'industries.fintech',
  'industries.ecommerce',
  'industries.logistics',
  'industries.realEstate',
  'industries.education',
  'industries.professional',
] as const

function IndustryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
      <path d="M12 12v9M4 7.5l8 4.5 8-4.5" />
    </svg>
  )
}

export function TrustBar() {
  const { t } = useI18n()
  const marqueeItems = [...industryKeys, ...industryKeys]

  return (
    <section className="shrink-0 border-y border-gray-200 bg-[#F8F7F5] py-6 sm:py-7" aria-label="Trust industries" data-theme="light">
      <style>{`
        @keyframes trustMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-xs font-medium tracking-wide text-gray-600">
            {t('trustBar.title')}
          </p>

          {/* Mobile: horizontal continuous marquee */}
          <div className="w-full overflow-hidden md:hidden">
            <div
              className="flex w-max gap-3"
              style={{ animation: 'trustMarquee 22s linear infinite' }}
            >
              {marqueeItems.map((key, i) => (
                <span
                  key={`${key}-${i}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm whitespace-nowrap"
                >
                  <IndustryIcon className="h-3.5 w-3.5 text-gray-500" />
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop: grid */}
          <div className="hidden w-full max-w-4xl grid-cols-3 gap-3 md:grid">
            {industryKeys.map((key) => (
              <span
                key={key}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
              >
                <IndustryIcon className="h-4 w-4 text-gray-500" />
                {t(key)}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
