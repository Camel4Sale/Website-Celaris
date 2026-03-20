import { motion } from 'framer-motion'
import { Target, Users, Award, MapPin, CheckCircle } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission',
    text: 'Solarenergie für jeden zugänglich und wirtschaftlich machen. Wir treiben die Energiewende in der Region Karlsruhe aktiv voran.',
  },
  {
    icon: Users,
    title: 'Team',
    text: 'Erfahrene Ingenieure, Elektriker und Energieberater mit über 15 Jahren Expertise in der Solarbranche.',
  },
  {
    icon: Award,
    title: 'Qualität',
    text: 'Ausschließlich Premium-Komponenten führender Hersteller. TÜV-geprüfter Fachbetrieb mit höchsten Standards.',
  },
  {
    icon: MapPin,
    title: 'Regional',
    text: 'Karlsruher Unternehmen mit kurzen Wegen. Wir kennen die regionalen Gegebenheiten und sind immer in Ihrer Nähe.',
  },
]

const milestones = [
  { year: '2009', title: 'Gründung', text: 'Start als Familienunternehmen in Karlsruhe' },
  { year: '2014', title: '100. Installation', text: 'Meilenstein in der Region erreicht' },
  { year: '2019', title: 'Speicher-Spezialist', text: 'Erweiterung um Speicherlösungen & E-Mobilität' },
  { year: '2024', title: '500+ Projekte', text: 'Führender PV-Fachbetrieb in der Region' },
]

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-celaris-cyan/[0.04] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">Über Uns</span>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white tracking-tight">
              Ihr <span className="gradient-text">Solar-Partner</span> in Karlsruhe
            </h1>
            <p className="mt-4 text-light-400 text-[17px] max-w-2xl mx-auto">
              Celaris steht für Qualität, Zuverlässigkeit und Innovation. Seit über einem Jahrzehnt begleiten wir Hausbesitzer auf dem Weg zur Energieunabhängigkeit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark-900 mb-5">Unsere Geschichte</h2>
              <div className="space-y-4 text-light-500 text-[15px] leading-[1.75]">
                <p>Celaris wurde mit einer einfachen Vision gegründet: Solarenergie für jeden Haushalt in Karlsruhe und Umgebung zugänglich und wirtschaftlich zu machen.</p>
                <p>Was als kleines Familienunternehmen begann, ist heute ein etablierter Fachbetrieb mit einem Team aus erfahrenen Experten. Über 500 Solaranlagen wurden erfolgreich installiert — stets mit höchsten Qualitätsstandards.</p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Meisterbetrieb', 'TÜV-zertifiziert', 'Innungsmitglied', 'Qualitätsgarantie'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 rounded-lg bg-light-50 border border-light-100 px-3 py-2.5">
                    <CheckCircle className="h-4 w-4 text-celaris-green flex-shrink-0" />
                    <span className="text-[13px] font-medium text-dark-700">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="relative pl-8 border-l-2 border-light-100 space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-celaris-green bg-white" />
                    <span className="text-[12px] font-bold text-celaris-green">{m.year}</span>
                    <h3 className="font-display text-base font-semibold text-dark-900 mt-1">{m.title}</h3>
                    <p className="text-sm text-light-500 mt-0.5">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-light-100 hover:shadow-lg hover:border-celaris-green/15 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-celaris-green/[0.06] mb-4">
                  <item.icon className="w-5 h-5 text-celaris-green" />
                </div>
                <h3 className="font-display font-semibold text-base text-dark-900 mb-2">{item.title}</h3>
                <p className="text-[13px] text-light-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
