import { motion } from 'framer-motion'

export default function Datenschutz() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-dark-900 mb-12">Datenschutzerklärung</h1>
          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">1. Datenschutz auf einen Blick</h2>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">2. Verantwortliche Stelle</h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />Celaris Solar GmbH<br />Musterstraße 1<br />76131 Karlsruhe<br /><br />Telefon: 0721 / XXX XXXX<br />E-Mail: info@celaris-solar.de</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-display text-lg font-medium text-dark-900 mb-2">Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">4. Hosting</h2>
              <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-dark-900 mb-3">5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
