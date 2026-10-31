import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, BookOpen, Sparkles } from 'lucide-react';
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
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchesCategory =
        activeCategory === 'All' || c.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inTitle = c.title.toLowerCase().includes(q);
      const inSummary = c.summary.toLowerCase().includes(q);
      const inCategory = c.category.toLowerCase().includes(q);
      const inTools = c.tools.some((t) => t.toLowerCase().includes(q));

      return inTitle || inSummary || inCategory || inTools;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-16">
      {/* ─── PAGE HEADER (SOFT BLUE TINT) ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-20 relative overflow-hidden bg-grid-dots">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line/80 text-xs font-semibold text-deep mb-4 shadow-sm">
            <BookOpen size={13} className="text-primary" />
            <span>18 Industry-Aligned Programs</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,60px)] font-bold text-deep tracking-tight">
            Courses for every career path.
          </h1>
          <p className="text-muted text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Practical, curriculum-certified training across data, web development, marketing, design, accounting, and cyber security in Mumbai.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <div className="relative flex items-center">
              <Search
                size={18}
                className="absolute left-4 text-muted pointer-events-none"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course name or tool (e.g. Python, SQL, Excel, SEO, Tally)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-full bg-surface border border-line text-ink text-sm shadow-sm placeholder:text-muted/70 focus:outline-none focus:ring-2 focus:ring-bright focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 p-1 rounded-full text-muted hover:text-ink hover:bg-soft/60 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER CHIPS & COURSES GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        {/* Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8">
          {courseCategories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? courses.length
                : courses.filter((c) => c.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-deep/80 border border-line/80 hover:bg-soft/40 hover:text-deep'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-xs px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-background text-muted'
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Results Counter & Active Filter Tags */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted font-medium pb-2 border-b border-line/40">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-deep">{filteredCourses.length}</strong> of {courses.length} courses
            </span>
            {searchQuery && (
              <span className="bg-soft text-primary px-2 py-0.5 rounded-full font-semibold">
                matching "{searchQuery}"
              </span>
            )}
          </div>

          {(activeCategory !== 'All' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                handleCategoryChange('All');
                setSearchQuery('');
              }}
              className="text-primary hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Reset all filters</span>
              <X size={13} />
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 px-4 bg-surface border border-line/80 rounded-panel max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-soft text-primary mx-auto flex items-center justify-center">
              <Search size={24} />
            </div>
            <h3 className="text-xl font-bold text-deep">No courses found</h3>
            <p className="text-sm text-muted">
              We couldn't find any courses matching your search criteria. Try a different search term or reset your category filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  handleCategoryChange('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-bright transition-colors shadow-sm"
              >
                View all courses
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ─── CUSTOM TRACK BANNER ─── */}
      <section className="max-w-content mx-auto px-6 pt-6">
        <ScrollReveal>
          <div className="bg-surface border border-line/80 rounded-panel p-8 sm:p-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-deep">
                Want a mix of tracks?
              </h3>
              <p className="text-muted text-base max-w-lg leading-relaxed">
                We can customize modules across programming, analytics, and creative tools to suit your educational and career goals.
              </p>
            </div>
            <Button to="/contact" size="lg" variant="primary" className="shrink-0">
              Plan my course
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
