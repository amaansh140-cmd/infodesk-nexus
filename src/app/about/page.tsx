'use client';

import React from 'react';
import Link from 'next/link';
import { Award, Laptop, Users, Target, CheckCircle2, ArrowRight } from 'lucide-react';

const coreValues = [
  {
    title: 'Practical-First Learning',
    desc: 'We believe knowledge without hands-on implementation is incomplete. Students build tangible software and design portfolios.',
    icon: Laptop,
  },
  {
    title: 'Industry Aligned Curricula',
    desc: 'Our syllabi are reviewed and updated every quarter with tech recruiters and software leads to match modern hiring bars.',
    icon: Target,
  },
  {
    title: 'Personalized Mentorship',
    desc: 'Small batch sizes ensure every student receives 1-on-1 code reviews, project debugging support, and career guidance.',
    icon: Users,
  },
  {
    title: 'Recognized Credentials',
    desc: 'Government-registered certifications that substantiate your qualifications for domestic and global career opportunities.',
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div style={{ padding: '4rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <div style={{
            color: 'var(--brand-primary)',
            fontSize: '0.88rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            About Infodesk Computer Education
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}>
            Shaping the Tech Leaders of Tomorrow
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            For over 15 years, Infodesk has empowered thousands of learners with practical computer skills, industry certifications, and successful careers in IT and modern technology.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-card" style={{ padding: '3.5rem 2.5rem', marginBottom: '4rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                Our Mission &amp; Philosophy
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                In an era of rapid digital evolution, theoretical rote memorization is obsolete. At Infodesk, our classroom model operates like a modern technology development studio.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Whether you are a university undergraduate seeking your first internship or a professional transitioning into full stack engineering or data science, our structured roadmaps bridge the gap between education and high-paying jobs.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                  <CheckCircle2 size={18} color="var(--brand-primary)" /> State-of-the-art dual-monitor computing laboratories
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                  <CheckCircle2 size={18} color="var(--brand-primary)" /> Weekend and flexible evening batches for working professionals
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff' }}>
                  <CheckCircle2 size={18} color="var(--brand-primary)" /> Lifetime access to alumni networks and campus placement drives
                </span>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
              border: '1px solid var(--border-subtle)',
              borderRadius: '1.25rem',
              padding: '2.5rem',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#60a5fa', marginBottom: '0.25rem' }}>
                15,000+
              </div>
              <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '2rem' }}>
                Graduates Successfully Trained
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', textAlign: 'left' }}>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff' }}>98%</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Placement Rate</div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight 800, color: '#ffffff' }}>25+</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Industry Programs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem' }}>
            What Sets Us Apart
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
          }}>
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '0.75rem',
                    background: 'rgba(59, 130, 246, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                    marginBottom: '1.25rem',
                  }}>
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/courses" className="btn-primary" style={{ padding: '0.85rem 2.25rem', fontSize: '1rem' }}>
            Browse Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
