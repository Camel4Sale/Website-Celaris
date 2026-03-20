import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const trustBadges = [
  'Kostenlose Beratung',
  'Unverbindliches Angebot',
  'Förderung inklusive',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden">
      {/* Radial gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[700px] w-[700px] rounded-full bg-celaris-green/[0.07] blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[600px] w-[600px] rounded-full bg-celaris-cyan/[0.05] blur-[100px]" />
      </div>

      {/* Noise overlay */}
      <div className="noise absolute inset-0 pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center lg:px-8"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-celaris-green/[0.08] px-5 py-2 text-sm font-medium text-celaris-green">
            <span className="h-2 w-2 rounded-full bg-celaris-green" />
            Photovoltaik-Experte in Karlsruhe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Ihre Energie
          <br />
          <span className="gradient-text">unabhängigkeit</span>
          <br />
          beginnt hier.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 sm:text-xl"
        >
          Mit einer maßgeschneiderten Solaranlage von Celaris senken Sie Ihre
          Stromkosten nachhaltig und steigern den Wert Ihrer Immobilie.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-celaris-green to-celaris-cyan px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Kostenlose Beratung
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5"
          >
            Unsere Leistungen
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 text-sm text-gray-400"
            >
              <CheckCircle className="h-4 w-4 text-celaris-green" />
              {badge}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' as const }}
        >
          <ChevronDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
