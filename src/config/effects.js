// Central configuration for all visual and interactive effects across Infodesk website.
// Every effect respects its individual flag, reduced-motion preferences, touch constraints,
// and data-saving settings.

export const isTouchDevice =
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0);

export const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const isSaveData =
  typeof navigator !== 'undefined' &&
  Boolean(navigator.connection && navigator.connection.saveData);

export const effectsConfig = {
  // Global Shell & Layout
  staggeredMenu: true,
  gradualBlur: true,
  noise: true,
  magnet: !isTouchDevice,
  clickSpark: !isTouchDevice,
  animatedContent: !prefersReducedMotion,
  fadeContent: !prefersReducedMotion,
  swipeToast: true,

  // Home Page (/)
  heroBackground: !prefersReducedMotion && !isSaveData,
  rotatingText: !prefersReducedMotion,
  stickerPeel: !isTouchDevice,
  countUp: !prefersReducedMotion,
  cardSwap: !prefersReducedMotion,
  spotlightCard: true,
  homeToolsLoop: true,
  testimonialsStack: true,
  homeClosingBanner: !prefersReducedMotion && !isSaveData,
  electricBorder: true,
  starBorder: true,

  // Courses Page (/courses)
  coursesHeaderBackground: !prefersReducedMotion && !isSaveData,
  rubberSegment: true,
  flipCard: true,
  borderGlow: true,

  // Course Detail (/courses/:slug)
  courseBackgrounds: !prefersReducedMotion && !isSaveData,
  scrollStack: true,
  dataScienceHeroParticles: !prefersReducedMotion && !isSaveData,
  dataScienceCardSwap: !prefersReducedMotion,
  dataScienceGradientText: !prefersReducedMotion,
  dataScienceTextType: !prefersReducedMotion,
  dataScienceDecryptedText: !prefersReducedMotion,
  dataScienceScrollVelocity: !prefersReducedMotion,
  dataScienceLogoLoop: !prefersReducedMotion,
  dataScienceTestimonials: true,
  dataScienceBento: true,
  dataScienceGridScan: !prefersReducedMotion && !isSaveData,
  dataScienceMlScatter: true,
  dataScienceWorkflowStack: true,
  dataScienceThreads: !prefersReducedMotion && !isSaveData,
  dataScienceGovernance: true,
  dataScienceSpotlight: true,
  dataScienceRelatedFlip: true,

  // Digital Marketing Course (/courses/digital-marketing)
  digitalMarketingAurora: !prefersReducedMotion && !isSaveData && !isTouchDevice,
  digitalMarketingShinyText: !prefersReducedMotion,
  digitalMarketingTrueFocus: !prefersReducedMotion,
  digitalMarketingStack: true,
  digitalMarketingCurvedLoop: !prefersReducedMotion,
  digitalMarketingGooeyNav: true,
  digitalMarketingStepper: true,
  digitalMarketingSpotlight: true,
  digitalMarketingPixelCard: true,
  digitalMarketingLaserFlow: !prefersReducedMotion && !isSaveData && !isTouchDevice,
  digitalMarketingSpecular: !prefersReducedMotion && !isTouchDevice,
  digitalMarketingTiltedCard: !prefersReducedMotion && !isTouchDevice,
  digitalMarketingFolder: !prefersReducedMotion,
  digitalMarketingFaqSpotlight: true,
  digitalMarketingLogoLoop: !prefersReducedMotion,
  digitalMarketingTimeline: true,

  // About Page (/about)
  scrollExpand: !prefersReducedMotion,
  profileCardTilt: !isTouchDevice && !prefersReducedMotion,
  holoCard: true,
  seminarsMasonry: true,

  // Placements Page (/placements)
  lanyard: !isTouchDevice && !prefersReducedMotion && !isSaveData,
  partnersLoop: true,
  testimonialsCarousel: true,
  peekRating: true,

  // Gallery Page (/gallery)
  depthCarousel: true,
  galleryMasonry: true,

  // Contact Page (/contact)
  accordionGallery: true,
  stepper: true,
  springCheck: true,
  glideSelect: true,
  jellyRadio: true,
};

export default effectsConfig;
