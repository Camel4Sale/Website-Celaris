import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactDetails = [
  { icon: MapPin, label: 'Karlsruhe, Deutschland', href: undefined },
  { icon: Phone, label: '0721 / XXX XXXX', href: 'tel:+49721XXXXXXX' },
  { icon: Mail, label: 'info@celaris-solar.de', href: 'mailto:info@celaris-solar.de' },
  { icon: Clock, label: 'Mo-Fr: 8:00 - 18:00 Uhr', href: undefined },
]

const interestOptions = [
  'Photovoltaik',
  'Stromspeicher',
  'Wallbox',
  'Komplett-Paket',
  'Nur Beratung',
]

const propertyTypes = [
  'Einfamilienhaus',
  'Zweifamilienhaus',
  'Mehrfamilienhaus',
  'Gewerbe',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    interesse: '',
    gebaeude: '',
    nachricht: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl border border-light-200 bg-white text-dark-900 text-[14px] placeholder:text-light-400 focus:border-celaris-green focus:ring-2 focus:ring-celaris-green/10 outline-none transition-all duration-200'

  const labelBase = 'text-[13px] font-medium text-dark-700 mb-1.5 block'

  if (submitted) {
    return (
      <section className="py-20 lg:py-28 bg-light-50">
        <div className="max-w-lg mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-celaris-green/20 bg-white p-10"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-celaris-green/10">
              <CheckCircle className="h-8 w-8 text-celaris-green" />
            </div>
            <h3 className="font-display text-2xl font-bold text-dark-900 mb-3">
              Vielen Dank!
            </h3>
            <p className="text-light-500">
              Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von
              24 Stunden mit Ihrem individuellen Angebot.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-28 bg-light-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-celaris-green">
              Kontakt
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-dark-900 mb-5">
              Ihr persönliches Angebot
            </h2>
            <p className="text-light-500 text-[16px] leading-[1.7] mb-8 max-w-md">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 48 Stunden
              ein maßgeschneidertes Angebot mit Festpreisgarantie.
            </p>

            <div className="space-y-4 mb-10">
              {contactDetails.map(({ icon: Icon, label, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-3.5"
                >
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-celaris-green/[0.06]">
                    <Icon className="w-4 h-4 text-celaris-green" />
                  </div>
                  {href ? (
                    <a href={href} className="text-[14px] text-dark-700 hover:text-celaris-green transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-[14px] text-dark-700">{label}</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="rounded-xl border border-light-100 bg-white p-5">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-light-400 mb-3">
                Das garantieren wir
              </p>
              {['Festpreisgarantie — keine versteckten Kosten', 'Antwort innerhalb von 24h', 'Kostenlose Stornierung bis Auftragserteilung'].map((item) => (
                <div key={item} className="flex items-center gap-2.5 py-1.5">
                  <CheckCircle className="h-4 w-4 text-celaris-green flex-shrink-0" />
                  <span className="text-[13px] text-dark-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white border border-light-100 shadow-xl shadow-black/[0.03] p-7 lg:p-9 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="vorname" className={labelBase}>Vorname *</label>
                  <input id="vorname" name="vorname" type="text" required value={form.vorname} onChange={handleChange} placeholder="Max" className={inputBase} />
                </div>
                <div>
                  <label htmlFor="nachname" className={labelBase}>Nachname *</label>
                  <input id="nachname" name="nachname" type="text" required value={form.nachname} onChange={handleChange} placeholder="Mustermann" className={inputBase} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className={labelBase}>E-Mail *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="max@beispiel.de" className={inputBase} />
                </div>
                <div>
                  <label htmlFor="telefon" className={labelBase}>Telefon</label>
                  <input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={handleChange} placeholder="0721 / 123 4567" className={inputBase} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="interesse" className={labelBase}>Interesse an *</label>
                  <select id="interesse" name="interesse" required value={form.interesse} onChange={handleChange} className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}>
                    <option value="" disabled>Bitte wählen...</option>
                    {interestOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="gebaeude" className={labelBase}>Gebäudetyp</label>
                  <select id="gebaeude" name="gebaeude" value={form.gebaeude} onChange={handleChange} className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236b7280%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}>
                    <option value="" disabled>Bitte wählen...</option>
                    {propertyTypes.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="nachricht" className={labelBase}>Ihre Nachricht</label>
                <textarea id="nachricht" name="nachricht" rows={4} value={form.nachricht} onChange={handleChange} placeholder="Erzählen Sie uns von Ihrem Vorhaben..." className={`${inputBase} resize-none`} />
              </div>

              <button
                type="submit"
                className="w-full bg-celaris-green text-white font-semibold py-3.5 rounded-xl text-[15px] hover:bg-celaris-green-dark hover:shadow-lg hover:shadow-celaris-green/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Angebot anfordern
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-light-400 text-center">
                Mit dem Absenden stimmen Sie unserer{' '}
                <a href="/datenschutz" className="text-celaris-green underline hover:text-celaris-green-dark transition-colors">
                  Datenschutzerklärung
                </a>{' '}
                zu. Keine Weitergabe Ihrer Daten an Dritte.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
