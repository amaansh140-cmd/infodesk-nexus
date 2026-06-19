'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

const mockLogs = [
  { id: 'LOG-891', user: 'Mr Amaan Shaikh', action: 'Created Student Account', target: 'STU-1048', time: '10:15 AM, Today', status: 'Success' },
  { id: 'LOG-890', user: 'Mr Amaan Shaikh', action: 'Modified Timetable', target: 'CS-101 Schedule', time: '09:05 AM, Today', status: 'Success' },
  { id: 'LOG-889', user: 'System', action: 'Failed Login Attempt', target: 'admin.shashtri', time: '02:14 AM, Today', status: 'Failed' },
  { id: 'LOG-888', user: 'Dr. Vikram Singh', action: 'Deleted Attendance Record', target: 'ATT-101', time: 'Yesterday, 4:30 PM', status: 'Warning' },
  { id: 'LOG-887', user: 'Mr Amaan Shaikh', action: 'Bulk Uploaded Students', target: 'CSV Import (120 rows)', time: 'Yesterday, 11:20 AM', status: 'Success' },
];

export default function AuditLogsPage() {
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
            <h1 className={styles.pageTitle}>Local Audit Logs</h1>
            <p className={styles.pageSubtitle}>Read-only trail of all administrative actions within Shashtri Nagar.</p>
          </div>
        </div>
      </div>

      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1 }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input type="text" placeholder="Search by Action, User, or ID..." style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%' }} />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', cursor: 'pointer' }}>
            <Filter size={16} /> Filter by Date
          </button>
        </div>

        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Log ID / Time</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>User / Actor</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Action Performed</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Target / Resource</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockLogs.map((log, index) => (
                <tr key={log.id} style={{ borderBottom: index === mockLogs.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)' }}>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'rgba(17,24,39,0.6)' }}>{log.id}</span>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(17,24,39,0.5)' }}>{log.time}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#111827' }}>{log.user}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#111827', fontWeight: 500 }}>
                    {log.action}
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ padding: '0.2rem 0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: 500 }}>
                      {log.target}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, 
                      background: log.status === 'Success' ? 'rgba(16,185,129,0.1)' : log.status === 'Failed' ? 'rgba(239,68,68,0.1)' : 'rgba(245,158,11,0.1)', 
                      color: log.status === 'Success' ? '#10b981' : log.status === 'Failed' ? '#ef4444' : '#f59e0b' 
                    }}>
                      {log.status === 'Success' && <CheckCircle2 size={12} />}
                      {log.status === 'Failed' && <XCircle size={12} />}
                      {log.status === 'Warning' && <ShieldAlert size={12} />}
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
