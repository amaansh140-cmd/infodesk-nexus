'use client';

import React from 'react';
import { CheckSquare, Upload, Clock, CheckCircle } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function StudentAssignments() {
  const assignments = [
    { id: 1, title: 'Algorithm Complexity Analysis', course: 'Algorithms', faculty: 'Prof. Smith', due: 'Oct 28, 2023', status: 'Pending' },
    { id: 2, title: 'Portfolio Website Layout', course: 'Web Development', faculty: 'Prof. Davis', due: 'Nov 05, 2023', status: 'Pending' },
    { id: 3, title: 'Linked List Implementation', course: 'Data Structures', faculty: 'Prof. Smith', due: 'Oct 15, 2023', status: 'Submitted', score: '9/10' },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Assignments & Homework</h1>
          <p className={styles.pageSubtitle}>View, submit, and track your coursework</p>
        </div>
      </header>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {assignments.map((assignment) => (
          <div key={assignment.id} className={styles.card} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: assignment.status === 'Submitted' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: assignment.status === 'Submitted' ? '#10b981' : '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {assignment.status === 'Submitted' ? <CheckCircle size={24} /> : <CheckSquare size={24} />}
              </div>
              <div>
                <h3 style={{ margin: '0 0 0.25rem', fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>{assignment.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span>{assignment.course}</span>
                  <span>•</span>
                  <span>{assignment.faculty}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: assignment.status === 'Pending' ? '#ef4444' : '#6b7280' }}>
                    <Clock size={14} /> Due: {assignment.due}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              {assignment.status === 'Submitted' ? (
                <div style={{ textAlign: 'right' }}>
                  <span className={styles.badge} style={{ color: '#10b981', marginBottom: '0.5rem', display: 'inline-block' }}>Submitted</span>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151' }}>Score: {assignment.score}</div>
                </div>
              ) : (
                <button className={styles.actionBtn}>
                  <Upload size={16} /> Submit Work
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
