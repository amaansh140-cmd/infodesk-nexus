import React from 'react';
import { Check, Flag } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import ClickSpark from '../ClickSpark';
import StarBorder from '../StarBorder';

/**
 * RoadmapStation - Individual station node and glass card on the roadmap
 */
export default function RoadmapStation({
  station,
  isFinish = false,
  finishData,
  isVisited = false,
  isActive = false,
  isLeft = false,
  isMobile = false,
  nodeRef,
  onNodeClick,
  prefersReducedMotion = false,
  isTouchDevice = false,
  isSaveData = false,
}) {
  const numberStr = station?.number ? String(station.number).padStart(2, '0') : '';

  // Render the interactive Station Node (real button, 44px min hit area)
  const nodeButton = (
    <div ref={nodeRef} className="relative flex items-center justify-center shrink-0">
      <button
        type="button"
        onClick={onNodeClick}
        aria-label={
          isFinish
            ? `Go to finish, ${finishData?.title || 'Job training'}`
            : `Go to module ${station.number}, ${station.title}`
        }
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#a5d8ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1a52] cursor-pointer select-none ${
          isVisited || prefersReducedMotion
            ? 'bg-[#2448c9] text-white shadow-[0_0_18px_rgba(74,109,240,0.65)] ring-2 ring-white/30'
            : 'bg-[#0e1e5c] text-white/80 border-2 border-white/20 hover:border-white/50 hover:bg-[#13266f]'
        } ${isActive ? 'scale-110 ring-4 ring-[#a5d8ff]/60 shadow-[0_0_24px_rgba(165,216,255,0.7)]' : ''}`}
      >
        {isFinish ? (
          <Flag size={18} className="text-white" />
        ) : isVisited || prefersReducedMotion ? (
          <Check size={18} strokeWidth={2.6} className="text-white" />
        ) : (
          <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
            {station.number}
          </span>
        )}
      </button>
    </div>
  );

  // Wrap node with ClickSpark unless touch / saveData / reduced-motion
  const interactiveNode =
    !isTouchDevice && !isSaveData && !prefersReducedMotion ? (
      <ClickSpark
        sparkColor="#a5d8ff"
        sparkCount={6}
        sparkRadius={22}
        sparkSize={10}
        duration={450}
        className="inline-flex items-center justify-center"
      >
        {nodeButton}
      </ClickSpark>
    ) : (
      nodeButton
    );

  // Standard Module Card
  const moduleCardContent = station && (
    <div
      className={`glass-station-card w-full rounded-[22px] bg-white/[0.06] backdrop-blur-md border transition-all duration-300 p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.24)] ${
        isActive
          ? 'border-[#a5d8ff]/80 shadow-[0_0_28px_rgba(165,216,255,0.22)]'
          : 'border-white/[0.14] hover:border-white/30 hover:-translate-y-0.5'
      }`}
    >
      {/* Header: Number Badge & Clean Module Name */}
      <div className="flex items-center gap-2.5 mb-2.5">
        <span className="text-[11px] font-mono font-bold text-[#a5d8ff] bg-white/[0.08] px-2 py-0.5 rounded-full border border-white/10 shrink-0">
          {numberStr}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-heading truncate">
          {station.title}
        </h3>
      </div>

      {/* Description (Special Case: SEM has description and no chips) */}
      {station.description ? (
        <p className="text-xs sm:text-sm text-white/75 leading-relaxed italic">
          {station.description}
        </p>
      ) : (
        /* Topic Chips (First 3 + '+N more') */
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {station.chips?.slice(0, 3).map((chip, cIdx) => (
            <span
              key={cIdx}
              className="text-[11px] sm:text-xs text-white/90 bg-white/[0.08] border border-white/15 px-2.5 py-1 rounded-full shadow-2xs truncate max-w-[200px]"
            >
              {chip}
            </span>
          ))}
          {station.moreCount > 0 && (
            <button
              type="button"
              onClick={station.onMore}
              className="text-[11px] sm:text-xs font-semibold text-[#a5d8ff] bg-[#2448c9]/40 hover:bg-[#2448c9]/70 border border-[#4a6df0]/60 hover:border-[#a5d8ff] px-2.5 py-1 rounded-full cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a5d8ff]"
            >
              +{station.moreCount} more
            </button>
          )}
        </div>
      )}
    </div>
  );

  // Finish Card (Job Training & Book a Free Demo)
  const finishCardContent = isFinish && (
    <div
      className={`glass-station-card w-full rounded-[22px] bg-white/[0.07] backdrop-blur-md border transition-all duration-300 p-5 sm:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.28)] ${
        isActive
          ? 'border-[#a5d8ff]/80 shadow-[0_0_28px_rgba(165,216,255,0.25)]'
          : 'border-white/[0.16] hover:border-white/30'
      }`}
    >
      <div className="space-y-1 mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-heading">
          {finishData?.title || 'Job training'}
        </h3>
        <p className="text-xs sm:text-sm text-[#c3cbf2] leading-relaxed">
          Included with the 6-month course.
        </p>
      </div>

      <div>
        <StarBorder
          as="button"
          type="button"
          onClick={finishData?.onCta}
          backgroundColor="#f6f5f1"
          textColor="#13266f"
          color="#4a6df0"
          trailColor="#a5d8ff"
          radius={999}
          duration={3.5}
          className="font-bold text-xs sm:text-sm px-6 py-2.5 cursor-pointer shadow-md hover:shadow-lg transition-transform active:scale-98"
        >
          {finishData?.ctaLabel || 'Book a free demo'}
        </StarBorder>
      </div>
    </div>
  );

  const cardElement = isFinish ? finishCardContent : moduleCardContent;

  // Staggered horizontal reveal with AnimatedContent
  const animatedCard =
    !prefersReducedMotion ? (
      <AnimatedContent
        direction="horizontal"
        reverse={isLeft}
        distance={24}
        duration={0.5}
        threshold={0.02}
        ease="power2.out"
        once={true}
      >
        {cardElement}
      </AnimatedContent>
    ) : (
      cardElement
    );

  return (
    <li className="relative station-row select-none">
      {isMobile ? (
        /* ─── MOBILE & TABLET LAYOUT (< 900px): Left vertical line (28px from left) ─── */
        <div className="flex items-start gap-4 pl-1">
          <div className="pt-1 shrink-0">{interactiveNode}</div>
          <div className="flex-1 min-w-0">{animatedCard}</div>
        </div>
      ) : (
        /* ─── DESKTOP LAYOUT (>= 900px): Alternating left / right gentle S-curve ─── */
        <div className="grid grid-cols-12 items-center gap-4 min-h-[125px]">
          {isFinish ? (
            /* Finish Station: Centered flag and card */
            <div className="col-span-12 flex flex-col items-center text-center">
              <div className="mb-4">{interactiveNode}</div>
              <div className="w-full max-w-md">{animatedCard}</div>
            </div>
          ) : isLeft ? (
            /* Card on LEFT (~40% node) */
            <>
              <div className="col-span-5 flex justify-end pr-2">{animatedCard}</div>
              <div className="col-span-2 flex justify-start pl-2">{interactiveNode}</div>
              <div className="col-span-5" aria-hidden="true" />
            </>
          ) : (
            /* Node at ~60%, Card on RIGHT */
            <>
              <div className="col-span-5" aria-hidden="true" />
              <div className="col-span-2 flex justify-end pr-2">{interactiveNode}</div>
              <div className="col-span-5 flex justify-start pl-2">{animatedCard}</div>
            </>
          )}
        </div>
      )}
    </li>
  );
}
