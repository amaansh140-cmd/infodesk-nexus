'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import styles from './Navbar.module.css';
import MainLogo from './logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/playground', label: 'Playground' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const headerClass = isHomePage && !isScrolled 
    ? `${styles.header} ${styles.headerTransparent}` 
    : styles.header;

  const authTargetHref = user
    ? (user.role === 'superadmin' ? '/super-admin' : user.role === 'subadmin' ? '/sub-admin' : `/${user.role}`)
    : '/login';
  const authTargetLabel = user ? 'Dashboard' : 'Login';

  return (
    <>
      <header className={headerClass}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src={MainLogo.src}
            alt="Infodesk Logo"
            className={styles.logoImg}
            style={{ height: '36px', width: 'auto' }}
          />
        </Link>


        {/* Center Links */}
        <div className={styles.links}>
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                style={{ position: 'relative' }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <Link href={authTargetHref} className={`liquid-glass-strong hover-scale ${styles.loginBtn}`}>
            {user && <LayoutDashboard size={14} style={{ marginRight: '0.25rem' }} />}
            {authTargetLabel}
          </Link>
          <button 
            className={`liquid-glass ${styles.iconBtn} hover-scale ${styles.mobileMenuBtn}`} 
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop & Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileLinks}>
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href={authTargetHref}
                className={`liquid-glass-strong hover-scale ${styles.loginBtn} ${styles.mobileLoginBtn}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {user && <LayoutDashboard size={16} style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />}
                {authTargetLabel}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
