import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Clock,
  Award,
  ArrowLeft,
  FileDown,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { courses } from '../data/courses';
import ModuleAccordion from '../components/ModuleAccordion';
import Button from '../components/Button';
import CourseCard from '../components/CourseCard';
import ScrollReveal from '../components/ScrollReveal';

export default function CourseDetail() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  // Active semester for multi-semester diploma courses
  const [activeSemIndex, setActiveSemIndex] = useState(0);

  // Related courses (same category, excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch details and book a demo class?`
  );

  return (
    <div className="space-y-16">
      {/* ─── COURSE HEADER (SOFT BLUE TINT) ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-12 sm:py-16">
        <div className="max-w-content mx-auto px-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to all courses</span>
          </Link>

          <div className="max-w-3xl space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white">
                <Award size={13} />
                <span>{course.level}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-line text-deep">
                <Clock size={13} className="text-primary" />
                <span>{course.duration}</span>
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-background text-muted">
                {course.category}
              </span>
            </div>

            {/* Course Title */}
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-deep tracking-tight">
              {course.title}
            </h1>

            {/* Summary */}
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {course.summary}
            </p>
          </div>
        </div>
      </section>

      {/* ─── TWO-COLUMN CONTENT LAYOUT ─── */}
      <section className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Syllabus Breakdown (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2">
                Detailed syllabus.
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                Step-by-step topic breakdown verified against our official curriculum. Practical hands-on lab sessions accompany every topic.
              </p>
            </div>

            {/* Semester Tabs for Semester-Based Courses */}
            {course.semesters && (
              <div className="space-y-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-line/60">
                  {course.semesters.map((sem, sIdx) => {
                    const isActive = activeSemIndex === sIdx;
                    return (
                      <button
                        key={sem.number}
                        type="button"
                        onClick={() => setActiveSemIndex(sIdx)}
                        className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors whitespace-nowrap ${
                          isActive
                            ? 'bg-deep text-white shadow-sm'
                            : 'bg-surface text-muted hover:text-deep border border-line/60'
                        }`}
                      >
                        <span>Sem {sem.number}: {sem.title}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Semester Modules */}
                <div>
                  <h3 className="text-lg font-bold text-deep mb-3 flex items-center gap-2">
                    <Layers size={18} className="text-primary" />
                    <span>
                      Semester {course.semesters[activeSemIndex].number}: {course.semesters[activeSemIndex].title}
                    </span>
                  </h3>
                  <ModuleAccordion
                    key={activeSemIndex}
                    modules={course.semesters[activeSemIndex].modules}
                    defaultOpenIndex={0}
                  />
                </div>
              </div>
            )}

            {/* Standard Modular Courses */}
            {course.modules && (
              <ModuleAccordion modules={course.modules} defaultOpenIndex={0} />
            )}
          </div>

          {/* Right Column: Sticky Enrollment Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="glass-panel rounded-panel p-6 sm:p-7 shadow-signature space-y-6 relative overflow-hidden">
              {/* Specular corner highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Course Overview
                </span>
                <p className="text-xl font-bold text-deep mt-1">{course.title}</p>
              </div>

              {/* Specs */}
              <div className="space-y-3 py-3 border-y border-line/50 text-sm relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Duration</span>
                  <span className="font-semibold text-deep">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Format</span>
                  <span className="font-semibold text-deep">Small batches, in-person</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Locations</span>
                  <span className="font-semibold text-deep">4 Mumbai branches</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Placement Support</span>
                  <span className="font-semibold text-emerald-600">100% job assistance</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <Button to="/contact" size="md" variant="primary" className="w-full">
                  Book a free demo
                </Button>
                <Button
                  href={`https://wa.me/919769445334?text=${whatsappMessage}`}
                  size="md"
                  variant="ghost"
                  className="w-full"
                  icon={<MessageCircle size={18} className="text-[#25D366]" />}
                >
                  Chat on WhatsApp
                </Button>
                <a
                  href="/assets/Infodesk_Computer_Education.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors"
                >
                  <FileDown size={15} />
                  <span>Download official brochure (PDF)</span>
                </a>
              </div>

              {/* Trust bullets */}
              <div className="pt-2 border-t border-line/40 text-xs text-muted space-y-1.5">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Flexible morning, evening &amp; weekend timings</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-500" />
                  <span>Extra practice lab hours with mentor guidance</span>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── RELATED COURSES ─── */}
      {relatedCourses.length > 0 && (
        <section className="max-w-content mx-auto px-6 pt-10">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-deep">
                  Related courses in {course.category}.
                </h3>
                <p className="text-muted text-sm mt-1">
                  Compare other industry-curated curriculums in this track.
                </p>
              </div>
              <Link
                to={`/courses?category=${encodeURIComponent(course.category)}`}
                className="text-sm font-semibold text-primary hover:underline hidden sm:inline"
              >
                View all in track
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => (
                <CourseCard key={rel.slug} course={rel} />
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
