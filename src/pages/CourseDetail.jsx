import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Award,
  ArrowLeft,
  FileDown,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Terminal,
  Database,
  BarChart3,
  Cpu,
  Bot,
  Rocket,
  ArrowRight,
  FileText,
  Activity,
  Workflow,
  ShieldAlert,
  Server,
  Lock,
  Tag,
  BookOpen,
  Star,
  Quote,
} from 'lucide-react';
import { courses } from '../data/courses';
import { branches } from '../data/branches';
import { testimonials } from '../data/testimonials';
import ModuleAccordion from '../components/ModuleAccordion';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import ScrollReveal from '../components/ScrollReveal';

// React Bits components
import Particles from '../components/Particles';
import Noise from '../components/Noise';
import GradientText from '../components/GradientText';
import TextType from '../components/TextType';
import DecryptedText from '../components/DecryptedText';
import CountUp from '../components/CountUp';
import CardSwap from '../components/CardSwap';
import StarBorder from '../components/StarBorder';
import SpotlightCard from '../components/SpotlightCard';
import FlipCard from '../components/FlipCard';
import ElectricBorder from '../components/ElectricBorder';
import Threads from '../components/Threads';
import LogoLoop from '../components/LogoLoop';
import ScrollVelocity from '../components/ScrollVelocity';
import AnimatedContent from '../components/AnimatedContent';
import LazyMount from '../components/common/LazyMount';

import {
  effectsConfig,
  isTouchDevice,
  prefersReducedMotion,
  isSaveData,
} from '../config/effects';

// ─── 13 DATA SCIENCE SYLLABUS SOFTWARE TOOLS FOR LOGOLOOP ───
const DATA_SCIENCE_SOFTWARE = [
  {
    name: 'Python',
    category: 'Programming & ML',
    icon: (
      <svg viewBox="0 0 128 128" className="w-7 h-7" aria-hidden="true">
        <path fill="#387eb8" d="M63.7 3.5c-30.8 0-28.9 13.4-28.9 13.4l.1 13.9h29.5v4.2H23.5S3.5 32.7 3.5 63.6s17.5 30 17.5 30h10.4v-14.6s-.6-17.5 17.2-17.5h29.3s16.3.3 16.3-15.8V19.3S96.8 3.5 63.7 3.5zm-16.1 9.4c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z" />
        <path fill="#ffe873" d="M64.3 124.5c30.8 0 28.9-13.4 28.9-13.4l-.1-13.9H63.6V93h40.9s20 2.3 20-28.6-17.5-30-17.5-30H116.6v14.6s.6 17.5-17.2 17.5H70.1s-16.3-.3-16.3 15.8v20.4s-2.6 15.8 30.5 15.8zm16.1-9.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z" />
      </svg>
    ),
  },
  {
    name: 'NumPy',
    category: 'Vector Computing',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#013243" />
        <path d="M7 23V9l5 9V9h3v14l-5-9v9H7zm11 0V9h5.5c2.5 0 4.5 1.8 4.5 4.5s-2 4.5-4.5 4.5H21v5h-3zm3-7.5h2.2c1.3 0 2.3-.9 2.3-2s-1-2-2.3-2H21v4z" fill="#4dabcf" />
      </svg>
    ),
  },
  {
    name: 'pandas',
    category: 'Data Wrangling',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#150458" />
        <rect x="7" y="10" width="3.5" height="12" rx="1.5" fill="#e70488" />
        <rect x="12.5" y="6" width="3.5" height="20" rx="1.5" fill="#ffffff" />
        <rect x="18" y="12" width="3.5" height="14" rx="1.5" fill="#00a3e0" />
        <rect x="23.5" y="8" width="3.5" height="11" rx="1.5" fill="#ffca00" />
      </svg>
    ),
  },
  {
    name: 'Seaborn',
    category: 'Statistical Viz',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#eef3f8" stroke="#d5e0ea" strokeWidth="1" />
        <path d="M6 22c4-2 7-12 11-12s5 8 9 4" stroke="#4c72b0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M6 25c4-1 8-6 12-6s4 3 8 1" stroke="#55a868" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="2 2" />
        <circle cx="17" cy="10" r="2" fill="#c44e52" />
        <circle cx="21" cy="18" r="2" fill="#8172b2" />
      </svg>
    ),
  },
  {
    name: 'Matplotlib',
    category: 'Plotting & Graphics',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#11557c" />
        <circle cx="16" cy="16" r="9" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
        <path d="M16 7v18M7 16h18" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
        <path d="M9 20l4-7 5 5 5-9" stroke="#ffa15a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Scikit-Learn',
    category: 'Predictive Modeling',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="16" cy="16" r="11" fill="#3499cd" />
        <path d="M16 5a11 11 0 0 1 11 11c0 3-1.2 5.8-3.2 7.8L16 16V5z" fill="#f7931e" />
        <circle cx="16" cy="16" r="4" fill="#ffffff" />
        <text x="16" y="18.5" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#013243" fontFamily="system-ui, sans-serif">sk</text>
      </svg>
    ),
  },
  {
    name: 'Generative AI',
    category: 'LLMs & Prompting',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <defs>
          <linearGradient id="genAiIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7928ca" />
            <stop offset="50%" stopColor="#ff0080" />
            <stop offset="100%" stopColor="#0070f3" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" fill="url(#genAiIconGrad)" />
        <path d="M16 6l2.3 6.2L24.5 14.5l-6.2 2.3L16 23l-2.3-6.2L7.5 14.5l6.2-2.3L16 6z" fill="#ffffff" />
        <path d="M23 19l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" fill="#ffffff" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'Streamlit',
    category: 'Data Web Apps',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M16 8l6.5 13.5-4.5-2-2 3-2.5-2.8-4.5 1.3L16 8z" fill="#ff4b4b" />
      </svg>
    ),
  },
  {
    name: 'Alteryx',
    category: 'Self-Service ETL',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#004b87" />
        <path d="M16 7a9 9 0 0 0-7.8 13.5l3.2-1.8A5.3 5.3 0 1 1 16 21.3v3.7A9 9 0 1 0 16 7z" fill="#ffffff" />
        <circle cx="16" cy="16" r="3.2" fill="#00d2c4" />
      </svg>
    ),
  },
  {
    name: 'Power BI',
    category: 'BI & Dashboards',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#262626" />
        <rect x="7" y="16" width="4.5" height="10" rx="1" fill="#f2c811" />
        <rect x="13.5" y="11" width="4.5" height="15" rx="1" fill="#f2c811" />
        <rect x="20" y="6" width="4.5" height="20" rx="1" fill="#f2c811" />
      </svg>
    ),
  },
  {
    name: 'SQL Server',
    category: 'Enterprise DB',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#cc292b" />
        <ellipse cx="16" cy="10" rx="8" ry="3" fill="#ffffff" opacity="0.95" />
        <path d="M8 10v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#ffffff" strokeWidth="1.6" fill="none" opacity="0.9" />
        <path d="M8 16v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#ffffff" strokeWidth="1.6" fill="none" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: 'Advanced Excel',
    category: 'Analytics & Models',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#107c41" />
        <path d="M11.5 10l3.5 5.5-3.5 5.5h2.5l2.2-3.6 2.2 3.6h2.5l-3.5-5.5 3.5-5.5h-2.5l-2.2 3.6-2.2-3.6h-2.5z" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: 'Informatica',
    category: 'Data Governance',
    icon: (
      <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#0b1b3d" />
        <path d="M16 6l8 8-3.5 3.5-4.5-4.5V25h-3.5V13L8 16.5 6.5 15l9.5-9z" fill="#ff4d00" />
      </svg>
    ),
  },
];

// ─── 5 WORKFLOW STAGES ───
const WORKFLOW_STAGES = [
  {
    step: '01',
    title: 'Collect and clean',
    explanation: 'Read structured/unstructured files and cleanse dirty enterprise data.',
    moduleIndex: 2,
    moduleLabel: 'Open module 03',
    topics: ['Pandas: reading CSV/Excel/SQL', 'Missing value analysis & treatment', 'Merging & joining tables', 'Groupby aggregations'],
  },
  {
    step: '02',
    title: 'Explore and visualize',
    explanation: 'Uncover statistical correlations, distributions, and behavioral trends.',
    moduleIndex: 3,
    moduleLabel: 'Open module 04',
    topics: ['Matplotlib customized axes', 'Seaborn distribution plots', 'Categorical heatmaps', 'Regression analysis plots'],
  },
  {
    step: '03',
    title: 'Build models',
    explanation: 'Train, evaluate, cross-validate, and hyperparameter-tune ML models.',
    moduleIndex: 4,
    moduleLabel: 'Open module 05',
    topics: ['Feature engineering & scaling', 'Supervised regression & classification', 'Cross-validation pipelines', 'Ensemble Random Forests'],
  },
  {
    step: '04',
    title: 'Generative AI',
    explanation: 'Synthesize new text, images, and domain solutions with generative networks.',
    moduleIndex: 5,
    moduleLabel: 'Open module 06',
    topics: ['Variational Autoencoders (VAEs)', 'Generative Adversarial Networks (GANs)', 'Text & code generation', 'Multimodal style transfer'],
  },
  {
    step: '05',
    title: 'Share and deploy',
    explanation: 'Deliver interactive live data applications and executive dashboards.',
    moduleIndex: 6,
    moduleLabel: 'Open module 07',
    topics: ['Streamlit live web apps', 'Power BI automated dashboards', 'Interactive KPI widgets', 'Model deployment pipelines'],
  },
];

// ─── 4 INFORMATICA GOVERNANCE TRACKS ───
const GOVERNANCE_TRACKS = [
  {
    title: 'Informatica Administrator',
    description: 'Enterprise platform setup and infrastructure management.',
    topics: ['Administrator console operations', 'Domain architecture & nodes', 'Service manager configuration', 'User security & role privileges'],
    icon: Server,
  },
  {
    title: 'Data Classification',
    description: 'Automated data identification and sensitive asset security.',
    topics: ['Classification rule design', 'Data profiling & discovery', 'Sensitive data tagging', 'Compliance audit preparation'],
    icon: Tag,
  },
  {
    title: 'Data Integration',
    description: 'High-throughput enterprise pipelines and transformations.',
    topics: ['ETL mapping workflows', 'Source-to-target pipelines', 'Connector frameworks', 'Transformation logic debugging'],
    icon: Workflow,
  },
  {
    title: 'Data Glossary',
    description: 'Centralized business term definitions and lineage tracing.',
    topics: ['Business term governance', 'End-to-end lineage tracing', 'Metadata catalog administration', 'Data quality policies'],
    icon: BookOpen,
  },
];

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isDataScience = course.slug === 'data-science';

  // Semester course flag for non-data-science semester programs
  const isSemesterCourse = Boolean(
    course.semesters &&
      course.semesters.length > 0 &&
      ['adse', 'adgwa', 'adat', 'dca'].includes(course.slug)
  );

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Mobile detection for scroll pinning fallback
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Related courses (same category, excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, isDataScience ? 2 : 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch timings, fee details, and book a free demo session?`
  );

  // Smooth scroll and auto-expand target module accordion
  const handleStageClick = (moduleIndex) => {
    setOpenModuleIndices((prev) =>
      prev.includes(moduleIndex) ? prev : [...prev, moduleIndex]
    );
    const targetElement =
      document.getElementById(`module-${moduleIndex}`) ||
      document.getElementById('syllabus');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleModuleToggle = (index) => {
    setOpenModuleIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // ─── STANDARD COURSE LAYOUT (For all non-Data Science courses) ───
  if (!isDataScience) {
    return (
      <div className="space-y-16">
        {/* Standard Course Header */}
        <section className="bg-soft/60 border-b border-line/60 py-12 sm:py-16 relative overflow-hidden bg-grid-dots">
          <div className="max-w-content mx-auto px-6 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-muted mb-6 flex-wrap"
            >
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <Link to="/courses" className="hover:text-primary transition-colors">
                Courses
              </Link>
              <ChevronRight size={12} />
              <Link
                to={`/courses?category=${encodeURIComponent(course.category)}`}
                className="hover:text-primary transition-colors"
              >
                {course.category}
              </Link>
              <ChevronRight size={12} />
              <span className="font-semibold text-deep truncate max-w-[200px] sm:max-w-none">
                {course.title}
              </span>
            </nav>

            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white shadow-sm">
                  <Award size={13} />
                  <span>{course.level}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-line text-deep shadow-sm">
                  <Clock size={13} className="text-primary" />
                  <span>{course.duration}</span>
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background border border-line/70 text-muted">
                  {course.category}
                </span>
              </div>

              <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-deep tracking-tight leading-[1.1]">
                {course.title}
              </h1>

              <p className="text-muted text-base sm:text-lg leading-relaxed">
                {course.summary}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-deep">
                <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full border border-line/70 shadow-sm">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Govt. Recognized Certification</span>
                </span>
                <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full border border-line/70 shadow-sm">
                  <Briefcase size={14} className="text-primary" />
                  <span>100% Job Placement Assistance</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Content Layout */}
        <section className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-8">
              {/* Tools Covered Strip */}
              {course.tools && course.tools.length > 0 && (
                <div className="bg-surface border border-line/80 rounded-panel p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-muted flex items-center gap-1.5">
                      <Terminal size={15} className="text-primary" />
                      <span>Tools &amp; technologies mastered in this track</span>
                    </h3>
                    <span className="text-xs text-muted font-mono">
                      {effectsConfig.countUp && !prefersReducedMotion ? (
                        <CountUp to={course.tools.length} duration={1.2} />
                      ) : (
                        course.tools.length
                      )}{' '}
                      technologies
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {course.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-background border border-line text-sm font-semibold text-deep shadow-sm hover:border-primary/40 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {isSemesterCourse ? (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2 tracking-tight">
                      Your semester-by-semester roadmap
                    </h2>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      Official curriculum roadmap from our brochure. Each semester advances your practical capabilities from core fundamentals to job-ready production skills.
                    </p>
                  </div>

                  {isMobile ? (
                    <div className="space-y-4">
                      {course.semesters.map((sem) => (
                        <div
                          key={sem.number}
                          className="bg-surface rounded-panel border border-line p-6 shadow-sm space-y-4"
                        >
                          <div className="flex items-center justify-between border-b border-line/60 pb-3">
                            <div>
                              <span className="text-xs font-bold text-primary">
                                Semester {sem.number}
                              </span>
                              <h3 className="text-lg font-bold text-deep mt-0.5">
                                {sem.title}
                              </h3>
                            </div>
                            <span className="text-3xl font-extrabold text-primary/30 font-mono select-none">
                              0{sem.number}
                            </span>
                          </div>

                          <div className="space-y-3 pt-1">
                            {sem.modules.map((mod, mIdx) => (
                              <div key={mIdx} className="space-y-2">
                                {mod.name && (
                                  <p className="text-xs font-semibold text-deep/90 flex items-center gap-1.5">
                                    <Layers size={13} className="text-primary flex-shrink-0" />
                                    <span>{mod.name}</span>
                                  </p>
                                )}
                                <div className="flex flex-wrap gap-1.5">
                                  {mod.topics.map((topic, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="px-2.5 py-1 rounded-full bg-soft/75 border border-line/60 text-xs font-medium text-deep"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="pt-2">
                      <ScrollStack
                        useWindowScroll={true}
                        stackPosition="90px"
                        itemDistance={100}
                        itemStackDistance={24}
                        baseScale={0.85}
                        itemScale={0.03}
                        dimAmount={0.15}
                        blurAmount={0}
                        smoothScroll={false}
                      >
                        {course.semesters.map((sem) => (
                          <ScrollStackItem
                            key={sem.number}
                            itemClassName="!h-auto min-h-[220px] !bg-surface !rounded-[22px] !border-[1.5px] !border-line !shadow-card p-6 sm:p-8 flex flex-col justify-between"
                          >
                            <div className="space-y-4">
                              <div className="flex items-start justify-between gap-4 border-b border-line/50 pb-3">
                                <div>
                                  <span className="text-xs font-bold text-primary">
                                    Semester {sem.number}
                                  </span>
                                  <h3 className="text-xl sm:text-2xl font-bold text-deep mt-0.5">
                                    {sem.title}
                                  </h3>
                                </div>
                                <span className="text-4xl sm:text-5xl font-extrabold text-primary/30 font-mono select-none">
                                  0{sem.number}
                                </span>
                              </div>

                              <div className="space-y-4 pt-1">
                                {sem.modules.map((mod, mIdx) => (
                                  <div key={mIdx} className="space-y-2">
                                    {mod.name && (
                                      <p className="text-xs font-bold text-muted flex items-center gap-1.5">
                                        <Layers size={13} className="text-primary flex-shrink-0" />
                                        <span>{mod.name}</span>
                                      </p>
                                    )}
                                    <div className="flex flex-wrap gap-2">
                                      {mod.topics.map((topic, tIdx) => (
                                        <span
                                          key={tIdx}
                                          className="px-3 py-1.5 rounded-full bg-soft/70 border border-line/70 text-xs font-medium text-deep"
                                        >
                                          {topic}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </ScrollStackItem>
                        ))}
                      </ScrollStack>
                    </div>
                  )}
                </div>
              ) : (
                <div id="syllabus-modules" className="space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2">
                      Detailed syllabus.
                    </h2>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">
                      Step-by-step topic breakdown verified against our official curriculum. Practical hands-on lab sessions accompany every topic.
                    </p>
                  </div>
                  {course.modules && (
                    <ModuleAccordion
                      modules={course.modules}
                      defaultOpenIndex={0}
                      openIndices={openModuleIndices}
                      onToggle={handleModuleToggle}
                      useSpotlight={false}
                    />
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Sticky Overview Card */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold text-muted">
                    Course overview
                  </span>
                  <p className="text-xl font-bold text-deep mt-1">{course.title}</p>
                </div>

                <div className="space-y-3 py-3 border-y border-line/60 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Duration</span>
                    <span className="font-semibold text-deep">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Format</span>
                    <span className="font-semibold text-deep">Small batches, in-person</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Locations</span>
                    <span className="font-semibold text-deep">{branches.length} Mumbai branches</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted">Placement Support</span>
                    <span className="font-semibold text-emerald-600">100% job assistance</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button to="/contact" size="md" variant="primary" className="w-full">
                    Book a free demo
                  </Button>
                  <Button
                    href={`https://wa.me/919769445334?text=${whatsappMessage}`}
                    size="md"
                    variant="ghost"
                    className="w-full"
                    icon={<MessageCircle size={18} className="text-[#25D366]" />}
                  >
                    Chat on WhatsApp
                  </Button>
                  <a
                    href="/assets/Infodesk_Computer_Education.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50"
                  >
                    <FileDown size={15} />
                    <span>Download official brochure (PDF)</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-line/40 text-xs text-muted space-y-2">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Flexible morning, evening &amp; weekend timings</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Extra practice lab hours with mentor guidance</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>Personalized 1-on-1 doubt clearing sessions</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related courses */}
        {relatedCourses.length > 0 && (
          <section className="max-w-content mx-auto px-6 pt-10">
            <ScrollReveal>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-deep">
                    Related courses in {course.category}.
                  </h3>
                  <p className="text-muted text-sm mt-1">
                    Compare other industry-curated curriculums in this track.
                  </p>
                </div>
                <Link
                  to={`/courses?category=${encodeURIComponent(course.category)}`}
                  className="text-sm font-semibold text-primary hover:underline hidden sm:inline"
                >
                  View all in track
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((rel) => (
                  <CourseCard key={rel.slug} course={rel} />
                ))}
              </div>
            </ScrollReveal>
          </section>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* ─── 1. HERO (FULL-BLEED DEEP BLUE BAND, MIN-HEIGHT 80VH) ─── */}
      <section
        id="overview"
        className="relative bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white min-h-[80vh] flex flex-col justify-between pt-14 pb-10 overflow-hidden"
      >
        {/* Full-bleed Absolute Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Particles Constellation */}
          {effectsConfig.dataScienceHeroParticles && (
            <LazyMount
              isCanvasOrWebGL={true}
              fallback={
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138]"
                  aria-hidden="true"
                />
              }
              className="!absolute inset-0 w-full h-full"
            >
              <Particles
                connections={true}
                connectionDistance={120}
                particleColors={['#a5d8ff', '#4a6df0', '#ffffff']}
                particleCount={isMobile ? 50 : 160}
                particleBaseSize={70}
                glow={0.6}
                speed={0.08}
                twinkle={0.3}
                hoverEffect="parallax"
                particleHoverFactor={0.5}
                clickBurst={false}
                className="w-full h-full pointer-events-none"
              />
            </LazyMount>
          )}

          {/* Faint CSS Grid Line Pattern (4% opacity) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none"
          />

          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
            <Noise opacity={0.03} />
          </div>

          {/* Left-to-right contrast protection overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#071138]/95 via-[#0b1a52]/80 to-transparent pointer-events-none"
          />
        </div>

        {/* Hero Content Container (max-width 1200px) */}
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            {/* Column 1 (Left 55%): Text & Action Block */}
            <div className="space-y-5">
              {/* Breadcrumb Navigation (14px, #a5d8ff) */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-[14px] text-[#a5d8ff] flex-wrap"
              >
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={13} />
                <Link to="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
                <ChevronRight size={13} />
                <Link
                  to={`/courses?category=${encodeURIComponent(course.category)}`}
                  className="hover:text-white transition-colors"
                >
                  {course.category}
                </Link>
                <ChevronRight size={13} />
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                  {course.title}
                </span>
              </nav>

              {/* Glass Outline Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.18] text-[#a5d8ff] backdrop-blur-sm shadow-sm">
                  <Award size={13} className="text-white" />
                  <span>{course.level}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.08] border border-white/[0.18] text-[#a5d8ff] backdrop-blur-sm shadow-sm">
                  <Clock size={13} className="text-[#a5d8ff]" />
                  <span>{course.duration}</span>
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.15] text-white/80">
                  {course.category}
                </span>
              </div>

              {/* Very Large H1 with GradientText: clamp(52px, 6.4vw, 96px), line-height 1.02 */}
              <h1 className="text-[clamp(52px,6.4vw,96px)] font-bold tracking-tight leading-[1.02] text-white font-heading">
                {effectsConfig.dataScienceGradientText && !prefersReducedMotion ? (
                  <GradientText
                    colors={['#a5d8ff', '#ffffff', '#4a6df0']}
                    animationSpeed={6}
                    followPointer={false}
                    className="inline-block"
                  >
                    {course.title}
                  </GradientText>
                ) : (
                  course.title
                )}
              </h1>

              {/* Subtitle (20px, #c3cbf2, max-width 34em) */}
              <p className="text-[#c3cbf2] text-lg sm:text-[20px] leading-relaxed max-w-[34em]">
                {course.summary}
              </p>

              {/* Monospace Code Pill with TextType (dark glass, ~520px) */}
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#071138]/90 border border-[#4a6df0]/40 backdrop-blur-md shadow-inner font-mono text-xs sm:text-sm text-white w-full max-w-[520px]">
                <span className="text-[#4a6df0] font-bold shrink-0">&gt;&gt;&gt;</span>
                <div className="flex-1 truncate">
                  {effectsConfig.dataScienceTextType && !prefersReducedMotion ? (
                    <TextType
                      text={[
                        'df.groupby("city").mean()',
                        'model.fit(X_train, y_train)',
                        'st.line_chart(df)',
                      ]}
                      cursorColor="#4a6df0"
                      typingSpeed={40}
                      pauseDuration={2400}
                      loop={true}
                    />
                  ) : (
                    <span>df.groupby(&quot;city&quot;).mean()</span>
                  )}
                </div>
              </div>

              {/* Action Buttons: StarBorder CTA + Ghost Button (>= 48px tall) */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
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
                  className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-7 py-3 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Book a free demo
                </StarBorder>

                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full text-xs sm:text-sm font-bold text-white hover:text-white bg-white/[0.08] hover:bg-white/[0.16] border-[1.5px] border-[#a5d8ff] backdrop-blur-sm transition-colors"
                >
                  <FileDown size={16} />
                  <span>Download brochure</span>
                </a>
              </div>

              {/* Glass-style Trust Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/90">
                <span className="flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.18] px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Govt. Recognized Certification</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.18] px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
                  <Briefcase size={14} className="text-[#a5d8ff]" />
                  <span>100% Job Placement Assistance</span>
                </span>
              </div>
            </div>

            {/* Column 2 (Right 45%): 3D CardSwap Stack (Desktop) / Static Code Card (< 1024px) */}
            <div className="flex justify-center items-center relative">
              {/* Radial glow behind right column */}
              <div
                className="absolute w-[440px] h-[360px] bg-[#4a6df0]/20 rounded-full blur-[80px] pointer-events-none -z-0"
                aria-hidden="true"
              />

              {/* Desktop: CardSwap rotating in 3D stack (520 x 440 container, 420 x 270 cards) */}
              <div className="hidden lg:block w-[520px] h-[440px] max-w-full relative z-10">
                {effectsConfig.dataScienceCardSwap && !prefersReducedMotion ? (
                  <CardSwap
                    width={420}
                    height={270}
                    visibleCards={3}
                    cardDistance={48}
                    verticalDistance={48}
                    depth={75}
                    skewAmount={5}
                    delay={5000}
                    pauseOnHover={true}
                    cardRadius={22}
                    theme="dark"
                  >
                    {/* Card 1: Code card "model.py" */}
                    <div className="w-full h-full bg-[#0b1a52]/95 border border-[#a5d8ff]/30 rounded-[22px] p-6 font-mono text-xs flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                        </div>
                        <span className="text-[#a5d8ff] font-bold">model.py</span>
                        <span className="text-[10px] text-white/60">Python 3.12</span>
                      </div>
                      <div className="space-y-1.5 text-white/90 py-2">
                        <p><span className="text-[#4a6df0]">import</span> pandas <span className="text-[#4a6df0]">as</span> pd</p>
                        <p><span className="text-[#4a6df0]">from</span> sklearn.ensemble <span className="text-[#4a6df0]">import</span> RandomForestClassifier</p>
                        <p className="text-white/50"># Train predictive model</p>
                        <p>model = RandomForestClassifier()</p>
                        <p className="text-emerald-400 font-semibold">model.fit(X_train, y_train)</p>
                      </div>
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] text-[#a5d8ff]">
                        <span>Accuracy: 94.8%</span>
                        <span className="text-emerald-400">status: production ready</span>
                      </div>
                    </div>

                    {/* Card 2: Chart card "Sample data" */}
                    <div className="w-full h-full bg-[#0b1847]/95 border border-[#a5d8ff]/30 rounded-[22px] p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-mono text-xs text-[#a5d8ff] font-bold">training_loss.svg</span>
                        <span className="text-[10px] bg-white/10 px-2.5 py-0.5 rounded text-white/70">Sample data</span>
                      </div>
                      {/* SVG line and bar chart with axis ticks */}
                      <div className="py-1">
                        <svg viewBox="0 0 360 110" className="w-full h-24 select-none">
                          {/* Grid & Axis */}
                          <line x1="30" y1="90" x2="340" y2="90" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
                          <line x1="30" y1="20" x2="30" y2="90" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
                          <text x="15" y="25" fill="#a5d8ff" fontSize="9" fontFamily="monospace">1.0</text>
                          <text x="15" y="60" fill="#a5d8ff" fontSize="9" fontFamily="monospace">0.5</text>
                          <text x="15" y="92" fill="#a5d8ff" fontSize="9" fontFamily="monospace">0.0</text>
                          {/* Mini validation bars */}
                          <rect x="50" y="70" width="14" height="20" fill="#4a6df0" opacity="0.4" rx="2" />
                          <rect x="120" y="55" width="14" height="35" fill="#4a6df0" opacity="0.4" rx="2" />
                          <rect x="190" y="42" width="14" height="48" fill="#4a6df0" opacity="0.4" rx="2" />
                          <rect x="260" y="30" width="14" height="60" fill="#4a6df0" opacity="0.4" rx="2" />
                          {/* Curves */}
                          <path
                            d="M 35 85 Q 110 75 180 40 T 330 18"
                            fill="none"
                            stroke="#4a6df0"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M 35 90 Q 100 85 180 55 T 330 30"
                            fill="none"
                            stroke="#a5d8ff"
                            strokeWidth="2"
                            strokeDasharray="4,4"
                          />
                          <circle cx="330" cy="18" r="4.5" fill="#a5d8ff" />
                        </svg>
                      </div>
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] text-white/80 font-mono">
                        <span>Epoch: 100/100 · Loss: 0.042</span>
                        <span className="text-emerald-400 font-semibold">Validation: 96.2%</span>
                      </div>
                    </div>

                    {/* Card 3: Pipeline card "Illustration" */}
                    <div className="w-full h-full bg-[#07133d]/95 border border-[#a5d8ff]/30 rounded-[22px] p-6 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-mono text-xs text-[#a5d8ff] font-bold">pipeline_flow</span>
                        <span className="text-[10px] bg-white/10 px-2.5 py-0.5 rounded text-white/70">Illustration</span>
                      </div>
                      {/* 4 Connected Nodes with animated traveling dot */}
                      <div className="relative py-4">
                        <div className="absolute top-1/2 left-6 right-6 h-1 bg-gradient-to-r from-[#4a6df0] to-[#a5d8ff] -translate-y-1/2 -z-0 rounded-full" />
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 60">
                          <circle cx="45" cy="30" r="4" fill="#ffffff" className="animate-pulse">
                            <animate
                              attributeName="cx"
                              values="45;315;45"
                              dur="5s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                        <div className="flex items-center justify-between relative z-10 px-2">
                          {['Collect', 'Clean', 'Model', 'Deploy'].map((node, nIdx) => (
                            <div key={node} className="flex flex-col items-center gap-1.5">
                              <span className="w-8 h-8 rounded-full bg-[#0b1a52] border-2 border-[#a5d8ff] text-xs font-bold flex items-center justify-center text-white shadow-md">
                                0{nIdx + 1}
                              </span>
                              <span className="text-[11px] font-semibold text-white/95">{node}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-white/10 pt-2 text-[11px] text-[#a5d8ff] font-mono text-center">
                        Automated Data Pipeline • Production Ready
                      </div>
                    </div>
                  </CardSwap>
                ) : (
                  /* Reduced motion fallback for desktop */
                  <div className="w-full h-[270px] bg-[#0b1a52] border border-[#a5d8ff]/30 rounded-[22px] p-6 font-mono text-xs flex flex-col justify-between shadow-2xl">
                    <span className="text-[#a5d8ff] font-bold">model.py</span>
                    <p className="text-white">model = RandomForestClassifier()</p>
                    <span className="text-emerald-400">model.fit(X_train, y_train)</span>
                  </div>
                )}
              </div>

              {/* Mobile & Tablet (< 1024px): Clean static code card below text */}
              <div className="lg:hidden w-full max-w-[440px] bg-[#0b1a52]/95 border border-[#a5d8ff]/30 rounded-[22px] p-5 font-mono text-xs space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[#a5d8ff] font-bold">model.py</span>
                  <span className="text-[10px] text-white/60">Python 3.12</span>
                </div>
                <div className="space-y-1.5 text-white/90">
                  <p><span className="text-[#4a6df0]">import</span> pandas <span className="text-[#4a6df0]">as</span> pd</p>
                  <p><span className="text-[#4a6df0]">from</span> sklearn.ensemble <span className="text-[#4a6df0]">import</span> RandomForestClassifier</p>
                  <p>model = RandomForestClassifier()</p>
                  <p className="text-emerald-400 font-semibold">model.fit(X_train, y_train)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── GLASS STATS BAR (Inside Hero Along Bottom Edge, max-w-[1120px]) ─── */}
        <div className="max-w-[1120px] mx-auto w-full px-6 relative z-10 mt-8 lg:mt-10">
          <div className="bg-white/[0.06] border border-white/[0.14] backdrop-blur-md rounded-[22px] p-4 sm:p-6 shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.12] text-center">
            {/* 1. Months of training */}
            <div className="p-3 sm:p-4">
              <p className="text-3xl sm:text-[44px] font-bold text-white tracking-tight leading-none font-heading">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={12} duration={1.2} />
                ) : (
                  '12'
                )}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-2">
                Months of training
              </p>
            </div>

            {/* 2. Tools and technologies */}
            <div className="p-3 sm:p-4">
              <p className="text-3xl sm:text-[44px] font-bold text-white tracking-tight leading-none font-heading">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={course.tools.length} duration={1.2} />
                ) : (
                  course.tools.length
                )}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-2">
                Tools and technologies
              </p>
            </div>

            {/* 3. Modules */}
            <div className="p-3 sm:p-4 pt-4 lg:pt-4">
              <p className="text-3xl sm:text-[44px] font-bold text-white tracking-tight leading-none font-heading">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={course.modules ? course.modules.length : 12} duration={1.2} />
                ) : (
                  course.modules ? course.modules.length : 12
                )}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-2">
                Modules
              </p>
            </div>

            {/* 4. Mumbai branches */}
            <div className="p-3 sm:p-4 pt-4 lg:pt-4">
              <p className="text-3xl sm:text-[44px] font-bold text-white tracking-tight leading-none font-heading">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={branches.length} duration={1.2} />
                ) : (
                  branches.length
                )}
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#a5d8ff] mt-2">
                Mumbai branches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SOFTWARE LOGO LOOP (DIRECTLY UNDER HERO) ─── */}
      <section className="bg-soft border-y border-line/80 py-4 sm:py-5 overflow-hidden">
        {effectsConfig.dataScienceLogoLoop && !prefersReducedMotion ? (
          <div className="w-full max-w-full overflow-hidden">
            <LogoLoop
              logos={DATA_SCIENCE_SOFTWARE}
              ariaLabel="Softwares and tools used in the Data Science syllabus"
              speed={45}
              direction="left"
              gap={20}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutWidth={0.12}
              renderItem={(item) => (
                <div
                  key={item.name}
                  className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-2xl bg-surface border border-line/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all select-none group shrink-0"
                >
                  <span className="w-8 h-8 flex items-center justify-center shrink-0 drop-shadow-sm group-hover:scale-110 transition-transform">
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
          <div className="max-w-content mx-auto px-6 flex flex-wrap gap-2.5 justify-center">
            {DATA_SCIENCE_SOFTWARE.map((item) => (
              <div
                key={item.name}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-surface border border-line shadow-sm"
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

      {/* ─── 3. THE DATA SCIENCE WORKFLOW (FULL-WIDTH SCROLLSTACK) ─── */}
      <section id="workflow" className="py-16 max-w-content mx-auto px-6 scroll-mt-24">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-deep tracking-tight">
            The data science workflow
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            This is how a project flows, not the class order. Click any stage to inspect the curriculum module.
          </p>
        </div>

        {isMobile ? (
          /* Mobile vertical stack fallback to avoid pinning jank */
          <div className="space-y-4">
            {WORKFLOW_STAGES.map((stage) => (
              <div
                key={stage.step}
                className="bg-surface rounded-[22px] border border-line p-6 shadow-card space-y-4"
              >
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary font-mono">{stage.step}</span>
                    <h3 className="text-lg font-bold text-deep">{stage.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleStageClick(stage.moduleIndex)}
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    {stage.moduleLabel} &rarr;
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-muted">{stage.explanation}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {stage.topics.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full bg-soft/80 border border-line/70 text-xs font-medium text-deep">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop & Tablet: ScrollStack with window scroll pinning sitting below header */
          <ScrollStack
            useWindowScroll={true}
            stackPosition="80px"
            itemDistance={100}
            itemStackDistance={24}
            baseScale={0.88}
            itemScale={0.03}
            dimAmount={0.15}
            blurAmount={0}
            smoothScroll={false}
          >
            {WORKFLOW_STAGES.map((stage, sIdx) => {
              const bgTint = sIdx % 2 === 0 ? '!bg-[#fdfcf9]' : '!bg-[#f4f7fe]';
              return (
                <ScrollStackItem
                  key={stage.step}
                  itemClassName={`!h-auto min-h-[300px] ${bgTint} !rounded-[24px] !border-[1.5px] !border-line !shadow-card p-8 flex flex-col justify-between`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left: Numeral, Stage title, explanation */}
                    <div className="md:col-span-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl font-extrabold text-primary font-mono">
                          {stage.step}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted">
                          Pipeline stage
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-deep">
                        {stage.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {stage.explanation}
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => handleStageClick(stage.moduleIndex)}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-soft text-primary font-bold text-xs hover:bg-primary hover:text-white transition-colors"
                        >
                          <span>{stage.moduleLabel}</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Right: Topics chips with full untruncated names */}
                    <div className="md:col-span-7 space-y-3">
                      <span className="text-xs font-bold text-muted uppercase tracking-wider block">
                        Brochure topics covered
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {stage.topics.map((t) => (
                          <span
                            key={t}
                            className="px-3.5 py-2 rounded-full bg-surface border border-line text-xs sm:text-sm font-semibold text-deep shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        )}
      </section>

      {/* ─── 5. GENERATIVE AI BAND (DEEP BLUE WITH THREADS CANVAS) ─── */}
      <section className="relative bg-gradient-to-br from-[#0b1a52] via-[#13266f] to-[#071138] text-white py-16 sm:py-20 overflow-hidden">
        {/* Threads Canvas mounted through LazyMount */}
        {effectsConfig.dataScienceThreads && (
          <LazyMount
            isCanvasOrWebGL={true}
            fallback={
              <div
                className="absolute inset-0 bg-[#0b1a52] pointer-events-none"
                aria-hidden="true"
              />
            }
            className="absolute inset-0 pointer-events-none"
          >
            <Threads
              color={[0.29, 0.43, 0.94]}
              accentColor={[0.65, 0.85, 1.0]}
              amplitude={1.2}
              distance={0.3}
              enableMouseInteraction={false}
              lineCount={70}
              opacity={0.4}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </LazyMount>
        )}

        <div className="max-w-content mx-auto px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] text-xs font-semibold backdrop-blur-sm mb-4">
            <Bot size={14} />
            <span>Dedicated specialization track</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            {effectsConfig.dataScienceDecryptedText && !prefersReducedMotion ? (
              <DecryptedText
                text="Generative AI, hands on"
                animateOn="view"
                speed={40}
                className="inline-block"
              />
            ) : (
              'Generative AI, hands on'
            )}
          </h2>

          <p className="text-[#c3cbf2] text-sm sm:text-base mb-8">
            Build real generative pipelines from neural foundations to multimodal generation.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center">
            {[
              'Introduction to generative AI',
              'Basic concepts and applications',
              'GANs',
              'VAEs',
              'RNNs for generation',
              'Text generation',
              'Image generation',
              'Style transfer',
              'Music and audio generation',
            ].map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm shadow-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. DATA GOVERNANCE WITH INFORMATICA (4 SPOTLIGHTCARDS) ─── */}
      <section className="py-16 max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-deep tracking-tight">
            Data governance with Informatica
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            Master the enterprise standard for data quality, regulatory compliance, and metadata lifecycle management.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOVERNANCE_TRACKS.map((track) => {
            const Icon = track.icon;
            return (
              <SpotlightCard
                key={track.title}
                theme="light"
                spotlightColor="rgba(36, 72, 201, 0.12)"
                intensity={0.25}
                proximity={100}
                className="!p-6 !rounded-[22px] bg-surface border border-line/80 shadow-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-full bg-soft text-primary flex items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-bold text-deep leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed">
                    {track.description}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {track.topics.map((t) => (
                      <li key={t} className="flex items-start gap-1.5 text-xs text-ink/90 font-medium">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ─── 9. SYLLABUS AND ENROL (TWO COLUMNS) ─── */}
      <section id="syllabus" className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Syllabus Breakdown (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2">
                Detailed syllabus.
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Step-by-step topic breakdown verified against our official curriculum. Practical hands-on lab sessions accompany every topic.
              </p>
            </div>

            {course.modules && (
              <ModuleAccordion
                modules={course.modules}
                defaultOpenIndex={0}
                openIndices={openModuleIndices}
                onToggle={handleModuleToggle}
                useSpotlight={effectsConfig.dataScienceSpotlight}
              />
            )}
          </div>

          {/* Right Column: Sticky Enrollment Sidebar (4 cols) */}
          <aside id="enquire" className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6">
              <div>
                <span className="text-xs font-bold text-muted">
                  Course overview
                </span>
                <p className="text-xl font-bold text-deep mt-1">{course.title}</p>
              </div>

              {/* Specs */}
              <div className="space-y-3 py-3 border-y border-line/60 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Duration</span>
                  <span className="font-semibold text-deep">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Format</span>
                  <span className="font-semibold text-deep">Small batches, in-person</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Locations</span>
                  <span className="font-semibold text-deep">{branches.length} Mumbai branches</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Placement Support</span>
                  <span className="font-semibold text-emerald-600">100% job assistance</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Button to="/contact" size="md" variant="primary" className="w-full">
                  Book a free demo
                </Button>
                <Button
                  href={`https://wa.me/919769445334?text=${whatsappMessage}`}
                  size="md"
                  variant="ghost"
                  className="w-full"
                  icon={<MessageCircle size={18} className="text-[#25D366]" />}
                >
                  Chat on WhatsApp
                </Button>
                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50"
                >
                  <FileDown size={15} />
                  <span>Download official brochure (PDF)</span>
                </a>
              </div>

              {/* Trust bullets */}
              <div className="pt-2 border-t border-line/40 text-xs text-muted space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Flexible morning, evening &amp; weekend timings</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Extra practice lab hours with mentor guidance</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Personalized 1-on-1 doubt clearing sessions</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── 8. STUDENT TESTIMONIALS (AFTER DETAILED SYLLABUS) ─── */}
      <section id="testimonials" className="py-16 max-w-content mx-auto px-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft border border-primary/20 text-xs font-semibold text-primary mb-3">
            <Star size={13} className="text-amber-500 fill-amber-500" />
            <span>Verified student experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep tracking-tight">
            Student stories and reviews
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            Hear verified feedback from graduates who transformed their data and IT careers through our Mumbai batches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <SpotlightCard
              key={t.id}
              theme="light"
              spotlightColor="rgba(36, 72, 201, 0.12)"
              intensity={0.25}
              proximity={120}
              className="!p-6 sm:!p-7 !rounded-[22px] bg-surface border border-line/80 shadow-card flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* 5 Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span>Verified graduate</span>
                  </span>
                </div>

                <p className="text-ink/90 text-sm sm:text-[15px] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-line/60">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 shadow-sm shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-deep text-base truncate">{t.name}</h4>
                  <p className="text-xs text-primary font-semibold">Infodesk Graduate · Mumbai</p>
                  <p className="text-[11px] text-muted truncate">Brochure verified review</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/placements"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors group"
          >
            <span>Explore all 100+ placement success stories</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ─── 10. RELATED COURSES AS FLIPCARD ─── */}
      {relatedCourses.length > 0 && (
        <section className="max-w-content mx-auto px-6 py-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-deep">
              Related courses in {course.category}.
            </h3>
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
                    <h4 className="text-xl font-bold text-deep">{rel.title}</h4>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{rel.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-line/50 flex items-center justify-between text-xs text-primary font-bold">
                    <span>Click or tap to view syllabus</span>
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
                    <h4 className="text-lg font-bold text-white">{rel.title}</h4>
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
                <div key={rel.slug} className="h-[320px]">
                  <FlipCard
                    front={frontContent}
                    back={backContent}
                    width="100%"
                    height={320}
                    radius={22}
                    className="w-full h-full"
                    ariaLabel={`${rel.title} course details`}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ─── 11. CLOSING BANNER WITH ELECTRICBORDER ─── */}
      <section className="max-w-content mx-auto px-6 py-12">
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#13266f] to-[#071138] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Try a free demo class.
            </h3>
            <p className="text-[#c3cbf2] text-sm sm:text-base leading-relaxed">
              Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers.
            </p>
          </div>

          <div className="shrink-0">
            {effectsConfig.electricBorder && !prefersReducedMotion ? (
              <ElectricBorder
                color="#4a6df0"
                glowColor="#a5d8ff"
                intensity={0.6}
                className="rounded-full inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-4 rounded-full bg-primary text-white hover:bg-bright transition-colors shadow-lg"
                >
                  Book your free demo session
                </Link>
              </ElectricBorder>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-4 rounded-full bg-primary text-white hover:bg-bright transition-colors shadow-lg"
              >
                Book your free demo session
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
