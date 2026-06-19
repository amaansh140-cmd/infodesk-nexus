'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutDashboard, Building2, Users, FileText, Settings, LogOut, Megaphone, BookOpen, GraduationCap, CalendarCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './super-admin.module.css';

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout } = useAuth();

  const navItems = [
    { name: 'Overview', path: '/super-admin', icon: LayoutDashboard },
    { name: 'Branches', path: '/super-admin/branches', icon: Building2 },
    { name: 'Team', path: '/super-admin/team', icon: Users },
    { name: 'Courses', path: '/super-admin/courses', icon: GraduationCap },
    { name: 'Attendance', path: '/super-admin/attendance', icon: CalendarCheck },
    { name: 'Communications', path: '/super-admin/communications', icon: Megaphone },
    { name: 'Reports', path: '/super-admin/reports', icon: FileText },
    { name: 'Settings', path: '/super-admin/settings', icon: Settings },
  ];

  const getPageTitle = () => {
    const currentItem = navItems.find((item) => item.path === pathname);
    return currentItem ? currentItem.name : 'Super Admin Dashboard';
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={`liquid-glass ${styles.sidebar}`}>
        <div className={styles.logoArea}>
          <div className={styles.logoText}>Infodesk Computer Education</div>
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
          <button onClick={logout} className={styles.logoutBtn}>
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
