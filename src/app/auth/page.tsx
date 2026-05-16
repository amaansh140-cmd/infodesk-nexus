'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import styles from './auth.module.css';

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loginRole, setLoginRole] = useState<'student' | 'admin'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          let actualRole = 'student'; // Default fallback
          let hasDoc = false;

          // First try finding by UID
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          
          if (userDoc.exists()) {
            actualRole = userDoc.data().role || 'student';
            hasDoc = true;
          } else {
            // If not found by UID, try by email (for CSV imported students)
            if (user.email) {
              const { collection, query, where, getDocs } = await import('firebase/firestore');
              const q = query(collection(db, 'users'), where('email', '==', user.email.toLowerCase()));
              const querySnapshot = await getDocs(q);
              
              if (!querySnapshot.empty) {
                actualRole = querySnapshot.docs[0].data().role || 'student';
                hasDoc = true;
              }
            }
          }

          // Owner Backdoor: Auto-promote and recreate doc for the main admin
          if (user.email && user.email.toLowerCase() === 'amaansh140@gmail.com') {
            actualRole = 'admin';
            const { setDoc } = await import('firebase/firestore');
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || 'Admin',
              role: 'admin',
              updatedAt: new Date().toISOString()
            }, { merge: true });
            hasDoc = true;
          }

          // Fallback: If auth exists but Firestore doc is missing, recreate it
          if (!hasDoc) {
            const { setDoc } = await import('firebase/firestore');
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || 'Student',
              role: 'student',
              createdAt: new Date().toISOString()
            });
          }

          if (loginRole === 'admin' && actualRole !== 'admin') {
            await auth.signOut();
            setError('Access Denied: You do not have administrator privileges.');
            return;
          }

          if (actualRole === 'admin') {
            router.push('/admin');
          } else {
            router.push('/dashboard');
          }
          
        } catch (err) {
          console.error("Error fetching user role:", err);
          router.push('/dashboard');
        }
      }
    });
    return () => unsubscribe();
  }, [router, loginRole]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          email: email,
          displayName: fullName,
          role: 'student'
        });
      }
      // Routing is handled by onAuthStateChanged
    } catch (err: any) {
      // Map Firebase errors to user-friendly messages
      let msg = err.message;
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        msg = 'Invalid email or password.';
      } else if (err.code === 'auth/email-already-in-use') {
        msg = 'An account with this email already exists.';
      } else if (err.code === 'auth/weak-password') {
        msg = 'Password should be at least 6 characters.';
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setError('');
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: 'student'
        });
      }
      // Routing is handled by onAuthStateChanged
    } catch (err: any) {
      setError(err.message || 'Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

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
          <div className={styles.roleToggleWrapper}>
            <button 
              className={`${styles.roleBtn} ${loginRole === 'student' ? styles.roleBtnActive : ''}`}
              onClick={() => { setLoginRole('student'); setError(''); }}
            >
              Student Portal
            </button>
            <button 
              className={`${styles.roleBtn} ${loginRole === 'admin' ? styles.roleBtnActive : ''}`}
              onClick={() => { setLoginRole('admin'); setIsSignIn(true); setError(''); }}
            >
              Admin Portal
            </button>
          </div>
          
          <h1 className={styles.title}>
            {loginRole === 'admin' ? 'Admin Gateway' : 'Welcome to Nexus'}
          </h1>
          <p className={styles.subtitle}>
            {loginRole === 'admin' 
              ? 'Enter your credentials to access the admin portal.'
              : isSignIn 
                ? 'Log in to continue your learning journey.' 
                : 'Create an account to unlock everything.'}
          </p>
        </div>

        {/* Toggle Controls (Hidden for Admin) */}
        {loginRole === 'student' && (
          <div className={styles.toggleWrapper}>
            <motion.div
              className={styles.toggleSlider}
              animate={{ x: isSignIn ? '0%' : '100%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
            <button
              className={`${styles.toggleBtn} ${isSignIn ? styles.toggleBtnActive : ''}`}
              onClick={() => {
                setIsSignIn(true);
                setError('');
              }}
            >
              Sign In
            </button>
            <button
              className={`${styles.toggleBtn} ${!isSignIn ? styles.toggleBtnActive : ''}`}
              onClick={() => {
                setIsSignIn(false);
                setError('');
              }}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Error Display */}
        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={styles.errorBanner}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

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
                onSubmit={handleAuth}
              >
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="student@example.com" 
                    className={styles.input} 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className={styles.input} 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Link href="#" className={styles.forgotPassword}>
                  Forgot Password?
                </Link>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Processing...' : 'Sign In'}
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
                onSubmit={handleAuth}
              >
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className={styles.input} 
                    required 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="student@example.com" 
                    className={styles.input} 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Password</label>
                  <input 
                    type="password" 
                    placeholder="Create a strong password" 
                    className={styles.input} 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {loginRole === 'student' && (
          <div>
            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <span className={styles.dividerText}>Or continue with</span>
              <div className={styles.dividerLine} />
            </div>
            <button className={styles.socialBtn} onClick={handleGoogleSignIn} disabled={loading}>
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
        )}
      </motion.div>
    </div>
  );
}
