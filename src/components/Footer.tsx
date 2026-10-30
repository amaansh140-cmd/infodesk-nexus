'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(10, 14, 23, 0.85)',
      padding: '4rem 0 2rem',
      marginTop: 'auto',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem',
      }}>
        {/* Brand Info */}
        <div>
          <Image
            src="/logo.png"
            alt="Infodesk Logo"
            width={140}
            height={36}
            style={{ objectFit: 'contain', height: '36px', width: 'auto', marginBottom: '1.25rem' }}
          />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', maxWidth: '300px' }}>
            Empowering the next generation of digital leaders through hands-on computer education, software engineering, and modern IT career training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li><Link href="/courses" style={{ transition: 'color 0.2s' }}>All Courses</Link></li>
            <li><Link href="/admissions" style={{ transition: 'color 0.2s' }}>Admissions</Link></li>
            <li><Link href="/about" style={{ transition: 'color 0.2s' }}>About Infodesk</Link></li>
            <li><Link href="/contact" style={{ transition: 'color 0.2s' }}>Contact &amp; Locations</Link></li>
          </ul>
        </div>

        {/* Student Portals */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            Portals
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li><Link href="/login" style={{ transition: 'color 0.2s' }}>Student Login</Link></li>
            <li><Link href="/login" style={{ transition: 'color 0.2s' }}>Faculty Portal</Link></li>
            <li><Link href="/login" style={{ transition: 'color 0.2s' }}>Administration</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>
            Contact Us
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} color="var(--brand-primary)" />
              <span>info@infodesk.edu</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="var(--brand-primary)" />
              <span>+91 98765 43210</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
              <MapPin size={16} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
              <span>Infodesk Computer Education Centre, Mumbai, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container" style={{
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '0.85rem',
        color: 'var(--text-faint)',
      }}>
        <p>&copy; {new Date().getFullYear()} Infodesk Computer Education. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          Crafted with care for learners everywhere
        </p>
      </div>
    </footer>
  );
}
