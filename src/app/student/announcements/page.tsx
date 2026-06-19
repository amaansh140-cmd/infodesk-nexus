'use client';

import React, { useState, useEffect } from 'react';
import { Megaphone, Calendar, Pin } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';
import { useDatabase } from '../../../context/DatabaseContext';
import { useAuth } from '../../../context/AuthContext';

export default function StudentAnnouncements() {
  const { notices, students } = useDatabase();
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentStudent = students.find(s => s.id === user?.id);
  const studentBranch = currentStudent?.branch || '';

  // Filter notices for this student
  const relevantNotices = notices.filter(notice => {
    const roleMatch = notice.targetRoles.includes('all') || notice.targetRoles.includes('students');
    const branchMatch = notice.targetBranches.includes('all') || notice.targetBranches.includes(studentBranch);
    return roleMatch && branchMatch;
  });

  // Sort pinned first, then by date descending (assuming id has timestamp or date is sortable)
  relevantNotices.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Notice Board</h1>
          <p className={styles.pageSubtitle}>Stay updated with official announcements and academic notices</p>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {relevantNotices.length === 0 ? (
          <div className={`liquid-glass ${styles.tableCard}`} style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>
            <Megaphone size={48} style={{ margin: '0 auto 1rem', opacity: 0.2 }} />
            <p>No new announcements at this time.</p>
          </div>
        ) : (
          relevantNotices.map((notice) => (
            <div key={notice.id} className={`liquid-glass-strong ${styles.tableCard} hover-scale`} style={{ borderLeft: notice.pinned ? '4px solid #3b82f6' : '1px solid rgba(17,24,39,0.05)' }}>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    {notice.pinned && <Pin size={18} color="#3b82f6" style={{ transform: 'rotate(45deg)' }} />}
                    <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600, color: '#111827' }}>{notice.title}</h2>
                  </div>
                  <span className={styles.badge} style={{ 
                    color: notice.type === 'Important' ? '#f59e0b' : notice.type === 'Academic' ? '#3b82f6' : '#10b981'
                  }}>
                    {notice.type}
                  </span>
                </div>
                
                <p style={{ margin: '0 0 1.5rem', fontSize: '1rem', color: '#4b5563', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                  {notice.content}
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(17,24,39,0.05)', fontSize: '0.875rem', color: '#6b7280' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Megaphone size={16} /> Posted by {notice.author}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} /> {notice.date}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
