import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { cn } from '@/utils/cn'
import { services, categoryKeyMap, type ServiceCategory } from '@/data/services'

const categories: ServiceCategory[] = ['A', 'B', 'C', 'D']

function ServiceIcon({ category }: { category: ServiceCategory }) {
  if (category === 'A') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 20h8" />
      </svg>
    )
  }
  if (category === 'B') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="7" cy="7" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="17" cy="17" r="1" />
      </svg>
    )
  }
  if (category === 'C') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M4 20 12 4l8 16" />
        <path d="M8 14h8" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M5 19h14M7 15V9m5 6V5m5 10v-8" />
    </svg>
  )
}

export function Services() {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('A')
  const items = services.filter((s) => s.category === activeCategory)

  return (
    <Section id="services" ariaLabel={t('services.title')}>
      {/* Líneas naranjas con efecto de ola */}
      <div className="w-full overflow-hidden py-2" aria-hidden>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 180"
          className="h-auto w-full opacity-90"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-grad" x1="0" x2="1">
              <stop offset="0" stopColor="#FF6A00" stopOpacity="0" />
              <stop offset="0.5" stopColor="#FF6A00" stopOpacity="0.35" />
              <stop offset="1" stopColor="#FF6A00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g className="animate-wave-float">
            <path
              d="M0 90 C 320 10, 640 170, 960 90 S 1600 10, 1920 90"
              fill="none"
              stroke="url(#wave-grad)"
              strokeWidth="2"
            />
          </g>
          <g className="animate-wave-float-2">
            <path
              d="M0 120 C 320 40, 640 200, 960 120 S 1600 40, 1920 120"
              fill="none"
              stroke="url(#wave-grad)"
              strokeWidth="1"
              opacity="0.7"
            />
          </g>
        </svg>
      </div>
      <Container>
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('services.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Pestañas por categoría */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8"
          role="tablist"
          aria-label={t('services.title')}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              aria-controls={`panel-${cat}`}
              id={`tab-${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200',
                activeCategory === cat
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {t(categoryKeyMap[cat])}
            </button>
          ))}
        </div>

        {/* Contenido de la categoría activa */}
        <div
          key={activeCategory}
          id={`panel-${activeCategory}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory}`}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((service, idx) => (
            <div
              key={service.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.06}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <Card className="group flex h-full flex-col border-gray-200 transition-all duration-200 hover:-translate-y-1 hover:border-accent/30">
                <div className="mb-3">
                  <ServiceIcon category={service.category} />
                </div>
                <h4 className="text-base font-medium text-gray-900">{t(service.titleKey)}</h4>
                <div className="relative mt-2 w-fit">
                  <p className="text-[13px] font-semibold text-accent">→ {t(service.outcomeKey)}</p>
                  <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-accent transition-all duration-200 group-hover:w-full" />
                </div>
                <p className="mt-3 flex-1 text-[13px] text-gray-600">{t(service.descKey)}</p>
                <div className="mt-4">
                  <span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-medium text-gray-600">
                    {t(service.painPointKey)}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
