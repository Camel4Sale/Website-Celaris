import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowRight, Play, Shield, Star, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

/* Animated counter hook */
function useAnimatedCounter(target: number, duration = 2) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, target, { duration, ease: 'easeOut' })
    return controls.stop
  }, [count, target, duration])

  return rounded
}

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const rounded = useAnimatedCounter(value)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v.toLocaleString('de-DE')}${suffix}`
    })
    return unsubscribe
  }, [rounded, suffix, prefix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

const trustItems = [
  { icon: Shield, text: 'TÜV-zertifiziert' },
  { icon: Star, text: '4.9 ★ Google Rating' },
  { icon: Zap, text: '100% Festpreisgarantie' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-dark-950 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />

        {/* Gradient orbs */}
        <div className="absolute top-[-20%] right-[-10%] h-[800px] w-[800px] rounded-full bg-celaris-green/[0.04] blur-[150px]" />
        <div className="absolute bottom-[-30%] left-[-15%] h-[600px] w-[600px] rounded-full bg-celaris-cyan/[0.03] blur-[120px]" />

        {/* Subtle radial from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Noise */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,420px] gap-12 lg:gap-16 items-center py-28 lg:py-0">
          {/* Left — Copy */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Live badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-celaris-green/20 bg-celaris-green/[0.06] px-4 py-1.5 text-[13px] font-medium text-celaris-green">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celaris-green opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-celaris-green" />
                </span>
                Jetzt Förderung 2026 sichern — bis zu 10.200 € Zuschuss
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
            >
              Solaranlage vom
              <br />
              <span className="gradient-text">Karlsruher</span> Experten
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-[17px] leading-relaxed text-light-400"
            >
              Maßgeschneiderte Photovoltaik für Ihr Zuhause. Festpreis, schlüsselfertig
              und mit persönlicher Betreuung — von der Planung bis zur Einspeisung.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2.5 rounded-full bg-celaris-green px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-celaris-green/20 transition-all duration-300 hover:bg-celaris-green-dark hover:shadow-xl hover:shadow-celaris-green/25 active:scale-[0.97]"
              >
                Kostenloses Angebot
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <button className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-[15px] font-medium text-white/90 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/25">
                <Play className="h-4 w-4 fill-current" />
                So funktioniert&apos;s
              </button>
            </motion.div>

            {/* Trust items */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              {trustItems.map((item) => (
                <span key={item.text} className="inline-flex items-center gap-2 text-[13px] text-light-400">
                  <item.icon className="h-4 w-4 text-celaris-green/80" />
                  {item.text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Savings Card (inspired by Zolar/1KOMMA5°) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' as const }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 bg-celaris-green/10 rounded-full blur-[80px]" />

              <div className="relative">
                <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-celaris-green mb-1">
                  Ihre Ersparnis
                </p>
                <p className="text-[11px] text-light-500 mb-6">
                  Durchschnittliche Einsparung Einfamilienhaus, 10 kWp
                </p>

                {/* Main number */}
                <div className="text-center py-6">
                  <p className="font-display text-6xl font-bold text-white">
                    <AnimatedNumber value={1847} prefix="" suffix=" €" />
                  </p>
                  <p className="text-light-400 text-sm mt-2">Ersparnis pro Jahr</p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mt-4 mb-6">
                  {[
                    { label: 'Amortisation', value: '~8 Jahre' },
                    { label: 'CO₂/Jahr', value: '-4.2t' },
                    { label: 'Eigenverbrauch', value: '78%' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
                      <p className="font-display text-base font-semibold text-white">{stat.value}</p>
                      <p className="text-[10px] text-light-500 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to="/kontakt"
                  className="block w-full rounded-xl bg-celaris-green py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-celaris-green-dark"
                >
                  Mein Sparpotenzial berechnen →
                </Link>

                <p className="text-center text-[10px] text-light-500 mt-3">
                  Kostenlos & unverbindlich · 2 Min.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
