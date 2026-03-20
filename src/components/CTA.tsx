import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="bg-secondary-container rounded-[2rem] p-12 md:p-24 text-center overflow-hidden relative"
        >
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-7xl font-extrabold text-on-secondary-fixed mb-8">
              Bereit für Solar?
            </h2>
            <p className="text-xl md:text-2xl text-on-secondary-fixed/70 font-medium mb-12 max-w-2xl mx-auto">
              Sichern Sie sich jetzt Ihr kostenloses Festpreisangebot. Unverbindlich und schnell.
            </p>
            <a
              href="/#kontakt"
              className="inline-block bg-on-secondary-fixed text-secondary-container px-12 py-6 rounded-full font-headline font-bold text-xl hover:bg-on-secondary-fixed/90 transition-all duration-300"
            >
              Jetzt Angebot anfragen
            </a>
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-on-secondary-fixed/5 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
