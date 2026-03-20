import { motion } from 'framer-motion'

export default function Impressum() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-12">Impressum</h1>
          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">Angaben gemäß § 5 TMG</h2>
              <p>Celaris Solar GmbH<br />Musterstraße 1<br />76131 Karlsruhe</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">Kontakt</h2>
              <p>Telefon: 0721 / XXX XXXX<br />E-Mail: info@celaris-solar.de</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">Handelsregister</h2>
              <p>Registergericht: Amtsgericht Karlsruhe<br />Registernummer: HRB XXXXX</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />DE XXXXXXXXX</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">Verantwortlich für den Inhalt</h2>
              <p>Geschäftsführung Celaris Solar GmbH<br />Musterstraße 1<br />76131 Karlsruhe</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
