import { motion } from 'framer-motion'
import { MapPin, Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Einfamilienhaus Durlach',
    location: 'Karlsruhe-Durlach',
    system: '10.8 kWp + 10 kWh BYD Speicher',
    savings: '1.920 €/Jahr',
    co2: '4.2t CO₂/Jahr',
    color: 'from-celaris-green/5 to-celaris-cyan/5',
  },
  {
    title: 'Doppelhaushälfte Ettlingen',
    location: 'Ettlingen',
    system: '8.6 kWp + Wallbox 11kW',
    savings: '1.450 €/Jahr',
    co2: '3.4t CO₂/Jahr',
    color: 'from-celaris-cyan/5 to-sky-400/5',
  },
  {
    title: 'Gewerbe Bruchsal',
    location: 'Bruchsal',
    system: '32 kWp + 30 kWh Speicher',
    savings: '6.800 €/Jahr',
    co2: '12.8t CO₂/Jahr',
    color: 'from-amber-400/5 to-celaris-green/5',
  },
]

export default function ProjectShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14"
        >
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
              Referenzen
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900">
              Unsere Projekte
            </h2>
          </div>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold text-celaris-green hover:text-celaris-green-dark transition-colors"
          >
            Alle Referenzen ansehen
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-light-100 overflow-hidden hover:shadow-lg hover:shadow-black/[0.03] hover:border-celaris-green/15 transition-all duration-500"
            >
              {/* Image placeholder */}
              <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 grid-pattern opacity-10" />
                <div className="relative">
                  <Zap className="h-16 w-16 text-celaris-green/15" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-[12px] text-light-400 mb-2">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </div>
                <h3 className="font-display text-lg font-semibold text-dark-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-[13px] text-light-500 mb-4">{project.system}</p>

                {/* Metrics */}
                <div className="flex items-center gap-4 pt-4 border-t border-light-100">
                  <div>
                    <p className="font-display text-sm font-bold text-celaris-green">{project.savings}</p>
                    <p className="text-[10px] text-light-400">Ersparnis</p>
                  </div>
                  <div className="w-px h-8 bg-light-100" />
                  <div>
                    <p className="font-display text-sm font-bold text-dark-900">{project.co2}</p>
                    <p className="text-[10px] text-light-400">CO₂ eingespart</p>
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
