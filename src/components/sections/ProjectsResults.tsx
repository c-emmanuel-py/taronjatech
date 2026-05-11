import { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { scrollToId } from '@/utils/scroll'
import { projectsShowcase, type ShowcaseProject } from '@/data/projectsShowcase'
import { cn } from '@/utils/cn'

function UserPlaceholder() {
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400"
      aria-hidden
    >
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </div>
  )
}

function ProjectLogo({ src }: { src: string | null }) {
  const [failed, setFailed] = useState(!src)

  if (failed || !src) {
    return <UserPlaceholder />
  }

  return (
    <div className="flex h-14 min-w-[6rem] max-w-[10rem] shrink-0 items-center justify-center">
      <img
        src={src}
        alt=""
        width={112}
        height={56}
        decoding="async"
        className="max-h-11 w-full object-contain object-center"
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  )
}

const BULLET_SUFFIXES = ['b1', 'b2', 'b3', 'b4'] as const

function ProjectSlideCard({ project, t }: { project: ShowcaseProject; t: (key: string) => string }) {
  const prefix = `projectsResults.items.${project.id}`
  return (
    <article
      className={cn(
        'flex h-full min-h-[420px] flex-col rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.06)]',
        'sm:min-h-[440px] sm:p-8'
      )}
    >
      <div className="flex items-start gap-4">
        <ProjectLogo src={project.logoSrc} />
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-lg font-medium text-gray-900">{t(`${prefix}.name`)}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-gray-600">{t(`${prefix}.description`)}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700">
        {BULLET_SUFFIXES.map((suffix) => {
          const key = `${prefix}.${suffix}`
          return (
            <li key={key} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
              <span>{t(key)}</span>
            </li>
          )
        })}
      </ul>
      <figure className="mt-auto rounded-xl border-l-[3px] border-accent bg-gradient-to-br from-orange-500/[0.06] to-violet-500/[0.04] px-4 py-4">
        <blockquote className="text-sm italic leading-relaxed text-gray-800">
          &ldquo;{t(`${prefix}.review`)}&rdquo;
        </blockquote>
        <figcaption className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
          {t('projectsResults.reviewCaption')}
        </figcaption>
      </figure>
    </article>
  )
}

function Chevron({ className, direction }: { className?: string; direction: 'left' | 'right' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  )
}

const NAV_BTN_CLASS =
  'flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition hover:border-accent/40 hover:bg-gray-50 hover:text-accent focus-visible:outline focus-visible:ring-2 focus-visible:ring-accent'

const AUTOPLAY_MS = 7000
const SWIPE_THRESHOLD_PX = 48

export function ProjectsResults() {
  const { t } = useI18n()
  const total = projectsShowcase.length
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [hoverPause, setHoverPause] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total)
  }, [total])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion || hoverPause) return
    const id = window.setInterval(goNext, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [reduceMotion, hoverPause, goNext])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (dx > SWIPE_THRESHOLD_PX) goPrev()
    else if (dx < -SWIPE_THRESHOLD_PX) goNext()
  }

  return (
    <Section id="projects-results" className="bg-white" ariaLabel={t('projectsResults.aria')}>
      <Container>
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{t('projectsResults.kicker')}</p>
          <h2 className="mt-3 text-balance text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            {t('projectsResults.title')}
          </h2>
          <p className="mt-4 text-pretty text-base text-gray-600 sm:text-lg">{t('projectsResults.subtitle')}</p>
        </header>

        <div
          className="relative mx-auto max-w-3xl px-11 sm:px-14"
          onMouseEnter={() => setHoverPause(true)}
          onMouseLeave={() => setHoverPause(false)}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={t('projectsResults.aria')}
            tabIndex={0}
            className="rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                goPrev()
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                goNext()
              }
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                id="projects-slideshow-track"
                className={cn(
                  'flex',
                  !reduceMotion && 'transition-transform duration-500 ease-out motion-reduce:transition-none'
                )}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {projectsShowcase.map((project: ShowcaseProject, slideIndex: number) => (
                  <div
                    key={project.id}
                    className="w-full shrink-0 px-1 sm:px-2"
                    aria-hidden={slideIndex !== index}
                  >
                    <ProjectSlideCard project={project} t={t} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            className={cn(
              NAV_BTN_CLASS,
              'absolute left-0 top-1/2 z-10 -translate-x-1 -translate-y-1/2 sm:-translate-x-3'
            )}
            aria-controls="projects-slideshow-track"
            aria-label={t('projectsResults.slideshowPrev')}
          >
            <Chevron className="h-5 w-5" direction="left" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className={cn(
              NAV_BTN_CLASS,
              'absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3'
            )}
            aria-controls="projects-slideshow-track"
            aria-label={t('projectsResults.slideshowNext')}
          >
            <Chevron className="h-5 w-5" direction="right" />
          </button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2" role="group" aria-label={t('projectsResults.aria')}>
          {projectsShowcase.map((project: ShowcaseProject, i: number) => (
            <button
              key={project.id}
              type="button"
              aria-current={i === index ? 'true' : undefined}
              aria-label={`${i + 1} / ${total}`}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              )}
            />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-gray-200 bg-gray-50/80 px-6 py-10 text-center shadow-sm sm:mt-16 sm:px-10">
          <p className="text-xl font-medium text-gray-900 sm:text-2xl">{t('projectsResults.ctaTitle')}</p>
          <div className="mt-6">
            <Button variant="primary" size="lg" className="rounded-xl px-8 shadow-md" onClick={() => scrollToId('contact')}>
              {t('projectsResults.ctaButton')}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
