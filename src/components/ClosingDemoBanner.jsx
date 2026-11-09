import React from 'react';
import { Link } from 'react-router-dom';
import StarBorder from './StarBorder';
import LazyMount from './common/LazyMount';
import { LaserFlow } from './LaserFlow';
import { effectsConfig, prefersReducedMotion, isSaveData, isTouchDevice } from '../config/effects';

export default function ClosingDemoBanner({
  title = 'Try a free demo class.',
  description = 'Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers.',
  buttonText = 'Book your free demo session',
  className = '',
}) {
  const showLaserFlow =
    effectsConfig.digitalMarketingLaserFlow &&
    !prefersReducedMotion &&
    !isSaveData &&
    !isTouchDevice;

  return (
    <section className={`max-w-content mx-auto px-6 py-12 ${className}`}>
      <div className="relative rounded-[32px] bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
        {/* Background LaserFlow Canvas in LazyMount */}
        {showLaserFlow && (
          <LazyMount
            isCanvasOrWebGL={true}
            fallback={<div className="absolute inset-0 bg-[#13266f]/40 pointer-events-none" aria-hidden="true" />}
            className="absolute inset-0 pointer-events-none"
          >
            <LaserFlow
              color="#4a6df0"
              intensity={0.7}
              speed={0.4}
              mouseInteraction={false}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            />
          </LazyMount>
        )}

        {/* Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1a52]/90 via-[#13266f]/70 to-[#071138]/90 pointer-events-none" />

        <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
            {title}
          </h3>
          <p className="text-[#c3cbf2] text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shrink-0 relative z-10">
          <StarBorder
            as={Link}
            to="/contact"
            backgroundColor="#f6f5f1"
            textColor="#13266f"
            color="#4a6df0"
            trailColor="#a5d8ff"
            radius={999}
            duration={5}
            glow={0.6}
            className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {buttonText}
          </StarBorder>
        </div>
      </div>
    </section>
  );
}
