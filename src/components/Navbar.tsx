'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, ShoppingBag, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import MainLogo from './logo.png';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useCart } from '@/context/CartContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/playground', label: 'Playground' },
  { href: '/forge', label: 'The Forge' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const { cart, removeFromCart, totalItems, totalPrice } = useCart();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
          <button 
            className={`liquid-glass ${styles.iconBtn} hover-scale`} 
            aria-label="Cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={18} />
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </button>
          
          <Link href={user ? "/dashboard" : "/auth"} className={`liquid-glass ${styles.iconBtn} hover-scale`} aria-label="Account">
            <GraduationCap size={18} />
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.header>

      {/* Cart Drawer - Outside of header to escape its transform/clipping context */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className={styles.cartBackdrop}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`liquid-glass-strong ${styles.cartDrawer}`}
            >
              <div className={styles.cartHeader}>
                <h2 className={styles.cartTitle}>Your Bag</h2>
                <button 
                  className={`liquid-glass ${styles.closeBtn}`}
                  onClick={() => setIsCartOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className={styles.cartItems}>
                {cart.length === 0 ? (
                  <div className={styles.emptyCart}>
                    <ShoppingBag size={48} style={{ opacity: 0.1, marginBottom: '1rem' }} />
                    <p className="theme-text-faint">Your bag is empty</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                      <div className={styles.cartItemIcon} style={{ background: `${item.color}15`, color: item.color }}>
                        <GraduationCap size={20} />
                      </div>
                      <div className={styles.cartItemInfo}>
                        <p className={styles.cartItemName}>{item.title}</p>
                        <p className={styles.cartItemPrice}>₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      <button 
                        className={styles.removeBtn}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className={styles.cartFooter}>
                  <div className={styles.totalRow}>
                    <span className="theme-text-muted">Total Amount</span>
                    <span className={styles.totalPrice}>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <Link href="/checkout" onClick={() => setIsCartOpen(false)} className={`liquid-glass-strong ${styles.checkoutBtn} hover-scale`}>
                    Proceed to Checkout
                  </Link>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
