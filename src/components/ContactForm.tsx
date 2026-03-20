import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Karlsruhe, Deutschland', href: undefined },
  { icon: Phone, label: '0721 / XXX XXXX', href: 'tel:+49721XXXXXXX' },
  { icon: Mail, label: 'info@celaris-solar.de', href: 'mailto:info@celaris-solar.de' },
  { icon: Clock, label: 'Mo–Fr: 8:00 – 18:00', href: undefined },
]

export default function ContactForm() {
  const [form, setForm] = useState({ vorname: '', nachname: '', email: '', telefon: '', interesse: '', gebaeude: '', nachricht: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  const inp = 'w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-ink text-[14px] placeholder:text-stone-400 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all'
  const lbl = 'text-[12px] font-semibold text-ink uppercase tracking-wider mb-1.5 block'

  if (sent) {
    return (
      <section className="py-24 bg-cream">
        <div className="max-w-md mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border border-accent/20 bg-white p-10">
            <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-ink mb-2">Vielen Dank!</h3>
            <p className="text-stone-500 text-sm">Wir melden uns innerhalb von 24 Stunden.</p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 lg:py-36 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="tag tag-ink mb-6">Kontakt</span>
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold tracking-[-0.03em] text-ink mb-4">
              Ihr persönliches Angebot.
            </h2>
            <p className="text-stone-500 text-[15px] leading-[1.75] mb-8 max-w-sm">
              Füllen Sie das Formular aus — Sie erhalten innerhalb von 48h ein maßgeschneidertes Angebot mit Festpreisgarantie.
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: I, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 flex items-center justify-center">
                    <I className="w-4 h-4 text-stone-500" />
                  </div>
                  {href ? (
                    <a href={href} className="text-[14px] text-ink hover:text-accent transition-colors">{label}</a>
                  ) : (
                    <span className="text-[14px] text-ink">{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-stone-100 bg-white/80 p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-3">Garantien</p>
              {['Festpreisgarantie — keine versteckten Kosten', 'Antwort innerhalb von 24h', 'Kostenlose Stornierung bis Auftragserteilung'].map((g) => (
                <div key={g} className="flex items-center gap-2 py-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                  <span className="text-[12px] text-ink">{g}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
            <form onSubmit={onSubmit} className="rounded-2xl bg-white border border-stone-100 shadow-xl shadow-ink/[0.03] p-7 lg:p-9 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="vorname" className={lbl}>Vorname *</label><input id="vorname" name="vorname" required value={form.vorname} onChange={onChange} placeholder="Max" className={inp} /></div>
                <div><label htmlFor="nachname" className={lbl}>Nachname *</label><input id="nachname" name="nachname" required value={form.nachname} onChange={onChange} placeholder="Mustermann" className={inp} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="email" className={lbl}>E-Mail *</label><input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="max@beispiel.de" className={inp} /></div>
                <div><label htmlFor="telefon" className={lbl}>Telefon</label><input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={onChange} placeholder="0721 123 4567" className={inp} /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label htmlFor="interesse" className={lbl}>Interesse *</label>
                  <select id="interesse" name="interesse" required value={form.interesse} onChange={onChange} className={`${inp} appearance-none`}>
                    <option value="" disabled>Wählen...</option>
                    {['Photovoltaik', 'Stromspeicher', 'Wallbox', 'Komplett-Paket', 'Beratung'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div><label htmlFor="gebaeude" className={lbl}>Gebäudetyp</label>
                  <select id="gebaeude" name="gebaeude" value={form.gebaeude} onChange={onChange} className={`${inp} appearance-none`}>
                    <option value="" disabled>Wählen...</option>
                    {['Einfamilienhaus', 'Zweifamilienhaus', 'Mehrfamilienhaus', 'Gewerbe'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div><label htmlFor="nachricht" className={lbl}>Nachricht</label><textarea id="nachricht" name="nachricht" rows={3} value={form.nachricht} onChange={onChange} placeholder="Ihr Vorhaben..." className={`${inp} resize-none`} /></div>
              <button type="submit" className="w-full bg-ink text-white font-semibold py-3.5 rounded-xl text-[15px] transition-all hover:bg-ink-soft active:scale-[0.98] flex items-center justify-center gap-2">
                Angebot anfordern <Send className="w-4 h-4 text-accent" />
              </button>
              <p className="text-[10px] text-stone-400 text-center">
                Mit dem Absenden stimmen Sie unserer <a href="/datenschutz" className="text-accent underline">Datenschutzerklärung</a> zu.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
