import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Installationen' },
  { value: '98%', label: 'Kundenzufriedenheit' },
  { value: '15+', label: 'Jahre Erfahrung' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-celaris-green"
        >
          ÜBER UNS
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 font-display text-4xl font-bold text-dark-900 lg:text-5xl"
        >
          Regionale Expertise trifft Innovation
        </motion.h2>

        {/* Two-column grid */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
              Celaris ist Ihr verlässlicher Partner für Photovoltaik in der Region
              Karlsruhe. Als lokal verwurzeltes Unternehmen kennen wir die
              Gegebenheiten vor Ort – von der Dachlandschaft der Fächerstadt bis hin
              zu den spezifischen Förder&shy;möglichkeiten in Baden-Württemberg.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
              Unser erfahrenes Team aus Ingenieuren und Energie&shy;beratern
              begleitet Sie von der ersten Beratung über die Planung bis zur
              schlüssel&shy;fertigen Installation. Dabei setzen wir ausschließlich
              auf hochwertige Komponenten namhafter Hersteller und modernste
              Technologien.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed">
              Unser Ziel: Ihnen eine Solar&shy;lösung zu bieten, die perfekt auf Ihre
              Bedürfnisse zugeschnitten ist – wirtschaftlich, nachhaltig und mit
              einem Service, der keine Wünsche offen lässt.
            </motion.p>
          </motion.div>

          {/* Right — Stat cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="glass-light rounded-2xl p-6"
              >
                <p className="gradient-text text-4xl font-bold">{stat.value}</p>
                <p className="mt-1 text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
