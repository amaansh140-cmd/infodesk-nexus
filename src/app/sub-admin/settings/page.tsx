'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, Phone, Mail, Save } from 'lucide-react';
import styles from '../../super-admin/super-admin.module.css';

export default function BranchProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className={styles.pageHeader}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className={styles.pageTitle}>Branch Profile</h1>
            <p className={styles.pageSubtitle}>Manage contact information and identity for Shashtri Nagar.</p>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '0.75rem', border: 'none', background: '#111827', color: 'white', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>
            <Save size={16} /> Save Profile
          </button>
        </div>
      </div>

      <div className="liquid-glass" style={{ padding: '2rem', borderRadius: '1.25rem', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', paddingBottom: '2rem', borderBottom: '1px solid rgba(17,24,39,0.05)' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '1rem', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
              <Building size={40} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', margin: '0 0 0.5rem 0' }}>Branch Logo</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(17,24,39,0.5)', margin: '0 0 1rem 0' }}>Update the local logo displayed to students on the portal.</p>
              <button style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', border: '1px solid rgba(17,24,39,0.1)', background: 'white', fontWeight: 500, cursor: 'pointer', fontSize: '0.85rem' }}>
                Upload New Image
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Branch Name (Read-Only)</label>
              <input type="text" value="Shashtri Nagar" disabled style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', background: 'rgba(17,24,39,0.02)', color: 'rgba(17,24,39,0.5)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>Branch Code (Read-Only)</label>
              <input type="text" value="BR-001" disabled style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none', background: 'rgba(17,24,39,0.02)', color: 'rgba(17,24,39,0.5)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>
                <MapPin size={16} color="rgba(17,24,39,0.4)" /> Address Line
              </label>
              <input type="text" defaultValue="12/A, Shashtri Nagar Main Road, Mumbai" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>
                <Phone size={16} color="rgba(17,24,39,0.4)" /> Official Helpdesk Phone
              </label>
              <input type="text" defaultValue="+91 22 1234 5678" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 500, color: '#111827' }}>
                <Mail size={16} color="rgba(17,24,39,0.4)" /> Official Contact Email
              </label>
              <input type="email" defaultValue="admin.shashtri@infodesk.edu" style={{ padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(17,24,39,0.1)', outline: 'none' }} />
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
