'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, User, Shield, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState<'student' | 'faculty' | 'admin'>('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Visual feedback for login in the fresh starter project
    setTimeout(() => {
      setLoading(false);
      setMessage(`Logged in successfully as ${role.toUpperCase()} (${username || 'User'})`);
    }, 600);
  };

  return (
    <div style={{
      minHeight: 'calc(100dvh - var(--nav-height) - 100px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1.5rem',
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '440px',
        padding: '2.5rem',
        borderRadius: '1.25rem',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <Image
            src="/logo.png"
            alt="Infodesk"
            width={120}
            height={32}
            style={{ objectFit: 'contain', height: '32px', width: 'auto', margin: '0 auto 1.25rem' }}
          />
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.35rem' }}>
            Portal Sign In
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Access course materials, attendance, and student records
          </p>
        </div>

        {/* Role Tabs */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0.35rem',
          padding: '0.35rem',
          borderRadius: '0.75rem',
          background: 'var(--bg-primary)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.75rem',
        }}>
          {(['student', 'faculty', 'admin'] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => { setRole(r); setMessage(null); }}
              style={{
                padding: '0.55rem',
                borderRadius: '0.5rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                textTransform: 'capitalize',
                transition: 'all 0.2s',
                background: role === r ? 'var(--brand-primary)' : 'transparent',
                color: role === r ? '#ffffff' : 'var(--text-muted)',
              }}
            >
              {r}
            </button>
          ))}
        </div>

        {message && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            color: '#34d399',
            fontSize: '0.88rem',
            marginBottom: '1.25rem',
          }}>
            <CheckCircle2 size={16} />
            <span>{message}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              {role === 'student' ? 'Student Roll No / Username' : 'Username / Email'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={role === 'student' ? 'e.g. INF-2026-042' : 'Enter username'}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '0.95rem',
                }}
              />
              <User size={16} color="var(--text-faint)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.5rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '0.95rem',
                }}
              />
              <Lock size={16} color="var(--text-faint)" style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: 'var(--brand-primary)' }} />
              Remember me
            </label>
            <Link href="/contact" style={{ color: 'var(--brand-primary)', textDecoration: 'none' }}>
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', padding: '0.85rem', fontSize: '0.95rem', marginTop: '0.5rem' }}
          >
            {loading ? 'Authenticating...' : `Sign in as ${role}`} <ArrowRight size={16} />
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.75rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Don&apos;t have a student account yet?{' '}
          <Link href="/admissions" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
            Apply for Admission
          </Link>
        </div>
      </div>
    </div>
  );
}
