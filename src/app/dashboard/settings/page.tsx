'use client';

import { useState, useEffect } from 'react';
import { 
  Settings, User, Mail, Save, CheckCircle2
} from 'lucide-react';
import styles from '../dashboard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [displayName, setDisplayName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setSaving(false);
    }
  };

  if (!user) return null;

  return (
    <div className={styles.settingsPage}>
      <motion.div 
        className={`liquid-glass ${styles.welcomeBanner}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h2 className={styles.welcomeTitle}>Personal Settings</h2>
          <p className={`${styles.welcomeSub} theme-text-muted`}>
            Manage your academic identity and account preferences.
          </p>
        </div>
      </motion.div>

      <div className={styles.settingsContainer}>
        <motion.div 
          className={`liquid-glass-strong ${styles.settingGroup}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className={styles.sectionHeader}>
            <User size={18} className={styles.sectionIcon} />
            <h3 className={styles.sectionTitle}>Profile Information</h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label className={styles.settingLabel}>Full Name</label>
              <input 
                type="text" 
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className={`liquid-glass ${styles.settingValue}`}
                style={{ width: '100%', padding: '0.875rem', border: '1px solid rgba(17, 24, 39, 0.05)', borderRadius: '0.75rem', outline: 'none' }}
              />
            </div>

            <div>
              <label className={styles.settingLabel}>Email Address</label>
              <div 
                className={`liquid-glass ${styles.settingValue}`}
                style={{ width: '100%', padding: '0.875rem', opacity: 0.6, cursor: 'not-allowed', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
              >
                <Mail size={16} />
                <span>{user.email}</span>
              </div>
              <p style={{ fontSize: '0.65rem', marginTop: '0.5rem', color: 'rgba(17, 24, 39, 0.4)' }}>
                Email cannot be changed for security reasons. Contact support if needed.
              </p>
            </div>
          </div>
        </motion.div>

        <button 
          onClick={handleSave}
          disabled={saving}
          className={`${styles.saveBtn} hover-scale`}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          {saving ? 'Saving...' : saved ? <><CheckCircle2 size={18} /> Saved</> : <><Save size={18} /> Save Changes</>}
        </button>
      </div>
    </div>
  );
}
