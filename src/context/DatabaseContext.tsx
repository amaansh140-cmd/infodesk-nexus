'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Data Models
export interface Course {
  id: string;
  code: string;
  title: string;
  category: string;
  duration: string;
  status: 'Active' | 'Draft' | 'Archived';
  description?: string;
  selectedByBranches?: string[]; // IDs of branches offering this course
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  username: string;
  role: string;
  branch?: string | null;
}

export interface Branch {
  id: string;
  name: string;
  admin?: string | null;
  students: number;
  status: string;
}

export interface FacultyUser {
  id: string;
  name: string;
  email: string;
  username: string;
  password?: string;
  phone: string;
  department: string;
  status: 'Active' | 'Inactive';
  assignedCourses: string[];
  assignedBranches: string[];
}

export interface StaffAttendanceRecord {
  id: string;
  staffId: string;
  date: string;
  clockInTime: string | null;
  clockOutTime: string | null;
  clockInBranch?: string;
  clockOutBranch?: string;
  status: 'present' | 'absent' | 'late' | 'ongoing';
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  courseId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}

export interface StudentDailyAttendanceRecord {
  id: string;
  studentId: string;
  date: string;
  clockInTime: string | null;
  clockOutTime: string | null;
  clockInBranch?: string;
  clockOutBranch?: string;
  status: 'present' | 'absent' | 'late' | 'ongoing';
}

export interface LecturePlan {
  id: string;
  courseId: string;
  facultyId: string;
  topic: string;
  date: string;
  time: string;
  batch: string;
  learningObjectives: string;
  status: 'Pending' | 'Delivered' | 'Rescheduled';
}

export interface Student {
  id: string;
  rollNo: string;
  name: string;
  email: string;
  username: string;
  password?: string;
  batch: string;
  branch: string;
  status: 'Active' | 'Inactive';
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  type: string;
  author: string;
  date: string;
  targetBranches: string[];
  targetRoles: string[];
  pinned: boolean;
}

interface DatabaseContextType {
  courses: Course[];
  addCourse: (course: Course) => Promise<void>;
  updateCourse: (id: string, data: Partial<Course>) => void;
  
  faculties: FacultyUser[];
  addFaculty: (faculty: FacultyUser) => Promise<void>;

  admins: AdminUser[];
  addAdmin: (admin: any) => Promise<void>;

  branches: Branch[];
  addBranch: (branch: any) => Promise<void>;
  updateBranch: (id: string, branch: any) => Promise<void>;
  deleteBranch: (id: string) => Promise<void>;
  
  attendance: AttendanceRecord[];
  markAttendance: (record: AttendanceRecord) => Promise<void>;

  studentDailyAttendance: StudentDailyAttendanceRecord[];
  logStudentDailyAttendance: (record: Partial<StudentDailyAttendanceRecord>) => Promise<void>;

  staffAttendance: StaffAttendanceRecord[];
  logStaffAttendance: (record: Partial<StaffAttendanceRecord>) => Promise<void>;

  lecturePlans: LecturePlan[];
  addLecturePlan: (plan: Omit<LecturePlan, 'id' | 'status'>) => Promise<void>;
  updateLecturePlanStatus: (id: string, status: LecturePlan['status']) => void;

  students: Student[];
  addStudent: (student: Student) => Promise<void>;

  notices: Notice[];
  createNotice: (notice: Omit<Notice, 'id' | 'date'>) => Promise<void>;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export function DatabaseProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [faculties, setFaculties] = useState<FacultyUser[]>([]);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [branches, setBranches] = useState<Branch[]>([]);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [studentDailyAttendance, setStudentDailyAttendance] = useState<StudentDailyAttendanceRecord[]>([]);
  const [staffAttendance, setStaffAttendance] = useState<StaffAttendanceRecord[]>([]);
  const [lecturePlans, setLecturePlans] = useState<LecturePlan[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          coursesRes, facultiesRes, studentsRes, 
          attendanceRes, dailyRes, staffRes, 
          lectureRes, noticesRes, adminsRes, branchesRes
        ] = await Promise.all([
          fetch('/api/courses'), fetch('/api/faculties'), fetch('/api/students'),
          fetch('/api/attendance'), fetch('/api/student-daily-attendance'), fetch('/api/staff-attendance'),
          fetch('/api/lecture-plans'), fetch('/api/notices'), fetch('/api/admins'), fetch('/api/branches')
        ]);

        if (coursesRes.ok) setCourses(await coursesRes.json());
        if (facultiesRes.ok) setFaculties(await facultiesRes.json());
        if (studentsRes.ok) setStudents(await studentsRes.json());
        if (attendanceRes.ok) setAttendance(await attendanceRes.json());
        if (dailyRes.ok) setStudentDailyAttendance(await dailyRes.json());
        if (staffRes.ok) setStaffAttendance(await staffRes.json());
        if (lectureRes.ok) setLecturePlans(await lectureRes.json());
        if (noticesRes.ok) setNotices(await noticesRes.json());
        if (adminsRes.ok) setAdmins(await adminsRes.json());
        if (branchesRes.ok) setBranches(await branchesRes.json());

      } catch (err) {
        console.error('Failed to fetch data from database', err);
      } finally {
        setIsLoaded(true);
      }
    };
    fetchAll();
  }, []);

  const addCourse = async (course: Course) => {
    const res = await fetch('/api/courses', { method: 'POST', body: JSON.stringify(course) });
    if (res.ok) {
      const newCourse = await res.json();
      setCourses(prev => [...prev, newCourse]);
    } else {
      const data = await res.json();
      alert(`Failed to add course: ${data.error}`);
    }
  };

  const updateCourse = (id: string, data: Partial<Course>) => {
    // Requires a PUT/PATCH route (mocked for now in UI)
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...data } : c));
  };

  const addFaculty = async (faculty: FacultyUser) => {
    const res = await fetch('/api/faculties', { method: 'POST', body: JSON.stringify(faculty) });
    if (res.ok) {
      const newFaculty = await res.json();
      setFaculties(prev => [...prev, newFaculty]);
    } else {
      const data = await res.json();
      alert(`Failed to add faculty: ${data.error}`);
    }
  };

  const addAdmin = async (admin: any) => {
    const res = await fetch('/api/admins', { method: 'POST', body: JSON.stringify(admin) });
    if (res.ok) {
      const newAdmin = await res.json();
      setAdmins(prev => [...prev, newAdmin]);
    } else {
      const data = await res.json();
      alert(`Failed to add admin: ${data.error}`);
    }
  };

  const addBranch = async (branch: any) => {
    const res = await fetch('/api/branches', { method: 'POST', body: JSON.stringify(branch) });
    if (res.ok) {
      const newBranch = await res.json();
      setBranches(prev => [...prev, newBranch]);
    } else {
      const data = await res.json();
      alert(`Failed to add branch: ${data.error}`);
    }
  };

  const updateBranch = async (id: string, data: any) => {
    const res = await fetch(`/api/branches/${id}`, { method: 'PUT', body: JSON.stringify(data) });
    if (res.ok) {
      const updatedBranch = await res.json();
      setBranches(prev => prev.map(b => b.id === id ? updatedBranch : b));
    } else {
      const err = await res.json();
      alert(`Failed to update branch: ${err.error}`);
    }
  };

  const deleteBranch = async (id: string) => {
    if (!confirm('Are you sure you want to delete this branch?')) return;
    const res = await fetch(`/api/branches/${id}`, { method: 'DELETE' });
    if (res.ok) {
      setBranches(prev => prev.filter(b => b.id !== id));
    } else {
      const err = await res.json();
      alert(`Failed to delete branch: ${err.error}`);
    }
  };

  const markAttendance = async (record: AttendanceRecord) => {
    const res = await fetch('/api/attendance', { method: 'POST', body: JSON.stringify(record) });
    if (res.ok) {
      const newRecord = await res.json();
      setAttendance(prev => {
        const existingIdx = prev.findIndex(r => r.studentId === record.studentId && r.courseId === record.courseId && r.date === record.date);
        if (existingIdx >= 0) {
          const newRecords = [...prev];
          newRecords[existingIdx] = newRecord;
          return newRecords;
        }
        return [...prev, newRecord];
      });
    }
  };

  const logStudentDailyAttendance = async (record: Partial<StudentDailyAttendanceRecord>) => {
    if (!record.studentId || !record.date) return;
    const existing = studentDailyAttendance.find(r => r.studentId === record.studentId && r.date === record.date);
    
    const payload = { ...record, id: existing?.id };
    const res = await fetch('/api/student-daily-attendance', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      const newRecord = await res.json();
      setStudentDailyAttendance(prev => {
        if (existing) {
          return prev.map(r => r.id === existing.id ? newRecord : r);
        }
        return [...prev, newRecord];
      });
    }
  };

  const logStaffAttendance = async (record: Partial<StaffAttendanceRecord>) => {
    if (!record.staffId || !record.date) return;
    
    let existing: StaffAttendanceRecord | undefined;
    if (record.id) {
       existing = staffAttendance.find(r => r.id === record.id);
    } else if (record.clockOutTime) {
       existing = staffAttendance.find(r => r.staffId === record.staffId && r.date === record.date && !r.clockOutTime);
    }
    
    const payload = { ...record, id: existing?.id };
    const res = await fetch('/api/staff-attendance', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      const newRecord = await res.json();
      setStaffAttendance(prev => {
        if (existing) {
          return prev.map(r => r.id === existing.id ? newRecord : r);
        }
        return [...prev, newRecord];
      });
    }
  };

  const addLecturePlan = async (plan: Omit<LecturePlan, 'id' | 'status'>) => {
    const payload = { ...plan, status: 'Pending' };
    const res = await fetch('/api/lecture-plans', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      const newPlan = await res.json();
      setLecturePlans(prev => [...prev, newPlan]);
    }
  };

  const updateLecturePlanStatus = (id: string, status: LecturePlan['status']) => {
    // Mocked locally for now, would need PUT
    setLecturePlans(prev => prev.map(p => p.id === id ? { ...p, status } : p));
  };

  const addStudent = async (student: Student) => {
    const res = await fetch('/api/students', { method: 'POST', body: JSON.stringify(student) });
    if (res.ok) {
      const newStudent = await res.json();
      setStudents(prev => [...prev, newStudent]);
    } else {
      const data = await res.json();
      alert(`Failed to add student: ${data.error}`);
    }
  };

  const createNotice = async (notice: Omit<Notice, 'id' | 'date'>) => {
    const payload = { ...notice, date: new Date().toISOString().split('T')[0] };
    const res = await fetch('/api/notices', { method: 'POST', body: JSON.stringify(payload) });
    if (res.ok) {
      const newNotice = await res.json();
      setNotices(prev => [newNotice, ...prev]);
    }
  };

  if (!isLoaded) return null; // Avoid hydration mismatch

  return (
    <DatabaseContext.Provider value={{
      courses, addCourse, updateCourse,
      faculties, addFaculty,
      admins, addAdmin,
      branches, addBranch, updateBranch, deleteBranch,
      attendance, markAttendance,
      studentDailyAttendance, logStudentDailyAttendance,
      staffAttendance, logStaffAttendance,
      lecturePlans, addLecturePlan, updateLecturePlanStatus,
      students, addStudent,
      notices, createNotice
    }}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
}
