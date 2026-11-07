import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, ChevronRight, X, Menu as MenuIcon, ArrowRight, MessageSquare } from 'lucide-react';
import Button from './Button';

const courseCategoriesData = [
  {
    name: 'Data and AI',
    href: '/courses?category=Data+and+AI',
    courses: [
      { name: 'Data Science', href: '/courses/data-science' },
      { name: 'Data Analytics', href: '/courses/data-analytics' },
      { name: 'Advance Excel', href: '/courses/advance-excel' },
    ],
  },
  {
    name: 'Digital marketing',
    href: '/courses?category=Digital+marketing',
    courses: [
      { name: 'Digital Marketing', href: '/courses/digital-marketing' },
      { name: 'ADDM (Advance Diploma)', href: '/courses/addm' },
    ],
  },
  {
    name: 'Web and software',
    href: '/courses?category=Web+and+software',
    courses: [
      { name: 'FSWD (Full Stack Web)', href: '/courses/fswd' },
      { name: 'ADSE (Software Eng.)', href: '/courses/adse' },
      { name: 'Android Development', href: '/courses/android-development' },
    ],
  },
  {
    name: 'Design and video',
    href: '/courses?category=Design+and+video',
    courses: [
      { name: 'Graphic Design', href: '/courses/graphic-design' },
      { name: 'Web Design', href: '/courses/web-design' },
      { name: 'Video Editing & VFX', href: '/courses/video-editing-vfx' },
    ],
  },
  {
    name: 'Office and accounts',
    href: '/courses?category=Office+and+accounts',
    courses: [
      { name: 'Tally Prime with GST', href: '/courses/tally-prime-gst' },
      { name: 'ADAT (Taxation)', href: '/courses/adat' },
      { name: 'DCA (Computer App)', href: '/courses/dca' },
    ],
  },
  {
    name: 'Cyber security',
    href: '/courses?category=Cyber+security',
    courses: [
      { name: 'Ethical Hacking', href: '/courses/ethical-hacking' },
    ],
  },
];

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Placements', href: '/placements' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesExpanded, setIsMobileCoursesExpanded] = useState(false);
  const location = useLocation();
  const dropdownTimerRef = useRef(null);
  const dropdownRef = useRef(null);
  const mobileDrawerRef = useRef(null);

  // Scroll detection for 1px line border fade-in
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsCoursesOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileCoursesExpanded(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key and outside clicks for dropdown & mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCoursesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Hover handlers with slight delay so it doesn't flicker on mouse travel
  const handleMouseEnterCourses = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setIsCoursesOpen(true);
  };

  const handleMouseLeaveCourses = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 150);
  };

  const isCoursesActive = location.pathname.startsWith('/courses');

  return (
    <header
      className={`sticky top-0 z-[100] w-full h-[72px] bg-[#f6f5f1]/[0.97] backdrop-blur-[4px] transition-colors duration-300 ${
        isScrolled ? 'border-b border-[#dcdde6]' : 'border-b border-transparent'
      }`}
      style={{ backgroundColor: 'rgba(246, 245, 241, 0.97)' }}
    >
      <div className="w-full max-w-content mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Crisp Logo */}
        <Link to="/" aria-label="Infodesk Home" className="flex items-center shrink-0">
          <img
            src="/assets/logo-transparent.png"
            alt="Infodesk Computer Education"
            className="h-[44px] hidden lg:block w-auto object-contain"
          />
          <img
            src="/assets/logo-transparent.png"
            alt="Infodesk Computer Education"
            className="h-[36px] lg:hidden w-auto object-contain"
          />
        </Link>

        {/* Center/Desktop Navigation (>= 1024px) */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Courses with Mega Menu */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnterCourses}
            onMouseLeave={handleMouseLeaveCourses}
          >
            <button
              type="button"
              onClick={() => setIsCoursesOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={isCoursesOpen}
              className={`inline-flex items-center gap-1.5 text-[15px] font-medium py-1.5 transition-colors relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isCoursesActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${isCoursesOpen ? 'rotate-180 text-primary' : ''}`}
              />
              {/* Hover underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  isCoursesActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>

            {/* Mega Menu Dropdown */}
            {isCoursesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[840px] max-w-[90vw] bg-[#fdfcf9] border border-[#dcdde6] rounded-[22px] p-6 shadow-signature z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                role="menu"
                aria-label="Courses Mega Menu"
              >
                <div className="grid grid-cols-3 gap-6">
                  {courseCategoriesData.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <Link
                        to={category.href}
                        className="text-xs font-bold uppercase tracking-wider text-primary hover:text-deep transition-colors inline-flex items-center gap-1"
                      >
                        <span>{category.name}</span>
                        <ChevronRight size={12} />
                      </Link>
                      <ul className="space-y-1.5">
                        {category.courses.map((course) => (
                          <li key={course.href}>
                            <Link
                              to={course.href}
                              className="text-[14px] text-muted hover:text-ink hover:translate-x-0.5 transition-all block py-0.5"
                            >
                              {course.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom link to view all courses */}
                <div className="mt-5 pt-4 border-t border-[#dcdde6] flex items-center justify-between">
                  <span className="text-xs text-muted">
                    18+ certified industry courses with hands-on practice &amp; job assistance
                  </span>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-deep hover:underline"
                  >
                    <span>View all courses</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Standard Page Links */}
          {navLinks.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[15px] font-medium py-1.5 transition-colors relative group ${
                  isActive ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Phone number (>=1100px) & Book a free demo CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919769445334"
            className="hidden min-[1100px]:flex items-center gap-2 text-[14px] font-medium text-ink hover:text-primary transition-colors"
          >
            <Phone size={15} className="text-primary" />
            <span>+91 9769 445334</span>
          </a>

          <Button to="/contact" size="md" variant="primary" className="rounded-full shadow-signature">
            Book a free demo
          </Button>
        </div>

        {/* Mobile & Tablet Hamburger Button (< 1024px) */}
        <div className="lg:hidden flex items-center gap-2">
          <Button to="/contact" size="sm" variant="primary" className="rounded-full text-xs px-3.5 py-1.5">
            Free demo
          </Button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
            className="w-11 h-11 flex items-center justify-center rounded-full text-ink hover:bg-soft/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      {/* Full-height Mobile Drawer (below 1024px) */}
      {isMobileMenuOpen && (
        <div
          ref={mobileDrawerRef}
          className="fixed inset-0 z-[100] lg:hidden bg-ink/40 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#fdfcf9] border-l border-[#dcdde6] shadow-2xl flex flex-col justify-between p-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
            {/* Header row */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#dcdde6]">
                <img
                  src="/assets/logo-transparent.png"
                  alt="Infodesk Computer Education"
                  className="h-[36px] w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-ink hover:bg-soft/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="py-6 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-semibold text-deep hover:text-primary transition-colors"
                >
                  Home
                </Link>

                {/* Courses Accordion */}
                <div className="border-y border-line/60 py-3">
                  <button
                    type="button"
                    onClick={() => setIsMobileCoursesExpanded((prev) => !prev)}
                    className="w-full flex items-center justify-between text-lg font-semibold text-deep hover:text-primary transition-colors"
                  >
                    <span>Courses</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isMobileCoursesExpanded ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>

                  {isMobileCoursesExpanded && (
                    <div className="mt-3 pl-3 space-y-3.5 border-l-2 border-primary/30">
                      <Link
                        to="/courses"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm font-bold text-primary hover:underline"
                      >
                        View all courses →
                      </Link>
                      {courseCategoriesData.map((cat) => (
                        <div key={cat.name} className="space-y-1">
                          <Link
                            to={cat.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-xs font-bold uppercase tracking-wider text-muted hover:text-primary"
                          >
                            {cat.name}
                          </Link>
                          {cat.courses.map((course) => (
                            <Link
                              key={course.href}
                              to={course.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-ink/80 hover:text-primary pl-1 py-0.5"
                            >
                              {course.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-semibold text-deep hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Contact & Action Buttons */}
            <div className="pt-6 border-t border-[#dcdde6] space-y-3">
              <a
                href="tel:+919769445334"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-soft text-deep font-semibold text-sm hover:bg-soft/80 transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span>Call +91 9769 445334</span>
              </a>

              <a
                href="https://wa.me/919769445334?text=Hi%20Infodesk,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#25D366] text-white font-semibold text-sm hover:opacity-95 transition-opacity"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
