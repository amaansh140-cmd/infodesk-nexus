'use client';

import React from 'react';
import { BookOpen, Clock, Users, ArrowRight, PlayCircle, FileText } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function StudentCourses() {
  const courses = [
    { id: 1, title: 'Data Structures', code: 'CS201', faculty: 'Prof. Smith', progress: 45, status: 'Active', lectures: 12, materials: 8 },
    { id: 2, title: 'Algorithms', code: 'CS202', faculty: 'Prof. Smith', progress: 12, status: 'Active', lectures: 4, materials: 2 },
    { id: 3, title: 'Web Development', code: 'CS203', faculty: 'Prof. Davis', progress: 0, status: 'Upcoming', lectures: 0, materials: 0 },
    { id: 4, title: 'Database Management', code: 'CS204', faculty: 'Prof. Johnson', progress: 100, status: 'Completed', lectures: 24, materials: 15 },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>My Courses</h1>
          <p className={styles.pageSubtitle}>View your enrolled courses, track progress, and access materials</p>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {courses.map((course) => (
          <div key={course.id} className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>{course.title}</h3>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{course.code} • {course.faculty}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>Course Progress</span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: 500 }}>{course.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${course.progress}%`, height: '100%', background: course.progress === 100 ? '#10b981' : '#3b82f6' }}></div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <PlayCircle size={16} /> {course.lectures} Lectures
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>
                  <FileText size={16} /> {course.materials} Resources
                </div>
              </div>
            </div>

            <div style={{ padding: '1rem 1.5rem', background: '#f9fafb', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className={styles.badge} style={{ 
                color: course.status === 'Completed' ? '#10b981' : course.status === 'Upcoming' ? '#6b7280' : '#3b82f6' 
              }}>
                {course.status}
              </span>
              <button className={styles.secondaryBtn} style={{ padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}>
                Go to Course <ArrowRight size={14} style={{ marginLeft: '0.25rem' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
