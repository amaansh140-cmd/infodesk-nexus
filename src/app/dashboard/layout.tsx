'use client';

import { useState, useEffect } from 'react';
import { 
  BookOpen, ClipboardList, Award, Settings, 
  LogOut
} from 'lucide-react';
import styles from './dashboard.module.css';
import { motion } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const sidebarLinks = [
  { icon: BookOpen, label: 'My Courses', href: '/dashboard' },
  { icon: ClipboardList, label: 'Assignments', href: '/dashboard/assignments' },
  { icon: Award, label: 'Certificates', href: '/dashboard/certificates' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.push('/auth');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push('/auth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={styles.loader}
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <motion.aside 
        className={`liquid-glass-strong ${styles.sidebar}`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.avatar}>
            {user?.displayName?.[0] || 'U'}
          </div>
          <div style={{ minWidth: 0 }}>
            <p className={styles.avatarName}>{user?.displayName || 'Student'}</p>
            <p className={`${styles.avatarRole} theme-text-faint`}>Academic Account</p>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarLinks.map(({ icon: Icon, label, href }, i) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href} legacyBehavior>
                <motion.a
                  className={`${styles.sidebarLink} hover-scale ${isActive ? styles.sidebarLinkActive : ''}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </motion.a>
              </Link>
            );
          })}
          
          <div className={styles.sidebarDivider} />
          
          <motion.button
            className={`${styles.sidebarLink} ${styles.logoutBtn} hover-scale`}
            onClick={handleLogout}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + sidebarLinks.length * 0.1 }}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </motion.button>
        </nav>
      </motion.aside>

      {/* Main Content Area */}
      <div className={styles.main}>
        {children}
      </div>
    </div>
  );
}
