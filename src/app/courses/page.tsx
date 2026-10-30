'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, Database, ShieldCheck, Palette, 
  Cpu, Terminal, Clock, ArrowRight, Search 
} from 'lucide-react';

const allCourses = [
  {
    id: 'fullstack-web',
    title: 'Full Stack Web Development',
    category: 'Software Engineering',
    duration: '6 Months',
    level: 'Beginner to Advanced',
    desc: 'Master HTML, CSS, JavaScript, React, Next.js, Node.js, Express, PostgreSQL, Prisma, and deployment workflows.',
    icon: Code2,
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
  },
  {
    id: 'python-ai-data',
    title: 'Python, AI & Machine Learning',
    category: 'Data & AI',
    duration: '5 Months',
    level: 'Intermediate',
    desc: 'Comprehensive Python programming, data wrangling with Pandas/NumPy, scikit-learn ML models, and neural networks.',
    icon: Cpu,
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security & Network Defense',
    category: 'Cyber Security',
    duration: '4 Months',
    level: 'All Levels',
    desc: 'Network fundamentals, ethical hacking principles, vulnerability scanning, security audits, and risk assessment.',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, #10b981, #047857)',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Digital Product Design',
    category: 'Design',
    duration: '3 Months',
    level: 'Beginner',
    desc: 'User empathy, information architecture, wireframing, high-fidelity prototypes in Figma, and design systems.',
    icon: Palette,
    gradient: 'linear-gradient(135deg, #ec4899, #be185d)',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Power BI',
    category: 'Data & AI',
    duration: '3 Months',
    level: 'Beginner',
    desc: 'Advanced Excel formulas, pivot tables, DAX calculations in Power BI, SQL database queries, and interactive reporting.',
    icon: Database,
    gradient: 'linear-gradient(135deg, #f59e0b, #b45309)',
  },
  {
    id: 'cloud-devops',
    title: 'DevOps & Cloud Engineering',
    category: 'Software Engineering',
    duration: '4 Months',
    level: 'Intermediate',
    desc: 'Linux administration, Git version control, Docker containerization, CI/CD with GitHub Actions, and AWS fundamentals.',
    icon: Terminal,
    gradient: 'linear-gradient(135deg, #06b6d4, #0e7490)',
  },
];

const categories = ['All', 'Software Engineering', 'Data & AI', 'Cyber Security', 'Design'];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = allCourses.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '4rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            Explore Our Programs
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Comprehensive, industry-accredited courses engineered to give you the skills, projects, and certifications that employers look for.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
        }}>
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: activeCategory === cat ? 'var(--brand-primary)' : 'var(--bg-surface-elevated)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-muted)',
                  border: `1px solid ${activeCategory === cat ? 'transparent' : 'var(--border-subtle)'}`,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.55rem 1rem',
            borderRadius: '9999px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            minWidth: '240px',
          }}>
            <Search size={16} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                width: '100%',
              }}
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {filtered.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '0.75rem',
                    background: c.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--brand-cyan)', fontWeight: 600, textTransform: 'uppercase' }}>
                      {c.category}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>
                      {c.title}
                    </h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', flex: 1, marginBottom: '1.5rem' }}>
                  {c.desc}
                </p>

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
                    <Clock size={15} /> {c.duration} · {c.level}
                  </span>
                  <Link
                    href={`/admissions`}
                    className="btn-primary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                  >
                    Enroll Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            No courses found matching your criteria. Try adjusting the filter or search term.
          </div>
        )}
      </div>
    </div>
  );
}
