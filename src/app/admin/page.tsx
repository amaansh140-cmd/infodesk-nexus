'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, AlertCircle, IndianRupee, CalendarCheck, BarChart3, ShoppingCart, UserCheck, TrendingUp } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses } from '@/data/courses';
import styles from './admin.module.css';

interface CourseReport {
  title: string;
  online: number;
  manual: number;
  total: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ students: 0, revenue: 0, classesConducted: 0 });
  const [report, setReport] = useState<{ online: number; manual: number; byCourse: CourseReport[] }>({
    online: 0, manual: 0, byCourse: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersSnap = await getDocs(collection(db, 'users'));
        let studentCount = 0;
        let totalRevenue = 0;
        let totalOnline = 0;
        let totalManual = 0;
        const courseMap: Record<string, CourseReport> = {};

        for (const docSnap of usersSnap.docs) {
          if (docSnap.data().role !== 'student') continue;
          studentCount++;

          const enrolledSnap = await getDocs(collection(db, 'users', docSnap.id, 'enrolledCourses'));
          enrolledSnap.forEach(courseDoc => {
            const data = courseDoc.data();
            const courseId = data.courseId;
            const source: string = data.source ?? 'manual';
            const title: string = data.title ?? courseId;

            const courseData = courses.find(c => c.id === courseId || c.id.toString() === courseId);
            if (courseData) totalRevenue += courseData.price;

            if (source === 'online') totalOnline++; else totalManual++;

            if (!courseMap[courseId]) courseMap[courseId] = { title, online: 0, manual: 0, total: 0 };
            if (source === 'online') courseMap[courseId].online++;
            else courseMap[courseId].manual++;
            courseMap[courseId].total++;
          });
        }

        const attendanceSnap = await getDocs(collection(db, 'attendance'));

        setStats({ students: studentCount, revenue: totalRevenue, classesConducted: attendanceSnap.size });
        setReport({
          online: totalOnline,
          manual: totalManual,
          byCourse: Object.values(courseMap).sort((a, b) => b.total - a.total),
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  const totalEnrollments = report.online + report.manual;
  const onlinePct = totalEnrollments > 0 ? Math.round((report.online / totalEnrollments) * 100) : 0;
  const manualPct = totalEnrollments > 0 ? Math.round((report.manual / totalEnrollments) * 100) : 0;

  return (
    <motion.div
      className={styles.dashboardGrid}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`liquid-glass-strong ${styles.welcomeBanner}`}>
        <div>
          <h1 className={styles.welcomeTitle}>Admin Overview</h1>
          <p className={`${styles.welcomeSub} theme-text-faint`}>Manage students, courses, and platform settings.</p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className={styles.statsGrid}>
        <div className={`liquid-glass ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <Users className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Total Students</span>
          </div>
          <div className={styles.statValue}>{isLoading ? '...' : stats.students.toLocaleString()}</div>
        </div>

        <div className={`liquid-glass ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <IndianRupee className={styles.statIcon} size={20} style={{ color: '#10b981' }} />
            <span className={styles.statTitle}>Estimated Revenue</span>
          </div>
          <div className={styles.statValue} style={{ color: '#10b981' }}>
            {isLoading ? '...' : `₹${stats.revenue.toLocaleString()}`}
          </div>
        </div>

        <div className={`liquid-glass ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <BookOpen className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Active Courses</span>
          </div>
          <div className={styles.statValue}>{courses.length}</div>
        </div>

        <div className={`liquid-glass ${styles.statCard}`}>
          <div className={styles.statHeader}>
            <CalendarCheck className={styles.statIcon} size={20} style={{ color: '#f59e0b' }} />
            <span className={styles.statTitle}>Classes Conducted</span>
          </div>
          <div className={styles.statValue}>{isLoading ? '...' : stats.classesConducted}</div>
        </div>
      </div>

      {/* ── Enrollment Report ── */}
      <div className={`liquid-glass ${styles.reportSection}`}>
        <div className={styles.sectionHeader}>
          <BarChart3 size={20} style={{ color: '#6366f1' }} />
          <h2 className={styles.sectionTitle}>Enrollment Report</h2>
          <span className={styles.reportBadge}>{isLoading ? '—' : `${totalEnrollments} total`}</span>
        </div>

        {/* Summary Cards */}
        <div className={styles.reportSummary}>
          <div className={`${styles.reportCard} ${styles.reportCardOnline}`}>
            <div className={styles.reportCardIcon}><ShoppingCart size={20} /></div>
            <div>
              <div className={styles.reportCardLabel}>Online (Razorpay)</div>
              <div className={styles.reportCardValue}>{isLoading ? '...' : report.online}</div>
              <div className={styles.reportCardPct}>{!isLoading && `${onlinePct}% of total`}</div>
            </div>
          </div>

          <div className={`${styles.reportCard} ${styles.reportCardManual}`}>
            <div className={styles.reportCardIcon}><UserCheck size={20} /></div>
            <div>
              <div className={styles.reportCardLabel}>Manual (Admin / CSV)</div>
              <div className={styles.reportCardValue}>{isLoading ? '...' : report.manual}</div>
              <div className={styles.reportCardPct}>{!isLoading && `${manualPct}% of total`}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {!isLoading && totalEnrollments > 0 && (
          <div className={styles.progressBarWrap}>
            <div className={styles.progressBarTrack}>
              <motion.div
                className={styles.progressBarOnline}
                initial={{ width: 0 }}
                animate={{ width: `${onlinePct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              />
              <motion.div
                className={styles.progressBarManual}
                initial={{ width: 0 }}
                animate={{ width: `${manualPct}%` }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              />
            </div>
            <div className={styles.progressLegend}>
              <span><span className={styles.dotOnline} /> Online</span>
              <span><span className={styles.dotManual} /> Manual</span>
            </div>
          </div>
        )}

        {/* Per-Course Breakdown Table */}
        <div className={styles.courseTable}>
          <div className={styles.courseTableHeader}>
            <span>Course</span>
            <span style={{ textAlign: 'center' }}>Online</span>
            <span style={{ textAlign: 'center' }}>Manual</span>
            <span style={{ textAlign: 'center' }}>Total</span>
          </div>

          {isLoading ? (
            <div className={styles.tableEmpty}>Loading enrollment data...</div>
          ) : report.byCourse.length === 0 ? (
            <div className={styles.tableEmpty}>No enrollment records found yet.</div>
          ) : (
            report.byCourse.map((row, i) => (
              <motion.div
                key={row.title}
                className={styles.courseTableRow}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={styles.courseTableName}>
                  <TrendingUp size={12} style={{ color: '#6366f1', flexShrink: 0 }} />
                  {row.title}
                </div>
                <div className={`${styles.courseTableCell} ${styles.cellOnline}`}>{row.online}</div>
                <div className={`${styles.courseTableCell} ${styles.cellManual}`}>{row.manual}</div>
                <div className={`${styles.courseTableCell} ${styles.cellTotal}`}>{row.total}</div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* ── System Status ── */}
      <div className={`liquid-glass ${styles.recentActivity}`}>
        <div className={styles.sectionHeader}>
          <AlertCircle className={styles.sectionIcon} size={20} />
          <h2 className={styles.sectionTitle}>System Status</h2>
        </div>
        <div className={styles.activityList}>
          <p className="theme-text-faint">All systems operational. No recent alerts.</p>
        </div>
      </div>
    </motion.div>
  );
}
