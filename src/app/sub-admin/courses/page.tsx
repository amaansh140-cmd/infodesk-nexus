'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit2, Trash2, BookOpen, Clock, Users, ChevronDown, X } from 'lucide-react';
import { useDatabase, Course } from '../../../context/DatabaseContext';
import { useAuth } from '../../../context/AuthContext';
import styles from '../../super-admin/super-admin.module.css';

export default function CoursesManagementPage() {
  const { user } = useAuth();
  const { courses, updateCourse } = useDatabase();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSelectModal, setShowSelectModal] = useState(false);
  
  // Scoped to current user branch
  const BRANCH_ID = user?.branch || 'Unknown';
  
  const branchCourses = courses.filter(c => c.selectedByBranches?.includes(BRANCH_ID));
  const availableGlobalCourses = courses.filter(c => !c.selectedByBranches?.includes(BRANCH_ID));

  const filteredCourses = branchCourses.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      updateCourse(courseId, { 
        selectedByBranches: [...(course.selectedByBranches || []), BRANCH_ID] 
      });
    }
  };

  const handleRemoveCourse = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (course) {
      updateCourse(courseId, { 
        selectedByBranches: (course.selectedByBranches || []).filter(b => b !== BRANCH_ID) 
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Course & Curriculum</h1>
            <p className={styles.pageSubtitle}>Manage courses and faculty assignments for {BRANCH_ID}.</p>
          </div>
          <button 
            onClick={() => setShowSelectModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: 'none', background: '#111827', color: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}
          >
            <Plus size={16} /> Select Course
          </button>
        </div>
      </div>

      {showSelectModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="liquid-glass-strong" style={{ width: '90%', maxWidth: '600px', padding: '2rem', borderRadius: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Global Course Catalog</h2>
              <button onClick={() => setShowSelectModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '400px', overflowY: 'auto' }}>
              {availableGlobalCourses.length === 0 ? (
                <p style={{ color: 'rgba(17,24,39,0.5)', textAlign: 'center', padding: '2rem' }}>No more courses available to select.</p>
              ) : (
                availableGlobalCourses.map(course => (
                  <div key={course.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid rgba(17,24,39,0.1)', borderRadius: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontWeight: 600, fontSize: '1rem', margin: '0 0 0.25rem 0' }}>{course.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'rgba(17,24,39,0.6)', margin: 0 }}>{course.category} • {course.duration}</p>
                    </div>
                    <button 
                      onClick={() => handleSelectCourse(course.id)}
                      style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}
                    >
                      Add to Branch
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        
        {/* Search & Filter Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '250px' }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input 
              type="text" 
              placeholder="Search courses or categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
            Filter by Category <ChevronDown size={14} />
          </button>
        </div>

        {/* Courses Table */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Course Name</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Category</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Duration</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course, index) => (
                <tr key={course.id} style={{ borderBottom: index === filteredCourses.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)', transition: 'background 0.2s', cursor: 'pointer' }} className="hover-scale">
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 600, color: '#111827' }}>{course.title}</span>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(17,24,39,0.5)' }}>{course.code}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <BookOpen size={14} color="rgba(17,24,39,0.4)" />
                      <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 500 }}>{course.category}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={14} color="rgba(17,24,39,0.4)" />
                      <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 500 }}>{course.duration}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, 
                      background: course.status === 'Active' ? 'rgba(16,185,129,0.1)' : course.status === 'Draft' ? 'rgba(59,130,246,0.1)' : 'rgba(239,68,68,0.1)', 
                      color: course.status === 'Active' ? '#10b981' : course.status === 'Draft' ? '#3b82f6' : '#ef4444' 
                    }}>
                      {course.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                      <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ef4444' }} onClick={() => handleRemoveCourse(course.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCourses.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>No courses assigned to this branch. Click 'Select Course' to add one.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
