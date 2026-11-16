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
  starBorder: true,

  // Courses Page (/courses)
  coursesHeaderBackground: !prefersReducedMotion && !isSaveData,
  flipCard: true,

  // Course Detail (/courses/:slug)
  courseBackgrounds: !prefersReducedMotion && !isSaveData,
  scrollStack: true,
  dataScienceHeroParticles: !prefersReducedMotion && !isSaveData,
  dataScienceCardSwap: !prefersReducedMotion,
  dataScienceGradientText: !prefersReducedMotion,
  dataScienceTextType: !prefersReducedMotion,
  dataScienceDecryptedText: !prefersReducedMotion,
  dataScienceLogoLoop: !prefersReducedMotion,
  dataScienceTestimonials: true,
  dataScienceThreads: !prefersReducedMotion && !isSaveData,
  dataScienceSpotlight: true,
  dataScienceRelatedFlip: true,

  // Digital Marketing Course (/courses/digital-marketing)
  digitalMarketingAurora: !prefersReducedMotion && !isSaveData && !isTouchDevice,
  digitalMarketingShinyText: !prefersReducedMotion,
  digitalMarketingTrueFocus: !prefersReducedMotion,
  digitalMarketingStack: true,
  digitalMarketingCurvedLoop: !prefersReducedMotion,
  digitalMarketingSpotlight: true,
  digitalMarketingLaserFlow: !prefersReducedMotion && !isSaveData && !isTouchDevice,
  digitalMarketingTiltedCard: !prefersReducedMotion && !isTouchDevice,
  digitalMarketingFolder: !prefersReducedMotion,
  digitalMarketingFaqSpotlight: true,
  digitalMarketingLogoLoop: !prefersReducedMotion,
  roadmap: true,

  // About Page (/about)
  seminarsMasonry: true,

  // Placements Page (/placements)
  partnersLoop: true,

  // Gallery Page (/gallery)
  galleryMasonry: true,

  // Contact Page (/contact)
  stepper: true,
};

export default effectsConfig;
