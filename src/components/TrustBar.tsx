import { motion } from 'framer-motion'

const partners = ['SolarEdge', 'Enphase', 'Q CELLS', 'BYD', 'Fronius', 'SMA', 'Meyer Burger', 'Huawei']

export default function TrustBar() {
  return (
    <section className="py-10 bg-cream border-b border-stone-100">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-semibold shrink-0 whitespace-nowrap">
            Premium-Partner
          </p>
          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-14 w-max"
            >
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="font-display text-sm font-semibold text-stone-300 whitespace-nowrap select-none tracking-wide"
                >
                  {p}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
