import { motion } from 'framer-motion';
import { TrendingDown, Leaf, Home, Shield, Zap, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingDown,
    title: 'Stromkosten senken',
    description: 'Reduzieren Sie Ihre Stromrechnung um bis zu 80% mit eigener Solarenergie.',
  },
  {
    icon: Leaf,
    title: 'Nachhaltig leben',
    description: 'Reduzieren Sie Ihren CO₂-Fußabdruck und schützen Sie die Umwelt.',
  },
  {
    icon: Home,
    title: 'Wertsteigerung',
    description: 'Eine Solaranlage steigert den Wert Ihrer Immobilie nachhaltig.',
  },
  {
    icon: Shield,
    title: '25 Jahre Garantie',
    description: 'Langfristige Garantie auf alle Komponenten für Ihre Sicherheit.',
  },
  {
    icon: Zap,
    title: 'Unabhängigkeit',
    description: 'Machen Sie sich unabhängig von steigenden Strompreisen.',
  },
  {
    icon: Award,
    title: 'Zertifiziert',
    description: 'Qualifizierte Fachbetrieb-Zertifizierung und geprüfte Qualität.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-celaris-green text-sm font-semibold tracking-widest uppercase">
            Ihre Vorteile
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mt-4">
            Warum Celaris?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-celaris-green/20 transition-all duration-500"
            >
              <benefit.icon className="text-celaris-green mb-5" size={32} />
              <h3 className="font-display font-semibold text-lg text-dark-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-500">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
