import React, { useState } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function ModuleAccordion({
  modules,
  defaultOpenIndex = 0,
  openIndices: controlledOpenIndices,
  onToggle: onControlledToggle,
  useSpotlight = false,
}) {
  const [internalOpenIndices, setInternalOpenIndices] = useState([defaultOpenIndex]);
  const isControlled = controlledOpenIndices !== undefined;
  const openIndices = isControlled ? controlledOpenIndices : internalOpenIndices;

  const toggleModule = (index) => {
    if (isControlled && onControlledToggle) {
      onControlledToggle(index);
    } else {
      setInternalOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    }
  };

  return (
    <div className="space-y-3">
      {modules.map((mod, idx) => {
        const isOpen = openIndices.includes(idx);
        const cardContent = (
          <div
            className={`rounded-panel bg-surface overflow-hidden transition-all duration-200 ${
              !useSpotlight ? (
                isOpen
                  ? 'border border-primary/40 shadow-[0_4px_16px_-4px_rgba(36,72,201,0.12)]'
                  : 'border border-line/80 hover:border-line shadow-sm'
              ) : ''
            }`}
          >
            <button
              type="button"
              onClick={() => toggleModule(idx)}
              className={`w-full flex items-center justify-between p-5 text-left font-semibold transition-colors focus:outline-none ${
                isOpen ? 'bg-soft/25 text-deep' : 'text-deep hover:bg-soft/15'
              }`}
              aria-expanded={isOpen}
              aria-controls={`module-content-${idx}`}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-primary text-white shadow-sm' : 'bg-soft text-primary'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[17px] font-bold text-deep">{mod.name}</span>
              </div>
              <div className="flex items-center gap-3 text-muted text-xs">
                <span className="hidden sm:inline bg-background px-2 py-0.5 rounded-full border border-line/60">
                  {mod.topics.length} topics
                </span>
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
                  id={`module-content-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-line/40 bg-surface">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      {mod.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-sm text-ink/90">
                          <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="leading-snug">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

        if (useSpotlight) {
          return (
            <div id={`module-${idx}`} key={mod.name} className="scroll-mt-[88px]">
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(36, 72, 201, 0.08)"
                intensity={0.2}
                proximity={100}
                className="!p-0 !rounded-panel overflow-hidden transition-all duration-200"
              >
                {cardContent}
              </SpotlightCard>
            </div>
          );
        }

        return (
          <div id={`module-${idx}`} key={mod.name} className="scroll-mt-[88px]">
            {cardContent}
          </div>
        );
      })}
    </div>
  );
}
