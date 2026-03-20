import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'

const testimonials = [
  {
    quote: 'Von der Beratung bis zur Fertigstellung alles perfekt. Unser Stromverbrauch vom Netz hat sich um 75% reduziert.',
    name: 'Familie Müller',
    loc: 'Karlsruhe-Durlach',
    saving: '1.920 €/Jahr',
  },
  {
    quote: 'Professionell, pünktlich und transparent. Das Angebot war genau auf unser Dach und unseren Verbrauch abgestimmt.',
    name: 'Thomas & Sarah K.',
    loc: 'Ettlingen',
    saving: '1.450 €/Jahr',
  },
  {
    quote: 'Endlich unabhängig von steigenden Strompreisen. Die beste Investition, die wir je gemacht haben.',
    name: 'Sandra & Michael R.',
    loc: 'Bruchsal',
    saving: '2.340 €/Jahr',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-cream relative overflow-hidden">
      <div className="section-number top-[-3%] right-[-2%]">06</div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header with Google rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <span className="tag tag-ink mb-6">Kundenstimmen</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold tracking-[-0.03em] leading-[1.1] text-ink">
              Was unsere Kunden sagen.
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-stone-200 bg-white/80 px-5 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
            </div>
            <span className="text-sm text-ink font-semibold">4.9</span>
            <span className="text-[12px] text-stone-400">· 200+ Reviews</span>
          </div>
        </motion.div>

        {/* Testimonial cards — editorial quote style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-stone-100 bg-white/60 p-7 hover:bg-white transition-all duration-500"
            >
              {/* Large decorative quote */}
              <span className="font-display text-6xl font-extrabold text-accent/10 leading-none select-none">&ldquo;</span>

              <p className="text-[15px] text-ink/80 leading-[1.7] mt-2 mb-6">
                {t.quote}
              </p>

              {/* Saving badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/[0.06] border border-accent/10 px-4 py-1.5 mb-5">
                <span className="text-[11px] text-stone-500">Ersparnis</span>
                <span className="font-display text-sm font-bold text-accent">{t.saving}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-stone-100">
                <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center">
                  <span className="font-display text-xs font-bold text-accent">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="flex items-center gap-1 text-[11px] text-stone-400">
                    <MapPin className="h-2.5 w-2.5" /> {t.loc}
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
