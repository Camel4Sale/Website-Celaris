import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function Kontakt() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-celaris-green/[0.04] rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">Kontakt</span>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight">
              Lassen Sie uns <span className="gradient-text">sprechen</span>
            </h1>
            <p className="mt-4 text-light-400 text-[17px] max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
