'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Courses', href: '/courses' },
  { label: 'About Us', href: '/about' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      width: '100%',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      background: 'rgba(10, 14, 23, 0.75)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 'var(--nav-height)',
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Image
            src="/logo.png"
            alt="Infodesk Logo"
            width={140}
            height={36}
            style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTA */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-actions">
          <Link href="/login" className="btn-secondary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
            Portal Login
          </Link>
          <Link href="/courses" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
            Explore <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '0.5rem',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            background: 'var(--bg-surface-elevated)',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(10, 14, 23, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-main)',
                padding: '0.5rem 0',
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Portal Login
            </Link>
            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          :global(.desktop-nav) {
            display: flex !important;
          }
          :global(.desktop-actions) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
