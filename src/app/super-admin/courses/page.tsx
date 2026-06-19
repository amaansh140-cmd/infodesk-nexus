'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Plus, Save, BookOpen, Clock, Trash2, X, Download, Upload } from 'lucide-react';
import { useDatabase } from '../../../context/DatabaseContext';
import styles from '../super-admin.module.css';

export default function CoursesPage() {
  const { courses, addCourse, updateCourse } = useDatabase();
  const [showBuilder, setShowBuilder] = useState(false);

  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [modules, setModules] = useState([{ id: 1, title: '', lectures: [{ id: 1, title: '', duration: '' }] }]);

  const handleAddModule = () => {
    setModules([...modules, { id: Date.now(), title: '', lectures: [{ id: Date.now(), title: '', duration: '' }] }]);
  };

  const handleAddLecture = (moduleId: number) => {
    setModules(modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, lectures: [...mod.lectures, { id: Date.now(), title: '', duration: '' }] };
      }
      return mod;
    }));
  };

  const handleRemoveLecture = (moduleId: number, lectureId: number) => {
    setModules(modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, lectures: mod.lectures.filter(l => l.id !== lectureId) };
      }
      return mod;
    }));
  };

  const handleRemoveModule = (moduleId: number) => {
    setModules(modules.filter(m => m.id !== moduleId));
  };

  const handleSaveCourse = () => {
    if (!newCourse.title) return;
    const totalLectures = modules.reduce((acc, mod) => acc + mod.lectures.length, 0);
    
    addCourse({
      id: `CRS-${Date.now().toString().slice(-4)}`,
      code: `CODE-${Date.now().toString().slice(-4)}`,
      title: newCourse.title,
      description: newCourse.description,
      category: 'General',
      duration: `${totalLectures} Lectures`,
      status: 'Active',
      selectedByBranches: []
    });
    
    setShowBuilder(false);
    setNewCourse({ title: '', description: '' });
    setModules([{ id: 1, title: '', lectures: [{ id: 1, title: '', duration: '' }] }]);
  };

  const handleDownloadTemplate = () => {
    const csvContent = "Module Title,Lecture Title,Duration\nIntroduction,Welcome to the Course,5m\nIntroduction,Course Overview,10m\nAdvanced Topics,Deep Dive,45m";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'curriculum-template.csv';
    a.click();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;
      
      const lines = text.split('\n');
      const newModulesMap = new Map<string, any>();
      
      // Skip header
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        // Simple comma split (assumes no commas in titles for this demo)
        const parts = line.split(',');
        const modTitle = parts[0]?.trim();
        const lecTitle = parts[1]?.trim();
        const duration = parts[2]?.trim();

        if (!modTitle) continue;

        if (!newModulesMap.has(modTitle)) {
          newModulesMap.set(modTitle, { id: Date.now() + i * 100, title: modTitle, lectures: [] });
        }
        
        if (lecTitle) {
          newModulesMap.get(modTitle).lectures.push({
            id: Date.now() + i * 100 + 1,
            title: lecTitle,
            duration: duration || '0m'
          });
        }
      }

      const parsedModules = Array.from(newModulesMap.values());
      if (parsedModules.length > 0) {
        setModules(parsedModules);
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // reset input
  };

  if (showBuilder) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className={styles.pageHeader}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 className={styles.pageTitle} style={{ fontSize: '1.5rem', margin: 0 }}>Course Builder</h1>
              <p className={styles.pageSubtitle} style={{ marginTop: '0.25rem' }}>Create a new course with curriculum and lecture breakup.</p>
            </div>
            <button className={`liquid-glass ${styles.actionBtn}`} onClick={() => setShowBuilder(false)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
              <X size={16} /> Cancel
            </button>
          </div>
        </div>

        <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ marginBottom: '2rem' }}>
          <h3 className={styles.sectionTitle}>Course Details</h3>
          <div className={styles.formGroup}>
            <label className={styles.label}>Course Title</label>
            <input type="text" className={styles.input} placeholder="e.g. Full Stack JavaScript" value={newCourse.title} onChange={e => setNewCourse({...newCourse, title: e.target.value})} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea className={styles.input} rows={3} placeholder="Briefly describe the course..." value={newCourse.description} onChange={e => setNewCourse({...newCourse, description: e.target.value})} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className={styles.sectionTitle} style={{ margin: 0 }}>Curriculum Breakup</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className={`liquid-glass ${styles.actionBtn}`} onClick={handleDownloadTemplate} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
              <Download size={16} /> CSV Template
            </button>
            <label className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#3b82f6', cursor: 'pointer' }}>
              <Upload size={16} /> Bulk Upload CSV
              <input type="file" accept=".csv" style={{ display: 'none' }} onChange={handleFileUpload} />
            </label>
            <button className={styles.primaryBtn} onClick={handleAddModule} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#8b5cf6' }}>
              <Plus size={16} /> Add Module
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          {modules.map((mod, mIndex) => (
            <div key={mod.id} className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto', borderLeft: '4px solid #8b5cf6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                  <span style={{ fontWeight: 600, color: '#8b5cf6' }}>Module {mIndex + 1}:</span>
                  <input type="text" className={styles.input} style={{ flex: 1, padding: '0.5rem' }} placeholder="Module Title (e.g. Introduction to React)" value={mod.title} onChange={e => {
                    const newMods = [...modules];
                    newMods[mIndex].title = e.target.value;
                    setModules(newMods);
                  }} />
                </div>
                <button className={styles.actionBtn} style={{ marginLeft: '1rem', color: '#ef4444' }} onClick={() => handleRemoveModule(mod.id)}><Trash2 size={16} /></button>
              </div>

              <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {mod.lectures.map((lec, lIndex) => (
                  <div key={lec.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <BookOpen size={16} style={{ color: 'rgba(17,24,39,0.4)' }} />
                    <input type="text" className={styles.input} style={{ flex: 2, padding: '0.4rem 0.75rem', fontSize: '0.875rem' }} placeholder={`Lecture ${lIndex + 1} Title`} value={lec.title} onChange={e => {
                      const newMods = [...modules];
                      newMods[mIndex].lectures[lIndex].title = e.target.value;
                      setModules(newMods);
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                      <Clock size={16} style={{ color: 'rgba(17,24,39,0.4)' }} />
                      <input type="text" className={styles.input} style={{ padding: '0.4rem 0.75rem', fontSize: '0.875rem' }} placeholder="Duration (e.g. 45m)" value={lec.duration} onChange={e => {
                        const newMods = [...modules];
                        newMods[mIndex].lectures[lIndex].duration = e.target.value;
                        setModules(newMods);
                      }} />
                    </div>
                    <button className={styles.actionBtn} onClick={() => handleRemoveLecture(mod.id, lec.id)}><X size={16} /></button>
                  </div>
                ))}
                <button className={`liquid-glass ${styles.actionBtn}`} onClick={() => handleAddLecture(mod.id)} style={{ width: 'fit-content', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                  <Plus size={14} /> Add Lecture
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
          <button className={styles.primaryBtn} onClick={handleSaveCourse} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 2rem' }}>
            <Save size={18} /> Publish Course
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className={styles.pageSubtitle}>Manage master courses, curriculum blocks, and lecture outlines.</p>
          <button className={styles.primaryBtn} onClick={() => setShowBuilder(true)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Plus size={16} /> Create Course
          </button>
        </div>
      </div>

      <div className={`liquid-glass-strong ${styles.tableCard}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Curriculum Structure</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c, i) => (
              <tr key={i} className={styles.tableRow}>
                <td style={{ fontWeight: 500 }}>{c.code}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <GraduationCap size={16} style={{ color: 'rgba(17,24,39,0.5)' }} />
                    <span style={{ fontWeight: 600 }}>{c.title}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem', color: 'rgba(17,24,39,0.6)' }}>
                    <span>{c.category}</span>
                    <span>•</span>
                    <span>{c.duration}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className={styles.actionBtn} aria-label="Edit"><BookOpen size={16} /></button>
                    <button className={styles.actionBtn} aria-label="Delete" onClick={() => updateCourse(c.id, { status: 'Archived' })}><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
            {courses.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '2rem', color: 'rgba(17,24,39,0.5)' }}>No courses found. Create one to get started.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
