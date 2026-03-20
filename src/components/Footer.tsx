import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1b1c19] text-[#fbf9f4]/70 font-body leading-relaxed pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1440px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/images/celaris-logo.png" alt="Celaris" className="h-7 w-auto brightness-200" />
            <span className="text-2xl font-black text-[#fbf9f4] font-headline">Celaris Solar</span>
          </Link>
          <p className="mb-6">
            Ihr Partner für intelligente Energielösungen in Süddeutschland. Handgefertigte
            Planung für maximale Effizienz.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#fbf9f4] font-bold mb-6 uppercase text-sm tracking-widest">
            Navigation
          </h4>
          <ul className="space-y-4">
            {[
              { label: 'Produkte', href: '/#produkte' },
              { label: 'Über uns', href: '/ueber-uns' },
              { label: 'Prozess', href: '/#prozess' },
              { label: 'Kontakt', href: '/#kontakt' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-[#fbf9f4]/60 hover:text-[#fbf9f4] hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[#fbf9f4] font-bold mb-6 uppercase text-sm tracking-widest">
            Rechtliches
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/impressum"
                className="text-[#fbf9f4]/60 hover:text-[#fbf9f4] hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                to="/datenschutz"
                className="text-[#fbf9f4]/60 hover:text-[#fbf9f4] hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Datenschutz
              </Link>
            </li>
            <li>
              <span className="text-[#fbf9f4]/60 inline-block">Karlsruhe, Deutschland</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#fbf9f4] font-bold mb-6 uppercase text-sm tracking-widest">
            Kontakt
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                className="text-[#fbf9f4]/60 hover:text-[#fbf9f4] transition-colors"
                href="mailto:kontakt@celaris.de"
              >
                kontakt@celaris.de
              </a>
            </li>
            <li>
              <a
                className="text-[#fbf9f4]/60 hover:text-[#fbf9f4] transition-colors"
                href="tel:+497211234567"
              >
                +49 721 1234567
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-8 mt-24 pt-8 border-t border-white/5 text-xs tracking-widest flex flex-col md:flex-row justify-between items-center gap-4 text-[#fbf9f4]/40">
        <div>&copy; {new Date().getFullYear()} Celaris Solar. Alle Rechte vorbehalten.</div>
        <div className="flex gap-8">
          <a className="hover:text-[#fbf9f4] transition-colors" href="#">
            Cookie Einstellungen
          </a>
          <a className="hover:text-[#fbf9f4] transition-colors" href="#">
            AGB
          </a>
        </div>
      </div>
    </footer>
  )
}
