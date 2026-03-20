import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Benefits from '@/components/Benefits'
import ProjectShowcase from '@/components/ProjectShowcase'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Benefits />
      <ProjectShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactForm />
    </>
  )
}
