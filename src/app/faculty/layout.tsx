'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, Users, BookOpen, GraduationCap, 
  CalendarCheck, Clock, FileText, Settings, 
  LogOut, Megaphone, Calendar, Menu, X
} from 'lucide-react';
// Reusing super admin styles for consistency
import styles from '../super-admin/super-admin.module.css';
import { useAuth } from '../../context/AuthContext';

export default function FacultyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Overview', path: '/faculty', icon: LayoutDashboard },
    { name: 'My Students', path: '/faculty/students', icon: Users },
    { name: 'Lecture Breakup', path: '/faculty/lectures', icon: Clock },
    { name: 'Attendance', path: '/faculty/attendance', icon: CalendarCheck },
    { name: 'Materials', path: '/faculty/materials', icon: FileText },
    { name: 'Timetable', path: '/faculty/timetable', icon: Calendar },
    { name: 'Communications', path: '/faculty/communications', icon: Megaphone },
    { name: 'Settings', path: '/faculty/settings', icon: Settings },
  ];

  if (!isMounted) return null;

  return (
    <div className={styles.layout}>
      {/* Mobile Top Header */}
      <div className={styles.mobileHeader}>
        <div className={styles.logoText}>Infodesk</div>
        <button onClick={toggleMobileMenu} className={styles.mobileMenuBtn}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={toggleMobileMenu}></div>
      )}

      {/* Fixed Sidebar */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>N</div>
          <div>
            <div className={styles.logoText}>Infodesk Computer Education</div>
            <div style={{ fontSize: '0.75rem', color: 'rgba(17,24,39,0.5)', fontWeight: 600 }}>FACULTY PORTAL</div>
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
