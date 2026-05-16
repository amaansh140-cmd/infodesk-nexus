'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { courses as initialCourses } from '@/data/courses';
import { Database, Cloud, Globe, ShieldCheck, BarChart3, Workflow, Sparkles, Code, Trash2, Plus } from 'lucide-react';
import styles from './courses.module.css';

const IconMap: Record<string, any> = {
  Database,
  Cloud,
  Globe,
  ShieldCheck,
  BarChart3,
  Workflow,
  Sparkles,
  Code
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [showForm, setShowForm] = useState(false);
  
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    level: 'Beginner',
    duration: '12 Weeks',
    price: 0
  });

  const handleDelete = (courseId: number) => {
    if (confirm("Are you sure you want to hide this course? (Note: Permanent deletion requires database migration as courses are currently hardcoded).")) {
      setCourses(courses.filter(c => c.id !== courseId));
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseToAdd = {
      id: Date.now(), // Generate a mock ID
      title: newCourse.title,
      description: newCourse.description,
      level: newCourse.level,
      duration: newCourse.duration,
      price: Number(newCourse.price),
      icon: 'Code', // Default icon
      color: '#6366f1', // Default color
      chapters: []
    };

    setCourses([courseToAdd, ...courses]);
    setShowForm(false);
    setNewCourse({ title: '', description: '', level: 'Beginner', duration: '12 Weeks', price: 0 });
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Manage Courses</h1>
          <p className={styles.subtitle}>Overview of all courses currently offered on Infodesk Nexus.</p>
        </div>
        {!showForm && (
          <button className={styles.addBtn} onClick={() => setShowForm(true)}>
            <Plus size={16} /> Add Course
          </button>
        )}
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <form className={styles.addForm} onSubmit={handleAdd}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Course Title</label>
                <input 
                  type="text" 
                  required
                  className={styles.input} 
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="e.g. Advanced Python"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Price (₹)</label>
                <input 
                  type="number" 
                  required
                  className={styles.input} 
                  value={newCourse.price}
                  onChange={(e) => setNewCourse({...newCourse, price: Number(e.target.value)})}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Level</label>
                <input 
                  type="text" 
                  required
                  className={styles.input} 
                  value={newCourse.level}
                  onChange={(e) => setNewCourse({...newCourse, level: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Duration</label>
                <input 
                  type="text" 
                  required
                  className={styles.input} 
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                />
              </div>
              <div className={`${styles.formGroup} ${styles.full}`}>
                <label className={styles.label}>Description</label>
                <textarea 
                  required
                  className={styles.textarea} 
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                />
              </div>
              <div className={styles.formActions}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowForm(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.addBtn}>
                  Save Course
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.grid}>
        <AnimatePresence>
          {courses.map((course) => {
            const IconComponent = IconMap[course.icon] || Code;
            
            return (
              <motion.div 
                key={course.id} 
                className={`liquid-glass ${styles.courseCard}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                layout
              >
                <div className={styles.courseHeader}>
                  <div className={styles.iconWrapper} style={{ backgroundColor: course.color }}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                </div>
                
                <div className={styles.courseMeta}>
                  <span className={styles.badge}>{course.level}</span>
                  <span className={styles.badge}>{course.duration}</span>
                </div>
                
                <p className={styles.courseDesc}>{course.description}</p>
                
                <div className={styles.price}>
                  ₹{course.price.toLocaleString()}
                </div>

                <div className={styles.actions}>
                  <button 
                    className={styles.deleteBtn}
                    onClick={() => handleDelete(course.id)}
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
