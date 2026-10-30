'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Sparkles, Code2, Database, ShieldCheck, 
  Palette, Cpu, CheckCircle2, Award, Users, BookOpen, 
  TrendingUp, Terminal, Star, Clock, Laptop
} from 'lucide-react';

const stats = [
  { value: '15,000+', label: 'Students Certified' },
  { value: '25+', label: 'Industry Tech Courses' },
  { value: '98%', label: 'Placement Assistance' },
  { value: '15+ Years', label: 'Educational Excellence' },
];

const featuredCourses = [
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    category: 'Software Engineering',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    desc: 'Master frontend & backend with React, Next.js, Node.js, REST APIs, and SQL/NoSQL databases with live capstone projects.',
    icon: Code2,
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    tag: 'Highest Rated',
  },
  {
    id: 'python-ai-data',
    title: 'Python, AI & Data Science',
    category: 'Artificial Intelligence',
    duration: '5 Months',
    level: 'Intermediate',
    desc: 'Deep dive into Python programming, Pandas, NumPy, Machine Learning algorithms, neural networks, and interactive dashboards.',
    icon: Cpu,
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    tag: 'Trending',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Ethical Hacking',
    category: 'Information Security',
    duration: '4 Months',
    level: 'All Levels',
    desc: 'Learn vulnerability analysis, network defense, penetration testing, security hygiene, and real-world threat mitigation.',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, #10b981, #047857)',
    tag: 'High Demand',
  },
  {
    id: 'ui-ux-design',
    title: 'Graphic & UI/UX Product Design',
    category: 'Creative Design',
    duration: '3 Months',
    level: 'Beginner',
    desc: 'Craft intuitive digital products, wireframes, prototypes, brand identities using Figma, Adobe Photoshop, and Illustrator.',
    icon: Palette,
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
    tag: 'Creative',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Advanced Excel',
    category: 'Business Intelligence',
    duration: '3 Months',
    level: 'Beginner',
    desc: 'Master Excel formulas, Power BI dashboards, SQL querying, and business analytics to turn raw data into actionable insights.',
    icon: Database,
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
    tag: 'Career Booster',
  },
  {
    id: 'fullstack-cloud',
    title: 'Cloud Computing & DevOps Basics',
    category: 'Cloud Infrastructure',
    duration: '4 Months',
    level: 'Intermediate',
    desc: 'Understand Docker containers, CI/CD pipelines, AWS fundamentals, and modern scalable server architectures.',
    icon: Terminal,
    gradient: 'linear-gradient(135deg, #06b6d4, #0e7490)',
    tag: 'Next-Gen',
  },
];

const highlights = [
  {
    title: '100% Practical Labs',
    desc: 'No endless boring lectures. Spend 80% of your time coding and building real-world projects in our modern computer labs.',
    icon: Laptop,
  },
  {
    title: 'Government Recognized Diplomas',
    desc: 'Earn certificates and diplomas that carry weight with employers across India and internationally.',
    icon: Award,
  },
  {
    title: 'Expert Industry Mentors',
    desc: 'Learn directly from practicing senior engineers and industry veterans who provide 1-on-1 guidance.',
    icon: Users,
  },
  {
    title: 'Placement & Career Support',
    desc: 'Comprehensive interview training, resume building, portfolio curation, and direct hiring campus drives.',
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Junior Frontend Developer at TechCorp',
    course: 'Full Stack Web Development',
    quote: 'Infodesk transformed my career completely. The mentors sat with me through every debugging hurdle. Within 2 months of graduation, I landed my first developer job.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    role: 'Data Analyst at FinServe',
    course: 'Data Analytics & Power BI',
    quote: 'The practical approach with real business datasets gave me tremendous confidence. The curriculum is directly aligned with what companies test in interviews.',
    rating: 5,
  },
  {
    name: 'Aamir Khan',
    role: 'UI/UX Designer at CreativeMinds',
    course: 'Graphic & UI/UX Design',
    quote: 'From zero design knowledge to building interactive Figma prototypes and client logos. The personal feedback on my portfolio made all the difference.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '6rem' }}>
      
      {/* ─── 1. HERO SECTION ─── */}
      <section style={{
        position: 'relative',
        padding: '5rem 0 3rem',
        overflow: 'hidden',
      }}>
        {/* Subtle Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(50px)',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Eyebrow Status Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.25)',
            color: '#60a5fa',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.75rem',
          }}>
            <Sparkles size={14} />
            <span>Admissions Open for 2026 Batches</span>
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.3rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            maxWidth: '920px',
            marginInline: 'auto',
          }}>
            Launch Your Future in <br />
            <span style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Modern Computing &amp; Technology
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            maxWidth: '680px',
            margin: '0 auto 2.5rem',
          }}>
            Hands-on IT education, professional certifications, and industry-standard practical training designed to take you from beginner to job-ready.
          </p>

          {/* Action CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}>
            <Link href="/courses" className="btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Explore All Courses <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}>
              Book Free Counseling
            </Link>
          </div>

          {/* Key Trust Signals */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.88rem',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> Govt. Recognized Certification
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> 1-on-1 Faculty Mentorship
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38bdf8" /> Weekend &amp; Regular Batches
            </span>
          </div>
        </div>
      </section>

      {/* ─── 2. STATS SECTION ─── */}
      <section className="container">
        <div className="glass-card" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '2.5rem 2rem',
          textAlign: 'center',
        }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: '0.25rem',
                background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.92rem', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. FEATURED COURSES SECTION ─── */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            color: 'var(--brand-primary)',
            fontSize: '0.88rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Industry-Ready Curricula
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Explore Popular Career Programs
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            Built around current employer requirements with project-based assessments and practical portfolio pieces.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}>
          {featuredCourses.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Header row with Icon and Tag */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.25rem',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: c.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                  }}>
                    {c.tag}
                  </span>
                </div>

                {/* Course Metadata */}
                <div style={{ color: 'var(--brand-cyan)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {c.category}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: '#ffffff' }}>
                  {c.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', flex: 1, marginBottom: '1.5rem' }}>
                  {c.desc}
                </p>

                {/* Footer details */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.85rem',
                  color: 'var(--text-faint)',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Clock size={15} /> {c.duration}
                  </span>
                  <Link
                    href={`/courses/${c.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--brand-primary)',
                      fontWeight: 600,
                    }}
                  >
                    Curriculum <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/courses" className="btn-secondary" style={{ padding: '0.85rem 2rem' }}>
            View Full Course Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── 4. WHY CHOOSE INFODESK ─── */}
      <section className="container">
        <div className="glass-card" style={{ padding: '3.5rem 2.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1rem' }}>
              Why Thousands Choose Infodesk
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              We prioritize tangible skill mastery over mere credentialism. Here is what makes our learning experience distinct.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem',
          }}>
            {highlights.map((h, index) => {
              const Icon = h.icon;
              return (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.75rem',
                    background: 'rgba(59, 130, 246, 0.15)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                  }}>
                    <Icon size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                    {h.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 5. STUDENT TESTIMONIALS ─── */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            color: 'var(--brand-primary)',
            fontSize: '0.88rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Alumni Stories
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Hear from Our Successful Graduates
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
            From students and career changers to working professionals upgrading their stack.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                fontStyle: 'italic',
                flex: 1,
                marginBottom: '1.5rem',
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>
                  {t.name}
                </div>
                <div style={{ color: 'var(--brand-primary)', fontSize: '0.82rem', fontWeight: 600 }}>
                  {t.role}
                </div>
                <div style={{ color: 'var(--text-faint)', fontSize: '0.8rem', marginTop: '0.15rem' }}>
                  Completed {t.course}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FINAL ENROLLMENT CALL TO ACTION ─── */}
      <section className="container">
        <div style={{
          position: 'relative',
          padding: '4rem 2rem',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.5) 0%, rgba(88, 28, 135, 0.4) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          textAlign: 'center',
          overflow: 'hidden',
        }}>
          <div style={{ maxWidth: '650px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem', color: '#ffffff' }}>
              Ready to Accelerate Your Career?
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Join upcoming batches in web development, AI, data science, and design. Speak with our academic mentors to choose the right path for your goals.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link href="/admissions" className="btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}>
                Apply for Admission <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-secondary" style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}>
                Contact Academic Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
