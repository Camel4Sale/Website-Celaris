import { motion } from 'framer-motion'
import { TrendingDown, Leaf, Home, Shield, Zap, Award } from 'lucide-react'

const benefits = [
  { icon: TrendingDown, metric: '80%', label: 'Stromkosten sparen', desc: 'Eigener Strom, unabhängig von steigenden Preisen.' },
  { icon: Leaf, metric: '4.2t', label: 'CO₂ pro Jahr sparen', desc: 'Das entspricht 30.000 km Autofahrt.' },
  { icon: Home, metric: '+5%', label: 'Immobilienwert', desc: 'Durchschnittliche Wertsteigerung mit Solar.' },
  { icon: Shield, metric: '25 J.', label: 'Garantie', desc: 'Herstellergarantie auf alle Komponenten.' },
  { icon: Zap, metric: '80%', label: 'Autarkie', desc: 'Mit Speicher nahezu unabhängig vom Netz.' },
  { icon: Award, metric: 'TÜV', label: 'Zertifiziert', desc: 'Geprüfter Fachbetrieb, höchste Standards.' },
]

export default function Benefits() {
  return (
    <section className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="section-number top-[-5%] left-[-3%]">04</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-14"
        >
          <span className="tag tag-ink mb-6">Vorteile</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ink">
            Zahlen, die für sich sprechen.
          </h2>
        </motion.div>

        {/* Benefits — 3×2 grid with large metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 rounded-2xl overflow-hidden">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-cream hover:bg-white p-7 lg:p-8 transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <b.icon className="w-5 h-5 text-stone-400 group-hover:text-accent transition-colors duration-500" strokeWidth={1.5} />
                <p className="font-display text-3xl font-extrabold text-ink tracking-tight">{b.metric}</p>
              </div>
              <h3 className="font-display text-sm font-bold text-ink mb-1">{b.label}</h3>
              <p className="text-[13px] text-stone-500 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
