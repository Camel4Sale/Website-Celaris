import { motion } from 'framer-motion'

export default function Impressum() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="font-label text-secondary-container font-bold uppercase tracking-widest text-sm mb-4 block">
              Rechtliches
            </span>
            <h1 className="font-headline text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Impressum
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed">
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  Celaris Solar GmbH
                  <br />
                  Solarstraße 1<br />
                  76131 Karlsruhe
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">Kontakt</h2>
                <p>
                  Telefon: +49 721 1234567
                  <br />
                  E-Mail: kontakt@celaris.de
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  Handelsregister
                </h2>
                <p>
                  Registergericht: Amtsgericht Karlsruhe
                  <br />
                  Registernummer: HRB XXXXX
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  Umsatzsteuer-ID
                </h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  <br />
                  DE XXXXXXXXX
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  Verantwortlich für den Inhalt
                </h2>
                <p>
                  Geschäftsführung Celaris Solar GmbH
                  <br />
                  Solarstraße 1<br />
                  76131 Karlsruhe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
