'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, doc, setDoc, getDoc } from 'firebase/firestore';
import { QrCode, CheckCircle2, XCircle, Loader2, ArrowRight } from 'lucide-react';
import styles from './attendance.module.css';
import Link from 'next/link';

export default function StudentAttendancePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [code, setCode] = useState(searchParams.get('code') || '');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      if (!u) router.push('/auth');
    });
    return () => unsubscribe();
  }, [router]);

  // If code is in URL, auto-submit
  useEffect(() => {
    if (code && user && status === 'idle') {
      handleMarkAttendance();
    }
  }, [code, user]);

  const handleMarkAttendance = async () => {
    if (!code || !user) return;
    setStatus('loading');
    try {
      // 1. Find active session with this code
      const q = query(
        collection(db, 'attendanceSessions'), 
        where('code', '==', code.toUpperCase()),
        where('expiresAt', '>', new Date().toISOString())
      );
      
      const sessionSnap = await getDocs(q);
      
      if (sessionSnap.empty) {
        setStatus('error');
        setMessage('Invalid or expired attendance code. Please try again with a fresh scan.');
        return;
      }

      const sessionData = sessionSnap.docs[0].data();
      const { courseId, courseTitle } = sessionData;
      const today = new Date().toISOString().split('T')[0];
      const recordId = `${courseId}_${today}`;

      // 2. Check if student is enrolled in this course
      const enrollmentSnap = await getDoc(doc(db, 'users', user.uid, 'enrolledCourses', courseId));
      if (!enrollmentSnap.exists()) {
        setStatus('error');
        setMessage(`You are not enrolled in "${courseTitle}". Attendance cannot be marked.`);
        return;
      }

      // 3. Mark attendance
      const attendanceRef = doc(db, 'attendance', recordId);
      const attendanceSnap = await getDoc(attendanceRef);
      
      const records = attendanceSnap.exists() ? attendanceSnap.data().records || {} : {};
      records[user.uid] = 'present';

      await setDoc(attendanceRef, {
        courseId,
        courseTitle,
        date: today,
        updatedAt: new Date().toISOString(),
        records
      }, { merge: true });

      setStatus('success');
      setMessage(`Successfully marked Present for ${courseTitle}!`);
      
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setMessage('Failed to mark attendance. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={`liquid-glass-strong ${styles.card}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <AnimatePresence mode="wait">
          {status === 'idle' || status === 'loading' ? (
            <motion.div key="input" className={styles.content}>
              <div className={styles.iconWrap}>
                {status === 'loading' ? <Loader2 className="animate-spin" size={40} /> : <QrCode size={40} />}
              </div>
              <h2>Mark Attendance</h2>
              <p className="theme-text-muted">Enter the 6-digit code from the classroom screen.</p>
              
              <div className={styles.inputGroup}>
                <input 
                  type="text" 
                  placeholder="EX: A1B2C3" 
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  className={styles.input}
                  maxLength={6}
                />
                <button 
                  className={styles.submitBtn}
                  onClick={handleMarkAttendance}
                  disabled={status === 'loading' || code.length < 6}
                >
                  {status === 'loading' ? 'Verifying...' : 'Submit Code'}
                </button>
              </div>
            </motion.div>
          ) : status === 'success' ? (
            <motion.div key="success" className={styles.content}>
              <div className={styles.iconWrapSuccess}>
                <CheckCircle2 size={40} color="#10b981" />
              </div>
              <h2>Attendance Recorded</h2>
              <p className="theme-text-muted">{message}</p>
              <Link href="/dashboard" className={styles.homeBtn}>
                Go to Dashboard <ArrowRight size={16} />
              </Link>
            </motion.div>
          ) : (
            <motion.div key="error" className={styles.content}>
              <div className={styles.iconWrapError}>
                <XCircle size={40} color="#ef4444" />
              </div>
              <h2>Submission Failed</h2>
              <p className="theme-text-muted">{message}</p>
              <button className={styles.retryBtn} onClick={() => setStatus('idle')}>
                Try Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
