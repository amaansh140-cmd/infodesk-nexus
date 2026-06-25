'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [deviceId, setDeviceId] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  // Initialize or fetch device ID
  React.useEffect(() => {
    let storedDeviceId = localStorage.getItem('infodesk_device_id');
    if (!storedDeviceId) {
      storedDeviceId = crypto.randomUUID();
      localStorage.setItem('infodesk_device_id', storedDeviceId);
    }
    setDeviceId(storedDeviceId);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const cleanId = identifier.trim();
    const cleanPass = password.trim();

    try {
      const payload: any = { identifier: cleanId, password: cleanPass, deviceId };
      if (needsVerification) {
        payload.verificationCode = verificationCode.trim();
      }

      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        
        if (res.status === 403 && errorData.error === 'device_verification_required') {
          setNeedsVerification(true);
          setError(errorData.message);
          return;
        }

        setError(errorData.error || 'Invalid username or password.');
        return;
      }

      const userData = await res.json();
      login(userData);
      
      // Redirect based on role
      switch (userData.role) {
        case 'superadmin': router.push('/super-admin'); break;
        case 'subadmin': router.push('/sub-admin'); break;
        case 'faculty': router.push('/faculty'); break;
        case 'student': router.push('/student'); break;
        default: router.push('/login');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className={styles.page}>
      <motion.div 
        className={`liquid-glass-strong ${styles.loginCard}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Enter your details to access your account.</p>
        </div>

        {error && (
          <div style={{ color: '#ef4444', fontSize: '0.875rem', background: 'rgba(239, 68, 68, 0.1)', padding: '0.75rem', borderRadius: '0.5rem', textAlign: 'center', marginBottom: '1rem' }}>
            {error}
          </div>
        )}



        <form onSubmit={handleLogin} className={styles.form}>
          {!needsVerification ? (
            <>
              <div className={styles.inputGroup}>
                <label htmlFor="identifier" className={styles.label}>Email Address or Username</label>
                <div className={styles.inputWrap}>
                  <Mail size={18} className={styles.icon} />
                  <input
                    id="identifier"
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="you@example.com or username"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <Link href="/login" className={styles.link} style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(17, 24, 39, 0.6)' }}>
                    Forgot password?
                  </Link>
                </div>
                <div className={styles.inputWrap}>
                  <Lock size={18} className={styles.icon} />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={styles.input}
                    required
                  />
                </div>
              </div>
            </>
          ) : (
            <div className={styles.inputGroup}>
              <label htmlFor="verificationCode" className={styles.label}>Device Verification Code</label>
              <div className={styles.inputWrap}>
                <Lock size={18} className={styles.icon} />
                <input
                  id="verificationCode"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter 6-digit code from Super Admin"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          )}

          <button type="submit" className={styles.submitBtn}>
            {needsVerification ? 'Verify Device' : 'Sign In'} <ArrowRight size={18} />
          </button>
        </form>

        <div className={styles.footer}>
          Don't have an account?{' '}
          <Link href="/login" className={styles.link}>
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
