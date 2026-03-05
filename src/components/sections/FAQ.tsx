import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { faqs } from '@/data/faqs'
import { cn } from '@/utils/cn'

export function FAQ() {
  const { t } = useI18n()
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <Section id="faq" ariaLabel={t('faq.title')}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('faq.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>
        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-lg border border-gray-200 bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  {t(faq.questionKey)}
                  <span
                    className={cn(
                      'ml-2 shrink-0 text-gray-500 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={cn(
                    'border-t border-gray-100 overflow-hidden transition-all',
                    isOpen ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <p className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                    {t(faq.answerKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
