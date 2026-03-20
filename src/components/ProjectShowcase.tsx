import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  { title: 'EFH Durlach', location: 'Karlsruhe-Durlach', system: '10.8 kWp + 10 kWh Speicher', saving: '1.920 €/J.', co2: '4.2t CO₂' },
  { title: 'DHH Ettlingen', location: 'Ettlingen', system: '8.6 kWp + Wallbox 11 kW', saving: '1.450 €/J.', co2: '3.4t CO₂' },
  { title: 'Gewerbe Bruchsal', location: 'Bruchsal', system: '32 kWp + 30 kWh Speicher', saving: '6.800 €/J.', co2: '12.8t CO₂' },
]

export default function ProjectShowcase() {
  return (
    <section className="py-24 lg:py-36 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 topo-pattern" />
      <div className="section-number bottom-[-5%] left-[5%] [-webkit-text-stroke:1px_rgba(0,230,118,0.04)]">05</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14"
        >
          <div>
            <span className="tag tag-accent mb-6">Referenzen</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-white">
              Unsere Projekte.
            </h2>
          </div>
          <Link to="/kontakt" className="group inline-flex items-center gap-1.5 text-accent text-[13px] font-semibold">
            Alle ansehen <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-accent/20 transition-all duration-500"
            >
              {/* Placeholder image area */}
              <div className="aspect-[16/10] bg-gradient-to-br from-accent/[0.04] to-transparent flex items-center justify-center">
                <span className="font-display text-6xl font-extrabold text-white/[0.03]">PV</span>
              </div>
              <div className="p-6">
                <p className="flex items-center gap-1.5 text-[11px] text-white/30 uppercase tracking-wider font-medium mb-2">
                  <MapPin className="h-3 w-3" /> {p.location}
                </p>
                <h3 className="font-display text-lg font-bold text-white mb-1">{p.title}</h3>
                <p className="text-[13px] text-white/40 mb-5">{p.system}</p>
                <div className="flex gap-6 pt-4 border-t border-white/[0.06]">
                  <div>
                    <p className="font-display text-sm font-bold text-accent">{p.saving}</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-wider">Ersparnis</p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-white">{p.co2}</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-wider">Eingespart</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
