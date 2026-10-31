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
  Award,
  Star,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import Button from '../components/Button';
import TerminalCard from '../components/TerminalCard';
import ScrollReveal from '../components/ScrollReveal';

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

  return (
    <div className="space-y-24 sm:space-y-32 w-full overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full bg-grid-dots">
        {/* Two large blurred drifting orbs */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-soft/60 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                x: [0, -30, 0],
                y: [0, 30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute top-1/2 -right-24 w-80 sm:w-[30rem] h-80 sm:h-[30rem] bg-soft/50 rounded-full blur-3xl pointer-events-none"
            />
          </div>
        )}

        <div className="w-full max-w-content mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 min-w-0 space-y-6 text-left">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block" />
                <span>Govt. Recognized • ISO 9001:2015 Certified Board</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words">
                Learn the skills<br className="sm:hidden" /> Mumbai's tech teams<br className="sm:hidden" /> hire for.
              </h1>

              <p className="text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl">
                Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button to="/courses" size="lg" variant="primary">
                  Explore courses
                </Button>
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

            {/* Right Column: 3D Terminal Card */}
            <div className="lg:col-span-5 flex justify-center">
              <TerminalCard />
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECOGNITION STRIP ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card">
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
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-bright transition-colors self-start sm:self-auto"
            >
              <span>View all 18 courses</span>
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
                  className="relative bg-surface border border-line/80 rounded-card p-6 flex flex-col justify-between shadow-card hover:shadow-[0_20px_35px_-15px_rgba(36,72,201,0.2)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
                >
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${cat.color} border flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/60 text-muted">
                        {cat.count}
                      </span>
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
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
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
            {whyInfodesk.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative bg-surface border border-line/80 rounded-card p-6 shadow-card hover:border-primary/40 hover:shadow-[0_16px_32px_-14px_rgba(19,38,111,0.18)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
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
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── AWARD HIGHLIGHT ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature overflow-hidden relative">
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
                    Official ceremony • Delhi, India
                  </span>
                </div>
              </div>

              {/* Award Photos with subtle frame */}
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

      {/* ─── TOOL MARQUEE ─── */}
      <section className="w-full max-w-full overflow-hidden py-6 border-y border-line/60 bg-surface">
        <div className="max-w-content mx-auto px-4 sm:px-6 mb-3 text-center">
          <p className="text-xs uppercase font-bold tracking-wider text-muted">
            Industry tools and technologies taught in our labs
          </p>
        </div>
        <div className="relative w-full max-w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-4 py-2 whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...tools, ...tools, ...tools].map((tool, i) => (
              <span
                key={`${tool.name}-${i}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-deep/90 px-4 py-2 rounded-full bg-background border border-line/80 shadow-sm hover:border-primary/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                <span>{tool.name}</span>
                <span className="text-[10px] text-muted font-normal bg-soft/50 px-1.5 py-0.5 rounded">
                  {tool.cat}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRY A FREE DEMO BANNER ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-bright/10 rounded-full blur-3xl pointer-events-none" />

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
