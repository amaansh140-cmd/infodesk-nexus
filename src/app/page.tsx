'use client';

import Link from 'next/link';
import { 
  Play, BookOpen, Award, Database, Sparkles, 
  ShieldCheck, GraduationCap, Clock, Zap 
} from 'lucide-react';
import styles from './home.module.css';
import { motion } from 'framer-motion';

const CourseIcons: Record<string, any> = {
  Database,
  Sparkles
};

const activeCoures = [
  { title: 'Data Science', progress: 68, icon: 'Database', color: '#6366f1' },
  { title: 'Prompt Engineering', progress: 42, icon: 'Sparkles', color: '#10b981' },
];

const benefitsData = [
  { title: 'Certified', icon: ShieldCheck, color: '#10b981' },
  { title: 'Experienced Faculty', icon: GraduationCap, color: '#6366f1' },
  { title: 'Lifetime Access', icon: Clock, color: '#f59e0b' },
];

export default function HomePage() {
  return (
    <section className={styles.hero}>
      {/* ─── Left Panel ─── */}
      <motion.div 
        className={styles.leftPanel}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.heroContent}>
          {/* Eyebrow */}
          <motion.p 
            className={`${styles.eyebrow} theme-text-muted`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className={styles.dot} />
            Next-Gen Learning Platform
          </motion.p>

          {/* Headline */}
          <motion.h1 
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Mastering&nbsp;the<br />
            <em className={`font-serif ${styles.headlineItalic}`}>future</em> of&nbsp;learning
          </motion.h1>

          {/* Sub */}
          <motion.p 
            className={`${styles.subtext} theme-text-muted`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Unlock world-class courses crafted by industry experts. Learn at your own pace, earn recognised certifications.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/courses" className={`liquid-glass-strong hover-scale ${styles.ctaBtn}`}>
              <Play size={16} fill="white" />
              Browse Courses
            </Link>
          </motion.div>

          {/* Quote */}
          <motion.div 
            className={styles.quoteBlock}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className={`${styles.quoteLabel} theme-text-faint`}>LIFELONG LEARNING</span>
            <blockquote className={`${styles.quote} theme-text-muted`}>
              "Once you stop learning, you start dying."
              <cite className={styles.cite}>— Albert Einstein</cite>
            </blockquote>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Right Panel ─── */}
      <motion.div 
        className={styles.rightPanel}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div 
          className={`liquid-glass-strong ${styles.rightCard}`}
          animate={{ y: [0, -15, 0] }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className={styles.cardHeader}>
            <BookOpen size={16} className={styles.cardHeaderIcon} />
            <span className={styles.cardHeaderTitle}>Trending Courses</span>
            <span className={`${styles.badge} liquid-glass theme-text-faint`}>Popular now</span>
          </div>

          <div className={styles.courseList}>
            {activeCoures.map((c, index) => (
              <motion.div 
                key={c.title} 
                className={`liquid-glass ${styles.courseItem}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.courseIcon}>
                  {(() => {
                    const Icon = CourseIcons[c.icon];
                    return Icon ? <Icon size={20} color={c.color} strokeWidth={2.5} /> : null;
                  })()}
                </div>
                <div className={styles.courseInfo}>
                  <p className={styles.courseTitle}>{c.title}</p>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                  <p className={`${styles.progressLabel} theme-text-faint`}>{c.progress}% complete</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <div className={styles.certSection}>
            <div className={styles.cardHeader}>
              <Zap size={16} className={styles.cardHeaderIcon} />
              <span className={styles.cardHeaderTitle}>Benefits</span>
            </div>
            <div className={styles.certGrid}>
              {benefitsData.map((benefit, index) => (
                <motion.div 
                  key={benefit.title} 
                  className={`liquid-glass ${styles.certBadge} hover-scale`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <benefit.icon size={20} className={styles.certIcon} color={benefit.color} />
                  <span className={`${styles.certLabel} theme-text-muted`}>{benefit.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Course Preview Thumbnail */}
          <motion.div 
            className={`liquid-glass ${styles.previewCard}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className={styles.previewThumb}>
              <div className={styles.playOverlay}>
                <div className={`liquid-glass-strong ${styles.playCircle} hover-scale`}>
                  <Play size={20} fill="white" />
                </div>
              </div>
              <div className={styles.previewGradient} />
            </div>
            <div className={styles.previewInfo}>
              <p className={styles.previewTitle}>Data Science</p>
              <p className={`${styles.previewMeta} theme-text-faint`}>Lecture 12 · Trees &amp; Graphs</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
