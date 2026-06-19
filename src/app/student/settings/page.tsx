'use client';

import React from 'react';
import { User, Lock, Bell, Save } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function StudentSettings() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Profile & Preferences</h1>
          <p className={styles.pageSubtitle}>Manage your personal information and app settings</p>
        </div>
      </header>

      <div className={styles.grid2Cols}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}><User size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'text-bottom' }}/> Personal Details</h2>
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 600 }}>
                AP
              </div>
              <div>
                <button className={styles.secondaryBtn} style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>Change Photo</button>
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Student Name</label>
              <input type="text" defaultValue="Aarav Patel" disabled style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', color: '#6b7280' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Roll Number / ID</label>
              <input type="text" defaultValue="STU-001" disabled style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: '#f9fafb', color: '#6b7280' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Email Address</label>
              <input type="email" defaultValue="aarav@example.com" style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Phone Number</label>
              <input type="tel" defaultValue="+91 98765 43210" style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }} />
            </div>
            <button className={styles.actionBtn} style={{ marginTop: '0.5rem' }}>
              <Save size={16} /> Save Changes
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><Lock size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'text-bottom' }}/> Security</h2>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>Current Password</label>
                <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem', color: '#374151' }}>New Password</label>
                <input type="password" placeholder="Enter new password" style={{ width: '100%', padding: '0.625rem', borderRadius: '0.5rem', border: '1px solid #d1d5db', backgroundColor: 'white' }} />
              </div>
              <button className={styles.secondaryBtn} style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                Update Password
              </button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}><Bell size={18} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'text-bottom' }}/> Notification Settings</h2>
            </div>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#374151', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '1rem', height: '1rem', accentColor: '#3b82f6' }} />
                App alerts for new assignments
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#374151', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked style={{ width: '1rem', height: '1rem', accentColor: '#3b82f6' }} />
                Email me when attendance is marked
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#374151', cursor: 'pointer' }}>
                <input type="checkbox" style={{ width: '1rem', height: '1rem', accentColor: '#3b82f6' }} />
                SMS notifications for official notices
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
