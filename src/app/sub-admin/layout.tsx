'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, Users, BookOpen, GraduationCap, 
  CalendarCheck, Clock, BarChart3, Settings, 
  LogOut, Megaphone, ShieldAlert, Building 
} from 'lucide-react';
// Reusing super admin styles for consistency
import styles from '../super-admin/super-admin.module.css';
import { useAuth } from '../../context/AuthContext';

export default function SubAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const branchName = user?.branch || 'YOUR';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const navItems = [
    { name: 'Dashboard', path: '/sub-admin', icon: LayoutDashboard },
    { name: 'Faculty', path: '/sub-admin/faculty', icon: Users },
    { name: 'Students', path: '/sub-admin/students', icon: GraduationCap },
    { name: 'Courses', path: '/sub-admin/courses', icon: BookOpen },
    { name: 'Attendance', path: '/sub-admin/attendance', icon: CalendarCheck },
    { name: 'Lectures', path: '/sub-admin/lectures', icon: Clock },
    { name: 'Analytics', path: '/sub-admin/analytics', icon: BarChart3 },
    { name: 'Configuration', path: '/sub-admin/configuration', icon: Settings },
    { name: 'Communications', path: '/sub-admin/communications', icon: Megaphone },
    { name: 'Branch Profile', path: '/sub-admin/settings', icon: Building },
    { name: 'Audit Logs', path: '/sub-admin/audit', icon: ShieldAlert },
  ];

  if (!isMounted) return null;

  return (
    <div className={styles.layout}>
      {/* Fixed Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>N</div>
          <div>
            <div className={styles.logoText}>Infodesk Computer Education</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(17,24,39,0.5)', fontWeight: 600, textTransform: 'uppercase' }}>{branchName} BRANCH</div>
          </div>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link 
                key={item.path} 
                href={item.path}
                className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: '2rem' }}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </main>
    </div>
  );
}
