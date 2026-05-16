'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses } from '@/data/courses';
import { Search, UserCircle, UploadCloud, FileDown, X, Trash2, AlertCircle, CheckSquare, Square } from 'lucide-react';
import Link from 'next/link';
import styles from './students.module.css';

interface UserData {
  id: string;
  uid: string;
  email: string;
  displayName: string;
  role: string;
  phone?: string;
  courses?: any[];
  photoURL?: string;
}

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);
  const [filterTab, setFilterTab] = useState<'all' | 'online' | 'manual'>('all');
  
  // Upload State
  const [showUpload, setShowUpload] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadResults, setUploadResults] = useState<{ identifier: string; status: 'success' | 'error'; message: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const fetchedUsers: any[] = [];
      for (const docSnap of querySnapshot.docs) {
        const userData = docSnap.data();
        if (userData.role !== 'student') continue;

        const coursesSnap = await getDocs(collection(db, 'users', docSnap.id, 'enrolledCourses'));
        const enrolledCourses = coursesSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        
        // Determine source from enrolled courses (if any is online, mark as online)
        const source = enrolledCourses.some(c => (c as any).source === 'online') ? 'online' : 'manual';

        fetchedUsers.push({ 
            id: docSnap.id, 
            ...userData, 
            courses: enrolledCourses,
            source
        });
      }
      setStudents(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm("Are you sure you want to delete this student profile? This action cannot be undone.")) return;
    
    try {
      await deleteDoc(doc(db, 'users', userId));
      setStudents(students.filter(student => student.id !== userId));
      setSelectedIds(selectedIds.filter(id => id !== userId));
    } catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student. Please check your permissions.");
    }
  };

  const handleBulkDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${selectedIds.length} selected students? This cannot be undone.`)) return;
    
    setIsBulkDeleting(true);
    let successCount = 0;
    let failCount = 0;

    for (const id of selectedIds) {
      try {
        await deleteDoc(doc(db, 'users', id));
        successCount++;
      } catch (err) {
        console.error(`Failed to delete ${id}:`, err);
        failCount++;
      }
    }

    if (failCount > 0) {
      alert(`Deleted ${successCount} students. Failed to delete ${failCount} students due to permissions.`);
    }

    setSelectedIds([]);
    setIsBulkDeleting(false);
    fetchStudents();
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredStudents.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredStudents.map(s => s.id));
    }
  };

  const toggleSelectUser = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(i => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const downloadTemplate = () => {
    const csvContent = "data:text/csv;charset=utf-8,Name,Number,Email,Course\nJohn Doe,9876543210,john@example.com,Data Science";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const linkName = "infodesk_students_template.csv";
    link.setAttribute("download", linkName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = (student.displayName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (student.email || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterTab === 'all' || (student as any).source === filterTab;
    return matchesSearch && matchesFilter;
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setUploadResults([]);

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const dataRows = lines.slice(1);
      const totalRows = dataRows.length;
      let completed = 0;
      const results: { identifier: string; status: 'success' | 'error'; message: string }[] = [];

      for (const row of dataRows) {
        try {
          const columns = row.split(',').map(col => col.trim().replace(/^"|"$/g, ''));
          if (columns.length < 4) {
            results.push({ identifier: 'Unknown', status: 'error', message: 'Invalid row format.' });
            continue;
          }
          const [fullName, number, email, courseIdentifier] = columns;
          
          let courseId = '';
          let courseTitle = '';
          
          const targetCourse = predefinedCourses.find(c => c.id.toString() === courseIdentifier || c.title.toLowerCase() === courseIdentifier.toLowerCase());
          
          if (targetCourse) {
            courseId = targetCourse.id.toString();
            courseTitle = targetCourse.title;
          } else {
            courseId = `custom_${courseIdentifier.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
            courseTitle = courseIdentifier;
          }

          // 1. Create Auth account and User doc via API
          const createRes = await fetch('/api/admin/create-student', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: email.toLowerCase(),
              phone: number,
              displayName: fullName
            })
          });

          const createData = await createRes.json();
          if (!createRes.ok) throw new Error(createData.error || 'Failed to create account');

          const uid = createData.uid;

          // 2. Enroll in course
          const courseDocRef = doc(db, 'users', uid, 'enrolledCourses', courseId);
          await setDoc(courseDocRef, { 
            courseId: courseId, 
            title: courseTitle, 
            enrollmentDate: new Date().toISOString(), 
            status: 'active', 
            source: 'manual' 
          });

          results.push({ identifier: fullName, status: 'success', message: `Enrolled in ${courseTitle}` });
        } catch (error: any) {
          results.push({ identifier: 'Row Error', status: 'error', message: error.message });
        } finally {
          completed++;
          setProgress(Math.round((completed / totalRows) * 100));
          setUploadResults([...results]);
        }
      }
      setUploading(false);
      fetchStudents();
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
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
          <h1 className={styles.title}>Students & Accounts</h1>
          <p className={styles.subtitle}>Manage admissions, view profiles, and track student enrollments.</p>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.searchIcon} />
            <input 
              type="text" 
              placeholder="Search students..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            className={styles.uploadBtn}
            onClick={() => setShowUpload(!showUpload)}
          >
            {showUpload ? <X size={16} /> : <UploadCloud size={16} />}
            {showUpload ? 'Close Upload' : 'Bulk Upload'}
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${filterTab === 'all' ? styles.activeTab : ''}`}
          onClick={() => setFilterTab('all')}
        >
          All Students
        </button>
        <button 
          className={`${styles.tab} ${filterTab === 'online' ? styles.activeTab : ''}`}
          onClick={() => setFilterTab('online')}
        >
          Online Admissions
        </button>
        <button 
          className={`${styles.tab} ${filterTab === 'manual' ? styles.activeTab : ''}`}
          onClick={() => setFilterTab('manual')}
        >
          Manual Admissions
        </button>
      </div>

      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden' }}
          >
            {!uploading && progress === 0 ? (
              <div className={styles.uploadZone}>
                <UploadCloud size={48} color="#6366f1" />
                <button className={styles.uploadBtn} onClick={downloadTemplate}>
                  <FileDown size={16} /> Download CSV Template
                </button>
                <input type="file" accept=".csv" id="csv-upload" ref={fileInputRef} onChange={handleFileUpload} style={{display:'none'}} />
                <label htmlFor="csv-upload" className={styles.uploadLabel}>Select CSV File</label>
              </div>
            ) : (
              <div className={`liquid-glass ${styles.progressContainer}`}>
                <div className={styles.progressHeader}>
                  <span>Bulk Uploading...</span>
                  <span>{progress}%</span>
                </div>
                <div className={styles.progressBarBg}>
                  <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
                </div>
                <div className={styles.resultsList}>
                  {uploadResults.map((res, i) => (
                    <div key={i} className={res.status === 'success' ? styles.resultSuccess : styles.resultError}>
                      {res.identifier}: {res.message}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bulk Actions Bar */}
      <AnimatePresence>
        {selectedIds.length > 0 && (
          <motion.div 
            className={styles.bulkActions}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span className={styles.bulkInfo}>{selectedIds.length} students selected</span>
            <button 
              className={styles.bulkDeleteBtn}
              onClick={handleBulkDelete}
              disabled={isBulkDeleting}
            >
              {isBulkDeleting ? 'Deleting...' : <><Trash2 size={16} /> Delete Selected</>}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`liquid-glass ${styles.tableContainer}`}>
        {loading ? (
          <div className={styles.loader}>Loading students...</div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.checkboxCell}>
                  <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    checked={selectedIds.length === filteredStudents.length && filteredStudents.length > 0}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Source</th>
                <th>Courses</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((user) => (
                <tr key={user.id}>
                  <td className={styles.checkboxCell}>
                    <input 
                      type="checkbox" 
                      className={styles.checkbox}
                      checked={selectedIds.includes(user.id)}
                      onChange={() => toggleSelectUser(user.id)}
                    />
                  </td>
                  <td><span className={styles.idBadge}>INF-{user.id.substring(0, 4).toUpperCase()}</span></td>
                  <td style={{ fontWeight: 500 }}>{user.displayName || 'Unnamed Student'}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`${styles.sourceBadge} ${user.source === 'online' ? styles.online : styles.manual}`}>
                      {user.source}
                    </span>
                  </td>
                  <td>{user.courses?.length || 0} enrolled</td>
                  <td>
                    <div className={styles.actionCell}>
                      <Link href={`/admin/students/${user.id}`} className={styles.viewBtn}><UserCircle size={16} /></Link>
                      <button className={styles.deleteBtn} onClick={() => handleDeleteUser(user.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '2rem' }}>
                    <AlertCircle size={32} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </motion.div>
  );
}
