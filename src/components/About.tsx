import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedStat({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: 'easeOut' })
    return controls.stop
  }, [count, value])

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${v.toLocaleString('de-DE')}${suffix}`
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Installationen', sublabel: 'in der Region Karlsruhe' },
  { value: 98, suffix: '%', label: 'Kundenzufriedenheit', sublabel: 'basierend auf 200+ Bewertungen' },
  { value: 15, suffix: '+', label: 'Jahre Erfahrung', sublabel: 'in der Solarbranche' },
  { value: 12, suffix: ' GWh', label: 'Solarstrom erzeugt', sublabel: 'seit Gründung' },
]

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
              Über Celaris
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900 leading-[1.15]">
              Ihr lokaler Partner für die Energiewende
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pt-8"
          >
            <p className="text-light-500 text-[16px] leading-[1.75]">
              Als Karlsruher Fachbetrieb kennen wir die regionalen Gegebenheiten — von der
              Dachlandschaft der Fächerstadt bis zu den spezifischen Fördermöglichkeiten in
              Baden-Württemberg. Unser Team aus Ingenieuren und Energieberatern begleitet
              Sie von der ersten Beratung bis zur schlüsselfertigen Installation.
            </p>
          </motion.div>
        </div>

        {/* Stats grid — inspired by Tesla/SunPower */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-light-100 bg-light-50/50 p-6 lg:p-8 group hover:border-celaris-green/20 hover:bg-celaris-green/[0.02] transition-all duration-500"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-dark-900">
                <AnimatedStat value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-display text-sm font-semibold text-dark-700">
                {stat.label}
              </p>
              <p className="mt-1 text-[12px] text-light-400">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
