import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone } from 'lucide-react'

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
          className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-[#fbf9f4]/95 backdrop-blur-2xl border-t border-outline-variant/20"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <a
              href="tel:+497211234567"
              className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface hover:text-secondary hover:border-secondary transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="/#kontakt"
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-secondary-container text-on-secondary-fixed py-3.5 font-headline font-bold text-sm uppercase tracking-wider active:scale-[0.98] transition-transform"
            >
              Jetzt Angebot anfragen
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
