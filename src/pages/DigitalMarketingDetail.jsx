import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  Search,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  ExternalLink,
  Mail,
  Send,
  Layers,
  FileDown,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Smartphone,
  Globe,
  ShieldCheck,
  Check,
  Megaphone,
  Palette,
  Laptop,
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
import FlowingMenu from '../components/FlowingMenu';
import GlassIcons from '../components/GlassIcons';
import AnimatedList from '../components/AnimatedList';
import ScrollReveal from '../components/ScrollReveal';
import PixelCard from '../components/PixelCard';
import LazyMount from '../components/common/LazyMount';
import Button from '../components/Button';

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
  CHANNELS_MASTERED,
  PRACTICAL_SKILLS,
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

// Palette restriction for GlassIcons per Adjustment 6 (royal blue, bright blue, ice blue)
const GLASS_ICON_COLORS = [
  'linear-gradient(135deg, #13266f, #2448c9)', // Royal Blue
  'linear-gradient(135deg, #2448c9, #4a6df0)', // Bright Blue
  'linear-gradient(135deg, #4a6df0, #60a5fa)', // Sky Blue
  'linear-gradient(135deg, #1e3a8a, #3b82f6)', // Deep Bright Blue
  'linear-gradient(135deg, #0284c7, #38bdf8)', // Cyan Blue
  'linear-gradient(135deg, #1d4ed8, #a5d8ff)', // Ice Blue
];

export default function DigitalMarketingDetail({ course }) {
  // Related courses (ADDM and Graphic Design per prompt)
  const relatedCourses = useMemo(() => {
    return courses.filter((c) => ['addm', 'graphic-design'].includes(c.slug));
  }, []);

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Customer Journey Active Stage Tab
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);

  // Robust smooth scroll and auto-expand target module accordion after layout settles (Adjustment 7)
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

  // ─── HERO STACK ILLUSTRATION CARDS ───
  // Card (b) has NO numbers/engagement counts per Adjustment 2
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
        <span>Rank #1 Organic result</span>
        <span className="text-emerald-400 font-medium">Search Engine Optimization</span>
      </div>
    </div>,

    // Card (b): Social Post Card (SMM) - NO engagement numbers per Adjustment 2
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
              <p className="text-[10px] text-[#a5d8ff]/70 mt-0.5">@yourbrand · SMM Campaign</p>
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
          Visual Storytelling &amp; Lead Generation
        </div>
      </div>
      {/* Action icons ONLY - Zero engagement numbers per Adjustment 2 */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[#a5d8ff]">
        <div className="flex items-center gap-4">
          <Heart size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
          <MessageCircle size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
          <Share2 size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
        </div>
        <Bookmark size={16} className="text-[#a5d8ff] hover:text-white transition-colors" />
      </div>
    </div>,

    // Card (c): Google Ads Card
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
            <span className="text-xs font-mono text-[#a5d8ff] truncate">yourbrand.com/leads</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Illustration
          </span>
        </div>
        <h4 className="text-base font-bold text-white leading-snug font-heading">
          High-Converting Lead Campaigns - Targeted Ads That Convert
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Reach buyers precisely at the point of commercial intent with keyword targeting, negative lists, and automated bidding.
        </p>
        <div className="flex gap-2 pt-1 text-[11px] text-[#a5d8ff]">
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Syllabus Overview</span>
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Free Demo Session</span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Google Ads &amp; Paid Search</span>
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
          <p className="text-[11px] font-medium text-[#a5d8ff]">Subject Line</p>
          <h4 className="text-base font-bold text-white leading-snug font-heading">
            Your Weekly Omnichannel Growth &amp; Customer Retention Playbook
          </h4>
        </div>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Automated nurture sequence showing customer lifecycle retention, WhatsApp broadcasts, and high-engagement drip funnels.
        </p>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>WhatsApp &amp; Email Marketing</span>
        <span className="text-white hover:underline cursor-pointer flex items-center gap-1 font-medium">
          Open campaign <Send size={11} />
        </span>
      </div>
    </div>,
  ];

  // GooeyNav Tab Items for Customer Journey
  const journeyTabItems = CUSTOMER_JOURNEY_STAGES.map((st, idx) => ({
    label: `${idx + 1}. ${st.label}`,
    id: `journey-tab-${idx}`,
    controls: `journey-tabpanel-${idx}`,
  }));

  // FlowingMenu Items for The Ten Modules
  const flowingMenuItems = useMemo(() => {
    return DIGITAL_MARKETING_MODULES.map((mod, idx) => ({
      text: `${String(idx + 1).padStart(2, '0')} ${mod.name}`,
      marquee: `${mod.name} · ${mod.topics.length > 0 ? `${mod.topics.length} topics` : 'Paid Search'}`,
      meta: mod.topics.length > 0 ? `${mod.topics.length} topics` : 'Paid search',
      targetIndex: idx,
    }));
  }, []);

  // GlassIcons Items for Channels You Will Master
  const glassIconsItems = useMemo(() => {
    const icons = [Search, Share2, Target, BookOpen, MessageCircle, ShieldCheck];
    return CHANNELS_MASTERED.map((ch, idx) => {
      const IconComponent = icons[idx % icons.length];
      return {
        id: `channel-${ch.id}`,
        label: ch.label,
        color: GLASS_ICON_COLORS[idx % GLASS_ICON_COLORS.length],
        icon: <IconComponent size={24} className="text-white" />,
        onClick: () => handleOpenModule(ch.moduleIndex),
      };
    });
  }, []);

  // AnimatedList Items for Skills You Will Practise
  const animatedListItems = useMemo(() => {
    return PRACTICAL_SKILLS.map((item, idx) => ({
      id: item.id || `skill-${idx}`,
      title: item.title,
      subtitle: item.moduleTag,
      badge: item.moduleTag,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background text-ink overflow-x-hidden">
      {/* ─── 1. HERO SECTION (FULL BLEED DEEP BLUE WITH AURORA & STACK) ─── */}
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

            {/* Right Column: ~42% (5 cols on lg) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {/* Desktop (>= 1024px): Stack of 4 illustration cards (460x380px container) */}
              <div className="hidden lg:block w-[460px] h-[380px] relative">
                <Stack
                  items={heroCards}
                  shape="deck"
                  autoplay={false}
                  visible={4}
                  radius={22}
                  spread={14}
                  depth={18}
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

      {/* ─── 2. CHANNEL STRIP (CURVEDLOOP ON SOFT-BLUE BAND) ─── */}
      <section className="bg-[#eef2fd] border-y border-[#c3d1fb]/70 py-4 overflow-hidden relative">
        {!prefersReducedMotion ? (
          <div className="w-full h-14 sm:h-16 flex items-center justify-center">
            <CurvedLoop
              marqueeText={MARKETING_CHANNELS.join(' · ')}
              speed={1.5}
              shape="line"
              fontSize={24}
              color="#13266f"
              separator="·"
              separatorColor="#4a6df0"
              interactive={false}
              className="font-bold tracking-wide uppercase font-heading select-none"
            />
          </div>
        ) : (
          /* Reduced-motion Fallback: Static wrapping chips per Adjustment 5 */
          <div className="max-w-content mx-auto px-6 flex flex-wrap justify-center gap-2 py-2">
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

      {/* ─── 3. CUSTOMER JOURNEY (ACCESSIBLE GOOEYNAV TABS) ─── */}
      <section id="journey" className="py-16 sm:py-24 bg-surface relative">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
              Funnel Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              How customers discover, trust and buy
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Modern digital marketing connects awareness to conversion. Explore each stage of the funnel below.
            </p>
          </div>

          {/* Interactive GooeyNav as Accessible Tabs (Adjustment 6) */}
          <div className="flex justify-center mb-10 overflow-x-auto max-w-full pb-2 no-scrollbar">
            <GooeyNav
              asTabs={true}
              noCanvas={true}
              ariaLabel="Customer journey stages"
              items={journeyTabItems}
              activeIndex={activeJourneyStage}
              onChange={(idx) => setActiveJourneyStage(idx)}
              theme="light"
              color="#2448c9"
              size="md"
              className="shadow-sm"
            />
          </div>

          {/* Active Journey Stage Tabpanel */}
          <div
            role="tabpanel"
            id={`journey-tabpanel-${activeJourneyStage}`}
            aria-labelledby={`journey-tab-${activeJourneyStage}`}
            className="focus:outline-none"
          >
            {/* Stage Description Header */}
            <div className="p-6 rounded-2xl bg-soft/40 border border-line/80 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Stage {activeJourneyStage + 1} of 4 · {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].label}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-deep mt-1 font-heading">
                  {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].headline}
                </h3>
                <p className="text-sm text-muted mt-1 max-w-2xl">
                  {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].summary}
                </p>
              </div>
              <div className="shrink-0">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-line text-primary shadow-sm inline-flex items-center gap-1.5">
                  <Target size={14} />
                  <span>{CUSTOMER_JOURNEY_STAGES[activeJourneyStage].cards.length} Channels</span>
                </span>
              </div>
            </div>

            {/* Stage Channel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CUSTOMER_JOURNEY_STAGES[activeJourneyStage].cards.map((card, cIdx) => (
                <div
                  key={cIdx}
                  className="p-6 rounded-2xl bg-white border border-line/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-soft text-primary border border-line/60">
                        {card.moduleName}
                      </span>
                      <span className="text-xs text-muted font-mono">
                        Module {card.moduleIndex + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-deep leading-snug font-heading">
                      {card.topic}
                    </h4>
                  </div>

                  <div className="pt-6 border-t border-line/50 mt-4">
                    <button
                      type="button"
                      onClick={() => handleOpenModule(card.moduleIndex)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-deep transition-colors group"
                    >
                      <span>Open {card.topic} module</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. THE TEN MODULES (FLOWINGMENU DESKTOP / EXPANDABLE LIST MOBILE) ─── */}
      <section id="modules" className="py-16 sm:py-24 bg-soft/30 border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
              Curriculum Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Ten modules designed for modern marketing
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Every module focuses on a concrete growth lever. Open any module to view its syllabus topics.
            </p>
          </div>

          {/* Desktop (>= 1024px): FlowingMenu */}
          {!prefersReducedMotion ? (
            <div className="hidden lg:block rounded-2xl overflow-hidden border border-line/80 shadow-card bg-surface">
              <FlowingMenu
                items={flowingMenuItems}
                speed={50}
                textColor="#13266f"
                bgColor="#ffffff"
                marqueeBgColor="#13266f"
                marqueeTextColor="#ffffff"
                borderColor="rgba(19, 38, 111, 0.08)"
                showIndex={false}
                showArrow={true}
                onItemClick={(item) => handleOpenModule(item.targetIndex)}
                className="w-full"
              />
            </div>
          ) : null}

          {/* Mobile (< 1024px) or Reduced Motion Fallback: Clean Vertical List */}
          <div className={`${!prefersReducedMotion ? 'lg:hidden' : 'block'} space-y-3`}>
            {DIGITAL_MARKETING_MODULES.map((mod, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-surface border border-line/80 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-8 h-8 rounded-full bg-soft text-primary font-bold text-xs flex items-center justify-center shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-deep leading-snug">
                      {mod.name}
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      {mod.topics.length > 0 ? `${mod.topics.length} topics covered` : 'Reach customers through paid search'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModule(idx)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-soft text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  View syllabus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. CHANNELS YOU WILL MASTER (GLASSICONS GRID) ─── */}
      <section id="channels" className="py-16 sm:py-24 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
              Comprehensive Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Channels you will master
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              End-to-end expertise across organic search, social platforms, paid advertising, and direct response.
            </p>
          </div>

          {/* GlassIcons Component with noCanvas and Royal Blue Palette (Adjustment 6) */}
          <div className="flex justify-center mb-8">
            <GlassIcons
              items={glassIconsItems}
              theme="light"
              noCanvas={true}
              size={64}
              labels="always"
              className="max-w-4xl"
            />
          </div>

          {/* Quick Module Triggers Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-4">
            {CHANNELS_MASTERED.map((ch, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleOpenModule(ch.moduleIndex)}
                className="p-4 rounded-xl bg-soft/50 border border-line/70 hover:border-primary/50 hover:bg-soft text-center transition-all group"
              >
                <p className="text-xs font-bold text-deep group-hover:text-primary transition-colors">
                  {ch.label}
                </p>
                <p className="text-[11px] text-muted mt-1">
                  {ch.moduleName}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. SKILLS YOU WILL PRACTISE (ANIMATEDLIST) ─── */}
      <section id="skills" className="py-16 sm:py-24 bg-soft/30 border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and Overview */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
                Applied Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
                Practical skills you will practise in class
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Every topic in the Infodesk curriculum is backed by hands-on execution. You set up live search campaigns, configure tracking schemas, build landing pages, and launch client ads.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-deep">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>Real campaign budgets &amp; simulated ad spend environments</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-deep">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>Google Search Console &amp; Analytics property verification</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-deep">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check size={14} />
                  </div>
                  <span>WordPress CMS live deployment &amp; widget customization</span>
                </div>
              </div>
            </div>

            {/* Right Column: AnimatedList or Static Fallback */}
            <div className="lg:col-span-6 flex justify-center">
              {!prefersReducedMotion ? (
                <div className="w-full max-w-lg bg-white rounded-2xl border border-line/80 p-4 shadow-card">
                  <AnimatedList
                    items={animatedListItems}
                    theme="light"
                    accentColor="#2448c9"
                    maxHeight={440}
                    width="100%"
                    className="w-full"
                    itemClassName="py-3 px-4 rounded-xl hover:bg-soft/40 transition-colors"
                  />
                </div>
              ) : (
                /* Reduced-motion Fallback: Static Clean List per Adjustment 5 */
                <div className="w-full max-w-lg bg-white rounded-2xl border border-line/80 p-5 space-y-3 shadow-card">
                  {PRACTICAL_SKILLS.map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-soft/40 border border-line/60 flex items-center justify-between gap-3 text-sm"
                    >
                      <div>
                        <p className="font-semibold text-deep">{sk.title}</p>
                        <p className="text-xs text-muted mt-0.5">{sk.moduleTag}</p>
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white border border-line/60 text-primary shrink-0">
                        {sk.moduleTag}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. STATEMENT (SCROLLREVEAL UN-BLURRING SENTENCE) ─── */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a5d8ff] px-3.5 py-1 rounded-full bg-white/10 border border-white/15">
            Full Spectrum Mastery
          </span>
          <div className="py-4">
            <ScrollReveal
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={0}
              blurStrength={6}
              textClassName="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-heading"
            >
              SEO, social media, ads, content, WhatsApp and email. One course, 10 modules.
            </ScrollReveal>
          </div>
          <p className="text-[#a5d8ff] text-sm sm:text-base max-w-xl mx-auto">
            Build a market-ready career with production-grade training from Mumbai&apos;s leading computer education institute.
          </p>
        </div>
      </section>

      {/* ─── 8. STUDENT STORIES (BROCHURE AUTHENTIC REVIEWS) ─── */}
      <section id="stories" className="py-16 sm:py-24 bg-surface border-b border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
              Student Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              What our students say
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Authentic feedback from graduates across our Mumbai training centers.
            </p>
          </div>

          {/* 4 Exact Brochure Testimonials - NO star ratings, NO verified badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-line/80 shadow-sm flex flex-col justify-between"
              >
                <blockquote className="text-sm sm:text-base text-ink/90 leading-relaxed italic">
                  “{t.quote.replace(/'/g, '’')}”
                </blockquote>

                <div className="flex items-center gap-3.5 pt-6 border-t border-line/50 mt-6">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-line shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-deep leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      Infodesk student
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. SYLLABUS AND ENROL (MODULEACCORDION + STICKY OVERVIEW CARD) ─── */}
      <section id="syllabus" className="py-16 sm:py-24 bg-soft/30 scroll-mt-[88px]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: 10 Modules Accordion (col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
                  Course Syllabus
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
                  10 modules · {TOTAL_DIGITAL_MARKETING_TOPICS} topics covered
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Click any module to expand the full list of classroom topics and practical assignments.
                </p>
              </div>

              {/* ModuleAccordion with controlled open indices */}
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. RELATED COURSES (PIXELCARD CARDS) ─── */}
      <section id="related" className="py-16 sm:py-24 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-soft border border-line">
              Explore More Options
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Related courses in marketing and design
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Broaden your career path with diploma and specialization tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedCourses.map((rel) => (
              <PixelCard
                key={rel.slug}
                variant="blue"
                gap={8}
                speed={30}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-line/80 shadow-sm flex flex-col justify-between"
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

      {/* ─── 11. CLOSING DEMO BANNER (LASERFLOW IN LAZYMOUNT + STARBORDER BUTTON) ─── */}
      <ClosingDemoBanner
        title="Try a free demo class."
        description="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers."
        buttonText="Book your free demo session"
      />
    </div>
  );
}
