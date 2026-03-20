import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      {/* Decorative accent line top */}
      <div className="absolute top-0 inset-x-0 glow-line" />

      {/* Large decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display text-[clamp(8rem,20vw,16rem)] font-extrabold text-stone-100 tracking-[-0.05em]">
          SOLAR
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-[-0.04em] leading-[1.05] text-ink">
            Bereit für Ihre
            <br />
            <span className="text-accent">Energieunabhängigkeit?</span>
          </h2>
          <p className="mt-5 text-stone-500 text-[17px] max-w-md mx-auto leading-relaxed">
            Kostenloses Angebot in 48h. Persönliche Beratung, Festpreisgarantie und regionale Betreuung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-ink-soft active:scale-[0.97]"
          >
            Kostenloses Angebot
            <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
          <a
            href="tel:+49721XXXXXXX"
            className="inline-flex items-center gap-2.5 rounded-full border border-stone-200 px-7 py-4 text-[15px] font-medium text-ink transition-all duration-300 hover:border-stone-300 hover:bg-white/60"
          >
            <Phone className="h-4 w-4" />
            0721 / XXX XXXX
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-[12px] text-stone-400"
        >
          Kostenlos & unverbindlich · Antwort in 24h
        </motion.p>
      </div>
    </section>
  )
}
