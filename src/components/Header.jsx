import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'About', path: '/about' },
  { label: 'Placements', path: '/placements' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-white/70 shadow-[0_8px_30px_rgba(19,38,111,0.06)] py-3'
          : 'bg-white/45 backdrop-blur-md border-b border-white/40 py-4'
      }`}
    >
      <div className="w-full max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Real Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Infodesk Home">
          <img
            src="/assets/logo.png"
            alt="Infodesk Computer Education - Start IT Here"
            className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            width="180"
            height="40"
          />
        </Link>

        {/* Desktop Nav (>= 860px) */}
        <nav className="hidden nav:flex items-center gap-2 bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 shadow-sm" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative px-3.5 py-1.5 rounded-full text-[15px] font-medium transition-all duration-200 select-none ${
                  isActive ? 'text-primary font-semibold' : 'text-ink/80 hover:text-primary hover:bg-white/60'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {/* Frosted active pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-soft/75 border border-white/90 rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden nav:flex items-center gap-3">
          <Button to="/contact" size="sm" variant="primary">
            Book a free demo
          </Button>
        </div>

        {/* Mobile Hamburger Toggle (< 860px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="nav:hidden p-2 rounded-full text-ink hover:bg-soft/70 active:scale-95 transition-all focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.2, 0.7, 0.2, 1] }}
            className="nav:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-white/80 px-6 pt-3 pb-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl text-base font-medium flex items-center justify-between transition-all duration-200 ${
                      isActive
                        ? 'bg-soft/80 text-primary font-semibold shadow-sm border border-white/60'
                        : 'text-ink/85 hover:bg-soft/40'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="text-muted" />
                </NavLink>
              ))}
              <div className="pt-3 mt-1 border-t border-line/40">
                <Button to="/contact" size="md" variant="primary" className="w-full">
                  Book a free demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
