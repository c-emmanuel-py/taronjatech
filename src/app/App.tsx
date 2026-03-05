import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { Process } from '@/components/sections/Process'
import { TechStack } from '@/components/sections/TechStack'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { SecurityCompliance } from '@/components/sections/SecurityCompliance'
import { SOWPreview } from '@/components/sections/SOWPreview'
import { Team } from '@/components/sections/Team'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { BackToTop } from '@/components/sections/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Industries />
        <Process />
        <TechStack />
        <CaseStudies />
        <SecurityCompliance />
        <SOWPreview />
        <Team />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
