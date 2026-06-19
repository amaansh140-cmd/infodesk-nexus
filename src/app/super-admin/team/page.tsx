'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, UserPlus, Filter, Upload, Edit2, Trash2, X, Save } from 'lucide-react';
import styles from '../super-admin.module.css';
import { useDatabase } from '../../../context/DatabaseContext';

export default function TeamPage() {
  const { faculties, students, admins, addFaculty, addStudent, addAdmin } = useDatabase();
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', username: '', password: '', role: 'Student', branch: 'Global', status: 'Active' });

  const unifiedUsers = [
    ...admins.map(a => ({ id: a.id, name: a.name, role: a.role === 'superadmin' ? 'Super Admin' : 'Sub Admin', branch: a.branch || 'Global', status: 'Active' })),
    ...faculties.map(f => ({ id: f.id, name: f.name, role: 'Faculty', branch: f.department || 'Global', status: f.status })),
    ...students.map(s => ({ id: s.id, name: s.name, role: 'Student', branch: s.branch, status: s.status }))
  ];

  const filteredUsers = unifiedUsers.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    // Requires update API
    setEditingUser(null);
  };

  const handleAddUser = async () => {
    if (!newUser.name) return;
    if (newUser.role === 'Admin') {
      await addAdmin({
        name: newUser.name,
        email: `${newUser.name.split(' ').join('.').toLowerCase()}@infodesk.edu`,
        username: newUser.username,
        password: newUser.password,
        role: 'subadmin',
        branch: newUser.branch
      });
    } else if (newUser.role === 'Faculty') {
      await addFaculty({
        id: '', name: newUser.name, email: `${newUser.name.split(' ').join('.').toLowerCase()}@infodesk.edu`,
        username: newUser.username, password: newUser.password,
        phone: '0000000000', department: newUser.branch, status: newUser.status as any,
        assignedCourses: [], assignedBranches: [newUser.branch]
      });
    } else if (newUser.role === 'Student') {
      await addStudent({
        id: '', rollNo: `STU-${Date.now().toString().slice(-4)}`, name: newUser.name,
        email: `${newUser.name.split(' ').join('.').toLowerCase()}@student.infodesk.edu`,
        username: newUser.username, password: newUser.password,
        batch: 'Batch 2024', branch: newUser.branch, status: newUser.status as any
      });
    }
    setIsAddModalOpen(false);
    setNewUser({ name: '', username: '', password: '', role: 'Student', branch: 'Global', status: 'Active' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className={styles.pageSubtitle}>Global directory for students, faculty, and administrators.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className={`liquid-glass ${styles.actionBtn}`} style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#111827' }}>
              <Filter size={16} /> Filter
            </button>
            <button className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#3b82f6' }}>
              <Upload size={16} /> Bulk CSV Upload
            </button>
            <button 
              className={styles.primaryBtn} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              onClick={() => setIsAddModalOpen(true)}
            >
              <UserPlus size={16} /> Add Team Member
            </button>
          </div>
        </div>
      </div>

      <div className={`liquid-glass-strong ${styles.tableCard}`}>
        <div className={styles.tableHeaderRow}>
          <div className={styles.tableSearch}>
            <Search size={16} style={{ color: 'rgba(17,24,39,0.4)' }} />
            <input 
              type="text" 
              placeholder="Search across all users..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div style={{ fontSize: '0.875rem', color: 'rgba(17,24,39,0.5)', display: 'flex', gap: '1rem' }}>
            <span style={{ cursor: 'pointer' }}>Select All</span>
            <span style={{ cursor: 'pointer', color: '#ef4444' }}>Deactivate Selected</span>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u, i) => (
                <tr key={i} className={styles.tableRow}>
                  <td><input type="checkbox" /></td>
                  <td style={{ fontWeight: 500 }}>{u.id.split('-')[0] + '-' + u.id.slice(-4)}</td>
                  <td>{u.name}</td>
                  <td>{u.role}</td>
                  <td>{u.branch}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${u.status === 'Active' ? styles.statusActive : styles.statusInactive}`}>
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className={styles.actionBtn} aria-label="Edit" onClick={() => setEditingUser(u)}><Edit2 size={16} /></button>
                      <button className={styles.actionBtn} aria-label="Delete"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`liquid-glass-strong ${styles.chartContainer}`}
            style={{ width: '100%', maxWidth: '400px', margin: '0 1rem', padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Edit Team Member</h3>
              <button className={styles.actionBtn} onClick={() => setEditingUser(null)}><X size={20} /></button>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} value={editingUser.name} onChange={(e) => setEditingUser({...editingUser, name: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Role</label>
              <select className={styles.input} value={editingUser.role} onChange={(e) => setEditingUser({...editingUser, role: e.target.value})}>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch</label>
              <select className={styles.input} value={editingUser.branch} onChange={(e) => setEditingUser({...editingUser, branch: e.target.value})}>
                <option value="Global">Global</option>
                <option value="Shashtri Nagar">Shashtri Nagar</option>
                <option value="Jawahar Nagar">Jawahar Nagar</option>
                <option value="Jogeshwari">Jogeshwari</option>
                <option value="Behram Baug">Behram Baug</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select className={styles.input} value={editingUser.status} onChange={(e) => setEditingUser({...editingUser, status: e.target.value})}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            
            <button className={styles.primaryBtn} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }} onClick={handleSave}>
              <Save size={16} /> Save Changes
            </button>
          </motion.div>
        </div>
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`liquid-glass-strong ${styles.chartContainer}`}
            style={{ width: '100%', maxWidth: '400px', margin: '0 1rem', padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Add New Team Member</h3>
              <button className={styles.actionBtn} onClick={() => setIsAddModalOpen(false)}><X size={20} /></button>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} placeholder="e.g. John Doe" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <input type="text" className={styles.input} placeholder="e.g. john.doe" value={newUser.username} onChange={(e) => setNewUser({...newUser, username: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <input type="password" className={styles.input} placeholder="Enter temporary password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Role</label>
              <select className={styles.input} value={newUser.role} onChange={(e) => setNewUser({...newUser, role: e.target.value})}>
                <option value="Admin">Admin</option>
                <option value="Faculty">Faculty</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch</label>
              <select className={styles.input} value={newUser.branch} onChange={(e) => setNewUser({...newUser, branch: e.target.value})}>
                <option value="Global">Global</option>
                <option value="Shashtri Nagar">Shashtri Nagar</option>
                <option value="Jawahar Nagar">Jawahar Nagar</option>
                <option value="Jogeshwari">Jogeshwari</option>
                <option value="Behram Baug">Behram Baug</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select className={styles.input} value={newUser.status} onChange={(e) => setNewUser({...newUser, status: e.target.value})}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            
            <button className={styles.primaryBtn} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', background: '#3b82f6' }} onClick={handleAddUser}>
              <UserPlus size={16} /> Add Member
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
