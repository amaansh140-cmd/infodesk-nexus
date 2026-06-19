'use client';

import React from 'react';
import { Megaphone, Send, Clock, Users } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyCommunications() {
  const notices = [
    { id: 1, title: 'Extra Class for Data Structures', content: 'We will have an extra class on Saturday to cover Graph algorithms.', target: 'Batch A', date: 'Oct 25, 2023', status: 'Sent' },
    { id: 2, title: 'Assignment Deadline Extended', content: 'The deadline for the complexity assignment is extended by 2 days.', target: 'Batch B', date: 'Oct 22, 2023', status: 'Sent' },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Communications</h1>
          <p className={styles.pageSubtitle}>Post announcements and notices to your assigned batches</p>
        </div>
        <button className={styles.actionBtn}>
          <Send size={16} /> New Announcement
        </button>
      </header>

      <div className={styles.grid2Cols}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Recent Announcements</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem' }}>
            {notices.map((notice) => (
              <div key={notice.id} style={{ border: '1px solid #e5e7eb', borderRadius: '0.5rem', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#111827' }}>{notice.title}</h3>
                  <span className={styles.badge} style={{ color: '#10b981' }}>{notice.status}</span>
                </div>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.5 }}>
                  {notice.content}
                </p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: '#6b7280' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Users size={14} /> {notice.target}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={14} /> {notice.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Quick Compose</h2>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Select Target Audience</label>
              <select style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }}>
                <option>All My Students</option>
                <option>Batch A Only</option>
                <option>Batch B Only</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Subject Line</label>
              <input type="text" placeholder="E.g., Tomorrow's schedule change..." style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Message Content</label>
              <textarea rows={4} placeholder="Type your announcement here..." style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white', resize: 'vertical' }}></textarea>
            </div>
            <button className={styles.actionBtn} style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} /> Send Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
