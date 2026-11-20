import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Award,
  CheckCircle2,
  FileDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  X,
  ExternalLink,
  MapPin,
  Phone,
  Printer,
  PenTool,
  BookOpen,
  Package,
  Megaphone,
  Briefcase,
} from 'lucide-react';

// React Bits Components
import Aurora from '../components/Aurora';
import ShinyText from '../components/ShinyText';
import TrueFocus from '../components/TrueFocus';
import GlareHover from '../components/GlareHover';
import Stack from '../components/Stack';
import Counter from '../components/Counter';
import CurvedLoop from '../components/CurvedLoop';
import SpotlightCard from '../components/SpotlightCard';
import Folder from '../components/Folder';
import LogoLoop from '../components/LogoLoop';
import FlipCard from '../components/FlipCard';
import LazyMount from '../components/common/LazyMount';

// Roadmap Section
import ScrollRoadmap from '../components/roadmap/ScrollRoadmap';

// Shared Components matching Digital Marketing & Data Science
import ModuleAccordion from '../components/ModuleAccordion';
import CourseOverviewCard from '../components/CourseOverviewCard';
import ClosingDemoBanner from '../components/ClosingDemoBanner';

// Data Source of Truth
import { branches } from '../data/branches';
import { courses } from '../data/courses';
import { testimonials, GOOGLE_BUSINESS_INFO } from '../data/testimonials';
import GoogleRatingBadge, { GoogleIcon, GoogleStars } from '../components/GoogleRatingBadge';
import { prefersReducedMotion, isTouchDevice, isSaveData, effectsConfig } from '../config/effects';

// ─── OFFICIAL SOFTWARE LOGOS FOR LOGOLOOP ───
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

export function GenerativeAILogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Generative AI Design">
      <rect width="48" height="48" rx="10" fill="#1e1b4b" />
      <path
        d="M24 10L26.5 19.5L36 22L26.5 24.5L24 34L21.5 24.5L12 22L21.5 19.5L24 10Z"
        fill="#818cf8"
      />
      <circle cx="34" cy="14" r="2.5" fill="#c084fc" />
    </svg>
  );
}

export function PrePressLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="CMYK Pre-Press">
      <rect width="48" height="48" rx="10" fill="#0f172a" />
      <circle cx="18" cy="18" r="7" fill="#00a8e8" opacity="0.85" />
      <circle cx="30" cy="18" r="7" fill="#e8006f" opacity="0.85" />
      <circle cx="24" cy="29" r="7" fill="#ffd100" opacity="0.85" />
    </svg>
  );
}

export function PantoneLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Pantone Color Matching">
      <rect width="48" height="48" rx="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
      <rect x="4" y="4" width="40" height="26" rx="6" fill="#f43f5e" />
      <text x="8" y="39" fill="#0f172a" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="7">
        PANTONE
      </text>
    </svg>
  );
}

export function BehanceLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Behance Portfolio">
      <rect width="48" height="48" rx="10" fill="#0057ff" />
      <text x="12" y="32" fill="#ffffff" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="22">
        Bē
      </text>
    </svg>
  );
}

export function DribbbleLogo({ className = 'w-7 h-7' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-label="Dribbble Showcase">
      <rect width="48" height="48" rx="10" fill="#ea4c89" />
      <circle cx="24" cy="24" r="14" fill="none" stroke="#ffffff" strokeWidth="2.5" />
      <path
        d="M11 20C16 23 23 23 37 18M15 33C20 28 26 26 36 29M24 10C27 15 29 23 27 38"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// ─── 4 OFFICIAL MODULES (BROCHURE PAGE 14) ───
const GRAPHIC_DESIGN_MODULES = [
  {
    number: 1,
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
    number: 2,
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
    number: 3,
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
    number: 4,
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

const TOTAL_GRAPHIC_DESIGN_TOPICS = 20;

// ─── CHANNEL STRIP MARQUEE ITEMS ───
const DESIGN_MARQUEE_ITEMS = [
  'Photoshop',
  'Illustrator',
  'CorelDRAW',
  'InDesign',
  'Canva Pro',
  'Brand identity',
  'Logo design',
  'Editorial layout',
  'CMYK pre-press',
  'Packaging design',
  'Animated GIF ads',
  'Typography',
];

// ─── SOFTWARE LOGOLOOP ITEMS ───
const GRAPHIC_DESIGN_TOOLS = [
  { name: 'Adobe Photoshop', icon: <PhotoshopLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Adobe Illustrator', icon: <IllustratorLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'CorelDRAW Suite', icon: <CorelDrawLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Adobe InDesign', icon: <InDesignLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Canva Pro', icon: <CanvaLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Generative AI Design', icon: <GenerativeAILogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Pre-Press & CMYK', icon: <PrePressLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Pantone Matching', icon: <PantoneLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Behance Portfolio', icon: <BehanceLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
  { name: 'Dribbble Showcase', icon: <DribbbleLogo className="w-9 h-9 sm:w-10 sm:h-10" /> },
];

// ─── FREQUENTLY ASKED QUESTIONS ───
const GRAPHIC_DESIGN_FAQS = [
  {
    q: 'Do I need drawing skills or an art background to learn Graphic Design?',
    a: 'No prior sketching or drawing skills are required. The course starts from foundational design principles, color theory, and typography, teaching you industry tools like CorelDRAW, Illustrator, Photoshop, and InDesign step-by-step with practical lab assignments.',
  },
  {
    q: 'Which software suites are taught in this 4-month program?',
    a: 'You will master 5 industry-standard tools: Adobe Photoshop (raster editing & manipulation), Adobe Illustrator (vector illustration & logos), CorelDRAW (commercial print & hoardings), Adobe InDesign (multi-page publication layout), and Canva Pro with Generative AI tools.',
  },
  {
    q: 'How does in-person practical lab training work across Mumbai centers?',
    a: 'Classes are conducted 100% practically in modern computer labs at our 4 Mumbai centers (Goregaon West, Behram Baug, Jogeshwari West, and Motilal Nagar). Each student works on an individual workstation with mentor guidance on every project.',
  },
  {
    q: 'Will I build a design portfolio for job interviews and freelancing?',
    a: 'Yes. By graduation, you will build 14+ portfolio pieces—including luxury brand guidelines, vector logos, 16-page editorial magazine spreads, commercial packaging die-lines, highway hoardings, and animated GIF display ads—ready for agency interviews and freelance clients.',
  },
  {
    q: 'Are weekend or flexible batch timings available for working professionals?',
    a: 'Yes. We offer morning, afternoon, evening, and dedicated Sunday weekend batches. Additionally, all enrolled students receive extra practice lab hours with dedicated mentor support to ensure complete schedule flexibility.',
  },
];

export default function GraphicDesignDetail({ course: propCourse }) {
  const navigate = useNavigate();

  // Resolve course data safely
  const course = useMemo(() => {
    if (propCourse) return propCourse;
    const found = courses.find((c) => c.slug === 'graphic-design');
    return (
      found || {
        slug: 'graphic-design',
        title: 'Graphic Design',
        category: 'Design and video',
        duration: '4 months',
        level: 'Short course',
        summary:
          'Professional design for branding, print, and social media using Corel Draw, Illustrator, Photoshop, InDesign, and Canva Pro.',
        tools: ['Photoshop', 'Illustrator', 'Corel Draw', 'InDesign', 'Canva Pro'],
      }
    );
  }, [propCourse]);

  // Related courses (Digital Marketing and ADDM per prompt)
  const relatedCourses = useMemo(() => {
    return courses.filter((c) => ['digital-marketing', 'addm'].includes(c.slug));
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
    if (!isCertModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsCertModalOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isCertModalOpen]);

  const handleModuleToggle = (index) => {
    setOpenModuleIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleOpenModule = (targetIndex) => {
    setOpenModuleIndices((prev) =>
      prev.includes(targetIndex) ? prev : [...prev, targetIndex]
    );
    const syllabusEl = document.getElementById('syllabus');
    if (syllabusEl) {
      syllabusEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Certificate Folder items
  const certificateFolderItems = useMemo(
    () => [
      {
        title: 'Course Diploma',
        description: 'Govt. Recognized · ISO 9001:2015',
      },
      {
        title: 'Studio Training Letter',
        description: '14+ live commercial portfolio deliverables',
      },
      {
        title: 'Module Transcript',
        description: '4 modules · 5 software suites verified',
      },
    ],
    []
  );

  const handleFolderItemClick = (item, index) => {
    setActiveCertTab(index);
    setIsCertModalOpen(true);
  };

  // ─── 4 ROADMAP STATIONS (MATCHING SCROLLROADMAP ARCHITECTURE) ───
  const roadmapStations = useMemo(() => {
    return [
      {
        id: 'roadmap-station-1',
        number: 1,
        title: 'CorelDRAW',
        description: 'Commercial vector art, hoardings, visiting cards & pre-press color separation.',
        chips: ['Interface & Shapes', 'Visiting Cards & Stationery', 'Hoardings & Banners'],
        moreCount: 2,
        onMore: () => handleOpenModule(0),
      },
      {
        id: 'roadmap-station-2',
        number: 2,
        title: 'Photoshop',
        description: 'High-end portrait photo retouching, surreal manipulation & animated GIF ads.',
        chips: ['Layers, Masks & Modes', 'Portrait Retouching', 'Animated GIF Ads'],
        moreCount: 2,
        onMore: () => handleOpenModule(1),
      },
      {
        id: 'roadmap-station-3',
        number: 3,
        title: 'Illustrator & InDesign',
        description: 'Precision vector branding, icon systems & multi-page publication editorial.',
        chips: ['Pen Tool Mastery', 'Scalable Brand Marks', 'Editorial Layouts'],
        moreCount: 2,
        onMore: () => handleOpenModule(2),
      },
      {
        id: 'roadmap-station-4',
        number: 4,
        title: 'Canva Pro & AI',
        description: 'Rapid social media design, Generative AI Magic Studio & 14+ portfolio capstones.',
        chips: ['Canva Brand Kits', 'Generative AI Tools', '14+ Portfolio Capstones'],
        moreCount: 2,
        onMore: () => handleOpenModule(3),
      },
    ];
  }, []);

  const finishStation = useMemo(
    () => ({
      title: 'Commercial Portfolio & Placement',
      ctaLabel: 'Book a free demo',
      onCta: () => {
        navigate('/contact');
      },
    }),
    [navigate]
  );

  // ─── 4 HERO DECK CARDS FOR STACK COMPONENT (IDENTICAL TO DIGITAL MARKETING) ───
  const heroCards = [
    // Card (a): Brand Identity & Vector Art
    <div
      key="brand-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a5d8ff]">
            <PenTool size={14} className="text-[#4a6df0]" />
            <span className="truncate max-w-[200px]">aura-botanics-identity.ai</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Live Lab Project
          </span>
        </div>
        <p className="text-[11px] text-[#a5d8ff]/80 truncate">
          Infodesk Lab › Brand Identity &amp; Logo System
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug font-heading">
          Aura Botanics Luxury Identity &amp; Stationery Suite
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Crafting{' '}
          <mark className="bg-[#4a6df0]/30 text-[#a5d8ff] font-semibold px-1 rounded">
            scalable vector marks, typography &amp; visiting cards
          </mark>{' '}
          with precision bezier curves in Illustrator &amp; CorelDRAW.
        </p>
        <div className="w-full h-16 rounded-xl bg-gradient-to-r from-[#13266f] via-[#2448c9]/40 to-[#0c1a4b] border border-white/10 flex items-center justify-around px-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#13266f] border border-white/30" />
            <div className="w-5 h-5 rounded-full bg-[#2448c9] border border-white/30" />
            <div className="w-5 h-5 rounded-full bg-[#4a6df0] border border-white/30" />
            <div className="w-5 h-5 rounded-full bg-[#a5d8ff] border border-white/30" />
          </div>
          <span className="text-[11px] font-mono text-[#a5d8ff]">CMYK Palette</span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Complete Vector Brand Suite</span>
        <span className="text-emerald-400 font-medium">Portfolio Ready</span>
      </div>
    </div>,

    // Card (b): Editorial Magazine Spread
    <div
      key="editorial-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a5d8ff]">
            <BookOpen size={14} className="text-[#4a6df0]" />
            <span className="truncate max-w-[200px]">fashion-magazine-spread.indd</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Live Lab Project
          </span>
        </div>
        <p className="text-[11px] text-[#a5d8ff]/80 truncate">
          Infodesk Lab › Editorial &amp; Publication Design
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug font-heading">
          16-Page High-Fashion Magazine Editorial Feature
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Mastering{' '}
          <mark className="bg-[#4a6df0]/30 text-[#a5d8ff] font-semibold px-1 rounded">
            parent-child page grids, baseline typography &amp; image wraps
          </mark>{' '}
          for commercial high-resolution publication in InDesign.
        </p>
        <div className="w-full h-16 rounded-xl bg-gradient-to-r from-[#0c1a4b] via-[#13266f] to-[#2448c9]/40 border border-white/10 flex items-center justify-between px-4">
          <div className="space-y-1">
            <div className="w-20 h-2 bg-white/20 rounded" />
            <div className="w-14 h-2 bg-white/10 rounded" />
          </div>
          <span className="text-[10px] font-mono px-2 py-1 rounded bg-white/10 text-[#a5d8ff]">
            Bleed 3mm · Slug 5mm
          </span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>InDesign Master Pages</span>
        <span className="text-emerald-400 font-medium">Pre-Press Verified</span>
      </div>
    </div>,

    // Card (c): Commercial Packaging & Die-Lines
    <div
      key="packaging-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a5d8ff]">
            <Package size={14} className="text-[#4a6df0]" />
            <span className="truncate max-w-[200px]">coffee-retail-packaging.ai</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Live Lab Project
          </span>
        </div>
        <p className="text-[11px] text-[#a5d8ff]/80 truncate">
          Infodesk Lab › Product &amp; Packaging Design
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug font-heading">
          Artisan Coffee Roasters Retail FMCG Box Packaging
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Designing{' '}
          <mark className="bg-[#4a6df0]/30 text-[#a5d8ff] font-semibold px-1 rounded">
            accurate die-cut fold lines, nutritional typography &amp; spot UV
          </mark>{' '}
          varnish separations ready for automated press manufacturing.
        </p>
        <div className="flex gap-2 pt-1 text-[11px] text-[#a5d8ff]">
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">3D Box Fold</span>
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Spot UV Layer</span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Full Die-Cut Precision</span>
        <span className="text-emerald-400 font-medium">CMYK Press PDF</span>
      </div>
    </div>,

    // Card (d): Billboard & Animated Ads
    <div
      key="billboard-card"
      className="w-full h-full p-6 rounded-[22px] bg-[#0c1a4b]/90 backdrop-blur-xl border border-[#a5d8ff]/30 text-white flex flex-col justify-between shadow-2xl select-none"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-xs text-[#a5d8ff]">
            <Megaphone size={14} className="text-[#4a6df0]" />
            <span className="font-mono truncate">neon-energy-hoarding.cdr</span>
          </div>
          <span className="text-[10px] font-semibold text-[#a5d8ff] bg-white/10 px-2 py-0.5 rounded-full border border-white/15">
            Live Lab Project
          </span>
        </div>
        <p className="text-[11px] text-[#a5d8ff]/80 truncate">
          Infodesk Lab › Large-Format Print &amp; Animated Ads
        </p>
        <h4 className="text-base sm:text-lg font-bold text-white leading-snug font-heading">
          Highway Billboard Hoarding &amp; Animated Display Ads
        </h4>
        <p className="text-xs text-[#c3cbf2] leading-relaxed">
          Creating{' '}
          <mark className="bg-[#4a6df0]/30 text-[#a5d8ff] font-semibold px-1 rounded">
            40x20 ft vector hoardings
          </mark>{' '}
          and multi-frame animated GIF social banner ads in Photoshop Timeline.
        </p>
        <div className="flex gap-2 pt-1 text-[11px] text-[#a5d8ff]">
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Timeline GIF</span>
          <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">Large Format</span>
        </div>
      </div>
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#a5d8ff]">
        <span>Outdoor Advertising &amp; Web</span>
        <span className="text-emerald-400 font-medium">Agency Ready</span>
      </div>
    </div>,
  ];

  return (
    <div className="min-h-screen bg-background text-ink overflow-x-hidden">
      {/* ─── 1. HERO SECTION (IDENTICAL TO DIGITAL MARKETING & DATA SCIENCE) ─── */}
      <section
        id="overview"
        className="relative bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white min-h-[82vh] flex flex-col justify-between pt-8 sm:pt-12 pb-6 sm:pb-8 overflow-hidden"
      >
        {/* Background Aurora WebGL Canvas mounted through LazyMount */}
        {effectsConfig.graphicDesignAurora && !prefersReducedMotion && !isSaveData && !isTouchDevice ? (
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
        <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10 w-full my-auto py-3 sm:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: ~58% (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              {/* Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#a5d8ff] flex-wrap">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight size={12} />
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                <ChevronRight size={12} />
                <Link to="/courses?category=Design%20and%20video" className="hover:text-white transition-colors">
                  Design and video
                </Link>
                <ChevronRight size={12} />
                <span className="font-semibold text-white">Graphic Design</span>
              </nav>

              {/* Glass Metadata Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] text-xs font-semibold backdrop-blur-md">
                  {course.level || 'Short course'}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] text-xs font-semibold backdrop-blur-md">
                  {course.duration || '4 months'}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold backdrop-blur-md">
                  {course.category || 'Design and video'}
                </span>
              </div>

              {/* H1 Heading with ShinyText */}
              <h1 className="text-[clamp(44px,6.2vw,92px)] font-bold tracking-tight text-white leading-[1.02] font-heading">
                {effectsConfig.graphicDesignShinyText && !prefersReducedMotion ? (
                  <ShinyText
                    text="Graphic Design"
                    color="#a5d8ff"
                    shineColor="#ffffff"
                    speed={3}
                    className="inline-block"
                  />
                ) : (
                  'Graphic Design'
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-[#c3cbf2] text-base sm:text-lg leading-relaxed max-w-xl">
                Master branding, advertising art, publication layout, and social media creatives using Photoshop, Illustrator, CorelDRAW, InDesign, and Canva Pro.
              </p>

              {/* TrueFocus Tagline with ice-blue bracket frame (Left-aligned & compact) */}
              <div className="py-0.5">
                {effectsConfig.graphicDesignTrueFocus && !prefersReducedMotion ? (
                  <TrueFocus
                    sentence="Branding Editorial Packaging Ads"
                    manualMode={false}
                    blurAmount={2.5}
                    borderColor="#a5d8ff"
                    glowColor="rgba(165, 216, 255, 0.4)"
                    animationDuration={0.6}
                    pauseBetweenAnimations={1.2}
                    borderWidth={2}
                    cornerSize={12}
                    fontSize="clamp(1.1rem, 1.8vw, 1.45rem)"
                    justify="start"
                    className="!justify-start font-heading"
                  />
                ) : (
                  <div className="text-lg sm:text-xl font-bold text-[#a5d8ff] font-heading">
                    Branding <span className="text-white/60 font-normal text-sm sm:text-base">· Editorial · Packaging · Ads</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons (Off-white button with deep blue text + ghost button) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-4">
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
              <div className="pt-1.5 flex flex-wrap items-center gap-4 text-xs text-[#a5d8ff]/90">
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

            {/* Right Column: Stack of 4 illustration cards (460x380px container) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {/* Desktop (>= 1024px): Stack of 4 illustration cards */}
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

              {/* Mobile (< 1024px): Single static card to avoid touch conflicts */}
              <div className="block lg:hidden w-full max-w-[420px] mx-auto mt-4">
                {heroCards[0]}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Glass Stats Bar */}
        <div className="max-w-content mx-auto px-4 sm:px-6 w-full relative z-10 pt-2 sm:pt-4">
          <div className="backdrop-blur-md bg-white/[0.06] border border-white/[0.14] rounded-[22px] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center shadow-lg">
            {/* 1. Modules */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={GRAPHIC_DESIGN_MODULES.length} duration={0.8} />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Modules
              </p>
            </div>

            {/* 2. Months of training */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={4} duration={0.8} />
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

            {/* 4. Portfolio Projects */}
            <div className="p-4 sm:p-5">
              <p className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                <Counter value={14} duration={0.8} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-1">
                Portfolio projects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CHANNEL STRIP (SLIM BAND, SENTENCE CASE, 30PX FONT) ─── */}
      <section className="bg-[#eef2fd] border-y border-[#c3d1fb]/60 py-2 sm:py-2.5 overflow-hidden relative">
        {!prefersReducedMotion && effectsConfig.graphicDesignCurvedLoop ? (
          <div className="w-full h-12 sm:h-14 flex items-center justify-center">
            <CurvedLoop
              marqueeText={DESIGN_MARQUEE_ITEMS.join(' · ')}
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
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-2 py-1.5">
            {DESIGN_MARQUEE_ITEMS.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-surface rounded-full text-xs font-semibold text-primary border border-line shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ─── 3. ROADMAP (SCROLLROADMAP) ─── */}
      {effectsConfig.roadmap && (
        <ScrollRoadmap
          stations={roadmapStations}
          finish={finishStation}
          heading="Your design roadmap"
          subheading="Four modules, then commercial portfolio."
        />
      )}

      {/* ─── 4. SOFTWARE & DESIGN PLATFORMS MARQUEE (LOGOLOOP) ─── */}
      <section aria-label="Design platforms and tools" className="bg-soft/40 border-y border-line/80 py-5 sm:py-6 overflow-hidden">
        {effectsConfig.graphicDesignLogoLoop && !prefersReducedMotion ? (
          <div className="w-full max-w-full overflow-hidden">
            <LogoLoop
              logos={GRAPHIC_DESIGN_TOOLS}
              ariaLabel="Industry graphic design tools and creative suites"
              speed={38}
              direction="left"
              gap={24}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.12}
              renderItem={(item) => (
                <div
                  key={item.name}
                  title={item.name}
                  aria-label={item.name}
                  className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl sm:rounded-[20px] bg-gradient-to-b from-white via-surface to-[#f8f9fc] border border-line/90 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_-6px_rgba(36,72,201,0.22),0_4px_8px_rgba(0,0,0,0.04)] hover:border-primary/50 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out flex items-center justify-center p-3 select-none shrink-0 group cursor-pointer ring-1 ring-inset ring-white/70"
                >
                  <span className="w-full h-full flex items-center justify-center shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.04)] group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </span>
                </div>
              )}
            />
          </div>
        ) : (
          /* Reduced motion fallback: Clean wrapping premium logo tiles */
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap gap-3.5 justify-center">
            {GRAPHIC_DESIGN_TOOLS.map((item) => (
              <div
                key={item.name}
                title={item.name}
                aria-label={item.name}
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl sm:rounded-[20px] bg-gradient-to-b from-white via-surface to-[#f8f9fc] border border-line/90 shadow-[0_4px_16px_-2px_rgba(15,23,42,0.06)] flex items-center justify-center p-3 ring-1 ring-inset ring-white/70"
              >
                <span className="w-full h-full flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─── 5. DETAILED SYLLABUS (MODULEACCORDION + STICKY OVERVIEW CARD + FOLDER) ─── */}
      <section id="syllabus" className="py-12 sm:py-20 bg-soft/30 scroll-mt-[88px] content-auto-lg">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: 4 Modules Accordion (col-span-8) */}
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
                modules={GRAPHIC_DESIGN_MODULES}
                openIndices={openModuleIndices}
                onToggle={handleModuleToggle}
                useSpotlight={false}
              />
            </div>

            {/* Right Column: Sticky Course Overview Card (col-span-4) */}
            <div className="lg:col-span-4 space-y-6">
              <CourseOverviewCard
                course={course}
                whatsappMessage={encodeURIComponent(
                  `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration || '4 months'}) course. Could you share batch timings, fee details, and book a free demo session?`
                )}
                brochurePath="/assets/Infodesk_Computer_Education.pdf"
                className="sticky lg:top-[92px]"
              />

              {/* React Bits Folder: Interactive Course Certificate & Credentials */}
              {effectsConfig.graphicDesignFolder && (
                <div className="block">
                  <div className="p-4 sm:p-5 rounded-[22px] bg-white border border-line/80 shadow-card flex flex-col items-center text-center space-y-4">
                    <div className="w-full flex items-center justify-between text-left">
                      <div>
                        <h4 className="text-sm font-bold text-deep font-heading">
                          Course certificate &amp; credentials
                        </h4>
                        <p className="text-[11px] text-muted">
                          Official certification awarded after course completion
                        </p>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-soft text-primary border border-line/50">
                        Govt. Recognized
                      </span>
                    </div>

                    <div className="py-2 flex justify-center w-full min-h-[180px] sm:min-h-[195px] items-center overflow-visible">
                      <Folder
                        label="Course Certificate"
                        color="#13266f"
                        paperColor="#ffffff"
                        theme="light"
                        size={0.82}
                        items={certificateFolderItems}
                        onItemClick={handleFolderItemClick}
                      />
                    </div>

                    <div className="w-full pt-3 border-t border-line/50 flex items-center justify-between text-[11px] text-muted">
                      <span>3 verified credentials</span>
                      <span className="text-primary font-semibold">Click sheet to preview</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. STUDENT STORIES (VERIFIED REVIEWS & STORIES) ─── */}
      <section id="stories" className="py-12 sm:py-20 bg-surface border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <div className="flex justify-center mb-1">
              <GoogleRatingBadge variant="pill" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep font-heading">
              Student stories
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed">
              What our students say about learning at Infodesk.
            </p>
          </div>

          {/* Curated Verified Student Reviews with SpotlightCard illumination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 4).map((t) => {
              const isGoogle = t.source === 'Google Review';
              const cardContent = (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-line/40 pb-2.5">
                      <div className="flex items-center gap-1.5">
                        <GoogleStars rating={t.rating || 5} size={14} />
                        <span className="text-xs font-bold text-deep font-mono">5.0</span>
                      </div>
                      {isGoogle ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-soft text-[11px] font-semibold text-primary border border-primary/20">
                          <GoogleIcon className="w-3 h-3" />
                          <span>Google Review</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 size={11} />
                          <span>Alumni Story</span>
                        </span>
                      )}
                    </div>

                    {(t.course || t.mentor) && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {t.course && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-soft text-deep border border-line/60">
                            {t.course}
                          </span>
                        )}
                        {t.mentor && (
                          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60">
                            {t.mentor}
                          </span>
                        )}
                      </div>
                    )}

                    <blockquote className="text-sm sm:text-[15px] text-ink/90 leading-relaxed italic pt-1">
                      “{t.quote.replace(/'/g, '’')}”
                    </blockquote>
                  </div>

                  <div className="flex items-center justify-between gap-3.5 pt-4 border-t border-line/50">
                    <div className="flex items-center gap-3.5 min-w-0">
                      {t.image ? (
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-sm shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="w-12 h-12 rounded-full text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: t.avatarBg || '#4285F4' }}
                          aria-hidden="true"
                        >
                          {t.initials || t.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-deep leading-tight truncate">
                          {t.name}
                        </h4>
                        <p className="text-xs text-muted mt-0.5 truncate">
                          {t.date ? `${t.date} · ` : ''}{t.role || 'Infodesk student'}
                        </p>
                      </div>
                    </div>

                    {isGoogle && (
                      <a
                        href={GOOGLE_BUSINESS_INFO.shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-soft"
                        aria-label={`View ${t.name}'s review on Google`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </>
              );

              return effectsConfig.graphicDesignSpotlight ? (
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors group"
            >
              <span>See student stories</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <span className="hidden sm:inline text-line">•</span>
            <a
              href={GOOGLE_BUSINESS_INFO.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-deep hover:text-primary transition-colors group"
            >
              <GoogleIcon className="w-3.5 h-3.5" />
              <span>Read all 122+ Google reviews</span>
              <ExternalLink size={13} className="text-muted group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── 7. FREQUENTLY ASKED QUESTIONS (SPOTLIGHTCARD) ─── */}
      <section id="faqs" className="py-12 sm:py-20 bg-surface border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
              Frequently asked questions.
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Key details about the 4-month Graphic Design curriculum, tools, and batch timings.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {GRAPHIC_DESIGN_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const faqContent = (
                <div className="p-5 sm:p-6 space-y-2">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 font-bold text-deep text-base sm:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-primary transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-sm text-ink/80 leading-relaxed pt-2 border-t border-line/40">
                      {faq.a}
                    </p>
                  )}
                </div>
              );

              return effectsConfig.graphicDesignSpotlight ? (
                <SpotlightCard
                  key={faq.q}
                  theme="light"
                  spotlightColor="rgba(36, 72, 201, 0.08)"
                  intensity={0.2}
                  proximity={80}
                  className="!p-0 !rounded-2xl bg-white border border-line/80 shadow-sm"
                >
                  {faqContent}
                </SpotlightCard>
              ) : (
                <div key={faq.q} className="rounded-2xl bg-white border border-line/80 shadow-sm">
                  {faqContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 8. RELATED COURSES AS FLIPCARD (MATCHING DIGITAL MARKETING & DATA SCIENCE) ─── */}
      <section id="related" className="py-12 sm:py-20 bg-surface border-t border-line/70 content-auto">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
              Related courses in marketing and design.
            </h2>
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

      {/* ─── 9. CLOSING DEMO BANNER (LASERFLOW IN LAZYMOUNT + STARBORDER BUTTON) ─── */}
      <ClosingDemoBanner
        title="Try a free demo class."
        description="Experience our hands-on design labs, mentor guidance, and commercial curriculums in-person at any of our 4 Mumbai centers."
        buttonText="Book your free demo session"
      />

      {/* ─── 10. CERTIFICATE LIGHTBOX MODAL ─── */}
      <AnimatePresence>
        {isCertModalOpen && (
          <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsCertModalOpen(false)}
              className="fixed inset-0 bg-[#0b1a52]/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl border border-line/80 overflow-hidden z-10 my-auto flex flex-col max-h-[92dvh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-line/60 bg-surface shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <h3 id="cert-modal-title" className="text-base font-bold text-deep font-heading">
                      Official Course Certificate
                    </h3>
                    <p className="text-xs text-muted">
                      Government Recognized &amp; ISO 9001:2015 Certified
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(false)}
                  className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-full bg-soft/80 hover:bg-soft text-muted hover:text-deep flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  aria-label="Close certificate modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Credential Tab Selector */}
              <div className="px-4 sm:px-6 py-2.5 bg-surface border-b border-line/60 flex items-center justify-center shrink-0">
                <div className="flex items-center gap-1 p-1 bg-white border border-line/60 rounded-full text-xs font-semibold shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveCertTab(0)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCertTab === 0
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted hover:text-deep'
                    }`}
                  >
                    Course Diploma
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCertTab(1)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCertTab === 1
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted hover:text-deep'
                    }`}
                  >
                    Studio Training Letter
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCertTab(2)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                      activeCertTab === 2
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted hover:text-deep'
                    }`}
                  >
                    Module Transcript
                  </button>
                </div>
              </div>

              {/* Certificate Document Body */}
              <div id="printable-certificate" className="p-4 sm:p-8 bg-[#fdfcf9] overflow-y-auto flex-1">
                {activeCertTab === 0 && (
                  <motion.div
                    key="tab-diploma"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-8 rounded-[16px] border-2 border-primary/20 bg-white relative shadow-sm space-y-6"
                  >
                    {/* Decorative Corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/40 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/40 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/40 pointer-events-none" />

                    <div className="text-center space-y-1">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-widest font-heading">
                        Infodesk Computer Education · Mumbai
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                        Certificate of Completion
                      </h4>
                      <p className="text-xs text-muted">
                        This is to certify the successful completion of the professional program in
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-primary font-heading pt-1">
                        Graphic Design &amp; Commercial Visual Arts
                      </p>
                    </div>

                    {/* Course Details Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-line/60 text-xs">
                      <div>
                        <span className="text-muted block">Duration</span>
                        <span className="font-semibold text-deep">4 Months + Portfolio Capstone</span>
                      </div>
                      <div>
                        <span className="text-muted block">Format</span>
                        <span className="font-semibold text-deep">In-Person &amp; Live Projects</span>
                      </div>
                      <div>
                        <span className="text-muted block">Curriculum</span>
                        <span className="font-semibold text-deep">4 Modules · 5 Software Suites</span>
                      </div>
                      <div>
                        <span className="text-muted block">Accreditation</span>
                        <span className="font-semibold text-deep">Govt. Recognized · ISO 9001:2015</span>
                      </div>
                    </div>

                    {/* Modules Pills Grid */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
                        Verified Curriculum Modules (4)
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {GRAPHIC_DESIGN_MODULES.map((m) => (
                          <span
                            key={m.number}
                            className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-md bg-soft text-primary border border-line/60"
                          >
                            {m.number}. {m.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Seals & Signatures */}
                    <div className="flex items-center justify-between pt-4 border-t border-line/50 text-[11px] text-muted">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-primary" />
                        <div>
                          <p className="font-bold text-deep leading-none">ISO 9001:2015</p>
                          <p className="text-[10px]">Quality Certified</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-deep leading-none">Infodesk Academic Council</p>
                        <p className="text-[10px]">Mumbai Centers</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeCertTab === 1 && (
                  <motion.div
                    key="tab-training"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-8 rounded-[16px] border-2 border-emerald-500/20 bg-white relative shadow-sm space-y-6"
                  >
                    {/* Decorative Corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-500/40 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-500/40 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-500/40 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-500/40 pointer-events-none" />

                    <div className="text-center space-y-1">
                      <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest font-heading">
                        Infodesk Computer Education · Design Studio Division
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                        Practical Studio Training Certificate
                      </h4>
                      <p className="text-xs text-muted">
                        This certifies the satisfactory completion of practical studio training on live graphic design workflows
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-emerald-600 font-heading pt-1">
                        Commercial Portfolio Execution &amp; Agency Projects
                      </p>
                    </div>

                    {/* Training Details Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-line/60 text-xs">
                      <div>
                        <span className="text-muted block">Training Period</span>
                        <span className="font-semibold text-deep">4 Months Hands-On Labs</span>
                      </div>
                      <div>
                        <span className="text-muted block">Centers</span>
                        <span className="font-semibold text-deep">Goregaon W, Behram Baug, Jogeshwari W, Motilal Nagar</span>
                      </div>
                      <div>
                        <span className="text-muted block">Mentorship</span>
                        <span className="font-semibold text-deep">Industry Professional Guided</span>
                      </div>
                      <div>
                        <span className="text-muted block">Evaluation</span>
                        <span className="font-semibold text-emerald-600">100% Practical Verification</span>
                      </div>
                    </div>

                    {/* Competency Blocks */}
                    <div className="space-y-2.5">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
                        Practised Core Competencies
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Brand Identity &amp; Logo Systems</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            Illustrator pen tool precision, vector geometry, brand guidelines &amp; stationery suites.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Photo Retouching &amp; Compositing</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            Photoshop layer masks, portrait retouching, color grading &amp; animated GIF banner ads.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Editorial &amp; Publication Layout</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            InDesign master pages, grid systems, typography hierarchy &amp; high-res PDF export.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Print Production &amp; Die-Lines</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            CorelDRAW commercial hoardings, die-cut packaging &amp; CMYK color separation.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Seals & Signatures */}
                    <div className="flex items-center justify-between pt-4 border-t border-line/50 text-[11px] text-muted">
                      <div className="flex items-center gap-2">
                        <Briefcase size={22} className="text-emerald-600" />
                        <div>
                          <p className="font-bold text-deep leading-none">Studio Director</p>
                          <p className="text-[10px]">Infodesk Design Studio</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-deep leading-none">Placement Verification</p>
                        <p className="text-[10px] text-emerald-600 font-semibold">14+ Projects Approved</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeCertTab === 2 && (
                  <motion.div
                    key="tab-transcript"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-8 rounded-[16px] border-2 border-line/80 bg-white relative shadow-sm space-y-6"
                  >
                    <div className="text-center space-y-1">
                      <p className="text-[11px] font-bold text-primary uppercase tracking-widest font-heading">
                        Academic Transcript
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                        Official Curriculum Transcript
                      </h4>
                      <p className="text-xs text-muted">
                        Graphic Design Program · 4 Months Full Practical
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      {GRAPHIC_DESIGN_MODULES.map((m) => (
                        <div
                          key={m.number}
                          className="p-3 rounded-xl bg-soft/40 border border-line/60 flex items-center justify-between gap-3 text-xs"
                        >
                          <div className="space-y-0.5 min-w-0">
                            <span className="font-bold text-deep block truncate">
                              {m.name}
                            </span>
                            <span className="text-muted text-[11px]">
                              {m.topics.length} syllabus topics mastered
                            </span>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200">
                              Completed · A+
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-line/50 text-[11px] text-muted">
                      <span>Total Topics: 20</span>
                      <span className="font-bold text-deep">Overall Grade: Distinction</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 border-t border-line/60 bg-surface flex flex-wrap items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <ShieldCheck size={16} className="text-primary" />
                  <span>Verified credentials linkable to LinkedIn &amp; Behance</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line hover:border-primary text-xs font-semibold text-deep hover:text-primary transition-colors cursor-pointer"
                  >
                    <Printer size={13} />
                    <span>Print</span>
                  </button>
                  <a
                    href="/assets/Infodesk_Computer_Education.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-bright text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    <FileDown size={13} />
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
