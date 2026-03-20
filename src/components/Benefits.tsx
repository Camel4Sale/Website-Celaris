import { motion } from 'framer-motion'
import { TrendingDown, Leaf, Home, Shield, Zap, Award } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: 'Bis zu 80% Stromkosten sparen',
    description: 'Produzieren Sie Ihren eigenen Strom und werden Sie unabhängig von steigenden Energiepreisen.',
    metric: '80%',
    metricLabel: 'Ersparnis',
  },
  {
    icon: Leaf,
    title: 'Klimaschutz aktiv leben',
    description: 'Eine 10 kWp Anlage spart ca. 4,2 Tonnen CO₂ pro Jahr — das entspricht 30.000 km Autofahrt.',
    metric: '4.2t',
    metricLabel: 'CO₂/Jahr',
  },
  {
    icon: Home,
    title: 'Immobilienwert steigern',
    description: 'Eine Solaranlage erhöht den Marktwert Ihrer Immobilie um durchschnittlich 3-5%.',
    metric: '+5%',
    metricLabel: 'Wertsteigerung',
  },
  {
    icon: Shield,
    title: '25 Jahre Garantie',
    description: 'Herstellergarantie auf alle Komponenten plus 10 Jahre Installationsgarantie von Celaris.',
    metric: '25',
    metricLabel: 'Jahre Garantie',
  },
  {
    icon: Zap,
    title: 'Unabhängigkeit vom Netz',
    description: 'Mit Stromspeicher erreichen Sie bis zu 80% Autarkie — auch bei Stromausfällen.',
    metric: '80%',
    metricLabel: 'Autarkie',
  },
  {
    icon: Award,
    title: 'Zertifizierte Qualität',
    description: 'TÜV-geprüfter Fachbetrieb mit ausschließlich zertifizierten Elektrikern und Dachdeckern.',
    metric: 'TÜV',
    metricLabel: 'Zertifiziert',
  },
]

export default function Benefits() {
  return (
    <section className="py-20 lg:py-28 bg-dark-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-celaris-green/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
            Ihre Vorteile
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-white">
            Warum Celaris?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-light-400 text-[16px]">
            Zahlen, die für sich sprechen — und für Ihre Investition in die Zukunft.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 lg:p-7 hover:border-celaris-green/20 hover:bg-celaris-green/[0.03] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-celaris-green/[0.08]">
                  <benefit.icon className="h-5 w-5 text-celaris-green" />
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-white/90">{benefit.metric}</p>
                  <p className="text-[10px] text-light-500">{benefit.metricLabel}</p>
                </div>
              </div>

              <h3 className="font-display text-[15px] font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-light-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
