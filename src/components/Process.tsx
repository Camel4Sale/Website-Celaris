import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Beratung',
    desc: 'Individuelle Analyse Ihres Energiebedarfs und Standorts direkt vor Ort.',
    active: true,
  },
  {
    num: '02',
    title: 'Planung',
    desc: 'Detaillierte Projektierung und Wirtschaftlichkeitsberechnung Ihrer Anlage.',
    active: false,
  },
  {
    num: '03',
    title: 'Installation',
    desc: 'Fachgerechte Montage und Inbetriebnahme durch unsere Experten-Teams.',
    active: false,
  },
  {
    num: '04',
    title: 'Betreuung',
    desc: 'Langfristiges Monitoring und technischer Support für Ihre Sicherheit.',
    active: false,
  },
]

export default function Process() {
  return (
    <section className="py-24 bg-surface" id="prozess">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-20"
        >
          <span className="font-label text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
            Der Ablauf
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface">
            In 4 Schritten zum Sonnenstrom.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-outline-variant/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div
                  className={`w-20 h-20 rounded-full bg-surface border-2 flex items-center justify-center mb-8 editorial-shadow ${
                    step.active ? 'border-secondary' : 'border-outline-variant/30'
                  }`}
                >
                  <span
                    className={`font-headline text-2xl font-extrabold ${
                      step.active ? 'text-secondary' : 'text-on-surface-variant/40'
                    }`}
                  >
                    {step.num}
                  </span>
                </div>
                <h4 className="font-headline text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
