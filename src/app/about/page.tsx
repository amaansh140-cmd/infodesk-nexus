'use client';

import React, { useEffect, useState, useRef } from 'react';
import PageTransition from '@/components/PageTransition';
import { Variants, motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react';
import styles from './about.module.css';

// --- DATA ---
const values = [
  { icon: Target, title: 'Excellence', description: 'Striving for mastery in everything we teach.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing next-generation learning methodologies.' },
  { icon: ShieldCheck, title: 'Integrity', description: 'Rigorous standards and transparent practices.' },
  { icon: Users, title: 'Community', description: 'A vibrant ecosystem of ambitious learners.' },
];

const timeline = [
  { year: '2023', title: 'The Genesis', description: 'Infodesk Nexus was born with a mission to disrupt legacy education models.' },
  { year: '2024', title: 'Global Reach', description: 'Expanded our curriculum to 50+ countries, onboarding top-tier industry mentors.' },
  { year: '2025', title: 'Nexus Portal', description: 'Launched our proprietary liquid-glass learning environment for seamless engagement.' },
  { year: 'Present', title: 'The Future', description: 'Continuously pioneering the intersection of AI, design, and interactive learning.' }
];

const stats = [
  { label: 'Active Students', value: 50000, suffix: '+' },
  { label: 'Expert Mentors', value: 120, suffix: '+' },
  { label: 'Courses Delivered', value: 350, suffix: '' },
  { label: 'Success Rate', value: 98, suffix: '%' },
];

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

const timelineItemLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

const timelineItemRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } }
};

// --- COUNTER COMPONENT ---
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2
  });
  
  const displayValue = useTransform(springValue, (current) => {
    return Math.round(current).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className={styles.container}>
        
        {/* === HERO SECTION === */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className={styles.heroBadge}>Our Vision</div>
          <h1 className={styles.title}>
            Pioneering the <span className={styles.highlight}>nexus</span> of education and technology.
          </h1>
          <p className={styles.subtitle}>
            Infodesk Nexus was founded on a simple premise: learning should be as dynamic, liquid, and limitless as the technology that drives our world forward. We are building the ultimate portal for ambitious minds.
          </p>
        </motion.section>

        {/* === BY THE NUMBERS (STATS) === */}
        <motion.section 
          className={styles.statsSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className={styles.statCard}>
                <h2 className={styles.statValue}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <span className={styles.statSuffix}>{stat.suffix}</span>
                </h2>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === CORE VALUES === */}
        <motion.section
          className={styles.valuesSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core Values</h2>
            <p className={styles.sectionSubtitle}>The pillars that define our commitment to excellence.</p>
          </div>
          
          <div className={styles.grid}>
            {values.map((val, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                className={`liquid-glass-strong hover-scale ${styles.card}`}
              >
                <div className={styles.iconWrapper}>
                  <val.icon size={28} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{val.title}</h3>
                <p className={styles.cardDesc}>{val.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === OUR JOURNEY (TIMELINE) === */}
        <motion.section
          className={styles.timelineSection}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Journey</h2>
            <p className={styles.sectionSubtitle}>The milestones that shaped the Infodesk Nexus experience.</p>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineLine}></div>
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx} 
                  variants={isEven ? timelineItemLeft : timelineItemRight}
                  className={`${styles.timelineItem} ${isEven ? styles.itemLeft : styles.itemRight}`}
                >
                  <div className={styles.timelineDot}></div>
                  <div className={`liquid-glass ${styles.timelineCard}`}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

      </div>
    </PageTransition>
  );
}
