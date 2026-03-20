import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const navigationLinks = [
  { label: "Startseite", to: "/" },
  { label: "Leistungen", to: "/leistungen" },
  { label: "Über Uns", to: "/ueber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

const serviceLinks = [
  { label: "Photovoltaik", to: "/leistungen#photovoltaik" },
  { label: "Stromspeicher", to: "/leistungen#stromspeicher" },
  { label: "Wallbox", to: "/leistungen#wallbox" },
  { label: "Wartung", to: "/leistungen#wartung" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* Gradient top line */}
      <div className="glow-line h-px w-full" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src="/images/celaris-logo.png"
                alt="Celaris"
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-gray-400">
              Ihr Partner für nachhaltige Energielösungen in Karlsruhe und
              Umgebung.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              {[...Array(3)].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-celaris-green/50 hover:text-celaris-green"
                  aria-label="Social media"
                >
                  <span className="h-4 w-4 rounded-full bg-current opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-gray-400 transition-colors duration-300 hover:text-celaris-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Leistungen */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Leistungen
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-gray-400 transition-colors duration-300 hover:text-celaris-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kontakt */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-celaris-green" />
                <span className="font-body text-sm text-gray-400">
                  Karlsruhe, Deutschland
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-celaris-green" />
                <a
                  href="tel:+49721XXXXXXX"
                  className="font-body text-sm text-gray-400 transition-colors duration-300 hover:text-celaris-green"
                >
                  0721 / XXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-celaris-green" />
                <a
                  href="mailto:info@celaris-solar.de"
                  className="font-body text-sm text-gray-400 transition-colors duration-300 hover:text-celaris-green"
                >
                  info@celaris-solar.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-xs text-gray-400">
              &copy; 2024 Celaris Solar. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <Link
                to="/impressum"
                className="font-body text-xs text-gray-400 transition-colors duration-300 hover:text-celaris-green"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="font-body text-xs text-gray-400 transition-colors duration-300 hover:text-celaris-green"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
