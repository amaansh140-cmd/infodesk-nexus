'use client';

import React, { useEffect, useState } from 'react';
import { Users, Clock, CalendarCheck, BookOpen, ChevronRight, AlertCircle, CheckCircle2, Megaphone } from 'lucide-react';
import styles from '../super-admin/super-admin.module.css';
import { useAuth } from '../../context/AuthContext';
import { useDatabase } from '../../context/DatabaseContext';

export default function FacultyDashboard() {
  const { user } = useAuth();
  const { students, lecturePlans, courses, notices } = useDatabase();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const assignedBranches = user?.assignedBranches || [];
  const assignedCourses = user?.assignedCourses || [];

  // Calculate total students assigned based on branch
  const assignedStudents = students.filter(s => assignedBranches.includes(s.branch));

  // Today's schedule
  const todayString = new Date().toISOString().split('T')[0];
  const todaysLectures = lecturePlans.filter(lp => lp.facultyId === user?.id && lp.date === todayString);
  const deliveredLectures = todaysLectures.filter(lp => lp.status === 'Delivered').length;

  // Pending Lectures for this faculty overall
  const pendingLectures = lecturePlans.filter(lp => lp.facultyId === user?.id && lp.status === 'Pending').length;

  // Active courses
  const activeCoursesCount = assignedCourses.length;

  // Recent Activity / Alerts
  const recentNotices = notices
    .filter(n => 
      (n.targetRoles.includes('all') || n.targetRoles.includes('faculty')) &&
      (n.targetBranches.includes('all') || n.targetBranches.some(b => assignedBranches.includes(b)))
    )
    .slice(0, 5);

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Welcome back, {user?.name?.split(' ')[0] || 'Faculty'}</h1>
          <p className={styles.pageSubtitle}>Faculty Dashboard • {assignedBranches.join(', ') || 'No Branches Assigned'}</p>
        </div>
      </header>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <Users size={20} />
            </div>
          </div>
          <div className={styles.statValue}>{assignedStudents.length}</div>
          <div className={styles.statLabel}>Total Assigned Students</div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <CalendarCheck size={20} />
            </div>
            <span className={styles.statChange}>Today</span>
          </div>
          <div className={styles.statValue}>{deliveredLectures} / {todaysLectures.length}</div>
          <div className={styles.statLabel}>Lectures Delivered Today</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className={styles.statValue}>{pendingLectures}</div>
          <div className={styles.statLabel}>Pending Lecture Plans</div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
              <BookOpen size={20} />
            </div>
          </div>
          <div className={styles.statValue}>{activeCoursesCount}</div>
          <div className={styles.statLabel}>Assigned Courses</div>
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
                </tr>
              </thead>
              <tbody>
                {todaysLectures.length === 0 ? (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center', padding: '1rem', color: '#6b7280' }}>No classes scheduled for today.</td>
                  </tr>
                ) : (
                  todaysLectures.map(lecture => {
                    const course = courses.find(c => c.id === lecture.courseId);
                    return (
                      <tr key={lecture.id}>
                        <td>{lecture.time}</td>
                        <td>{course?.title || 'Unknown Course'}</td>
                        <td>{lecture.batch}</td>
                        <td>
                          <span style={{
                            padding: '0.2rem 0.6rem',
                            borderRadius: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            background: lecture.status === 'Delivered' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                            color: lecture.status === 'Delivered' ? '#10b981' : '#f59e0b'
                          }}>
                            {lecture.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts & Activity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Recent Announcements</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentNotices.length === 0 ? (
                <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280' }}>
                  No recent announcements.
                </div>
              ) : (
                recentNotices.map((notice, idx) => (
                  <div key={notice.id} style={{ borderBottom: idx === recentNotices.length - 1 ? 'none' : '1px solid #e5e7eb', paddingBottom: idx === recentNotices.length - 1 ? '0' : '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <Megaphone size={14} color="#3b82f6" />
                      <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600 }}>{notice.type.toUpperCase()}</span>
                    </div>
                    <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{notice.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#4b5563' }}>{notice.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
