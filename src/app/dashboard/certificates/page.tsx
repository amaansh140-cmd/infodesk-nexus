'use client';

import { useState, useEffect } from 'react';
import { 
  Award, Download, Lock, CheckCircle2
} from 'lucide-react';
import styles from '../dashboard.module.css';
import { motion } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, getDocs } from 'firebase/firestore';

export default function CertificatesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const coursesRef = collection(db, 'users', currentUser.uid, 'enrolledCourses');
          const querySnapshot = await getDocs(query(coursesRef));
          setCourses(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null;

  return (
    <div className={styles.certificatesPage}>
      <motion.div 
        className={`liquid-glass ${styles.welcomeBanner}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 className={styles.welcomeTitle}>Professional Certifications</h2>
          <p className={`${styles.welcomeSub} theme-text-muted`}>
            Verify your skills and download your industry-recognized credentials.
          </p>
        </div>
      </motion.div>

      <div className={styles.certGrid}>
        {courses.length === 0 ? (
          <div className={`liquid-glass ${styles.emptyState}`} style={{ padding: '4rem', gridColumn: 'span 3' }}>
            <Award size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <p className="theme-text-muted">No certificates yet. Complete a course to earn your credentials.</p>
          </div>
        ) : (
          courses.map((course, idx) => {
            const isCompleted = (course.progress || 0) >= 100;
            return (
              <motion.div 
                key={course.id}
                className={`liquid-glass-strong ${styles.certCard}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className={styles.certIcon}>
                  {isCompleted ? <Award size={32} style={{ color: course.color }} /> : <Lock size={32} />}
                </div>

                <div className={styles.certInfo}>
                  <h3 className={styles.sectionTitle} style={{ marginBottom: '0.25rem' }}>{course.title}</h3>
                  <p className="theme-text-faint" style={{ fontSize: '0.75rem' }}>Professional Certification</p>
                </div>

                {isCompleted ? (
                  <button className={`${styles.downloadBtn} hover-scale`} style={{ background: course.color }}>
                    <Download size={16} style={{ marginRight: '8px' }} />
                    Download PDF
                  </button>
                ) : (
                  <div className={styles.progressSection} style={{ width: '100%' }}>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill} style={{ width: `${course.progress}%`, background: course.color }} />
                    </div>
                    <p className="theme-text-faint" style={{ fontSize: '0.65rem', marginTop: '0.5rem', textAlign: 'center' }}>
                      {100 - course.progress}% more to unlock
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
