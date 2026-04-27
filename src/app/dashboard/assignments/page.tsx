'use client';

import { useState, useEffect } from 'react';
import { 
  ClipboardList, Clock, CheckCircle2, AlertCircle
} from 'lucide-react';
import styles from '../dashboard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, getDocs } from 'firebase/firestore';

export default function AssignmentsPage() {
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
    <div className={styles.assignmentsPage}>
      <motion.div 
        className={`liquid-glass ${styles.welcomeBanner}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 className={styles.welcomeTitle}>Academic Assignments</h2>
          <p className={`${styles.welcomeSub} theme-text-muted`}>
            Track your progress and submit your projects for certification review.
          </p>
        </div>
      </motion.div>

      <div className={styles.assignmentGrid}>
        {courses.length === 0 ? (
          <div className={`liquid-glass ${styles.emptyState}`} style={{ padding: '4rem' }}>
            <ClipboardList size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
            <p className="theme-text-muted">No assignments found. Enroll in a course to get started.</p>
          </div>
        ) : (
          courses.map((course, idx) => (
            <motion.div 
              key={course.id}
              className={`liquid-glass-strong ${styles.assignmentCard}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className={styles.sectionHeader}>
                <div className={styles.itemIcon} style={{ background: `${course.color}15`, color: course.color, padding: '8px', borderRadius: '8px' }}>
                  <ClipboardList size={18} />
                </div>
                <h3 className={styles.sectionTitle}>{course.title}</h3>
              </div>
              
              <div className={styles.assignmentList}>
                <div className={styles.assignmentItem}>
                  <div className={styles.assignmentInfo}>
                    <p className={styles.assignmentName}>Final Capstone Project</p>
                    <p className="theme-text-faint" style={{ fontSize: '0.75rem' }}>Practical Implementation</p>
                  </div>
                  <div className={styles.statusBadge} style={{ background: '#fef3c7', color: '#92400e' }}>
                    <Clock size={12} />
                    <span>Pending</span>
                  </div>
                </div>
                
                <div className={styles.assignmentItem}>
                  <div className={styles.assignmentInfo}>
                    <p className={styles.assignmentName}>Module 1 Quiz</p>
                    <p className="theme-text-faint" style={{ fontSize: '0.75rem' }}>Theoretical Assessment</p>
                  </div>
                  <div className={styles.statusBadge} style={{ background: '#d1fae5', color: '#065f46' }}>
                    <CheckCircle2 size={12} />
                    <span>Graded</span>
                  </div>
                </div>
              </div>

              <button className={`liquid-glass ${styles.viewTasksBtn}`}>
                View Details
              </button>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
