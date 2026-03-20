import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const rise = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#1A1A1A] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          alt="Modern German house with solar panels"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg24rU44EtSyQ1kQ2WBvmEZp2Rnf_4vrfqnwdmtVuhdvoKfOqrlF8sFsUAnME3Cxm_o9lPCNmDLQEfmNQfI236MRQaCF4OO5lJqEJCN7uXQuPqSnnG1ZKQckBKocrI7rZrCSSkWyPUn2Q736inHTFiETMkN8qnLbeBHvsI2U89qrsIeMrB2MGGOsGormUgXddVcrp3W_Eaguu3f1u5QEYA7lbR4gse9Uwh5nkzLV6QhFh8otEmqyZu7tfGn2AWoNwoLux1cvH0tro"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8">
        <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
          {/* Label */}
          <motion.span
            variants={rise}
            className="inline-block mb-6 font-label text-secondary-container font-semibold uppercase tracking-[0.2em] text-sm"
          >
            Zukunft der Energie
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={rise}
            className="font-headline text-5xl md:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8"
          >
            Ihre Solaranlage.{' '}
            <span className="text-secondary-container">Schlüsselfertig.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={rise}
            className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-xl leading-relaxed"
          >
            Wir planen, installieren und warten Ihre PV-Anlage in Karlsruhe und Umgebung.
            Kostenloses Angebot innerhalb von 48 Stunden.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4">
            <a
              href="/#kontakt"
              className="bg-secondary-container text-on-secondary-fixed px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white transition-colors duration-300 text-center"
            >
              Jetzt Angebot anfragen
            </a>
            <a
              href="/#ueber-uns"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-headline font-bold text-lg hover:bg-white/20 transition-colors duration-300 text-center"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
