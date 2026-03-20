import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const val = useMotionValue(0)
  const rounded = useTransform(val, (v) => Math.round(v))

  useEffect(() => {
    const c = animate(val, to, { duration: 2.2, ease: 'easeOut' })
    return c.stop
  }, [val, to])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${v.toLocaleString('de-DE')}${suffix}`
    })
    return unsub
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
}

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end bg-ink overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 topo-pattern" />
        <div className="absolute top-[-30%] right-[-20%] w-[900px] h-[900px] rounded-full bg-accent/[0.03] blur-[200px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/[0.02] blur-[150px]" />
      </div>

      {/* Decorative oversized number */}
      <div className="absolute top-[15%] right-[5%] font-display font-extrabold text-[clamp(10rem,25vw,20rem)] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,230,118,0.06)] select-none pointer-events-none">
        kW
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 pb-16 lg:pb-20 pt-32">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          {/* Status badge */}
          <motion.div variants={rise}>
            <span className="tag tag-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Förderung 2026 — bis zu 10.200 € Zuschuss
            </span>
          </motion.div>

          {/* Headline — oversized, editorial */}
          <motion.h1
            variants={rise}
            className="mt-8 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
          >
            Solar&shy;anlage
            <br />
            <span className="text-accent">vom Experten.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p variants={rise} className="mt-6 max-w-md text-[17px] leading-[1.7] text-white/50 font-light">
            Maßgeschneiderte Photovoltaik für Ihr Zuhause. Festpreis, schlüsselfertig, persönlich betreut — in Karlsruhe und Umgebung.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={rise} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:bg-accent-dim active:scale-[0.97]"
            >
              Kostenloses Angebot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[15px] font-medium text-white/60 border border-white/10 transition-all duration-300 hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
            >
              Leistungen entdecken
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom stat strip — editorial horizontal layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 lg:mt-20 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-white/[0.06] pt-8"
        >
          {[
            { value: 500, suffix: '+', label: 'Installationen' },
            { value: 98, suffix: '%', label: 'Zufriedenheit' },
            { value: 1847, suffix: '€', label: 'Ø Ersparnis/Jahr' },
            { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom edge — warm cream bleed */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </section>
  )
}
