import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Was kostet eine Photovoltaikanlage?',
    answer: 'Eine typische Anlage für ein Einfamilienhaus (8-12 kWp) liegt bei 14.000-22.000 € inkl. Installation. Mit staatlichen Förderungen und Einsparungen von ca. 1.500-2.000 €/Jahr amortisiert sich die Anlage in 7-10 Jahren — danach produzieren Sie nahezu kostenlosen Strom.',
  },
  {
    question: 'Wie lange dauert es von der Anfrage bis zur fertigen Anlage?',
    answer: 'Die Beratung erfolgt innerhalb einer Woche, die Planung dauert 3-5 Werktage, und die Installation 1-3 Tage. Insgesamt rechnen Sie mit 4-8 Wochen von der Anfrage bis zur Einspeisung — inklusive Netzanmeldung und Inbetriebnahme.',
  },
  {
    question: 'Welche Förderungen gibt es aktuell (2026)?',
    answer: 'Es gibt die EEG-Einspeisevergütung (aktuell 8,11 ct/kWh), KfW-Förderkredite mit Tilgungszuschuss, sowie regionale Programme in Baden-Württemberg. Je nach Konstellation sind bis zu 10.200 € Zuschuss möglich. Wir beraten Sie umfassend zu allen Optionen.',
  },
  {
    question: 'Lohnt sich ein Stromspeicher?',
    answer: 'Mit Speicher steigern Sie Ihren Eigenverbrauch von ca. 30% auf bis zu 80%. Bei aktuellen Strompreisen von 35-40 ct/kWh und sinkenden Speicherpreisen rechnet sich ein Speicher in den meisten Fällen. Zudem bietet er Notstromversorgung bei Netzausfällen.',
  },
  {
    question: 'Kann mein Dach überhaupt Solar?',
    answer: 'Die meisten Dächer sind geeignet — Süd-, Ost- und Westausrichtungen funktionieren gut. Selbst Norddächer können bei geringer Neigung rentabel sein. Bei der kostenlosen Erstberatung prüfen wir Ihr Dach per Satellit und erstellen eine Ertragsanalyse.',
  },
  {
    question: 'Was passiert bei einem Defekt oder Schaden?',
    answer: 'Unsere Anlagen werden rund um die Uhr fernüberwacht. Bei Leistungsabweichungen werden Sie und wir sofort benachrichtigt. Mit unserem Wartungsvertrag kümmern wir uns um alles. Zudem erhalten Sie 25 Jahre Herstellergarantie auf Module und 10 Jahre auf die Installation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-light-50">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900">
            Häufige Fragen
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
            >
              <div
                className={`rounded-xl border transition-all duration-300 ${
                  openIndex === index
                    ? 'border-celaris-green/20 bg-white shadow-md shadow-celaris-green/[0.04]'
                    : 'border-light-100 bg-white hover:border-light-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display text-[15px] font-semibold text-dark-900 pr-8">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index ? 'bg-celaris-green text-white rotate-0' : 'bg-light-50 text-light-400'
                  }`}>
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] text-light-500 leading-[1.75]">
                        {faq.answer}
                      </p>
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
