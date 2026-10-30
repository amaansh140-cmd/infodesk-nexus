import React from 'react';
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
} from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import GradientASCII from '../components/GradientASCII';

const recognitionBadges = [
  { name: 'Govt. Recognized', desc: 'Authorized vocational board' },
  { name: 'ISO 9001:2015', desc: 'Certified quality standards' },
  { name: 'Skill India', desc: 'Kaushal Bharat certified' },
  { name: 'Ministry of MSME', desc: 'Govt. of India registered' },
  { name: 'Digital India', desc: 'Power to empower initiatives' },
];

const categoryCards = [
  {
    title: 'Data and AI',
    desc: 'Data science, analytics, machine learning, generative AI, and advanced Excel modeling.',
    icon: Database,
    color: 'bg-blue-50 text-primary',
    link: '/courses?category=Data and AI',
  },
  {
    title: 'Digital marketing',
    desc: 'SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.',
    icon: Globe,
    color: 'bg-emerald-50 text-emerald-600',
    link: '/courses?category=Digital marketing',
  },
  {
    title: 'Web and software',
    desc: 'Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.',
    icon: Code,
    color: 'bg-indigo-50 text-indigo-600',
    link: '/courses?category=Web and software',
  },
  {
    title: 'Design and video',
    desc: 'Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.',
    icon: Palette,
    color: 'bg-rose-50 text-rose-600',
    link: '/courses?category=Design and video',
  },
  {
    title: 'Office and accounts',
    desc: 'Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.',
    icon: Calculator,
    color: 'bg-amber-50 text-amber-600',
    link: '/courses?category=Office and accounts',
  },
  {
    title: 'Cyber security',
    desc: 'Ethical hacking, network defense, footprinting, system auditing, and security protocols.',
    icon: Lock,
    color: 'bg-cyan-50 text-cyan-600',
    link: '/courses?category=Cyber security',
  },
];

const whyInfodesk = [
  {
    title: 'Industrial faculties',
    desc: 'Learn directly from practicing IT professionals who bring real-world architecture into class.',
    icon: Users,
  },
  {
    title: 'Quality teaching',
    desc: 'Structured practical curricula built with lab exercises and zero superficial filler.',
    icon: Sparkles,
  },
  {
    title: '100% job assistance',
    desc: 'Resume building, mock interviews, portfolio creation, and dedicated placement support.',
    icon: Briefcase,
  },
  {
    title: 'Flexible timing',
    desc: 'Weekday and weekend batches tailored for college students and working professionals.',
    icon: Clock,
  },
  {
    title: 'Extra practice hour',
    desc: 'Dedicated lab access to work through assignments with mentoring support whenever needed.',
    icon: ShieldCheck,
  },
  {
    title: 'Small batch',
    desc: 'Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.',
    icon: CheckCircle,
  },
];

const tools = [
  'Python',
  'Power BI',
  'Tableau',
  'SQL',
  'Excel',
  'Tally Prime',
  'Photoshop',
  'Premiere Pro',
  'After Effects',
  'Figma',
  'WordPress',
  'Java',
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15,
      },
    },
  };

  const heroItemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.2, 0.7, 0.2, 1],
      },
    },
  };

  return (
    <div className="space-y-24 sm:space-y-32 w-full overflow-x-hidden">
      {/* ─── FULL-SCREEN HERO SECTION (SPANS BEHIND HEADER) ─── */}
      <section className="relative w-full h-screen min-h-[640px] min-h-[100dvh] flex items-center justify-center bg-[#0a122e] text-white overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-12">
        {/* React Bits GradientASCII WebGL canvas filling entire screen width & height */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto select-none">
          <GradientASCII
            colors={['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8']}
            shape="horizon"
            characters=" =+xX0S8#@"
            cellSize={18}
            density={0.8}
            glyphOpacity={0.9}
            glow={0.35}
            flow={0.6}
            speed={shouldReduceMotion ? 0 : 1}
            mouseInteraction={true}
            clickEffect="wave"
            intro={true}
          />
        </div>

        {/* Hero Content centered in the middle of the screen with smooth fade-up */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto text-center flex flex-col items-center justify-center space-y-6 sm:space-y-8 pointer-events-auto"
        >
          {/* Accreditation badge */}
          <motion.div
            variants={heroItemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white/90 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Govt. Recognized • ISO 9001:2015 Certified Board</span>
          </motion.div>

          {/* Centered H1 Headline */}
          <motion.h1
            variants={heroItemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] max-w-4xl mx-auto break-words"
          >
            Learn the skills Mumbai's tech teams hire for.
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            variants={heroItemVariants}
            className="text-white/80 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches.
          </motion.p>

          {/* Centered CTA Buttons */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Button
              to="/courses"
              size="lg"
              variant="primary"
              className="!bg-[#2448c9] hover:!bg-[#1e3fd8] text-white px-8 py-3.5 shadow-lg shadow-blue-600/30"
            >
              Explore courses
            </Button>
            <Button
              to="/contact"
              size="lg"
              variant="ghost"
              className="!text-white !border-white/30 hover:!bg-white/10 px-8 py-3.5 backdrop-blur-sm"
            >
              Book a free demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── RECOGNITION STRIP ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted mb-6">
              Recognized and certified for vocational excellence
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center">
              {recognitionBadges.map((item) => (
                <div
                  key={item.name}
                  className="p-3 text-center rounded-xl bg-background border border-line/60 hover:border-primary/40 transition-colors"
                >
                  <p className="text-sm font-bold text-deep">{item.name}</p>
                  <p className="text-xs text-muted mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── COURSE CATEGORIES ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-[clamp(32px,4.4vw,52px)] font-bold text-deep">
                Course categories.
              </h2>
              <p className="text-muted text-base mt-2 max-w-lg">
                Explore specialized technology tracks designed around real job requirements and practical toolkits.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline self-start sm:self-auto"
            >
              <span>View all courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryCards.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  to={cat.link}
                  className="bg-surface border border-line/80 rounded-card p-6 flex flex-col justify-between shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-105`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-deep group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-line/40 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Browse track</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── WHY INFODESK ─── */}
      <section className="max-w-content mx-auto px-6">
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
            {whyInfodesk.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-surface border border-line/80 rounded-card p-6 shadow-card hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-deep">{item.title}</h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── AWARD HIGHLIGHT ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-[#101f5c] text-white rounded-band p-8 sm:p-12 shadow-signature overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20">
                  National Recognition
                </span>
                <h2 className="text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight">
                  India's Best Institute award, honored by Ashneer Grover.
                </h2>
                <p className="text-white/80 text-base leading-relaxed max-w-xl">
                  Our institution was recognized nationally for educational excellence and quality career training, with the award presented personally by entrepreneur Ashneer Grover.
                </p>
                <div className="pt-2">
                  <Button to="/about" size="md" variant="white">
                    Read the award story
                  </Button>
                </div>
              </div>

              {/* Award Photos */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                  <img
                    src="/assets/awards/ashneer-award-main.jpg"
                    alt="Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education"
                    className="w-full h-44 sm:h-52 object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                  <img
                    src="/assets/awards/ashneer-award-1.jpg"
                    alt="Infodesk team on stage at national award ceremony"
                    className="w-full h-44 sm:h-52 object-cover object-center hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── TOOL MARQUEE ─── */}
      <section className="w-full max-w-full overflow-hidden py-4 border-y border-line/60 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 mb-3 text-center">
          <p className="text-xs uppercase font-semibold tracking-wider text-muted">
            Industry tools and technologies taught in our labs
          </p>
        </div>
        <div className="relative w-full max-w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-8 py-3 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="text-base font-semibold text-deep/80 px-4 py-1.5 rounded-full bg-background border border-line/80 inline-block shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRY A FREE DEMO BANNER ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden">
            <h2 className="text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight">
              Try a free demo class.
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty.
            </p>
            <div className="pt-2">
              <Button to="/contact" size="lg" variant="white">
                Book your demo
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
