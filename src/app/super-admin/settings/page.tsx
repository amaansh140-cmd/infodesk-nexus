'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Save, Shield, Bell, Calendar } from 'lucide-react';
import styles from '../super-admin.module.css';

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p className={styles.pageSubtitle}>System configuration, access control, and audit logs.</p>
          <button className={styles.primaryBtn} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Institutional Policy Settings */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Calendar size={20} className="theme-text-muted" />
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Academic Calendar Management</h3>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Institution-wide Academic Year Start</label>
            <input type="date" className={styles.input} defaultValue="2026-08-01" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Global Exam Schedule / Mid-terms</label>
            <input type="date" className={styles.input} defaultValue="2026-10-15" />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} style={{ color: 'rgba(17,24,39,0.5)', fontSize: '0.75rem' }}>Note: Branches can customize these dates locally up to ±7 days.</label>
          </div>
        </div>

        {/* Access Control Settings */}
        <div className={`liquid-glass-strong ${styles.chartContainer}`} style={{ minHeight: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <Shield size={20} className="theme-text-muted" />
            <h3 className={styles.sectionTitle} style={{ margin: 0 }}>Custom Roles & Permissions</h3>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Create Custom Role</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="text" className={styles.input} placeholder="e.g. Regional Head" />
              <button className={styles.primaryBtn} style={{ whiteSpace: 'nowrap' }}>Add Role</button>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Existing Roles Matrix</label>
            <div style={{ border: '1px solid rgba(17,24,39,0.1)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <table className={styles.table} style={{ fontSize: '0.75rem' }}>
                <thead>
                  <tr>
                    <th>Role Name</th>
                    <th>Cross-Branch Access</th>
                    <th>Edit Syllabus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Regional Head</td>
                    <td><input type="checkbox" defaultChecked /></td>
                    <td><input type="checkbox" /></td>
                  </tr>
                  <tr>
                    <td>Senior Faculty</td>
                    <td><input type="checkbox" /></td>
                    <td><input type="checkbox" defaultChecked /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Logs */}
      <h2 className={styles.sectionTitle}>Recent Audit Logs</h2>
      <div className={`liquid-glass-strong ${styles.tableCard}`}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>User / Role</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td>2026-06-14 10:45 AM</td>
              <td><span className={styles.statusBadge} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>LOGIN</span></td>
              <td>Jane Doe (Sub Admin)</td>
              <td>Logged into Downtown Campus portal</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>2026-06-14 09:30 AM</td>
              <td><span className={styles.statusBadge} style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>UPDATE</span></td>
              <td>System</td>
              <td>Late submission policy updated globally</td>
            </tr>
            <tr className={styles.tableRow}>
              <td>2026-06-13 04:15 PM</td>
              <td><span className={styles.statusBadge} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>CREATE</span></td>
              <td>Super Admin</td>
              <td>Created new user USR-105 (Evan Wright)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
