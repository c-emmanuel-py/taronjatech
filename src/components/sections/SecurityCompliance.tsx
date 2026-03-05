import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionBackground } from '@/components/ui/SectionBackground'
import { Card } from '@/components/ui/Card'
import securityBg from '@/assets/security-bg.svg'

const blocks = [
  { titleKey: 'security.sdlc', descKey: 'security.sdlcDesc' },
  { titleKey: 'security.owasp', descKey: 'security.owaspDesc' },
  { titleKey: 'security.observability', descKey: 'security.observabilityDesc' },
  { titleKey: 'security.dataProtection', descKey: 'security.dataProtectionDesc' },
] as const

export function SecurityCompliance() {
  const { t } = useI18n()

  return (
    <Section
      id="security"
      className="relative overflow-hidden bg-[#0B0D12] py-16 sm:py-20 lg:py-24"
      ariaLabel={t('security.title')}
    >
      <SectionBackground src={securityBg} opacity={0.65} showOverlay />
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t('security.title')}
          </h2>
          <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            {t('security.subtitle')}
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map(({ titleKey, descKey }) => (
            <Card
              key={titleKey}
              className="border-white/10 bg-white/5 shadow-none hover:bg-white/[0.08]"
            >
              <h3 className="font-semibold text-white">{t(titleKey)}</h3>
              <p className="mt-2 text-sm text-gray-300">{t(descKey)}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Card className="border-white/10 bg-white/5 shadow-none">
            <h3 className="font-semibold text-white">{t('security.deliverables')}</h3>
            <p className="mt-2 text-sm text-gray-300">{t('security.deliverablesList')}</p>
          </Card>
        </div>
        <div className="mt-6">
          <Card className="border-accent/40 bg-accent/10 shadow-none">
            <h3 className="font-semibold text-white">{t('security.kycReady')}</h3>
            <p className="mt-2 text-sm text-gray-300">{t('security.kycReadyDesc')}</p>
          </Card>
        </div>
      </Container>
    </Section>
  )
}
