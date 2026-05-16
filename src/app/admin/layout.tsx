'use client';

import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, BookOpen, Settings, 
  LogOut, CalendarCheck
} from 'lucide-react';
import styles from './admin.module.css';
import { motion } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
  { icon: Users, label: 'Students', href: '/admin/students' },
  { icon: BookOpen, label: 'Manage Courses', href: '/admin/courses' },
  { icon: CalendarCheck, label: 'Attendance', href: '/admin/attendance' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {
        router.push('/auth');
      } else {
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (!userDoc.exists() || userDoc.data().role !== 'admin') {
            router.push('/dashboard');
            return;
          }
        } catch (err) {
          console.error("Error fetching admin role:", err);
          router.push('/dashboard');
          return;
        }
        setLoading(false);
      }
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
            {user?.displayName?.[0] || 'A'}
          </div>
          <div style={{ minWidth: 0 }}>
            <p className={styles.avatarName}>{user?.displayName || 'Admin'}</p>
            <p className={`${styles.avatarRole} theme-text-faint`}>Portal Administrator</p>
          </div>
        </div>

        <nav className={styles.sidebarNav}>
          {sidebarLinks.map(({ icon: Icon, label, href }, i) => {
            const isActive = pathname === href;
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link 
                  href={href} 
                  className={`${styles.sidebarLink} hover-scale ${isActive ? styles.sidebarLinkActive : ''}`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              </motion.div>
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
