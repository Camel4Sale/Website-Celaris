import { motion } from 'framer-motion'
import { Sun, Zap, Plug, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Sun, title: 'Photovoltaik',
    desc: 'Maßgeschneiderte Solaranlagen für Ihr Zuhause oder Unternehmen.',
    features: ['Individuelle 3D-Planung', 'Premium-Module (Q CELLS, Meyer Burger)', 'Statikprüfung & Dachoptimierung', 'Ertragsprognose & Wirtschaftlichkeit', 'Netzanmeldung & Inbetriebnahme'],
    price: 'ab 12.000 €', note: '8 kWp System',
  },
  {
    icon: Zap, title: 'Stromspeicher',
    desc: 'Eigenverbrauch auf bis zu 80% steigern — auch nachts oder bei Wolken.',
    features: ['Notstromfähig', 'Intelligentes Energiemanagement', 'Modular erweiterbar', 'BYD, Huawei & SolarEdge'],
    price: 'ab 6.500 €', note: '10 kWh Speicher',
  },
  {
    icon: Plug, title: 'Wallbox & E-Mobilität',
    desc: 'Laden Sie Ihr E-Auto mit eigenem Solarstrom — direkt vom Dach.',
    features: ['Solaroptimiertes Laden', 'Bis 22 kW', 'App-Steuerung', 'KfW-förderfähig'],
    price: 'ab 1.500 €', note: 'Inkl. Installation',
  },
  {
    icon: Wrench, title: 'Wartung & Service',
    desc: 'Professionelle Wartung und Service für optimale Leistung über Jahrzehnte.',
    features: ['Jährliche Inspektion', '24/7 Fernüberwachung', 'Professionelle Reinigung', 'Herstellerunabhängig'],
    price: 'ab 149 €', note: 'Pro Jahr',
  },
]

export default function Leistungen() {
  return (
    <>
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 topo-pattern" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="tag tag-accent mb-6">Leistungen</span>
            <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.05]">
              Alles aus <span className="text-accent">einer Hand.</span>
            </h1>
            <p className="mt-4 text-white/40 text-[17px] leading-relaxed max-w-lg">Von der Planung bis zur Wartung — wir sind Ihr Partner für die komplette Energiewende.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-11 h-11 rounded-xl bg-accent/[0.08] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-ink mb-3">{s.title}</h2>
                <p className="text-stone-500 text-[16px] leading-[1.7] mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-[14px] text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-3 rounded-xl bg-stone-100 border border-stone-200 px-5 py-3 mb-6">
                  <span className="font-display text-lg font-bold text-ink">{s.price}</span>
                  <span className="text-[12px] text-stone-400">{s.note}</span>
                </div>
                <div>
                  <Link to="/kontakt" className="group inline-flex items-center gap-2 text-accent text-[14px] font-semibold">
                    Jetzt anfragen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className={`rounded-2xl bg-stone-100 border border-stone-200 aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <s.icon className="w-20 h-20 text-stone-200" strokeWidth={0.7} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
