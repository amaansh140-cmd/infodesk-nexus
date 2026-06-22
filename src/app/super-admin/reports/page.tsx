'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, PieChart, Users, CalendarDays } from 'lucide-react';
import styles from '../super-admin.module.css';

export default function ReportsPage() {
  const [yearlyData, setYearlyData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchYearlyData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/staff-attendance/yearly', { cache: 'no-store' });
      const data = await res.json();
      if (Array.isArray(data)) {
        setYearlyData(data);
      }
    } catch (error) {
      console.error('Failed to fetch yearly data', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchYearlyData();
  }, []);

  const exportCSV = () => {
    if (yearlyData.length === 0) return;
    
    // Define CSV Headers
    const headers = ['Date', 'Name', 'Role', 'Branch', 'Status', 'Time'];
    const csvRows = [];
    csvRows.push(headers.join(','));

    // Map data to rows
    yearlyData.forEach(row => {
      const values = [
        row.date,
        `"${row.name}"`, // Quote to handle commas in names
        row.role,
        row.branch,
        row.status,
        row.time
      ];
      csvRows.push(values.join(','));
    });

    // Create Blob
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    // Create hidden link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = `Yearly_Team_Attendance_${new Date().getFullYear()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Reports & Analytics</h1>
            <p className={styles.pageSubtitle}>Cross-branch comparison reports and institutional exports.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ef4444' }}>
              <FileText size={16} /> Export PDF
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <PieChart size={20} className="theme-text-muted" />
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Attendance Trends</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Shashtri Nagar', 'Jawahar Nagar', 'Jogeshwari', 'Behram Baug'].map((branch, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span>{branch}</span>
                  <span style={{ fontWeight: 600 }}>{85 + i * 3}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(17,24,39,0.05)', borderRadius: '4px' }}>
                  <div style={{ width: `${85 + i * 3}%`, height: '100%', background: '#3b82f6', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`liquid-glass-strong ${styles.chartContainer}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <FileText size={20} className="theme-text-muted" />
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Lecture Completion Rates</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Shashtri Nagar', 'Jawahar Nagar', 'Jogeshwari', 'Behram Baug'].map((branch, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
                  <span>{branch}</span>
                  <span style={{ fontWeight: 600 }}>{92 - i * 4}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(17,24,39,0.05)', borderRadius: '4px' }}>
                  <div style={{ width: `${92 - i * 4}%`, height: '100%', background: '#8b5cf6', borderRadius: '4px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yearly Team Attendance Section */}
      <div className="liquid-glass-strong" style={{ borderRadius: '1.25rem', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.1)', color: '#10b981', borderRadius: '0.5rem' }}>
              <CalendarDays size={20} />
            </div>
            <div>
              <h3 className={styles.sectionTitle} style={{ margin: 0, fontSize: '1.1rem' }}>Yearly Team Attendance</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(17,24,39,0.5)', margin: 0 }}>Raw attendance records for the entire current year across all branches.</p>
            </div>
          </div>
          
          <button 
            onClick={exportCSV}
            disabled={isLoading || yearlyData.length === 0}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', 
              borderRadius: '0.75rem', border: 'none', background: '#10b981', color: 'white', 
              fontWeight: 500, fontSize: '0.9rem', cursor: (isLoading || yearlyData.length === 0) ? 'not-allowed' : 'pointer',
              opacity: (isLoading || yearlyData.length === 0) ? 0.6 : 1
            }}
          >
            <Download size={16} /> Export to CSV
          </button>
        </div>

        <div style={{ width: '100%', overflowX: 'auto', maxHeight: '400px', border: '1px solid rgba(17,24,39,0.05)', borderRadius: '0.75rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
            <thead style={{ position: 'sticky', top: 0, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', zIndex: 1 }}>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Date</th>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Name</th>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Role</th>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Branch</th>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem', fontWeight: 600 }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>
                    Fetching yearly records...
                  </td>
                </tr>
              ) : yearlyData.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>
                    No attendance records found for this year.
                  </td>
                </tr>
              ) : (
                yearlyData.map((record, index) => (
                  <tr key={index} style={{ borderBottom: index === yearlyData.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)' }}>
                    <td style={{ padding: '0.75rem 1rem', color: 'rgba(17,24,39,0.7)' }}>{record.date}</td>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 500, color: '#111827' }}>{record.name}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{record.role}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{record.branch}</td>
                    <td style={{ padding: '0.75rem 1rem' }}>
                      <span style={{ 
                        padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600,
                        background: record.status === 'Present' ? 'rgba(16,185,129,0.1)' : 
                                    record.status === 'Absent' ? 'rgba(239,68,68,0.1)' : 
                                    record.status === 'Late' ? 'rgba(245,158,11,0.1)' : 'rgba(156,163,175,0.1)',
                        color: record.status === 'Present' ? '#10b981' : 
                               record.status === 'Absent' ? '#ef4444' : 
                               record.status === 'Late' ? '#f59e0b' : '#6b7280'
                      }}>
                        {record.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem 1rem', fontFamily: 'monospace' }}>{record.time}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
