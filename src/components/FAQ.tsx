import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Was kostet eine Photovoltaikanlage?',
    answer:
      'Die Kosten variieren je nach Größe und Anforderungen. Eine typische Anlage für ein Einfamilienhaus liegt zwischen 10.000 und 20.000 Euro. Durch staatliche Förderungen und Einsparungen amortisiert sich die Anlage in der Regel nach 8-12 Jahren.',
  },
  {
    question: 'Wie lange dauert die Installation?',
    answer:
      'Die Installation einer Standard-PV-Anlage dauert in der Regel 1-3 Werktage. Die gesamte Projektdauer von der Beratung bis zur Inbetriebnahme beträgt etwa 4-8 Wochen.',
  },
  {
    question: 'Welche Förderungen gibt es?',
    answer:
      'Es gibt verschiedene Förderprogramme auf Bundes- und Landesebene. Dazu gehören die EEG-Einspeisevergütung, KfW-Förderkredite und regionale Zuschüsse. Wir beraten Sie umfassend zu allen verfügbaren Fördermöglichkeiten.',
  },
  {
    question: 'Lohnt sich ein Stromspeicher?',
    answer:
      'Ein Stromspeicher erhöht Ihren Eigenverbrauch auf bis zu 80% und macht Sie weitgehend unabhängig vom Stromnetz. Besonders bei steigenden Strompreisen lohnt sich die Investition langfristig.',
  },
  {
    question: 'Wie wartungsintensiv ist eine Solaranlage?',
    answer:
      'Solaranlagen sind sehr wartungsarm. Wir empfehlen eine jährliche Inspektion und gelegentliche Reinigung der Module. Mit unserem Wartungsvertrag kümmern wir uns um alles.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-celaris-green text-sm font-semibold tracking-widest uppercase">
            Häufige Fragen
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mt-4">
            Ihre Fragen, unsere Antworten
          </h2>
        </motion.div>

        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="py-6"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left cursor-pointer"
              >
                <span className="text-lg font-display font-semibold text-dark-900 pr-8">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-gray-400" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
