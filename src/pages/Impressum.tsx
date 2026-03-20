import { motion } from 'framer-motion'

export default function Impressum() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-dark-950 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-white">Impressum</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="space-y-8 text-[15px] text-light-600 leading-[1.75]">
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-900 mb-3">Angaben gemäß § 5 TMG</h2>
                <p>Celaris Solar GmbH<br />Musterstraße 1<br />76131 Karlsruhe</p>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-900 mb-3">Kontakt</h2>
                <p>Telefon: 0721 / XXX XXXX<br />E-Mail: info@celaris-solar.de</p>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-900 mb-3">Handelsregister</h2>
                <p>Registergericht: Amtsgericht Karlsruhe<br />Registernummer: HRB XXXXX</p>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-900 mb-3">Umsatzsteuer-ID</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />DE XXXXXXXXX</p>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-dark-900 mb-3">Verantwortlich für den Inhalt</h2>
                <p>Geschäftsführung Celaris Solar GmbH<br />Musterstraße 1<br />76131 Karlsruhe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
