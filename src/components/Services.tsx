import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    description: 'Maßgeschneiderte Solaranlagen mit Premium-Modulen für maximalen Ertrag auf Ihrem Dach.',
    features: ['Individuelle Planung', 'Premium-Module', 'Ertragsgarantie'],
    color: 'from-amber-400/10 to-orange-400/10',
    iconColor: 'text-amber-500',
    span: 'lg:col-span-2 lg:row-span-2',
    large: true,
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    description: 'Speichern Sie Ihren Solarstrom und steigern Sie Ihren Eigenverbrauch auf bis zu 80%.',
    features: ['Notstromfähig', 'Modular erweiterbar'],
    color: 'from-celaris-green/10 to-emerald-400/10',
    iconColor: 'text-celaris-green',
    span: '',
    large: false,
  },
  {
    icon: Plug,
    title: 'Wallbox',
    description: 'E-Auto laden mit eigenem Solarstrom — intelligent und kostengünstig.',
    features: ['Bis 22 kW', 'App-Steuerung'],
    color: 'from-celaris-cyan/10 to-sky-400/10',
    iconColor: 'text-celaris-cyan',
    span: '',
    large: false,
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    description: 'Professionelle Wartung und Monitoring für optimale Leistung über Jahrzehnte.',
    features: ['Fernüberwachung', '24/7 Support'],
    color: 'from-violet-400/10 to-purple-400/10',
    iconColor: 'text-violet-500',
    span: 'lg:col-span-2',
    large: false,
  },
]

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-light-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
            Leistungen
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-light-500 text-[16px]">
            Von der Planung bis zur Wartung — wir begleiten Sie auf dem gesamten Weg
            zu Ihrer eigenen Solaranlage.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-2xl bg-white border border-light-100 overflow-hidden hover:border-celaris-green/20 hover:shadow-lg hover:shadow-celaris-green/[0.04] transition-all duration-500 ${service.span}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`relative ${service.large ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${service.color} ${service.large ? 'h-14 w-14' : 'h-11 w-11'} mb-5`}>
                  <service.icon className={`${service.iconColor} ${service.large ? 'h-7 w-7' : 'h-5 w-5'}`} />
                </div>

                {/* Title */}
                <h3 className={`font-display font-bold text-dark-900 mb-3 ${service.large ? 'text-2xl lg:text-3xl' : 'text-lg'}`}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-light-500 leading-relaxed mb-5 ${service.large ? 'text-[16px] max-w-md' : 'text-sm'}`}>
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center rounded-full bg-light-50 border border-light-100 px-3 py-1 text-[11px] font-medium text-light-600"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-celaris-green hover:text-celaris-green-dark transition-colors"
                >
                  Mehr erfahren
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
