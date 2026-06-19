'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Edit2, Trash2, X, Save, UserPlus } from 'lucide-react';
import styles from '../super-admin.module.css';
import { useDatabase } from '../../../context/DatabaseContext';

export default function BranchesPage() {
  const { branches, addBranch, addAdmin, updateBranch, deleteBranch } = useDatabase();
  const [search, setSearch] = useState('');
  const [editingBranch, setEditingBranch] = useState<any>(null);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [isAddBranchModalOpen, setIsAddBranchModalOpen] = useState(false);
  const [newBranchName, setNewBranchName] = useState('');
  const [managerForm, setManagerForm] = useState({ name: '', email: '', username: '', password: '', branch: '' });

  const filteredBranches = branches.filter(b => b.name.toLowerCase().includes(search.toLowerCase()) || b.admin?.toLowerCase().includes(search.toLowerCase()));

  const handleSave = async () => {
    if (editingBranch) {
      await updateBranch(editingBranch.id, {
        name: editingBranch.name,
        admin: editingBranch.admin,
        status: editingBranch.status
      });
      setEditingBranch(null);
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
          <p className={styles.pageSubtitle}>Manage institutional branches and sub-admins.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => setIsManagerModalOpen(true)}
              className={styles.primaryBtn} 
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#111827' }}
            >
              <UserPlus size={16} /> Create Branch Manager
            </button>
            <button onClick={() => setIsAddBranchModalOpen(true)} className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Plus size={16} /> New Branch
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
              placeholder="Search branches or sub-admins..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Branch ID</th>
                <th>Branch Name</th>
                <th>Sub Admin</th>
                <th>Total Students</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBranches.map((b, i) => (
                <tr key={i} className={styles.tableRow}>
                  <td style={{ fontWeight: 500 }}>{b.id.split('-')[0] + '-' + b.id.slice(-4)}</td>
                  <td>{b.name}</td>
                  <td>{b.admin || 'Unassigned'}</td>
                  <td>{b.students}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${b.status === 'Active' ? styles.statusActive : styles.statusInactive}`}>
                      {b.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className={styles.actionBtn} aria-label="Edit" onClick={() => setEditingBranch(b)}><Edit2 size={16} /></button>
                      <button className={styles.actionBtn} aria-label="Delete" onClick={() => deleteBranch(b.id)}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingBranch && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`liquid-glass-strong ${styles.chartContainer}`}
            style={{ width: '100%', maxWidth: '400px', margin: '0 1rem', padding: '2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Edit Branch</h3>
              <button className={styles.actionBtn} onClick={() => setEditingBranch(null)}><X size={20} /></button>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch Name</label>
              <input type="text" className={styles.input} value={editingBranch.name} onChange={(e) => setEditingBranch({...editingBranch, name: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Sub Admin</label>
              <input type="text" className={styles.input} value={editingBranch.admin} onChange={(e) => setEditingBranch({...editingBranch, admin: e.target.value})} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select className={styles.input} value={editingBranch.status} onChange={(e) => setEditingBranch({...editingBranch, status: e.target.value})}>
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

      {/* Create Branch Manager Modal */}
      {isManagerModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '500px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden'
            }}
          >
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111827', fontWeight: 600 }}>Create Branch Manager</h3>
              <button onClick={() => setIsManagerModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(17,24,39,0.5)' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Manager Name</label>
                <input 
                  type="text" 
                  value={managerForm.name}
                  onChange={e => setManagerForm({...managerForm, name: e.target.value})}
                  placeholder="e.g. John Smith"
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Username (for login)</label>
                <input 
                  type="text" 
                  value={managerForm.username}
                  onChange={e => setManagerForm({...managerForm, username: e.target.value})}
                  placeholder="e.g. john.smith.admin"
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Email Address</label>
                <input 
                  type="email" 
                  value={managerForm.email}
                  onChange={e => setManagerForm({...managerForm, email: e.target.value})}
                  placeholder="e.g. john@infodesk.edu"
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Temporary Password</label>
                <input 
                  type="password" 
                  value={managerForm.password}
                  onChange={e => setManagerForm({...managerForm, password: e.target.value})}
                  placeholder="Create a strong password"
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} 
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Assign to Branch</label>
                <select 
                  value={managerForm.branch}
                  onChange={e => setManagerForm({...managerForm, branch: e.target.value})}
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', background: 'white' }}
                >
                  <option value="" disabled>Select a branch...</option>
                  {branches.map(b => (
                    <option key={b.id} value={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ padding: '1.5rem 2rem', background: 'rgba(17,24,39,0.02)', borderTop: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                onClick={() => setIsManagerModalOpen(false)}
                style={{ padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={async () => {
                  if (!managerForm.name || !managerForm.branch) return;
                  
                  await addAdmin({
                    name: managerForm.name,
                    email: managerForm.email,
                    username: managerForm.username,
                    password: managerForm.password,
                    role: 'subadmin',
                    branch: managerForm.branch
                  });

                  alert(`Created Sub Admin account for ${managerForm.name} (${managerForm.email}) mapped to ${managerForm.branch}`);
                  setIsManagerModalOpen(false);
                  setManagerForm({ name: '', email: '', username: '', password: '', branch: '' });
                }}
                className={styles.primaryBtn} 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#3b82f6', border: 'none', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', fontWeight: 500, cursor: 'pointer' }}
              >
                Create Account
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Create New Branch Modal */}
      {isAddBranchModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100
        }}>
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: 'white', borderRadius: '1.25rem', width: '100%', maxWidth: '400px',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflow: 'hidden'
            }}
          >
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111827', fontWeight: 600 }}>Create New Branch</h3>
              <button onClick={() => setIsAddBranchModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(17,24,39,0.5)' }}>
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Branch Name</label>
                <input 
                  type="text" 
                  value={newBranchName}
                  onChange={e => setNewBranchName(e.target.value)}
                  placeholder="e.g. Malad West"
                  style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} 
                />
              </div>
            </div>

            <div style={{ padding: '1.5rem 2rem', background: 'rgba(17,24,39,0.02)', borderTop: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button 
                onClick={() => setIsAddBranchModalOpen(false)}
                style={{ padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={async () => {
                  if (!newBranchName) return;
                  await addBranch({
                    name: newBranchName,
                    admin: null,
                    students: 0,
                    status: 'Active'
                  });
                  setIsAddBranchModalOpen(false);
                  setNewBranchName('');
                }}
                className={styles.primaryBtn} 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#3b82f6', border: 'none', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', fontWeight: 500, cursor: 'pointer' }}
              >
                Create Branch
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </motion.div>
  );
}
