import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Clock,
  Users,
  Briefcase,
  Sparkles,
  Database,
  Globe,
  Code,
  Palette,
  Calculator,
  Lock,
  Award,
  Star,
  MapPin,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

import Button from '../components/Button';
import TerminalCard from '../components/TerminalCard';
import ScrollReveal from '../components/ScrollReveal';
import LazyMount from '../components/common/LazyMount';
import { effectsConfig } from '../config/effects';
import GoogleRatingBadge, { GoogleIcon, GoogleStars } from '../components/GoogleRatingBadge';

// React Bits components for Home Page
import GradientASCII from '../components/GradientASCII';
import RotatingText from '../components/RotatingText';
import StarBorder from '../components/StarBorder';
import StickerPeel from '../components/StickerPeel';
import CountUp from '../components/CountUp';
import CardSwap, { Card } from '../components/CardSwap';
import LogoLoop from '../components/LogoLoop';
import SpotlightCard from '../components/SpotlightCard';
import Stack from '../components/Stack';

import { branches } from '../data/branches';
import { courses } from '../data/courses';
import { testimonials, GOOGLE_BUSINESS_INFO } from '../data/testimonials';

const recognitionBadges = [
  {
    name: 'Govt. Recognized',
    desc: 'Authorized vocational board',
    icon: ShieldCheck,
  },
  {
    name: 'ISO 9001:2015',
    desc: 'Certified quality standards',
    icon: Award,
  },
  {
    name: 'Skill India',
    desc: 'Kaushal Bharat certified',
    image: '/assets/recognition/skill-india.png',
  },
  {
    name: 'Ministry of MSME',
    desc: 'Govt. of India registered',
    image: '/assets/recognition/msme.png',
  },
  {
    name: 'Digital India',
    desc: 'Power to empower initiatives',
    image: '/assets/recognition/digital-india.png',
  },
];

const categoryCards = [
  {
    title: 'Data and AI',
    desc: 'Data science, analytics, machine learning, generative AI, and advanced Excel modeling.',
    icon: Database,
    color: 'bg-blue-50 text-primary border-blue-200/60',
    count: '3 courses',
    link: '/courses?category=Data and AI',
  },
  {
    title: 'Digital marketing',
    desc: 'SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.',
    icon: Globe,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200/60',
    count: '2 courses',
    link: '/courses?category=Digital marketing',
  },
  {
    title: 'Web and software',
    desc: 'Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.',
    icon: Code,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200/60',
    count: '3 courses',
    link: '/courses?category=Web and software',
  },
  {
    title: 'Design and video',
    desc: 'Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.',
    icon: Palette,
    color: 'bg-rose-50 text-rose-600 border-rose-200/60',
    count: '4 courses',
    link: '/courses?category=Design and video',
  },
  {
    title: 'Office and accounts',
    desc: 'Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.',
    icon: Calculator,
    color: 'bg-amber-50 text-amber-600 border-amber-200/60',
    count: '5 courses',
    link: '/courses?category=Office and accounts',
  },
  {
    title: 'Cyber security',
    desc: 'Ethical hacking, network defense, footprinting, system auditing, and security protocols.',
    icon: Lock,
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200/60',
    count: '1 course',
    link: '/courses?category=Cyber security',
  },
];

const whyInfodesk = [
  {
    num: '01',
    title: 'Industrial faculties',
    desc: 'Learn directly from practicing IT professionals who bring real-world architecture into class.',
    icon: Users,
    tag: 'Direct Mentorship',
  },
  {
    num: '02',
    title: 'Quality teaching',
    desc: 'Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.',
    icon: Sparkles,
    tag: 'Hands-on Labs',
  },
  {
    num: '03',
    title: '100% job assistance',
    desc: 'Dedicated career guidance, resume building, mock interviews, and direct referral drives.',
    icon: Briefcase,
    tag: 'Placement Cell',
  },
  {
    num: '04',
    title: 'Flexible timing',
    desc: 'Morning, afternoon, evening, and weekend slots suited for students and working professionals.',
    icon: Clock,
    tag: 'Flexible Slots',
  },
  {
    num: '05',
    title: 'Extra practice hour',
    desc: 'Unlimited lab access beyond standard lecture hours to practice code, models, and designs.',
    icon: ShieldCheck,
    tag: 'Free Lab Hours',
  },
  {
    num: '06',
    title: 'Small batch',
    desc: 'Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.',
    icon: CheckCircle,
    tag: 'Personalized Focus',
  },
];

const tools = [
  { name: 'Python', cat: 'Data & Dev' },
  { name: 'Power BI', cat: 'Analytics' },
  { name: 'Tableau', cat: 'Analytics' },
  { name: 'SQL', cat: 'Database' },
  { name: 'Excel', cat: 'Analytics' },
  { name: 'Tally Prime', cat: 'Finance' },
  { name: 'Photoshop', cat: 'Design' },
  { name: 'Premiere Pro', cat: 'Video' },
  { name: 'After Effects', cat: 'VFX' },
  { name: 'Figma', cat: 'UI/UX' },
  { name: 'WordPress', cat: 'Web' },
  { name: 'Java', cat: 'Backend' },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [swapWidth, setSwapWidth] = useState(380);

  useEffect(() => {
    const updateWidth = () => {
      const avail = typeof window !== 'undefined' ? window.innerWidth - 32 : 380;
      setSwapWidth(Math.min(400, Math.max(260, avail)));
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Testimonial cards for React Bits Stack (Google reviews + brochure stories)
  const testimonialCards = testimonials.map((t) => {
    const isGoogle = t.source === 'Google Review';
    return (
      <div
        key={t.id}
        className="w-full h-full bg-surface border border-line/80 rounded-card p-5 sm:p-7 flex flex-col justify-between shadow-card text-left select-none relative"
      >
        <div className="space-y-2.5">
          {/* Top meta: Stars + Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-line/40 pb-2.5">
            <div className="flex items-center gap-1.5">
              <GoogleStars rating={t.rating || 5} size={13} />
              <span className="text-[11px] font-bold text-deep font-mono">5.0</span>
            </div>
            {isGoogle ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-soft text-[10px] font-semibold text-primary border border-primary/20">
                <GoogleIcon className="w-3 h-3" />
                <span>Google</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                <CheckCircle size={10} />
                <span>Alumni</span>
              </span>
            )}
          </div>

          {(t.course || t.mentor) && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {t.course && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-soft text-deep border border-line/60 truncate max-w-[200px]">
                  {t.course}
                </span>
              )}
              {t.mentor && (
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60">
                  {t.mentor}
                </span>
              )}
            </div>
          )}

          <p className="text-deep text-xs sm:text-[13px] leading-relaxed line-clamp-4 italic">
            “{t.quote.replace(/'/g, '’')}”
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-3 border-t border-line/50">
          <div className="flex items-center gap-3 min-w-0">
            {t.image ? (
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm shrink-0"
                loading="lazy"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundColor: t.avatarBg || '#4285F4' }}
                aria-hidden="true"
              >
                {t.initials || t.name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-sm font-bold text-deep truncate">{t.name}</p>
              <p className="text-[11px] text-muted truncate">
                {t.date ? `${t.date} · ` : ''}{t.role || 'Student'}
              </p>
            </div>
          </div>

          {isGoogle && (
            <a
              href={GOOGLE_BUSINESS_INFO.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${t.name}'s review on Google`}
              className="text-muted hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="space-y-24 sm:space-y-32 w-full overflow-x-clip">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full">
        {/* Background GradientASCII mounted lazily */}
        {effectsConfig.heroBackground && !shouldReduceMotion ? (
          <div className="absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none">
            <LazyMount
              className="pointer-events-none select-none"
              isCanvasOrWebGL={true}
              fallback={<div className="w-full h-full bg-grid-dots opacity-40 pointer-events-none" />}
            >
              <GradientASCII
                shape="horizon"
                colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
                characters=" =+xX0S8#@"
                cellSize={18}
                density={0.8}
                speed={0.5}
                glyphOpacity={0.4}
                className="w-full h-full pointer-events-none"
              />
            </LazyMount>
          </div>
        ) : (
          <div className="absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none" />
        )}

        <div className="w-full max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 min-w-0 space-y-6 text-left">
              {/* Trust Pill & Sticker */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block" />
                  <span>Govt. Recognized · ISO 9001:2015 certified board</span>
                </div>
              </div>

              {/* Headline with RotatingText */}
              <h1
                aria-label="Learn data, design, marketing, web and accounts skills Mumbai's teams hire for."
                className="text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words"
              >
                <span>Learn </span>
                {effectsConfig.rotatingText && !shouldReduceMotion ? (
                  <span className="inline-block min-w-[9ch] text-left align-baseline" aria-hidden="true">
                    <RotatingText
                      texts={['data', 'design', 'marketing', 'web', 'accounts']}
                      mainClassName="inline-flex text-primary font-bold"
                      rotationInterval={2400}
                      staggerDuration={0.03}
                    />
                  </span>
                ) : (
                  <span className="text-primary font-bold">data</span>
                )}{' '}
                <br className="sm:hidden" />
                skills Mumbai's teams <br className="sm:hidden" /> hire for.
              </h1>

              <p className="text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl">
                Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches.
              </p>

              {/* CTA Buttons: primary with StarBorder & Magnet */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                {effectsConfig.starBorder ? (
                  <StarBorder
                    as="div"
                    color="#4a6df0"
                    trailColor="#2448c9"
                    radius={9999}
                    theme="light"
                    className="!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button"
                  >
                    <Button to="/courses" size="lg" variant="primary" magnet={true}>
                      Explore courses
                    </Button>
                  </StarBorder>
                ) : (
                  <Button to="/courses" size="lg" variant="primary" magnet={true}>
                    Explore courses
                  </Button>
                )}
                <Button to="/contact" size="lg" variant="ghost">
                  Book a free demo
                </Button>
              </div>

              {/* Branch quick pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="font-semibold text-deep flex items-center gap-1">
                  <MapPin size={13} className="text-primary" />
                  <span>4 Mumbai Branches:</span>
                </span>
                <span className="bg-surface px-2.5 py-1 rounded-full border border-line/60">Goregaon West</span>
                <span className="bg-surface px-2.5 py-1 rounded-full border border-line/60">Behram Baug</span>
                <span className="bg-surface px-2.5 py-1 rounded-full border border-line/60">Jogeshwari West</span>
                <span className="bg-surface px-2.5 py-1 rounded-full border border-line/60">Motilal Nagar</span>
              </div>
            </div>

            {/* Right Column: 3D Terminal Card + StickerPeel */}
            <div className="lg:col-span-5 flex justify-center relative">
              <TerminalCard />
              {/* Corner StickerPeel for desktop */}
              {effectsConfig.stickerPeel && (
                <div className="absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20">
                  <LazyMount
                    isCanvasOrWebGL={true}
                    fallback={
                      <div className="w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center">
                        <img
                          src="/assets/recognition/job-assistance-badge.png"
                          alt="100% job assistance"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    }
                  >
                    <StickerPeel
                      imageSrc="/assets/recognition/job-assistance-badge.png"
                      width={100}
                      peelDirection={45}
                      peelBackHoverPct={35}
                      peelBackActivePct={50}
                      finish="gloss"
                      draggable={false}
                      className="cursor-pointer"
                    />
                  </LazyMount>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── NUMBERS STRIP (COUNTUP) ─── */}
      <section className="bg-soft/70 border-y border-line/70 py-8 sm:py-10">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-3">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center">
                {effectsConfig.countUp && !shouldReduceMotion ? (
                  <CountUp to={branches.length} duration={1.6} />
                ) : (
                  branches.length
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted mt-1.5">
                Mumbai branches
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center">
                {effectsConfig.countUp && !shouldReduceMotion ? (
                  <CountUp to={courses.length} duration={1.8} />
                ) : (
                  courses.length
                )}
                <span>+</span>
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted mt-1.5">
                Industry courses
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center">
                {effectsConfig.countUp && !shouldReduceMotion ? (
                  <CountUp to={100} duration={2} suffix="%" />
                ) : (
                  '100%'
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted mt-1.5">
                Job assistance
              </p>
            </div>
            <div className="p-3">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center">
                {effectsConfig.countUp && !shouldReduceMotion ? (
                  <CountUp to={6} duration={1.5} />
                ) : (
                  6
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted mt-1.5">
                Educational pillars
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECOGNITION STRIP ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-5 sm:p-8 shadow-card">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-muted mb-6">
              Recognized and certified for vocational excellence
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              {recognitionBadges.map((item) => (
                <div
                  key={item.name}
                  className="p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ) : item.icon ? (
                    <div className="w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform">
                      <item.icon size={18} />
                    </div>
                  ) : null}
                  <p className="text-xs sm:text-sm font-bold text-deep leading-tight">{item.name}</p>
                  <p className="text-[11px] text-muted mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── PICK YOUR TRACK (CARDSWAP) ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading and info */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight">
                Pick your track.
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives.
              </p>
              <div className="pt-2">
                <Button to="/courses" size="lg" variant="primary">
                  Explore courses
                </Button>
              </div>
            </div>

            {/* Right Column: CardSwap or Responsive Grid Fallback */}
            <div className="lg:col-span-7 flex justify-center w-full overflow-hidden sm:overflow-visible">
              {effectsConfig.cardSwap && !shouldReduceMotion ? (
                <div className="relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center">
                  <CardSwap
                    width={swapWidth}
                    height={260}
                    cardRadius={22}
                    visibleCards={4}
                    theme="light"
                    autoplay={true}
                    pauseOnHover={true}
                    delay={3500}
                    className="w-full h-full"
                  >
                    {categoryCards.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Card key={cat.title}>
                          <div className="w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none">
                            <div>
                              <div className="flex items-center justify-between mb-4">
                                <div
                                  className={`w-11 h-11 rounded-xl ${cat.color} border flex items-center justify-center shadow-sm`}
                                >
                                  <Icon size={22} />
                                </div>
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted">
                                  {cat.count}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold text-deep mb-2">{cat.title}</h3>
                              <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                                {cat.desc}
                              </p>
                            </div>
                            <div className="pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary">
                              <Link to={cat.link} className="hover:underline flex items-center gap-1">
                                <span>Browse track</span>
                                <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </CardSwap>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {categoryCards.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <Link
                        key={cat.title}
                        to={cat.link}
                        className="bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className={`w-9 h-9 rounded-lg ${cat.color} border flex items-center justify-center`}>
                              <Icon size={18} />
                            </div>
                            <span className="text-xs text-muted font-medium">{cat.count}</span>
                          </div>
                          <h3 className="text-base font-bold text-deep">{cat.title}</h3>
                          <p className="text-xs text-muted mt-1 line-clamp-2">{cat.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── WHY INFODESK (SPOTLIGHTCARD) ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[clamp(32px,4.4vw,52px)] font-bold text-deep">
              Why Infodesk.
            </h2>
            <p className="text-muted text-base sm:text-lg mt-3">
              Six foundational pillars taken directly from our educational charter to ensure every student succeeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyInfodesk.map((item) => {
              const Icon = item.icon;
              return effectsConfig.spotlightCard ? (
                <SpotlightCard
                  key={item.title}
                  spotlightColor="rgba(36, 72, 201, 0.16)"
                  shape="circle"
                  intensity={0.22}
                  theme="light"
                  className="!bg-surface !rounded-card p-6 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50">
                      {item.num}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-deep">{item.title}</h3>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>

                  <div className="pt-3 border-t border-line/40">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep">
                      {item.tag}
                    </span>
                  </div>
                </SpotlightCard>
              ) : (
                <div
                  key={item.title}
                  className="relative bg-surface border border-line/80 rounded-card p-6 shadow-card hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-deep mb-1.5">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{item.desc}</p>
                  <div className="pt-3 border-t border-line/40">
                    <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep">
                      {item.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── STUDENT VOICES (STACK CARD DECK) ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex justify-center mb-3.5">
              <GoogleRatingBadge variant="pill" />
            </div>
            <h2 className="text-[clamp(32px,4.4vw,52px)] font-bold text-deep">
              Student voices.
            </h2>
            <p className="text-muted text-base sm:text-lg mt-3">
              Hear verified feedback from students who transformed their technical careers through our Mumbai batches.
            </p>
          </div>

          {effectsConfig.testimonialsStack ? (
            <div className="w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative">
              <Stack
                cards={testimonialCards}
                layout="fan"
                visible={4}
                spread={0.3}
                depth={0.4}
                radius={22}
                sendToBackOnClick={true}
                autoplay={!shouldReduceMotion}
                autoplayDelay={4500}
                pauseOnHover={true}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.slice(0, 2).map((t) => (
                <div key={t.id} className="bg-surface border border-line/80 rounded-card p-6 shadow-card flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5">
                      <GoogleStars rating={t.rating || 5} size={13} />
                      <span className="text-xs font-bold text-deep font-mono">5.0</span>
                    </div>
                    <p className="text-muted text-sm italic">“{t.quote.replace(/'/g, '’')}”</p>
                  </div>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-line/50">
                    {t.image ? (
                      <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                      <div
                        className="w-9 h-9 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0"
                        style={{ backgroundColor: t.avatarBg || '#4285F4' }}
                      >
                        {t.initials || t.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-deep leading-tight truncate">{t.name}</p>
                      <p className="text-[11px] text-muted truncate">{t.role || 'Student'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 mt-8">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors"
            >
              <span>Read more placement stories</span>
              <ArrowRight size={15} />
            </Link>
            <span className="hidden sm:inline text-line">•</span>
            <a
              href={GOOGLE_BUSINESS_INFO.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-deep hover:text-primary transition-colors group"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Read all 122+ reviews on Google</span>
              <ExternalLink size={13} className="text-muted group-hover:text-primary transition-colors" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── AWARD HIGHLIGHT ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="bg-[#101f5c] text-white rounded-band p-5 sm:p-8 lg:p-14 shadow-signature overflow-hidden relative">
            {/* Background glowing orb */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span>National Institutional Honor</span>
                </span>

                <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight">
                  India's Best Institute award, honored by Ashneer Grover.
                </h2>

                <p className="text-white/80 text-base leading-relaxed max-w-xl">
                  Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button to="/about" size="md" variant="white">
                    Read the award story
                  </Button>
                  <span className="text-xs text-white/60 font-mono">
                    Official ceremony · Delhi, India
                  </span>
                </div>
              </div>

              {/* Award Photos */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group">
                  <img
                    src="/assets/awards/ashneer-award-main.jpg"
                    alt="Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education"
                    className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group">
                  <img
                    src="/assets/awards/ashneer-award-1.jpg"
                    alt="Infodesk team on stage at national award ceremony"
                    className="w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── TOOL MARQUEE (LOGOLOOP) ─── */}
      <section className="w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 mb-4 text-center">
          <p className="text-xs uppercase font-bold tracking-wider text-muted">
            Industry tools and technologies taught in our labs
          </p>
        </div>
        {shouldReduceMotion ? (
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                <span>{tool.name}</span>
                <span className="text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded">
                  {tool.cat}
                </span>
              </span>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-full overflow-hidden py-1">
            <LogoLoop
              logos={tools}
              ariaLabel="Industry tools and technologies"
              speed={60}
              direction="left"
              gap={24}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.12}
              renderItem={(item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  <span>{item.name}</span>
                  <span className="text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded">
                    {item.cat}
                  </span>
                </span>
              )}
            />
          </div>
        )}
      </section>

      {/* ─── CLOSING BANNER (GRADIENTASCII + ELECTRICBORDER) ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="bg-deep rounded-band p-5 sm:p-8 lg:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden">
            {/* Background GradientASCII mounted lazily */}
            {effectsConfig.homeClosingBanner && !shouldReduceMotion && (
              <div className="absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden">
                <LazyMount isCanvasOrWebGL={true} fallback={<div className="w-full h-full bg-deep" />}>
                  <GradientASCII
                    shape="rise"
                    cellSize={16}
                    density={0.6}
                    glyphOpacity={0.6}
                    colors={['#10173a', '#13266f', '#2448c9', '#4a6df0']}
                    characters=" =+xX0S8#@"
                    speed={0.4}
                    mouseInteraction={false}
                    className="w-full h-full"
                  />
                </LazyMount>
              </div>
            )}

            <div className="relative z-10 space-y-6">
              <h2 className="text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight">
                Try a free demo class.
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty.
              </p>
              <div className="pt-2 flex justify-center">
                <StarBorder
                  as={Link}
                  to="/contact"
                  backgroundColor="#f6f5f1"
                  textColor="#13266f"
                  color="#4a6df0"
                  trailColor="#a5d8ff"
                  radius={999}
                  duration={5}
                  glow={0.6}
                  className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Book your demo
                </StarBorder>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
