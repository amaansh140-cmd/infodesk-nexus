'use client';

import { useState, useEffect } from 'react';
import { 
  BookOpen, PlayCircle, ArrowRight, Plus
} from 'lucide-react';
import styles from './dashboard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MyCoursesPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const coursesRef = collection(db, 'users', currentUser.uid, 'enrolledCourses');
          const q = query(coursesRef, orderBy('enrolledAt', 'desc'));
          const querySnapshot = await getDocs(q);
          const coursesList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setEnrolledCourses(coursesList);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null; // Layout handles the main loader

  const firstName = user?.displayName?.split(' ')[0] || 'Scholar';
  const hasCourses = enrolledCourses.length > 0;

  return (
    <>
      {/* Welcome Banner */}
      <motion.div 
        className={`liquid-glass ${styles.welcomeBanner}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div>
          <h2 className={styles.welcomeTitle}>Welcome back, {firstName} 👋</h2>
          <p className={`${styles.welcomeSub} theme-text-muted`}>
            {hasCourses 
              ? `You have ${enrolledCourses.length} active programs in your curriculum.` 
              : "Ready to start your learning journey? Explore our catalog below."}
          </p>
        </div>
        <div className={`liquid-glass ${styles.streakBadge}`}>
          <span className={styles.streakNum}>{hasCourses ? '1' : '0'}</span>
          <span className={`${styles.streakLabel} theme-text-faint`}>day streak 🔥</span>
        </div>
      </motion.div>

      {/* Content Section */}
      <AnimatePresence mode="wait">
        {!hasCourses ? (
          <motion.div 
            key="empty-state"
            className={`liquid-glass-strong ${styles.emptyState}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className={styles.emptyIconWrap}>
              <Plus size={40} className={styles.emptyIcon} />
            </div>
            <h3 className={styles.emptyTitle}>No Enrolled Courses</h3>
            <p className={`${styles.emptyText} theme-text-muted`}>
              Start your journey by enrolling in one of our professional certification programs.
            </p>
            <Link href="/courses" className={`liquid-glass-strong ${styles.exploreBtn} hover-scale`}>
              <PlayCircle size={18} />
              Explore Catalog
            </Link>
          </motion.div>
        ) : (
          <motion.div 
            key="enrolled-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.grid}
          >
            {enrolledCourses.map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className={`liquid-glass-strong ${styles.currentCourse}`}
              >
                <div className={styles.sectionHeader}>
                  <BookOpen size={16} className={styles.sectionIcon} />
                  <h3 className={styles.sectionTitle}>{course.category || 'Professional Certification'}</h3>
                </div>
                <div className={styles.currentCourseBody}>
                  <div className={styles.courseInfo}>
                    <div className={styles.courseIconBox} style={{ background: `${course.color}15`, color: course.color }}>
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <p className={styles.courseName}>{course.title}</p>
                      <p className={`${styles.courseMeta} theme-text-faint`}>
                        Enrolled on {course.enrolledAt?.toDate().toLocaleDateString() || 'Recently'}
                      </p>
                    </div>
                  </div>
                  <div className={styles.progressSection}>
                    <div className={styles.progressRow}>
                      <span className={styles.progressPct} style={{ color: course.color }}>{course.progress}%</span>
                      <span className={`${styles.progressStatus} theme-text-faint`}>complete</span>
                    </div>
                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill} style={{ width: `${course.progress}%`, background: course.color }} />
                    </div>
                  </div>
                  <Link href={`/learn/${course.courseId}`} className={styles.resumeBtn}>
                    <span>Continue Learning</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
