import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Leistungen', to: '/leistungen' },
  { label: 'Prozess', to: '/#prozess' },
  { label: 'Über Uns', to: '/ueber-uns' },
  { label: 'Kontakt', to: '/kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  const isHero = !scrolled

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/80 backdrop-blur-2xl border-b border-stone-200/60'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-16 lg:h-[72px] items-center justify-between">
            <Link to="/" className="relative z-10 shrink-0">
              <img src="/images/celaris-logo.png" alt="Celaris" className="h-8 w-auto" />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 ${
                    isHero
                      ? 'text-white/70 hover:text-white hover:bg-white/[0.07]'
                      : 'text-stone-600 hover:text-ink hover:bg-stone-100/60'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="ml-4 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-accent text-ink text-[13px] font-semibold transition-all duration-300 hover:bg-accent-dim active:scale-[0.97]"
              >
                Angebot
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={`relative z-10 lg:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                open ? 'text-white' : isHero ? 'text-white' : 'text-ink'
              }`}
              aria-label="Menü"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/[0.98] backdrop-blur-3xl lg:hidden flex flex-col items-start justify-center px-10"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block font-display text-[2rem] font-bold text-white/80 hover:text-accent py-3 transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-10"
            >
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-ink font-semibold text-base"
              >
                Angebot anfordern
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
