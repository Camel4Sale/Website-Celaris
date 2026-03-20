import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function Kontakt() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-2xl"
          >
            <span className="font-label text-secondary-container font-bold uppercase tracking-widest text-sm mb-4 block">
              Kontakt
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
              Lassen Sie uns{' '}
              <span className="text-secondary-container">sprechen.</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-lg">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir freuen uns auf
              Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
