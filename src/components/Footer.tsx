import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'

const navigationLinks = [
  { label: 'Startseite', to: '/' },
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Über Uns', to: '/ueber-uns' },
  { label: 'Kontakt', to: '/kontakt' },
]

const serviceLinks = [
  { label: 'Photovoltaik', to: '/leistungen' },
  { label: 'Stromspeicher', to: '/leistungen' },
  { label: 'Wallbox & E-Mobilität', to: '/leistungen' },
  { label: 'Wartung & Service', to: '/leistungen' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-white">
      {/* Top gradient line */}
      <div className="glow-line" />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Col 1: Logo & Description — spans 2 on lg */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img src="/images/celaris-logo.png" alt="Celaris Solar" className="h-8 w-auto" />
            </Link>
            <p className="max-w-xs text-[13px] leading-relaxed text-light-500 mb-6">
              Ihr Photovoltaik-Experte in Karlsruhe. Maßgeschneiderte Solaranlagen
              mit Festpreisgarantie und persönlicher Betreuung.
            </p>

            {/* Contact quick links */}
            <div className="space-y-2.5">
              <a href="tel:+49721XXXXXXX" className="flex items-center gap-2 text-[13px] text-light-400 hover:text-celaris-green transition-colors">
                <Phone className="h-3.5 w-3.5" /> 0721 / XXX XXXX
              </a>
              <a href="mailto:info@celaris-solar.de" className="flex items-center gap-2 text-[13px] text-light-400 hover:text-celaris-green transition-colors">
                <Mail className="h-3.5 w-3.5" /> info@celaris-solar.de
              </a>
              <span className="flex items-center gap-2 text-[13px] text-light-400">
                <MapPin className="h-3.5 w-3.5" /> 76131 Karlsruhe
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-light-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[13px] text-light-500 hover:text-celaris-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Leistungen */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-light-400 mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[13px] text-light-500 hover:text-celaris-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: CTA */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-light-400 mb-4">
              Jetzt starten
            </h4>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-1.5 rounded-lg bg-celaris-green/10 border border-celaris-green/20 px-4 py-2.5 text-[13px] font-semibold text-celaris-green hover:bg-celaris-green/20 transition-all"
            >
              Angebot anfordern
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <p className="mt-3 text-[11px] text-light-500 leading-relaxed">
              Kostenlos & unverbindlich.<br />Antwort in 24h.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.06] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[11px] text-light-500">
              &copy; {new Date().getFullYear()} Celaris Solar GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-5">
              <Link to="/impressum" className="text-[11px] text-light-500 hover:text-celaris-green transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-[11px] text-light-500 hover:text-celaris-green transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
