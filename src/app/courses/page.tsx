'use client';

import React, { useState } from 'react';
import { 
  Search, BookOpen, Clock, ChevronDown, ChevronUp,
  Database, Cloud, Globe, ShieldCheck, BarChart3, Workflow, Sparkles, Zap,
  ShoppingBag
} from 'lucide-react';
import styles from './courses.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

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

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const { addToCart, cart } = useCart();

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
          const isInCart = cart.some(c => c.id === course.id);
          
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
                <div className={styles.priceTag}>₹{course.price.toLocaleString('en-IN')}</div>
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
                  &nbsp;
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
                  <button 
                    className={`liquid-glass ${styles.cartButton} ${isInCart ? styles.alreadyInCart : ''}`}
                    onClick={() => addToCart(course)}
                    disabled={isInCart}
                  >
                    <ShoppingBag size={14} />
                    <span>{isInCart ? 'In Bag' : 'Add'}</span>
                  </button>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
