'use client';

import { useState, useEffect } from 'react';
import { 
  Settings, User, Mail, Save, CheckCircle2
} from 'lucide-react';
import styles from '../dashboard.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db, storage } from '@/lib/firebase';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || '');
        setPhotoURL(currentUser.photoURL || '');
      }
    });
    return () => unsubscribe();
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !auth.currentUser) return;

    const storageRef = ref(storage, `avatars/${auth.currentUser.uid}_${Date.now()}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(Math.round(progress));
      }, 
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
        alert("Failed to upload image. Please try again.");
      }, 
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setPhotoURL(downloadURL);
        
        // Auto-save the new photoURL to profile and firestore
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, { photoURL: downloadURL });
          await setDoc(doc(db, 'users', auth.currentUser.uid), { photoURL: downloadURL }, { merge: true });
        }
        
        setUploading(false);
        setUploadProgress(0);
      }
    );
  };

  const handleSave = async () => {
    if (!auth.currentUser) return;
    setSaving(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName
      });
      await setDoc(doc(db, 'users', auth.currentUser.uid), { displayName: displayName }, { merge: true });
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
              <div 
                style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'white', fontSize: '2rem', fontWeight: 600,
                  overflow: 'hidden', position: 'relative'
                }}
              >
                {photoURL ? (
                  <img src={photoURL} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  displayName.charAt(0).toUpperCase() || user.email.charAt(0).toUpperCase()
                )}
                {uploading && (
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '0.875rem' }}>{uploadProgress}%</span>
                  </div>
                )}
              </div>
              <div>
                <label className={styles.settingLabel} style={{ marginBottom: '0.5rem', display: 'block' }}>Profile Photo</label>
                <input 
                  type="file" 
                  id="avatar-upload"
                  accept="image/png, image/jpeg, image/webp"
                  style={{ display: 'none' }}
                  onChange={handlePhotoUpload}
                  disabled={uploading}
                />
                <label 
                  htmlFor="avatar-upload" 
                  style={{ 
                    background: 'rgba(17,24,39,0.05)', padding: '0.5rem 1rem', 
                    borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600, 
                    cursor: uploading ? 'not-allowed' : 'pointer', display: 'inline-block' 
                  }}
                >
                  {uploading ? 'Uploading...' : 'Change Photo'}
                </label>
              </div>
            </div>

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
