import { useMemo } from 'react';
import LiquidEther from './LiquidEther';

export default function LiquidEtherBackground() {
  const colors = useMemo(() => ['#001f3f', '#1e3a8a', '#ffffff'], []);

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
        mouseForce={15}
        cursorSize={80}
        isViscous={false}
        iterationsPoisson={8}
        resolution={0.6}
        BFECC={false}
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
