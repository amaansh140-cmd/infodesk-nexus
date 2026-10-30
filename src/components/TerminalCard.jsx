import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Terminal } from 'lucide-react';

const terminalScenarios = [
  {
    cmd: 'infodesk $ learn --course "data analytics"',
    tools: 'Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau',
    duration: 'Duration: 6 months (hands-on industrial training)',
    level: 'Status: 100% job assistance included ✓',
  },
  {
    cmd: 'infodesk $ learn --course "data science"',
    tools: 'Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica',
    duration: 'Duration: 12 months comprehensive career program',
    level: 'Status: Certified industrial faculties ✓',
  },
  {
    cmd: 'infodesk $ learn --course "full stack web"',
    tools: 'Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress',
    duration: 'Duration: 6 months with real client capstone projects',
    level: 'Status: Flexible small batch timings ✓',
  },
  {
    cmd: 'infodesk $ learn --course "digital marketing"',
    tools: 'Loaded: SEO, Google Ads, SMM, Content, AI Tools',
    duration: 'Duration: 6 months plus practical job training',
    level: 'Status: Live ad spend & portfolio reviews ✓',
  },
];

export default function TerminalCard() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [displayedCmd, setDisplayedCmd] = useState('');
  const [showOutputs, setShowOutputs] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayedCmd(terminalScenarios[0].cmd);
      setShowOutputs(true);
      return;
    }

    const currentScenario = terminalScenarios[index];
    let charPos = 0;
    setDisplayedCmd('');
    setShowOutputs(false);

    // Typing effect
    const typeInterval = setInterval(() => {
      charPos++;
      setDisplayedCmd(currentScenario.cmd.slice(0, charPos));
      if (charPos >= currentScenario.cmd.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutputs(true);
        }, 300);
      }
    }, 45);

    const switchTimeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % terminalScenarios.length);
    }, 5200);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(switchTimeout);
    };
  }, [index, shouldReduceMotion]);

  const current = terminalScenarios[index];

  return (
    <div className="w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]">
      <motion.div
        className="w-full bg-[#0d1847] border border-[#23357d] rounded-panel p-4 sm:p-7 shadow-2xl text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-6deg)_rotateX(4deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f87171]/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#fbbf24]/80 inline-block" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#34d399]/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/50">
            <Terminal size={12} />
            <span>infodesk-cli v2.4</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]">
          {/* Active Command */}
          <div className="text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal">
            <span>{displayedCmd}</span>
            <span className="inline-block w-2 h-4 ml-1 bg-primary animate-pulse" />
          </div>

          {/* Outputs */}
          {showOutputs && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2 pt-2 border-t border-white/5"
            >
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-emerald-400" />
                <span className="text-emerald-300/90 text-xs sm:text-[13px] break-words">
                  {current.tools}
                </span>
              </div>
              <div className="flex items-start gap-2 text-emerald-400">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-emerald-400" />
                <span className="text-emerald-300/90 text-xs sm:text-[13px] break-words">
                  {current.duration}
                </span>
              </div>
              <div className="text-white/50 text-[11px] sm:text-xs pl-5 sm:pl-6">
                <span>{current.level}</span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="pt-3 sm:pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40">
          <span>small batches • 4 branches</span>
          <span className="text-emerald-400/90 font-medium">ready for demo</span>
        </div>
      </motion.div>
    </div>
  );
}
