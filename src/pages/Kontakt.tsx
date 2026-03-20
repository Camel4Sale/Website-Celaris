import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function Kontakt() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="tag tag-accent mb-6">Kontakt</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.05]">
              Lassen Sie uns <span className="text-accent">sprechen.</span>
            </h1>
            <p className="mt-4 text-white/40 text-[17px] leading-relaxed max-w-lg">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
