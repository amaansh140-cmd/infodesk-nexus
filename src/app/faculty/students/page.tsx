'use client';

import React from 'react';
import { Search, Filter, Mail, Phone, ExternalLink } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyStudents() {
  const students = [
    { id: 'STU-001', name: 'Aarav Patel', batch: 'Batch A', email: 'aarav@example.com', attendance: '92%', progress: 'On Track' },
    { id: 'STU-002', name: 'Diya Sharma', batch: 'Batch A', email: 'diya@example.com', attendance: '88%', progress: 'On Track' },
    { id: 'STU-003', name: 'Rohan Kumar', batch: 'Batch B', email: 'rohan@example.com', attendance: '65%', progress: 'At Risk' },
    { id: 'STU-004', name: 'Priya Singh', batch: 'Batch A', email: 'priya@example.com', attendance: '98%', progress: 'Excellent' },
    { id: 'STU-005', name: 'Aditya Gupta', batch: 'Batch B', email: 'aditya@example.com', attendance: '75%', progress: 'Needs Attention' },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Student Roster</h1>
          <p className={styles.pageSubtitle}>View profiles and track progress of your assigned students</p>
        </div>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <h2 className={styles.cardTitle}>Assigned Students</h2>
            <span className={styles.badge} style={{ color: '#3b82f6' }}>142 Total</span>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input 
                type="text" 
                placeholder="Search by name or ID..." 
                style={{ padding: '0.5rem 0.5rem 0.5rem 2.25rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', fontSize: '0.875rem' }}
              />
            </div>
            <button className={styles.secondaryBtn} style={{ padding: '0.5rem' }}>
              <Filter size={16} /> Filter
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Student</th>
                <th>Batch</th>
                <th>Contact</th>
                <th>Attendance %</th>
                <th>Progress Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div style={{ fontWeight: 500, color: '#111827' }}>{student.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{student.id}</div>
                  </td>
                  <td>{student.batch}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className={styles.iconBtn} title={`Email ${student.email}`}><Mail size={16} /></button>
                      <button className={styles.iconBtn} title="Call"><Phone size={16} /></button>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontWeight: 500, color: parseInt(student.attendance) > 75 ? '#10b981' : '#ef4444' }}>
                        {student.attendance}
                      </span>
                    </div>
                  </td>
                  <td>
                    {student.progress === 'On Track' && <span className={styles.badge} style={{ color: '#3b82f6' }}>On Track</span>}
                    {student.progress === 'Excellent' && <span className={styles.badge} style={{ color: '#10b981' }}>Excellent</span>}
                    {student.progress === 'Needs Attention' && <span className={styles.badge} style={{ color: '#f59e0b' }}>Needs Attention</span>}
                    {student.progress === 'At Risk' && <span className={styles.badge} style={{ color: '#ef4444' }}>At Risk</span>}
                  </td>
                  <td>
                    <button className={styles.iconBtn} title="View Profile">
                      <ExternalLink size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
