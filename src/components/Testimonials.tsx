import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Vom Erstgespräch bis zur Montage vergingen nur 6 Wochen. Celaris Solar hat uns kompetent beraten und die Anlage läuft einwandfrei.',
    name: 'Familie Müller',
    location: 'Karlsruhe Durlach',
  },
  {
    quote:
      'Sehr professionelles Team. Die Installation war sauber und das System ist dank der App-Steuerung extrem einfach zu bedienen.',
    name: 'Dr. Markus Weber',
    location: 'Ettlingen',
  },
  {
    quote:
      'Die Wirtschaftlichkeitsrechnung war ehrlich und realistisch. Wir sparen jetzt monatlich bares Geld bei den Stromkosten.',
    name: 'Sabine Becker',
    location: 'Bruchsal',
  },
]

function StarRating() {
  return (
    <div className="flex text-secondary-container mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={20} className="fill-secondary-container text-secondary-container" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-highest/30">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl font-extrabold text-on-surface">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-10 rounded-xl editorial-shadow"
            >
              <StarRating />
              <p className="italic text-on-surface-variant leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-headline font-bold">{t.name}</div>
              <div className="text-sm text-on-surface-variant/60">{t.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
