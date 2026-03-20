import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    description: 'Maßgeschneiderte Solaranlagen für Ihr Zuhause oder Unternehmen. Wir planen und installieren Ihre PV-Anlage individuell nach Ihren Bedürfnissen.',
    features: ['Individuelle Anlagenplanung', 'Premium-Module führender Hersteller', 'Optimale Dachausrichtung', 'Ertragsprognose & Wirtschaftlichkeitsberechnung'],
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    description: 'Speichern Sie Ihren selbst erzeugten Solarstrom und nutzen Sie ihn genau dann, wenn Sie ihn brauchen — auch nachts oder bei bewölktem Himmel.',
    features: ['Eigenverbrauch bis 80%', 'Notstromfähig', 'Intelligentes Energiemanagement', 'Modular erweiterbar'],
  },
  {
    icon: Plug,
    title: 'Wallbox & E-Mobilität',
    description: 'Laden Sie Ihr Elektrofahrzeug mit selbst erzeugtem Solarstrom. Intelligent, kostengünstig und umweltfreundlich.',
    features: ['Solaroptimiertes Laden', 'Bis zu 22 kW Ladeleistung', 'App-Steuerung', 'Förderfähig'],
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    description: 'Regelmäßige Wartung und professioneller Service für optimale Leistung Ihrer Solaranlage über Jahrzehnte.',
    features: ['Jährliche Inspektion', 'Fernüberwachung', 'Reinigung der Module', '24/7 Störungsdienst'],
  },
]

export default function Leistungen() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-900 relative noise">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-celaris-green/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-celaris-green text-sm font-medium tracking-[0.2em] uppercase font-display">Unsere Leistungen</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Alles aus <span className="gradient-text">einer Hand</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Von der ersten Beratung über die Planung bis zur Installation und langfristigen Betreuung — wir sind Ihr Partner für die komplette Energiewende.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-celaris-green/10 to-celaris-cyan/10 mb-6">
                    <service.icon className="w-7 h-7 text-celaris-green" />
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-dark-900 mb-4">{service.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-celaris-green flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 text-celaris-green font-display font-semibold hover:gap-3 transition-all"
                  >
                    Jetzt anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`rounded-3xl bg-gradient-to-br from-celaris-green/5 to-celaris-cyan/5 aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-24 h-24 text-celaris-green/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
