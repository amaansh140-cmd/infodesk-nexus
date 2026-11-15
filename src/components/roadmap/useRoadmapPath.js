import { useState, useEffect, useCallback, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Custom hook to measure node positions and generate a smooth winding SVG path.
 *
 * Desktop (>= 900px): Gentle S-curve passing smoothly through alternating node centers.
 * Mobile (< 900px): Clean vertical line connecting left-aligned node centers.
 */
export function useRoadmapPath({ wrapperRef, nodeRefs, isMobile }) {
  const [pathData, setPathData] = useState({
    d: '',
    totalLength: 0,
    nodeCenters: [],
  });

  const pathElementRef = useRef(null);

  const measurePath = useCallback(() => {
    if (!wrapperRef?.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();

    const centers = [];
    for (let i = 0; i < nodeRefs.length; i++) {
      const nodeEl = nodeRefs[i]?.current;
      if (!nodeEl) continue;
      const rect = nodeEl.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      const x = rect.left + rect.width / 2 - wrapperRect.left;
      const y = rect.top + rect.height / 2 - wrapperRect.top;
      centers.push({ x, y, id: i });
    }

    if (centers.length < 2) return;

    let d = '';
    if (isMobile) {
      // Mobile & tablet (< 900px): Clean vertical path through nodes
      d = `M ${centers[0].x.toFixed(1)} ${centers[0].y.toFixed(1)}`;
      for (let i = 1; i < centers.length; i++) {
        d += ` L ${centers[i].x.toFixed(1)} ${centers[i].y.toFixed(1)}`;
      }
    } else {
      // Desktop (>= 900px): Smooth cubic Bezier S-curve
      d = `M ${centers[0].x.toFixed(1)} ${centers[0].y.toFixed(1)}`;
      for (let i = 0; i < centers.length - 1; i++) {
        const p0 = centers[i];
        const p1 = centers[i + 1];
        const dy = p1.y - p0.y;
        // Tangent continuity: control points keep vertical alignment at nodes
        const cp1x = p0.x;
        const cp1y = p0.y + dy * 0.5;
        const cp2x = p1.x;
        const cp2y = p1.y - dy * 0.5;
        d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
      }
    }

    // Compute exact length via temporary SVG path
    let length = 0;
    try {
      if (!pathElementRef.current) {
        pathElementRef.current = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      }
      pathElementRef.current.setAttribute('d', d);
      length = pathElementRef.current.getTotalLength() || 0;
    } catch {
      length = centers[centers.length - 1].y - centers[0].y;
    }

    setPathData({
      d,
      totalLength: length,
      nodeCenters: centers,
    });

    if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
      ScrollTrigger.refresh();
    }
  }, [wrapperRef, nodeRefs, isMobile]);

  useEffect(() => {
    // Initial measurement after paint
    const timer = setTimeout(measurePath, 60);

    // Font loading synchronization
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measurePath).catch(() => {});
    }

    // ResizeObserver on the wrapper
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && wrapperRef?.current) {
      resizeObserver = new ResizeObserver(() => {
        measurePath();
      });
      resizeObserver.observe(wrapperRef.current);
    }

    // Window resize / orientation change listener
    const handleResize = () => {
      measurePath();
    };
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [measurePath, wrapperRef]);

  return {
    pathD: pathData.d,
    totalLength: pathData.totalLength,
    nodeCenters: pathData.nodeCenters,
    remeasure: measurePath,
  };
}
