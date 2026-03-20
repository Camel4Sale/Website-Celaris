import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="glow-line" />
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/images/celaris-logo.png" alt="Celaris" className="h-7 w-auto" />
            </Link>
            <p className="max-w-xs text-[13px] leading-relaxed text-white/40 mb-5">
              Ihr Photovoltaik-Experte in Karlsruhe. Maßgeschneiderte Solaranlagen mit Festpreisgarantie.
            </p>
            <div className="space-y-2">
              <a href="tel:+49721XXXXXXX" className="flex items-center gap-2 text-[12px] text-white/30 hover:text-accent transition-colors"><Phone className="h-3 w-3" /> 0721 / XXX XXXX</a>
              <a href="mailto:info@celaris-solar.de" className="flex items-center gap-2 text-[12px] text-white/30 hover:text-accent transition-colors"><Mail className="h-3 w-3" /> info@celaris-solar.de</a>
              <span className="flex items-center gap-2 text-[12px] text-white/30"><MapPin className="h-3 w-3" /> 76131 Karlsruhe</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {[['Startseite', '/'], ['Leistungen', '/leistungen'], ['Über Uns', '/ueber-uns'], ['Kontakt', '/kontakt']].map(([l, t]) => (
                <li key={t}><Link to={t} className="text-[13px] text-white/40 hover:text-accent transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">Leistungen</h4>
            <ul className="space-y-2.5">
              {['Photovoltaik', 'Stromspeicher', 'Wallbox', 'Wartung'].map((s) => (
                <li key={s}><Link to="/leistungen" className="text-[13px] text-white/40 hover:text-accent transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">Jetzt starten</h4>
            <Link to="/kontakt" className="inline-flex items-center gap-1.5 rounded-lg bg-accent/10 border border-accent/15 px-4 py-2.5 text-[12px] font-semibold text-accent hover:bg-accent/20 transition-all">
              Angebot <ArrowUpRight className="h-3 w-3" />
            </Link>
            <p className="mt-3 text-[10px] text-white/20 leading-relaxed">Kostenlos & unverbindlich.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-white/20">&copy; {new Date().getFullYear()} Celaris Solar GmbH</p>
          <div className="flex gap-5">
            <Link to="/impressum" className="text-[10px] text-white/20 hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-[10px] text-white/20 hover:text-accent transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
