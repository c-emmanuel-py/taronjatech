import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'
import { type TeamArea, type TeamMember, teamMembers } from '@/data/team'

const areaClasses: Record<TeamArea, string> = {
  leadership: 'bg-[#7F77DD]/15 text-[#2F285F] dark:bg-[#7F77DD]/30 dark:text-violet-100',
  product: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-200',
  talent: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200',
  operations: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200',
  engineering: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200',
}

const areaBorderClasses: Record<TeamArea, string> = {
  leadership: 'hover:border-[#7F77DD]/70',
  product: 'hover:border-teal-400',
  talent: 'hover:border-rose-400',
  operations: 'hover:border-blue-400',
  engineering: 'hover:border-amber-400',
}

type MemberCardProps = {
  member: TeamMember
  onSelect: (member: TeamMember) => void
  t: (key: string) => string
}

function MemberAvatar({ member, size }: { member: TeamMember; size: 'lg' | 'md' | 'sm' }) {
  const sizeClass = size === 'lg' ? 'h-20 w-20' : size === 'md' ? 'h-14 w-14' : 'h-[38px] w-[38px]'
  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full font-medium ${sizeClass} ${member.photo ? 'bg-gray-200 dark:bg-gray-700' : areaClasses[member.area]}`}
      aria-hidden
    >
      {member.photo ? (
        <img src={member.photo} alt="" width={80} height={80} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        member.initials
      )}
    </div>
  )
}

function OperationalCard({ member, onSelect, t }: MemberCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onSelect(member)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(member)
        }
      }}
      className="cursor-pointer rounded-2xl border-l-[2.5px] border-l-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <Card className="rounded-2xl border border-gray-200/80 bg-white/80 p-3 transition-all duration-200 ease-in hover:-translate-y-1 hover:border-accent/30 dark:border-gray-700 dark:bg-gray-900/80">
        <div className="flex items-start gap-3">
          <MemberAvatar member={member} size="sm" />
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-gray-900 dark:text-gray-100">
              {t(member.nameKey)}
            </p>
            <p className="whitespace-normal text-[12px] font-normal leading-tight text-gray-500 dark:text-gray-400">
              {t(member.roleKey)}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {member.skills.slice(0, 3).map((skill) => (
                <span key={skill} className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function Team() {
  const { t } = useI18n()
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const ceo = teamMembers.find((member) => member.level === 1)!
  const cSuite = teamMembers.filter((member) => member.level === 2)
  const operational = teamMembers.filter((member) => member.level === 3)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = wrapperRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="team" ariaLabel={t('team.title')}>
      <Container>
        <style>{`
          @keyframes teamOrbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          @keyframes teamFadeInUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
          .team-operational-bg {
            background-color: #F8F7F5;
            background-image: radial-gradient(circle at 1px 1px, rgba(15,23,42,0.04) 1px, transparent 0);
            background-size: 24px 24px;
          }
          .dark .team-operational-bg { background-image: none; }
        `}</style>

        <div className="text-center mb-10">
          <h2 className="text-[28px] sm:text-4xl font-medium text-gray-900 dark:text-gray-100">
            {t('team.title')}
          </h2>
          <p className="mt-2 text-base text-gray-600 max-w-2xl mx-auto font-normal dark:text-gray-300">
            {t('team.subtitle')}
          </p>
        </div>

        <div ref={wrapperRef} className="mx-auto max-w-6xl space-y-8 sm:space-y-12">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setSelectedMember(ceo)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedMember(ceo)
              }
            }}
            className={`${isVisible ? 'animate-[teamFadeInUp_500ms_ease-out_forwards]' : 'opacity-0'} group mx-auto flex w-full max-w-[460px] cursor-pointer flex-col items-center rounded-3xl border border-gray-200/70 bg-white/85 px-5 py-5 text-center transition-all duration-200 ease-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900/85`}
          >
            <div className="relative mb-3">
              <div
                className="absolute -inset-3 rounded-full border-2 border-dashed border-[#7F77DD]/40"
                style={{ animation: 'teamOrbitSpin 20s linear infinite' }}
                aria-hidden
              />
              <MemberAvatar member={ceo} size="lg" />
            </div>
            <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{t(ceo.nameKey)}</p>
            <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#7F77DD]/10 px-3 py-1 text-xs font-medium text-[#2F285F] dark:bg-[#7F77DD]/30 dark:text-violet-100">
              {t(ceo.roleKey)}
            </span>
            <div className="mt-3 h-px w-full bg-gray-200 dark:bg-gray-700" />
            <p className="mb-3 mt-3 text-center text-[13px] font-normal text-gray-600 dark:text-gray-300">
              {t(ceo.bioKey)}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {ceo.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-orange-500/[0.06] px-2 py-1 text-[11px] font-normal text-gray-700 dark:text-gray-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`mx-auto h-px w-full max-w-[700px] bg-gray-300/80 dark:bg-gray-700 ${isVisible ? 'animate-[teamFadeInUp_500ms_ease-out_forwards]' : 'opacity-0'}`}
            style={{ animationDelay: '150ms', maxWidth: '60px', opacity: 0.3 }}
            aria-hidden
          />

          <div className="mx-auto grid max-w-[700px] grid-cols-2 gap-4 lg:grid-cols-4">
            {cSuite.map((member, idx) => (
              <div
                key={member.id}
                className={isVisible ? 'animate-[teamFadeInUp_500ms_ease-out_forwards] opacity-0' : 'opacity-0'}
                style={{ animationDelay: `${150 + idx * 80}ms` }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedMember(member)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedMember(member)
                    }
                  }}
                  className={`group cursor-pointer rounded-2xl border-[0.5px] border-gray-200/90 bg-white/85 p-[14px] sm:p-5 text-center transition-all duration-200 ease-in md:hover:-translate-y-1 hover:border-[1.5px] hover:shadow-[0_6px_16px_rgba(15,23,42,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900/85 ${areaBorderClasses[member.area]}`}
                >
                  <div className="mx-auto w-fit transition-transform duration-200 group-hover:scale-105">
                    <MemberAvatar member={member} size="md" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-900 dark:text-gray-100">{t(member.nameKey)}</p>
                  <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${areaClasses[member.area]}`}>
                    {t(member.roleKey)}
                  </span>
                  <p className="mt-2 min-h-[40px] text-[11px] font-normal text-gray-500 dark:text-gray-400">
                    {t(member.taglineKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`team-operational-bg rounded-3xl p-5 dark:bg-gray-900/50 ${isVisible ? 'animate-[teamFadeInUp_500ms_ease-out_forwards]' : 'opacity-0'}`}
            style={{ animationDelay: '300ms' }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px flex-1 bg-gray-300/70" />
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                {t('team.operationalTitle')}
              </p>
              <span className="h-px flex-1 bg-gray-300/70" />
            </div>
            <p className="mb-4 text-xs font-normal text-gray-500 dark:text-gray-400">{t('team.operationalMeta')}</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {operational.map((member) => (
                <OperationalCard key={member.id} member={member} onSelect={setSelectedMember} t={t} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        title={selectedMember ? t(selectedMember.nameKey) : undefined}
        className="max-w-2xl overflow-hidden px-6 pb-0 pt-6"
      >
        {selectedMember && (
          <div className="flex flex-col sm:flex-row -mx-6 sm:mt-4">
            <div className="w-full sm:w-64 sm:min-h-[300px] shrink-0 bg-gray-100">
              {selectedMember.photo ? (
                <img
                  src={selectedMember.photo}
                  alt=""
                  width={256}
                  height={300}
                  loading="lazy"
                  className="w-full h-64 sm:h-full sm:min-h-[300px] object-cover object-top"
                />
              ) : (
                <div className="w-full h-64 sm:min-h-[300px] flex items-center justify-center bg-gray-200">
                  <span className="text-4xl font-semibold text-gray-600">{selectedMember.initials}</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 pl-6 pr-6 py-6 sm:py-4 justify-center min-w-0">
              <p className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-medium ${areaClasses[selectedMember.area]}`}>
                {t(selectedMember.roleKey)}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{t(selectedMember.bioKey)}</p>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{t('team.skillsLabel')}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}
