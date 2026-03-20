import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowRight, CheckCircle, Calculator } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    description: 'Maßgeschneiderte Solaranlagen für Ihr Zuhause oder Unternehmen. Wir planen und installieren Ihre PV-Anlage individuell nach Ihren Bedürfnissen und der optimalen Dachbelegung.',
    features: ['Individuelle 3D-Anlagenplanung', 'Premium-Module von Q CELLS, Meyer Burger & Co.', 'Optimale Dachausrichtung & Statikprüfung', 'Detaillierte Ertragsprognose & Wirtschaftlichkeitsberechnung', 'Komplette Netzanmeldung & Inbetriebnahme'],
    price: 'ab 12.000 €',
    priceNote: 'für ein 8 kWp System',
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    description: 'Speichern Sie Ihren selbst erzeugten Solarstrom und nutzen Sie ihn genau dann, wenn Sie ihn brauchen — auch nachts oder bei bewölktem Himmel.',
    features: ['Eigenverbrauch bis 80% steigern', 'Notstromfähig bei Netzausfall', 'Intelligentes Energiemanagement', 'Modular erweiterbar', 'BYD, Huawei & SolarEdge Speicher'],
    price: 'ab 6.500 €',
    priceNote: 'für 10 kWh Speicher',
  },
  {
    icon: Plug,
    title: 'Wallbox & E-Mobilität',
    description: 'Laden Sie Ihr Elektrofahrzeug mit selbst erzeugtem Solarstrom. Intelligent, kostengünstig und umweltfreundlich — direkt vom eigenen Dach.',
    features: ['Solaroptimiertes Laden', 'Bis zu 22 kW Ladeleistung', 'App-Steuerung & Ladestatistik', 'KfW-förderfähig', 'Integration in PV-System'],
    price: 'ab 1.500 €',
    priceNote: 'inkl. Installation',
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    description: 'Regelmäßige Wartung und professioneller Service für optimale Leistung Ihrer Solaranlage über Jahrzehnte hinweg.',
    features: ['Jährliche Inspektion & Sichtprüfung', 'Fernüberwachung & Monitoring 24/7', 'Professionelle Modulreinigung', 'Störungsdienst mit kurzen Reaktionszeiten', 'Herstellerunabhängig für Bestandsanlagen'],
    price: 'ab 149 €',
    priceNote: 'pro Jahr',
  },
]

export default function Leistungen() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-celaris-green/[0.04] rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
              Unsere Leistungen
            </span>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight">
              Alles aus <span className="gradient-text">einer Hand</span>
            </h1>
            <p className="mt-4 text-light-400 text-[17px] max-w-2xl mx-auto">
              Von der ersten Beratung über die Planung bis zur Installation und langfristigen Betreuung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
              >
                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-celaris-green/[0.06] mb-5">
                    <service.icon className="w-6 h-6 text-celaris-green" />
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-light-500 text-[16px] leading-[1.7] mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-celaris-green flex-shrink-0 mt-0.5" />
                        <span className="text-[14px] text-dark-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price hint */}
                  <div className="inline-flex items-center gap-3 rounded-xl bg-light-50 border border-light-100 px-5 py-3 mb-6">
                    <Calculator className="h-4 w-4 text-celaris-green" />
                    <div>
                      <span className="font-display text-lg font-bold text-dark-900">{service.price}</span>
                      <span className="text-[12px] text-light-500 ml-2">{service.priceNote}</span>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/kontakt"
                      className="group inline-flex items-center gap-2 text-[14px] font-semibold text-celaris-green hover:text-celaris-green-dark transition-colors"
                    >
                      Jetzt anfragen
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Visual placeholder */}
                <div className={`rounded-2xl bg-gradient-to-br from-celaris-green/[0.03] to-celaris-cyan/[0.03] border border-light-100 aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <service.icon className="w-20 h-20 text-celaris-green/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
