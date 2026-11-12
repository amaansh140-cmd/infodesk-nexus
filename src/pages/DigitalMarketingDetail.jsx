import React, { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Award,
  CheckCircle2,
  Calendar,
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
  X,
  ExternalLink,
  MapPin,
  Phone,
  Printer,
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
import Folder from '../components/Folder';
import LogoLoop from '../components/LogoLoop';
import PixelCard from '../components/PixelCard';
import LazyMount from '../components/common/LazyMount';

// Shared Components reused per Adjustment 3
import ModuleAccordion from '../components/ModuleAccordion';
import CourseOverviewCard from '../components/CourseOverviewCard';
import ClosingDemoBanner from '../components/ClosingDemoBanner';
import Button from '../components/Button';

// Data Source of Truth (Brochure Page 4)
import {
  DIGITAL_MARKETING_MODULES,
  TOTAL_DIGITAL_MARKETING_TOPICS,
  MARKETING_CHANNELS,
  CUSTOMER_JOURNEY_STAGES,
} from '../data/digitalMarketing';
import { branches } from '../data/branches';
import { courses } from '../data/courses';
import { testimonials, GOOGLE_BUSINESS_INFO } from '../data/testimonials';
import GoogleRatingBadge, { GoogleIcon, GoogleStars } from '../components/GoogleRatingBadge';

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

// 12 Industry Marketing Platforms for LogoLoop Marquee
const DIGITAL_MARKETING_TOOLS = [
  {
    name: 'Google Ads',
    category: 'Search & Display Bidding',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M3.7 13.9l5.9-10.2c.8-1.4 2.6-1.9 4-1.1l1.5.9c1.4.8 1.9 2.6 1.1 4L10.3 17.7c-.8 1.4-2.6 1.9-4 1.1l-1.5-.9c-1.4-.8-1.9-2.6-1.1-4z" fill="#fbbc04" />
        <path d="M15.1 17.6c-1.4-.8-1.9-2.6-1.1-4l5.9-10.2c.8-1.4 2.6-1.9 4-1.1l.1.1c1.4.8 1.9 2.6 1.1 4l-5.9 10.2c-.8 1.4-2.6 1.9-4 1.1l-.1-.1z" fill="#4285f4" />
        <circle cx="6.5" cy="17.5" r="3.5" fill="#34a853" />
      </svg>
    ),
  },
  {
    name: 'Search Console',
    category: 'Indexing & Crawl Health',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#e8f0fe" />
        <path d="M5 18l4-5 3 3 7-9" stroke="#1a73e8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="19" cy="7" r="2" fill="#34a853" />
        <circle cx="5" cy="18" r="1.5" fill="#ea4335" />
      </svg>
    ),
  },
  {
    name: 'Meta Ads Manager',
    category: 'Social & Lead Funnels',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M12 7.2c-2.3 0-3.9 1.4-5.2 3.1C5.4 12 4.1 13.5 3 13.5c-.8 0-1.4-.5-1.4-1.5 0-1.7 1.4-3.5 3.3-4.4C6.3 6.9 8.2 6.5 10 6.6c-1.2-2.1-3.6-3.4-6.4-3.4C1.6 3.2 0 4.8 0 6.8c0 3.7 3.3 6.8 6.7 6.8 2.3 0 4-1.4 5.3-3.1 1.4-1.7 2.7-3.2 3.8-3.2.8 0 1.4.5 1.4 1.5 0 1.7-1.4 3.5-3.3 4.4-1.4.7-3.3 1.1-5.1 1 1.2 2.1 3.6 3.4 6.4 3.4 2 0 3.6-1.6 3.6-3.6 0-3.7-3.3-6.8-6.8-6.8z" fill="#0081fb" />
      </svg>
    ),
  },
  {
    name: 'WordPress CMS',
    category: 'Landing Pages & Sites',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#21759b" />
        <path d="M12 2.5C6.8 2.5 2.5 6.8 2.5 12c0 2.2.7 4.1 2 5.8L9.3 6.9c.3-.8.6-1.1 1.1-1.1.5 0 .8.3 1.1 1.1l3 8.3 1.6-4.9c.3-.8.6-1.1 1-1.1.4 0 .7.3 1 .1.1l2.4 6.8c1.6-1.9 2.5-4.4 2.5-7.2 0-5.2-4.3-9.5-9.5-9.5zm-5 13.9l3.4-9.3-3.4 9.3zm10 0l-3.2-9 3.2 9z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Google Analytics 4',
    category: 'Attribution & Tracking',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect x="2" y="14" width="4.5" height="7" rx="2" fill="#f9ab00" />
        <rect x="9.5" y="8" width="5" height="13" rx="2" fill="#e37400" />
        <rect x="17.5" y="3" width="4.5" height="18" rx="2" fill="#e37400" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp Business',
    category: 'Direct CRM & Sales',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#25d366" />
        <path d="M17.5 14.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9 0 1.7 1.3 3.4 1.4 3.6.2.2 2.5 3.8 6 5.3.8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.2-.6-.4z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Canva',
    category: 'Ad Creatives & Banners',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#00c4cc" />
        <path d="M14.5 8.5c-1.2 0-2.4.6-3.1 1.7-.4-.9-1.2-1.5-2.3-1.5-1.7 0-3.1 1.6-3.1 3.8 0 2.5 1.7 4 3.6 4 1.1 0 2.1-.6 2.7-1.5.3 1 1.3 1.5 2.4 1.5 1.5 0 2.8-.9 3.3-2.3l-1.3-.5c-.3.8-1 1.3-1.9 1.3-.7 0-1.3-.4-1.4-1.1l4.4-.7c.1-.3.1-.6.1-.9 0-2.2-1.4-3.8-3.4-3.8zm-5.4 6.5c-1.1 0-2-1-2-2.5 0-1.4.8-2.3 1.8-2.3.9 0 1.6.8 1.6 2.2 0 1.6-.5 2.6-1.4 2.6zm5.3-2.3l-3.1.5c.1-1.1.7-1.9 1.6-1.9.9 0 1.5.6 1.5 1.4z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Mailchimp',
    category: 'Email Nurture & Drips',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#ffe01b" />
        <path d="M7 10c0-1.7 1.3-3 3-3s3 1.3 3 3v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4zm6 0c0-1.7 1.3-3 3-3s3 1.3 3 3v2c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2z" fill="#241c15" />
      </svg>
    ),
  },
  {
    name: 'Yoast SEO',
    category: 'On-Page Meta & Schema',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#a4286a" />
        <path d="M7 7l3.5 5.5V17h3v-4.5L17 7h-3.2L12 10.2 10.2 7H7z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Google Business',
    category: 'Local Maps 3-Pack',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#f8f9fa" />
        <path d="M4 10h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8z" fill="#1a73e8" />
        <path d="M2 7l10-3 10 3-2 3H4L2 7z" fill="#34a853" />
        <path d="M10 14h4v6h-4v-6z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Semrush / Ahrefs',
    category: 'Keyword & Backlinks',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#ff642d" />
        <path d="M6 14l3.5-6.5L13 12l5-8" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'WooCommerce',
    category: 'E-Commerce Catalogs',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <rect width="24" height="24" rx="5" fill="#96588a" />
        <path d="M5 8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H9l-3 3V8z" fill="#ffffff" />
        <circle cx="9" cy="11" r="1.2" fill="#96588a" />
        <circle cx="12" cy="11" r="1.2" fill="#96588a" />
        <circle cx="15" cy="11" r="1.2" fill="#96588a" />
      </svg>
    ),
  },
];

// 6-Month Campaign Progression & Learning Curve (Source: Brochure Page 4)
const MONTHLY_TIMELINE = [
  {
    month: 1,
    title: 'Search Engine Architecture & Keyword Foundations',
    shortLabel: 'Month 1',
    badge: 'Organic Search',
    brochureModules: ['Module 1: Search Engine Optimization (SEO)', 'Module 6: Blogging'],
    headline: 'Build search authority and earn unpaid Google page 1 real estate.',
    description: 'Start with deep keyword intent mapping and technical on-page architecture. Learn how search engines crawl, index, and rank content to attract buyers actively searching for your offer.',
    deliverables: [
      'Conduct seed keyword clustering, intent classification, and competitor search gap analysis',
      'Configure robots.txt, XML sitemaps, canonical tags, and Google Search Console property',
      'Optimize page titles, meta descriptions, image alt tags, and internal topical link clusters',
      'Audit on-page Core Web Vitals, eliminate crawl budget waste, and resolve 404 redirect chains',
    ],
    tools: ['Google Search Console', 'Yoast SEO', 'Semrush / Ahrefs', 'Screaming Frog'],
    milestone: 'Target website indexed on Google with live search impression tracking.',
    linkedModuleIndex: 0,
  },
  {
    month: 2,
    title: 'WordPress CMS, Web Presence & Content Publishing',
    shortLabel: 'Month 2',
    badge: 'Web & Content Engine',
    brochureModules: ['Module 5: WordPress', 'Module 6: Blogging', 'Module 7: Content Marketing'],
    headline: 'Build lightning-fast conversion landing pages and high-retention content hubs.',
    description: 'Create fully custom responsive web pages on WordPress without writing backend code. Structure content editorial calendars, high-converting lead capture forms, and blog architectures that generate organic inbound leads.',
    deliverables: [
      'Install and configure WordPress themes, page builders, conversion plugins, and security layers',
      'Design mobile-responsive service landing pages with clear above-the-fold value propositions',
      'Structure an editorial pillar-and-cluster blog series with optimized search snippet layouts',
      'Implement lead capture forms, CTA trigger bars, and automated lead notification routing',
    ],
    tools: ['WordPress CMS', 'Elementor', 'WooCommerce', 'Google Forms / WPForms'],
    milestone: 'Production website launched with live landing page, blog engine, and lead capture.',
    linkedModuleIndex: 4,
  },
  {
    month: 3,
    title: 'Social Media Marketing & Creative Funnel Strategy',
    shortLabel: 'Month 3',
    badge: 'Social & Creative',
    brochureModules: ['Module 2: Social Media Marketing (SMM)', 'Module 7: Content Marketing'],
    headline: 'Turn casual social browsers into qualified community leads and repeat customers.',
    description: 'Master content distribution and organic brand building across Instagram, Facebook, LinkedIn, and YouTube. Learn audience psychographics, creative production workflows, and social engagement mechanics.',
    deliverables: [
      'Develop a 30-day multi-channel brand content calendar with video hooks and carousel scripts',
      'Design scroll-stopping creative assets, ad banners, and story formats using Canva',
      'Set up Meta Business Suite, configure brand assets, and automate community response flows',
      'Analyze organic reach metrics, engagement ratios, and demographic retention trends',
    ],
    tools: ['Meta Business Suite', 'Instagram Creator Studio', 'Canva Pro', 'LinkedIn Pages'],
    milestone: 'Complete organic social campaign executed across 3 platforms with measurable engagement.',
    linkedModuleIndex: 1,
  },
  {
    month: 4,
    title: 'Paid Search Reach & Google Ads Performance Bidding',
    shortLabel: 'Month 4',
    badge: 'Paid Performance',
    brochureModules: ['Module 3: Search Engine Marketing (SEM)', 'Module 4: Google Ads'],
    headline: 'Drive instant, predictable customer acquisition with data-backed PPC funnels.',
    description: 'Launch and optimize high-ROI Google Ads campaigns. Master Search, Display, and Video campaigns, keyword match types, negative keyword hygiene, Quality Score optimization, and conversion bidding.',
    deliverables: [
      'Structure Google Search campaigns with tightly themed ad groups and exact/phrase match queries',
      'Write high-CTR responsive search ads with dynamic keyword insertion and rich callout assets',
      'Configure conversion tracking tags for phone calls, form submits, and checkout actions',
      'Calculate Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and optimize bidding',
    ],
    tools: ['Google Ads Manager', 'Google Tag Manager', 'Keyword Planner', 'Ad Preview Tool'],
    milestone: 'Live Google Ads campaign with tracked conversion goals and sub-5% target CPA.',
    linkedModuleIndex: 3,
  },
  {
    month: 5,
    title: 'App Marketing, ORM & Multi-Channel Retention',
    shortLabel: 'Month 5',
    badge: 'Scale & Retention',
    brochureModules: ['Module 8: App Marketing', 'Module 9: Online Reputation Management (ORM)'],
    headline: 'Protect brand sentiment, dominate app stores, and retain customers via automation.',
    description: 'Scale customer reach beyond web search. Implement App Store Optimization (ASO) for Google Play & iOS, manage public review sentiment across Google Business Profile, and automate WhatsApp & email workflows.',
    deliverables: [
      'Optimize App Store listing assets: app title, description keywords, icon, and preview screenshots',
      'Establish review response playbooks, crisis mitigation protocols, and sentiment tracking',
      'Build automated email welcome & lead nurture drip sequences using Mailchimp',
      'Deploy WhatsApp Business quick replies, catalog displays, and broadcast campaign tags',
    ],
    tools: ['Google Play Console', 'Google Business Profile', 'Mailchimp', 'WhatsApp Business API'],
    milestone: 'Reputation monitoring hub active with 100% positive sentiment workflow and automated nurture.',
    linkedModuleIndex: 7,
  },
  {
    month: 6,
    title: 'In-Person Job Training, Client Agency Projects & Placement',
    shortLabel: 'Month 6',
    badge: 'Agency Training & Career',
    brochureModules: ['Module 10: Marketing (Full Capstone & Placement Prep)'],
    headline: 'Execute live client campaign audits at Mumbai centers and ace placement interviews.',
    description: 'Work side-by-side with senior practitioners at our Mumbai centers on live brand accounts. Build an executive agency-ready campaign portfolio, master reporting presentations, and prepare for interviews.',
    deliverables: [
      'Audit real-world business accounts across SEO, paid ads, and social media with actionable fixes',
      'Synthesize end-to-end multi-channel marketing proposals with projected spend and ROAS models',
      'Compile a verified personal campaign portfolio demonstrating measurable traffic and lead gains',
      'Undergo mock agency interviews, resume reviews, and placement drive preparation',
    ],
    tools: ['Google Analytics 4', 'Looker Studio / Data Studio', 'Agency Pitch Decks', 'Client Reporting Suite'],
    milestone: 'ISO 9001:2015 Diploma credential awarded, completed portfolio, and placement drive access.',
    linkedModuleIndex: 9,
  },
];

// High-Intent Student FAQs (Brochure Source of Truth)
const DIGITAL_MARKETING_FAQS = [
  {
    q: 'Do I need any technical or coding knowledge to learn digital marketing?',
    a: 'No prior technical or coding experience is required. The curriculum begins with marketing fundamentals and guides you through intuitive, industry-standard platforms including WordPress, Google Ads, Meta Ads Manager, and Google Search Console with hands-on mentor support.',
  },
  {
    q: 'How is this 6-month course different from the 1-year ADDM course?',
    a: 'This 6-month Digital Marketing course focuses on the core 10 marketing modules: SEO, SMM, SEM, Google Ads, WordPress, Blogging, Content marketing, App marketing, ORM, and General marketing with job training. The 1-year Advance Diploma in Digital Marketing (ADDM) is an extended diploma that includes advanced AI tools and FTP modules.',
  },
  {
    q: 'How does the in-person job training work across Mumbai centers?',
    a: 'Job training is conducted hands-on at all 4 Infodesk Mumbai centers (Goregaon West, Behram Baug, Jogeshwari West, and Motilal Nagar). You will work on live campaign scenarios, optimize real ad funnels, and prepare campaign portfolios under the direct guidance of industry professionals.',
  },
  {
    q: 'Are weekend or flexible batch timings available for working professionals?',
    a: 'Yes. We offer morning, afternoon, evening, and dedicated Sunday weekend batches. Additionally, all enrolled students receive extra practice lab hours with dedicated mentor support to ensure complete schedule flexibility.',
  },
];

export default function DigitalMarketingDetail({ course }) {
  const navigate = useNavigate();

  // Related courses (ADDM and Graphic Design per prompt)
  const relatedCourses = useMemo(() => {
    return courses.filter((c) => ['addm', 'graphic-design'].includes(c.slug));
  }, []);

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Customer Journey Active Stage Tab
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);

  // 6-Month Campaign Timeline Active Month (0-5)
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);

  // Certificate Lightbox Modal State & Active Tab (0: Diploma, 1: Job Training, 2: Transcript)
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

  // Interactive Course Certificate Folder Items (Credentials Awarded After Course Completion)
  const certificateFolderItems = useMemo(
    () => [
      {
        title: 'Course Diploma',
        description: 'Govt. Recognized · ISO 9001:2015',
      },
      {
        title: 'Job Training Letter',
        description: 'Live campaign & agency projects',
      },
      {
        title: 'Module Transcript',
        description: '10 modules · 67 topics verified',
      },
    ],
    []
  );

  const handleFolderItemClick = (item, index) => {
    setActiveCertTab(index);
    setIsCertModalOpen(true);
  };

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
        <div className="max-w-content mx-auto px-4 sm:px-6 relative z-10 w-full my-auto py-6 sm:py-8">
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
        <div className="max-w-content mx-auto px-4 sm:px-6 w-full relative z-10 pt-4">
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
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-2 py-1.5">
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
        <div className="max-w-content mx-auto px-4 sm:px-6">
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

      {/* ─── 4. SOFTWARE & MARKETING PLATFORMS MARQUEE (LOGOLOOP) ─── */}
      <section aria-label="Marketing platforms and tools" className="bg-soft/50 border-y border-line/80 py-4 sm:py-5 overflow-hidden">
        {effectsConfig.digitalMarketingLogoLoop && !prefersReducedMotion ? (
          <div className="w-full max-w-full overflow-hidden">
            <LogoLoop
              logos={DIGITAL_MARKETING_TOOLS}
              ariaLabel="Industry marketing tools and platforms taught across the 10 modules"
              speed={42}
              direction="left"
              gap={20}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.12}
              renderItem={(item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-2xl bg-surface border border-line/90 shadow-xs hover:shadow-md hover:border-primary/40 transition-all select-none group shrink-0"
                >
                  <span className="w-8 h-8 flex items-center justify-center shrink-0 drop-shadow-xs group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-deep group-hover:text-primary transition-colors leading-tight">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-muted font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}
            />
          </div>
        ) : (
          /* Reduced motion fallback: Clean wrapping chips */
          <div className="max-w-content mx-auto px-4 sm:px-6 flex flex-wrap gap-2.5 justify-center">
            {DIGITAL_MARKETING_TOOLS.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface border border-line shadow-xs"
              >
                <span className="w-6 h-6 flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <span className="text-xs font-bold text-deep">{item.name}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─── 5. DETAILED SYLLABUS (MODULEACCORDION + STICKY OVERVIEW CARD - B5 FIX) ─── */}
      <section id="syllabus" className="py-12 sm:py-20 bg-soft/30 scroll-mt-[88px]">
        <div className="max-w-content mx-auto px-4 sm:px-6">
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
            <div className="lg:col-span-4 space-y-6">
              <CourseOverviewCard
                course={course}
                whatsappMessage={encodeURIComponent(
                  `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch timings, fee details, and book a free demo session?`
                )}
                brochurePath="/assets/Infodesk_Computer_Education.pdf"
                className="sticky lg:top-[92px]"
              />

              {/* React Bits Folder: Interactive Course Certificate & Credentials */}
              {effectsConfig.digitalMarketingFolder && (
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

      {/* ─── 6. 6-MONTH CAMPAIGN TIMELINE (LEARNING CURVE BREAKDOWN) ─── */}
      <section id="timeline" className="py-12 sm:py-20 bg-surface border-t border-line/70 scroll-mt-[88px]">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft border border-line text-xs font-semibold text-primary">
              <Calendar size={13} />
              <span>6 Months + Job Training</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
              The 6-month campaign learning curve.
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Step through each month to see the live marketing assets, campaigns, and agency deliverables you will build.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Month Tabs Navigation */}
            <div className="flex items-center justify-between gap-1 sm:gap-2 p-1.5 bg-soft/60 border border-line/60 rounded-2xl mb-8 overflow-x-auto scrollbar-none">
              {MONTHLY_TIMELINE.map((m, idx) => {
                const isSelected = activeMonthIndex === idx;
                return (
                  <button
                    key={m.month}
                    type="button"
                    onClick={() => setActiveMonthIndex(idx)}
                    className={`relative flex-1 min-w-[90px] sm:min-w-[110px] py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
                      isSelected
                        ? 'text-white'
                        : 'text-ink/75 hover:text-deep hover:bg-white/60'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeMonthGlider"
                        className="absolute inset-0 bg-primary rounded-xl shadow-md"
                        transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10 block">{m.shortLabel}</span>
                    <span className={`relative z-10 block text-[10px] font-normal truncate mt-0.5 ${isSelected ? 'text-white/80' : 'text-muted'}`}>
                      {m.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Month Detail Card */}
            <AnimatePresence mode="wait">
              {(() => {
                const currentMonth = MONTHLY_TIMELINE[activeMonthIndex];
                return (
                  <motion.div
                    key={currentMonth.month}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className="bg-white rounded-[24px] border border-line/80 shadow-card p-6 sm:p-8 space-y-6"
                  >
                    {/* Header: Badge, Month Number & Headline */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-line/60">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                            Month {currentMonth.month} of 6
                          </span>
                          <span className="text-xs font-semibold text-muted">
                            {currentMonth.badge}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-deep font-heading">
                          {currentMonth.title}
                        </h3>
                      </div>
                      {/* Jump to Syllabus Button */}
                      <button
                        type="button"
                        onClick={() => handleOpenModule(currentMonth.linkedModuleIndex)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-soft text-primary hover:bg-primary hover:text-white transition-all text-xs font-bold border border-primary/20 shrink-0 cursor-pointer group"
                      >
                        <span>Inspect in syllabus</span>
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Headline statement */}
                    <p className="text-base sm:text-lg font-semibold text-deep leading-snug">
                      "{currentMonth.headline}"
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {currentMonth.description}
                    </p>

                    {/* Main Content Grid: Deliverables on Left, Modules & Tools on Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                      {/* Left: Deliverables Checklist (7 cols) */}
                      <div className="lg:col-span-7 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                          Key Campaign Deliverables
                        </h4>
                        <div className="space-y-2.5">
                          {currentMonth.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-soft/40 border border-line/50 text-xs text-ink/90 leading-relaxed"
                            >
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Modules, Tools & Milestone (5 cols) */}
                      <div className="lg:col-span-5 space-y-4">
                        {/* Brochure Modules Covered */}
                        <div className="p-4 rounded-xl bg-surface border border-line/70 space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                            Brochure Modules Covered
                          </h4>
                          <div className="space-y-1.5">
                            {currentMonth.brochureModules.map((modName, mIdx) => (
                              <div key={mIdx} className="text-xs font-bold text-deep flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span>{modName}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Platforms Mastered */}
                        <div className="p-4 rounded-xl bg-surface border border-line/70 space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                            Platforms & Software
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {currentMonth.tools.map((toolName, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-lg bg-white border border-line/80 text-[11px] font-semibold text-deep shadow-2xs"
                              >
                                {toolName}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Milestone Card */}
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                            <Award size={14} />
                            <span>Monthly Milestone</span>
                          </div>
                          <p className="text-xs text-deep font-medium leading-relaxed">
                            {currentMonth.milestone}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation: Prev / Next Month Controls */}
                    <div className="pt-4 border-t border-line/60 flex items-center justify-between">
                      <button
                        type="button"
                        disabled={activeMonthIndex === 0}
                        onClick={() => setActiveMonthIndex((prev) => Math.max(0, prev - 1))}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          activeMonthIndex === 0
                            ? 'opacity-40 cursor-not-allowed text-muted'
                            : 'text-deep hover:bg-soft hover:text-primary cursor-pointer'
                        }`}
                      >
                        <ArrowLeft size={14} />
                        <span>Previous Month</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        {MONTHLY_TIMELINE.map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            type="button"
                            onClick={() => setActiveMonthIndex(dotIdx)}
                            aria-label={`Jump to Month ${dotIdx + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                              dotIdx === activeMonthIndex
                                ? 'bg-primary w-6'
                                : 'bg-line hover:bg-muted/60'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        disabled={activeMonthIndex === MONTHLY_TIMELINE.length - 1}
                        onClick={() => setActiveMonthIndex((prev) => Math.min(MONTHLY_TIMELINE.length - 1, prev + 1))}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          activeMonthIndex === MONTHLY_TIMELINE.length - 1
                            ? 'opacity-40 cursor-not-allowed text-muted'
                            : 'text-primary hover:bg-soft cursor-pointer'
                        }`}
                      >
                        <span>Next Month</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── 7. STUDENT STORIES (VERIFIED REVIEWS & STORIES) ─── */}
      <section id="stories" className="py-12 sm:py-20 bg-surface border-t border-line/70">
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

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS (SPOTLIGHTCARD - B8) ─── */}
      <section id="faqs" className="py-12 sm:py-20 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-deep font-heading">
              Frequently asked questions.
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Key details about the 6-month Digital Marketing curriculum, batches, and job training.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {DIGITAL_MARKETING_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return effectsConfig.digitalMarketingFaqSpotlight ? (
                <SpotlightCard
                  key={idx}
                  theme="light"
                  spotlightColor="rgba(36, 72, 201, 0.12)"
                  intensity={0.25}
                  proximity={100}
                  className="!p-0 !rounded-[22px] bg-white border border-line/80 shadow-card overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-deep font-heading pr-2">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-soft text-primary'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted leading-relaxed border-t border-line/40 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              ) : (
                <div
                  key={idx}
                  className="rounded-[22px] bg-white border border-line/80 shadow-card overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-deep font-heading pr-2">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'bg-primary text-white rotate-180' : 'bg-soft text-primary'
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-muted leading-relaxed border-t border-line/40 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 9. RELATED COURSES (PIXELCARD CARDS - B7 FIX) ─── */}
      <section id="related" className="py-12 sm:py-20 bg-surface border-t border-line/70">
        <div className="max-w-content mx-auto px-4 sm:px-6">
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

      {/* ─── 11. CLOSING DEMO BANNER (LASERFLOW IN LAZYMOUNT + STARBORDER BUTTON) ─── */}
      <ClosingDemoBanner
        title="Try a free demo class."
        description="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers."
        buttonText="Book your free demo session"
      />

      {/* ─── CERTIFICATE LIGHTBOX MODAL ─── */}
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
                    Job Training Letter
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
                        Digital Marketing &amp; Practical Job Training
                      </p>
                    </div>

                    {/* Course Details Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-line/60 text-xs">
                      <div>
                        <span className="text-muted block">Duration</span>
                        <span className="font-semibold text-deep">6 Months + Job Training</span>
                      </div>
                      <div>
                        <span className="text-muted block">Format</span>
                        <span className="font-semibold text-deep">In-Person &amp; Live Projects</span>
                      </div>
                      <div>
                        <span className="text-muted block">Curriculum</span>
                        <span className="font-semibold text-deep">10 Comprehensive Modules</span>
                      </div>
                      <div>
                        <span className="text-muted block">Accreditation</span>
                        <span className="font-semibold text-deep">Govt. Recognized · ISO 9001:2015</span>
                      </div>
                    </div>

                    {/* Modules Pills Grid */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
                        Verified Curriculum Modules (10)
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {DIGITAL_MARKETING_MODULES.map((m) => (
                          <span
                            key={m.number}
                            className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-md bg-soft text-primary border border-line/60"
                          >
                            {m.number}. {m.name || m.title}
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
                        Infodesk Computer Education · Industry Training Division
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                        Practical Job Training Certificate
                      </h4>
                      <p className="text-xs text-muted">
                        This certifies the satisfactory completion of practical job training on live marketing workflows
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-emerald-600 font-heading pt-1">
                        Live Campaign Execution &amp; Agency Projects
                      </p>
                    </div>

                    {/* Training Details Grid */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-line/60 text-xs">
                      <div>
                        <span className="text-muted block">Training Period</span>
                        <span className="font-semibold text-deep">6 Months Hands-On Labs</span>
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
                          <p className="font-bold text-deep">Search &amp; Technical SEO</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            Google Search Console, keyword finalization, schema markup &amp; on-page optimization.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Paid Ads &amp; Conversion Setup</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            Google Ads targeting, conversion tracking, ad optimization &amp; client closing techniques.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Social Media &amp; Funnels</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            Lead generation landing pages, funnel-based strategy, push marketing &amp; brand building.
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-soft/50 border border-line/60 space-y-1">
                          <p className="font-bold text-deep">Content, CMS &amp; Growth</p>
                          <p className="text-muted text-[11px] leading-relaxed">
                            WordPress management, blogging traffic, WhatsApp marketing &amp; conversion rate optimization.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Seals & Signatures */}
                    <div className="flex items-center justify-between pt-4 border-t border-line/50 text-[11px] text-muted">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={24} className="text-emerald-500" />
                        <div>
                          <p className="font-bold text-deep leading-none">Job Training Certified</p>
                          <p className="text-[10px]">Practical Performance Approved</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-deep leading-none">Industry Training Directorate</p>
                        <p className="text-[10px]">Infodesk Centers</p>
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
                    className="p-5 sm:p-8 rounded-[16px] border-2 border-indigo-500/20 bg-white relative shadow-sm space-y-6"
                  >
                    {/* Decorative Corners */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500/40 pointer-events-none" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-500/40 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-indigo-500/40 pointer-events-none" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-500/40 pointer-events-none" />

                    <div className="text-center space-y-1">
                      <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest font-heading">
                        Infodesk Computer Education · Academic Board
                      </p>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-deep font-heading">
                        Curriculum Performance Transcript
                      </h4>
                      <p className="text-xs text-muted">
                        Official verification of modules and topics completed under the 6-month curriculum
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-indigo-600 font-heading pt-1">
                        10 Modules · 67 Topics Verified
                      </p>
                    </div>

                    {/* Summary Metrics */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-line/60 text-center">
                      <div className="p-2 rounded-lg bg-soft/40">
                        <span className="text-lg font-bold text-deep block">10</span>
                        <span className="text-[11px] text-muted">Modules</span>
                      </div>
                      <div className="p-2 rounded-lg bg-soft/40">
                        <span className="text-lg font-bold text-deep block">67</span>
                        <span className="text-[11px] text-muted">Topics Covered</span>
                      </div>
                      <div className="p-2 rounded-lg bg-soft/40">
                        <span className="text-lg font-bold text-deep block">6 Mos</span>
                        <span className="text-[11px] text-muted">+ Job Training</span>
                      </div>
                    </div>

                    {/* 10 Module List */}
                    <div className="space-y-2">
                      <p className="text-[11px] font-bold text-muted uppercase tracking-wider">
                        Module-by-Module Verification
                      </p>
                      <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1 text-xs">
                        {DIGITAL_MARKETING_MODULES.map((m) => (
                          <div
                            key={m.number}
                            className="p-2 rounded-lg bg-soft/30 border border-line/50 flex items-center justify-between"
                          >
                            <span className="font-semibold text-deep">
                              {m.number}. {m.name || m.title}
                            </span>
                            <span className="text-[11px] font-medium text-primary">
                              {m.topics && m.topics.length > 0 ? `${m.topics.length} topics` : 'Paid search reach'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Seals & Signatures */}
                    <div className="flex items-center justify-between pt-4 border-t border-line/50 text-[11px] text-muted">
                      <div className="flex items-center gap-2">
                        <Award size={24} className="text-indigo-600" />
                        <div>
                          <p className="font-bold text-deep leading-none">ISO 9001:2015</p>
                          <p className="text-[10px]">Academic Standards Compliant</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-deep leading-none">Office of Academic Records</p>
                        <p className="text-[10px]">Mumbai Board</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="p-4 sm:p-5 border-t border-line/60 bg-surface flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <a
                    href="/assets/Infodesk_Computer_Education.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-muted hover:text-deep hover:bg-soft transition-colors border border-line/60"
                  >
                    <FileDown size={14} />
                    <span>Brochure (PDF)</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20 cursor-pointer"
                  >
                    <Printer size={14} />
                    <span>Print credential</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsCertModalOpen(false)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-full text-xs font-semibold text-muted hover:text-deep hover:bg-soft transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <Button
                    to="/contact"
                    size="sm"
                    variant="primary"
                    className="flex-1 sm:flex-none !px-5"
                    onClick={() => setIsCertModalOpen(false)}
                  >
                    Book a free demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
