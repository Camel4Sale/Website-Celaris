import { motion } from 'framer-motion'
import { Target, Users, Award, MapPin } from 'lucide-react'

const values = [
  { icon: Target, title: 'Mission', text: 'Wir machen Solarenergie für jeden zugänglich und wirtschaftlich. Unser Ziel ist es, die Energiewende in der Region Karlsruhe aktiv voranzutreiben.' },
  { icon: Users, title: 'Team', text: 'Unser Team aus erfahrenen Ingenieuren, Elektrikern und Energieberatern vereint über 15 Jahre Expertise in der Solarbranche.' },
  { icon: Award, title: 'Qualität', text: 'Wir arbeiten ausschließlich mit Premium-Komponenten führender Hersteller und garantieren höchste Installationsqualität.' },
  { icon: MapPin, title: 'Regional', text: 'Als Karlsruher Unternehmen kennen wir die regionalen Gegebenheiten und sind immer in Ihrer Nähe — schnell und persönlich.' },
]

export default function UeberUns() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-dark-900 relative noise">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-celaris-cyan/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <span className="text-celaris-green text-sm font-medium tracking-[0.2em] uppercase font-display">Über Uns</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Ihr <span className="gradient-text">Solar-Partner</span> in Karlsruhe
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Celaris steht für Qualität, Zuverlässigkeit und Innovation in der Solarbranche. Seit über einem Jahrzehnt begleiten wir Hausbesitzer auf dem Weg zur Energieunabhängigkeit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-dark-900 mb-6">Unsere Geschichte</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>Celaris wurde mit einer einfachen Vision gegründet: Solarenergie für jeden Haushalt in Karlsruhe und Umgebung zugänglich und wirtschaftlich zu machen.</p>
                <p>Was als kleines Familienunternehmen begann, ist heute ein etablierter Fachbetrieb mit einem Team aus erfahrenen Experten. Wir haben über 500 Solaranlagen erfolgreich installiert und dabei stets höchste Qualitätsstandards eingehalten.</p>
                <p>Unsere Leidenschaft für erneuerbare Energien treibt uns jeden Tag an, innovative Lösungen zu entwickeln und unseren Kunden den bestmöglichen Service zu bieten.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl bg-gradient-to-br from-celaris-green/5 to-celaris-cyan/5 aspect-square flex items-center justify-center"
            >
              <Users className="w-32 h-32 text-celaris-green/15" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-celaris-green/20 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-celaris-green/10 to-celaris-cyan/10 mb-5">
                  <item.icon className="w-6 h-6 text-celaris-green" />
                </div>
                <h3 className="font-display font-semibold text-lg text-dark-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
