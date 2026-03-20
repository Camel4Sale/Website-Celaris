import { motion } from 'framer-motion'
import { MessageSquare, ClipboardList, Wrench, Headphones } from 'lucide-react'

const steps = [
  { icon: MessageSquare, num: '01', title: 'Beratung', time: '30 Min.', desc: 'Kostenlose Erstberatung und individuelle Analyse Ihres Energiebedarfs.' },
  { icon: ClipboardList, num: '02', title: 'Planung', time: '3–5 Tage', desc: '3D-Simulation, Ertragsberechnung und verbindliches Festpreis-Angebot.' },
  { icon: Wrench, num: '03', title: 'Installation', time: '1–3 Tage', desc: 'Professionelle Montage durch unser eigenes, zertifiziertes Team.' },
  { icon: Headphones, num: '04', title: 'Betreuung', time: 'Dauerhaft', desc: 'Lebenslanger Support, 24/7-Monitoring und optionaler Wartungsvertrag.' },
]

export default function Process() {
  return (
    <section id="prozess" className="relative py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div className="section-number top-[-5%] right-[5%]">03</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-xl mb-16 lg:mb-20"
        >
          <span className="tag tag-ink mb-6">Prozess</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ink">
            In 4 Schritten zur
            <br />Solaranlage.
          </h2>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[20px] left-[calc(50%+24px)] right-0 h-px bg-stone-200 group-hover:bg-accent/30 transition-colors duration-500" />
              )}

              <div className="flex lg:flex-col items-start gap-5 lg:gap-0 py-6 lg:py-0 lg:pr-8">
                {/* Number + icon */}
                <div className="flex items-center gap-3 lg:mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center group-hover:border-accent transition-colors duration-500">
                      <span className="font-display text-sm font-bold text-ink">{s.num}</span>
                    </div>
                    {/* Pulse dot */}
                    <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-accent/0 group-hover:bg-accent transition-all duration-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-ink/0 group-hover:bg-ink transition-all duration-500" />
                    </div>
                  </div>
                  <s.icon className="w-4 h-4 text-stone-400 lg:hidden" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-lg font-bold text-ink">{s.title}</h3>
                    <span className="text-[10px] font-semibold text-accent bg-accent/[0.08] px-2 py-0.5 rounded-full">
                      {s.time}
                    </span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-[280px]">{s.desc}</p>
                </div>
              </div>

              {/* Mobile divider */}
              {i < steps.length - 1 && (
                <div className="lg:hidden h-px bg-stone-100 ml-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
