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

export function Industries() {
  const { t } = useI18n()

  return (
    <Section id="industries" ariaLabel={t('industries.title')}>
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('industries.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industryKeys.map((key) => (
            <span
              key={key}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              {t(key)}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          {t('industries.notListed')}
        </p>
      </Container>
    </Section>
  )
}
