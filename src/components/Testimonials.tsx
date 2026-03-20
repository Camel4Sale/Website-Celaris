import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'

const testimonials = [
  {
    quote: 'Von der Beratung bis zur Fertigstellung alles perfekt. Unser Stromverbrauch vom Netz hat sich um 75% reduziert. Die Investition hat sich schneller amortisiert als berechnet.',
    name: 'Familie Müller',
    location: 'Karlsruhe-Durlach',
    system: '10.8 kWp + 10 kWh Speicher',
    savings: '1.920 €/Jahr',
    rating: 5,
  },
  {
    quote: 'Professionell, pünktlich und transparent. Celaris hat uns ein maßgeschneidertes Angebot gemacht, das genau auf unser Dach und unseren Verbrauch abgestimmt war.',
    name: 'Thomas & Sarah K.',
    location: 'Ettlingen',
    system: '8.6 kWp + Wallbox',
    savings: '1.450 €/Jahr',
    rating: 5,
  },
  {
    quote: 'Endlich unabhängig von steigenden Strompreisen. Das Monitoring zeigt uns in Echtzeit, wie viel wir produzieren. Die beste Investition, die wir je gemacht haben.',
    name: 'Sandra & Michael R.',
    location: 'Bruchsal',
    system: '12.4 kWp + 15 kWh Speicher',
    savings: '2.340 €/Jahr',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
              Kundenstimmen
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold tracking-tight text-dark-900">
              Was unsere Kunden sagen
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-3 rounded-xl border border-light-100 bg-light-50 px-5 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-dark-900">4.9</span>
              <span className="text-light-500"> / 5.0 · 200+ Bewertungen</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-light-100 bg-white p-7 hover:shadow-lg hover:shadow-black/[0.03] hover:border-celaris-green/15 transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-celaris-green/15 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] text-dark-700 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Savings highlight */}
              <div className="rounded-xl bg-celaris-green/[0.04] border border-celaris-green/10 px-4 py-3 mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] text-light-500">Ersparnis</span>
                  <span className="font-display text-sm font-bold text-celaris-green">{t.savings}</span>
                </div>
                <p className="text-[11px] text-light-400 mt-0.5">{t.system}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-celaris-green/20 to-celaris-cyan/20 flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-celaris-green">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-900">{t.name}</p>
                  <p className="flex items-center gap-1 text-[12px] text-light-400">
                    <MapPin className="h-3 w-3" />
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
