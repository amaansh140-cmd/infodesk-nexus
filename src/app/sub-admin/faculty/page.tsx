'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Plus, MoreVertical, 
  UserPlus, Mail, Phone, BookOpen, Shield, X, Save
} from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import { useDatabase } from '../../../context/DatabaseContext';
import styles from '../../super-admin/super-admin.module.css';

export default function FacultyManagementPage() {
  const { user } = useAuth();
  const { faculties, addFaculty } = useDatabase();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);
  
  const [newFaculty, setNewFaculty] = useState({
    name: '', email: '', username: '', password: '', phone: '', department: 'Computer Science', status: 'Active' as const
  });

  // Filter Data
  const filteredData = faculties.filter(record => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDepartment === 'All' || record.department === filterDepartment;
    const matchesStatus = filterStatus === 'All' || record.status === filterStatus;
    return matchesSearch && matchesDept && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#10b981' }}>Active</span>;
      case 'Inactive': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#ef4444' }}>Inactive</span>;
      case 'On Leave': return <span style={{ padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600, color: '#f59e0b' }}>On Leave</span>;
      default: return null;
    }
  };

  const handleSaveFaculty = () => {
    if (!newFaculty.name || !newFaculty.email) return;
    
    addFaculty({
      id: `FAC-${Date.now().toString().slice(-4)}`,
      name: newFaculty.name,
      email: newFaculty.email,
      username: newFaculty.username,
      password: newFaculty.password,
      phone: newFaculty.phone || '+91 00000 00000',
      department: newFaculty.department,
      status: newFaculty.status,
      assignedCourses: [],
      assignedBranches: user?.branch ? [user.branch] : []
    });
    
    setShowAddModal(false);
    setNewFaculty({ name: '', email: '', username: '', password: '', phone: '', department: 'Computer Science', status: 'Active' });
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
            <h1 className={styles.pageTitle}>Faculty Management</h1>
            <p className={styles.pageSubtitle}>Manage faculty accounts and assignments for the {user?.branch || 'your'} Branch.</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: 'none', background: '#111827', color: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}
          >
            <UserPlus size={16} /> Add New Faculty
          </button>
        </div>
      </div>

      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="liquid-glass-strong" style={{ width: '90%', maxWidth: '500px', padding: '2rem', borderRadius: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Register New Faculty</h2>
              <button onClick={() => setShowAddModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                <input type="text" value={newFaculty.name} onChange={e => setNewFaculty({...newFaculty, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="Dr. John Doe" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Username</label>
                <input type="text" value={newFaculty.username} onChange={e => setNewFaculty({...newFaculty, username: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="john.doe" />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                  <input type="email" value={newFaculty.email} onChange={e => setNewFaculty({...newFaculty, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="john@nexus.edu" />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                  <input type="password" value={newFaculty.password} onChange={e => setNewFaculty({...newFaculty, password: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="Temporary password" />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Phone Number</label>
                  <input type="text" value={newFaculty.phone} onChange={e => setNewFaculty({...newFaculty, phone: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem' }} placeholder="+91..." />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>Department</label>
                  <select value={newFaculty.department} onChange={e => setNewFaculty({...newFaculty, department: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', fontSize: '0.9rem', background: 'white' }}>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                  </select>
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <button 
                  onClick={handleSaveFaculty}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#3b82f6', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', cursor: 'pointer', fontWeight: 500 }}
                >
                  <Save size={16} /> Register Faculty
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Table Area */}
      <div className="liquid-glass" style={{ borderRadius: '1.25rem', overflow: 'hidden' }}>
        
        {/* Filters Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(17,24,39,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem', flex: 1, minWidth: '250px' }}>
            <Search size={18} color="rgba(17,24,39,0.4)" />
            <input 
              type="text" 
              placeholder="Search by name or Faculty ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem' }}>
              <BookOpen size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Departments</option>
                <option value="Physics">Physics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="English">English</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(17,24,39,0.03)', padding: '0.5rem 1rem', borderRadius: '0.75rem' }}>
              <Shield size={16} color="rgba(17,24,39,0.5)" />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.9rem', color: '#111827', fontWeight: 500, cursor: 'pointer' }}
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ width: '100%', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(17,24,39,0.05)', color: 'rgba(17,24,39,0.5)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Faculty Info</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Contact Details</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Department</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Courses Assigned</th>
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
                        <Phone size={14} /> {record.phone}
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 500 }}>{record.department}</span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>{record.assignedCourses.length}</span>
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
                    No faculty records found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </motion.div>
  );
}
