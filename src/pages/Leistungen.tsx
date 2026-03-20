import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    desc: 'Maßgeschneiderte Solaranlagen für Ihr Zuhause oder Unternehmen.',
    features: [
      'Individuelle 3D-Planung',
      'Premium-Module (Q CELLS, Meyer Burger)',
      'Statikprüfung & Dachoptimierung',
      'Ertragsprognose & Wirtschaftlichkeit',
      'Netzanmeldung & Inbetriebnahme',
    ],
    price: 'ab 12.000 €',
    note: '8 kWp System',
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    desc: 'Eigenverbrauch auf bis zu 80% steigern — auch nachts oder bei Wolken.',
    features: [
      'Notstromfähig',
      'Intelligentes Energiemanagement',
      'Modular erweiterbar',
      'BYD, Huawei & SolarEdge',
    ],
    price: 'ab 6.500 €',
    note: '10 kWh Speicher',
  },
  {
    icon: Plug,
    title: 'Wallbox & E-Mobilität',
    desc: 'Laden Sie Ihr E-Auto mit eigenem Solarstrom — direkt vom Dach.',
    features: ['Solaroptimiertes Laden', 'Bis 22 kW', 'App-Steuerung', 'KfW-förderfähig'],
    price: 'ab 1.500 €',
    note: 'Inkl. Installation',
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    desc: 'Professionelle Wartung und Service für optimale Leistung über Jahrzehnte.',
    features: [
      'Jährliche Inspektion',
      '24/7 Fernüberwachung',
      'Professionelle Reinigung',
      'Herstellerunabhängig',
    ],
    price: 'ab 149 €',
    note: 'Pro Jahr',
  },
]

export default function Leistungen() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-2xl"
          >
            <span className="font-label text-secondary-container font-bold uppercase tracking-widest text-sm mb-4 block">
              Leistungen
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
              Alles aus <span className="text-secondary-container">einer Hand.</span>
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-lg">
              Von der Planung bis zur Wartung — wir sind Ihr Partner für die komplette
              Energiewende.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8 space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-6">
                  <s.icon className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                </div>
                <h2 className="font-headline text-2xl lg:text-3xl font-extrabold text-on-surface mb-3">
                  {s.title}
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-on-surface">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-3 rounded-xl bg-surface-container-low border border-outline-variant/20 px-5 py-3 mb-6">
                  <span className="font-headline text-lg font-bold text-on-surface">
                    {s.price}
                  </span>
                  <span className="text-sm text-on-surface-variant">{s.note}</span>
                </div>
                <div>
                  <Link
                    to="/kontakt"
                    className="group inline-flex items-center gap-2 text-secondary font-bold"
                  >
                    Jetzt anfragen{' '}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div
                className={`rounded-2xl bg-surface-container-low border border-outline-variant/20 aspect-[4/3] flex items-center justify-center ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <s.icon className="w-20 h-20 text-outline-variant/30" strokeWidth={0.7} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
