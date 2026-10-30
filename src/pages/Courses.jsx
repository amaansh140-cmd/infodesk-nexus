import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { courses, courseCategories } from '../data/courses';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(
    courseCategories.includes(initialCategory) ? initialCategory : 'All'
  );

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && courseCategories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredCourses =
    activeCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* ─── PAGE HEADER (GLASS SOFT BLUE TINT) ─── */}
      <section className="relative bg-soft/40 backdrop-blur-md border-b border-white/60 py-16 sm:py-20 overflow-hidden">
        {/* Specular ambient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-bright/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-content mx-auto px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-[clamp(36px,5vw,60px)] font-bold text-deep tracking-tight">
            Courses for every career path.
          </h1>
          <p className="text-muted text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Practical, curriculum-certified training across data, web development, marketing, design, accounting, and cyber security in Mumbai.
          </p>
        </div>
      </section>

      {/* ─── FILTER CHIPS & COURSES GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 p-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 w-fit max-w-full">
          {courseCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'text-white shadow-signature'
                    : 'text-deep/80 hover:text-deep hover:bg-white/60'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 rounded-full bg-primary -z-10 shadow-signature"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-muted font-medium">
          <span>
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
          </span>
          {activeCategory !== 'All' && (
            <button
              type="button"
              onClick={() => handleCategoryChange('All')}
              className="text-primary hover:underline font-semibold"
            >
              Reset to all
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ─── CUSTOM TRACK BANNER ─── */}
      <section className="max-w-content mx-auto px-6 pt-6">
        <ScrollReveal>
          <div className="glass-panel rounded-panel p-8 sm:p-12 shadow-signature flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Soft inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-soft/60 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 text-center md:text-left relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-deep">
                Want a mix of tracks?
              </h3>
              <p className="text-muted text-base max-w-lg leading-relaxed">
                We can customize modules across programming, analytics, and creative tools to suit your educational and career goals.
              </p>
            </div>
            <Button to="/contact" size="lg" variant="primary" className="shrink-0 relative z-10">
              Plan my course
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
