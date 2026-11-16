import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Award,
  CheckCircle2,
  Search,
  Share2,
  Heart,
  MessageCircle,
  Bookmark,
  Mail,
  Send,
  FileDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  X,
  ExternalLink,
  MapPin,
  Phone,
  Printer,
  Palette,
  Layers,
  PenTool,
  Image as ImageIcon,
  BookOpen,
  Layout,
  Maximize2,
  Sparkle,
  Briefcase,
  Monitor,
} from 'lucide-react';

// React Bits Components
import Aurora from '../components/Aurora';
import Noise from '../components/Noise';
import ShinyText from '../components/ShinyText';
import RotatingText from '../components/RotatingText';
import ScrollFloat from '../components/ScrollFloat';
import TrueFocus from '../components/TrueFocus';
import ClickSpark from '../components/ClickSpark';
import Magnet from '../components/Magnet';
import DecryptedText from '../components/DecryptedText';
import GlareHover from '../components/GlareHover';
import CardSwap, { Card } from '../components/CardSwap';
import CurvedLoop from '../components/CurvedLoop';
import SpotlightCard from '../components/SpotlightCard';
import TiltedCard from '../components/TiltedCard';
import Folder from '../components/Folder';
import FlipCard from '../components/FlipCard';
import StarBorder from '../components/StarBorder';
import CountUp from '../components/CountUp';
import LazyMount from '../components/common/LazyMount';
import ModuleAccordion from '../components/ModuleAccordion';
import CourseOverviewCard from '../components/CourseOverviewCard';
import ClosingDemoBanner from '../components/ClosingDemoBanner';
import Button from '../components/Button';
import GoogleRatingBadge, { GoogleIcon, GoogleStars } from '../components/GoogleRatingBadge';

import { branches } from '../data/branches';
import { courses } from '../data/courses';
import { testimonials, GOOGLE_BUSINESS_INFO } from '../data/testimonials';
import { effectsConfig, prefersReducedMotion, isSaveData, isTouchDevice } from '../config/effects';

// ─── OFFICIAL 5 DESIGN TOOLS BRAND LOGOS (VECTOR SVGS) ───
export function PhotoshopLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Adobe Photoshop">
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <rect x="1" y="1" width="46" height="46" rx="9" fill="none" stroke="#31A8FF" strokeWidth="2" />
      <text x="13" y="32" fill="#31A8FF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="21">
        Ps
      </text>
    </svg>
  );
}

export function IllustratorLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Adobe Illustrator">
      <rect width="48" height="48" rx="10" fill="#330000" />
      <rect x="1" y="1" width="46" height="46" rx="9" fill="none" stroke="#FF9A00" strokeWidth="2" />
      <text x="14" y="32" fill="#FF9A00" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="21">
        Ai
      </text>
    </svg>
  );
}

export function CorelDrawLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="CorelDRAW">
      <rect width="48" height="48" rx="10" fill="#002B14" />
      <rect x="1" y="1" width="46" height="46" rx="9" fill="none" stroke="#00A651" strokeWidth="2" />
      <path
        d="M24 10C16 10 12 16 12 23C12 30 18 36 24 38C24 38 23 33 25 31C27 29 32 30 34 27C36 24 36 19 33 15C30 11 27 10 24 10Z"
        fill="#00A651"
      />
      <circle cx="20" cy="20" r="3" fill="#ffffff" />
    </svg>
  );
}

export function InDesignLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Adobe InDesign">
      <rect width="48" height="48" rx="10" fill="#33001B" />
      <rect x="1" y="1" width="46" height="46" rx="9" fill="none" stroke="#FF3366" strokeWidth="2" />
      <text x="15" y="32" fill="#FF3366" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="21">
        Id
      </text>
    </svg>
  );
}

export function CanvaLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Canva Pro">
      <defs>
        <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="10" fill="url(#canvaGrad)" />
      <path
        d="M27.5 16C23 16 19 20 19 25.5C19 30 22 32.5 25.5 32.5C28.5 32.5 31 31 32 29.5L30.5 28C29.5 29 28 30 26 30C23.5 30 21.5 28 21.5 25C21.5 20.5 24.5 18 28 18C30 18 31 19 31.5 19.5L33 17.5C31.5 16.5 29.5 16 27.5 16Z"
        fill="#ffffff"
      />
    </svg>
  );
}

// ─── 5 OFFICIAL DESIGN TOOLS WITH ACCENTS ───
const DESIGN_TOOLS_DATA = [
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    category: 'Raster Art & Manipulation',
    badge: 'Industry Standard',
    color: '#31A8FF',
    accentBg: 'rgba(49, 168, 255, 0.08)',
    borderHover: 'hover:border-[#31A8FF]/60',
    icon: PhotoshopLogo,
    focus: 'Photo retouching, image restoration, blending modes, color grading & animated GIF ads.',
    deliverables: ['Skin Retouching', 'Double Exposure', 'GIF Ads', 'Product Mockups'],
  },
  {
    id: 'illustrator',
    name: 'Adobe Illustrator',
    category: 'Vector Graphics & Branding',
    badge: 'Precision Vector',
    color: '#FF9A00',
    accentBg: 'rgba(255, 154, 0, 0.08)',
    borderHover: 'hover:border-[#FF9A00]/60',
    icon: IllustratorLogo,
    focus: 'Pen tool mastery, logo design, vector illustrations, typography, icon systems & brand guides.',
    deliverables: ['Vector Logos', 'Mascot Art', 'Brand Guidelines', 'Scalable Icons'],
  },
  {
    id: 'coreldraw',
    name: 'CorelDRAW Suite',
    category: 'Commercial Print & Signage',
    badge: 'Print Production',
    color: '#00A651',
    accentBg: 'rgba(0, 166, 81, 0.08)',
    borderHover: 'hover:border-[#00A651]/60',
    icon: CorelDrawLogo,
    focus: 'Commercial visiting cards, hoardings, newspaper layouts, wedding cards & packaging boxes.',
    deliverables: ['Visiting Cards', 'Hoardings & Banners', 'Brochures', 'CMYK Pre-Press'],
  },
  {
    id: 'indesign',
    name: 'Adobe InDesign',
    category: 'Multi-Page Publication',
    badge: 'Editorial Layout',
    color: '#FF3366',
    accentBg: 'rgba(255, 51, 102, 0.08)',
    borderHover: 'hover:border-[#FF3366]/60',
    icon: InDesignLogo,
    focus: 'Master pages, multi-column grids, book typography, magazine spreads & print-ready press PDFs.',
    deliverables: ['Magazine Layouts', 'Annual Reports', 'Catalogs', 'E-Books'],
  },
  {
    id: 'canva',
    name: 'Canva Pro',
    category: 'Rapid Social & AI Design',
    badge: 'Speed & Workflow',
    color: '#00C4CC',
    accentBg: 'rgba(0, 196, 204, 0.08)',
    borderHover: 'hover:border-[#00C4CC]/60',
    icon: CanvaLogo,
    focus: 'Commercial social media templates, Magic Studio AI tools, fast client mockups & brand kits.',
    deliverables: ['Social Kits', 'Event Posters', 'Quick Pitch Decks', 'Carousel Posts'],
  },
];

// ─── 4 COMMERCIAL DESIGN DISCIPLINES (BROCHURE PAGE 14) ───
const DESIGN_PILLARS = [
  {
    id: 'branding',
    title: 'Brand Identity & Corporate Design',
    subtitle: 'From conceptual sketches to executive brand guidelines.',
    icon: Palette,
    accent: '#ec4899', // Magenta
    bgGlow: 'from-pink-500/10 to-transparent',
    topics: [
      'Memorable logo design & icon mark creation',
      'Corporate stationery: Visiting cards, letterheads & envelopes',
      'Typography pairing rules & optical spacing',
      'Color psychology, Pantone swatches & brand style guides',
    ],
  },
  {
    id: 'print',
    title: 'Commercial Print & Editorial Layout',
    subtitle: 'Multi-page editorial spreads, magazines, books and newspapers.',
    icon: BookOpen,
    accent: '#3b82f6', // Electric Blue
    bgGlow: 'from-blue-500/10 to-transparent',
    topics: [
      'Multi-fold brochures, flyers & promotional pamphlets',
      'High-fashion magazine covers & catalog layouts',
      'Newspaper column grids, leading & paragraph styles',
      'Bleed, slug, trim marks & CMYK color separation',
    ],
  },
  {
    id: 'outdoor',
    title: 'Outdoor Advertising & Large-Format Signage',
    subtitle: 'High-impact hoardings, billboards, and retail displays.',
    icon: Maximize2,
    accent: '#f59e0b', // Amber
    bgGlow: 'from-amber-500/10 to-transparent',
    topics: [
      'Highway hoardings & building wrap vector graphics',
      'Retail storefront banners & window display graphics',
      'Exhibition backdrops, roll-up standees & kiosk signage',
      'Resolution calculation (DPI/PPI) for giant print scales',
    ],
  },
  {
    id: 'digital',
    title: 'Digital Marketing & Social Media Creatives',
    subtitle: 'High-converting ad graphics, GIF banners & carousels.',
    icon: Sparkles,
    accent: '#8b5cf6', // Violet
    bgGlow: 'from-purple-500/10 to-transparent',
    topics: [
      'High-CTR Instagram & Facebook sponsored ad creatives',
      'Multi-slide educational carousels with visual hooks',
      'Animated GIF web banners created on Photoshop timeline',
      'YouTube thumbnail architecture that drives click-throughs',
    ],
  },
];

// ─── 4 BROCHURE MODULES (SOURCE: BROCHURE PAGE 14) ───
const GRAPHIC_DESIGN_MODULES = [
  {
    name: 'Module 1: CorelDRAW & Commercial Vector Art',
    topics: [
      'Interface navigation, shapes, bezier curve drawing & artistic media tools',
      'Logo designing, visiting cards, invitation cards, wedding cards & stationery suites',
      'Promotional flyers, typography styling, event posters & cover page design',
      'Commercial banners, large-format hoardings, pamphlets & multi-fold brochures',
      'Newspaper layout designing, letterheads, books effects & color separation',
    ],
  },
  {
    name: 'Module 2: Adobe Photoshop & Digital Image Manipulation',
    topics: [
      'Workspace navigation, layers, layer masks, adjustment layers & blending modes',
      'High-end portrait photo retouching, frequency separation & blemish correction',
      'Digital art composition, surreal photomanipulation & creative background removal',
      'Scanning, resolution optimization, vector-bitmap workflows & color grading',
      'Creating animated GIF display ads & timeline keyframe animations in Photoshop',
    ],
  },
  {
    name: 'Module 3: Adobe Illustrator & InDesign Publication Design',
    topics: [
      'Pen tool precision, vector geometry, pathfinder, appearance panels & gradient mesh',
      'Scalable brand identity marks, vector infographics, caricatures & icon systems',
      'Adobe InDesign master pages, parent-child page grids, placeholder frames & typography',
      'Multi-page editorial layout: high-fashion magazine covers, booklets & product catalogs',
      'Pre-press verification, bleed/slug setup, packaging die-lines & CMYK press PDF export',
    ],
  },
  {
    name: 'Module 4: Canva Pro, AI Design & Commercial Portfolio Capstone',
    topics: [
      'Canva Pro workflow: Rapid social media design, brand kits & commercial templates',
      'Magic Studio AI generative tools: Generative expand, erase, fill & vector conversion',
      'Product design, fashion graphic workflows & multi-channel campaign collateral',
      'Assembling an executive Behance & Dribbble graphic design portfolio with 14+ projects',
      'Client presentation mastery, freelance project pricing, contract terms & agency interview prep',
    ],
  },
];

// ─── REAL STUDENT DESIGN PORTFOLIO SHOWCASE ───
const PORTFOLIO_PROJECTS = [
  {
    title: 'Aura Botanics Luxury Identity',
    category: 'Brand Identity',
    tools: 'Illustrator & CorelDRAW',
    accent: '#10b981',
    description: 'Complete brand guidelines featuring vector icon mark, Pantone color system, luxury business cards with gold foil accent, and branded letterheads.',
  },
  {
    title: 'Vogue Haute Couture Magazine Spread',
    category: 'Editorial Layout',
    tools: 'Photoshop & InDesign',
    accent: '#ec4899',
    description: 'Multi-page editorial layout with custom 12-column grid, retouched portrait cover, sophisticated drop-cap typography, and CMYK pre-press export.',
  },
  {
    title: 'Artisan Coffee Roasters Retail Packaging',
    category: 'Product & Packaging',
    tools: 'Illustrator & Photoshop',
    accent: '#f59e0b',
    description: 'Full 3D retail box packaging with accurate die-cut fold lines, nutritional label typography, spot UV varnish layer, and matte finish rendering.',
  },
  {
    title: 'Nike Velocity Animated Banner Campaign',
    category: 'Digital Ads & GIF',
    tools: 'Photoshop Timeline',
    accent: '#3b82f6',
    description: 'Suite of standard IAB animated display ads (300x250, 728x90, 160x600) built on Photoshop timeline with motion-blur transitions and dynamic CTA buttons.',
  },
  {
    title: 'Metro Grand Expressway Hoarding',
    category: 'Outdoor Advertising',
    tools: 'CorelDRAW Suite',
    accent: '#8b5cf6',
    description: '40ft x 20ft highway billboard vector artwork engineered with high-impact typography, bleed margins, and ultra-high-resolution print readiness.',
  },
  {
    title: 'FitPulse 30-Day Social Launch Kit',
    category: 'Social Media & Canva',
    tools: 'Canva Pro & Illustrator',
    accent: '#06b6d4',
    description: 'Comprehensive 15-post Instagram launch kit with seamless carousel panoramas, story highlight icons, promotional event posters, and brand kit.',
  },
];

// ─── FAQ DATA ───
const GRAPHIC_DESIGN_FAQS = [
  {
    q: 'Do I need drawing or sketching skills to learn graphic design?',
    a: 'No prior drawing or fine-art sketching experience is required. Professional graphic design focuses on visual communication, layout hierarchy, typography, and mastering industry software tools (Photoshop, Illustrator, CorelDRAW, InDesign, Canva). Our mentors guide you from zero.',
  },
  {
    q: 'What career opportunities are available after completing this 4-month course?',
    a: 'Graduates enter roles such as Graphic Designer, Brand Identity Designer, DTP (Desktop Publishing) Operator, Social Media Creative Designer, Packaging Designer, and Freelance Visualizer with agencies, e-commerce brands, print presses, and digital studios across Mumbai.',
  },
  {
    q: 'Will I learn both print design (CMYK) and digital screen design (RGB)?',
    a: 'Yes, absolutely. The curriculum gives equal rigor to commercial print (CorelDRAW and InDesign for visiting cards, brochures, magazines, bleed margins, spot UV, and CMYK color separation) and digital screen design (Photoshop and Illustrator for social media ads, animated GIFs, and web graphics).',
  },
  {
    q: 'Do you assist with building a design portfolio and job placements?',
    a: 'Yes! Throughout the 4 months, you will create 14+ commercial design projects. In Module 4, you will assemble an industry-ready portfolio on Behance and Dribbble. Infodesk provides 100% placement assistance and mock interview preparation at our Mumbai centers.',
  },
  {
    q: 'Can I practice in the computer lab outside of lecture hours?',
    a: 'Yes. All 4 Mumbai branches (Goregaon West, Jogeshwari West, Behram Baug, Motilal Nagar) offer dedicated practice computer lab hours before and after your scheduled class timings at no additional charge.',
  },
];

const DESIGN_MARQUEE_ITEMS = [
  'ADOBE PHOTOSHOP',
  'ADOBE ILLUSTRATOR',
  'CORELDRAW',
  'ADOBE INDESIGN',
  'CANVA PRO',
  'BRAND IDENTITY',
  'LOGO DESIGN',
  'EDITORIAL LAYOUT',
  'CMYK PRE-PRESS',
  'PACKAGING DESIGN',
  'ANIMATED GIF ADS',
  'TYPOGRAPHY',
];

export default function GraphicDesignDetail({ course: propCourse }) {
  const navigate = useNavigate();

  // Find course data from courses.js or use props
  const course = useMemo(() => {
    return propCourse || courses.find((c) => c.slug === 'graphic-design') || {
      title: 'Graphic Design',
      category: 'Design and video',
      duration: '4 months',
      level: 'Short course',
      summary: 'Professional design for branding, print, and social media using Corel Draw, Illustrator, Photoshop, InDesign, and Canva.',
    };
  }, [propCourse]);

  // Related courses (Web Design and ADDM)
  const relatedCourses = useMemo(() => {
    return courses.filter((c) => ['web-design', 'addm'].includes(c.slug));
  }, []);

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Certificate Lightbox Modal State & Active Tab
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [activeCertTab, setActiveCertTab] = useState(0);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Accessible Escape listener and body scroll lock for certificate modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isCertModalOpen) {
        setIsCertModalOpen(false);
      }
    };
    if (isCertModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isCertModalOpen]);

  // Module toggle handler
  const handleModuleToggle = (idx) => {
    setOpenModuleIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Certificate items for React Bits Folder
  const certificateFolderItems = useMemo(
    () => [
      {
        id: 'cert-1',
        title: 'ISO 9001:2015 Diploma',
        desc: 'Govt. Recognized Certification',
        color: '#13266f',
        onClick: () => {
          setActiveCertTab(0);
          setIsCertModalOpen(true);
        },
      },
      {
        id: 'cert-2',
        title: 'Practical Lab Credentials',
        desc: 'Verified Project Training',
        color: '#4a6df0',
        onClick: () => {
          setActiveCertTab(1);
          setIsCertModalOpen(true);
        },
      },
      {
        id: 'cert-3',
        title: 'Behance Portfolio Scorecard',
        desc: '14+ Commercial Projects',
        color: '#2448c9',
        onClick: () => {
          setActiveCertTab(2);
          setIsCertModalOpen(true);
        },
      },
    ],
    []
  );

  return (
    <div className="relative w-full bg-[#f6f5f1] text-ink overflow-x-clip selection:bg-primary/20 selection:text-deep">
      {/* ─── 1. HERO SECTION (STUDIO CANVAS VIBE WITH AURORA, GLOW & NOISE) ─── */}
      <section className="relative min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-between pt-10 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-br from-[#0e1638] via-[#09102c] to-[#040817] text-white overflow-hidden">
        {/* Subtle Noise Texture */}
        {effectsConfig.graphicDesignNoise && (
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-soft-light z-0">
            <Noise patternSize={250} patternScaleType="repeat" patternAlpha={15} />
          </div>
        )}

        {/* React Bits Aurora Ambient Shader Background */}
        {effectsConfig.graphicDesignAurora && (
          <div className="absolute inset-0 pointer-events-none opacity-45 mix-blend-screen overflow-hidden z-0">
            <Aurora
              colorStops={['#ec4899', '#3b82f6', '#06b6d4', '#8b5cf6']}
              blend={0.65}
              amplitude={1.1}
              speed={0.7}
              height={0.55}
              glow={0.6}
              brightness={0.8}
            />
          </div>
        )}

        {/* Ambient Creative Lighting (Magenta & Cyan Studio Orbs) */}
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#ec4899]/15 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-[#06b6d4]/15 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 left-1/3 w-[360px] h-[360px] rounded-full bg-[#8b5cf6]/15 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-content mx-auto px-4 sm:px-6 my-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-white/40" />
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-white/40" />
              </li>
              <li>
                <Link to="/courses?category=Design+and+video" className="hover:text-white transition-colors">
                  Design and video
                </Link>
              </li>
              <li>
                <ChevronRight size={12} className="text-white/40" />
              </li>
              <li className="text-white font-semibold" aria-current="page">
                Graphic Design
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headlines, Highlights & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15 backdrop-blur-md">
                  <Palette size={12} className="text-pink-400" />
                  {effectsConfig.graphicDesignShinyText ? (
                    <ShinyText text="4-Month Flagship Design Program" speed={2.8} className="text-white font-semibold" />
                  ) : (
                    <span>4-Month Flagship Design Program</span>
                  )}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  <ShieldCheck size={13} />
                  <span>Govt. Recognized &amp; ISO 9001:2015</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  <span>Design &amp; Visual Arts</span>
                </span>
              </div>

              {/* Course Main Title with Typography Treatment & RotatingText */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-heading">
                  Graphic Design.
                </h1>

                {effectsConfig.graphicDesignRotatingText && (
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-base sm:text-lg font-bold text-white/90">
                    <span className="text-white/60">Learn to create</span>
                    <RotatingText
                      texts={[
                        'Brand Identity Systems',
                        'Vector Logos & Icons',
                        'Editorial Magazine Spreads',
                        'Highway Advertising Billboards',
                        'High-CTR Social Ad Creatives',
                        'Retail Box Packaging',
                      ]}
                      mainClassName="px-2.5 py-0.5 rounded-lg bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold inline-block"
                      staggerDuration={0.02}
                      rotationInterval={2600}
                      splitBy="words"
                    />
                  </div>
                )}

                <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-2xl">
                  Master branding, advertising art, publication layout, and social media creatives using Photoshop, Illustrator, CorelDRAW, InDesign, and Canva Pro.
                </p>
              </div>

              {/* 4-Stat Pills Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {effectsConfig.graphicDesignCountUp ? (
                      <CountUp to={4} duration={1.6} />
                    ) : (
                      '4'
                    )}
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">Months Training</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {effectsConfig.graphicDesignCountUp ? (
                      <CountUp to={5} duration={1.8} />
                    ) : (
                      '5'
                    )}
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">Industry Tools</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {effectsConfig.graphicDesignCountUp ? (
                      <CountUp to={14} duration={2.0} />
                    ) : (
                      '14+'
                    )}
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">Portfolio Projects</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold text-white font-heading">
                    {effectsConfig.graphicDesignCountUp ? (
                      <CountUp to={4} duration={1.6} />
                    ) : (
                      '4'
                    )}
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">Mumbai Centers</div>
                </div>
              </div>

              {/* Primary Call-to-Action Buttons with ClickSpark & Magnet */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <ClickSpark
                  sparkColor={['#ec4899', '#38bdf8', '#facc15', '#a855f7']}
                  sparkCount={8}
                  sparkRadius={20}
                >
                  <Magnet padding={50} magnetStrength={2} disabled={!effectsConfig.graphicDesignMagnet}>
                    <Button
                      to="/contact"
                      size="lg"
                      variant="primary"
                      className="rounded-full shadow-lg hover:shadow-xl font-bold bg-[#4a6df0] hover:bg-[#3b5bd8] text-white px-7 py-3.5"
                      spark={false}
                    >
                      <span>Book a free demo class</span>
                      <ArrowRight size={16} />
                    </Button>
                  </Magnet>
                </ClickSpark>

                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm"
                >
                  <FileDown size={16} />
                  <span>Download brochure</span>
                </a>
              </div>

              {/* Direct Mentor In-Person Note */}
              <div className="flex items-center gap-3 pt-2 text-xs text-white/60">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Small in-person batches · 100% practical lab practice · Mentor feedback on every design</span>
              </div>
            </div>

            {/* Right Column: React Bits CardSwap Design Showcase (5 cols) */}
            <div className="lg:col-span-5 flex justify-center w-full">
              {effectsConfig.graphicDesignCardSwap && !prefersReducedMotion ? (
                <div className="relative w-full max-w-[420px] h-[360px] sm:h-[400px] flex items-center justify-center">
                  <CardSwap
                    width={360}
                    height={300}
                    cardRadius={22}
                    visibleCards={4}
                    theme="dark"
                    autoplay={true}
                    pauseOnHover={true}
                    delay={3200}
                    className="w-full h-full"
                  >
                    {PORTFOLIO_PROJECTS.slice(0, 5).map((proj) => (
                      <Card key={proj.title}>
                        <div className="w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-[#101b44] text-white rounded-[22px] border border-white/15 shadow-2xl select-none">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span
                                className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                                style={{
                                  color: proj.accent,
                                  borderColor: `${proj.accent}40`,
                                  backgroundColor: `${proj.accent}15`,
                                }}
                              >
                                {proj.category}
                              </span>
                              <span className="text-[11px] font-mono text-white/50">{proj.tools}</span>
                            </div>

                            <h3 className="text-lg font-bold text-white font-heading leading-snug">
                              {proj.title}
                            </h3>

                            <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                              {proj.description}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                            <span className="flex items-center gap-1.5">
                              <Sparkle size={12} style={{ color: proj.accent }} />
                              <span>Live Lab Project</span>
                            </span>
                            <span className="font-mono text-[11px] text-white/40">Portfolio Ready</span>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </CardSwap>
                </div>
              ) : (
                /* Fallback static showcase card for reduced motion */
                <div className="w-full max-w-[420px] p-6 bg-[#101b44] rounded-[22px] border border-white/15 text-white space-y-4 shadow-xl">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Live Lab Deliverables
                  </span>
                  <h3 className="text-xl font-bold font-heading">Complete Agency-Ready Portfolio</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Build 14+ commercial design projects including brand identity guidelines, high-fashion magazine spreads, animated GIF banner ads, highway hoardings, and packaging mockups.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CREATIVE SKILLS STRIP (CURVEDLOOP MARQUEE) ─── */}
      <section className="bg-[#101b44] border-y border-white/10 py-3 overflow-hidden relative">
        {!prefersReducedMotion && effectsConfig.graphicDesignCurvedLoop ? (
          <div className="w-full h-12 flex items-center justify-center">
            <CurvedLoop
              marqueeText={DESIGN_MARQUEE_ITEMS.join(' · ')}
              speed={1.4}
              shape="line"
              fontSize={24}
              fontWeight={700}
              color="#ffffff"
              separator="·"
              separatorColor="#ec4899"
              interactive={false}
              className="tracking-wider font-heading select-none opacity-90"
            />
          </div>
        ) : (
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-2 py-1">
            {DESIGN_MARQUEE_ITEMS.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/90 border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ─── 3. THE 5 OFFICIAL DESIGN SOFTWARE SUITES (INTERACTIVE SPOTLIGHT GRID) ─── */}
      <section className="py-14 sm:py-20 max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold border border-line">
            <Monitor size={13} />
            <span>5 Industry Tool Stacks</span>
          </div>

          {effectsConfig.graphicDesignScrollFloat ? (
            <ScrollFloat
              containerClassName="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading"
              animationDuration={0.8}
              ease="back.out(1.4)"
              scrollStart="top 85%"
              scrollEnd="top 55%"
              splitBy="words"
            >
              Software you will master in the lab.
            </ScrollFloat>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Software you will master in the lab.
            </h2>
          )}

          {effectsConfig.graphicDesignDecryptedText && (
            <div className="pt-1 flex justify-center">
              <DecryptedText
                text="DUAL-TRACK LAB TRAINING: CMYK PRINT & RGB DIGITAL SCREEN"
                animateOn="view"
                speed={40}
                maxIterations={10}
                className="text-xs font-mono font-bold tracking-wider text-primary"
                scrambleColor="#ec4899"
              />
            </div>
          )}

          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Hands-on mentor guidance across the world's most in-demand design and desktop publishing applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_TOOLS_DATA.map((tool) => {
            const Icon = tool.icon;
            return effectsConfig.graphicDesignSpotlight ? (
              <SpotlightCard
                key={tool.id}
                theme="light"
                spotlightColor={tool.accentBg}
                className="p-6 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between transition-all hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className="w-10 h-10 shrink-0" />
                    <span
                      className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                      style={{
                        color: tool.color,
                        borderColor: `${tool.color}40`,
                        backgroundColor: tool.accentBg,
                      }}
                    >
                      {tool.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-deep font-heading">{tool.name}</h3>
                    <p className="text-xs font-semibold text-muted mt-0.5">{tool.category}</p>
                  </div>

                  <p className="text-xs text-ink/80 leading-relaxed">{tool.focus}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-line/60">
                  <div className="flex flex-wrap gap-1.5">
                    {tool.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-soft/80 border border-line/50 text-deep font-medium"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ) : (
              <div
                key={tool.id}
                className="p-6 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Icon className="w-10 h-10 shrink-0" />
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-soft text-primary">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-deep font-heading">{tool.name}</h3>
                  <p className="text-xs text-ink/80 leading-relaxed">{tool.focus}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 4. FOUR COMMERCIAL DESIGN DISCIPLINES (BROCHURE PAGE 14) + TRUEFOCUS ─── */}
      <section className="py-14 sm:py-20 bg-soft/40 border-y border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold border border-line shadow-2xs">
              <Layout size={13} />
              <span>Commercial Disciplines</span>
            </div>

            {effectsConfig.graphicDesignScrollFloat ? (
              <ScrollFloat
                containerClassName="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading"
                animationDuration={0.8}
                ease="back.out(1.4)"
                scrollStart="top 85%"
                scrollEnd="top 55%"
                splitBy="words"
              >
                Four pillars of commercial design.
              </ScrollFloat>
            ) : (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
                Four pillars of commercial design.
              </h2>
            )}

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Everything taught in this 4-month course directly maps to real-world agency briefs and client commissions.
            </p>
          </div>

          {/* React Bits TrueFocus: Core Design Competencies */}
          {effectsConfig.graphicDesignTrueFocus && (
            <div className="py-3 mb-8 flex justify-center overflow-x-auto select-none">
              <TrueFocus
                sentence="BRAND IDENTITY • VECTOR ART • EDITORIAL SPREADS • PACKAGING • SOCIAL ADS"
                separator="•"
                borderColor="#ec4899"
                glowColor="rgba(236, 72, 153, 0.4)"
                animationDuration={0.5}
                pauseBetweenAnimations={1.6}
                borderWidth={2}
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {DESIGN_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="p-7 sm:p-8 rounded-[24px] bg-white border border-line/80 shadow-card flex flex-col justify-between space-y-5 transition-all hover:shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${pillar.accent}15`, color: pillar.accent }}
                      >
                        <PillarIcon size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-deep font-heading">{pillar.title}</h3>
                        <p className="text-xs text-muted mt-0.5">{pillar.subtitle}</p>
                      </div>
                    </div>

                    <div className="pt-2 space-y-2.5">
                      {pillar.topics.map((top, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2.5 text-xs text-ink/90 leading-relaxed">
                          <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{top}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4.5 COMMERCIAL PORTFOLIO PROJECTS (INTERACTIVE 3D TILTEDCARDS) ─── */}
      <section className="py-14 sm:py-20 max-w-content mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold border border-line">
            <Sparkles size={13} className="text-pink-500" />
            <span>Real Commercial Deliverables</span>
          </div>

          {effectsConfig.graphicDesignScrollFloat ? (
            <ScrollFloat
              containerClassName="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading"
              animationDuration={0.8}
              ease="back.out(1.4)"
              scrollStart="top 85%"
              scrollEnd="top 55%"
              splitBy="words"
            >
              Commercial projects you will design.
            </ScrollFloat>
          ) : (
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Commercial projects you will design.
            </h2>
          )}

          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Move your mouse or tilt your screen over each project to inspect 3D layers, lighting, and production specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.map((proj) => {
            return (
              <div key={proj.title} className="h-full">
                {effectsConfig.graphicDesignTiltedCard ? (
                  <TiltedCard
                    containerHeight="290px"
                    containerWidth="100%"
                    imageHeight="290px"
                    imageWidth="100%"
                    rotateAmplitude={11}
                    scaleOnHover={1.02}
                    showTooltip={false}
                    radius={22}
                    glare={0.35}
                    className="w-full h-full"
                  >
                    <div className="w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-white border border-line/80 rounded-[22px] shadow-card hover:shadow-xl transition-shadow select-none">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                            style={{
                              color: proj.accent,
                              borderColor: `${proj.accent}40`,
                              backgroundColor: `${proj.accent}15`,
                            }}
                          >
                            {proj.category}
                          </span>
                          <span className="text-[11px] font-mono text-muted">{proj.tools}</span>
                        </div>

                        <h3 className="text-lg font-bold text-deep font-heading leading-snug">
                          {proj.title}
                        </h3>

                        <p className="text-xs text-ink/80 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                        <span className="flex items-center gap-1.5 font-semibold" style={{ color: proj.accent }}>
                          <Sparkle size={12} />
                          <span>Student Deliverable</span>
                        </span>
                        <span className="font-mono text-[11px]">Behance Ready</span>
                      </div>
                    </div>
                  </TiltedCard>
                ) : (
                  <div className="w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-white border border-line/80 rounded-[22px] shadow-card hover:shadow-lg transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                          style={{
                            color: proj.accent,
                            borderColor: `${proj.accent}40`,
                            backgroundColor: `${proj.accent}15`,
                          }}
                        >
                          {proj.category}
                        </span>
                        <span className="text-[11px] font-mono text-muted">{proj.tools}</span>
                      </div>

                      <h3 className="text-lg font-bold text-deep font-heading leading-snug">
                        {proj.title}
                      </h3>

                      <p className="text-xs text-ink/80 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                      <span className="flex items-center gap-1.5 font-semibold" style={{ color: proj.accent }}>
                        <Sparkle size={12} />
                        <span>Student Deliverable</span>
                      </span>
                      <span className="font-mono text-[11px]">Behance Ready</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 5. DETAILED SYLLABUS (MODULEACCORDION + STICKY OVERVIEW CARD + FOLDER) ─── */}
      <section id="syllabus" className="py-14 sm:py-20 bg-surface scroll-mt-[88px] content-auto-lg">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: 4 Modules Accordion (col-span-8) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold border border-line">
                  <Layers size={13} />
                  <span>Curriculum Breakdown</span>
                </div>

                {effectsConfig.graphicDesignScrollFloat ? (
                  <ScrollFloat
                    containerClassName="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading"
                    animationDuration={0.8}
                    ease="back.out(1.4)"
                    scrollStart="top 85%"
                    scrollEnd="top 55%"
                    splitBy="words"
                  >
                    Detailed 4-month syllabus.
                  </ScrollFloat>
                ) : (
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
                    Detailed 4-month syllabus.
                  </h2>
                )}

                <p className="text-muted text-sm leading-relaxed">
                  Topic breakdown directly from the official Infodesk brochure.
                </p>
              </div>

              {/* ModuleAccordion */}
              <ModuleAccordion
                modules={GRAPHIC_DESIGN_MODULES}
                openIndices={openModuleIndices}
                onToggle={handleModuleToggle}
                useSpotlight={false}
              />
            </div>

            {/* Right Column: Sticky Course Overview Card & Certificate Credentials (col-span-4) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <CourseOverviewCard
                course={course}
                whatsappMessage={encodeURIComponent(
                  `Hello Infodesk Computer Education, I am interested in the Graphic Design (4 months) course. Could you share batch timings, fee details, and book a free demo session?`
                )}
                brochurePath="/assets/Infodesk_Computer_Education.pdf"
              />

              {/* React Bits Folder: Interactive Course Credentials & Diploma */}
              <div className="p-4 sm:p-5 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col items-center text-center space-y-4">
                <div className="w-full flex items-center justify-between text-left">
                  <div>
                    <h4 className="text-sm font-bold text-deep font-heading">
                      Graphic Design Certificate
                    </h4>
                    <p className="text-[11px] text-muted">
                      ISO 9001:2015 certified qualification
                    </p>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-soft text-primary border border-line/50">
                    Govt. Recognized
                  </span>
                </div>

                <div className="py-2 flex justify-center w-full min-h-[175px] items-center overflow-visible">
                  <Folder
                    label="Design Diploma"
                    color="#ec4899"
                    paperColor="#ffffff"
                    theme="light"
                    size={0.82}
                    items={certificateFolderItems}
                  />
                </div>

                <ClickSpark
                  sparkColor={['#ec4899', '#38bdf8', '#facc15']}
                  sparkCount={7}
                  sparkRadius={18}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCertTab(0);
                      setIsCertModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-soft hover:bg-soft/80 text-primary border border-primary/20 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Award size={14} />
                    <span>Preview official certificate</span>
                  </button>
                </ClickSpark>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. STUDENT STORIES & VERIFIED GOOGLE REVIEWS ─── */}
      <section id="stories" className="py-14 sm:py-20 bg-soft/30 border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="flex justify-center mb-1">
              <GoogleRatingBadge variant="pill" />
            </div>

            {effectsConfig.graphicDesignScrollFloat ? (
              <ScrollFloat
                containerClassName="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading"
                animationDuration={0.8}
                ease="back.out(1.4)"
                scrollStart="top 85%"
                scrollEnd="top 55%"
                splitBy="words"
              >
                Student stories.
              </ScrollFloat>
            ) : (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
                Student stories.
              </h2>
            )}

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              What our students say about hands-on learning at Infodesk Computer Education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-content mx-auto">
            {testimonials.slice(0, 3).map((t, idx) => {
              const isGoogle = t.source === 'Google Review';
              return (
                <div
                  key={t.id || idx}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-500">
                        <GoogleStars rating={t.rating || 5} size={14} />
                      </div>
                      {isGoogle ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted bg-soft px-2 py-0.5 rounded-full border border-line">
                          <GoogleIcon className="w-3 h-3" />
                          <span>Google Review</span>
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Verified Alum
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-ink/90 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-line/60 flex items-center justify-between mt-4">
                    <div>
                      <div className="text-sm font-bold text-deep font-heading">{t.name}</div>
                      <div className="text-[11px] text-muted">{t.role} · {t.branch}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 7. IN-PERSON MUMBAI TRAINING CENTERS ─── */}
      <section className="py-14 sm:py-20 bg-surface border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold border border-line">
              <MapPin size={13} />
              <span>4 Mumbai Centers</span>
            </div>

            {effectsConfig.graphicDesignScrollFloat ? (
              <ScrollFloat
                containerClassName="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading"
                animationDuration={0.8}
                ease="back.out(1.4)"
                scrollStart="top 85%"
                scrollEnd="top 55%"
                splitBy="words"
              >
                Train in-person across Mumbai.
              </ScrollFloat>
            ) : (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
                Train in-person across Mumbai.
              </h2>
            )}

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Visit our air-conditioned computer labs for dedicated mentor guidance and hands-on design practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b) => (
              <div
                key={b.name}
                className="p-6 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col justify-between space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-deep font-heading">{b.name}</h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-3">{b.address}</p>
                </div>

                <div className="pt-3 border-t border-line/60 space-y-2">
                  <a
                    href={`tel:${b.phone}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                  >
                    <Phone size={12} />
                    <span>{b.phone}</span>
                  </a>
                  <Button
                    to="/contact"
                    size="sm"
                    variant="outline"
                    className="w-full text-xs font-bold rounded-xl py-2"
                  >
                    Book at this center
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS (SPOTLIGHTCARD) ─── */}
      <section id="faqs" className="py-14 sm:py-20 bg-soft/30 border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            {effectsConfig.graphicDesignScrollFloat ? (
              <ScrollFloat
                containerClassName="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading"
                animationDuration={0.8}
                ease="back.out(1.4)"
                scrollStart="top 85%"
                scrollEnd="top 55%"
                splitBy="words"
              >
                Frequently asked questions.
              </ScrollFloat>
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
                Frequently asked questions.
              </h2>
            )}

            <p className="text-muted text-sm leading-relaxed">
              Key details about the 4-month Graphic Design course, lab timings, and software.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {GRAPHIC_DESIGN_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <SpotlightCard
                  key={idx}
                  theme="light"
                  spotlightColor="rgba(236, 72, 153, 0.12)"
                  className="rounded-[20px] bg-white border border-line/80 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="text-sm sm:text-base font-bold text-deep font-heading">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-primary text-white' : 'bg-soft text-muted'
                      }`}
                    >
                      <ChevronDown size={15} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: 'easeOut' }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink/80 leading-relaxed border-t border-line/50 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. RELATED COURSES AS FLIPCARD (DATA SCIENCE PAGE COMPLIANT) ─── */}
      <section id="related" className="py-12 sm:py-20 bg-surface border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            {effectsConfig.graphicDesignScrollFloat ? (
              <ScrollFloat
                containerClassName="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading"
                animationDuration={0.8}
                ease="back.out(1.4)"
                scrollStart="top 85%"
                scrollEnd="top 55%"
                splitBy="words"
              >
                Related courses in design &amp; marketing.
              </ScrollFloat>
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
                Related courses in design &amp; marketing.
              </h2>
            )}

            <p className="text-muted text-sm mt-1">
              Tap or click any card to flip between program highlights and syllabus previews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {relatedCourses.map((rel) => {
              const frontContent = (
                <div className="w-full h-full p-6 bg-surface border border-line/80 rounded-[22px] flex flex-col justify-between shadow-card">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-soft">
                        {rel.level}
                      </span>
                      <span className="text-xs font-mono text-muted">{rel.duration}</span>
                    </div>
                    <h4 className="text-xl font-bold text-deep font-heading">{rel.title}</h4>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">{rel.summary}</p>
                    {rel.tools && rel.tools.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {rel.tools.slice(0, 5).map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-0.5 rounded-full bg-soft/80 border border-line/60 text-[11px] font-medium text-deep"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="pt-3 border-t border-line/50 flex items-center justify-between text-xs text-primary font-bold">
                    <span>Tap to see syllabus topics</span>
                    <span>Flip &rarr;</span>
                  </div>
                </div>
              );

              const backContent = (
                <div className="w-full h-full p-6 bg-[#0b1a52] text-white border border-[#4a6df0]/40 rounded-[22px] flex flex-col justify-between shadow-card">
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-[#a5d8ff] font-bold block">
                      Tools &amp; Curriculum
                    </span>
                    <h4 className="text-lg font-bold text-white font-heading">{rel.title}</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {rel.tools?.slice(0, 8).map((tool) => (
                        <span key={tool} className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-medium text-[#a5d8ff]">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      to={`/courses/${rel.slug}`}
                      className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold hover:bg-bright transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View full course &rarr;
                    </Link>
                    <span className="text-[11px] text-white/60">Flip back &larr;</span>
                  </div>
                </div>
              );

              return (
                <div key={rel.slug} className="h-[300px]">
                  <FlipCard
                    front={frontContent}
                    back={backContent}
                    width="100%"
                    height={300}
                    radius={22}
                    tilt={false}
                    glare={false}
                    shadow={false}
                    hoverScale={1}
                    draggable={false}
                    background="transparent"
                    className="w-full h-full rounded-[22px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus:outline-none"
                    ariaLabel={`${rel.title} course details`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. CLOSING DEMO BANNER WITH LASERFLOW IN LAZYMOUNT + STARBORDER BUTTON ─── */}
      <ClosingDemoBanner
        courseName="Graphic Design"
        duration="4 months"
        brochurePath="/assets/Infodesk_Computer_Education.pdf"
      />

      {/* ─── 11. OFFICIAL CERTIFICATE PREVIEW MODAL ─── */}
      {isCertModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Official Infodesk Certificate Preview"
        >
          <div className="relative w-full max-w-2xl bg-white rounded-[28px] shadow-2xl border border-line/80 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-line/60 bg-soft/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-deep font-heading">
                    Graphic Design Qualification
                  </h3>
                  <p className="text-[11px] text-muted">
                    ISO 9001:2015 Certified · Govt. Recognized
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCertModalOpen(false)}
                className="w-8 h-8 rounded-full bg-soft hover:bg-line/60 flex items-center justify-center text-muted hover:text-deep transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Certificate View */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div
                id="printable-certificate"
                className="relative p-6 sm:p-8 rounded-[20px] bg-gradient-to-br from-[#fdfcf9] to-[#f4f2ea] border-4 border-double border-primary/30 text-center space-y-4 shadow-inner"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-primary">
                  Infodesk Computer Education
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                  Certificate of Completion
                </h4>
                <p className="text-xs text-muted max-w-md mx-auto">
                  This certifies that the recipient has successfully completed the rigorous 4-month practical curriculum in Graphic Design &amp; Digital Publishing.
                </p>
                <div className="py-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
                  <Award size={14} />
                  <span>Adobe &amp; Corel Suite Certified</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-line/60 bg-soft/30 flex items-center justify-between">
              <span className="text-xs text-muted">Awarded upon course completion</span>
              <Button
                to="/contact"
                size="sm"
                variant="primary"
                className="rounded-full text-xs font-bold"
                onClick={() => setIsCertModalOpen(false)}
              >
                Enquire about batches
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
