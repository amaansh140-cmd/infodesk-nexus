'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Users, Megaphone, Clock } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

const announcements = [
  { title: 'Mid-Term Examination Schedule', target: 'All Students', date: 'Yesterday, 10:00 AM' },
  { title: 'Faculty Meeting (Department Heads)', target: 'Faculty', date: 'Mar 12, 2024' },
];

export default function CommunicationsPage() {
  const [message, setMessage] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Communications</h1>
            <p className={styles.pageSubtitle}>Post branch-wide announcements and send targeted notifications.</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Compose Area */}
        <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Megaphone size={20} color="#111827" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>New Announcement</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Target Audience</label>
              <select style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', background: 'white' }}>
                <option value="all">Everyone (Students & Faculty)</option>
                <option value="students">All Students</option>
                <option value="faculty">All Faculty</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Subject Title</label>
              <input type="text" placeholder="Announcement subject..." style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Message Body</label>
              <textarea 
                rows={5} 
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Type your message here..." 
                style={{ padding: '1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', resize: 'vertical' }} 
              />
            </div>
            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem', borderRadius: '0.75rem', border: 'none', background: '#3b82f6', color: 'white', fontWeight: 600, cursor: 'pointer', marginTop: '0.5rem' }}>
              <Send size={16} /> Post Announcement
            </button>
          </div>
        </div>

        {/* History Area */}
        <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Clock size={20} color="#111827" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Recent Announcements</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {announcements.map((ann, i) => (
              <div key={i} style={{ padding: '1.25rem', border: '1px solid rgba(17,24,39,0.05)', borderRadius: '1rem', background: 'rgba(17,24,39,0.01)' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#111827', fontSize: '1rem' }}>{ann.title}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', fontWeight: 600, color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '0.2rem 0.5rem', borderRadius: '1rem' }}>
                    <Users size={12} /> {ann.target}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(17,24,39,0.5)', fontWeight: 500 }}>{ann.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
