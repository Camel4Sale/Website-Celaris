import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Produkte', href: '/#produkte' },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Prozess', href: '/#prozess' },
  { label: 'Kontakt', href: '/#kontakt' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setMobileOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1440px] mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/celaris-logo.png" alt="Celaris" className="h-7 w-auto" />
          <span className="text-xl font-black text-on-surface tracking-tighter font-headline">
            Celaris Solar
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline tracking-[-0.02em] font-bold text-sm uppercase text-on-surface hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/#kontakt"
            className="hidden md:inline-block bg-on-secondary-fixed text-secondary-container px-6 py-3 rounded-full font-headline font-bold text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-300 active:scale-95"
          >
            Angebot anfragen
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#fbf9f4]/95 backdrop-blur-xl border-t border-outline-variant/20 overflow-hidden"
          >
            <div className="px-8 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-headline font-bold text-lg text-on-surface hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <a
                  href="/#kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-4 bg-on-secondary-fixed text-secondary-container px-6 py-3 rounded-full font-headline font-bold text-sm uppercase tracking-wider text-center"
                >
                  Angebot anfragen
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
