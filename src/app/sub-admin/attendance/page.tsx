'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, CalendarCheck, Clock, Download, AlertCircle } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

const mockAttendance = [
  { id: 'ATT-101', course: 'Introduction to Computer Science', faculty: 'Dr. Vikram Singh', date: '2024-03-15', status: 'Submitted', presentCount: 115, totalCount: 120, time: '10:05 AM' },
  { id: 'ATT-102', course: 'Advanced Data Structures', faculty: 'Prof. Meera Reddy', date: '2024-03-15', status: 'Late Submission', presentCount: 80, totalCount: 85, time: '11:45 AM' },
  { id: 'ATT-103', course: 'Applied Engineering Physics', faculty: 'Dr. Vikram Singh', date: '2024-03-15', status: 'Pending', presentCount: 0, totalCount: 210, time: '--' },
  { id: 'ATT-104', course: 'Organic Chemistry Basics', faculty: 'Ananya Desai', date: '2024-03-14', status: 'Submitted', presentCount: 58, totalCount: 60, time: '09:15 AM' },
];

export default function AttendanceOversightPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Attendance Oversight</h1>
            <p className={styles.pageSubtitle}>Monitor branch-wide attendance submissions and anomalies.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
            <Download size={16} /> Export Report
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', borderLeft: '4px solid #10b981' }}>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Today's Submissions</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827' }}>24 / 28</div>
        </div>
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', borderLeft: '4px solid #3b82f6' }}>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Avg. Branch Attendance</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827' }}>94.2%</div>
        </div>
        <div className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '1.25rem', borderLeft: '4px solid #ef4444' }}>
          <div style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Flagged / Late</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#111827' }}>3</div>
        </div>
      </div>

      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1 }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input type="text" placeholder="Search by course or faculty..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', cursor: 'pointer' }}>
            <Filter size={16} /> Filter
          </button>
        </div>

        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Log ID</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Course</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Faculty</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Date & Time</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Attendance Rate</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Submission Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAttendance.map((log, index) => (
                <tr key={log.id} style={{ borderBottom: index === mockAttendance.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)' }}>
                  <td style={{ padding: '1rem 1.5rem', fontSize: '0.85rem', color: 'rgba(17,24,39,0.5)', fontWeight: 600 }}>{log.id}</td>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 500, color: '#111827' }}>{log.course}</td>
                  <td style={{ padding: '1rem 1.5rem', color: '#3b82f6', fontWeight: 500 }}>{log.faculty}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#111827' }}>{log.date}</span>
                      <span style={{ fontSize: '0.75rem', color: 'rgba(17,24,39,0.5)' }}>{log.time}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    {log.totalCount > 0 ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '60px', height: '6px', background: 'rgba(17,24,39,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${(log.presentCount/log.totalCount)*100}%`, height: '100%', background: '#10b981' }} />
                        </div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{Math.round((log.presentCount/log.totalCount)*100)}%</span>
                      </div>
                    ) : <span style={{ color: 'rgba(17,24,39,0.4)', fontSize: '0.85rem' }}>No Data</span>}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, 
                      background: log.status === 'Submitted' ? 'rgba(16,185,129,0.1)' : log.status === 'Pending' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)', 
                      color: log.status === 'Submitted' ? '#10b981' : log.status === 'Pending' ? '#f59e0b' : '#ef4444' 
                    }}>
                      {log.status === 'Late Submission' && <AlertCircle size={12} style={{ marginRight: '0.25rem', display: 'inline-block', verticalAlign: 'middle' }}/>}
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
