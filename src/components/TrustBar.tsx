import { motion } from 'framer-motion'

const partners = [
  'SolarEdge',
  'Enphase',
  'Q CELLS',
  'BYD',
  'Fronius',
  'SMA',
  'Meyer Burger',
  'Huawei',
]

export default function TrustBar() {
  return (
    <section className="relative bg-white py-12 border-b border-light-100">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-light-400 mb-8">
            Wir arbeiten mit den führenden Herstellern
          </p>

          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-16 w-max"
            >
              {/* Double the items for seamless loop */}
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center h-10"
                >
                  <span className="font-display text-base font-semibold text-light-300 tracking-wide whitespace-nowrap select-none">
                    {partner}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
