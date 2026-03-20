import { motion } from 'framer-motion'
import { ArrowRight, Phone, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-dark-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-celaris-green/[0.08] via-transparent to-celaris-cyan/[0.05]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-8, 8, -8] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[8%] w-72 h-72 bg-celaris-green/[0.06] rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-[10%] w-96 h-96 bg-celaris-cyan/[0.04] rounded-full blur-[120px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
            Bereit?
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-tight text-white leading-[1.1]">
            Starten Sie jetzt in Ihre
            <br />
            <span className="gradient-text">Energieunabhängigkeit</span>
          </h2>
          <p className="mt-5 text-light-400 text-[17px] max-w-xl mx-auto">
            Kostenloses Angebot in 48h. Persönliche Beratung, Festpreisgarantie
            und regionale Betreuung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2.5 rounded-full bg-celaris-green px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-celaris-green/20 transition-all duration-300 hover:bg-celaris-green-dark hover:shadow-xl hover:shadow-celaris-green/25 active:scale-[0.97]"
          >
            Kostenloses Angebot anfordern
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="tel:+49721XXXXXXX"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/25"
          >
            <Phone className="h-4 w-4" />
            0721 / XXX XXXX
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 text-[13px] text-light-500"
        >
          <Clock className="h-3.5 w-3.5" />
          Antwort innerhalb von 24 Stunden · Kostenlos & unverbindlich
        </motion.div>
      </div>
    </section>
  )
}
