import React from 'react';
import AnimatedContent from './AnimatedContent';
import FadeContent from './FadeContent';
import { prefersReducedMotion } from '../config/effects';

/**
 * ScrollReveal:
 * Unified wrapper mapping to React Bits AnimatedContent for text/cards,
 * and FadeContent for images. Play once.
 */
export default function ScrollReveal({
  children,
  className = '',
  type = 'content', // 'content' | 'image'
  delay = 0,
  yOffset = 28,
  duration = 0.7,
}) {
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (type === 'image') {
    return (
      <FadeContent
        blur={true}
        duration={duration}
        delay={delay}
        threshold={0.1}
        className={className}
      >
        {children}
      </FadeContent>
    );
  }

  return (
    <AnimatedContent
      distance={yOffset}
      direction="vertical"
      duration={duration}
      delay={delay}
      once={true}
      animateOpacity={true}
      className={className}
    >
      {children}
    </AnimatedContent>
  );
}
