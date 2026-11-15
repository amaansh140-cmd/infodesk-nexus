import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useRoadmapPath } from './useRoadmapPath';
import RoadmapStation from './RoadmapStation';
import RoadmapProgress from './RoadmapProgress';
import ScrollFloat from '../ScrollFloat';
import { prefersReducedMotion, isTouchDevice, isSaveData } from '../../config/effects';
import './ScrollRoadmap.css';

/**
 * ScrollRoadmap - A vertical, winding road that draws itself as the visitor scrolls,
 * with a glowing marker traveling along it through 10 brochure modules + a finish flag.
 */
export default function ScrollRoadmap({
  stations = [],
  finish = {
    title: 'Job training',
    ctaLabel: 'Book a free demo',
    onCta: () => {},
  },
  heading = 'Your marketing roadmap',
  subheading = 'Ten modules, then job training.',
}) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const roadSvgPathRef = useRef(null);

  // 11 Station Node refs: 10 modules + 1 finish flag
  const totalStations = stations.length + 1;
  const nodeRefs = useMemo(
    () => Array.from({ length: totalStations }, () => ({ current: null })),
    [totalStations]
  );

  // Responsive breakpoint tracking (< 900px is mobile/tablet)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 900 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Measured SVG path through node centers
  const { pathD, totalLength, nodeCenters, remeasure } = useRoadmapPath({
    wrapperRef,
    nodeRefs,
    isMobile,
  });

  // Scroll Progress (0 to 1), Marker Position (x, y), Visited Indices & Active Station
  const [scrollProgress, setScrollProgress] = useState(0);
  const [markerPos, setMarkerPos] = useState({ x: 0, y: 0 });
  const [activeStationIndex, setActiveStationIndex] = useState(0);
  const [isRoadmapVisible, setIsRoadmapVisible] = useState(false);

  // Calculate station arc lengths along the SVG path
  const stationDistances = useMemo(() => {
    if (!totalLength || !nodeCenters.length) return [];
    return nodeCenters.map((pt, idx) => {
      // Approximate arc length proportion
      if (nodeCenters.length <= 1) return 0;
      return (idx / (nodeCenters.length - 1)) * totalLength;
    });
  }, [totalLength, nodeCenters]);

  // Smooth scroll listener & animation frame loop
  useEffect(() => {
    if (prefersReducedMotion) {
      setScrollProgress(1);
      return undefined;
    }

    let rafId = 0;
    let targetProgress = 0;
    let currentProgress = 0;

    const updateScroll = () => {
      if (!containerRef.current || !nodeRefs[0]?.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Section visibility check for floating pill
      const inView = containerRect.top < vh && containerRect.bottom > 0;
      setIsRoadmapVisible(inView);

      if (!inView) return;

      // Measure progress from first station at 70% viewport to last station at 70% viewport
      const firstEl = nodeRefs[0]?.current;
      const lastEl = nodeRefs[nodeRefs.length - 1]?.current;

      if (firstEl && lastEl) {
        const firstY = firstEl.getBoundingClientRect().top;
        const lastY = lastEl.getBoundingClientRect().top;
        const targetY = vh * 0.7;
        const totalSpan = lastY - firstY;

        if (totalSpan > 0) {
          const raw = (targetY - firstY) / totalSpan;
          targetProgress = Math.min(Math.max(0, raw), 1);
        }
      }

      // Determine active station (nearest to vertical center)
      let closestIdx = 0;
      let minDiff = Infinity;
      nodeRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const diff = Math.abs(r.top + r.height / 2 - vh / 2);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setActiveStationIndex(closestIdx);
    };

    const animateLoop = () => {
      // Easing (lerp)
      currentProgress += (targetProgress - currentProgress) * 0.12;

      if (Math.abs(currentProgress - targetProgress) < 0.001) {
        currentProgress = targetProgress;
      }

      setScrollProgress(currentProgress);

      // Compute marker position on path
      if (roadSvgPathRef.current && totalLength > 0) {
        try {
          const dist = currentProgress * totalLength;
          const pt = roadSvgPathRef.current.getPointAtLength(dist);
          setMarkerPos({ x: pt.x, y: pt.y });
        } catch {
          // Fallback if SVG not ready
        }
      }

      rafId = requestAnimationFrame(animateLoop);
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll, { passive: true });

    updateScroll();
    rafId = requestAnimationFrame(animateLoop);

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      cancelAnimationFrame(rafId);
    };
  }, [nodeRefs, totalLength]);

  // Smooth scroll to station on node click (centered in viewport, accounting for 72px header)
  const handleScrollToStation = useCallback(
    (index) => {
      const nodeEl = nodeRefs[index]?.current;
      if (!nodeEl) return;
      const rect = nodeEl.getBoundingClientRect();
      const headerOffset = 72;
      const targetTop =
        rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2 + headerOffset / 2;
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      });
    },
    [nodeRefs]
  );

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="roadmap-section py-16 sm:py-24 text-white relative scroll-mt-[72px]"
      aria-label="Marketing roadmap"
    >
      {/* CSS Faint Dotted Overlay */}
      <div className="roadmap-dots-overlay" aria-hidden="true" />

      {/* Content Container (max-width 1100px) */}
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          {!prefersReducedMotion ? (
            <ScrollFloat
              containerClassName="text-center !my-0"
              textClassName="!text-3xl sm:!text-4xl lg:!text-5xl font-bold tracking-tight text-white font-heading"
              animationDuration={0.8}
              ease="power2.out"
              scrollStart="top bottom-=15%"
              scrollEnd="center center"
            >
              {heading}
            </ScrollFloat>
          ) : (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-heading">
              {heading}
            </h2>
          )}
          <p className="text-base sm:text-lg text-[#c3cbf2] font-medium mt-3">
            {subheading}
          </p>
          <p className="text-xs sm:text-sm text-[#8fa1e0] mt-1.5">
            Follows the module order in our brochure.
          </p>
        </div>

        {/* Roadmap Wrapper with SVG Road & Ordered List */}
        <div ref={wrapperRef} className="relative roadmap-wrapper">
          {/* Decorative SVG Road Layer */}
          {pathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* Glowing Road Progress Gradient */}
                <linearGradient id="roadmap-glow-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2448c9" />
                  <stop offset="60%" stopColor="#4a6df0" />
                  <stop offset="100%" stopColor="#a5d8ff" />
                </linearGradient>

                {/* Soft Ice-Blue Glow Filter */}
                <filter id="roadmap-filter-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Inactive Background Road Band (~14px) */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* 2. Inactive Dashed Road Center Line */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />

              {/* 3. Active Illuminated Progress Road Band */}
              <path
                ref={roadSvgPathRef}
                d={pathD}
                fill="none"
                stroke="url(#roadmap-glow-grad)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#roadmap-filter-glow)"
                style={{
                  strokeDasharray: totalLength || 1000,
                  strokeDashoffset: prefersReducedMotion
                    ? 0
                    : Math.max(0, (1 - scrollProgress) * (totalLength || 1000)),
                  transition: prefersReducedMotion ? 'none' : 'stroke-dashoffset 0.1s linear',
                }}
              />

              {/* 4. Active Illuminated Dashed Center Line */}
              <path
                d={pathD}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeDasharray="6 8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: totalLength || 1000,
                  strokeDashoffset: prefersReducedMotion
                    ? 0
                    : Math.max(0, (1 - scrollProgress) * (totalLength || 1000)),
                }}
              />

              {/* 5. Glowing Traveling Marker (hidden on reduced motion) */}
              {!prefersReducedMotion && markerPos.x > 0 && markerPos.y > 0 && (
                <g
                  transform={`translate(${markerPos.x}, ${markerPos.y})`}
                  className="pointer-events-none"
                >
                  {/* Faint Trail / Halo */}
                  {!isTouchDevice && !isSaveData && (
                    <circle
                      r="16"
                      fill="rgba(74, 109, 240, 0.3)"
                      className="roadmap-marker-glow"
                    />
                  )}
                  {/* Main Marker Ring */}
                  <circle
                    r="9"
                    fill="#0b1a52"
                    stroke="#4a6df0"
                    strokeWidth="3"
                    className="shadow-md"
                  />
                  {/* Ice-Blue Glowing Core */}
                  <circle r="4.5" fill="#a5d8ff" />
                </g>
              )}
            </svg>
          )}

          {/* Ordered List of Stations (Accessibility & Semantic Hierarchy) */}
          <ol className="relative z-10 space-y-0 list-none p-0 m-0">
            {stations.map((st, idx) => {
              const isVisited =
                prefersReducedMotion ||
                (stationDistances[idx] !== undefined &&
                  scrollProgress * totalLength >= stationDistances[idx] - 10);
              const isActive = activeStationIndex === idx;
              // Even stations on LEFT, Odd stations on RIGHT for natural S-curve balance
              const isLeft = idx % 2 === 0;

              return (
                <RoadmapStation
                  key={st.id || idx}
                  station={st}
                  isFinish={false}
                  isVisited={isVisited}
                  isActive={isActive}
                  isLeft={isLeft}
                  isMobile={isMobile}
                  nodeRef={nodeRefs[idx]}
                  onNodeClick={() => handleScrollToStation(idx)}
                  prefersReducedMotion={prefersReducedMotion}
                  isTouchDevice={isTouchDevice}
                  isSaveData={isSaveData}
                />
              );
            })}

            {/* 11th Finish Station (Job Training) */}
            <RoadmapStation
              key="finish-station"
              station={null}
              isFinish={true}
              finishData={finish}
              isVisited={
                prefersReducedMotion ||
                (stationDistances[stations.length] !== undefined &&
                  scrollProgress * totalLength >= stationDistances[stations.length] - 15)
              }
              isActive={activeStationIndex === stations.length}
              isLeft={false}
              isMobile={isMobile}
              nodeRef={nodeRefs[stations.length]}
              onNodeClick={() => handleScrollToStation(stations.length)}
              prefersReducedMotion={prefersReducedMotion}
              isTouchDevice={isTouchDevice}
              isSaveData={isSaveData}
            />
          </ol>
        </div>
      </div>

      {/* Floating Progress Pill (Informational only, hidden on reduced-motion) */}
      <RoadmapProgress
        activeStationIndex={activeStationIndex}
        totalModules={stations.length}
        progress={scrollProgress}
        isVisible={isRoadmapVisible}
        isMobile={isMobile}
        prefersReducedMotion={prefersReducedMotion}
      />
    </section>
  );
}
