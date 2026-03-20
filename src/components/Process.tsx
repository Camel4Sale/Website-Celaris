import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Wrench, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Beratung',
    description: 'Kostenlose Erstberatung und Analyse Ihres Energiebedarfs',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Planung',
    description: 'Individuelle Planung und maßgeschneidertes Angebot',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Installation',
    description: 'Professionelle Installation durch unser Expertenteam',
  },
  {
    number: '04',
    icon: Headphones,
    title: 'Betreuung',
    description: 'Langfristige Wartung und Support für Ihre Anlage',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Process() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-celaris-green text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            So funktioniert&apos;s
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            In 4 Schritten zur Solaranlage
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Connecting line – desktop (horizontal) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-celaris-green to-celaris-cyan opacity-30" />

          {/* Connecting line – mobile (vertical) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-[29px] w-0.5 bg-gradient-to-b from-celaris-green to-celaris-cyan opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center gap-6 lg:gap-0"
              >
                {/* Numbered circle with gradient border */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-50 p-[2px]">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-celaris-green to-celaris-cyan" />
                    <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gray-50">
                      <span className="font-display text-lg font-bold bg-gradient-to-r from-celaris-green to-celaris-cyan bg-clip-text text-transparent">
                        {step.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:mt-8">
                  <div className="mb-4 flex lg:justify-center">
                    <step.icon className="h-6 w-6 text-celaris-green" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
