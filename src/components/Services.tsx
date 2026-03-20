import { motion } from 'framer-motion';
import { Sun, Zap, Plug, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Sun,
    title: 'Photovoltaik',
    description:
      'Maßgeschneiderte Solaranlagen für maximalen Ertrag. Wir planen und installieren Ihre PV-Anlage individuell.',
    link: '/leistungen/photovoltaik',
  },
  {
    icon: Zap,
    title: 'Stromspeicher',
    description:
      'Speichern Sie Ihren Solarstrom und nutzen Sie ihn, wenn Sie ihn brauchen.',
    link: '/leistungen/stromspeicher',
  },
  {
    icon: Plug,
    title: 'Wallbox',
    description:
      'Laden Sie Ihr E-Auto mit eigenem Solarstrom. Intelligent und kostengünstig.',
    link: '/leistungen/wallbox',
  },
  {
    icon: Wrench,
    title: 'Wartung & Service',
    description:
      'Regelmäßige Wartung für optimale Leistung Ihrer Anlage über Jahrzehnte.',
    link: '/leistungen/wartung',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Services() {
  return (
    <section className="relative bg-dark-900 py-24 lg:py-32 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-celaris-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Leistungen
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-6">
            Alles aus einer Hand
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Von der Planung bis zur Wartung – wir begleiten Sie auf dem gesamten
            Weg zu Ihrer eigenen Solaranlage.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group rounded-2xl p-8 bg-dark-800/50 border border-white/5 hover:border-celaris-green/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-celaris-green/10 to-celaris-cyan/10">
                <service.icon className="h-6 w-6 text-celaris-green" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-celaris-green text-sm font-medium group/link"
              >
                Mehr erfahren
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
