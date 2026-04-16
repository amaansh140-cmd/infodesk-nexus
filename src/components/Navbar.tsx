'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GraduationCap, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/playground', label: 'Playground' },
  { href: '/forge', label: 'The Forge' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${isScrolled ? styles.navScrolled : styles.navTransparent}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="https://www.infodeskcompedu.com/logo.png"
            alt="Infodesk Logo"
            width={32}
            height={32}
            className={styles.logoImg}
            unoptimized
          />
          <span className={styles.logoText}>infodesk nexus</span>
        </Link>

        {/* Center Links */}
        <div className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.linkActive : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className={styles.actions}>
          <button className={`liquid-glass ${styles.iconBtn} hover-scale`} aria-label="Account">
            <GraduationCap size={18} />
          </button>
          <button className={`liquid-glass ${styles.iconBtn} hover-scale`} aria-label="Menu">
            <Menu size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
