import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const steps = [
  { id: 1, titleKey: 'process.step1', descKey: 'process.step1Desc' },
  { id: 2, titleKey: 'process.step2', descKey: 'process.step2Desc' },
  { id: 3, titleKey: 'process.step3', descKey: 'process.step3Desc' },
  { id: 4, titleKey: 'process.step4', descKey: 'process.step4Desc' },
  { id: 5, titleKey: 'process.step5', descKey: 'process.step5Desc' },
] as const

export function Process() {
  const { t } = useI18n()

  return (
    <Section id="process" className="bg-gray-50" ariaLabel={t('process.title')}>
      <Container>
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('process.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="flex justify-between gap-2">
            {steps.map((step, i) => (
              <div key={step.id} className="flex-1 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}>
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div className="flex-1 h-0.5 bg-gray-300" aria-hidden />
                  )}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white transition-transform duration-300 hover:scale-110">
                    {step.id}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5 bg-gray-300" aria-hidden />
                  )}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{t(step.titleKey)}</h3>
                <p className="mt-1 text-sm text-gray-600 max-w-[180px]">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                {step.id}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t(step.titleKey)}</h3>
                <p className="mt-1 text-sm text-gray-600">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
