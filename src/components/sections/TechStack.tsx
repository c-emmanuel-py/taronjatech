import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { techStack, type TechCategory } from '@/data/techStack'
import techBg from '@/assets/tech-bg.svg'

const categoryOrder: TechCategory[] = [
  'frontend',
  'mobile',
  'backend',
  'db',
  'devops',
  'testing',
  'cloud',
]

const categoryKeyMap: Record<TechCategory, string> = {
  frontend: 'techStack.frontend',
  mobile: 'techStack.mobile',
  backend: 'techStack.backend',
  db: 'techStack.db',
  devops: 'techStack.devops',
  testing: 'techStack.testing',
  cloud: 'techStack.cloud',
}

export function TechStack() {
  const { t } = useI18n()

  const byCategory = categoryOrder.map((cat) => ({
    category: cat,
    label: t(categoryKeyMap[cat]),
    items: techStack.filter((item) => item.category === cat),
  }))

  return (
    <Section
      id="techstack"
      className="relative min-h-[100vh] overflow-hidden bg-[#0B0D12] py-16 sm:py-20 lg:py-24 flex flex-col justify-center"
      ariaLabel={t('techStack.title')}
      dataTheme="dark"
    >
      <SectionBackground
        src={techBg}
        opacity={0.65}
        showOverlay
        overlayVariant="strong"
        className="animate-breathing"
      />
      <Container className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t('techStack.title')}
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            {t('techStack.subtitle')}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {byCategory.map(
            ({ category, label, items }) =>
              items.length > 0 && (
                <div
                  key={category}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-300 mb-2">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-md bg-white/10 border border-white/10 pl-1.5 pr-2.5 py-1.5 text-sm text-gray-200"
                      >
                        <img
                          src={item.logo}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5 shrink-0"
                        />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </Container>
    </Section>
  )
}
