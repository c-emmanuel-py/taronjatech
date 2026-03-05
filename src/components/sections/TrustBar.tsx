import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'

const trustChips = [
  'trustBar.quality',
  'trustBar.security',
  'trustBar.scalability',
  'trustBar.transparency',
  'trustBar.support',
  'trustBar.documentation',
] as const

export function TrustBar() {
  const { t } = useI18n()

  return (
    <section className="border-y border-gray-200 bg-white py-6" aria-label="Garantías">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {trustChips.map((key) => (
              <span
                key={key}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {t(key)}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-600 max-w-xl">
            {t('trustBar.guarantees')}
          </p>
        </div>
      </Container>
    </section>
  )
}
