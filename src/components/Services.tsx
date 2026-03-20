import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    desc: 'Hochwertige PV-Module für maximale Energieausbeute auf Ihrem Dach.',
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    desc: 'Intelligente Speichersysteme, damit Sie Ihren Strom auch nachts nutzen können.',
  },
  {
    icon: Plug,
    title: 'Wallbox',
    desc: 'Laden Sie Ihr Elektroauto direkt mit dem selbsterzeugten Solarstrom.',
  },
  {
    icon: Wrench,
    title: 'Wartung',
    desc: 'Regelmäßiger Service und Monitoring für langlebige Performance.',
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-surface-container-low" id="produkte">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-20"
        >
          <span className="font-label text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
            Unsere Leistungen
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
            Alles aus einer Hand.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                <s.icon className="w-7 h-7 text-on-surface" strokeWidth={1.5} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
