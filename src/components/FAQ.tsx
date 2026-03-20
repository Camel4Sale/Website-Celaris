import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Was kostet eine Photovoltaikanlage?', a: 'Eine typische Anlage für ein Einfamilienhaus (8–12 kWp) liegt bei 14.000–22.000 € inkl. Installation. Mit Förderungen und Einsparungen von ca. 1.500–2.000 €/Jahr amortisiert sich die Anlage in 7–10 Jahren.' },
  { q: 'Wie lange dauert es bis zur fertigen Anlage?', a: 'Beratung innerhalb einer Woche, Planung 3–5 Tage, Installation 1–3 Tage. Insgesamt 4–8 Wochen von der Anfrage bis zur Einspeisung.' },
  { q: 'Welche Förderungen gibt es 2026?', a: 'EEG-Einspeisevergütung, KfW-Förderkredite und regionale Programme. Je nach Konstellation bis zu 10.200 € Zuschuss möglich.' },
  { q: 'Lohnt sich ein Stromspeicher?', a: 'Mit Speicher steigt Ihr Eigenverbrauch von ca. 30% auf bis zu 80%. Bei Strompreisen von 35–40 ct/kWh rechnet sich das in den meisten Fällen.' },
  { q: 'Kann mein Dach Solar?', a: 'Die meisten Dächer sind geeignet — Süd-, Ost- und Westausrichtungen funktionieren gut. Bei der Erstberatung prüfen wir Ihr Dach per Satellit.' },
  { q: 'Was bei einem Defekt?', a: 'Unsere Anlagen werden 24/7 fernüberwacht. 25 Jahre Herstellergarantie auf Module, 10 Jahre auf Installation. Mit Wartungsvertrag kümmern wir uns um alles.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-24 lg:py-36 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-light" />

      <div className="relative z-10 mx-auto max-w-[800px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="tag tag-accent mb-6">FAQ</span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-white">
            Häufige Fragen.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <div className={`rounded-xl border transition-all duration-400 ${
                openIdx === i
                  ? 'border-accent/20 bg-accent/[0.03]'
                  : 'border-white/[0.06] bg-white/[0.01] hover:border-white/10'
              }`}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display text-[15px] font-semibold text-white pr-6">{f.q}</span>
                  <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIdx === i ? 'bg-accent text-ink' : 'bg-white/[0.06] text-white/40'
                  }`}>
                    {openIdx === i ? <Minus size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] text-white/40 leading-[1.75]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
