'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './auth.module.css';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  // Animation variants for form switcher
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      position: 'absolute' as const,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      position: 'absolute' as const,
    }),
  };

  const direction = isSignIn ? -1 : 1;

  return (
    <div className={styles.page}>
      <motion.div 
        layout
        className={`liquid-glass-strong ${styles.authContainer}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome to Nexus</h1>
          <p className={styles.subtitle}>
            {isSignIn 
              ? 'Log in to continue your learning journey.' 
              : 'Create an account to unlock everything.'}
          </p>
        </div>

        {/* Toggle Controls */}
        <div className={styles.toggleWrapper}>
          <motion.div
            className={styles.toggleSlider}
            animate={{ x: isSignIn ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          <button
            className={`${styles.toggleBtn} ${isSignIn ? styles.toggleBtnActive : ''}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button
            className={`${styles.toggleBtn} ${!isSignIn ? styles.toggleBtnActive : ''}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {/* The Form Area */}
        <div className={styles.formWrapper}>
          <AnimatePresence custom={direction} mode="popLayout" initial={false}>
            {isSignIn ? (
              <motion.form
                key="signin"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" placeholder="student@example.com" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input type="password" placeholder="••••••••" className={styles.input} required />
                </div>
                <Link href="#" className={styles.forgotPassword}>
                  Forgot Password?
                </Link>
                <button type="submit" className={styles.submitBtn}>
                  Sign In
                </button>
              </motion.form>
            ) : (
              <motion.form
                key="signup"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={styles.form}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input type="text" placeholder="John Doe" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" placeholder="student@example.com" className={styles.input} required />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input type="password" placeholder="Create a strong password" className={styles.input} required />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Create Account
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div>
          <div className={styles.divider}>
            <div className={styles.dividerLine} />
            <span className={styles.dividerText}>Or continue with</span>
            <div className={styles.dividerLine} />
          </div>
          <button className={styles.socialBtn}>
            <svg className={styles.googleIcon} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            Google
          </button>
        </div>
      </motion.div>
    </div>
  );
}
