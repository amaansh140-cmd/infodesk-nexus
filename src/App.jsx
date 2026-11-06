import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PageTransition from './components/PageTransition';
import TargetCursor from './components/TargetCursor';
import { ToastProvider } from './components/common/ToastContext';
import { effectsConfig, isTouchDevice } from './config/effects';

// Code-split pages by route with React.lazy
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const CourseDetail = lazy(() => import('./pages/CourseDetail'));
const About = lazy(() => import('./pages/About'));
const Placements = lazy(() => import('./pages/Placements'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-ink antialiased selection:bg-soft selection:text-deep">
      {/* Target reticle cursor for desktop fine-pointer */}
      {effectsConfig.targetCursor && !isTouchDevice && (
        <TargetCursor
          targetSelector=".cursor-target, a, button, [role='button'], input, select, textarea"
          cursorColor="#2448c9"
          cursorColorOnTarget="#4a6df0"
          size={32}
          thickness={2}
          cornerSize={8}
          dotSize={3}
          spinDuration={3}
          hoverDuration={0.2}
          hideDefaultCursor={false}
        />
      )}

      <Header />

      <main className="flex-1">
        <Suspense fallback={<PageFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </Router>
  );
}
