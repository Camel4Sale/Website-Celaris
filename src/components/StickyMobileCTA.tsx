import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-xl border-t border-light-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        >
          <div className="flex items-center gap-3 px-4 py-3 safe-area-pb">
            <a
              href="tel:+49721XXXXXXX"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-light-200 text-dark-700 transition-colors hover:border-celaris-green hover:text-celaris-green"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              to="/kontakt"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-celaris-green py-3 text-[14px] font-semibold text-white transition-all hover:bg-celaris-green-dark active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4" />
              Kostenloses Angebot
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
