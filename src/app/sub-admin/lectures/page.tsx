'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

const mockLectures = [
  { course: 'CS-101 (Computer Science)', module: 'Introduction to Algorithms', status: 'Delivered', date: 'Mar 15, 2024', faculty: 'Dr. Vikram Singh' },
  { course: 'CS-101 (Computer Science)', module: 'Data Structures (Arrays & Lists)', status: 'Delivered', date: 'Mar 16, 2024', faculty: 'Dr. Vikram Singh' },
  { course: 'CS-101 (Computer Science)', module: 'Graph Theory', status: 'Pending', date: 'Mar 18, 2024', faculty: 'Dr. Vikram Singh' },
  { course: 'PH-201 (Applied Physics)', module: 'Quantum Mechanics Basics', status: 'Rescheduled', date: 'Mar 19, 2024', faculty: 'Prof. Meera Reddy' },
];

export default function LectureBreakupPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Lecture Breakup Oversight</h1>
            <p className={styles.pageSubtitle}>Track curriculum module delivery across all active courses.</p>
          </div>
        </div>
      </div>

      <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: '0 0 1.5rem 0' }}>Overall Syllabus Progression</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 600, color: '#111827' }}>
            <span>Branch Delivery Status</span>
            <span>68% Completed</span>
          </div>
          <div style={{ width: '100%', height: '12px', background: 'rgba(17,24,39,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
            <div style={{ width: '68%', height: '100%', background: '#3b82f6', borderRadius: '6px' }} />
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {mockLectures.map((lecture, i) => (
          <div key={i} className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600, color: 'rgba(17,24,39,0.6)' }}>
                <BookOpen size={12} /> {lecture.course}
              </div>
            </div>
            
            <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: '0 0 0.5rem 0' }}>{lecture.module}</h4>
            <p style={{ fontSize: '0.85rem', color: 'rgba(17,24,39,0.5)', margin: '0 0 1.5rem 0' }}>Assigned to: {lecture.faculty}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(17,24,39,0.05)' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(17,24,39,0.5)' }}>Scheduled: {lecture.date}</span>
              <span style={{ 
                display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', fontWeight: 600,
                color: lecture.status === 'Delivered' ? '#10b981' : lecture.status === 'Pending' ? '#f59e0b' : '#ef4444'
              }}>
                {lecture.status === 'Delivered' && <CheckCircle2 size={14} />}
                {lecture.status === 'Pending' && <Clock size={14} />}
                {lecture.status === 'Rescheduled' && <AlertTriangle size={14} />}
                {lecture.status}
              </span>
            </div>
          </div>
        ))}
      </div>

    </motion.div>
  );
}
