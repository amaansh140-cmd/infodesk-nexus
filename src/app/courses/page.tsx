'use client';

import React, { useState } from 'react';
import { Search, BookOpen, Clock, BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './courses.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: 'Advanced Data Structures & Algorithms',
    duration: '12 weeks',
    level: 'Advanced',
    category: 'Computer Science',
    icon: '/assets/icons/dsa.png',
    color: '#6366f1', // Indigo
    syllabus: [
      { week: 'W1-2', topic: 'Algorithm Analysis & Big O' },
      { week: 'W3-5', topic: 'Trees, Graphs, & Heaps' },
      { week: 'W6-8', topic: 'Dynamic Programming' },
      { week: 'W9-12', topic: 'NP-Completeness & Capstone' },
    ]
  },
  {
    id: 2,
    title: 'Machine Learning Fundamentals',
    duration: '10 weeks',
    level: 'Intermediate',
    category: 'Artificial Intelligence',
    icon: '/assets/icons/ml.png',
    color: '#10b981', // Emerald
    syllabus: [
      { week: 'W1-3', topic: 'Supervised vs Unsupervised' },
      { week: 'W4-6', topic: 'Neural Networks & Backprop' },
      { week: 'W7-8', topic: 'CNNs & Computer Vision' },
      { week: 'W9-10', topic: 'Deployment & MLOps' },
    ]
  },
  {
    id: 3,
    title: 'Full-Stack Web Development',
    duration: '16 weeks',
    level: 'Intermediate',
    category: 'Web Development',
    icon: '/assets/icons/webdev.png',
    color: '#f59e0b', // Amber
    syllabus: [
      { week: 'W1-4', topic: 'Modern UI/UX & React' },
      { week: 'W5-8', topic: 'Node.js & Express APIs' },
      { week: 'W9-12', topic: 'SQL/NoSQL Databases' },
      { week: 'W13-16', topic: 'Cloud Architectures & Vercel' },
    ]
  },
  {
    id: 4,
    title: 'Quantum Computing Basics',
    duration: '8 weeks',
    level: 'Advanced',
    category: 'Physics & CS',
    icon: '/assets/icons/quantum.png',
    color: '#8b5cf6', // Violet
    syllabus: [
      { week: 'W1-2', topic: 'Qubits & Superposition' },
      { week: 'W3-4', topic: 'Quantum Gates & Circuits' },
      { week: 'W5-6', topic: 'Shor & Grover Algorithms' },
      { week: 'W7-8', topic: 'Qiskit & Real Hardware' },
    ]
  },
  {
    id: 5,
    title: 'Cybersecurity & Ethical Hacking',
    duration: '14 weeks',
    level: 'Advanced',
    category: 'Security',
    icon: '/assets/icons/security.png',
    color: '#ef4444', // Red
    syllabus: [
      { week: 'W1-3', topic: 'Cryptography & Hashes' },
      { week: 'W4-7', topic: 'Network Penetration' },
      { week: 'W8-10', topic: 'Web App Vulnerabilities' },
      { week: 'W11-14', topic: 'Forensics & Incident Response' },
    ]
  },
  {
    id: 6,
    title: 'Product Design & UX Research',
    duration: '6 weeks',
    level: 'Beginner',
    category: 'Design',
    icon: '/assets/icons/design.png',
    color: '#ec4899', // Pink
    syllabus: [
      { week: 'W1-2', topic: 'Empathy & User Journeys' },
      { week: 'W3-4', topic: 'Wireframing & Prototyping' },
      { week: 'W5-6', topic: 'User Testing & Analytics' },
    ]
  },
];

const levelColor: Record<string, string> = {
  Beginner: 'rgba(255,255,255,0.55)',
  Intermediate: 'rgba(255,255,255,0.70)',
  Advanced: 'rgba(255,255,255,0.90)',
};

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleSyllabus = (id: number) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Explore Programs</h2>
          <p className={`${styles.subtitle} theme-text-muted`}>
            Handcrafted by industry leaders. Built for ambitious learners.
          </p>
        </div>

        {/* Search */}
        <div className={`liquid-glass ${styles.searchWrap}`}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search courses, topics, instructors…"
            className={styles.searchInput}
            aria-label="Search courses"
          />
        </div>
      </motion.div>

      {/* Course grid */}
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <motion.article 
            key={course.id} 
            className={`liquid-glass-strong ${styles.card}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.cardThumb}>
              <div className={styles.iconContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div 
                  className={styles.cardImage}
                  style={{ 
                    backgroundColor: course.color,
                    maskImage: `url(${course.icon})`,
                    WebkitMaskImage: `url(${course.icon})`
                  }}
                  aria-label={course.title}
                />
              </div>
            </div>

            <div className={styles.cardContent}>
              <span className={styles.cardCategory}>{course.category}</span>
              <h3 className={styles.cardTitle}>{course.title}</h3>

              <div className={styles.pills}>
                <span className={styles.pill}>
                  <Clock size={11} />
                  {course.duration}
                </span>
                <span
                  className={styles.pill}
                  style={{ color: levelColor[course.level] }}
                >
                  <BarChart2 size={11} />
                  {course.level}
                </span>
              </div>
              
              <button 
                className={styles.viewSyllabusBtn}
                onClick={() => toggleSyllabus(course.id)}
              >
                {expandedCourse === course.id ? 'Hide Syllabus' : 'View Syllabus'}
                {expandedCourse === course.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              
              <motion.div 
                className={styles.syllabusWrapper}
                initial={false}
                animate={{ 
                  height: expandedCourse === course.id ? 'auto' : 0, 
                  opacity: expandedCourse === course.id ? 1 : 0,
                  visibility: expandedCourse === course.id ? 'visible' : 'hidden'
                }}
                transition={{ duration: 0.3 }}
              >
                {course.syllabus?.map((item, i) => (
                  <div key={i} className={styles.syllabusItem}>
                    <span className={styles.syllabusWeek} style={{ color: course.color }}>{item.week}</span>
                    <span>{item.topic}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className={styles.cardAction}>
              <button className={`liquid-glass-strong ${styles.enrollBtn}`}>
                Enroll Now
                <BookOpen size={14} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
