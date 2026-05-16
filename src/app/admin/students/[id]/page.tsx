'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc, collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses } from '@/data/courses';
import { ArrowLeft, User, Mail, Shield, BookOpen, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '../students.module.css';

interface UserData {
  id: string;
  uid: string;
  email: string;
  displayName: string;
  role: string;
  createdAt?: string;
}

interface EnrolledCourse {
  id: string;
  courseId: number;
  title: string;
  enrollmentDate: string;
  status: string;
}

export default function StudentDetailsPage() {
  const params = useParams();
  const userId = params.id as string;

  const [student, setStudent] = useState<UserData | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Admission Form State
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [admitting, setAdmitting] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Fetch User Info
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          setStudent({ id: userDoc.id, ...userDoc.data() } as UserData);
        }

        // Fetch Enrolled Courses Subcollection
        const coursesRef = collection(db, 'users', userId, 'enrolledCourses');
        const coursesSnap = await getDocs(coursesRef);
        const fetchedCourses: EnrolledCourse[] = [];
        coursesSnap.forEach((doc) => {
          fetchedCourses.push({ id: doc.id, ...doc.data() } as EnrolledCourse);
        });
        setEnrolledCourses(fetchedCourses);

      } catch (error) {
        console.error("Error fetching student details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchStudentData();
  }, [userId]);

  const handleAdmit = async () => {
    if (!selectedCourseId) return;
    
    setAdmitting(true);
    const courseToAdmit = courses.find(c => c.id.toString() === selectedCourseId);
    
    if (!courseToAdmit) {
      setAdmitting(false);
      return;
    }

    try {
      const courseDocRef = doc(db, 'users', userId, 'enrolledCourses', courseToAdmit.id.toString());
      
      const newEnrollment = {
        courseId: courseToAdmit.id,
        title: courseToAdmit.title,
        enrollmentDate: new Date().toISOString(),
        status: 'active'
      };

      await setDoc(courseDocRef, newEnrollment);
      
      // Update local state to reflect UI immediately
      setEnrolledCourses([...enrolledCourses, { id: courseToAdmit.id.toString(), ...newEnrollment }]);
      setSelectedCourseId(''); // Reset dropdown
      alert(`Successfully enrolled in ${courseToAdmit.title}`);
    } catch (err) {
      console.error("Failed to admit student:", err);
      alert("Failed to enroll student. Check Firestore permissions.");
    } finally {
      setAdmitting(false);
    }
  };

  if (loading) {
    return <div className={styles.loader}>Loading profile...</div>;
  }

  if (!student) {
    return <div className={styles.loader}>Student not found.</div>;
  }

  // Filter out courses they are already enrolled in for the dropdown
  const availableCoursesToAdmit = courses.filter(
    c => !enrolledCourses.some(ec => ec.courseId === c.id)
  );

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/admin/students" className={styles.backBtn}>
        <ArrowLeft size={16} /> Back to Students
      </Link>

      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Student Profile</h1>
          <p className={styles.subtitle}>Detailed view of {student.displayName}'s account and progress.</p>
        </div>
      </div>

      <div className={styles.profileGrid}>
        
        {/* Left Column: Info & Admission */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Info Card */}
          <div className={`liquid-glass ${styles.infoCard}`}>
            <h2 className={styles.sectionTitle}>Account Details</h2>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Full Name</div>
                <div className={styles.infoValue} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={16} className="theme-text-faint" />
                  {student.displayName || 'N/A'}
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Email Address</div>
                <div className={styles.infoValue} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} className="theme-text-faint" />
                  {student.email}
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoLabel}>Account Role</div>
                <div className={styles.infoValue} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={16} className="theme-text-faint" />
                  <span style={{ textTransform: 'capitalize' }}>{student.role}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Admission Card */}
          <div className={`liquid-glass ${styles.infoCard}`}>
            <h2 className={styles.sectionTitle}>Manual Admission</h2>
            <p className="theme-text-faint" style={{ fontSize: '0.875rem' }}>
              Select a course to instantly enroll this student and grant them access to the curriculum.
            </p>
            
            <div className={styles.admissionForm}>
              <select 
                className={styles.select}
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
              >
                <option value="" disabled>Select a course to enroll...</option>
                {availableCoursesToAdmit.map(c => (
                  <option key={c.id} value={c.id.toString()}>{c.title}</option>
                ))}
              </select>
              
              <button 
                className={styles.submitBtn} 
                onClick={handleAdmit}
                disabled={!selectedCourseId || admitting}
              >
                {admitting ? 'Enrolling...' : 'Admit to Course'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Enrolled Courses */}
        <div className={`liquid-glass ${styles.coursesCard}`}>
          <h2 className={styles.sectionTitle} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={20} className="theme-text" /> 
            Enrolled Courses ({enrolledCourses.length})
          </h2>
          
          <div className={styles.enrolledList}>
            {enrolledCourses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(17,24,39,0.5)' }}>
                This student is not enrolled in any courses yet.
              </div>
            ) : (
              enrolledCourses.map(ec => (
                <div key={ec.id} className={styles.enrolledCourse}>
                  <div>
                    <div className={styles.enrolledTitle}>{ec.title}</div>
                    <div className={styles.enrolledDate} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={12} />
                      Enrolled: {new Date(ec.enrollmentDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className={styles.statusBadge}>
                    {(ec.status || 'active').toUpperCase()}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
