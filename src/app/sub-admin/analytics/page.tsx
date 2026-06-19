'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

const performanceData = [
  { name: 'Computer Science', Attendance: 95, LectureCompletion: 80, AvgGrades: 78 },
  { name: 'Physics', Attendance: 88, LectureCompletion: 65, AvgGrades: 72 },
  { name: 'Mathematics', Attendance: 92, LectureCompletion: 90, AvgGrades: 81 },
  { name: 'Chemistry', Attendance: 85, LectureCompletion: 70, AvgGrades: 68 },
  { name: 'English', Attendance: 90, LectureCompletion: 85, AvgGrades: 75 },
];

export default function AnalyticsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Branch Analytics</h1>
            <p className={styles.pageSubtitle}>Performance metrics and historical data for Shashtri Nagar.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
            <Download size={16} /> Export PDF Report
          </button>
        </div>
      </div>

      <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111827', margin: '0 0 2rem 0' }}>Departmental Performance Comparison</h3>
        <div style={{ height: '400px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(17,24,39,0.05)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.6)' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'rgba(17,24,39,0.6)' }} />
              <RechartsTooltip 
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', padding: '1rem' }}
                cursor={{ fill: 'rgba(17,24,39,0.02)' }}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="Attendance" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="LectureCompletion" name="Lecture Completion" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="AvgGrades" name="Avg. Grades" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </motion.div>
  );
}
