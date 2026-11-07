import React, { useState, useEffect, useMemo } from 'react';
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
  ArrowDown,
} from 'lucide-react';
import { courses } from '../data/courses';
import { branches } from '../data/branches';
import ModuleAccordion from '../components/ModuleAccordion';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import ScrollReveal from '../components/ScrollReveal';

// React Bits components for Data Science course
import GradientText from '../components/GradientText';
import Particles from '../components/Particles';
import TextType from '../components/TextType';
import DecryptedText from '../components/DecryptedText';
import CountUp from '../components/CountUp';
import LogoLoop from '../components/LogoLoop';
import RubberSegment from '../components/RubberSegment';
import AnimatedContent from '../components/AnimatedContent';
import LazyMount from '../components/common/LazyMount';
import {
  effectsConfig,
  isTouchDevice,
  prefersReducedMotion,
  isSaveData,
} from '../config/effects';

// Seeded PRNG (Mulberry32) for deterministic 50-point ML scatter plot
function createSeededPoints() {
  let a = 42;
  const rng = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const points = [];
  for (let i = 0; i < 50; i++) {
    // 3 natural clusters:
    // Cluster 0 (18 pts): center (135, 75)
    // Cluster 1 (16 pts): center (365, 85)
    // Cluster 2 (16 pts): center (240, 175)
    const cluster = i < 18 ? 0 : i < 34 ? 1 : 2;
    const cx = cluster === 0 ? 135 : cluster === 1 ? 365 : 240;
    const cy = cluster === 0 ? 75 : cluster === 1 ? 85 : 175;
    const r = rng() * 42 + 6;
    const th = rng() * Math.PI * 2;
    const x = Math.round(cx + Math.cos(th) * r);
    const y = Math.round(cy + Math.sin(th) * r);
    // Supervised binary class cleanly split near x = 235 (26 class 0, 24 class 1)
    const supervisedClass = x < 235 ? 0 : 1;
    points.push({ id: i, x, y, cluster, supervisedClass });
  }

  // 15 synthetic points for Generative mode
  const syntheticPoints = [];
  for (let j = 0; j < 15; j++) {
    const cluster = j % 3;
    const cx = cluster === 0 ? 135 : cluster === 1 ? 365 : 240;
    const cy = cluster === 0 ? 75 : cluster === 1 ? 85 : 175;
    const r = rng() * 38 + 8;
    const th = rng() * Math.PI * 2;
    const x = Math.round(cx + Math.cos(th) * r);
    const y = Math.round(cy + Math.sin(th) * r);
    syntheticPoints.push({ id: `synth-${j}`, x, y, cluster });
  }

  return { points, syntheticPoints };
}

const STATIC_ML_DATA = createSeededPoints();

// 5 Connected Project Flow stages for Data Science
const DATA_SCIENCE_PROJECT_STAGES = [
  {
    step: '01',
    title: 'Collect and clean',
    tools: 'Pandas, SQL',
    moduleIndex: 2, // Module 03 (Pandas)
    moduleLabel: 'Module 03',
    icon: Database,
  },
  {
    step: '02',
    title: 'Explore and visualize',
    tools: 'Matplotlib, Seaborn',
    moduleIndex: 3, // Module 04 (Seaborn & Matplotlib)
    moduleLabel: 'Module 04',
    icon: BarChart3,
  },
  {
    step: '03',
    title: 'Build models',
    tools: 'Scikit-Learn',
    moduleIndex: 4, // Module 05 (Scikit-Learn)
    moduleLabel: 'Module 05',
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Generative AI',
    tools: 'LLMs, Prompts',
    moduleIndex: 5, // Module 06 (Generative AI)
    moduleLabel: 'Module 06',
    icon: Bot,
  },
  {
    step: '05',
    title: 'Share and deploy',
    tools: 'Streamlit, Power BI',
    moduleIndex: 6, // Module 07 (Streamlit)
    moduleLabel: 'Module 07',
    icon: Rocket,
  },
];

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const isDataScience = course.slug === 'data-science';

  // Active semester for multi-semester diploma courses
  const [activeSemIndex, setActiveSemIndex] = useState(0);

  // Controlled module accordion open indices
  const [openModuleIndices, setOpenModuleIndices] = useState([0]);

  // Machine Learning interactive scatter mode
  const [mlMode, setMlMode] = useState('Supervised');

  // Prepared tool items for LogoLoop
  const toolItems = useMemo(
    () =>
      (course.tools || []).map((t) => ({
        title: t,
        node: (
          <span className="px-3.5 py-1.5 rounded-full bg-soft/75 border border-line/80 text-xs sm:text-sm font-semibold text-deep shadow-sm hover:border-primary/50 transition-colors whitespace-nowrap">
            {t}
          </span>
        ),
      })),
    [course.tools]
  );

  // Mobile detection for ScrollStack fallback to avoid pinning jank on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isSemesterCourse = Boolean(
    course.semesters &&
      course.semesters.length > 0 &&
      ['adse', 'adgwa', 'adat', 'dca'].includes(course.slug)
  );

  // Related courses (same category, excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

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
      document.getElementById('syllabus-modules');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleModuleToggle = (index) => {
    setOpenModuleIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-16">
      {/* ─── COURSE HEADER (SOFT BLUE TINT) ─── */}
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

          {isDataScience ? (
            /* ─── DATA SCIENCE HERO: TWO-COLUMN (7 cols Left, 5 cols Right) ─── */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Badges, Summary */}
              <div className="lg:col-span-7 space-y-4">
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
                  {effectsConfig.dataScienceGradientText && !prefersReducedMotion ? (
                    <GradientText
                      colors={['#2448c9', '#4a6df0', '#2448c9']}
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

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
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

              {/* Right Column: Hero "Data Lab" Card */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-[440px] min-h-[300px] sm:min-h-[340px] bg-deep rounded-[22px] border border-[#2448c9]/40 shadow-[0_18px_40px_-22px_rgba(19,38,111,0.55)] overflow-hidden relative flex flex-col justify-between p-5 sm:p-6 text-white">
                  {/* Single Canvas Particle Background wrapped in LazyMount */}
                  {effectsConfig.dataScienceParticles && (
                    <LazyMount
                      isCanvasOrWebGL={true}
                      fallback={
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-deep via-[#13266f] to-[#0d1847] pointer-events-none"
                          aria-hidden="true"
                        />
                      }
                      className="absolute inset-0 pointer-events-none"
                    >
                      <Particles
                        connections={true}
                        connectionDistance={95}
                        particleColors={['#4a6df0', '#a5d8ff', '#ffffff']}
                        moveParticlesOnHover={false}
                        clickBurst={false}
                        particleCount={isMobile ? 24 : 50}
                        particleBaseSize={70}
                        speed={0.14}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      />
                    </LazyMount>
                  )}

                  {/* Card Header: 3 macOS dots + model.py tab */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#a5d8ff] tracking-wider">
                      model.py
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70">
                      Python 3.12
                    </span>
                  </div>

                  {/* Card Center: Interactive Typing Code */}
                  <div className="py-6 space-y-4 relative z-10 font-mono">
                    <div className="min-h-[70px] flex items-center">
                      {effectsConfig.dataScienceTextType && !prefersReducedMotion ? (
                        <TextType
                          text={[
                            'df = pd.read_csv("sales.csv")',
                            'df.groupby("city").mean()',
                            'model.fit(X_train, y_train)',
                            'st.line_chart(df)',
                          ]}
                          prefix=">>> "
                          prefixColor="#4a6df0"
                          cursorColor="#4a6df0"
                          typingSpeed={38}
                          pauseDuration={2200}
                          loop={true}
                          className="text-sm sm:text-base text-white font-medium drop-shadow-sm"
                        />
                      ) : (
                        <div className="text-sm sm:text-base text-white font-medium">
                          <span className="text-[#4a6df0]">&gt;&gt;&gt; </span>
                          <span>df = pd.read_csv(&quot;sales.csv&quot;)</span>
                        </div>
                      )}
                    </div>

                    {/* DecryptedText Caption */}
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-xs text-white/50 block mb-1">
                        Curriculum mission:
                      </span>
                      {effectsConfig.dataScienceDecryptedText && !prefersReducedMotion ? (
                        <DecryptedText
                          text="Raw data to real decisions."
                          animateOn="view"
                          speed={40}
                          className="text-[#a5d8ff] font-semibold text-sm sm:text-base tracking-wide"
                          parentClassName="inline-block"
                        />
                      ) : (
                        <span className="text-[#a5d8ff] font-semibold text-sm sm:text-base tracking-wide">
                          Raw data to real decisions.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer: Live Status Strip */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a5d8ff]/85 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{course.duration}</span>
                    </span>
                    <span>{branches.length} Mumbai branches</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ─── STANDARD HERO (Non-Data Science Courses) ─── */
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
          )}
        </div>
      </section>

      {/* ─── TWO-COLUMN CONTENT LAYOUT ─── */}
      <section className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Syllabus Breakdown (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tools Covered Strip with Dynamic Count and LogoLoop */}
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

                {isDataScience &&
                effectsConfig.dataScienceToolsLoop &&
                !prefersReducedMotion &&
                !isSaveData ? (
                  <div className="pt-1 overflow-hidden">
                    <LogoLoop
                      logos={toolItems}
                      speed={35}
                      gap={12}
                      logoHeight={34}
                      pauseOnHover={true}
                      fadeOut={true}
                      fadeOutWidth={0.1}
                    />
                  </div>
                ) : (
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
                )}
              </div>
            )}

            {/* ─── DATA SCIENCE NEW CARD: MACHINE LEARNING IN TEN SECONDS ─── */}
            {isDataScience && effectsConfig.dataScienceMlScatter && (
              <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-deep tracking-tight">
                      Machine learning in ten seconds
                    </h3>
                    <p className="text-muted text-xs sm:text-sm mt-0.5">
                      Select a paradigm to see how statistical models learn representations from data.
                    </p>
                  </div>
                  {/* RubberSegment Segmented Control */}
                  <RubberSegment
                    items={['Supervised', 'Unsupervised', 'Generative']}
                    value={mlMode}
                    onChange={setMlMode}
                    trackColor="#dfe5fb"
                    thumbColor="#2448c9"
                    textColor="#13266f"
                    activeTextColor="#ffffff"
                    size="md"
                    radius={12}
                    draggable={false}
                    aria-label="Machine learning paradigm selector"
                  />
                </div>

                {/* Deterministic SVG Scatter Plot */}
                <div className="bg-background rounded-panel border border-line/80 p-4 sm:p-5 relative overflow-hidden">
                  <svg
                    viewBox="0 0 500 240"
                    className="w-full h-auto max-h-[260px] select-none"
                    aria-label={`Scatter plot demonstrating ${mlMode} learning`}
                    role="img"
                  >
                    {/* Background grid lines */}
                    <g opacity="0.3" stroke="#dcdde6" strokeWidth="1">
                      <line x1="0" y1="60" x2="500" y2="60" strokeDasharray="3,3" />
                      <line x1="0" y1="120" x2="500" y2="120" strokeDasharray="3,3" />
                      <line x1="0" y1="180" x2="500" y2="180" strokeDasharray="3,3" />
                      <line x1="125" y1="0" x2="125" y2="240" strokeDasharray="3,3" />
                      <line x1="250" y1="0" x2="250" y2="240" strokeDasharray="3,3" />
                      <line x1="375" y1="0" x2="375" y2="240" strokeDasharray="3,3" />
                    </g>

                    {/* Mode: Supervised */}
                    {mlMode === 'Supervised' && (
                      <g>
                        {/* Decision boundary dashed line */}
                        <line
                          x1="235"
                          y1="15"
                          x2="235"
                          y2="225"
                          stroke="#2448c9"
                          strokeWidth="2.5"
                          strokeDasharray="6,6"
                        />
                        <text
                          x="238"
                          y="30"
                          fill="#2448c9"
                          fontSize="10"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Decision boundary
                        </text>

                        {/* Labels */}
                        <text
                          x="35"
                          y="30"
                          fill="#2448c9"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Class A (Target 0)
                        </text>
                        <text
                          x="370"
                          y="30"
                          fill="#4a6df0"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Class B (Target 1)
                        </text>

                        {/* 50 Points split by class */}
                        {STATIC_ML_DATA.points.map((p) => {
                          const isClass0 = p.supervisedClass === 0;
                          return (
                            <circle
                              key={p.id}
                              cx={p.x}
                              cy={p.y}
                              r={isClass0 ? 4.5 : 4}
                              fill={isClass0 ? '#2448c9' : '#4a6df0'}
                              stroke="#ffffff"
                              strokeWidth="1.2"
                              className="transition-all duration-300"
                            />
                          );
                        })}
                      </g>
                    )}

                    {/* Mode: Unsupervised */}
                    {mlMode === 'Unsupervised' && (
                      <g>
                        {/* 3 Cluster halo circles */}
                        <circle
                          cx="135"
                          cy="75"
                          r="55"
                          fill="#2448c9"
                          fillOpacity="0.12"
                          stroke="#2448c9"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        <circle
                          cx="365"
                          cy="85"
                          r="55"
                          fill="#4a6df0"
                          fillOpacity="0.12"
                          stroke="#4a6df0"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />
                        <circle
                          cx="240"
                          cy="175"
                          r="52"
                          fill="#10b981"
                          fillOpacity="0.12"
                          stroke="#10b981"
                          strokeWidth="1"
                          strokeDasharray="4,4"
                        />

                        {/* Cluster labels */}
                        <text
                          x="100"
                          y="22"
                          fill="#2448c9"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Cluster 1 (Centroid A)
                        </text>
                        <text
                          x="320"
                          y="22"
                          fill="#4a6df0"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Cluster 2 (Centroid B)
                        </text>
                        <text
                          x="200"
                          y="232"
                          fill="#10b981"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          Cluster 3 (Centroid C)
                        </text>

                        {/* Points colored by discovered cluster */}
                        {STATIC_ML_DATA.points.map((p) => {
                          const color =
                            p.cluster === 0
                              ? '#2448c9'
                              : p.cluster === 1
                              ? '#4a6df0'
                              : '#10b981';
                          return (
                            <circle
                              key={p.id}
                              cx={p.x}
                              cy={p.y}
                              r="4.5"
                              fill={color}
                              stroke="#ffffff"
                              strokeWidth="1.2"
                              className="transition-all duration-300"
                            />
                          );
                        })}
                      </g>
                    )}

                    {/* Mode: Generative */}
                    {mlMode === 'Generative' && (
                      <g>
                        {/* Original training points in muted tone */}
                        {STATIC_ML_DATA.points.map((p) => (
                          <circle
                            key={p.id}
                            cx={p.x}
                            cy={p.y}
                            r="3.5"
                            fill="#566086"
                            fillOpacity="0.5"
                            stroke="#ffffff"
                            strokeWidth="1"
                          />
                        ))}

                        {/* 15 Newly synthesized points with pulsing rings */}
                        {STATIC_ML_DATA.syntheticPoints.map((s) => (
                          <g key={s.id}>
                            <circle
                              cx={s.x}
                              cy={s.y}
                              r="9"
                              fill="none"
                              stroke="#4a6df0"
                              strokeWidth="1.2"
                              strokeDasharray="2,2"
                              opacity="0.8"
                            />
                            <circle
                              cx={s.x}
                              cy={s.y}
                              r="5"
                              fill="#2448c9"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                          </g>
                        ))}

                        {/* Legend */}
                        <g transform="translate(15, 20)">
                          <circle cx="5" cy="5" r="3.5" fill="#566086" fillOpacity="0.5" />
                          <text
                            x="15"
                            y="8"
                            fill="#566086"
                            fontSize="10"
                            fontWeight="600"
                            fontFamily="sans-serif"
                          >
                            Training distribution (50 pts)
                          </text>

                          <circle cx="160" cy="5" r="5" fill="#2448c9" stroke="#ffffff" strokeWidth="1" />
                          <circle cx="160" cy="5" r="8" fill="none" stroke="#4a6df0" strokeWidth="1" strokeDasharray="2,2" />
                          <text
                            x="175"
                            y="8"
                            fill="#2448c9"
                            fontSize="10"
                            fontWeight="700"
                            fontFamily="sans-serif"
                          >
                            Synthesized samples (15 new)
                          </text>
                        </g>
                      </g>
                    )}
                  </svg>
                </div>

                {/* Dynamic accessible caption */}
                <div
                  aria-live="polite"
                  className="bg-soft/50 rounded-panel p-3.5 border border-line/60 flex items-center gap-3 text-xs sm:text-sm font-medium text-deep"
                >
                  <Sparkles size={16} className="text-primary shrink-0" />
                  <span>
                    {mlMode === 'Supervised' &&
                      'Labeled data trains a decision boundary to classify unseen inputs.'}
                    {mlMode === 'Unsupervised' &&
                      'Algorithms discover hidden groupings and cluster patterns without prior labels.'}
                    {mlMode === 'Generative' &&
                      'Models learn the underlying data distribution to synthesize realistic new samples.'}
                  </span>
                </div>
              </div>
            )}

            {/* ─── DATA SCIENCE NEW ROW: HOW A DATA SCIENCE PROJECT FLOWS ─── */}
            {isDataScience && effectsConfig.dataScienceProjectFlow && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-deep tracking-tight">
                    How a data science project flows
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mt-0.5">
                    This is how a project flows, not the class order. Click any stage to inspect the associated curriculum module.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                  {DATA_SCIENCE_PROJECT_STAGES.map((stage, idx) => {
                    const IconComponent = stage.icon;
                    return (
                      <button
                        key={stage.step}
                        type="button"
                        onClick={() => handleStageClick(stage.moduleIndex)}
                        className="bg-surface hover:bg-soft/40 border border-line/80 hover:border-primary/50 rounded-panel p-4 text-left transition-all duration-200 shadow-sm flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-mono font-bold text-primary px-2 py-0.5 rounded-full bg-soft">
                              {stage.step}
                            </span>
                            <IconComponent
                              size={15}
                              className="text-muted group-hover:text-primary transition-colors"
                            />
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-deep leading-snug">
                            {stage.title}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-line/50 flex items-center justify-between text-[11px] text-muted">
                          <span className="truncate max-w-[85px]">{stage.tools}</span>
                          <span className="font-semibold text-primary group-hover:underline flex items-center gap-0.5">
                            {stage.moduleLabel}
                            <ChevronRight size={11} />
                          </span>
                        </div>
                      </button>
                    );
                  })}
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
                  // Mobile fallback: clean vertical stack to prevent sticky pinning jank on small screens
                  <div className="space-y-4">
                    {course.semesters.map((sem) => (
                      <div
                        key={sem.number}
                        className="bg-surface rounded-[22px] border-[1.5px] border-line shadow-card p-6 space-y-4"
                      >
                        <div className="flex items-start justify-between gap-4">
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
                  // Desktop & Tablet: 3D interactive ScrollStack pinning roadmap
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
              // Standard Modular Courses keep ModuleAccordion with Spotlight & Controlled expansion
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
                    useSpotlight={isDataScience && effectsConfig.dataScienceSpotlight}
                  />
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Enrollment Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
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

      {/* ─── RELATED COURSES ─── */}
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
