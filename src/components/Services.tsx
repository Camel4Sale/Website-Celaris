import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    desc: 'Maßgeschneiderte Solaranlagen mit Premium-Modulen für maximalen Ertrag.',
    tags: ['Individuelle Planung', 'Ertragsgarantie', 'Premium-Module'],
    featured: true,
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    desc: 'Eigenverbrauch bis 80%. Notstromfähig und modular erweiterbar.',
    tags: ['Bis 80% Autarkie', 'Notstrom'],
    featured: false,
  },
  {
    icon: Plug,
    title: 'Wallbox',
    desc: 'E-Auto laden mit eigenem Solarstrom — intelligent und kostengünstig.',
    tags: ['Bis 22 kW', 'App-Steuerung'],
    featured: false,
  },
  {
    icon: Wrench,
    title: 'Wartung',
    desc: 'Professionelle Wartung und 24/7-Monitoring für optimale Leistung.',
    tags: ['Fernüberwachung', '24/7 Support'],
    featured: false,
  },
]

export default function Services() {
  return (
    <section className="relative py-24 lg:py-36 bg-ink overflow-hidden">
      <div className="absolute inset-0 dot-grid-light" />
      <div className="section-number bottom-[-5%] right-[-2%] [-webkit-text-stroke:1px_rgba(0,230,118,0.05)]">02</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header — left-aligned, editorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-xl mb-16"
        >
          <span className="tag tag-accent mb-6">Leistungen</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
            Alles aus einer Hand.
          </h2>
          <p className="mt-4 text-white/40 text-[16px] leading-relaxed">
            Von der Planung bis zur Wartung — wir begleiten Sie auf dem gesamten Weg zu Ihrer eigenen Solaranlage.
          </p>
        </motion.div>

        {/* Service grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-accent/20 hover:bg-accent/[0.02] ${
                s.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className={`p-7 ${s.featured ? 'lg:p-9' : ''} flex flex-col h-full`}>
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>

                <h3 className={`font-display font-bold text-white mb-3 ${s.featured ? 'text-2xl' : 'text-lg'}`}>
                  {s.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
                  {s.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] font-medium uppercase tracking-wider text-white/30 border border-white/[0.06] rounded-full px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-1.5 text-accent text-[13px] font-semibold hover:text-accent-dim transition-colors"
                >
                  Anfragen
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-accent/0 group-hover:bg-accent/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
