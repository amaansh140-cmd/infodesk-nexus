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
} from 'lucide-react';
import { courses } from '../data/courses';
import { branches } from '../data/branches';
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
import RubberSegment from '../components/RubberSegment';
import SpotlightCard from '../components/SpotlightCard';
import FlipCard from '../components/FlipCard';
import ElectricBorder from '../components/ElectricBorder';
import GridScan from '../components/GridScan';
import Threads from '../components/Threads';
import ScrollVelocity from '../components/ScrollVelocity';
import AnimatedContent from '../components/AnimatedContent';
import LazyMount from '../components/common/LazyMount';

import {
  effectsConfig,
  isTouchDevice,
  prefersReducedMotion,
  isSaveData,
} from '../config/effects';

// ─── DETERMINISTIC 60-POINT ML DATASET (Seed 101) ───
function createDeterministicMLPoints() {
  let a = 101;
  const rng = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const points = [];
  // 30 points in Cluster A (center ~200, 140)
  for (let i = 0; i < 30; i++) {
    const r = rng() * 45 + 5;
    const th = rng() * Math.PI * 2;
    const x = Math.round(200 + Math.cos(th) * r);
    const y = Math.round(140 + Math.sin(th) * r);
    // Unsupervised partition: i < 15 cluster 0, 15..29 cluster 1
    const unsupCluster = i < 15 ? 0 : 1;
    points.push({ id: `a-${i}`, x, y, supervisedClass: 'A', unsupCluster });
  }

  // 30 points in Cluster B (center ~430, 220)
  for (let i = 0; i < 30; i++) {
    const r = rng() * 48 + 5;
    const th = rng() * Math.PI * 2;
    const x = Math.round(430 + Math.cos(th) * r);
    const y = Math.round(220 + Math.sin(th) * r);
    // Unsupervised partition: cluster 2
    points.push({ id: `b-${i}`, x, y, supervisedClass: 'B', unsupCluster: 2 });
  }

  // 15 Generative Synthetic Points
  const syntheticPoints = [];
  for (let j = 0; j < 15; j++) {
    const targetCluster = j % 2 === 0 ? 'A' : 'B';
    const cx = targetCluster === 'A' ? 200 : 430;
    const cy = targetCluster === 'A' ? 140 : 220;
    const r = rng() * 40 + 8;
    const th = rng() * Math.PI * 2;
    const x = Math.round(cx + Math.cos(th) * r);
    const y = Math.round(cy + Math.sin(th) * r);
    syntheticPoints.push({ id: `synth-${j}`, x, y, targetCluster });
  }

  return { points, syntheticPoints };
}

const STATIC_ML_DATA = createDeterministicMLPoints();

// ─── 6 WHAT YOU WILL MASTER DOMAINS ───
const MASTER_DOMAINS = [
  {
    title: 'Python and data handling',
    description: 'Foundations of programmatic data manipulation, indexing, slicing, and clean data wrangling.',
    topics: ['Python fundamentals', 'NumPy vectorization', 'Pandas Series & DataFrames', 'File I/O & missing data'],
    moduleIndex: 2, // Module 03 (Pandas)
    moduleLabel: 'Module 01 - 03',
    icon: Database,
  },
  {
    title: 'Data visualization',
    description: 'Translating complex statistical distributions into publication-ready visual intelligence.',
    topics: ['Matplotlib subplots', 'Seaborn distributions', 'Categorical & regression plots', 'Multi-panel storytelling'],
    moduleIndex: 3, // Module 04
    moduleLabel: 'Module 04',
    icon: BarChart3,
  },
  {
    title: 'Machine learning',
    description: 'Rigorous predictive modeling with Scikit-Learn from raw data to robust production inference.',
    topics: ['Supervised & unsupervised', 'Model evaluation & metrics', 'Cross-validation & tuning', 'Ensemble methods (RF & Boosting)'],
    moduleIndex: 4, // Module 05
    moduleLabel: 'Module 05',
    icon: Cpu,
  },
  {
    title: 'Generative AI',
    description: 'Modern generative architectures, neural generation, prompt engineering, and LLM foundations.',
    topics: ['GANs & VAEs', 'RNNs for text generation', 'Style transfer & multimodal', 'Prompting & LLM tooling'],
    moduleIndex: 5, // Module 06
    moduleLabel: 'Module 06',
    icon: Bot,
  },
  {
    title: 'Data tools and apps',
    description: 'Interactive dashboard engineering, enterprise relational querying, and business intelligence pipelines.',
    topics: ['Streamlit web applications', 'SQL Server database queries', 'Advanced Excel automation', 'Alteryx & Power BI BI'],
    moduleIndex: 6, // Module 07
    moduleLabel: 'Module 07 - 11',
    icon: Rocket,
  },
  {
    title: 'Data governance',
    description: 'Enterprise data lineage, regulatory security roles, metadata cataloging, and automated ETL architecture.',
    topics: ['Informatica Administrator', 'Data classification rules', 'ETL integration mappings', 'Business metadata glossary'],
    moduleIndex: 11, // Module 12
    moduleLabel: 'Module 12',
    icon: ShieldCheck,
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

  // Machine Learning interactive scatter mode
  const [mlMode, setMlMode] = useState('Supervised');

  // Sticky sub-navigation active section
  const [activeNavSection, setActiveNavSection] = useState('overview');

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

  // Scroll spy for sticky sub-nav
  useEffect(() => {
    if (!isDataScience) return;
    const sectionIds = ['overview', 'what-you-will-master', 'machine-learning', 'workflow', 'syllabus', 'enquire'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveNavSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDataScience]);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'what-you-will-master', label: 'Learn' },
    { id: 'machine-learning', label: 'Machine learning' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'enquire', label: 'Enquire' },
  ];

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
      {/* ─── STICKY PILL SUB-NAVIGATION (Data Science only) ─── */}
      {isDataScience && effectsConfig.dataSciencePillNav && (
        <nav
          aria-label="Course section navigation"
          className="sticky top-[72px] z-40 w-full py-2.5 bg-background/95 backdrop-blur-md border-b border-line/70 transition-all duration-200"
        >
          <div className="max-w-content mx-auto px-6 flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
            <span className="text-xs font-bold text-deep shrink-0 hidden md:inline">
              Data Science track
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 mx-auto md:mx-0">
              {navItems.map((item) => {
                const isActive = activeNavSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-muted hover:text-deep hover:bg-soft/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <a
              href="#enquire"
              className="hidden lg:inline-flex items-center text-xs font-bold text-primary hover:underline"
            >
              Enrollment options &rarr;
            </a>
          </div>
        </nav>
      )}

      {/* ─── 1. HERO (FULL-BLEED DEEP BLUE BAND, MIN-HEIGHT 80VH) ─── */}
      <section
        id="overview"
        className="relative bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white min-h-[80vh] flex items-center py-12 sm:py-20 overflow-hidden"
      >
        {/* Full-bleed Particles Constellation Background */}
        {effectsConfig.dataScienceHeroParticles && (
          <LazyMount
            isCanvasOrWebGL={true}
            fallback={
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] pointer-events-none"
                aria-hidden="true"
              />
            }
            className="absolute inset-0 pointer-events-none"
          >
            <Particles
              connections={true}
              connectionDistance={110}
              particleColors={['#4a6df0', '#a5d8ff', '#ffffff']}
              moveParticlesOnHover={false}
              clickBurst={false}
              particleCount={isMobile ? 28 : 65}
              particleBaseSize={75}
              speed={0.16}
              className="absolute inset-0 w-full h-full pointer-events-none"
            />
          </LazyMount>
        )}

        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
          aria-hidden="true"
        >
          <Noise opacity={0.03} />
        </div>

        {/* Left-to-right contrast protection overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0b1a52]/90 via-[#13266f]/70 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content Container (max-width 1120px) */}
        <div className="max-w-content mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Tightly spaced, large typography */}
            <div className="lg:col-span-7 space-y-5">
              {/* Breadcrumb Navigation */}
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-2 text-xs text-[#a5d8ff] flex-wrap"
              >
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight size={12} />
                <Link to="/courses" className="hover:text-white transition-colors">
                  Courses
                </Link>
                <ChevronRight size={12} />
                <Link
                  to={`/courses?category=${encodeURIComponent(course.category)}`}
                  className="hover:text-white transition-colors"
                >
                  {course.category}
                </Link>
                <ChevronRight size={12} />
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-none">
                  {course.title}
                </span>
              </nav>

              {/* Glass Outline Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] backdrop-blur-sm shadow-sm">
                  <Award size={13} className="text-white" />
                  <span>{course.level}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#a5d8ff] backdrop-blur-sm shadow-sm">
                  <Clock size={13} className="text-[#a5d8ff]" />
                  <span>{course.duration}</span>
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/80">
                  {course.category}
                </span>
              </div>

              {/* Very Large H1 with GradientText */}
              <h1 className="text-[clamp(48px,6.5vw,96px)] font-bold tracking-tight leading-[1.05] text-white">
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

              {/* Existing Subtitle in #c3cbf2 */}
              <p className="text-[#c3cbf2] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
                {course.summary}
              </p>

              {/* Monospace Code Pill with TextType */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#071138]/85 border border-[#4a6df0]/40 backdrop-blur-md shadow-inner font-mono text-xs sm:text-sm text-white">
                <span className="text-[#4a6df0] font-bold">&gt;&gt;&gt;</span>
                <div className="min-w-[240px] sm:min-w-[280px]">
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

              {/* Action Buttons: StarBorder CTA + Ghost Button */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <StarBorder
                  as={Link}
                  to="/contact"
                  color="#a5d8ff"
                  trailColor="#4a6df0"
                  speed="4s"
                  className="inline-flex items-center justify-center font-bold text-sm px-6 py-3 rounded-full bg-primary text-white shadow-md hover:bg-bright transition-colors"
                >
                  Book a free demo
                </StarBorder>

                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors"
                >
                  <FileDown size={16} />
                  <span>Download brochure</span>
                </a>
              </div>

              {/* Glass-style Trust Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/90">
                <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Govt. Recognized Certification</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <Briefcase size={14} className="text-[#a5d8ff]" />
                  <span>100% Job Placement Assistance</span>
                </span>
              </div>
            </div>

            {/* Right Column: 3D CardSwap Stack (Desktop) / Static Code Card (< 1024px) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {/* Desktop: CardSwap rotating in 3D stack */}
              <div className="hidden lg:block w-[380px] h-[260px]">
                {effectsConfig.dataScienceCardSwap && !prefersReducedMotion ? (
                  <CardSwap
                    cardWidth={380}
                    cardHeight={240}
                    cardRadius={22}
                    delay={3200}
                    pauseOnHover={true}
                    theme="dark"
                  >
                    {/* Card 1: Code card "model.py" */}
                    <div className="w-full h-full bg-[#0d1c54]/95 border border-[#4a6df0]/40 rounded-[22px] p-5 font-mono text-xs flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                        </div>
                        <span className="text-[#a5d8ff] font-bold">model.py</span>
                        <span className="text-[10px] text-white/60">Python 3.12</span>
                      </div>
                      <div className="space-y-1.5 text-white/90 py-3">
                        <p><span className="text-[#4a6df0]">import</span> pandas <span className="text-[#4a6df0]">as</span> pd</p>
                        <p><span className="text-[#4a6df0]">from</span> sklearn.ensemble <span className="text-[#4a6df0]">import</span> RandomForestClassifier</p>
                        <p className="text-white/60"># Initialize model</p>
                        <p>model = RandomForestClassifier(n_estimators=<span className="text-[#a5d8ff]">100</span>)</p>
                        <p className="text-emerald-400">model.fit(X_train, y_train)</p>
                      </div>
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] text-[#a5d8ff]">
                        <span>Accuracy: 94.8%</span>
                        <span>status: trained</span>
                      </div>
                    </div>

                    {/* Card 2: Chart card "Sample data" */}
                    <div className="w-full h-full bg-[#0b1847]/95 border border-[#2448c9]/50 rounded-[22px] p-5 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-mono text-xs text-[#a5d8ff] font-bold">training_loss.svg</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">Sample data</span>
                      </div>
                      {/* Mini SVG loss curve & accuracy bar */}
                      <div className="py-2">
                        <svg viewBox="0 0 320 100" className="w-full h-24">
                          <path
                            d="M 10 80 Q 80 75 140 40 T 310 15"
                            fill="none"
                            stroke="#4a6df0"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M 10 90 Q 70 88 150 65 T 310 35"
                            fill="none"
                            stroke="#a5d8ff"
                            strokeWidth="1.8"
                            strokeDasharray="4,4"
                          />
                          <circle cx="310" cy="15" r="4" fill="#a5d8ff" />
                        </svg>
                      </div>
                      <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] text-white/80 font-mono">
                        <span>Loss: 0.042</span>
                        <span className="text-emerald-400 font-semibold">Validation: 96.2%</span>
                      </div>
                    </div>

                    {/* Card 3: Pipeline card "Illustration" */}
                    <div className="w-full h-full bg-[#0a1640]/95 border border-[#4a6df0]/40 rounded-[22px] p-5 flex flex-col justify-between shadow-2xl backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-mono text-xs text-[#a5d8ff] font-bold">pipeline_flow</span>
                        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/70">Illustration</span>
                      </div>
                      {/* 4 Connected Nodes */}
                      <div className="flex items-center justify-between py-4 relative">
                        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#4a6df0] to-[#a5d8ff] -translate-y-1/2 -z-0" />
                        {['Collect', 'Clean', 'Model', 'Deploy'].map((node, nIdx) => (
                          <div key={node} className="relative z-10 flex flex-col items-center gap-1.5">
                            <span className="w-7 h-7 rounded-full bg-[#13266f] border-2 border-[#a5d8ff] text-[11px] font-bold flex items-center justify-center text-white">
                              {nIdx + 1}
                            </span>
                            <span className="text-[10px] font-semibold text-white/90">{node}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-white/10 pt-2 text-[11px] text-[#a5d8ff] font-mono text-center">
                        Automated Data Pipeline · Production Ready
                      </div>
                    </div>
                  </CardSwap>
                ) : (
                  /* Reduced motion fallback for desktop */
                  <div className="w-full h-full bg-[#0d1c54] border border-[#4a6df0]/40 rounded-[22px] p-5 font-mono text-xs flex flex-col justify-between">
                    <span className="text-[#a5d8ff] font-bold">model.py</span>
                    <p className="text-white">model = RandomForestClassifier(n_estimators=100)</p>
                    <span className="text-emerald-400">model.fit(X_train, y_train)</span>
                  </div>
                )}
              </div>

              {/* Mobile & Tablet (< 1024px): Clean static code card below text */}
              <div className="lg:hidden w-full max-w-[420px] bg-[#0d1c54]/95 border border-[#4a6df0]/40 rounded-[22px] p-5 font-mono text-xs space-y-3 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                  </div>
                  <span className="text-[#a5d8ff] font-bold">model.py</span>
                  <span className="text-[10px] text-white/60">Python 3.12</span>
                </div>
                <div className="space-y-1 text-white/90">
                  <p><span className="text-[#4a6df0]">import</span> pandas <span className="text-[#4a6df0]">as</span> pd</p>
                  <p><span className="text-[#4a6df0]">from</span> sklearn.ensemble <span className="text-[#4a6df0]">import</span> RandomForestClassifier</p>
                  <p className="text-emerald-400">model.fit(X_train, y_train)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SCROLLING STRIP (SCROLLVELOCITY BIDIRECTIONAL MARQUEE) ─── */}
      <section className="bg-soft border-y border-line/80 py-4 overflow-hidden">
        {effectsConfig.dataScienceScrollVelocity && !prefersReducedMotion ? (
          <div className="space-y-1.5 font-bold tracking-tight text-deep text-sm sm:text-base">
            <ScrollVelocity
              texts={[
                'Python · NumPy · pandas · Seaborn · Matplotlib · Scikit-Learn · Streamlit · Alteryx · Power BI · SQL Server · Advanced Excel · Informatica',
                'Supervised learning · Unsupervised learning · Feature engineering · Cross-validation · Hyperparameter tuning · Ensemble methods · Generative AI',
              ]}
              velocity={60}
              className="px-2"
            />
          </div>
        ) : (
          /* Reduced motion fallback: Clean wrapping chips */
          <div className="max-w-content mx-auto px-6 flex flex-wrap gap-2 justify-center text-xs font-semibold text-deep">
            {course.tools.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-surface border border-line">
                {t}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* ─── 3. NUMBERS STRIP (COUNTUP COMPUTED STRICTLY FROM DATA) ─── */}
      <section className="bg-soft/50 py-10 border-b border-line/60">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-surface rounded-[22px] border border-line/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-mono">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={12} duration={1.2} />
                ) : (
                  '12'
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-deep mt-1">
                Months practical training
              </p>
            </div>

            <div className="p-4 bg-surface rounded-[22px] border border-line/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-mono">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={course.tools.length} duration={1.2} />
                ) : (
                  course.tools.length
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-deep mt-1">
                Core industry tools
              </p>
            </div>

            <div className="p-4 bg-surface rounded-[22px] border border-line/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-mono">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={course.modules ? course.modules.length : 12} duration={1.2} />
                ) : (
                  course.modules ? course.modules.length : 12
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-deep mt-1">
                Curriculum modules
              </p>
            </div>

            <div className="p-4 bg-surface rounded-[22px] border border-line/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-primary font-mono">
                {effectsConfig.countUp && !prefersReducedMotion ? (
                  <CountUp to={branches.length} duration={1.2} />
                ) : (
                  branches.length
                )}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-deep mt-1">
                Mumbai branches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT YOU WILL MASTER (6-CARD BENTO GRID WITH SPOTLIGHT) ─── */}
      <section id="what-you-will-master" className="py-16 max-w-content mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-deep tracking-tight">
            What you will master
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            A comprehensive, industry-curated curriculum verified against the official Infodesk brochure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MASTER_DOMAINS.map((domain, dIdx) => {
            const Icon = domain.icon;
            return (
              <SpotlightCard
                key={domain.title}
                theme="light"
                spotlightColor="rgba(36, 72, 201, 0.12)"
                intensity={0.25}
                proximity={120}
                className="!p-6 !rounded-[22px] bg-surface border border-line/80 shadow-card flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-full bg-soft text-primary flex items-center justify-center">
                      <Icon size={20} />
                    </span>
                    <span className="text-[11px] font-mono font-bold text-primary px-2.5 py-0.5 rounded-full bg-soft/80">
                      {domain.moduleLabel}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-deep leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {domain.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {domain.topics.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs text-ink/90 font-medium">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-line/60">
                  <button
                    type="button"
                    onClick={() => handleStageClick(domain.moduleIndex)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline focus:outline-none"
                  >
                    <span>See module topics</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* ─── 5. MACHINE LEARNING IN TEN SECONDS (DEEP BLUE BAND WITH GRIDSCAN) ─── */}
      <section
        id="machine-learning"
        className="relative bg-gradient-to-br from-[#13266f] to-[#0b1a52] text-white py-16 sm:py-20 overflow-hidden"
      >
        {/* GridScan Canvas mounted in LazyMount */}
        {effectsConfig.dataScienceGridScan && (
          <LazyMount
            isCanvasOrWebGL={true}
            fallback={
              <div
                className="absolute inset-0 bg-[#0b1a52] opacity-80 pointer-events-none"
                aria-hidden="true"
              />
            }
            className="absolute inset-0 pointer-events-none"
          >
            <GridScan
              gridColor="#2448c9"
              scanColor="#a5d8ff"
              className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
            />
          </LazyMount>
        )}

        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Heading, Paragraph, RubberSegment with comfortable sizes */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Machine learning in ten seconds
                </h2>
                <p className="text-[#c3cbf2] text-sm sm:text-base mt-2 leading-relaxed">
                  Explore how statistical algorithms discover structures and decision boundaries directly from data.
                </p>
              </div>

              {/* RubberSegment with comfortable &ge;120px tabs */}
              <div className="pt-2">
                <RubberSegment
                  items={['Supervised', 'Unsupervised', 'Generative']}
                  value={mlMode}
                  onChange={setMlMode}
                  trackColor="#071138"
                  thumbColor="#2448c9"
                  textColor="#a5d8ff"
                  activeTextColor="#ffffff"
                  size="lg"
                  radius={14}
                  draggable={false}
                  className="w-full max-w-[420px] sm:min-w-[360px]"
                  aria-label="Machine learning paradigm selector"
                />
              </div>

              {/* Dynamic accessible caption in aria-live */}
              <div
                aria-live="polite"
                className="p-4 rounded-[18px] bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-white flex items-start gap-3"
              >
                <Sparkles size={18} className="text-[#a5d8ff] shrink-0 mt-0.5" />
                <span>
                  {mlMode === 'Supervised' &&
                    'Supervised algorithms construct an optimal decision boundary separating known target classes to classify unseen instances.'}
                  {mlMode === 'Unsupervised' &&
                    'Unsupervised clustering partitions unlabelled feature spaces into cohesive groups and calculates centroid convergence.'}
                  {mlMode === 'Generative' &&
                    'Generative networks model the underlying probability distribution to synthesize realistic new samples.'}
                </span>
              </div>
            </div>

            {/* Right: Clean SVG Scatter Plot with external HTML legend */}
            <div className="lg:col-span-7">
              <div className="bg-[#071138]/90 border border-[#4a6df0]/40 rounded-[22px] p-5 sm:p-6 shadow-2xl backdrop-blur-md space-y-4">
                {/* External HTML Legend (never drawn on top of points) */}
                <div className="flex flex-wrap items-center justify-between text-xs text-white/90 pb-2 border-b border-white/10 gap-2">
                  <div className="flex items-center gap-4">
                    {mlMode === 'Supervised' && (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#a5d8ff]" />
                          <span>Class A (30 pts)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#4a6df0]" />
                          <span>Class B (30 pts)</span>
                        </span>
                      </>
                    )}
                    {mlMode === 'Unsupervised' && (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#4a6df0]" />
                          <span>Cluster 1</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#a5d8ff]" />
                          <span>Cluster 2</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-emerald-400" />
                          <span>Cluster 3</span>
                        </span>
                      </>
                    )}
                    {mlMode === 'Generative' && (
                      <>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-white/40" />
                          <span>Training data (60 pts)</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#4a6df0] ring-2 ring-[#a5d8ff]" />
                          <span>Synthesized (15 new)</span>
                        </span>
                      </>
                    )}
                  </div>
                  <span className="font-mono text-[11px] text-[#a5d8ff]">60 samples</span>
                </div>

                {/* SVG Canvas (viewBox 600 x 360) */}
                <div className="relative">
                  <svg
                    viewBox="0 0 600 360"
                    className="w-full h-auto select-none"
                    role="img"
                    aria-label={`Scatter plot displaying ${mlMode} model`}
                  >
                    {/* Axes and Grid Lines */}
                    <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1">
                      <line x1="80" y1="50" x2="560" y2="50" strokeDasharray="3,3" />
                      <line x1="80" y1="130" x2="560" y2="130" strokeDasharray="3,3" />
                      <line x1="80" y1="210" x2="560" y2="210" strokeDasharray="3,3" />
                      <line x1="80" y1="290" x2="560" y2="290" strokeDasharray="3,3" />
                      <line x1="180" y1="40" x2="180" y2="310" strokeDasharray="3,3" />
                      <line x1="300" y1="40" x2="300" y2="310" strokeDasharray="3,3" />
                      <line x1="420" y1="40" x2="420" y2="310" strokeDasharray="3,3" />
                    </g>

                    {/* Main Axes */}
                    <line x1="80" y1="310" x2="560" y2="310" stroke="#a5d8ff" strokeWidth="1.5" />
                    <line x1="80" y1="310" x2="80" y2="40" stroke="#a5d8ff" strokeWidth="1.5" />
                    <text x="310" y="340" fill="#a5d8ff" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
                      Feature 1 (Standardized)
                    </text>
                    <text x="35" y="175" fill="#a5d8ff" fontSize="11" textAnchor="middle" transform="rotate(-90 35 175)" fontFamily="sans-serif">
                      Feature 2 (Standardized)
                    </text>

                    {/* Supervised Mode Rendering */}
                    {mlMode === 'Supervised' && (
                      <g>
                        {/* Diagonal decision boundary line connecting (235, 30) to (395, 330) */}
                        <line
                          x1="235"
                          y1="30"
                          x2="395"
                          y2="330"
                          stroke="#4a6df0"
                          strokeWidth="2.5"
                          strokeDasharray="6,6"
                        />
                        <text x="245" y="45" fill="#a5d8ff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                          Decision boundary
                        </text>

                        {STATIC_ML_DATA.points.map((p) => {
                          const isA = p.supervisedClass === 'A';
                          return (
                            <circle
                              key={p.id}
                              cx={p.x}
                              cy={p.y}
                              r={4.5}
                              fill={isA ? '#a5d8ff' : '#4a6df0'}
                              stroke="#071138"
                              strokeWidth="1.2"
                              className="transition-all duration-300"
                            />
                          );
                        })}

                        {/* Highlighted landing test point */}
                        <g>
                          <circle cx="160" cy="90" r="11" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,3" className="animate-spin" />
                          <circle cx="160" cy="90" r="5" fill="#22c55e" />
                          <text x="180" y="94" fill="#22c55e" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                            New sample &rarr; Predicted Class A
                          </text>
                        </g>
                      </g>
                    )}

                    {/* Unsupervised Mode Rendering */}
                    {mlMode === 'Unsupervised' && (
                      <g>
                        {/* 3 Cluster halos */}
                        <circle cx="190" cy="130" r="60" fill="#4a6df0" fillOpacity="0.14" stroke="#4a6df0" strokeWidth="1" strokeDasharray="3,3" />
                        <circle cx="430" cy="220" r="62" fill="#a5d8ff" fillOpacity="0.14" stroke="#a5d8ff" strokeWidth="1" strokeDasharray="3,3" />
                        <circle cx="310" cy="210" r="48" fill="#10b981" fillOpacity="0.14" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />

                        {STATIC_ML_DATA.points.map((p) => {
                          const fill = p.unsupCluster === 0 ? '#4a6df0' : p.unsupCluster === 1 ? '#10b981' : '#a5d8ff';
                          return (
                            <circle
                              key={p.id}
                              cx={p.x}
                              cy={p.y}
                              r={4.5}
                              fill={fill}
                              stroke="#071138"
                              strokeWidth="1.2"
                              className="transition-all duration-300"
                            />
                          );
                        })}

                        {/* Centroids */}
                        <path d="M 185 130 L 195 130 M 190 125 L 190 135" stroke="#ffffff" strokeWidth="2" />
                        <path d="M 425 220 L 435 220 M 430 215 L 430 225" stroke="#ffffff" strokeWidth="2" />
                        <path d="M 305 210 L 315 210 M 310 205 L 310 215" stroke="#ffffff" strokeWidth="2" />
                      </g>
                    )}

                    {/* Generative Mode Rendering */}
                    {mlMode === 'Generative' && (
                      <g>
                        {STATIC_ML_DATA.points.map((p) => (
                          <circle
                            key={p.id}
                            cx={p.x}
                            cy={p.y}
                            r={3.8}
                            fill="#ffffff"
                            fillOpacity="0.4"
                            stroke="#071138"
                            strokeWidth="1"
                          />
                        ))}

                        {STATIC_ML_DATA.syntheticPoints.map((s) => (
                          <g key={s.id}>
                            <circle cx={s.x} cy={s.y} r="10" fill="none" stroke="#a5d8ff" strokeWidth="1.2" strokeDasharray="2,2" opacity="0.9" />
                            <circle cx={s.x} cy={s.y} r="4.5" fill="#4a6df0" stroke="#ffffff" strokeWidth="1.2" />
                          </g>
                        ))}
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. THE DATA SCIENCE WORKFLOW (FULL-WIDTH SCROLLSTACK) ─── */}
      <section id="workflow" className="py-16 max-w-content mx-auto px-6">
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
          /* Desktop & Tablet: ScrollStack with window scroll pinning sitting below header + PillNav */
          <ScrollStack
            useWindowScroll={true}
            stackPosition="124px"
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

      {/* ─── 7. GENERATIVE AI BAND (DEEP BLUE WITH THREADS CANVAS) ─── */}
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
