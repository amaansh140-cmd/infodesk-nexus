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
  const [scrollState, setScrollState] = useState({ isScrolled: false, isPastHero: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setScrollState({
        isScrolled: scrollY > 20,
        isPastHero: scrollY > heroHeight - 80,
      });
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Dark header styling when on Home and still within the hero viewport
  const isDarkHeader = isHome && !scrollState.isPastHero;

  const headerBgClass = isDarkHeader
    ? scrollState.isScrolled
      ? 'bg-[#0a122e]/80 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
      : 'bg-transparent border-b border-transparent py-4 sm:py-5'
    : scrollState.isScrolled
      ? 'bg-background/95 backdrop-blur-md border-b border-line/80 shadow-sm py-3'
      : 'bg-background/90 backdrop-blur-md border-b border-line/50 py-4';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${headerBgClass}`}>
      <div className="w-full max-w-content mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Real Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="Infodesk Home">
          <div
            className={`transition-all duration-300 rounded-xl ${
              isDarkHeader
                ? 'bg-white/95 px-2.5 py-1 shadow-sm border border-white/20'
                : 'px-0 py-0'
            }`}
          >
            <img
              src="/assets/logo.png"
              alt="Infodesk Computer Education - Start IT Here"
              className="h-8 sm:h-9 w-auto max-w-[150px] sm:max-w-none object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              width="180"
              height="38"
            />
          </div>
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
                  isDarkHeader
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                    : isActive
                      ? 'text-primary font-semibold'
                      : 'text-ink/80 hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isDarkHeader ? 'bg-sky-400' : 'bg-primary'
                      }`}
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
          <Button
            to="/contact"
            size="sm"
            variant="primary"
            className={
              isDarkHeader
                ? '!bg-[#2448c9] hover:!bg-[#1e3fd8] text-white shadow-md shadow-blue-500/25 border border-white/10'
                : ''
            }
          >
            Book a free demo
          </Button>
        </div>

        {/* Mobile Hamburger Toggle (< 860px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`nav:hidden p-2 rounded-full focus:outline-none transition-colors ${
            isDarkHeader ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-soft/60'
          }`}
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
            className={`nav:hidden overflow-hidden px-6 pt-3 pb-6 shadow-2xl border-b ${
              isDarkHeader
                ? 'bg-[#0a122e]/98 backdrop-blur-xl border-white/15 text-white'
                : 'bg-surface/98 border-line/80 text-ink'
            }`}
          >
            <nav className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isDarkHeader
                        ? isActive
                          ? 'bg-white/15 text-white font-semibold'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                        : isActive
                          ? 'bg-soft text-primary font-semibold'
                          : 'text-ink/85 hover:bg-soft/40'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={16}
                    className={isDarkHeader ? 'text-white/60' : 'text-muted'}
                  />
                </NavLink>
              ))}
              <div
                className={`pt-3 mt-1 border-t ${
                  isDarkHeader ? 'border-white/10' : 'border-line/50'
                }`}
              >
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
