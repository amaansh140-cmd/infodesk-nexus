'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  Settings as SettingsIcon, Shield, Plug, Palette, 
  Save, CheckCircle2 
} from 'lucide-react';
import styles from './settings.module.css';

type TabType = 'general' | 'security' | 'integrations';

interface SettingsState {
  platformName: string;
  supportEmail: string;
  currency: string;
  allowRegistrations: boolean;
  requireEmailVerification: boolean;
  sessionTimeout: string;
  enforceStrongPasswords: boolean;
  razorpayKeyId: string;
  razorpayKeySecret: string;
  geminiApiKey: string;
}

const defaultSettings: SettingsState = {
  platformName: 'Infodesk Nexus',
  supportEmail: 'support@infodesknexus.com',
  currency: 'INR',
  allowRegistrations: true,
  requireEmailVerification: false,
  sessionTimeout: '24h',
  enforceStrongPasswords: true,
  razorpayKeyId: '',
  razorpayKeySecret: '',
  geminiApiKey: '',
};

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('general');
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'global');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSettings({ ...defaultSettings, ...docSnap.data() });
        }
      } catch (err) {
        console.error('Error fetching settings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (field: keyof SettingsState, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage('');
    try {
      await setDoc(doc(db, 'settings', 'global'), settings);
      setSaveMessage('Settings saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (err) {
      console.error('Error saving settings:', err);
      setSaveMessage('Error saving settings.');
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'security', label: 'Security & Auth', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Plug },
  ];

  if (loading) {
    return <div style={{ padding: '2rem' }}>Loading settings...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Platform Settings</h1>
        <p className={styles.subtitle}>Configure global platform behavior and integrations.</p>
      </div>

      <div className={styles.layout}>
        {/* Sidebar Navigation */}
        <div className={styles.sidebar}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveTab(tab.id as TabType)}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`liquid-glass ${styles.section}`}
            >
              {activeTab === 'general' && (
                <>
                  <h2 className={styles.sectionTitle}>General Settings</h2>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Platform Name</label>
                    <input 
                      type="text" 
                      className={styles.input} 
                      value={settings.platformName}
                      onChange={(e) => handleChange('platformName', e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Support Email</label>
                    <input 
                      type="email" 
                      className={styles.input} 
                      value={settings.supportEmail}
                      onChange={(e) => handleChange('supportEmail', e.target.value)}
                    />
                    <span className={styles.helperText}>Used for outbound notifications and support links.</span>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Default Currency</label>
                    <select 
                      className={styles.select}
                      value={settings.currency}
                      onChange={(e) => handleChange('currency', e.target.value)}
                    >
                      <option value="INR">Indian Rupee (INR)</option>
                      <option value="USD">US Dollar (USD)</option>
                      <option value="EUR">Euro (EUR)</option>
                      <option value="GBP">British Pound (GBP)</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'security' && (
                <>
                  <h2 className={styles.sectionTitle}>Security & Authentication</h2>
                  
                  <div className={styles.rowGroup}>
                    <div>
                      <div className={styles.label}>Allow New Registrations</div>
                      <div className={styles.helperText}>Let anyone sign up for an account.</div>
                    </div>
                    <div 
                      className={`${styles.toggleSwitch} ${settings.allowRegistrations ? styles.active : ''}`}
                      onClick={() => handleChange('allowRegistrations', !settings.allowRegistrations)}
                    >
                      <div className={styles.toggleKnob} />
                    </div>
                  </div>

                  <div className={styles.rowGroup}>
                    <div>
                      <div className={styles.label}>Require Email Verification</div>
                      <div className={styles.helperText}>Force users to verify their email before logging in.</div>
                    </div>
                    <div 
                      className={`${styles.toggleSwitch} ${settings.requireEmailVerification ? styles.active : ''}`}
                      onClick={() => handleChange('requireEmailVerification', !settings.requireEmailVerification)}
                    >
                      <div className={styles.toggleKnob} />
                    </div>
                  </div>

                  <div className={styles.rowGroup}>
                    <div>
                      <div className={styles.label}>Enforce Strong Passwords</div>
                      <div className={styles.helperText}>Require alphanumeric and special characters.</div>
                    </div>
                    <div 
                      className={`${styles.toggleSwitch} ${settings.enforceStrongPasswords ? styles.active : ''}`}
                      onClick={() => handleChange('enforceStrongPasswords', !settings.enforceStrongPasswords)}
                    >
                      <div className={styles.toggleKnob} />
                    </div>
                  </div>

                  <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
                    <label className={styles.label}>Session Timeout</label>
                    <select 
                      className={styles.select}
                      value={settings.sessionTimeout}
                      onChange={(e) => handleChange('sessionTimeout', e.target.value)}
                    >
                      <option value="1h">1 Hour</option>
                      <option value="24h">24 Hours</option>
                      <option value="7d">7 Days</option>
                      <option value="never">Never</option>
                    </select>
                  </div>
                </>
              )}

              {activeTab === 'integrations' && (
                <>
                  <h2 className={styles.sectionTitle}>Integrations & API Keys</h2>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Razorpay Key ID</label>
                    <input 
                      type="password" 
                      className={styles.input} 
                      value={settings.razorpayKeyId}
                      placeholder="rzp_test_..."
                      onChange={(e) => handleChange('razorpayKeyId', e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Razorpay Key Secret</label>
                    <input 
                      type="password" 
                      className={styles.input} 
                      value={settings.razorpayKeySecret}
                      placeholder="••••••••••••"
                      onChange={(e) => handleChange('razorpayKeySecret', e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Gemini AI API Key</label>
                    <input 
                      type="password" 
                      className={styles.input} 
                      value={settings.geminiApiKey}
                      placeholder="AIzaSy..."
                      onChange={(e) => handleChange('geminiApiKey', e.target.value)}
                    />
                    <span className={styles.helperText}>Required for the AI Mentor playground.</span>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky Save Bar */}
      <div className={styles.saveBar}>
        <AnimatePresence>
          {saveMessage && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className={styles.statusMessage}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <CheckCircle2 size={18} />
              {saveMessage}
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          className={styles.saveBtn} 
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>
    </div>
  );
}
