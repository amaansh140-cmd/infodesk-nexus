'use client';

import React, { useState, useRef } from 'react';
import { Plus, PlayCircle, CheckCircle2, Clock, Calendar, X, Download, Upload } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useDatabase } from '../../../context/DatabaseContext';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyLectures() {
  const { user } = useAuth();
  const { lecturePlans, addLecturePlan, updateLecturePlanStatus, courses } = useDatabase();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    courseId: '',
    topic: '',
    date: '',
    time: '',
    batch: '',
    learningObjectives: ''
  });

  // Filter plans for this faculty
  const myPlans = lecturePlans.filter(p => p.facultyId === user?.id).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // My Assigned Courses
  // Since user.assignedCourses isn't easily accessible without finding the user object in faculties, 
  // we'll just list all active courses for now (or find the faculty in DB)
  // Let's just use the courses list. In a real app, we'd filter by faculties.find(f => f.id === user.id)?.assignedCourses
  const activeCourses = courses.filter(c => c.status === 'Active');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const downloadCSVTemplate = () => {
    const headers = "Course Name,Topic\n";
    const example = "Agentic AI,Intro to LLMs\n";
    const blob = new Blob([headers + example], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Lecture_Breakup_Template.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;

      const lines = text.split('\n');
      if (lines.length <= 1) return; // Only headers or empty

      // Skip header row
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Simple CSV parse
        const [courseName, ...topicParts] = line.split(',');
        const topic = topicParts.join(',').trim(); // Topic might have commas in it
        
        if (courseName && topic) {
          // Find matching course by title
          const course = activeCourses.find(c => c.title.toLowerCase() === courseName.trim().toLowerCase());
          const courseId = course ? course.id : activeCourses[0]?.id || ''; // Fallback to first active course if not found
          
          if (courseId) {
            addLecturePlan({
              courseId,
              facultyId: user.id,
              topic: topic.replace(/^"|"$/g, '').trim(), // Remove quotes if any
              date: new Date().toISOString().split('T')[0],
              time: '09:00',
              batch: 'Batch A',
              learningObjectives: 'Standard objective'
            });
          }
        }
      }
      
      // Reset input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      alert('CSV uploaded successfully!');
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    addLecturePlan({
      ...formData,
      facultyId: user.id
    });
    
    setIsModalOpen(false);
    setFormData({ courseId: '', topic: '', date: '', time: '', batch: '', learningObjectives: '' });
  };

  const calculateProgress = (courseId: string) => {
    const coursePlans = myPlans.filter(p => p.courseId === courseId);
    if (coursePlans.length === 0) return 0;
    const delivered = coursePlans.filter(p => p.status === 'Delivered').length;
    return Math.round((delivered / coursePlans.length) * 100);
  };

  // Group progress by course
  const uniqueCourseIds = Array.from(new Set(myPlans.map(p => p.courseId)));

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div>
            <h1 className={styles.pageTitle}>Lecture Breakup & Scheduling</h1>
            <p className={styles.pageSubtitle}>Plan your curriculum and track delivery progress</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className={styles.secondaryBtn} onClick={downloadCSVTemplate}>
              <Download size={16} /> CSV Template
            </button>
            <input 
              type="file" 
              accept=".csv" 
              style={{ display: 'none' }} 
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <button className={styles.secondaryBtn} onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} /> Upload CSV
            </button>
            <button className={styles.actionBtn} onClick={() => setIsModalOpen(true)}>
              <Plus size={16} /> Add Lecture Plan
            </button>
          </div>
        </div>
      </header>

      <div className={styles.grid2Cols}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Upcoming & Recent Lectures</h2>
          </div>
          <div className={styles.tableWrapper}>
            {myPlans.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: '#6b7280' }}>
                <p>No lecture plans found. Click 'Add Lecture Plan' to create one.</p>
              </div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Topic & Course</th>
                    <th>Schedule</th>
                    <th>Batch</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myPlans.map(lecture => {
                    const courseName = courses.find(c => c.id === lecture.courseId)?.title || 'Unknown Course';
                    return (
                      <tr key={lecture.id}>
                        <td>
                          <div className={styles.fw500}>{lecture.topic}</div>
                          <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{courseName}</div>
                        </td>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#6b7280', fontSize: '0.875rem' }}>
                            <Calendar size={14} /> {new Date(lecture.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#6b7280', fontSize: '0.875rem' }}>
                            <Clock size={14} /> {lecture.time}
                          </div>
                        </td>
                        <td>{lecture.batch}</td>
                        <td>
                          {lecture.status === 'Delivered' && <span className={styles.badge} style={{ color: '#10b981' }}>{lecture.status}</span>}
                          {lecture.status === 'Pending' && <span className={styles.badge} style={{ color: '#3b82f6' }}>{lecture.status}</span>}
                          {lecture.status === 'Rescheduled' && <span className={styles.badge} style={{ color: '#f59e0b' }}>{lecture.status}</span>}
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button 
                              onClick={() => updateLecturePlanStatus(lecture.id, 'Delivered')}
                              className={styles.iconBtn} 
                              title="Mark as Delivered"
                              disabled={lecture.status === 'Delivered'}
                              style={{ opacity: lecture.status === 'Delivered' ? 0.3 : 1 }}
                            >
                              <CheckCircle2 size={18} />
                            </button>
                            <button className={styles.iconBtn} title="Start Live Session (Coming Soon)">
                              <PlayCircle size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Curriculum Progress</h2>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {uniqueCourseIds.length === 0 ? (
              <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>No active courses with planned lectures.</p>
            ) : (
              uniqueCourseIds.map(courseId => {
                const courseName = courses.find(c => c.id === courseId)?.title || 'Course';
                const progress = calculateProgress(courseId);
                // Assign a color dynamically based on progress or random consistent
                const color = progress === 100 ? '#10b981' : progress > 50 ? '#3b82f6' : '#f59e0b';
                
                return (
                  <div key={courseId}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{courseName}</span>
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{progress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${progress}%`, height: '100%', background: color, transition: 'width 0.3s ease' }}></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Add Lecture Plan</h2>
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label className={styles.label}>Course</label>
                <select 
                  className={styles.input} 
                  value={formData.courseId}
                  onChange={e => setFormData({...formData, courseId: e.target.value})}
                  required
                >
                  <option value="">Select a Course</option>
                  {activeCourses.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={styles.label}>Topic</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. Binary Search Trees"
                  value={formData.topic}
                  onChange={e => setFormData({...formData, topic: e.target.value})}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label className={styles.label}>Date</label>
                  <input 
                    type="date" 
                    className={styles.input}
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className={styles.label}>Time</label>
                  <input 
                    type="time" 
                    className={styles.input}
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={styles.label}>Batch</label>
                <input 
                  type="text" 
                  className={styles.input} 
                  placeholder="e.g. Batch A"
                  value={formData.batch}
                  onChange={e => setFormData({...formData, batch: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className={styles.label}>Learning Objectives</label>
                <textarea 
                  className={styles.input} 
                  placeholder="What will the students learn?"
                  rows={3}
                  value={formData.learningObjectives}
                  onChange={e => setFormData({...formData, learningObjectives: e.target.value})}
                  required
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem' }}>
                <button type="button" className={styles.secondaryBtn} onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className={styles.primaryBtn}>Save Plan</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
