import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import About from './pages/About';
import Placements from './pages/Placements';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function AppContent() {
  const location = useLocation();
  const isGalleryPage = location.pathname === '/gallery';

  return (
    <div className={`min-h-screen flex flex-col bg-background text-ink antialiased ${isGalleryPage ? 'h-screen overflow-hidden' : ''}`}>
      <Header />
      <div className={`flex-1 ${isGalleryPage ? 'h-[calc(100vh-76px)] overflow-hidden flex flex-col' : ''}`}>
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
      </div>
      {!isGalleryPage && <Footer />}
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
