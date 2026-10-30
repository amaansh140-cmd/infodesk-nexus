import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col bg-background text-ink antialiased selection:bg-soft selection:text-primary">
        {/* Ambient background light orbs for glassmorphism refraction */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-soft/50 via-bright/10 to-transparent blur-3xl animate-orb-1" />
          <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-bl from-soft/40 via-[#e0e7ff]/30 to-transparent blur-3xl animate-orb-2" />
          <div className="absolute bottom-[10%] left-[20%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-soft/30 via-bright/5 to-transparent blur-3xl animate-orb-1" style={{ animationDelay: '-10s' }} />
        </div>

        <Header />
        <div className="flex-1">
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
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
