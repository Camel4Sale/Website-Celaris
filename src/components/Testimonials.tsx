import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Die Installation verlief reibungslos und das Team war sehr professionell. Unsere Stromrechnung hat sich halbiert!',
    name: 'Familie Müller',
    location: 'Karlsruhe',
  },
  {
    quote:
      'Von der Beratung bis zur Fertigstellung alles top. Celaris hat unsere Erwartungen übertroffen.',
    name: 'Thomas K.',
    location: 'Ettlingen',
  },
  {
    quote:
      'Endlich unabhängig von steigenden Strompreisen. Die beste Investition, die wir je gemacht haben.',
    name: 'Sandra & Michael',
    location: 'Bruchsal',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-celaris-green text-sm font-semibold tracking-widest uppercase">
            Kundenstimmen
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-4">
            Was unsere Kunden sagen
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="bg-dark-800/50 border border-white/5 rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
