'use client';

import React from 'react';
import { Users, Clock, CalendarCheck, BookOpen, ChevronRight, AlertCircle, CheckCircle2, Megaphone } from 'lucide-react';
import styles from '../super-admin/super-admin.module.css';
import { useAuth } from '../../context/AuthContext';

export default function FacultyDashboard() {
  const { user } = useAuth();

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Welcome back, {user?.name?.split(' ')[0] || 'Faculty'}</h1>
          <p className={styles.pageSubtitle}>Faculty Dashboard • Shashtri Nagar Branch</p>
        </div>
      </header>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <Users size={20} />
            </div>
            <span className={styles.statChange} style={{ color: '#10b981' }}>Batch A & B</span>
          </div>
          <div className={styles.statValue}>142</div>
          <div className={styles.statLabel}>Total Assigned Students</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <CalendarCheck size={20} />
            </div>
            <span className={styles.statChange}>Today</span>
          </div>
          <div className={styles.statValue}>2 / 3</div>
          <div className={styles.statLabel}>Attendance Marked</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className={styles.statValue}>4</div>
          <div className={styles.statLabel}>Pending Lecture Plans</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
              <BookOpen size={20} />
            </div>
          </div>
          <div className={styles.statValue}>3</div>
          <div className={styles.statLabel}>Active Courses</div>
        </div>
      </div>

      <div className={styles.grid2Cols}>
        {/* Today's Schedule */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Today's Schedule</h2>
            <button className={styles.actionBtn}>View Full Timetable</button>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Course</th>
                  <th>Batch</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '1rem', color: '#6b7280' }}>No classes scheduled for today.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts & Activity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Alerts & Reminders</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280' }}>
                No alerts at this time.
              </div>
            </div>
          </div>

          <div className={styles.card} style={{ flex: 1 }}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Recent Activity</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280' }}>
                No recent activity.
              </div>
            </div>
            <button className={styles.secondaryBtn} style={{ width: '100%', marginTop: '1rem' }}>
              View All Activity <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
