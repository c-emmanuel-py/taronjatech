import { useI18n } from '@/i18n/useI18n'
import { scrollToId } from '@/utils/scroll'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import heroBg from '@/assets/hero-bg.svg'
import gridOverlay from '@/assets/grid-overlay.svg'

const CALENDLY_PLACEHOLDER = 'https://calendly.com'

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      className="relative min-h-[60vh] flex-1 flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-14"
      aria-label="Introducción"
      data-theme="dark"
    >
      {/* Background: hero-bg.svg */}
      <div
        aria-hidden
        className="absolute inset-0 w-full h-full bg-[#0B0D12]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Grid overlay: opacity 0.25 + light blur */}
      <div
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-25 blur-[1px]"
        style={{
          backgroundImage: `url(${gridOverlay})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Gradient for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#0B0D12]/90 via-[#0B0D12]/50 to-[#0B0D12]/90 pointer-events-none"
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            {t('hero.headline')}
          </h1>
          <p className="mt-4 text-lg text-gray-300 sm:text-xl animate-slide-up" style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}>
            {t('hero.subheadline')}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(CALENDLY_PLACEHOLDER, '_blank', 'noopener,noreferrer')}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:border-white/80"
              onClick={() => scrollToId('contact')}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }} role="list">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float" style={{ animationDelay: '0s' }} aria-hidden />
              {t('hero.bullet1')}
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float" style={{ animationDelay: '0.2s' }} aria-hidden />
              {t('hero.bullet2')}
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-float" style={{ animationDelay: '0.4s' }} aria-hidden />
              {t('hero.bullet3')}
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
