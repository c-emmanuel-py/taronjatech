import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { Process } from '@/components/sections/Process'
import { TechStack } from '@/components/sections/TechStack'
import { SecurityCompliance } from '@/components/sections/SecurityCompliance'
import { SOWPreview } from '@/components/sections/SOWPreview'
import { Team } from '@/components/sections/Team'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { BackToTop } from '@/components/sections/BackToTop'

/** Bloque de viewport: min 100vh; opcionalmente une 2 secciones (pequeña + grande). */
function Block({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`min-h-[100vh] flex flex-col ${className}`.trim()}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* Bloque 1: Hero + TrustBar (pequeña) = 100vh */}
        <Block>
          <Hero />
          <TrustBar />
        </Block>

        {/* Bloque 2: Services = 100vh */}
        <Block className="justify-center">
          <Services />
        </Block>

        {/* Bloque 3: Industries = 100vh */}
        <Block className="justify-center">
          <Industries />
        </Block>

        {/* Bloque 4: TechStack = 100vh, fondo oscuro completo */}
        <Block className="justify-center bg-[#0B0D12]">
          <TechStack />
        </Block>

        {/* Bloque 5: Process = 100vh */}
        <Block className="justify-center">
          <Process />
        </Block>

        {/* Bloque 6: SecurityCompliance + SOWPreview (SOW rellena el resto) */}
        <Block>
          <SecurityCompliance />
          <div className="min-h-0 flex-1 flex flex-col justify-center">
            <SOWPreview />
          </div>
        </Block>

        {/* Bloque 7: Team + Testimonials = 100vh */}
        <Block>
          <Team />
          <div className="min-h-0 flex-1 flex flex-col justify-center">
            <Testimonials />
          </div>
        </Block>

        {/* Bloque 8: FAQ = 100vh */}
        <Block className="justify-center">
          <FAQ />
        </Block>

        {/* Bloque 9: Contact = 100vh */}
        <Block className="justify-center">
          <Contact />
        </Block>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
