'use client';

import React from 'react';
import { FileText, Download, Search, Filter, BookOpen } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function StudentMaterials() {
  const materials = [
    { id: 1, title: 'Introduction to Data Structures', course: 'Data Structures', faculty: 'Prof. Smith', date: 'Oct 24, 2023', size: '2.4 MB', type: 'PDF' },
    { id: 2, title: 'Trees and Graphs Handout', course: 'Data Structures', faculty: 'Prof. Smith', date: 'Oct 20, 2023', size: '1.1 MB', type: 'PDF' },
    { id: 3, title: 'Algorithm Complexity Guide', course: 'Algorithms', faculty: 'Prof. Smith', date: 'Oct 18, 2023', size: '450 KB', type: 'DOCX' },
    { id: 4, title: 'HTML5 Semantic Tags', course: 'Web Development', faculty: 'Prof. Davis', date: 'Oct 15, 2023', size: '3.2 MB', type: 'PPTX' },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Study Materials</h1>
          <p className={styles.pageSubtitle}>Access and download notes uploaded by your faculties</p>
        </div>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className={styles.cardTitle}>Available Resources</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input 
                type="text" 
                placeholder="Search resources..." 
                style={{ padding: '0.5rem 0.5rem 0.5rem 2.25rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', fontSize: '0.875rem' }}
              />
            </div>
            <select style={{ padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', fontSize: '0.875rem', backgroundColor: 'white' }}>
              <option>All Courses</option>
              <option>Data Structures</option>
              <option>Algorithms</option>
              <option>Web Development</option>
            </select>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Resource Name</th>
                <th>Course Details</th>
                <th>Upload Date</th>
                <th>Size</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((file) => (
                <tr key={file.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FileText size={16} />
                      </div>
                      <span className={styles.fw500}>{file.title}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ color: '#111827' }}>{file.course}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{file.faculty}</div>
                  </td>
                  <td>{file.date}</td>
                  <td style={{ color: '#6b7280' }}>{file.size}</td>
                  <td>
                    <button className={styles.secondaryBtn} style={{ padding: '0.375rem 0.75rem', fontSize: '0.875rem' }}>
                      <Download size={14} style={{ marginRight: '0.25rem' }} /> Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
