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
          ? 'bg-background/90 backdrop-blur-md border-b border-line/80 shadow-sm py-3'
          : 'bg-background/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="w-full max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Real Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Infodesk Home">
          <img
            src="/assets/logo.png"
            alt="Infodesk Computer Education - Start IT Here"
            className="h-8 sm:h-10 w-auto max-w-[150px] sm:max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            width="180"
            height="40"
          />
        </Link>

        {/* Desktop Nav (>= 860px) */}
        <nav className="hidden nav:flex items-center gap-7" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-colors py-1 ${
                  isActive ? 'text-primary font-semibold' : 'text-ink/80 hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {/* Active blue indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
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
          className="nav:hidden p-2 rounded-full text-ink hover:bg-soft/60 focus:outline-none"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="nav:hidden overflow-hidden bg-surface/98 border-b border-line/80 px-6 pt-3 pb-6 shadow-xl"
          >
            <nav className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                      isActive
                        ? 'bg-soft text-primary font-semibold'
                        : 'text-ink/85 hover:bg-soft/40'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="text-muted" />
                </NavLink>
              ))}
              <div className="pt-3 mt-1 border-t border-line/50">
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
