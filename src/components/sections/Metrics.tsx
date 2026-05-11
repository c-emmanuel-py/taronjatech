import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'

const metricConfig = [
  { value: 30, suffix: '+', labelKey: 'metrics.productsDelivered' },
  { value: 4, suffix: '+', labelKey: 'metrics.yearsMarket' },
  { value: 98, suffix: '%', labelKey: 'metrics.satisfiedClients' },
  { value: 72, suffix: 'h', labelKey: 'metrics.responseTime' },
] as const

export function Metrics() {
  const { t } = useI18n()
  const [values, setValues] = useState<number[]>(metricConfig.map(() => 0))
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return

    const duration = 1200
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setValues(metricConfig.map((metric) => Math.round(metric.value * eased)))

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started])

  return (
    <Section
      id="metrics"
      className="bg-[#0B0D12] py-20"
      ariaLabel={t('metrics.title')}
      dataTheme="dark"
    >
      <Container>
        <section ref={sectionRef} className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 md:grid-cols-4">
          {metricConfig.map((metric, index) => (
            <div
              key={metric.labelKey}
              className="border-white/10 px-5 py-8 text-center [&:not(:nth-child(2n))]:border-r [&:nth-child(-n+2)]:border-b md:[&:not(:last-child)]:border-r md:[&:nth-child(-n+2)]:border-b-0"
            >
              <p className="text-3xl font-medium text-accent">
                {values[index]}
                {metric.suffix}
              </p>
              <p className="mt-2 text-sm text-gray-300">{t(metric.labelKey)}</p>
            </div>
          ))}
        </section>
      </Container>
    </Section>
  )
}

