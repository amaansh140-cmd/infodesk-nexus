import React from 'react';
import Counter from '../Counter';

/**
 * RoadmapProgress - Floating glass progress pill indicating current module number.
 * Desktop: Bottom-center above Chat row.
 * Mobile: Top just below the 72px header.
 * Hidden on prefers-reduced-motion. Purely informational (aria-hidden).
 */
export default function RoadmapProgress({
  activeStationIndex = 0,
  totalModules = 10,
  progress = 0,
  isVisible = false,
  isMobile = false,
  prefersReducedMotion = false,
}) {
  if (prefersReducedMotion) return null;

  const isFinish = activeStationIndex >= totalModules;
  const currentModuleNumber = Math.min(Math.max(1, activeStationIndex + 1), totalModules);
  const percent = Math.min(Math.max(0, Math.round(progress * 100)), 100);

  return (
    <div
      aria-hidden="true"
      className={`fixed z-40 transition-all duration-300 pointer-events-none select-none ${
        isMobile
          ? 'top-[80px] left-1/2 -translate-x-1/2 scale-90'
          : 'bottom-7 left-1/2 -translate-x-1/2'
      } ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : isMobile
          ? 'opacity-0 -translate-y-4'
          : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="bg-[#0b1a52]/80 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.36)] flex flex-col items-center min-w-[150px]">
        <div className="flex items-center gap-1 text-xs font-semibold text-white tracking-tight">
          {isFinish ? (
            <span className="text-[#a5d8ff]">Finish · Job training</span>
          ) : (
            <>
              <span className="text-white/80">Module</span>
              <span className="text-[#a5d8ff] font-mono font-bold">
                <Counter
                  value={currentModuleNumber}
                  minDigits={2}
                  fontSize={13}
                  textColor="#a5d8ff"
                  className="inline-block"
                />
              </span>
              <span className="text-white/60">of {totalModules}</span>
            </>
          )}
        </div>

        {/* Thin progress bar underneath */}
        <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-gradient-to-r from-[#2448c9] to-[#a5d8ff] rounded-full transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
