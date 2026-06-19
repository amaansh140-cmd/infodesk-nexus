'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen, CalendarCheck, CheckSquare, Clock, ArrowRight, Bell, Calendar } from 'lucide-react';
import styles from '../super-admin/super-admin.module.css';
import { useAuth } from '../../context/AuthContext';
import { useDatabase } from '../../context/DatabaseContext';

export default function StudentDashboard() {
  const { user } = useAuth();
  const { students, courses, attendance, lecturePlans, notices, studentDailyAttendance } = useDatabase();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentStudent = students.find(s => s.id === user?.id);
  const studentName = currentStudent?.name || user?.name || 'Student';
  const studentBranch = currentStudent?.branch || 'Unknown Branch';
  const studentBatch = currentStudent?.batch || 'Unknown Batch';

  const relevantNotices = notices.filter(notice => {
    const roleMatch = notice.targetRoles.includes('all') || notice.targetRoles.includes('students');
    const branchMatch = notice.targetBranches.includes('all') || notice.targetBranches.includes(studentBranch);
    return roleMatch && branchMatch;
  });

  relevantNotices.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  
  const latestNotices = relevantNotices.slice(0, 2);

  // Calculate Courses
  const branchCourses = courses.filter(c => c.selectedByBranches?.includes(studentBranch.toLowerCase().replace(' ', '-')));
  
  // Calculate Attendance
  const myAttendance = attendance.filter(a => a.studentId === user?.id);
  const totalClasses = myAttendance.length;
  const presentClasses = myAttendance.filter(a => a.status === 'present').length;
  const attendancePercentage = totalClasses === 0 ? 'N/A' : `${Math.round((presentClasses / totalClasses) * 100)}%`;

  // Daily Attendance Status
  const todayString = new Date().toISOString().split('T')[0];
  const myDailyRecords = studentDailyAttendance?.filter(r => r.studentId === user?.id) || [];
  const todayRecord = myDailyRecords.find(r => r.date === todayString);
  const isClockedInToday = !!todayRecord?.clockInTime;

  // Fetch Today's Schedule (Lecture Plans for this branch & batch today)
  const todaysLectures = lecturePlans.filter(lp => lp.batch === studentBatch && lp.date === todayString)
    .sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Welcome back, {studentName}</h1>
          <p className={styles.pageSubtitle}>Student Dashboard • {studentBranch} • {studentBatch}</p>
        </div>
      </header>

      {/* Quick Stats */}
      <div className={styles.statsGrid}>
        <div className={`liquid-glass-strong ${styles.statCard} hover-scale`}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
              <BookOpen size={20} />
            </div>
            <span className={styles.statChange} style={{ color: '#10b981' }}>{studentBatch}</span>
          </div>
          <div className={styles.statValue}>{branchCourses.length}</div>
          <div className={styles.statLabel}>Enrolled Courses</div>
        </div>
        
        <div className={`liquid-glass-strong ${styles.statCard} hover-scale`}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <CalendarCheck size={20} />
            </div>
            <span className={styles.statChange}>Overall</span>
          </div>
          <div className={styles.statValue}>{attendancePercentage}</div>
          <div className={styles.statLabel}>Attendance Record</div>
        </div>



        <div className={`liquid-glass-strong ${styles.statCard} hover-scale`}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: isClockedInToday ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: isClockedInToday ? '#10b981' : '#ef4444' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className={styles.statValue}>{isClockedInToday ? 'Clocked In' : 'Not Clocked In'}</div>
          <div className={styles.statLabel}>Today's Attendance</div>
        </div>

        <div className={`liquid-glass-strong ${styles.statCard} hover-scale`}>
          <div className={styles.statHeader}>
            <div className={styles.statIcon} style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className={styles.statValue}>{todaysLectures.length}</div>
          <div className={styles.statLabel}>Upcoming Classes Today</div>
        </div>
      </div>

      <div className={styles.chartsRowReverse} style={{ gap: '1.5rem' }}>
        {/* Today's Schedule */}
        <div className={`liquid-glass-strong ${styles.tableCard}`}>
          <div className={styles.tableHeaderRow}>
            <h2 className={styles.sectionTitle}>Today's Schedule</h2>
            <button className={`liquid-glass ${styles.secondaryBtn} hover-scale`} style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px' }}>Full Timetable</button>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {todaysLectures.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem 0' }}>No classes scheduled for today.</div>
            ) : (
              todaysLectures.map((lecture) => {
                const course = courses.find(c => c.id === lecture.courseId);
                const isCompleted = lecture.status === 'Delivered';
                const isOngoing = false; // Add real logic if needed

                let badgeColor = '#6b7280';
                if (lecture.status === 'Delivered') badgeColor = '#10b981';
                else if (lecture.status === 'Rescheduled') badgeColor = '#ef4444';
                else if (lecture.status === 'Pending') badgeColor = '#f59e0b';

                return (
                  <div key={lecture.id} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ padding: '0.5rem', background: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb', textAlign: 'center', minWidth: '80px' }}>
                      <div style={{ fontWeight: 600, color: '#111827', fontSize: '0.875rem' }}>{lecture.time}</div>
                    </div>
                    <div style={{ flex: 1, padding: '1rem', background: `rgba(59, 130, 246, 0.05)`, borderLeft: `4px solid ${badgeColor}`, borderRadius: '0 0.5rem 0.5rem 0' }}>
                      <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', fontWeight: 600, color: '#111827' }}>{course?.title || 'Unknown Course'}</h3>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>Topic: {lecture.topic}</p>
                      <div style={{ marginTop: '0.5rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.75rem', color: badgeColor }}>{lecture.status}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Notices & Assignments */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={`liquid-glass-strong ${styles.tableCard}`}>
            <div className={styles.tableHeaderRow}>
              <h2 className={styles.sectionTitle}>Latest Announcements</h2>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {latestNotices.length === 0 ? (
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280', textAlign: 'center', padding: '1rem 0' }}>No announcements right now.</p>
              ) : (
                latestNotices.map((notice, idx) => (
                  <div key={notice.id} style={{ borderBottom: idx === latestNotices.length - 1 ? 'none' : '1px solid #e5e7eb', paddingBottom: idx === latestNotices.length - 1 ? '0' : '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <Bell size={14} color={notice.type === 'Important' ? '#f59e0b' : notice.type === 'Holiday' ? '#10b981' : '#3b82f6'} />
                      <span style={{ fontSize: '0.75rem', color: '#6b7280', fontWeight: 600 }}>{notice.type.toUpperCase()}</span>
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem', fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{notice.title}</h4>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#4b5563', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{notice.content}</p>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>Posted by {notice.author} • {notice.date}</p>
                  </div>
                ))
              )}
            </div>
            <button className={`liquid-glass hover-scale`} style={{ width: '100%', border: 'none', background: 'rgba(255,255,255,0.4)', padding: '0.75rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827', cursor: 'pointer', borderRadius: '0 0 1.25rem 1.25rem', borderTop: '1px solid rgba(17,24,39,0.05)' }}>
              View All Notices
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
