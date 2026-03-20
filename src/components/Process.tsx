import { motion } from 'framer-motion'
import { MessageSquare, ClipboardList, Wrench, Headphones, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Beratung',
    description: 'Kostenlose Erstberatung und individuelle Analyse Ihres Energiebedarfs und Dachs.',
    duration: '30 Min.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planung',
    description: 'Detaillierte Anlagenplanung mit 3D-Simulation und verbindlichem Festpreis-Angebot.',
    duration: '3-5 Tage',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation',
    description: 'Professionelle Montage durch unser eigenes, zertifiziertes Installationsteam.',
    duration: '1-3 Tage',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Betreuung',
    description: 'Lebenslanger Support, Monitoring und optionaler Wartungsvertrag.',
    duration: 'Dauerhaft',
  },
]

export default function Process() {
  return (
    <section id="prozess" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
            So funktioniert&apos;s
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900">
            In 4 Schritten zur Solaranlage
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-light-500 text-[16px]">
            Vom ersten Gespräch bis zur Einspeisung — transparent, planbar und stressfrei.
          </p>
        </motion.div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+30px)] right-[calc(12.5%+30px)] h-[2px]">
            <div className="h-full bg-gradient-to-r from-celaris-green via-celaris-cyan to-celaris-green opacity-20 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {/* Mobile vertical connector */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[104px] left-[30px] w-[2px] h-[calc(100%-56px)] bg-gradient-to-b from-celaris-green/20 to-transparent" />
                )}

                <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center">
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative flex h-[60px] w-[60px] items-center justify-center">
                      {/* Gradient ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-celaris-green to-celaris-cyan p-[2px]">
                        <div className="h-full w-full rounded-full bg-white" />
                      </div>
                      <span className="relative font-display text-lg font-bold gradient-text">
                        {step.number}
                      </span>
                    </div>
                    {/* Completed checkmark */}
                    {i === 0 && (
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-celaris-green flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="lg:mt-6 flex-1">
                    <div className="flex lg:justify-center items-center gap-2 mb-2">
                      <step.icon className="h-4 w-4 text-celaris-green" />
                      <span className="text-[11px] font-medium text-celaris-green bg-celaris-green/[0.06] px-2 py-0.5 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-dark-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-light-500 leading-relaxed max-w-[260px] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
