'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Send, Users, Smartphone, Mail, Pin, CheckCircle2 } from 'lucide-react';
import styles from '../super-admin.module.css';
import { useDatabase } from '../../../context/DatabaseContext';
import { useAuth } from '../../../context/AuthContext';

export default function CommunicationsPage() {
  const { user } = useAuth();
  const { createNotice, notices } = useDatabase();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('General');
  const [targetBranch, setTargetBranch] = useState('all');
  const [targetRole, setTargetRole] = useState('all');
  const [pinned, setPinned] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSend = () => {
    if (!title.trim() || !content.trim()) return;

    createNotice({
      title,
      content,
      type,
      author: user?.name || 'Super Admin',
      targetBranches: [targetBranch],
      targetRoles: [targetRole],
      pinned
    });

    setSuccessMsg('Broadcast sent successfully!');
    setTitle('');
    setContent('');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className={styles.pageSubtitle}>Broadcast announcements and send mass communications to the team.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Message Composer */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto', marginBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Megaphone size={20} className="theme-text-muted" />
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Compose Broadcast</h3>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Subject</label>
            <input 
              type="text" 
              className={styles.input} 
              placeholder="Enter message subject..." 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Notice Type</label>
            <select className={styles.input} value={type} onChange={(e) => setType(e.target.value)}>
              <option value="General">General</option>
              <option value="Academic">Academic</option>
              <option value="Important">Important</option>
              <option value="Holiday">Holiday</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Message Body</label>
            <textarea 
              className={styles.input} 
              style={{ minHeight: '150px', resize: 'vertical' }} 
              placeholder="Type your announcement here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
            <button className={styles.primaryBtn} onClick={handleSend} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Send size={16} /> Send Broadcast
            </button>
            
            {successMsg && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.875rem', fontWeight: 500 }}>
                <CheckCircle2 size={16} /> {successMsg}
              </span>
            )}
          </div>
        </div>

        {/* Targeting & Delivery Methods */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto', marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Users size={20} className="theme-text-muted" />
              <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Target Audience</h3>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Select Branches</label>
              <select className={styles.input} value={targetBranch} onChange={(e) => setTargetBranch(e.target.value)}>
                <option value="all">All Branches</option>
                <option value="Goregaon West">Goregaon West</option>
                <option value="Jawahar Nagar">Jawahar Nagar</option>
                <option value="Jogeshwari West">Jogeshwari West</option>
                <option value="Behram Baug">Behram Baug</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Select Roles</label>
              <select className={styles.input} value={targetRole} onChange={(e) => setTargetRole(e.target.value)}>
                <option value="all">Everyone</option>
                <option value="faculty">Faculty Only</option>
                <option value="students">Students Only</option>
                <option value="admins">Sub-Admins Only</option>
              </select>
            </div>
          </div>

          <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto', marginBottom: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <Mail size={20} className="theme-text-muted" />
              <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Delivery Methods</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                <input type="checkbox" defaultChecked disabled /> 
                <Megaphone size={16} style={{ color: 'rgba(17,24,39,0.5)' }} />
                In-App Dashboard Notice
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} /> 
                <Pin size={16} style={{ color: 'rgba(17,24,39,0.5)' }} />
                Pin to top
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Broadcasts */}
      <h2 className={styles.sectionTitle} style={{ marginTop: '2rem', marginBottom: '1rem' }}>Recent Broadcasts</h2>
      <div className={`liquid-glass-strong ${styles.tableCard}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Target</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {notices.slice(0, 5).map(notice => (
              <tr key={notice.id} className={styles.tableRow}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}>
                    {notice.pinned && <Pin size={14} color="#3b82f6" />}
                    {notice.title}
                  </div>
                </td>
                <td>
                  <span className={styles.statusBadge} style={{ background: 'rgba(17,24,39,0.05)', color: '#111827' }}>
                    {notice.type}
                  </span>
                </td>
                <td>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {notice.targetBranches.includes('all') ? 'All Branches' : notice.targetBranches.join(', ')} • {notice.targetRoles.includes('all') ? 'Everyone' : notice.targetRoles.join(', ')}
                  </span>
                </td>
                <td style={{ color: '#6b7280' }}>{notice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
