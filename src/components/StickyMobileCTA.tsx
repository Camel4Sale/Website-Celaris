import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-cream/95 backdrop-blur-2xl border-t border-stone-200"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <a href="tel:+49721XXXXXXX" className="w-11 h-11 rounded-xl border border-stone-200 flex items-center justify-center text-ink hover:text-accent hover:border-accent transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <Link to="/kontakt" className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-ink py-3 text-[14px] font-semibold text-white active:scale-[0.98] transition-transform">
              Kostenloses Angebot
              <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
