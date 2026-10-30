import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const defaultMessage = encodeURIComponent(
    'Hello Infodesk Computer Education, I would like to inquire about course admissions and book a free demo class.'
  );

  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-40"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Contact us on WhatsApp"
    >
      <a
        href={`https://wa.me/919769445334?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300"
        title="Chat with Infodesk on WhatsApp"
      >
        <MessageCircle size={22} className="shrink-0 fill-white" />
        <span className="hidden sm:inline text-sm font-semibold tracking-tight">Chat with us</span>
        
        {/* Soft pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10 pointer-events-none group-hover:hidden" />
      </a>
    </motion.aside>
  );
}
