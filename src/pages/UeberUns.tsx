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
  {
    year: '2019',
    title: 'Speicher-Spezialist',
    text: 'Erweiterung um Speicherlösungen & E-Mobilität',
  },
  { year: '2024', title: '500+ Projekte', text: 'Führender PV-Fachbetrieb in der Region' },
]

export default function UeberUns() {
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
              Über Uns
            </span>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">
              Ihr <span className="text-secondary-container">Solar-Partner</span> in Karlsruhe.
            </h1>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-lg">
              Celaris steht für Qualität, Zuverlässigkeit und Innovation. Seit über einem Jahrzehnt
              begleiten wir Hausbesitzer auf dem Weg zur Energieunabhängigkeit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Timeline */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h2 className="font-headline text-2xl lg:text-3xl font-extrabold text-on-surface mb-5">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  Celaris wurde mit einer einfachen Vision gegründet: Solarenergie für jeden
                  Haushalt in Karlsruhe und Umgebung zugänglich und wirtschaftlich zu machen.
                </p>
                <p>
                  Was als kleines Familienunternehmen begann, ist heute ein etablierter Fachbetrieb
                  mit einem Team aus erfahrenen Experten. Über 500 Solaranlagen wurden erfolgreich
                  installiert — stets mit höchsten Qualitätsstandards.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {['Meisterbetrieb', 'TÜV-zertifiziert', 'Innungsmitglied', 'Qualitätsgarantie'].map(
                  (badge) => (
                    <div
                      key={badge}
                      className="flex items-center gap-2 rounded-xl bg-surface-container-lowest border border-outline-variant/20 px-3.5 py-2.5"
                    >
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm font-medium text-on-surface">{badge}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="relative pl-8 border-l-2 border-outline-variant/30 space-y-8">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full border-2 border-secondary bg-surface" />
                    <span className="text-sm font-bold text-secondary">{m.year}</span>
                    <h3 className="font-headline text-base font-semibold text-on-surface mt-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-0.5">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-8 rounded-xl bg-surface-container-lowest editorial-shadow hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-surface-container flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-on-surface" />
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
