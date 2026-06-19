'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  return (
    <>
      <motion.header 
      key={pathname}
      initial={{ opacity: 0.5, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={headerClass}
    >
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <img
            src={MainLogo.src}
            alt="Infodesk Logo"
            className={styles.logoImg}
            style={{ height: '40px', width: 'auto' }}
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
          <Link href="/login" className={`liquid-glass-strong hover-scale ${styles.loginBtn}`}>
            Login
          </Link>
          <button 
            className={`liquid-glass ${styles.iconBtn} hover-scale ${styles.mobileMenuBtn}`} 
            aria-label="Menu"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
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
                href="/login"
                className={`liquid-glass-strong hover-scale ${styles.loginBtn} ${styles.mobileLoginBtn}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>
    </>
  );
}
