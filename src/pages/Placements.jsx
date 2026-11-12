import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Quote,
  CheckCircle2,
  Users,
  Building2,
  FileCheck,
  Star,
  Sparkles,
  ArrowRight,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { testimonials, GOOGLE_BUSINESS_INFO } from '../data/testimonials';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';
import LogoLoop from '../components/LogoLoop';
import GoogleRatingBadge, { GoogleIcon, GoogleStars } from '../components/GoogleRatingBadge';

const partnerList = [
  { name: 'Airtel', file: 'airtel.png', category: 'Tech & Telecom' },
  { name: 'HDFC Bank', file: 'hdfc-bank.png', category: 'Banking' },
  { name: 'Aditya Birla Group', file: 'aditya-birla.png', category: 'Corporate' },
  { name: 'Bata', file: 'bata.png', category: 'Retail' },
  { name: 'RBL Bank', file: 'rbl-bank.png', category: 'Banking' },
  { name: 'ICICI Bank', file: 'icici-bank.png', category: 'Banking' },
  { name: 'Wipro', file: 'wipro.png', category: 'Tech & IT' },
  { name: 'Tata', file: 'tata.png', category: 'Corporate' },
  { name: 'Hero', file: 'hero.png', category: 'Automotive' },
  { name: 'Mahindra', file: 'mahindra.png', category: 'Corporate' },
  { name: 'Amul', file: 'amul.png', category: 'FMCG' },
  { name: 'Bajaj', file: 'bajaj.png', category: 'Corporate' },
  { name: 'Adani', file: 'adani.png', category: 'Corporate' },
  { name: 'ITC Limited', file: 'itc-limited.png', category: 'FMCG' },
  { name: 'Dream11', file: 'dream11.png', category: 'Tech & IT' },
  { name: 'Tanishq', file: 'tanishq.png', category: 'Retail' },
  { name: 'State Bank of India (SBI)', file: 'sbi.png', category: 'Banking' },
  { name: 'Max Life Insurance', file: 'max-life.png', category: 'Banking' },
  { name: 'Star Health Insurance', file: 'star-health.png', category: 'Corporate' },
  { name: 'IDFC First Bank', file: 'idfc-first-bank.png', category: 'Banking' },
  { name: 'D\'damas', file: 'ddamas.png', category: 'Retail' },
  { name: 'LIC of India', file: 'lic.png', category: 'Banking' },
  { name: 'DMart', file: 'dmart.png', category: 'Retail' },
  { name: 'Godrej', file: 'godrej.png', category: 'Corporate' },
  { name: 'Reliance Industries', file: 'reliance.png', category: 'Corporate' },
];

const placementRoadmap = [
  {
    step: '01',
    title: 'Profile Architecture',
    desc: 'Crafting industry-standard technical resumes, GitHub repositories, and live project portfolios.',
    icon: FileCheck,
  },
  {
    step: '02',
    title: 'Technical Mocks',
    desc: 'Rigorous 1-on-1 mock interviews, coding challenges, and domain viva assessments with faculty.',
    icon: Users,
  },
  {
    step: '03',
    title: 'Recruitment Referral',
    desc: 'Forwarding student profiles directly to hiring managers across our network of 25+ partner companies.',
    icon: Building2,
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    desc: 'Salary negotiation mentoring, onboarding orientation, and initial workplace transition support.',
    icon: GraduationCap,
  },
];

export default function Placements() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Testimonial slider auto-play
  useEffect(() => {
    if (shouldReduceMotion || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentSlide];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ─── HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-12 sm:py-24 relative overflow-hidden bg-grid-dots">
        <div className="max-w-content mx-auto px-4 sm:px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line/80 text-xs font-semibold text-deep mb-4 shadow-sm">
            <Briefcase size={13} className="text-primary" />
            <span>Dedicated Placement Assistance</span>
          </div>
          <h1 className="text-[clamp(32px,5.2vw,64px)] font-bold text-deep tracking-tight">
            Careers start here.
          </h1>
          <p className="text-muted text-base sm:text-[19px] mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto">
            Practical education tailored for hiring expectations, backed by dedicated job training, recruitment drives, and corporate networking.
          </p>
        </div>
      </section>

      {/* ─── 100% JOB ASSISTANCE COMMITMENT ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-5 sm:p-8 lg:p-12 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Verified Brochure Commitment
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep">
                  100% Job Assistance.
                </h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  Infodesk Computer Education provides 100% job assistance to enrolled students upon successful course completion. Our career services team bridges students with technology teams through direct recruitment coordination.
                </p>

                {/* Placement support mechanism */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-ink/85">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Technical resume optimization and GitHub/portfolio reviews.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Mock technical interviews and domain-specific viva prep.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Direct recruitment drives with regional hiring partners.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>Continuous interview coordination and job alerts across Mumbai until placement.</span>
                  </div>
                </div>
              </div>

              {/* Quick Call to Action */}
              <div className="lg:col-span-4 bg-background p-6 rounded-2xl border border-line/70 text-center space-y-3.5 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-soft text-primary mx-auto flex items-center justify-center shadow-sm">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-bold text-deep text-base">Hiring for your team?</h4>
                <p className="text-xs text-muted leading-relaxed">
                  For staff requirements or participation in campus placement drives, connect directly with our placement coordinators.
                </p>
                <Button to="/contact" size="sm" variant="primary" className="w-full">
                  Contact placement cell
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── 4-STEP PLACEMENT PIPELINE ROADMAP ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              How our placement cell works.
            </h2>
            <p className="text-muted text-base mt-2">
              From day one in our labs to signing your employment offer, every student follows a structured career pathway.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {placementRoadmap.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-surface border border-line/80 rounded-card p-6 shadow-card hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                        <Icon size={20} />
                      </div>
                      <span className="font-mono text-xs font-bold text-primary bg-soft/60 px-2.5 py-0.5 rounded-full">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-deep mb-2">{item.title}</h3>
                    <p className="text-muted text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-line/40 text-[11px] font-semibold text-muted flex items-center gap-1">
                    <span>Phase {idx + 1}</span>
                    <ArrowRight size={12} className="text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── JOBS AND PLACEMENT PARTNERS GRID ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Jobs and placement partners.
            </h2>
            <p className="text-muted text-base mt-2">
              Organizations where our qualified candidates explore career opportunities, recruitment drives, and industrial internships.
            </p>
          </div>

          {shouldReduceMotion ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
              {partnerList.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-surface border border-line/80 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm h-28"
                  title={partner.name}
                >
                  <img
                    src={`/assets/partners/${partner.file}`}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-[85%] object-contain"
                    loading="lazy"
                  />
                  <span className="text-[10px] text-muted font-medium truncate max-w-[90%] mt-1">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-line/80 rounded-panel py-8 px-4 shadow-sm overflow-hidden">
              <LogoLoop
                logos={partnerList.map((p) => ({
                  src: `/assets/partners/${p.file}`,
                  alt: `${p.name} logo`,
                  title: p.name,
                }))}
                ariaLabel="Placement partners"
                speed={80}
                direction="left"
                logoHeight={40}
                gap={56}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutWidth={0.12}
                scaleOnHover={true}
              />
            </div>
          )}

          {/* Mandatory Footnote */}
          <p className="text-center text-xs text-muted mt-6">
            All logos and trademarks are properties of their respective owners.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── STUDENT TESTIMONIALS SLIDER ─── */}
      <section className="max-w-content mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="flex justify-center mb-3.5">
              <GoogleRatingBadge variant="pill" />
            </div>
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Student testimonials.
            </h2>
            <p className="text-muted text-base mt-2">
              Hear directly from candidates who completed their technical training at Infodesk Computer Education.
            </p>
          </div>

          <div
            className="max-w-3xl mx-auto relative bg-surface border border-line/80 rounded-panel p-5 sm:p-8 lg:p-12 shadow-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="text-primary/15 absolute top-5 left-5 sm:top-6 sm:left-6 w-10 h-10 sm:w-14 sm:h-14" />

            <div className="relative min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                  className="space-y-6"
                >
                  {/* Testimonial Header: Source Badge + Rating */}
                  <div className="flex items-center justify-between gap-3 relative z-10">
                    <div className="flex items-center gap-2">
                      <GoogleStars rating={activeTestimonial.rating || 5} size={16} />
                      <span className="text-xs font-bold text-deep font-mono">5.0</span>
                    </div>

                    {activeTestimonial.source === 'Google Review' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-xs font-semibold text-primary border border-primary/20">
                        <GoogleIcon className="w-3.5 h-3.5" />
                        <span>Google Review</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 border border-emerald-200">
                        <CheckCircle2 size={12} />
                        <span>Alumni Story</span>
                      </span>
                    )}
                  </div>

                  <blockquote className="text-base sm:text-lg text-ink/90 leading-relaxed italic relative z-10">
                    “{activeTestimonial.quote.replace(/'/g, '’')}”
                  </blockquote>

                  {/* Testimonial Author Meta */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-line/60">
                    <div className="flex items-center gap-4 min-w-0">
                      {activeTestimonial.image ? (
                        <img
                          src={activeTestimonial.image}
                          alt={activeTestimonial.name}
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-primary/40 shadow-sm shrink-0"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full text-white font-bold text-base flex items-center justify-center shrink-0 shadow-sm"
                          style={{ backgroundColor: activeTestimonial.avatarBg || '#4285F4' }}
                          aria-hidden="true"
                        >
                          {activeTestimonial.initials || activeTestimonial.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h4 className="font-bold text-deep text-base truncate">{activeTestimonial.name}</h4>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-muted mt-0.5">
                          <span className="text-primary font-semibold">
                            {activeTestimonial.role || 'Infodesk student'}
                          </span>
                          {activeTestimonial.course && (
                            <>
                              <span>•</span>
                              <span className="truncate">{activeTestimonial.course}</span>
                            </>
                          )}
                          {activeTestimonial.mentor && (
                            <span className="px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 border border-amber-200/60 font-medium">
                              {activeTestimonial.mentor}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {activeTestimonial.source === 'Google Review' && (
                      <a
                        href={GOOGLE_BUSINESS_INFO.shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep hover:text-primary transition-colors shrink-0 group self-start sm:self-center"
                      >
                        <span>View on Google</span>
                        <ExternalLink size={13} className="text-muted group-hover:text-primary transition-colors" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-line/40">
              <div className="flex items-center gap-1.5 overflow-x-auto max-w-[65%] py-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer shrink-0 ${
                      currentSlide === idx ? 'w-7 bg-primary' : 'w-2.5 bg-line hover:bg-muted'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2.5 rounded-full bg-background border border-line hover:bg-soft text-deep transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2.5 rounded-full bg-background border border-line hover:bg-soft text-deep transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Full Google Trust Banner */}
          <div className="max-w-3xl mx-auto mt-8">
            <GoogleRatingBadge variant="banner" />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
