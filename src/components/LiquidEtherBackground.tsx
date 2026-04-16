import { useMemo } from 'react';
import LiquidEther from './LiquidEther';

export default function LiquidEtherBackground() {
  const colors = useMemo(() => ['#e0e7ff', '#fbcfe8', '#fef4c5'], []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <LiquidEther
        colors={colors}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={20}
        iterationsPoisson={20}
        resolution={0.4}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}
