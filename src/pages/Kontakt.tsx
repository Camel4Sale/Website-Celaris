import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

export default function Kontakt() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-900 relative noise">
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-celaris-green/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-celaris-green text-sm font-medium tracking-[0.2em] uppercase font-display">Kontakt</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Lassen Sie uns <span className="gradient-text">sprechen</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir freuen uns auf Ihre Nachricht.
            </p>
          </motion.div>
        </div>
      </section>
      <ContactForm />
    </>
  )
}
