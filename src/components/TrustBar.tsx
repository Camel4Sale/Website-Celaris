import { motion } from 'framer-motion'

const partners = ['SolarEdge', 'Enphase', 'Q CELLS', 'BYD', 'Huawei']

export default function TrustBar() {
  return (
    <section className="bg-white py-12 border-b border-outline-variant/10">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-8"
        >
          Unsere Technologie-Partner
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-headline font-black text-2xl tracking-tighter text-on-surface"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
