import { motion } from 'framer-motion'

export default function Datenschutz() {
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
              Datenschutzerklärung
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
                  1. Datenschutz auf einen Blick
                </h2>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  2. Verantwortliche Stelle
                </h2>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  <br />
                  <br />
                  Celaris Solar GmbH
                  <br />
                  Solarstraße 1<br />
                  76131 Karlsruhe
                  <br />
                  <br />
                  Telefon: +49 721 1234567
                  <br />
                  E-Mail: kontakt@celaris.de
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  3. Datenerfassung auf dieser Website
                </h2>
                <h3 className="font-headline text-base font-semibold text-on-surface/70 mb-2">
                  Kontaktformular
                </h3>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  4. Hosting
                </h2>
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                  personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                  Servern des Hosters gespeichert.
                </p>
              </div>
              <div>
                <h2 className="font-headline text-lg font-bold text-on-surface mb-3">
                  5. Ihre Rechte
                </h2>
                <p>
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                  Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                  ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie
                  zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
