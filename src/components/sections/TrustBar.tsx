import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { cn } from '@/utils/cn'

const trustChips = [
  'trustBar.quality',
  'trustBar.security',
  'trustBar.scalability',
  'trustBar.transparency',
  'trustBar.support',
  'trustBar.documentation',
] as const

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  )
}

export function TrustBar() {
  const { t } = useI18n()

  return (
    <section className="shrink-0 border-y border-gray-200 bg-gray-50/80 py-5 sm:py-6" aria-label="Garantías" data-theme="light">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Pills como badges de valor, no como tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {trustChips.map((key, i) => (
              <span
                key={key}
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-sm',
                  'transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:text-accent'
                )}
                style={{ opacity: 0, animation: `fadeIn 0.5s ease-out ${i * 0.05}s forwards` }}
              >
                <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                {t(key)}
              </span>
            ))}
          </div>
          {/* Línea de garantías integrada */}
          <p className="flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
              <CheckIcon className="h-4 w-4 text-accent" />
            </span>
            <span>{t('trustBar.guarantees')}</span>
          </p>
        </div>
      </Container>
    </section>
  )
}
