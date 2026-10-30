'use client';

import { useMemo, useState, useEffect } from 'react';
import LiquidEther from './LiquidEther';

export default function LiquidEtherBackground() {
  const colors = useMemo(() => ['#001f3f', '#1e3a8a', '#ffffff'], []);
  const [isMobileOrLowPower, setIsMobileOrLowPower] = useState(true); // Default to lightweight for instant SSR / fast initial paint

  useEffect(() => {
    // Check if device is mobile, touch-only, or prefers reduced motion
    const checkPerformanceProfile = () => {
      const isSmallScreen = window.innerWidth < 768;
      const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      setIsMobileOrLowPower(isSmallScreen || isTouchOnly || prefersReducedMotion);
    };

    checkPerformanceProfile();
    window.addEventListener('resize', checkPerformanceProfile, { passive: true });
    return () => window.removeEventListener('resize', checkPerformanceProfile);
  }, []);

  return (
    <div 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: '#f9fafb',
      }}
    >
      {isMobileOrLowPower ? (
        // Ultra-lightweight CSS Aurora background for 120 FPS mobile performance with zero battery drain
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 15% 15%, rgba(30, 58, 138, 0.08) 0%, transparent 45%), radial-gradient(circle at 85% 75%, rgba(0, 31, 63, 0.07) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.04) 0%, transparent 60%)',
            filter: 'blur(30px)',
            transform: 'translateZ(0)',
          }}
        />
      ) : (
        // Interactive fluid simulation on desktop with mouse
        <LiquidEther
          colors={colors}
          mouseForce={12}
          cursorSize={70}
          isViscous={false}
          iterationsPoisson={6}
          resolution={0.42}
          BFECC={false}
          isBounce={false}
          autoDemo
          autoSpeed={0.4}
          autoIntensity={1.8}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      )}
    </div>
  );
}
