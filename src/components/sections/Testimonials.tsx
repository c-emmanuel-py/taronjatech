import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const { t } = useI18n()

  return (
    <Section id="testimonials" className="bg-gray-50" ariaLabel={t('testimonials.title')}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('testimonials.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id}>
              <p className="text-gray-700 italic">&ldquo;{t(item.quoteKey)}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-gray-900">{t(item.roleKey)}</p>
              <p className="text-sm text-gray-500">{t(item.industryKey)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
