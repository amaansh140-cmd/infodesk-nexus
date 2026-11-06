import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardNav from './CardNav';
import { StaggeredMenu } from './StaggeredMenu';
import GradualBlur from './GradualBlur';
import Button from './Button';
import { effectsConfig, isTouchDevice } from '../config/effects';

const desktopNavCards = [
  {
    label: 'Courses',
    description: 'Practical industry-aligned career tracks in Mumbai.',
    links: [
      { label: 'Data and AI', href: '/courses?category=Data+and+AI' },
      { label: 'Digital marketing', href: '/courses?category=Digital+marketing' },
      { label: 'Web and software', href: '/courses?category=Web+and+software' },
      { label: 'Design and video', href: '/courses?category=Design+and+video' },
      { label: 'Office and accounts', href: '/courses?category=Office+and+accounts' },
      { label: 'Cyber security', href: '/courses?category=Cyber+security' },
    ],
  },
  {
    label: 'Learn',
    description: 'Our teaching methodology, partner network, and student life.',
    links: [
      { label: 'About institute', href: '/about' },
      { label: 'Placements & partners', href: '/placements' },
      { label: 'Student photo gallery', href: '/gallery' },
    ],
  },
  {
    label: 'Contact',
    description: 'Direct counseling across all four Mumbai branch locations.',
    links: [
      { label: 'Goregaon West (Head Office)', href: '/contact?branch=goregaon-west' },
      { label: 'Behram Baug', href: '/contact?branch=behram-baug' },
      { label: 'Jogeshwari West', href: '/contact?branch=jogeshwari-west' },
      { label: 'Motilal Nagar', href: '/contact?branch=motilal-nagar' },
    ],
  },
];

const mobileMenuItems = [
  { label: 'Home', link: '/' },
  { label: 'All courses', link: '/courses' },
  { label: 'About institute', link: '/about' },
  { label: 'Jobs & placements', link: '/placements' },
  { label: 'Life at Infodesk', link: '/gallery' },
  { label: 'Contact & branches', link: '/contact' },
];

const RouterCardLink = ({ href, children, ...props }) => (
  <Link to={href} {...props}>
    {children}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Desktop Navigation (>= 860px) */}
      <div className="hidden nav:block w-full max-w-content mx-auto px-4 py-3">
        {effectsConfig.cardNav ? (
          <CardNav
            logo="/assets/logo.png"
            logoAlt="Infodesk Computer Education"
            logoHref="/"
            theme="light"
            surface="glass"
            accentColor="#2448c9"
            cardEffect="rise"
            maxWidth={1120}
            items={desktopNavCards}
            cta={{
              label: 'Book a free demo',
              href: '/contact',
            }}
            linkComponent={RouterCardLink}
          />
        ) : (
          <div className="flex items-center justify-between py-2">
            <Link to="/" aria-label="Infodesk Home">
              <img src="/assets/logo.png" alt="Infodesk Logo" className="h-9 w-auto object-contain" />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/courses" className="text-sm font-medium text-ink hover:text-primary">Courses</Link>
              <Link to="/about" className="text-sm font-medium text-ink hover:text-primary">About</Link>
              <Link to="/placements" className="text-sm font-medium text-ink hover:text-primary">Placements</Link>
              <Link to="/gallery" className="text-sm font-medium text-ink hover:text-primary">Gallery</Link>
              <Link to="/contact" className="text-sm font-medium text-ink hover:text-primary">Contact</Link>
            </div>
            <Button to="/contact" size="sm" variant="primary">Book a free demo</Button>
          </div>
        )}
      </div>

      {/* Mobile Navigation (< 860px) */}
      <div className="nav:hidden w-full bg-background/90 backdrop-blur-md border-b border-line/80 px-4 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Infodesk Home" className="shrink-0">
          <img
            src="/assets/logo.png"
            alt="Infodesk Computer Education"
            className="h-8 w-auto max-w-[150px] object-contain"
          />
        </Link>

        <div className="flex items-center gap-2.5">
          <Button to="/contact" size="sm" variant="primary" className="text-xs px-3.5 py-1.5">
            Free demo
          </Button>

          {effectsConfig.staggeredMenu ? (
            <div className="relative w-10 h-10 flex items-center justify-center">
              <StaggeredMenu
                position="right"
                colors={['#dfe5fb', '#2448c9']}
                accentColor="#2448c9"
                menuButtonColor="#10173a"
                openMenuButtonColor="#ffffff"
                items={mobileMenuItems}
                displaySocials={false}
                displayItemNumbering={true}
                isFixed={true}
                closeOnClickAway={true}
              />
            </div>
          ) : (
            <Link to="/contact" className="text-xs font-semibold text-primary underline">
              Menu
            </Link>
          )}
        </div>
      </div>

      {/* Gradual blur right under sticky header */}
      {effectsConfig.gradualBlur && (
        <div className="relative w-full h-0 pointer-events-none">
          <GradualBlur position="top" height="2rem" strength={1.2} />
        </div>
      )}
    </header>
  );
}
