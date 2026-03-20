import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const rise = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function About() {
  return (
    <section className="py-24 md:py-32 bg-surface" id="ueber-uns">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Stat cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="bg-surface-container-low p-10 rounded-xl editorial-shadow aspect-square flex flex-col justify-center"
          >
            <div className="text-5xl font-headline font-extrabold text-secondary mb-2">500+</div>
            <div className="text-on-surface-variant font-medium">Erfolgreiche Projekte</div>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="bg-secondary-container p-10 rounded-xl editorial-shadow aspect-square flex flex-col justify-center mt-0 md:mt-12"
          >
            <div className="text-5xl font-headline font-extrabold text-on-secondary-fixed mb-2">15+</div>
            <div className="text-on-secondary-fixed/80 font-medium">Jahre Erfahrung</div>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow aspect-square flex flex-col justify-center"
          >
            <div className="text-5xl font-headline font-extrabold text-on-surface mb-2">98%</div>
            <div className="text-on-surface-variant font-medium">Kundenzufriedenheit</div>
          </motion.div>
        </div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="font-label text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
            Über Celaris Solar
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">
            Nachhaltige Energie für Generationen.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            Als regionaler Experte in Karlsruhe setzen wir auf höchste Qualität und persönliche
            Beratung. Wir begleiten Sie von der ersten Idee bis zur schlüsselfertigen Übergabe
            Ihrer Solaranlage.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
            Unsere Mission ist es, den Umstieg auf erneuerbare Energien so einfach und effizient
            wie möglich zu gestalten — mit modernster Technik und handwerklicher Präzision.
          </p>
          <a
            href="/ueber-uns"
            className="inline-flex items-center text-on-surface font-bold border-b-2 border-secondary-container pb-1 hover:text-secondary transition-colors"
          >
            Unsere Geschichte entdecken
            <ArrowRight className="ml-2 h-4 w-4 text-secondary" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
