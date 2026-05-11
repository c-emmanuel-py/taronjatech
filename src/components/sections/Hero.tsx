import { useI18n } from '@/i18n/useI18n'
import { scrollToId } from '@/utils/scroll'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

const CALENDLY_PLACEHOLDER = 'https://calendly.com'

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function Hero() {
  const { t } = useI18n()
  const trustItems = t('hero.trust.line').split('·').map((item) => item.trim())
  const headline = t('hero.headline')
  const highlightCandidates = ['producto digital', 'digital product']
  const highlightedHeadline = highlightCandidates.reduce((acc, phrase) => {
    return acc.includes(phrase)
      ? acc.replace(phrase, `<span class="text-accent">${phrase}</span>`)
      : acc
  }, headline)

  return (
    <section
      className="relative min-h-[70vh] flex-1 flex items-center overflow-hidden bg-[#0B0D12] pt-20 pb-12 sm:pt-24 sm:pb-14"
      aria-label="Introducción"
      data-theme="dark"
    >
      <style>{`
        @keyframes heroPulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
      `}</style>

      <div
        aria-hidden
        className="absolute inset-0 h-full w-full bg-[#0B0D12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,106,0,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs font-medium text-accent animate-fade-in-up"
            style={{ animationDelay: '0ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            <span
              className="h-2 w-2 rounded-full bg-green-400"
              style={{ animation: 'heroPulseDot 1.5s ease-in-out infinite' }}
              aria-hidden
            />
            <span>{t('hero.badge')}</span>
          </div>

          <h1
            className="mt-6 text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up"
            style={{ animationDelay: '100ms', opacity: 0, animationFillMode: 'forwards' }}
            dangerouslySetInnerHTML={{ __html: highlightedHeadline }}
          />

          <p
            className="mx-auto mt-5 max-w-2xl text-lg text-gray-400 md:text-xl animate-fade-in-up"
            style={{ animationDelay: '200ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            {t('hero.subheadline')}
          </p>

          <div
            className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row animate-fade-in-up"
            style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full rounded-xl px-8 py-4 text-base font-medium transition-all duration-200 hover:scale-[1.02] md:w-auto"
              onClick={() => window.open(CALENDLY_PLACEHOLDER, '_blank', 'noopener,noreferrer')}
            >
              {t('hero.ctaPrimary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-xl border border-white/20 px-8 py-4 text-base font-medium text-white hover:bg-white/10 hover:border-white/30 md:w-auto"
              onClick={() => scrollToId('contact')}
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-500 animate-fade-in"
            style={{ animationDelay: '400ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            {trustItems.map((item, index) => (
              <div key={item} className="inline-flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-accent" />
                <span>{item}</span>
                {index < trustItems.length - 1 && <span aria-hidden>·</span>}
              </div>
            ))}
          </div>

          <div
            className="mx-auto mt-8 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-4 animate-fade-in-up"
            style={{ animationDelay: '500ms', opacity: 0, animationFillMode: 'forwards' }}
          >
            {([1, 2, 3, 4] as const).map((index) => (
              <div
                key={index}
                className="border-white/10 px-4 py-5 text-center [&:not(:nth-child(2n))]:border-r md:[&:not(:last-child)]:border-r"
              >
                <p className="text-3xl font-medium text-accent">{t(`trustBar.stat${index}.number`)}</p>
                <p className="mt-1 text-sm text-gray-400">{t(`trustBar.stat${index}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
