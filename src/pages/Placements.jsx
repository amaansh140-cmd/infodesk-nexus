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
} from 'lucide-react';
import { testimonials } from '../data/testimonials';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const partnerList = [
  { name: 'Airtel', file: 'airtel.png' },
  { name: 'HDFC Bank', file: 'hdfc-bank.png' },
  { name: 'Aditya Birla Group', file: 'aditya-birla.png' },
  { name: 'Bata', file: 'bata.png' },
  { name: 'RBL Bank', file: 'rbl-bank.png' },
  { name: 'ICICI Bank', file: 'icici-bank.png' },
  { name: 'Wipro', file: 'wipro.png' },
  { name: 'Tata', file: 'tata.png' },
  { name: 'Hero', file: 'hero.png' },
  { name: 'Mahindra', file: 'mahindra.png' },
  { name: 'Amul', file: 'amul.png' },
  { name: 'Bajaj', file: 'bajaj.png' },
  { name: 'Adani', file: 'adani.png' },
  { name: 'ITC Limited', file: 'itc-limited.png' },
  { name: 'Dream11', file: 'dream11.png' },
  { name: 'Tanishq', file: 'tanishq.png' },
  { name: 'State Bank of India (SBI)', file: 'sbi.png' },
  { name: 'Max Life Insurance', file: 'max-life.png' },
  { name: 'Star Health Insurance', file: 'star-health.png' },
  { name: 'IDFC First Bank', file: 'idfc-first-bank.png' },
  { name: 'D\'damas', file: 'ddamas.png' },
  { name: 'LIC of India', file: 'lic.png' },
  { name: 'DMart', file: 'dmart.png' },
  { name: 'Godrej', file: 'godrej.png' },
  { name: 'Reliance Industries', file: 'reliance.png' },
];

export default function Placements() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Testimonial slider auto-play
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

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
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-24">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-[clamp(38px,5.2vw,64px)] font-bold text-deep tracking-tight">
            Careers start here.
          </h1>
          <p className="text-muted text-lg sm:text-[19px] mt-4 leading-relaxed max-w-2xl mx-auto">
            Practical education tailored for hiring expectations, backed by dedicated job training, recruitment drives, and corporate networking.
          </p>
        </div>
      </section>

      {/* ─── 100% JOB ASSISTANCE SECTION ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="glass-panel rounded-panel p-8 sm:p-12 shadow-signature relative overflow-hidden">
            {/* Ambient specular corner */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-soft/50 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-300/80 shadow-sm">
                  Verified Brochure Commitment
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-deep">
                  100% Job Assistance.
                </h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed">
                  Infodesk Computer Education provides 100% job assistance to enrolled students upon successful course completion. Our career services team bridges students with technology teams through direct recruitment coordination.
                </p>

                {/* Placement support mechanism */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-ink/85">
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
                    <span className="text-muted">
                      [PLACEMENT_PROCESS_PLACEHOLDER: Verified corporate interview pipeline dispatch guidelines]
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Call to Action */}
              <div className="lg:col-span-4 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/90 shadow-sm text-center space-y-3">
                <Briefcase size={32} className="mx-auto text-primary" />
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

      {/* ─── JOBS AND PLACEMENT PARTNERS GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Jobs and placement partners.
            </h2>
            <p className="text-muted text-base mt-2">
              Organizations where our qualified candidates explore career opportunities, recruitment drives, and industrial internships.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {partnerList.map((partner) => (
              <div
                key={partner.name}
                className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center group h-28 cursor-default"
                title={partner.name}
              >
                <img
                  src={`/assets/partners/${partner.file}`}
                  alt={`${partner.name} Logo`}
                  className="max-h-14 max-w-[85%] object-contain filter group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Mandatory Footnote */}
          <p className="text-center text-xs text-muted mt-8">
            All logos and trademarks are properties of their respective owners.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── STUDENT TESTIMONIALS SLIDER ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[clamp(32px,4.4vw,48px)] font-bold text-deep">
              Student testimonials.
            </h2>
            <p className="text-muted text-base mt-2">
              Hear directly from candidates who completed their technical training at Infodesk Computer Education.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative glass-panel rounded-panel p-8 sm:p-12 shadow-signature overflow-hidden">
            {/* Specular glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-soft/50 rounded-full blur-2xl pointer-events-none" />

            <Quote className="text-primary/15 absolute top-6 left-6" size={56} />

            <div className="relative min-h-[200px] flex flex-col justify-between z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                  className="space-y-6"
                >
                  <blockquote className="text-base sm:text-lg text-ink/90 leading-relaxed italic relative z-10">
                    "{activeTestimonial.quote}"
                  </blockquote>

                  <div className="flex items-center gap-4 pt-4 border-t border-line/60">
                    <img
                      src={activeTestimonial.image}
                      alt={activeTestimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/30 shadow-sm"
                    />
                    <div>
                      <h4 className="font-bold text-deep text-base">{activeTestimonial.name}</h4>
                      <p className="text-xs text-primary font-semibold">{activeTestimonial.role}</p>
                      <p className="text-xs text-muted">Infodesk Computer Education</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-line/40">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === idx ? 'w-6 bg-primary' : 'w-2 bg-line hover:bg-muted'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-background border border-line hover:bg-soft text-deep transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-background border border-line hover:bg-soft text-deep transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
