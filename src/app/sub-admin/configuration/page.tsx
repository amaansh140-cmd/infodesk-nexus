'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Calendar, Clock, Bell } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function ConfigurationPage() {
  const [academicYear, setAcademicYear] = useState('2023-2024');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Local Configuration</h1>
            <p className={styles.pageSubtitle}>Manage academic timetables, notification preferences, and local settings.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: 'none', background: '#3b82f6', color: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
            <Save size={16} /> Save Configurations
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Academic Calendar */}
        <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Calendar size={20} color="#111827" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Academic Calendar</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Current Academic Year</label>
              <select 
                value={academicYear} 
                onChange={e => setAcademicYear(e.target.value)}
                style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', background: 'white' }}
              >
                <option value="2023-2024">2023 - 2024</option>
                <option value="2024-2025">2024 - 2025</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Term Start Date</label>
              <input type="date" defaultValue="2024-01-15" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>
          </div>
        </div>

        {/* Timetable Settings */}
        <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Clock size={20} color="#111827" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Timetable Defaults</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Standard Lecture Duration (Mins)</label>
              <input type="number" defaultValue="45" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Branch Opening Time</label>
              <input type="time" defaultValue="08:00" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem', gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <Bell size={20} color="#111827" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: 0 }}>Notification Preferences</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <span style={{ fontSize: '0.95rem', color: '#111827', fontWeight: 500 }}>Send daily attendance summaries to branch manager</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <span style={{ fontSize: '0.95rem', color: '#111827', fontWeight: 500 }}>Alert faculty of missing attendance submissions (Automated)</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
              <span style={{ fontSize: '0.95rem', color: '#111827', fontWeight: 500 }}>SMS alerts to students for lecture rescheduling</span>
            </label>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
