import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'So funktioniert\'s', to: '/#prozess' },
  { label: 'Über Uns', to: '/ueber-uns' },
  { label: 'Kontakt', to: '/kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-black/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3 shrink-0">
              <img
                src="/images/celaris-logo.png"
                alt="Celaris Solar"
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-lg font-body text-[13px] font-medium tracking-wide transition-all duration-300 ${
                    scrolled
                      ? 'text-dark-700 hover:text-celaris-green hover:bg-celaris-green/[0.05]'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Phone CTA */}
              <a
                href="tel:+49721XXXXXXX"
                className={`ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-dark-700 hover:text-celaris-green'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone className="h-3.5 w-3.5" />
                0721 / XXX XXXX
              </a>

              {/* Primary CTA */}
              <Link
                to="/kontakt"
                className="ml-3 inline-flex items-center gap-2 rounded-full bg-celaris-green px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-celaris-green-dark hover:shadow-lg hover:shadow-celaris-green/20 active:scale-[0.97]"
              >
                Angebot anfordern
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden ${
                mobileOpen ? 'text-white' : scrolled ? 'text-dark-900' : 'text-white'
              }`}
              aria-label="Menü"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl font-semibold text-white/90 transition-colors hover:text-celaris-green"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:+49721XXXXXXX"
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <Phone className="h-4 w-4" />
                  0721 / XXX XXXX
                </a>
                <Link
                  to="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-celaris-green px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-celaris-green-dark"
                >
                  Angebot anfordern
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
