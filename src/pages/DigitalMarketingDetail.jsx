import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Award,
  CheckCircle2,
  Clock,
  Search,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Mail,
  Send,
  FileDown,
  ArrowRight,
  ArrowLeft,
  Compass,
  Users,
  Target,
  Crown,
  PenTool,
  Layers,
  Megaphone,
  PieChart,
  Flame,
  Smartphone,
  TrendingUp,
  ShoppingBag,
  Zap,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

// React Bits Components
import Aurora from '../components/Aurora';
import ShinyText from '../components/ShinyText';
import TrueFocus from '../components/TrueFocus';
import GlareHover from '../components/GlareHover';
import Stack from '../components/Stack';
import Counter from '../components/Counter';
import CurvedLoop from '../components/CurvedLoop';
import GooeyNav from '../components/GooeyNav';
import Stepper, { Step } from '../components/Stepper';
import SpotlightCard from '../components/SpotlightCard';
import TiltedCard from '../components/TiltedCard';
import PixelCard from '../components/PixelCard';
import LazyMount from '../components/common/LazyMount';

// Shared Components reused per Adjustment 3
import ModuleAccordion from '../components/ModuleAccordion';
import CourseOverviewCard from '../components/CourseOverviewCard';
import ClosingDemoBanner from '../components/ClosingDemoBanner';

// Data Source of Truth (Brochure Page 4)
import {
  DIGITAL_MARKETING_MODULES,
  TOTAL_DIGITAL_MARKETING_TOPICS,
  MARKETING_CHANNELS,
  CUSTOMER_JOURNEY_STAGES,
} from '../data/digitalMarketing';
import { branches } from '../data/branches';
import { courses } from '../data/courses';
import { testimonials } from '../data/testimonials';

// Runtime Configuration
import {
  effectsConfig,
  prefersReducedMotion,
  isSaveData,
  isTouchDevice,
} from '../config/effects';

// Premium Stage Metadata & Icons for Customer Journey
const STAGE_METADATA = [
  {
    id: 'awareness',
    stepNumber: '01',
    title: 'Awareness',
    badge: 'Discovery & Search',
    icon: Compass,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    id: 'engagement',
    stepNumber: '02',
    title: 'Engagement',
    badge: 'Social & Video',
    icon: Users,
    color: 'text-pink-600',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
  },
  {
    id: 'conversion',
    stepNumber: '03',
    title: 'Conversion',
    badge: 'Leads & Paid Ads',
    icon: Target,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    id: 'loyalty',
    stepNumber: '04',
    title: 'Loyalty',
    badge: 'Retention & ORM',
    icon: Crown,
    color: 'text-violet-600',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
  },
];

// Tailored Premium Icons for All Brochure Marketing Topics
const TOPIC_ICON_MAP = {
  // Awareness
  'SEO': { icon: Search, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'Blogging': { icon: PenTool, color: 'text-indigo-600', bg: 'bg-indigo-50 text-indigo-600 border-indigo-200/70' },
  'Content marketing': { icon: Layers, color: 'text-sky-600', bg: 'bg-sky-50 text-sky-600 border-sky-200/70' },
  'Display advertising': { icon: Megaphone, color: 'text-amber-600', bg: 'bg-amber-50 text-amber-600 border-amber-200/70' },
  'Media planning and buying': { icon: PieChart, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },

  // Engagement
  'Social media marketing': { icon: Share2, color: 'text-rose-600', bg: 'bg-rose-50 text-rose-600 border-rose-200/70' },
  'Video marketing': { icon: Flame, color: 'text-orange-600', bg: 'bg-orange-50 text-orange-600 border-orange-200/70' },
  'App marketing': { icon: Smartphone, color: 'text-violet-600', bg: 'bg-violet-50 text-violet-600 border-violet-200/70' },
  'Managing social media comments': { icon: MessageCircle, color: 'text-teal-600', bg: 'bg-teal-50 text-teal-600 border-teal-200/70' },

  // Conversion
  'Google Ads': { icon: Target, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'Conversion rate optimisation (CRO)': { icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'E-commerce marketing': { icon: ShoppingBag, color: 'text-amber-600', bg: 'bg-amber-50 text-amber-600 border-amber-200/70' },
  'Affiliate marketing': { icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50 text-yellow-600 border-yellow-200/70' },
  'Building a lead generation page': { icon: LayoutTemplate, color: 'text-cyan-600', bg: 'bg-cyan-50 text-cyan-600 border-cyan-200/70' },

  // Loyalty
  'Email marketing': { icon: Send, color: 'text-blue-600', bg: 'bg-blue-50 text-blue-600 border-blue-200/70' },
  'WhatsApp marketing': { icon: MessageCircle, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'Responding to reviews': { icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50 text-emerald-600 border-emerald-200/70' },
  'Customer retention': { icon: Award, color: 'text-indigo-600', bg: 'bg-indigo-50 text-indigo-600 border-indigo-200/70' },
};

export default function DigitalMarketingDetail({ course }) {
  // Related courses (ADDM and Graphic Design per prompt)
  const relatedCourses = useMemo(() => {
    return courses.filter((c) => ['addm', 'graphic-design'].includes(c.slug));
  }, []);

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Customer Journey Active Stage Tab
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);

  // Robust smooth scroll and auto-expand target module accordion after layout settles
  const handleOpenModule = (targetIndex) => {
    // 1. Expand target module
    setOpenModuleIndices((prev) =>
      prev.includes(targetIndex) ? prev : [...prev, targetIndex]
    );

    // 2. Wait for next animation frames and height settlement without fixed arbitrary delay
    let attempts = 0;
    const checkAndScroll = () => {
      attempts++;
      const targetElement = document.getElementById(`module-${targetIndex}`);
      if (targetElement) {
        const headerOffset = 88; // 72px fixed header + 16px clearance
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else if (attempts < 10) {
        requestAnimationFrame(checkAndScroll);
      }
    };

    // Double-rAF ensures React has rendered the accordion expansion before calculating coordinates
    requestAnimationFrame(() => {
      requestAnimationFrame(checkAndScroll);
    });
  };

  const handleModuleToggle = (index) => {
    setOpenModuleIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // ─── HERO STACK ILLUSTRATION CARDS (B1 FIX: Generic copy, 1px ice-blue border, "Illustration" badge) ───
  const heroCards = [
    // Card (a): SEO Search Result
    <div
      key="seo-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a5d8ff]">
            <Search size={14} className="text-[#4a6df0]" />
            <span className="truncate max-w-[200px]">site:infodesk.com/courses</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Illustration
          </span>
        </div>
        <p className="text-[11px] text-[#a5d8ff]/80 truncate">
          infodeskcomputers.com › courses › digital-marketing
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug font-heading">
          Digital Marketing Course in Mumbai - 6 Months + Job Training
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Master{' '}
          <mark className="bg-[#4a6df0]/30 text-[#a5d8ff] font-semibold px-1 rounded">
            SEO, Google Ads, SMM
          </mark>{' '}
          and conversion rate optimization with live mentor-led campaigns.
        </p>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Rank #1 organic result</span>
        <span className="text-emerald-400 font-medium">Search engine optimization</span>
      </div>
    </div>,

    // Card (b): Social Post Card (SMM) - NO engagement numbers per Adjustment 2 & B1
    <div
      key="smm-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#2448c9] to-[#a5d8ff] flex items-center justify-center font-bold text-xs text-white">
              YB
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">Your brand</p>
              <p className="text-[10px] text-[#a5d8ff]/70 mt-0.5">@yourbrand · SMM campaign</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Illustration
          </span>
        </div>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Scale your revenue with multi-channel funnels and high-converting lead generation pages built for modern audiences.
        </p>
        <div className="w-full h-24 rounded-xl bg-gradient-to-br from-[#13266f] to-[#2448c9]/50 border border-white/10 flex items-center justify-center text-xs font-semibold text-[#a5d8ff]">
          Visual storytelling &amp; lead generation
        </div>
      </div>
      {/* Action icons ONLY - Zero engagement numbers per B1 */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[#a5d8ff]">
        <div className="flex items-center gap-4">
          <Heart size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
          <MessageCircle size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
          <Share2 size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
        </div>
        <Bookmark size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
      </div>
    </div>,

    // Card (c): Google Ads Search Card
    <div
      key="ads-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white bg-[#4a6df0] px-2 py-0.5 rounded">
              Ad
            </span>
            <span className="text-xs font-mono text-[#a5d8ff] truncate">yourbrand.com/offer</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Illustration
          </span>
        </div>
        <h4 className="text-base font-bold text-white leading-snug font-heading">
          High-converting lead campaigns - Targeted ads that convert
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Reach buyers precisely at the point of commercial intent with keyword targeting, negative lists, and automated bidding.
        </p>
        <div className="flex gap-2 pt-1 text-[11px] text-[#a5d8ff]">
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Syllabus overview</span>
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Free demo session</span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Google Ads &amp; paid search</span>
        <span className="text-emerald-400 font-medium">Right conversion setup</span>
      </div>
    </div>,

    // Card (d): Email Preview Card
    <div
      key="email-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs text-[#a5d8ff]">
            <Mail size={14} className="text-[#4a6df0]" />
            <span className="font-mono truncate">newsletter@yourbrand.com</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Illustration
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-[11px] font-medium text-[#a5d8ff]">Subject line</p>
          <h4 className="text-base font-bold text-white leading-snug font-heading">
            Your weekly growth &amp; customer retention playbook
          </h4>
        </div>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Automated nurture sequence showing customer lifecycle retention, WhatsApp broadcasts, and high-engagement drip funnels.
        </p>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>WhatsApp &amp; email marketing</span>
        <span className="text-white hover:underline cursor-pointer flex items-center gap-1 font-medium">
          Open campaign <Send size={11} />
        </span>
      </div>
    </div>,
  ];

  // GooeyNav Tab Items for Customer Journey
  const journeyTabItems = CUSTOMER_JOURNEY_STAGES.map((st, idx) => ({
    label: st.label,
    id: `journey-tab-${idx}`,
    controls: `journey-tabpanel-${idx}`,
  }));

  return (
    <div className="min-h-screen bg-background text-ink overflow-x-hidden">
      {/* ─── 1. HERO SECTION (APPROVED: LAYOUT, TEXT, BACKGROUND, BUTTONS & STATS BAR UNCHANGED) ─── */}
      <section
        id="overview"
        className="relative bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white min-h-[82vh] flex flex-col justify-between pt-14 pb-10 overflow-hidden"
      >
        {/* Background Aurora WebGL Canvas mounted through LazyMount */}
        {effectsConfig.digitalMarketingAurora && !prefersReducedMotion && !isSaveData && !isTouchDevice ? (
          <LazyMount
            isCanvasOrWebGL={true}
            fallback={<div className="absolute inset-0 bg-[#0b1a52]/60 pointer-events-none" aria-hidden="true" />}
            className="absolute inset-0 pointer-events-none"
          >
            <Aurora
              colorStops={['#2448c9', '#4a6df0', '#a5d8ff']}
              amplitude={0.9}
              speed={0.4}
              mouseInteraction={false}
              className="absolute inset-0 w-full h-full pointer-events-none opacity-45"
            />
          </LazyMount>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] pointer-events-none" />
        )}

        {/* Left-to-right contrast gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071138]/95 via-[#0b1a52]/75 to-transparent pointer-events-none" />

        {/* Main Hero Container */}
        <div className="max-w-content mx-auto px-6 relative z-10 w-full my-auto py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: ~58% (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#a5d8ff] flex-wrap">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={12} />
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                <ChevronRight size={12} />
                <Link to="/courses?category=Digital%20marketing" className="hover:text-white transition-colors">
                  Digital marketing
                </Link>
                <ChevronRight size={12} />
                <span className="font-semibold text-white">Digital Marketing</span>
              </nav>

              {/* Glass Metadata Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] text-xs font-semibold backdrop-blur-md">
                  {course.level}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] text-xs font-semibold backdrop-blur-md">
                  {course.duration}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-md">
                  {course.category}
                </span>
              </div>

              {/* H1 Heading with ShinyText */}
              <h1 className="text-[clamp(44px,6.2vw,92px)] font-bold tracking-tight text-white leading-[1.02] font-heading">
                {effectsConfig.digitalMarketingShinyText && !prefersReducedMotion ? (
                  <ShinyText
                    text="Digital Marketing"
                    color="#a5d8ff"
                    shineColor="#ffffff"
                    speed={3}
                    className="inline-block"
                  />
                ) : (
                  'Digital Marketing'
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-[#c3cbf2] text-base sm:text-lg leading-relaxed max-w-xl">
                Learn SEO, social media, Google Ads, content and more from industry professionals.
              </p>

              {/* TrueFocus Tagline with ice-blue bracket frame */}
              <div className="py-1">
                {effectsConfig.digitalMarketingTrueFocus && !prefersReducedMotion ? (
                  <TrueFocus
                    sentence="Search Social Ads Content"
                    manualMode={false}
                    blurAmount={3}
                    borderColor="#a5d8ff"
                    glowColor="rgba(165, 216, 255, 0.4)"
                    animationDuration={0.6}
                    pauseBetweenAnimations={1.2}
                    borderWidth={2}
                    cornerSize={14}
                  />
                ) : (
                  /* Reduced Motion Fallback: Show first word statically per Adjustment 5 */
                  <div className="text-xl sm:text-2xl font-bold text-[#a5d8ff] font-heading">
                    Search <span className="text-white/60 font-normal text-base">· Social · Ads · Content</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons (Off-white button with deep blue text + ghost button) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <GlareHover
                  width="auto"
                  height="auto"
                  borderRadius="9999px"
                  glareOpacity={0.4}
                  glareColor="#ffffff"
                  className="rounded-full inline-block"
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full bg-[#f6f5f1] text-[#13266f] hover:bg-white transition-all shadow-lg hover:shadow-xl"
                  >
                    Book a free demo
                  </Link>
                </GlareHover>

                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-7 py-3.5 min-h-[48px] rounded-full border border-[#a5d8ff]/40 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  <FileDown size={16} />
                  <span>Download brochure</span>
                </a>
              </div>

              {/* Trust Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#a5d8ff]/90">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Award size={14} className="text-[#a5d8ff]" />
                  <span>Govt. Recognized Certification</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>100% Job Placement Assistance</span>
                </span>
              </div>
            </div>

            {/* Right Column: B1 FIX: cards={heroCards} illustration cards, NO remote demo images */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {/* Desktop (>= 1024px): Stack of 4 illustration cards (460x380px container) */}
              <div className="hidden lg:block w-[460px] h-[380px] relative">
                <Stack
                  cards={heroCards}
                  layout="deck"
                  autoplay={false}
                  visible={4}
                  radius={22}
                  spread={0.6}
                  depth={0.4}
                  className="w-full h-full"
                />
              </div>

              {/* Mobile (< 1024px): Single static SEO card below text to avoid touch conflicts */}
              <div className="block lg:hidden w-full max-w-[420px] mx-auto mt-4">
                {heroCards[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glass Stats Bar (Counter metrics: 10 | 6 | 4 | 67) */}
        <div className="max-w-content mx-auto px-6 w-full relative z-10 pt-4">
          <div className="backdrop-blur-md bg-white/[0.06] border border-white/[0.14] rounded-[22px] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center shadow-lg">
            {/* 1. Modules */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={DIGITAL_MARKETING_MODULES.length} duration={0.8} />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Modules
              </p>
            </div>

            {/* 2. Months of training */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={6} duration={0.8} />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Months of training
              </p>
            </div>

            {/* 3. Mumbai branches */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={branches.length} duration={0.8} />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Mumbai branches
              </p>
            </div>

            {/* 4. Topics covered (dynamically computed sum strictly 67 per Adjustment 1) */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={TOTAL_DIGITAL_MARKETING_TOPICS} duration={0.8} />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Topics covered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CHANNEL STRIP (SLIM BAND, SENTENCE CASE, 30PX FONT - B3 FIX) ─── */}
      <section className="bg-[#eef2fd] border-y border-[#c3d1fb]/60 py-2 sm:py-2.5 overflow-hidden relative">
        {!prefersReducedMotion ? (
          <div className="w-full h-12 sm:h-14 flex items-center justify-center">
            <CurvedLoop
              marqueeText={MARKETING_CHANNELS.join(' · ')}
              speed={1.5}
              shape="line"
              fontSize={30}
              fontWeight={600}
              color="#13266f"
              separator="·"
              separatorColor="#4a6df0"
              interactive={false}
              className="font-semibold tracking-normal font-heading select-none"
            />
          </div>
        ) : (
          /* Reduced-motion Fallback: Static wrapping chips in sentence case */
          <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center gap-2 py-1.5">
            {MARKETING_CHANNELS.map((ch) => (
              <span
                key={ch}
                className="px-3 py-1 bg-surface rounded-full text-xs font-semibold text-primary border border-line shadow-sm"
              >
                {ch}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ─── 3. CUSTOMER JOURNEY (COMPACT VERSION, ~450PX TALL - B4 FIX) ─── */}
      <section id="journey" className="py-12 sm:py-16 bg-surface relative">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              From first click to loyal customer
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              This shows how the topics fit a customer journey, not the class order.
            </p>
          </div>

          {/* Interactive Stepper Pipeline Container */}
          <div className="max-w-4xl mx-auto rounded-[28px] bg-white/95 border border-line/80 shadow-card p-5 sm:p-8 space-y-7 relative backdrop-blur-sm">
            {/* 4-Step Interactive Pipeline Header Bar */}
            <div
              role="tablist"
              aria-label="Customer journey stages"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-1.5 rounded-2xl bg-soft/60 border border-line/60"
            >
              {STAGE_METADATA.map((meta, idx) => {
                const IconComponent = meta.icon;
                const isActive = activeJourneyStage === idx;
                const isPassed = activeJourneyStage > idx;

                return (
                  <button
                    key={meta.id}
                    type="button"
                    role="tab"
                    id={`journey-tab-${idx}`}
                    aria-selected={isActive}
                    aria-controls={`journey-tabpanel-${idx}`}
                    onClick={() => setActiveJourneyStage(idx)}
                    className={`relative flex items-center gap-2.5 sm:gap-3 p-2.5 sm:py-3 sm:px-4 rounded-xl text-left transition-all duration-200 group cursor-pointer focus:outline-none ${
                      isActive ? 'text-deep' : 'text-muted hover:text-deep hover:bg-white/40'
                    }`}
                  >
                    {/* Active Glider Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFunnelGlider"
                        className="absolute inset-0 bg-white rounded-xl shadow-sm border border-line/70"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Step Icon Badge */}
                    <span
                      className={`relative z-10 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-transform duration-300 ${
                        isActive
                          ? `${meta.bgColor} ${meta.color} shadow-sm scale-105`
                          : isPassed
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-white/80 text-muted border border-line/50 group-hover:scale-105'
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : (
                        <IconComponent size={16} className={isActive ? 'animate-pulse' : ''} />
                      )}
                    </span>

                    {/* Step Text */}
                    <div className="relative z-10 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted">
                          {meta.stepNumber}
                        </span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        )}
                      </div>
                      <span className="block text-xs sm:text-sm font-bold truncate">
                        {meta.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Content with Smooth Slide Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJourneyStage}
                role="tabpanel"
                id={`journey-tabpanel-${activeJourneyStage}`}
                aria-labelledby={`journey-tab-${activeJourneyStage}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="space-y-6 pt-1 text-center"
              >
                {/* Stage Badge & Factual Sentence */}
                <div className="space-y-2.5 max-w-2xl mx-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                    <Sparkles size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
                    <span>{STAGE_METADATA[activeJourneyStage].badge}</span>
                  </span>
                  <p className="text-base sm:text-lg text-deep/95 font-medium leading-relaxed">
                    {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].sentence}
                  </p>
                </div>

                {/* Premium Interactive Topic Chips with Tailored Icons & Hover Animations */}
                <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 pt-2">
                  {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].chips.map((chip, cIdx) => {
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
                        onClick={() => handleOpenModule(chip.moduleIndex)}
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 sm:py-2.5 rounded-full bg-white hover:bg-gradient-to-r hover:from-white hover:to-soft/60 border border-line/80 hover:border-primary/50 text-deep shadow-sm hover:shadow-md hover:shadow-primary/10 transition-all duration-200 cursor-pointer"
                      >
                        {/* Custom Colored Icon Bubble with Micro-Animation */}
                        <span
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border ${iconConfig.bg} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                        >
                          <ChipIcon size={15} className={`${iconConfig.color} transition-colors`} />
                        </span>

                        {/* Topic Name */}
                        <span className="text-xs sm:text-sm font-semibold tracking-tight group-hover:text-primary transition-colors">
                          {chip.topic}
                        </span>

                        {/* Interactive Animated Arrow */}
                        <span className="w-5 h-5 rounded-full bg-soft/70 group-hover:bg-primary group-hover:text-white flex items-center justify-center text-primary/70 transition-all duration-200 shrink-0 ml-0.5">
                          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Bottom Navigation & Controls */}
                <div className="pt-6 border-t border-line/60 flex items-center justify-between gap-4">
                  {/* Previous Stage Button */}
                  <button
                    type="button"
                    onClick={() => setActiveJourneyStage(Math.max(0, activeJourneyStage - 1))}
                    disabled={activeJourneyStage === 0}
                    className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all ${
                      activeJourneyStage === 0
                        ? 'opacity-0 pointer-events-none'
                        : 'text-muted hover:text-deep hover:bg-soft/70 cursor-pointer'
                    }`}
                  >
                    <ArrowLeft size={15} />
                    <span>Previous stage</span>
                  </button>

                  {/* Funnel Progress Dots */}
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    {STAGE_METADATA.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          dotIdx === activeJourneyStage
                            ? 'w-6 bg-primary'
                            : dotIdx < activeJourneyStage
                            ? 'w-2 bg-emerald-500'
                            : 'w-2 bg-line'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Next Stage or Final CTA Button */}
                  {activeJourneyStage < 3 ? (
                    <button
                      type="button"
                      onClick={() => setActiveJourneyStage(activeJourneyStage + 1)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-primary text-white hover:bg-deep shadow-md hover:shadow-lg shadow-primary/20 transition-all group cursor-pointer"
                    >
                      <span>Next stage</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById('syllabus');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg shadow-emerald-600/20 transition-all group cursor-pointer"
                    >
                      <span>Explore Syllabus</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── 4. DETAILED SYLLABUS (MODULEACCORDION + STICKY OVERVIEW CARD - B5 FIX) ─── */}
      <section id="syllabus" className="py-12 sm:py-20 bg-soft/30 scroll-mt-[88px]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: 10 Modules Accordion (col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-1.5">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
                  Detailed syllabus.
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Full topic list for each module.
                </p>
              </div>

              {/* ModuleAccordion with controlled open indices and clean module titles */}
              <ModuleAccordion
                modules={DIGITAL_MARKETING_MODULES}
                openIndices={openModuleIndices}
                onToggle={handleModuleToggle}
                useSpotlight={false}
              />
            </div>

            {/* Right Column: Sticky Course Overview Card (col-span-4) */}
            <div className="lg:col-span-4">
              <CourseOverviewCard
                course={course}
                whatsappMessage={encodeURIComponent(
                  `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch timings, fee details, and book a free demo session?`
                )}
                brochurePath="/assets/Infodesk_Computer_Education.pdf"
                className="sticky lg:top-[92px]"
              />

              {/* React Bits TiltedCard: Certificate & Accreditation Showcase */}
              {effectsConfig.digitalMarketingTiltedCard && (
                <div className="hidden sm:block">
                  <TiltedCard
                    containerHeight="auto"
                    containerWidth="100%"
                    imageHeight="auto"
                    imageWidth="100%"
                    scaleOnHover={1.02}
                    rotateAmplitude={8}
                    showTooltip={false}
                    glare={0.25}
                    glareColor="#2448c9"
                    radius={20}
                    className="w-full"
                  >
                    <div className="p-5 rounded-[20px] bg-white border border-line/80 shadow-card space-y-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-soft text-primary flex items-center justify-center shrink-0">
                          <Award size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-deep leading-tight font-heading">
                            Course Certificate
                          </h4>
                          <p className="text-[11px] text-muted">
                            Govt. Recognized & ISO 9001:2015
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        Official certification issued upon completing all 10 modules and practical project assignments.
                      </p>
                      <div className="flex items-center justify-between pt-2.5 border-t border-line/50 text-[11px] font-semibold text-primary">
                        <span>10 Modules</span>
                        <span>Job Training Included</span>
                      </div>
                    </div>
                  </TiltedCard>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. STUDENT STORIES (4 EXACT BROCHURE QUOTES - B6 FIX) ─── */}
      <section id="stories" className="py-12 sm:py-20 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Student stories
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              What our students say.
            </p>
          </div>

          {/* 4 Exact Brochure Testimonials with optional SpotlightCard illumination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => {
              const cardContent = (
                <>
                  <blockquote className="text-sm sm:text-[15px] text-ink/90 leading-relaxed italic">
                    “{t.quote.replace(/'/g, '’')}”
                  </blockquote>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-line/50">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-sm shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-base font-bold text-deep leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-xs text-primary font-semibold mt-0.5">
                        Infodesk student
                      </p>
                    </div>
                  </div>
                </>
              );

              return effectsConfig.digitalMarketingSpotlight ? (
                <SpotlightCard
                  key={t.id}
                  theme="light"
                  spotlightColor="rgba(36, 72, 201, 0.12)"
                  intensity={0.25}
                  proximity={100}
                  className="!p-6 sm:!p-7 !rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between space-y-5"
                >
                  {cardContent}
                </SpotlightCard>
              ) : (
                <div
                  key={t.id}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between space-y-5"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors group"
            >
              <span>See student stories</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 6. RELATED COURSES (PIXELCARD CARDS - B7 FIX) ─── */}
      <section id="related" className="py-12 sm:py-20 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
              Related courses in marketing and design.
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Broaden your career path with diploma and specialization tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => (
              <PixelCard
                key={rel.slug}
                variant="blue"
                gap={8}
                speed={30}
                className="p-6 sm:p-7 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-soft text-primary border border-line/60">
                      {rel.level}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                      <Clock size={12} />
                      <span>{rel.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-deep leading-snug font-heading">
                    {rel.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed">
                    {rel.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {rel.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-soft/70 border border-line/50 text-ink/80 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-line/50 mt-6">
                  <Link
                    to={`/courses/${rel.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-deep transition-colors group"
                  >
                    <span>View syllabus</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CLOSING DEMO BANNER (LASERFLOW IN LAZYMOUNT + STARBORDER BUTTON) ─── */}
      <ClosingDemoBanner
        title="Try a free demo class."
        description="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers."
        buttonText="Book your free demo session"
      />
    </div>
  );
}
