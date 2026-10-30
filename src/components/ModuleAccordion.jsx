import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModuleAccordion({ modules, defaultOpenIndex = 0 }) {
  const [openIndices, setOpenIndices] = useState([defaultOpenIndex]);

  const toggleModule = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-3">
      {modules.map((mod, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={mod.name}
            className="border border-line/80 rounded-panel bg-surface overflow-hidden shadow-sm"
          >
            <button
              type="button"
              onClick={() => toggleModule(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-deep hover:bg-soft/20 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-soft text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="text-[17px] font-bold text-deep">{mod.name}</span>
              </div>
              <div className="flex items-center gap-3 text-muted text-xs">
                <span>{mod.topics.length} topics</span>
                <ChevronDown
                  size={18}
                  className={`text-primary transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <div className="px-6 pb-6 pt-1 border-t border-line/40">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-sm text-ink/85">
                          <Check size={15} className="text-primary mt-1 shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
