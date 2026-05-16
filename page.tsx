'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs, doc, setDoc, getDoc, query, where, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses as predefinedCourses } from '@/data/courses';
import { CheckCircle2, Search, Users, BarChart, Download, CheckSquare, User, Calendar, QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './attendance.module.css';

interface Student {
  id: string;
  email: string;
  displayName: string;
  source?: 'online' | 'manual';
  enrolledCourses?: any[];
}

type AttendanceStatus = 'present' | 'absent' | 'late' | 'unmarked';

export default function AdminAttendancePage() {
  const [availableCourses, setAvailableCourses] = useState<{id: string, title: string}[]>(predefinedCourses.map(c => ({ id: c.id.toString(), title: c.title })));
  const [viewMode, setViewMode] = useState<'log' | 'student' | 'qr'>('log');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  
  // Roster View State
  const [students, setStudents] = useState<Student[]>([]);
  const [attendanceState, setAttendanceState] = useState<Record<string, AttendanceStatus>>({});
  const [rosterFilter, setRosterFilter] = useState<'all' | 'online' | 'manual'>('all');
  
  // Student View State
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [studentAttendanceHistory, setStudentAttendanceHistory] = useState<any[]>([]);
  
  // QR Session State
  const [activeSession, setActiveSession] = useState<any>(null);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  // Fetch all students and courses on mount
  useEffect(() => {
    const initData = async () => {
      try {
        const usersSnap = await getDocs(collection(db, 'users'));
        const studentsList: Student[] = [];
        const dynamicCourses = new Map();
        
        for (const userDoc of usersSnap.docs) {
          const userData = userDoc.data();
          if (userData.role !== 'student') continue;

          const enrolledSnap = await getDocs(collection(db, 'users', userDoc.id, 'enrolledCourses'));
          const enrolledCourses = enrolledSnap.docs.map(d => ({ id: d.id, ...d.data() }));
          
          enrolledCourses.forEach((c: any) => {
            if (c.courseId) {
              dynamicCourses.set(c.courseId.toString(), c.title || 'Unknown');
            }
          });

          studentsList.push({
            id: userDoc.id,
            email: userData.email || '',
            displayName: userData.displayName || 'Unnamed Student',
            source: enrolledCourses.some(c => (c as any).source === 'online') ? 'online' : 'manual',
            enrolledCourses
          });
        }

        const mergedCourses = [...predefinedCourses.map(c => ({ id: c.id.toString(), title: c.title }))];
        dynamicCourses.forEach((title, id) => {
          if (!mergedCourses.find(c => c.id === id)) {
            mergedCourses.push({ id, title });
          }
        });

        setAvailableCourses(mergedCourses);
        setAllStudents(studentsList);
        if (mergedCourses.length > 0) setSelectedCourse(mergedCourses[0].id);
      } catch (error) {
        console.error("Error initializing attendance data:", error);
      }
    };
    
    initData();
  }, []);

  // Class Roster Logic
  const handleFetchClass = async () => {
    if (!selectedCourse || !selectedDate) return;
    
    setLoading(true);
    setHasFetched(false);
    try {
      const classRoster = allStudents.filter(s => 
        s.enrolledCourses?.some(c => c.courseId.toString() === selectedCourse)
      );
      
      setStudents(classRoster);

      const recordId = `${selectedCourse}_${selectedDate}`;
      const attendanceSnap = await getDoc(doc(db, 'attendance', recordId));

      const newState: Record<string, AttendanceStatus> = {};
      const existingData = attendanceSnap.exists() ? attendanceSnap.data().records || {} : {};
      
      classRoster.forEach(student => {
        newState[student.id] = existingData[student.id] || 'unmarked';
      });

      setAttendanceState(newState);
      setHasUnsavedChanges(false);
      setHasFetched(true);
    } catch (error) {
      console.error("Error fetching class roster:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMark = (studentId: string, status: AttendanceStatus) => {
    setAttendanceState(prev => ({ ...prev, [studentId]: status }));
    setHasUnsavedChanges(true);
  };

  const handleSaveAttendance = async () => {
    if (!selectedCourse || !selectedDate) return;
    setSaving(true);
    try {
      const recordId = `${selectedCourse}_${selectedDate}`;
      const courseTitle = availableCourses.find(c => c.id === selectedCourse)?.title || 'Unknown Course';

      await setDoc(doc(db, 'attendance', recordId), {
        courseId: selectedCourse,
        courseTitle,
        date: selectedDate,
        updatedAt: new Date().toISOString(),
        records: attendanceState
      }, { merge: true });

      setHasUnsavedChanges(false);
      alert('Attendance saved successfully!');
    } catch (error) {
      alert("Failed to save attendance.");
    } finally {
      setSaving(false);
    }
  };

  // Student-Wise Logic
  const handleSelectStudent = async (student: Student) => {
    setSelectedStudent(student);
    setLoading(true);
    try {
      const q = query(collection(db, 'attendance'), orderBy('date', 'desc'));
      const querySnap = await getDocs(q);
      const history = querySnap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter((record: any) => record.records[student.id]);
      
      setStudentAttendanceHistory(history);
    } catch (err) {
      console.error("Error fetching student history:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkStudentAttendance = async (courseId: string, date: string, status: AttendanceStatus) => {
    if (!selectedStudent) return;
    setSaving(true);
    try {
      const recordId = `${courseId}_${date}`;
      const attendanceRef = doc(db, 'attendance', recordId);
      const recordSnap = await getDoc(attendanceRef);
      
      const currentRecords = recordSnap.exists() ? recordSnap.data().records || {} : {};
      currentRecords[selectedStudent.id] = status;

      await setDoc(attendanceRef, {
        courseId,
        date,
        records: currentRecords,
        updatedAt: new Date().toISOString()
      }, { merge: true });

      handleSelectStudent(selectedStudent); // Refresh history
      alert("Attendance updated.");
    } catch (err) {
      alert("Error updating attendance.");
    } finally {
      setSaving(false);
    }
  };

  const handleGenerateQR = async () => {
    if (!selectedCourse) {
      alert("Please select a course first.");
      return;
    }
    setLoading(true);
    try {
      const sessionId = `session_${selectedCourse}_${Math.floor(Date.now() / 3600000)}`; // Refresh every hour
      const sessionCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      const expiresAt = new Date(Date.now() + 3600000).toISOString(); // 1 hour from now

      const sessionData = {
        sessionId,
        courseId: selectedCourse,
        courseTitle: availableCourses.find(c => c.id === selectedCourse)?.title || 'Unknown',
        code: sessionCode,
        expiresAt,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'attendanceSessions', sessionId), sessionData);
      setActiveSession(sessionData);
    } catch (err) {
      console.error("Error generating QR:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredRoster = students.filter(s => 
    (rosterFilter === 'all' || s.source === rosterFilter) &&
    (s.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || s.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredStudentsForSearch = allStudents.filter(s => 
    s.displayName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Attendance Tracker</h1>
          <p className={styles.subtitle}>Manage attendance by course or individually by student.</p>
        </div>
        <div className={styles.viewToggle}>
          <button className={`${styles.toggleBtn} ${viewMode === 'log' ? styles.active : ''}`} onClick={() => setViewMode('log')}>By Course</button>
          <button className={`${styles.toggleBtn} ${viewMode === 'student' ? styles.active : ''}`} onClick={() => setViewMode('student')}>By Student</button>
          <button className={`${styles.toggleBtn} ${viewMode === 'qr' ? styles.active : ''}`} onClick={() => setViewMode('qr')}>QR Attendance</button>
        </div>
      </div>

      {viewMode === 'log' && (
        <>
          <div className={`liquid-glass ${styles.controlPanel}`}>
            <div className={styles.controlGroup}>
              <label>Course</label>
              <select className={styles.select} value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                {availableCourses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </div>
            <div className={styles.controlGroup}>
              <label>Date</label>
              <input type="date" className={styles.input} value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
            </div>
            <button className={styles.fetchBtn} onClick={handleFetchClass} disabled={loading}>{loading ? '...' : 'Fetch Roster'}</button>
          </div>

          {hasFetched && (
            <motion.div className={`liquid-glass ${styles.rosterContainer}`}>
              <div className={styles.rosterHeader}>
                <div className={styles.tabs}>
                  {['all', 'online', 'manual'].map(f => (
                    <button key={f} className={`${styles.tab} ${rosterFilter === f ? styles.activeTab : ''}`} onClick={() => setRosterFilter(f as any)}>{f.toUpperCase()}</button>
                  ))}
                </div>
                <div className={styles.searchBox}>
                  <Search size={14} />
                  <input placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>
              </div>
              <div className={styles.studentList}>
                {filteredRoster.map(s => (
                  <div key={s.id} className={styles.studentRow}>
                    <div>
                      <div className={styles.studentName}>{s.displayName} <span className={`${styles.sourceBadge} ${styles[s.source!]}`}>{s.source}</span></div>
                      <div className={styles.studentEmail}>{s.email}</div>
                    </div>
                    <div className={styles.attendanceControls}>
                      {['present', 'absent', 'late'].map(status => (
                        <button 
                          key={status} 
                          className={`${styles.controlBtn} ${attendanceState[s.id] === status ? styles[status] : ''}`}
                          onClick={() => handleMark(s.id, status as any)}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {hasUnsavedChanges && (
                <div className={styles.saveBar}>
                  <span>Unsaved changes</span>
                  <button className={styles.saveBtn} onClick={handleSaveAttendance} disabled={saving}>{saving ? 'Saving...' : 'Save Record'}</button>
                </div>
              )}
            </motion.div>
          )}
        </>
      )}

      {viewMode === 'student' && (
        <div className={styles.studentWiseGrid}>
          <div className={`liquid-glass ${styles.studentSidebar}`}>
            <div className={styles.searchBox} style={{ marginBottom: '1rem' }}>
              <Search size={16} />
              <input placeholder="Search student..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            <div className={styles.sidebarList}>
              {filteredStudentsForSearch.map(s => (
                <button 
                  key={s.id} 
                  className={`${styles.sidebarItem} ${selectedStudent?.id === s.id ? styles.activeSidebarItem : ''}`}
                  onClick={() => handleSelectStudent(s)}
                >
                  <User size={14} />
                  <span>{s.displayName}</span>
                </button>
              ))}
            </div>
          </div>
          <div className={`liquid-glass ${styles.studentMain}`}>
            {selectedStudent ? (
              <>
                <div className={styles.studentProfileHeader}>
                  <h2 className={styles.studentNameLarge}>{selectedStudent.displayName}</h2>
                  <p className={styles.studentEmailLarge}>{selectedStudent.email} • {selectedStudent.source?.toUpperCase()} ADMISSION</p>
                </div>
                <div className={styles.historySection}>
                  <h3>Attendance History</h3>
                  {loading ? 'Loading history...' : (
                    <div className={styles.historyList}>
                      {studentAttendanceHistory.map(h => (
                        <div key={h.id} className={styles.historyRow}>
                          <div className={styles.historyMeta}>
                            <Calendar size={14} /> {h.date} — {h.courseTitle}
                          </div>
                          <div className={styles.attendanceControls}>
                            {['present', 'absent', 'late'].map(status => (
                              <button 
                                key={status} 
                                className={`${styles.controlBtnSmall} ${h.records[selectedStudent.id] === status ? styles[status] : ''}`}
                                onClick={() => handleMarkStudentAttendance(h.courseId, h.date, status as any)}
                              >
                                {status.charAt(0).toUpperCase()}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                      {studentAttendanceHistory.length === 0 && <p className={styles.emptyText}>No attendance records found for this student.</p>}
                    </div>
                  )}
                </div>
                <div className={styles.quickMark}>
                  <h3>Log New Attendance</h3>
                  <div className={styles.quickMarkControls}>
                    <select id="quickCourse" className={styles.select}>
                      {selectedStudent.enrolledCourses?.map(c => <option key={c.courseId} value={c.courseId}>{c.title}</option>)}
                    </select>
                    <input type="date" id="quickDate" className={styles.input} defaultValue={new Date().toISOString().split('T')[0]} />
                    <button 
                      className={styles.fetchBtn}
                      onClick={() => {
                        const cid = (document.getElementById('quickCourse') as HTMLSelectElement).value;
                        const date = (document.getElementById('quickDate') as HTMLInputElement).value;
                        handleMarkStudentAttendance(cid, date, 'present');
                      }}
                    >
                      Mark Present
                    </button>
                  </div>
                </div>
              </>
            ) : <div className={styles.emptyState}>Select a student to view/mark their attendance.</div>}
          </div>
        </div>
      )}

      {viewMode === 'qr' && (
        <div className={`liquid-glass ${styles.qrContainer}`}>
          <div className={styles.controlPanel} style={{ background: 'transparent', padding: 0, marginBottom: '2rem' }}>
            <div className={styles.controlGroup}>
              <label>Course for Session</label>
              <select className={styles.select} value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)}>
                {availableCourses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </div>
            <button className={styles.fetchBtn} onClick={handleGenerateQR} disabled={loading}>
              <QrCode size={16} /> Generate Hourly QR
            </button>
          </div>

          <AnimatePresence>
            {activeSession ? (
              <motion.div 
                className={styles.qrCard}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <QRCodeSVG 
                  value={`${window.location.origin}/dashboard/attendance?code=${activeSession.code}`}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
                <div className={styles.qrMeta}>
                  <div className={styles.qrCodeValue}>{activeSession.code}</div>
                  <div className={styles.qrTimer}>Expires: {new Date(activeSession.expiresAt).toLocaleTimeString()}</div>
                </div>
                <div className={styles.qrInstructions}>
                  Students can scan this code or enter the 6-digit code manually in their dashboard to mark attendance for <b>{activeSession.courseTitle}</b>.
                </div>
              </motion.div>
            ) : (
              <div className={styles.emptyState}>
                <QrCode size={48} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                <p>Select a course and generate a QR code for the current batch.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
}
