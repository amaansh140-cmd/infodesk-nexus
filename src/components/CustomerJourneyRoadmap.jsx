import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Compass,
  Users,
  Target,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  PenTool,
  Layers,
  Megaphone,
  PieChart,
  Share2,
  Flame,
  Smartphone,
  MessageCircle,
  ShoppingBag,
  Zap,
  LayoutTemplate,
  Send,
  ShieldCheck,
  Award,
  ChevronDown,
} from 'lucide-react';
import { prefersReducedMotion } from '../config/effects';

// Rich Stage Data for the Customer Journey Roadmap
const ROADMAP_STAGES = [
  {
    id: 'awareness',
    stepNumber: '01',
    phase: 'Top of Funnel (TOFU)',
    title: 'Awareness & Discovery',
    badge: 'Discovery & Search',
    headline: 'Get discovered by high-intent searchers and browsers',
    customerMindset: 'Prospect: "I have a problem or curiosity — who can help me solve it?"',
    description:
      'The journey starts when a prospective customer identifies a need. By deploying search engine optimization, technical indexing, and keyword research, you position your brand right at the top of Google search results and discovery feeds.',
    outcome: 'Rank in Google Top 3 & capture zero-cost organic demand',
    outcomeMetric: '10x Organic Reach',
    icon: Compass,
    accentColor: '#3B82F6', // Blue
    accentGradient: 'from-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50/70',
    borderCol: 'border-blue-200/80',
    textCol: 'text-blue-600',
    ringCol: 'ring-blue-500/30',
    shadowCol: 'shadow-blue-500/15',
    tools: ['Google Search Console', 'WordPress CMS', 'Semrush', 'GMB Profile'],
    chips: [
      { topic: 'SEO', moduleIndex: 0 },
      { topic: 'Blogging', moduleIndex: 5 },
      { topic: 'Content marketing', moduleIndex: 6 },
      { topic: 'Display advertising', moduleIndex: 9 },
      { topic: 'Media planning and buying', moduleIndex: 9 },
    ],
  },
  {
    id: 'engagement',
    stepNumber: '02',
    phase: 'Middle of Funnel (MOFU)',
    title: 'Interest & Engagement',
    badge: 'Social & Video',
    headline: 'Build brand presence and engage prospects across social channels',
    customerMindset: 'Prospect: "I like this brand’s perspective, content, and community."',
    description:
      'Once prospects discover you, keep their attention with compelling short-form video, creative ad banners, and authentic social media interactions that transform passive visitors into active brand followers.',
    outcome: 'Build high-resonance social communities & viral short-form reach',
    outcomeMetric: '4.5x Social Engagement',
    icon: Users,
    accentColor: '#EC4899', // Pink
    accentGradient: 'from-pink-500 to-rose-600',
    lightBg: 'bg-pink-50/70',
    borderCol: 'border-pink-200/80',
    textCol: 'text-pink-600',
    ringCol: 'ring-pink-500/30',
    shadowCol: 'shadow-pink-500/15',
    tools: ['Meta Ads Manager', 'Instagram Reels', 'Canva Pro', 'YouTube Video'],
    chips: [
      { topic: 'Social media marketing', moduleIndex: 1 },
      { topic: 'Video marketing', moduleIndex: 9 },
      { topic: 'App marketing', moduleIndex: 7 },
      { topic: 'Managing social media comments', moduleIndex: 8 },
    ],
  },
  {
    id: 'conversion',
    stepNumber: '03',
    phase: 'Bottom of Funnel (BOFU)',
    title: 'Intent & Conversion',
    badge: 'Leads & Paid Ads',
    headline: 'Turn qualified interest into inquiries, high-intent leads and sales',
    customerMindset: 'Prospect: "I’m ready to take action — show me the offer and checkout."',
    description:
      'Here intent turns into measurable revenue. Using high-intent Google Search Ads, conversion-optimized landing pages, e-commerce checkout funnels, and rigorous A/B testing, you maximize return on ad spend (ROAS).',
    outcome: 'High-converting ad funnels engineered for maximum return on spend',
    outcomeMetric: '2.8x Higher Conversion',
    icon: Target,
    accentColor: '#10B981', // Emerald
    accentGradient: 'from-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50/70',
    borderCol: 'border-emerald-200/80',
    textCol: 'text-emerald-600',
    ringCol: 'ring-emerald-500/30',
    shadowCol: 'shadow-emerald-500/15',
    tools: ['Google Ads', 'WooCommerce', 'Landing Pages', 'GA4 Analytics'],
    chips: [
      { topic: 'Google Ads', moduleIndex: 3 },
      { topic: 'Conversion rate optimisation (CRO)', moduleIndex: 9 },
      { topic: 'E-commerce marketing', moduleIndex: 9 },
      { topic: 'Affiliate marketing', moduleIndex: 9 },
      { topic: 'Building a lead generation page', moduleIndex: 1 },
    ],
  },
  {
    id: 'loyalty',
    stepNumber: '04',
    phase: 'Post-Purchase & Retention',
    title: 'Retention & Advocacy',
    badge: 'Retention & ORM',
    headline: 'Retain customers, handle reviews, and maintain direct client communication',
    customerMindset: 'Customer: "I had a great experience — I will return and recommend them."',
    description:
      'A one-time buyer becomes a repeat client. Automate customer re-engagement via WhatsApp Business APIs, personalized cold and lifecycle emails, online reputation management, and automated review collection.',
    outcome: 'Turn single-purchase buyers into brand evangelists & repeat revenue',
    outcomeMetric: '90% Repeat Retention',
    icon: Crown,
    accentColor: '#8B5CF6', // Violet
    accentGradient: 'from-violet-500 to-purple-600',
    lightBg: 'bg-violet-50/70',
    borderCol: 'border-violet-200/80',
    textCol: 'text-violet-600',
    ringCol: 'ring-violet-500/30',
    shadowCol: 'shadow-violet-500/15',
    tools: ['WhatsApp Business API', 'Mailchimp', 'GMass', 'Review Management'],
    chips: [
      { topic: 'Email marketing', moduleIndex: 9 },
      { topic: 'WhatsApp marketing', moduleIndex: 9 },
      { topic: 'Responding to reviews', moduleIndex: 8 },
      { topic: 'Customer retention', moduleIndex: 6 },
    ],
  },
];

// Topic Icon Mapping for Actionable Chips
const TOPIC_ICON_MAP = {
  'SEO': { icon: Search, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'Blogging': { icon: PenTool, color: 'text-indigo-600', bg: 'bg-indigo-50 text-indigo-600 border-indigo-200/70' },
  'Content marketing': { icon: Layers, color: 'text-sky-600', bg: 'bg-sky-50 text-sky-600 border-sky-200/70' },
  'Display advertising': { icon: Megaphone, color: 'text-amber-600', bg: 'bg-amber-50 text-amber-600 border-amber-200/70' },
  'Media planning and buying': { icon: PieChart, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'Social media marketing': { icon: Share2, color: 'text-rose-600', bg: 'bg-rose-50 text-rose-600 border-rose-200/70' },
  'Video marketing': { icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50 text-orange-600 border-orange-200/70' },
  'App marketing': { icon: Smartphone, color: 'text-violet-600', bg: 'bg-violet-50 text-violet-600 border-violet-200/70' },
  'Managing social media comments': { icon: MessageCircle, color: 'text-teal-600', bg: 'bg-teal-50 text-teal-600 border-teal-200/70' },
  'Google Ads': { icon: Target, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'Conversion rate optimisation (CRO)': { icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'E-commerce marketing': { icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50 text-amber-600 border-amber-200/70' },
  'Affiliate marketing': { icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50 text-yellow-600 border-yellow-200/70' },
  'Building a lead generation page': { icon: LayoutTemplate, color: 'text-cyan-600', bg: 'bg-cyan-50 text-cyan-600 border-cyan-200/70' },
  'Email marketing': { icon: Send, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'WhatsApp marketing': { icon: MessageCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'Responding to reviews': { icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'Customer retention': { icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50 text-indigo-600 border-indigo-200/70' },
};

/**
 * CustomerJourneyRoadmap:
 * An attractive, interactive, and engaging scroll-driven roadmap that visually tracks
 * the customer journey from first click to loyal customer as the user scrolls downwards.
 */
export default function CustomerJourneyRoadmap({ onOpenModule, onBookDemo }) {
  const containerRef = useRef(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Scroll Progress across the roadmap container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 25%'],
  });

  // Smooth spring for the animated connecting beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Track active stage index as user scrolls
  useEffect(() => {
    if (prefersReducedMotion) return;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.25) {
        setActiveStageIndex(0);
      } else if (latest < 0.5) {
        setActiveStageIndex(1);
      } else if (latest < 0.75) {
        setActiveStageIndex(2);
      } else {
        setActiveStageIndex(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Smooth scroll jump to a specific milestone
  const scrollToStage = (stageIdx) => {
    setActiveStageIndex(stageIdx);
    const element = document.getElementById(`roadmap-stage-${stageIdx}`);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-16 sm:py-24 bg-gradient-to-b from-surface via-[#f8f9fd] to-surface relative scroll-mt-20"
      aria-label="Customer Journey Roadmap"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-primary/5 via-pink-500/5 to-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-xs uppercase tracking-wider">
            <Sparkles size={13} className="text-primary animate-pulse" />
            <span>Interactive Funnel Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-deep font-heading">
            From first click to loyal customer.
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Scroll downwards to follow how digital marketing topics fit a real customer lifecycle,
            not just arbitrary textbook order.
          </p>
        </div>

        {/* ─── STICKY INTERACTIVE MILESTONE NAVIGATOR BAR ─── */}
        <div className="sticky top-20 z-30 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="backdrop-blur-md bg-white/90 border border-line/90 shadow-card rounded-2xl p-1.5 flex items-center justify-between gap-1 sm:gap-2">
            {ROADMAP_STAGES.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isActive = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  className={`relative flex-1 flex items-center justify-center gap-1.5 sm:gap-2.5 py-2.5 px-2 sm:px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-deep shadow-xs'
                      : 'text-muted hover:text-deep hover:bg-soft/40'
                  }`}
                  aria-current={isActive ? 'step' : undefined}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeRoadmapTabGlider"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm border border-line/80"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon & Step Number */}
                  <span
                    className={`relative z-10 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold transition-all duration-300 ${
                      isActive
                        ? `${stage.lightBg} ${stage.textCol} scale-110`
                        : isPassed
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'bg-soft/60 text-muted'
                    }`}
                  >
                    {isPassed ? <CheckCircle2 size={13} className="text-emerald-500" /> : stage.stepNumber}
                  </span>

                  <span className="relative z-10 truncate hidden xs:inline sm:inline">
                    {stage.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── MAIN ROADMAP CONTAINER WITH VERTICAL TRACK ─── */}
        <div className="relative max-w-5xl mx-auto pb-12">
          {/* Central Vertical Connecting Track (Centered on desktop, left-aligned on mobile) */}
          <div className="absolute top-8 bottom-8 left-6 sm:left-8 md:left-1/2 -translate-x-1/2 w-1.5 bg-line/70 rounded-full overflow-hidden pointer-events-none">
            {/* Animated Scroll Progress Beam */}
            {!prefersReducedMotion ? (
              <motion.div
                className="w-full h-full bg-gradient-to-b from-blue-500 via-pink-500 via-emerald-500 to-violet-500 origin-top shadow-[0_0_12px_rgba(36,72,201,0.5)]"
                style={{ scaleY: smoothProgress }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-b from-blue-500 via-pink-500 via-emerald-500 to-violet-500" />
            )}
          </div>

          {/* Glowing Traveler Dot at leading edge on scroll */}
          {!prefersReducedMotion && (
            <div className="absolute top-8 bottom-8 left-6 sm:left-8 md:left-1/2 -translate-x-1/2 w-1.5 pointer-events-none">
              <motion.div
                className="absolute -left-[5px] w-4 h-4 rounded-full bg-white border-2 border-primary shadow-[0_0_12px_rgba(36,72,201,0.8)] z-10 pointer-events-none"
                style={{
                  top: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
                }}
              >
                <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
              </motion.div>
            </div>
          )}

          {/* 4 Roadmap Milestone Stages */}
          <div className="space-y-16 sm:space-y-24 relative">
            {ROADMAP_STAGES.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isEven = idx % 2 === 0; // Even: Card Left, Odd: Card Right on desktop
              const isActive = activeStageIndex === idx;
              const isPassed = activeStageIndex > idx;

              return (
                <div
                  key={stage.id}
                  id={`roadmap-stage-${idx}`}
                  className="relative scroll-mt-28"
                >
                  {/* ── Center Node / Waypoint (Aligned on line) ── */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 -translate-x-1/2 top-4 z-20">
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border-2 shadow-md transition-all duration-300 ${
                        isActive
                          ? `bg-white ${stage.borderCol} ${stage.ringCol} ring-4 ${stage.shadowCol}`
                          : isPassed
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-600 ring-2 ring-emerald-200'
                          : 'bg-white border-line text-muted'
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 size={24} className="text-emerald-500" />
                      ) : (
                        <StageIcon
                          size={24}
                          className={isActive ? `${stage.textCol} animate-pulse` : 'text-muted'}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* ── Content Grid: Alternating Left & Right ── */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start pl-16 sm:pl-20 md:pl-0">
                    {/* Left Column (Card on Even, Empty Spacer on Odd on Desktop) */}
                    {isEven ? (
                      <div className="md:pr-10">
                        <RoadmapStageCard
                          stage={stage}
                          isActive={isActive}
                          onOpenModule={onOpenModule}
                          position="left"
                        />
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}

                    {/* Right Column (Card on Odd, Empty Spacer on Even on Desktop) */}
                    {!isEven ? (
                      <div className="md:pl-10">
                        <RoadmapStageCard
                          stage={stage}
                          isActive={isActive}
                          onOpenModule={onOpenModule}
                          position="right"
                        />
                      </div>
                    ) : (
                      <div className="hidden md:block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ─── ROADMAP DESTINATION / SUMMARY BANNER ─── */}
          <div className="mt-20 sm:mt-28 pt-8 relative z-20">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white p-7 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white border border-white/15 backdrop-blur-md">
                  <Award size={14} className="text-amber-400" />
                  <span>Full-Funnel Practical Competency</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight text-white">
                  Ready to run end-to-end campaigns like a senior marketer?
                </h3>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                  At Infodesk, you execute every stage hands-on with live budgets, real business profiles,
                  and 1-on-1 mentor guidance in our Mumbai lab centers.
                </p>

                {/* Practical Highlights Pill */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2 text-xs font-medium text-white/90">
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    ✓ 10 In-Depth Modules
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    ✓ 4 Mumbai Centers
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/10">
                    ✓ 100% Job Placement Assistance
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('syllabus');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-deep hover:bg-soft text-sm font-bold shadow-lg transition-all cursor-pointer group"
                  >
                    <span>Inspect Full 10-Module Syllabus</span>
                    <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={onBookDemo}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-bright text-white text-sm font-bold shadow-lg shadow-primary/30 transition-all cursor-pointer group border border-white/20"
                  >
                    <span>Book a Free Demo Class</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * RoadmapStageCard:
 * A premium card representing a single customer journey stage with mindset, outcome,
 * tools, and clickable syllabus chips.
 */
function RoadmapStageCard({ stage, isActive, onOpenModule, position }) {
  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative rounded-[26px] bg-white/95 border backdrop-blur-sm p-6 sm:p-7 shadow-card transition-all duration-300 group ${
        isActive
          ? `${stage.borderCol} ring-2 ${stage.ringCol} shadow-xl`
          : 'border-line/80 hover:border-line hover:shadow-lg'
      }`}
    >
      {/* Desktop Horizontal Connector Arm */}
      <div
        className={`hidden md:block absolute top-8 w-10 h-0.5 pointer-events-none transition-colors duration-300 ${
          position === 'left' ? '-right-10' : '-left-10'
        } ${isActive ? stage.borderCol : 'bg-line/70'}`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${
            isActive ? `${stage.lightBg} border-2 ${stage.borderCol}` : 'bg-line'
          } ${position === 'left' ? 'right-0' : 'left-0'}`}
        />
      </div>

      {/* Mobile Horizontal Connector Arm */}
      <div
        className={`md:hidden absolute top-8 -left-10 sm:-left-12 w-10 sm:w-12 h-0.5 pointer-events-none ${
          isActive ? stage.borderCol : 'bg-line/70'
        }`}
      />

      {/* Stage Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3.5">
        <div className="flex items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider ${stage.lightBg} ${stage.textCol}`}
          >
            STAGE {stage.stepNumber}
          </span>
          <span className="text-xs font-semibold text-muted">
            {stage.phase}
          </span>
        </div>

        {/* Category Pill */}
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${stage.lightBg} ${stage.textCol} ${stage.borderCol}`}
        >
          <Sparkles size={12} />
          <span>{stage.badge}</span>
        </span>
      </div>

      {/* Main Headline */}
      <h3 className="text-xl sm:text-2xl font-bold font-heading text-deep tracking-tight mb-2 group-hover:text-primary transition-colors">
        {stage.headline}
      </h3>

      {/* Customer Mindset Quote Box */}
      <div className="my-3.5 p-3 sm:p-3.5 rounded-xl bg-soft/40 border border-line/60 flex items-start gap-2.5 text-xs sm:text-sm text-ink/80 italic">
        <span className="font-bold text-primary not-italic shrink-0">Mindset:</span>
        <span>{stage.customerMindset}</span>
      </div>

      {/* Educational Narrative */}
      <p className="text-sm text-muted leading-relaxed mb-4">
        {stage.description}
      </p>

      {/* Key Real-World Outcome Badge */}
      <div
        className={`p-3 rounded-xl border mb-5 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold ${stage.lightBg} ${stage.borderCol} ${stage.textCol}`}
      >
        <div className="flex items-center gap-2 min-w-0">
          <TrendingUp size={16} className="shrink-0" />
          <span className="truncate">{stage.outcome}</span>
        </div>
        <span className="shrink-0 px-2 py-0.5 rounded-md bg-white text-[11px] font-mono font-bold shadow-2xs">
          {stage.outcomeMetric}
        </span>
      </div>

      {/* Actionable Topic Chips (Clicking opens and scrolls to Syllabus Module) */}
      <div className="space-y-2 pt-2 border-t border-line/60">
        <div className="flex items-center justify-between text-xs font-semibold text-muted">
          <span>Syllabus Topics Covered:</span>
          <span className="text-[11px] text-primary">Click to inspect in syllabus →</span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {stage.chips.map((chip, cIdx) => {
            const iconConfig = TOPIC_ICON_MAP[chip.topic] || {
              icon: Sparkles,
              color: 'text-primary',
              bg: 'bg-soft text-primary border-line/60',
            };
            const ChipIcon = iconConfig.icon;

            return (
              <motion.button
                key={cIdx}
                type="button"
                onClick={() => onOpenModule(chip.moduleIndex)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group/chip inline-flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-white hover:bg-soft/50 border border-line/80 hover:border-primary/50 text-deep shadow-2xs transition-all cursor-pointer text-xs font-semibold"
                title={`Inspect ${chip.topic} in syllabus`}
              >
                <span
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${iconConfig.bg} group-hover/chip:scale-110 transition-transform`}
                >
                  <ChipIcon size={12} className={iconConfig.color} />
                </span>
                <span className="group-hover/chip:text-primary transition-colors">
                  {chip.topic}
                </span>
                <ArrowRight
                  size={11}
                  className="text-muted/60 group-hover/chip:text-primary group-hover/chip:translate-x-0.5 transition-all"
                />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Tools Mastered Footer Tags */}
      <div className="mt-4 pt-3 border-t border-line/50 flex flex-wrap items-center gap-1.5 text-[11px] text-muted font-medium">
        <span className="text-ink/70 font-semibold mr-1">Tools:</span>
        {stage.tools.map((tool, tIdx) => (
          <span
            key={tIdx}
            className="px-2 py-0.5 rounded-md bg-soft/50 border border-line/50 text-deep/80"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
