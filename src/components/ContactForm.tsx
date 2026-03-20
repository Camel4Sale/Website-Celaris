'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactDetails = [
  { icon: MapPin, label: 'Karlsruhe, Deutschland' },
  { icon: Phone, label: '0721 / XXX XXXX' },
  { icon: Mail, label: 'info@celaris-solar.de' },
  { icon: Clock, label: 'Mo-Fr: 8:00 - 18:00 Uhr' },
];

const interestOptions = [
  'Photovoltaik',
  'Stromspeicher',
  'Wallbox',
  'Komplett-Paket',
  'Sonstiges',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    interesse: '',
    nachricht: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: form submission logic
    console.log('Form submitted:', form);
  };

  const inputClasses =
    'w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-celaris-green focus:ring-2 focus:ring-celaris-green/20 outline-none transition-all font-body';

  const labelClasses = 'text-sm font-medium text-gray-700 mb-1.5 block font-display';

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left side — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
          >
            <span className="text-celaris-green text-sm font-semibold tracking-widest uppercase font-display">
              Kontakt
            </span>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mt-4 mb-6">
              Sprechen Sie mit&nbsp;uns
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Wir beraten Sie gerne persönlich zu Ihrer individuellen Solarlösung.
              Kontaktieren Sie uns — wir melden uns zeitnah bei Ihnen.
            </p>

            <div className="space-y-5">
              {contactDetails.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 * i }}
                >
                  <div className="flex-shrink-0 bg-celaris-green/10 text-celaris-green rounded-xl p-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-body">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 space-y-6"
            >
              {/* Vorname + Nachname */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vorname" className={labelClasses}>
                    Vorname
                  </label>
                  <input
                    id="vorname"
                    name="vorname"
                    type="text"
                    required
                    value={form.vorname}
                    onChange={handleChange}
                    placeholder="Max"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="nachname" className={labelClasses}>
                    Nachname
                  </label>
                  <input
                    id="nachname"
                    name="nachname"
                    type="text"
                    required
                    value={form.nachname}
                    onChange={handleChange}
                    placeholder="Mustermann"
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* E-Mail */}
              <div>
                <label htmlFor="email" className={labelClasses}>
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="max@beispiel.de"
                  className={inputClasses}
                />
              </div>

              {/* Telefon */}
              <div>
                <label htmlFor="telefon" className={labelClasses}>
                  Telefon
                </label>
                <input
                  id="telefon"
                  name="telefon"
                  type="tel"
                  value={form.telefon}
                  onChange={handleChange}
                  placeholder="0721 / 123 4567"
                  className={inputClasses}
                />
              </div>

              {/* Interesse */}
              <div>
                <label htmlFor="interesse" className={labelClasses}>
                  Interesse an
                </label>
                <select
                  id="interesse"
                  name="interesse"
                  required
                  value={form.interesse}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                >
                  <option value="" disabled>
                    Bitte wählen...
                  </option>
                  {interestOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Nachricht */}
              <div>
                <label htmlFor="nachricht" className={labelClasses}>
                  Ihre Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={5}
                  value={form.nachricht}
                  onChange={handleChange}
                  placeholder="Erzählen Sie uns von Ihrem Vorhaben..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-celaris-green to-celaris-cyan text-white font-semibold py-4 rounded-xl text-lg hover:shadow-lg hover:shadow-celaris-green/25 transition-all flex items-center justify-center gap-2"
              >
                Nachricht senden
                <Send className="w-5 h-5" />
              </button>

              {/* Privacy note */}
              <p className="text-xs text-gray-400 text-center pt-2">
                Mit dem Absenden stimmen Sie unserer{' '}
                <a
                  href="/datenschutz"
                  className="text-celaris-green underline hover:text-celaris-green/80 transition-colors"
                >
                  Datenschutzerklärung
                </a>{' '}
                zu.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
