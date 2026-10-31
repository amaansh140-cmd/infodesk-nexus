import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Terminal, Sparkles } from 'lucide-react';

const terminalScenarios = [
  {
    id: 'analytics',
    label: 'Data Analytics',
    cmdBase: 'infodesk $ learn --course',
    courseName: '"data analytics"',
    tools: 'Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau',
    duration: 'Duration: 6 months (hands-on industrial training)',
    level: 'Status: 100% job assistance included ✓',
  },
  {
    id: 'science',
    label: 'Data Science',
    cmdBase: 'infodesk $ learn --course',
    courseName: '"data science"',
    tools: 'Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica',
    duration: 'Duration: 12 months comprehensive career program',
    level: 'Status: Certified industrial faculties ✓',
  },
  {
    id: 'web',
    label: 'Full Stack Web',
    cmdBase: 'infodesk $ learn --course',
    courseName: '"full stack web"',
    tools: 'Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress',
    duration: 'Duration: 6 months with real client capstone projects',
    level: 'Status: Flexible small batch timings ✓',
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    cmdBase: 'infodesk $ learn --course',
    courseName: '"digital marketing"',
    tools: 'Loaded: SEO, Google Ads, SMM, Content, AI Tools',
    duration: 'Duration: 6 months plus practical job training',
    level: 'Status: Live ad spend & portfolio reviews ✓',
  },
];

export default function TerminalCard() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showOutputs, setShowOutputs] = useState(false);

  const current = terminalScenarios[index];
  const fullCmd = `${current.cmdBase} ${current.courseName}`;

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedChars(fullCmd.length);
      setShowOutputs(true);
      return;
    }

    setTypedChars(0);
    setShowOutputs(false);

    let currentLength = 0;
    const typeInterval = setInterval(() => {
      currentLength++;
      setTypedChars(currentLength);
      if (currentLength >= fullCmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutputs(true);
        }, 250);
      }
    }, 38);

    const switchTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % terminalScenarios.length);
    }, 5600);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(switchTimeout);
    };
  }, [index, shouldReduceMotion]);

  const displayedText = fullCmd.slice(0, typedChars);

  return (
    <div className="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]">
      <motion.div
        className="w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none" />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          </div>

          {/* Interactive track switcher pills */}
          <div className="hidden sm:flex items-center gap-1">
            {terminalScenarios.map((sc, sIdx) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setIndex(sIdx)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                  index === sIdx
                    ? 'bg-bright/20 text-white font-bold border border-bright/40'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {sc.label.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/50">
            <Terminal size={12} className="text-bright" />
            <span>infodesk-cli</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]">
          {/* Active Command with Syntax Colors */}
          <div className="text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal">
            <span className="text-[#4a6df0] mr-2">infodesk</span>
            <span className="text-white/40 mr-2">$</span>
            {typedChars > 11 && <span className="text-emerald-400 mr-2">learn</span>}
            {typedChars > 17 && <span className="text-indigo-300 mr-2">--course</span>}
            {typedChars > 26 && (
              <span className="text-amber-300 font-bold">
                {displayedText.slice(26)}
              </span>
            )}
            <span className="inline-block w-2 h-4 ml-1 bg-bright animate-pulse" />
          </div>

          {/* Outputs */}
          {showOutputs && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2.5 pt-2 border-t border-white/10"
            >
              <div className="flex items-start gap-2.5 text-emerald-400">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-400" />
                <span className="text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium">
                  {current.tools}
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-emerald-400">
                <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-400" />
                <span className="text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium">
                  {current.duration}
                </span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6">
                <Sparkles size={12} className="text-amber-400" />
                <span>{current.level}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
            <span>small batches • 4 Mumbai branches</span>
          </span>
          <span className="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
            ready for demo
          </span>
        </div>
      </motion.div>
    </div>
  );
}
