'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, Calendar, FileText, ArrowRight, Clock, HelpCircle } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Explore & Choose Program',
    desc: 'Browse our curriculum tracks or schedule a 1-on-1 counseling session with our senior advisors to find the program best matching your career goals.',
  },
  {
    num: '02',
    title: 'Submit Application',
    desc: 'Fill out our simplified online admission form or visit our campus office to complete basic enrollment verification.',
  },
  {
    num: '03',
    title: 'Orientation & Lab Setup',
    desc: 'Receive your student ID card, development environment setup guide, access to the learning portal, and batch timetable.',
  },
  {
    num: '04',
    title: 'Commence Hands-on Classes',
    desc: 'Join your designated cohort, meet your mentor, and start building projects in our dual-monitor tech workstation labs.',
  },
];

export default function AdmissionsPage() {
  const [enrolled, setEnrolled] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    batchPreference: 'Weekday Evening',
    course: 'Full Stack Web Development',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolled(true);
  };

  return (
    <div style={{ padding: '4rem 0 6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <div style={{
            color: 'var(--brand-primary)',
            fontSize: '0.88rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.5rem',
          }}>
            Admissions &amp; Enrollment
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}>
            Begin Your Journey Today
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Our streamlined admission process ensures a frictionless start. Seats in practical lab cohorts are limited to ensure individual attention.
          </p>
        </div>

        {/* 4-Step Process */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
            4 Simple Steps to Get Started
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
          }}>
            {steps.map((s, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem', position: 'relative' }}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(59, 130, 246, 0.3)',
                  marginBottom: '1rem',
                  fontFamily: 'var(--font-display)',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form and Batch Info */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Batch Timings Card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>
              Flexible Batch Schedules
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Weekday Morning</strong>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                    Available
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Monday – Friday | 9:00 AM – 11:30 AM</p>
              </div>

              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Weekday Evening</strong>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' }}>
                    Popular
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Monday – Friday | 6:30 PM – 9:00 PM</p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ color: '#ffffff', fontSize: '1rem' }}>Weekend Fast-Track</strong>
                  <span style={{ fontSize: '0.8rem', padding: '0.2rem 0.5rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                    Working Pros
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Saturday &amp; Sunday | 10:00 AM – 2:30 PM</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                <HelpCircle size={16} /> Need installment plans or fee details?
              </div>
              <p style={{ color: 'var(--text-faint)', fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Zero-interest monthly installments are available on select 6-month diploma programs.
              </p>
            </div>
          </div>

          {/* Online Application Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
              Reserve Your Seat Online
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Lock in your admission priority for the upcoming batch.
            </p>

            {enrolled ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '1rem',
              }}>
                <CheckCircle2 size={48} color="#60a5fa" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Application Received!
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '400px', margin: '0 auto' }}>
                  Thank you, <strong>{form.name}</strong>. Your provisional application for <strong>{form.course}</strong> ({form.batchPreference}) is registered. Our admission officer will reach out today.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Amaan Shaikh"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        outline: 'none',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="student@example.com"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        outline: 'none',
                        fontSize: '0.95rem',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Target Program
                  </label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    <option value="Full Stack Web Development">Full Stack Web Development (6 Mos)</option>
                    <option value="Python, AI & Data Science">Python, AI &amp; Data Science (5 Mos)</option>
                    <option value="Cyber Security">Cyber Security (4 Mos)</option>
                    <option value="Graphic & UI/UX Design">Graphic &amp; UI/UX Design (3 Mos)</option>
                    <option value="Data Analytics & Excel">Data Analytics &amp; Excel (3 Mos)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    Preferred Batch Timing
                  </label>
                  <select
                    value={form.batchPreference}
                    onChange={(e) => setForm({ ...form, batchPreference: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      outline: 'none',
                      fontSize: '0.95rem',
                    }}
                  >
                    <option value="Weekday Morning">Weekday Morning (9:00 AM – 11:30 AM)</option>
                    <option value="Weekday Evening">Weekday Evening (6:30 PM – 9:00 PM)</option>
                    <option value="Weekend Fast-Track">Weekend Fast-Track (Sat &amp; Sun)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  Submit Admission Form <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
