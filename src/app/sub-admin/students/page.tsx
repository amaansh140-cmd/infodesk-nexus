'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Plus, MoreVertical, 
  UserPlus, Mail, Phone, BookOpen, Layers, Download, Upload, X, Save
} from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';
import { useAuth } from '../../../context/AuthContext';
import { useDatabase } from '../../../context/DatabaseContext';

export default function StudentManagementPage() {
  const { user } = useAuth();
  const { students, addStudent } = useDatabase();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: '', email: '', username: '', password: '', rollNo: '', batch: 'General', status: 'Active' as const
  });

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.rollNo) {
      alert("Name and Roll No are required");
      return;
    }
    await addStudent({
      ...newStudent,
      id: `STU-${Date.now()}`,
      branch: user?.branch || 'Unknown'
    });
    setShowAddModal(false);
    setNewStudent({ name: '', email: '', username: '', password: '', rollNo: '', batch: 'General', status: 'Active' });
  };

  // Filter Data
  const branchStudents = user?.role === 'subadmin' ? students.filter(s => s.branch === user.branch) : students;
  
  const filteredData = branchStudents.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'All' || (record as any).course === filterCourse;
    const matchesStatus = filterStatus === 'All' || record.status === filterStatus;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#10b981' }}>Active</span>;
      case 'Inactive': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#6b7280' }}>Inactive</span>;
      case 'Suspended': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#ef4444' }}>Suspended</span>;
      default: return null;
    }
  };

  const downloadCSVTemplate = () => {
    const headers = "RollNo,Name,Email,Username,Password,Batch,Branch\n";
    const example = `1042,Aarav Patel,aarav@infodesk.edu,aaravp,Pass123,Batch A,${user?.branch || 'Branch Name'}\n`;
    const blob = new Blob([headers + example], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'Students_Template.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;

      const lines = text.split('\n');
      if (lines.length <= 1) return;

      let count = 0;
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const [rollNo, name, email, username, password, batch, branch] = line.split(',');
        
        if (rollNo && name) {
          addStudent({
            id: `STU-${Date.now()}-${count}`,
            rollNo: rollNo.trim(),
            name: name.replace(/^"|"$/g, '').trim(),
            email: email ? email.trim() : '',
            username: username ? username.trim() : `${name.split(' ')[0].toLowerCase()}${Math.floor(Math.random() * 1000)}`,
            password: password ? password.trim() : 'student123',
            batch: batch ? batch.trim() : 'General',
            branch: branch ? branch.trim() : (user?.branch || 'Unknown'),
            status: 'Active'
          });
          count++;
        }
      }
      
      if (fileInputRef.current) fileInputRef.current.value = '';
      alert(`${count} students uploaded successfully!`);
    };
    reader.readAsText(file);
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
            <h1 className={styles.pageTitle}>Student Management</h1>
            <p className={styles.pageSubtitle}>Manage student profiles, batches, and records for the {user?.branch || 'your'} Branch.</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={downloadCSVTemplate} className={styles.secondaryBtn}>
              <Download size={16} /> CSV Template
            </button>
            <input 
              type="file" 
              accept=".csv" 
              style={{ display: 'none' }} 
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <button onClick={() => fileInputRef.current?.click()} className={styles.secondaryBtn}>
              <Upload size={16} /> Upload CSV
            </button>
            <button onClick={() => setShowAddModal(true)} className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <UserPlus size={16} /> Add New Student
            </button>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        
        {/* Filters Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '250px' }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input 
              type="text" 
              placeholder="Search by student name or Roll ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem' }}>
              <BookOpen size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterCourse}
                onChange={(e) => setFilterCourse(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Courses</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem' }}>
              <Filter size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Student Info</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Contact Details</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Branch</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Batch</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((record, index) => (
                <tr key={record.id} style={{ borderBottom: index === filteredData.length - 1 ? 'none' : '1px solid rgba(17,24,39,0.03)', transition: 'background 0.2s', cursor: 'pointer' }} className="hover-scale">
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ fontWeight: 600, color: '#111827' }}>{record.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'rgba(17,24,39,0.5)' }}>{record.id}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(17,24,39,0.7)' }}>
                        <Mail size={14} /> {record.email}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'rgba(17,24,39,0.7)' }}>
                        <Phone size={14} /> +91 0000000000
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 500 }}>{record.branch}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Layers size={14} color="rgba(17,24,39,0.4)" />
                      <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>{record.batch}</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    {getStatusBadge(record.status)}
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(17,24,39,0.4)' }}>
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: '3rem', textAlign: 'center', color: 'rgba(17,24,39,0.4)' }}>
                    No student records found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="liquid-glass-strong" style={{ width: '90%', maxWidth: '500px', padding: '2rem', borderRadius: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Register New Student</h2>
              <button onClick={() => setShowAddModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Roll No</label>
                <input type="text" value={newStudent.rollNo} onChange={e => setNewStudent({...newStudent, rollNo: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="STU-1001" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                <input type="text" value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="Aarav Patel" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                <input type="email" value={newStudent.email} onChange={e => setNewStudent({...newStudent, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="aarav@infodesk.edu" />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Username</label>
                  <input type="text" value={newStudent.username} onChange={e => setNewStudent({...newStudent, username: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="aarav.p" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                  <input type="password" value={newStudent.password} onChange={e => setNewStudent({...newStudent, password: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="••••••••" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Batch</label>
                <select value={newStudent.batch} onChange={e => setNewStudent({...newStudent, batch: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem', background: 'white' }}>
                  <option value="General">General</option>
                  <option value="Batch A">Batch A</option>
                  <option value="Batch B">Batch B</option>
                  <option value="Weekend Batch">Weekend Batch</option>
                </select>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button 
                  onClick={() => setShowAddModal(false)}
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 600, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAddStudent}
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', border: 'none', background: '#111827', color: 'white', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                >
                  <Save size={18} /> Save Student
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
