'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, PieChart } from 'lucide-react';
import styles from '../super-admin.module.css';

export default function ReportsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className={styles.pageSubtitle}>Cross-branch comparison reports and institutional exports.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#10b981' }}>
              <Download size={16} /> Export Excel
            </button>
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
    </motion.div>
  );
}
