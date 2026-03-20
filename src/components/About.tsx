import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      {/* Decorative section number */}
      <div className="section-number top-0 left-[-2%]">01</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Asymmetric two-column layout */}
        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-12 lg:gap-24">
          {/* Left — large editorial text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="tag tag-accent mb-6">Über Celaris</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold tracking-[-0.03em] leading-[1.05] text-ink">
              Ihr lokaler Partner
              <br />
              <span className="text-accent">für die Energiewende.</span>
            </h2>
            <div className="mt-8 space-y-5 text-stone-500 text-[16px] leading-[1.8]">
              <p>
                Als Karlsruher Fachbetrieb kennen wir die regionalen Gegebenheiten — von der
                Dachlandschaft der Fächerstadt bis zu den spezifischen Fördermöglichkeiten in
                Baden-Württemberg.
              </p>
              <p>
                Unser Team aus Ingenieuren und Energieberatern begleitet Sie von der ersten
                Beratung bis zur schlüsselfertigen Installation. Dabei setzen wir ausschließlich
                auf Premium-Komponenten namhafter Hersteller.
              </p>
            </div>
          </motion.div>

          {/* Right — stat cards, stacked vertically */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex flex-col gap-4 lg:pt-8"
          >
            {[
              { num: '500+', label: 'Installierte Anlagen', sub: 'Region Karlsruhe' },
              { num: '98%', label: 'Kundenzufriedenheit', sub: '200+ Bewertungen' },
              { num: '12 GWh', label: 'Solarstrom erzeugt', sub: 'Seit Gründung' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group relative rounded-2xl border border-stone-100 bg-white/60 backdrop-blur-sm p-6 hover:border-accent/20 hover:bg-accent/[0.02] transition-all duration-500"
              >
                <div className="flex items-baseline justify-between">
                  <p className="font-display text-3xl font-extrabold tracking-tight text-ink">{s.num}</p>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400 font-medium">{s.sub}</span>
                </div>
                <p className="mt-1 text-sm text-stone-500 font-medium">{s.label}</p>
                {/* Accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-accent/0 group-hover:bg-accent/40 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
