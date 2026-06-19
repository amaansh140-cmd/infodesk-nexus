'use client';

import React from 'react';
import { Upload, FileText, Download, MoreVertical, Search, Filter } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyMaterials() {
  const materials = [
    { id: 1, title: 'Introduction to Data Structures PDF', course: 'Data Structures', batch: 'Batch A', date: '2023-10-24', size: '2.4 MB', type: 'PDF' },
    { id: 2, margin: 'Trees and Graphs Handout', course: 'Data Structures', batch: 'Batch A', date: '2023-10-20', size: '1.1 MB', type: 'PDF' },
    { id: 3, title: 'Algorithm Complexity Assignment', course: 'Algorithms', batch: 'Batch B', date: '2023-10-18', size: '450 KB', type: 'DOCX' },
  ];

  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Course Materials</h1>
          <p className={styles.pageSubtitle}>Upload and share study resources with your students</p>
        </div>
        <button className={styles.actionBtn}>
          <Upload size={16} /> Upload Material
        </button>
      </header>

      <div className={styles.card}>
        <div className={styles.cardHeader} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className={styles.cardTitle}>Shared Resources</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input 
                type="text" 
                placeholder="Search materials..." 
                style={{ padding: '0.5rem 0.5rem 0.5rem 2.25rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', fontSize: '0.875rem' }}
              />
            </div>
            <button className={styles.secondaryBtn} style={{ padding: '0.5rem' }}>
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Course / Batch</th>
                <th>Upload Date</th>
                <th>Size</th>
                <th>Actions</th>
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
                      <span className={styles.fw500}>{file.title || file.margin}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ color: '#111827' }}>{file.course}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{file.batch}</div>
                  </td>
                  <td>{file.date}</td>
                  <td style={{ color: '#6b7280' }}>{file.size}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className={styles.iconBtn} title="Download"><Download size={18} /></button>
                      <button className={styles.iconBtn} title="More Options"><MoreVertical size={18} /></button>
                    </div>
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
