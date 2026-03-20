import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <section className="py-24 bg-surface" id="kontakt">
        <div className="max-w-md mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white p-10 editorial-shadow"
          >
            <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-secondary-container/20 flex items-center justify-center">
              <CheckCircle className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">Vielen Dank!</h3>
            <p className="text-on-surface-variant text-sm">
              Wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  const inputClass =
    'w-full bg-surface-container-low border-none p-4 rounded-lg text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-secondary focus:outline-none transition-colors'
  const labelClass = 'text-xs font-bold uppercase tracking-wider text-on-surface/60 ml-2'

  return (
    <section className="py-24 bg-surface" id="kontakt">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="font-headline text-4xl font-extrabold mb-12">Schreiben Sie uns.</h2>
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={labelClass}>Name</label>
                  <input className={inputClass} placeholder="Ihr Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className={labelClass}>E-Mail</label>
                  <input className={inputClass} placeholder="email@beispiel.de" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Anschrift</label>
                <input
                  className={inputClass}
                  placeholder="Straße, Hausnummer, PLZ, Ort"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Nachricht</label>
                <textarea
                  className={`${inputClass} resize-none`}
                  placeholder="Wie können wir Ihnen helfen?"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-on-surface text-surface py-5 px-12 rounded-full font-headline font-bold text-lg hover:bg-secondary transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </motion.div>

          {/* Details side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            className="bg-surface-container-low p-12 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-headline text-2xl font-extrabold mb-8">Kontaktdaten</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-bold">Telefon</div>
                    <div className="text-on-surface-variant">+49 721 1234567</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-bold">E-Mail</div>
                    <div className="text-on-surface-variant">kontakt@celaris.de</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-bold">Hauptsitz Karlsruhe</div>
                    <div className="text-on-surface-variant">Solarstraße 1, 76131 Karlsruhe</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 overflow-hidden rounded-xl h-64 grayscale contrast-125 border border-outline-variant/20">
              <img
                alt="Map of Karlsruhe"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_aYCvteVVdDdw1_VYsCRHvzq9NWgHb7vJe9GJ_7ulBbOOBFTd49dL1kMDlac52vHFH2uDC6IVB4T5uf4f325FOWTYnXj2mOJtJn9PQrO3UE0JEt9gZx3LLq4mXkaCxnTKREUZ3FrC_VM-gWHME6-aOOfg-7hm3WkSRaMwGIpEk9sVtflNTNB8hHvXlfJX3g1rzbL5MJJQyLRRxdSFZg7rIsiF7qmPHTnnFshaq0e3TV9_yDsit--XS0mCkwwU39lPEs0dR80Nfk"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
