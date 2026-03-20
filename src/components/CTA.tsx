import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-celaris-green to-celaris-cyan" />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' as const }}
        className="absolute top-20 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' as const }}
        className="absolute bottom-20 right-[10%] w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' as const }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-white font-display text-4xl lg:text-6xl font-bold"
        >
          Bereit für Ihre Energiewende?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-white/80 text-lg lg:text-xl mt-6 max-w-2xl mx-auto"
        >
          Starten Sie jetzt mit einer kostenlosen Beratung und erfahren Sie, wie
          viel Sie mit Solar sparen können.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-white text-dark-900 font-semibold rounded-xl px-10 py-5 text-lg hover:scale-105 transition-transform"
          >
            Jetzt Beratung anfragen
            <ArrowRight size={20} />
          </Link>

          <p className="text-white/60 text-sm mt-4">
            Kostenlos & unverbindlich
          </p>
        </motion.div>
      </div>
    </section>
  );
}
