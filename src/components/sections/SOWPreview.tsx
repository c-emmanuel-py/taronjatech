import { useI18n } from '@/i18n/useI18n'
import { getSowContent } from '@/data/sowTemplate'
import { downloadFile } from '@/utils/download'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { Button } from '@/components/ui/Button'
import sowBg from '@/assets/sow-bg.svg'

const items = [
  'sow.scope',
  'sow.deliverables',
  'sow.timeline',
  'sow.responsibilities',
  'sow.assumptions',
  'sow.acceptance',
  'sow.support',
] as const

export function SOWPreview() {
  const { t, language } = useI18n()

  const handleDownload = () => {
    const content = getSowContent(language)
    const filename =
      language === 'es'
        ? 'TaronjaTech_SOW_Sample_ES.md'
        : 'TaronjaTech_SOW_Sample_EN.md'
    downloadFile(filename, content, 'text/markdown;charset=utf-8')
  }

  return (
    <Section
      id="sow"
      className="relative overflow-hidden bg-[#0B0D12] py-16 sm:py-20 lg:py-24"
      ariaLabel={t('sow.title')}
    >
      <SectionBackground src={sowBg} opacity={0.65} showOverlay />
      <Container className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t('sow.title')}
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            {t('sow.subtitle')}
          </p>
        </div>
        <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <ul className="space-y-2 text-sm text-gray-300">
            {items.map((key) => (
              <li key={key} className="flex items-start gap-2">
                <span className="text-accent font-medium shrink-0">•</span>
                {t(key)}
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            size="md"
            className="mt-6 w-full sm:w-auto"
            onClick={handleDownload}
          >
            {t('sow.download')}
          </Button>
        </div>
      </Container>
    </Section>
  )
}
