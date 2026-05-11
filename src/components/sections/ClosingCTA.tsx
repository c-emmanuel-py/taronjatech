import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { scrollToId } from '@/utils/scroll'

export function ClosingCTA() {
  const { t } = useI18n()

  return (
    <Section id="closing-cta" className="bg-accent py-20" ariaLabel={t('closingCta.headline')}>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-medium text-white md:text-5xl">
            {t('closingCta.headline')}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {t('closingCta.sub')}
          </p>
          <div className="mt-8">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-xl bg-white px-8 py-4 font-medium text-accent hover:bg-white/95"
              onClick={() => scrollToId('contact')}
            >
              {t('closingCta.cta')}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

