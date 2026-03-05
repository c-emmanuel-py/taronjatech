import { useI18n } from '@/i18n/useI18n'
import { scrollToId } from '@/utils/scroll'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { services, categoryKeyMap, type ServiceCategory } from '@/data/services'
import sectionDivider from '@/assets/section-divider.svg'

export function Services() {
  const { t } = useI18n()

  const categories: ServiceCategory[] = ['A', 'B', 'C', 'D']

  return (
    <Section id="services" ariaLabel={t('services.title')}>
      <img
        src={sectionDivider}
        alt=""
        className="w-full h-auto opacity-90 object-cover"
        aria-hidden
      />
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('services.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {categories.map((cat) => {
          const items = services.filter((s) => s.category === cat)
          if (items.length === 0) return null
          return (
            <div key={cat} className="mb-12 last:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t(categoryKeyMap[cat])}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <Card key={service.id} className="flex flex-col">
                    <h4 className="font-semibold text-gray-900">
                      {t(service.titleKey)}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 flex-1">
                      {t(service.descKey)}
                    </p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
                      {service.deliverableKeys.map((dk) => (
                        <li key={dk}>{t(dk)}</li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 w-fit"
                      onClick={() => {
                        scrollToId('contact')
                        const select = document.querySelector<HTMLSelectElement>('[name="service"]')
                        if (select) {
                          select.value = service.id
                          select.dispatchEvent(new Event('change', { bubbles: true }))
                        }
                      }}
                    >
                      {t('services.ctaCard')}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )
        })}
      </Container>
    </Section>
  )
}
