import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { caseStudies } from '@/data/caseStudies'

const tagKeyMap = {
  backend: 'caseStudies.tagBackend',
  mobile: 'caseStudies.tagMobile',
  devops: 'caseStudies.tagDevOps',
  integrations: 'caseStudies.tagIntegrations',
} as const

export function CaseStudies() {
  const { t } = useI18n()

  return (
    <Section id="cases" className="bg-gray-50" ariaLabel={t('caseStudies.title')}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('caseStudies.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id}>
              <div className="flex flex-wrap gap-2 mb-3">
                {study.tags.map((tag) => (
                  <Badge key={tag}>{t(tagKeyMap[tag])}</Badge>
                ))}
              </div>
              <h3 className="font-semibold text-gray-900">{t('caseStudies.problem')}</h3>
              <p className="mt-1 text-sm text-gray-600">{t(study.problemKey)}</p>
              <h3 className="mt-4 font-semibold text-gray-900">{t('caseStudies.solution')}</h3>
              <p className="mt-1 text-sm text-gray-600">{t(study.solutionKey)}</p>
              <h3 className="mt-4 font-semibold text-gray-900">{t('caseStudies.result')}</h3>
              <p className="mt-1 text-sm text-gray-600">{t(study.resultKey)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
