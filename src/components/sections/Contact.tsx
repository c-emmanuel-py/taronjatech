import { useState, useRef, useEffect } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Toast } from '@/components/ui/Toast'
import { services } from '@/data/services'

const WHATSAPP_URL = 'https://wa.me/18293081609'
const EMAIL = 'admin@taronjats.com'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [preselectedService, setPreselectedService] = useState<string>('')
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#contact' && selectRef.current) {
      const params = new URLSearchParams(window.location.search)
      const service = params.get('service')
      if (service && services.some((s) => s.id === service)) {
        setPreselectedService(service)
        selectRef.current.value = service
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setToast({ message: t('contact.success'), type: 'success' })
    ;(e.target as HTMLFormElement).reset()
    setPreselectedService('')
    setStatus('idle')
  }

  return (
    <Section id="contact" ariaLabel={t('contact.title')}>
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {t('contact.title')}
            </h2>
            <p className="mt-2 text-gray-600">{t('contact.subtitle')}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.name')}
              </label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t('contact.name')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.email')}
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t('contact.email')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.company')}
              </label>
              <Input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={t('contact.company')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.service')}
              </label>
              <Select
                id="contact-service"
                name="service"
                ref={selectRef}
                defaultValue={preselectedService}
                disabled={status === 'loading'}
                aria-label={t('contact.service')}
              >
                <option value="">{t('ui.selectService')}</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {t(s.titleKey)}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('contact.message')}
              </label>
              <Textarea
                id="contact-message"
                name="message"
                required
                placeholder={t('contact.message')}
                disabled={status === 'loading'}
                rows={4}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('contact.sending') : t('contact.send')}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm font-medium text-gray-700">
            {t('contact.orContact')}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
            >
              {t('contact.whatsapp')}
            </Button>
            <a href={`mailto:${EMAIL}`}>
              <Button variant="outline" size="md">
                {t('contact.emailLabel')}: {EMAIL}
              </Button>
            </a>
          </div>
        </div>
      </Container>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Section>
  )
}
