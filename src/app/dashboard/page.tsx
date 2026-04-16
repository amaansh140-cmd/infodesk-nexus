'use client';

import { BookOpen, ClipboardList, Award, Settings, CheckCircle, Clock } from 'lucide-react';
import styles from './dashboard.module.css';
import { motion } from 'framer-motion';

const sidebarLinks = [
  { icon: BookOpen, label: 'My Courses' },
  { icon: ClipboardList, label: 'Assignments' },
  { icon: Award, label: 'Certificates' },
  { icon: Settings, label: 'Settings' },
];

const deadlines = [
  { title: 'DSA Problem Set 4', course: 'Advanced Data Structures', due: 'Tomorrow', urgent: true },
  { title: 'Neural Networks Quiz', course: 'Machine Learning', due: 'Mar 20', urgent: false },
  { title: 'Portfolio Submission', course: 'UX Research', due: 'Mar 24', urgent: false },
];

const achievements = [
  { label: 'First Commit', earned: true },
  { label: 'Fast Learner', earned: true },
  { label: 'Week Streak', earned: true },
  { label: 'Top Score', earned: false },
  { label: 'Mentor Star', earned: false },
  { label: 'Completionist', earned: false },
];

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <motion.aside 
        className={`liquid-glass-strong ${styles.sidebar}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.avatar}>AS</div>
          <div>
            <p className={styles.avatarName}>Amaan S.</p>
            <p className={`${styles.avatarRole} theme-text-faint`}>Student</p>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarLinks.map(({ icon: Icon, label }, i) => (
            <motion.button
              key={label}
              className={`${styles.sidebarLink} hover-scale ${i === 0 ? styles.sidebarLinkActive : ''}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </motion.button>
          ))}
        </nav>
      </motion.aside>

      {/* Main */}
      <div className={styles.main}>
        {/* Welcome Banner */}
        <motion.div 
          className={`liquid-glass ${styles.welcomeBanner}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <h2 className={styles.welcomeTitle}>Welcome back, Student 👋</h2>
            <p className={`${styles.welcomeSub} theme-text-muted`}>You have 2 active courses and 1 deadline tomorrow.</p>
          </div>
          <div className={`liquid-glass ${styles.streakBadge}`}>
            <span className={styles.streakNum}>14</span>
            <span className={`${styles.streakLabel} theme-text-faint`}>day streak 🔥</span>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className={styles.grid}>
          {/* Current Course */}
          <motion.div 
            className={`liquid-glass-strong ${styles.currentCourse}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.sectionHeader}>
              <BookOpen size={16} className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Current Course</h3>
            </div>
            <div className={styles.currentCourseBody}>
              <div className={styles.courseInfo}>
                <span className={styles.courseEmoji}>📊</span>
                <div>
                  <p className={styles.courseName}>Advanced Data Structures</p>
                  <p className={`${styles.courseMeta} theme-text-faint`}>Lecture 14 of 24 · Week 7</p>
                </div>
              </div>
              <div className={styles.progressSection}>
                <div className={styles.progressRow}>
                  <span className={`${styles.progressPct} theme-text-secondary`}>68%</span>
                  <span className={`${styles.progressStatus} theme-text-faint`}>completed</span>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: '68%' }} />
                </div>
              </div>
              <div className={styles.statsRow}>
                {[
                  { label: 'Lectures', val: '14/24' },
                  { label: 'Assignments', val: '8/12' },
                  { label: 'Score', val: '91%' },
                ].map((s, idx) => (
                  <motion.div 
                    key={s.label} 
                    className={`liquid-glass ${styles.statCard}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <span className={styles.statVal}>{s.val}</span>
                    <span className={`${styles.statLabel} theme-text-faint`}>{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming Deadlines */}
          <motion.div 
            className={`liquid-glass ${styles.deadlines}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.sectionHeader}>
              <Clock size={16} className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Upcoming Deadlines</h3>
            </div>
            <ul className={styles.deadlineList}>
              {deadlines.map((d, idx) => (
                <motion.li 
                  key={d.title} 
                  className={`liquid-glass ${styles.deadlineItem}`}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                >
                  <div className={styles.deadlineLeft}>
                    <p className={styles.deadlineTitle}>{d.title}</p>
                    <p className={`${styles.deadlineCourse} theme-text-faint`}>{d.course}</p>
                  </div>
                  <span
                    className={`${styles.deadlineDue} ${d.urgent ? styles.deadlineUrgent : 'theme-text-faint'}`}
                  >
                    {d.due}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className={`liquid-glass-strong ${styles.achievements}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.sectionHeader}>
              <Award size={16} className={styles.sectionIcon} />
              <h3 className={styles.sectionTitle}>Recent Achievements</h3>
            </div>
            <div className={styles.achieveGrid}>
              {achievements.map((a, idx) => (
                <motion.div
                  key={a.label}
                  className={`liquid-glass ${styles.achieveBadge} ${!a.earned ? styles.achieveLocked : ''} hover-scale`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                >
                  {a.earned ? (
                    <Award size={22} className={styles.achieveIconEarned} />
                  ) : (
                    <Award size={22} className={styles.achieveIconLocked} />
                  )}
                  <span className={`${styles.achieveLabel} ${a.earned ? 'theme-text-secondary' : 'theme-text-faint'}`}>
                    {a.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
