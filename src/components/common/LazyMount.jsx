import React, { useState, useEffect, useRef, useId } from 'react';
import { WebGLManager } from './WebGLManager';
import { prefersReducedMotion, isSaveData } from '../../config/effects';

/**
 * LazyMount:
 * 1. Mounts children only when near viewport (rootMargin: 200px) and unmounts when far away.
 * 2. Enforces max 2 active canvas / WebGL effects via WebGLManager.
 * 3. Gracefully shows fallback if reduced-motion, save-data, or out of capacity.
 */
export function LazyMount({
  children,
  fallback = null,
  isCanvasOrWebGL = false,
  rootMargin = '200px',
  className = '',
  style = {},
  ariaHidden = true,
}) {
  const containerRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const instanceId = useId();

  // 1. Intersection Observer for viewport proximity
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  // 2. Concurrency check with WebGLManager for Canvas/WebGL
  useEffect(() => {
    if (!isCanvasOrWebGL) {
      setHasPermission(true);
      return;
    }

    if (prefersReducedMotion || isSaveData) {
      setHasPermission(false);
      return;
    }

    const updatePermission = () => {
      if (isInViewport) {
        const granted = WebGLManager.request(instanceId);
        setHasPermission(granted);
      } else {
        WebGLManager.release(instanceId);
        setHasPermission(false);
      }
    };

    updatePermission();
    const unsubscribe = WebGLManager.subscribe(updatePermission);

    return () => {
      unsubscribe();
      WebGLManager.release(instanceId);
    };
  }, [isInViewport, isCanvasOrWebGL, instanceId]);

  const shouldRender = isCanvasOrWebGL
    ? isInViewport && hasPermission && !prefersReducedMotion && !isSaveData
    : isInViewport;

  // Default fallback if none supplied: decorative subtle gradient
  const defaultFallback = (
    <div
      className="absolute inset-0 bg-gradient-to-b from-deep to-[#0d1847] opacity-60 pointer-events-none"
      aria-hidden="true"
    />
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
      aria-hidden={ariaHidden ? 'true' : undefined}
    >
      {shouldRender ? children : (fallback ?? defaultFallback)}
    </div>
  );
}

export default LazyMount;
