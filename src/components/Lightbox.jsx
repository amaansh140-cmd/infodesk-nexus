import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Lightbox({ isOpen, image, title, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-deep/80 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Image Viewer'}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-surface rounded-panel overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-line/60 bg-surface">
              <div>
                {title && <h4 className="text-sm font-bold text-deep">{title}</h4>}
                {caption && <p className="text-xs text-muted">{caption}</p>}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-soft text-ink/70 hover:text-ink focus:outline-none transition-colors"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Preview */}
            <div className="p-3 sm:p-5 flex items-center justify-center overflow-auto bg-background/50">
              <img
                src={image}
                alt={title || 'Certificate or gallery view'}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
