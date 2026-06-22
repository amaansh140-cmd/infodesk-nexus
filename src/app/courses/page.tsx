'use client';

import React, { useState } from 'react';
import { 
  Search, BookOpen, Clock, ChevronDown, ChevronUp,
  Database, Cloud, Globe, ShieldCheck, BarChart3, Workflow, Sparkles, Zap
} from 'lucide-react';
import styles from './courses.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { courses } from '@/data/courses';

const CourseIcons: Record<string, any> = {
  Database,
  Cloud,
  Globe,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Zap
};

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{padding: '50px', color: 'red'}}>
        <h2>Something went wrong in CoursesPage.</h2>
        <pre>{this.state.error?.toString()}</pre>
        <pre>{this.state.error?.stack}</pre>
      </div>;
    }
    return this.props.children;
  }
}

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const toggleSyllabus = (id: number) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <ErrorBoundary>
      <div className={styles.page}>
        {/* Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleBlock}>
            <h2 className={styles.title}>Professional Programs</h2>
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
          {courses.map((course, index) => {
            
            return (
              <motion.article 
                key={course.id} 
                className={`liquid-glass-strong ${styles.card}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  backgroundColor: `${course.color}1A`,
                  borderColor: `${course.color}33`
                }}
              >
                <div className={styles.cardThumb}>
                  <div className={styles.iconContainer}>
                    {(() => {
                      const Icon = CourseIcons[course.icon];
                      return Icon ? (
                        <Icon 
                          size={24} 
                          color={course.color} 
                          strokeWidth={2.5}
                          className={styles.cardIcon}
                        />
                      ) : null;
                    })()}
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
                  </div>
                  
                  <button 
                    className={styles.viewSyllabusBtn}
                    onClick={() => toggleSyllabus(course.id)}
                    aria-label="Toggle Syllabus"
                  >
                    {expandedCourse === course.id ? (
                      <>Hide Syllabus <ChevronUp size={16} /></>
                    ) : (
                      <>View Syllabus <ChevronDown size={16} /></>
                    )}
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
                  <div className={styles.actionRow}>
                    <Link href={`/courses/${course.id}`} className={styles.learnMoreLink}>
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </ErrorBoundary>
  );
}
