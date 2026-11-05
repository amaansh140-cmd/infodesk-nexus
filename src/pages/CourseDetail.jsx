import React, { useState, useEffect } from 'react';
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
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Terminal,
} from 'lucide-react';
import { courses } from '../data/courses';
import ModuleAccordion from '../components/ModuleAccordion';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
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

  // Mobile detection for ScrollStack fallback to avoid pinning jank on small screens
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isSemesterCourse = Boolean(
    course.semesters &&
    course.semesters.length > 0 &&
    ['adse', 'adgwa', 'adat', 'dca'].includes(course.slug)
  );

  // Related courses (same category, excluding current)
  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch timings, fee details, and book a free demo session?`
  );

  return (
    <div className="space-y-16">
      {/* ─── COURSE HEADER (SOFT BLUE TINT) ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-12 sm:py-16 relative overflow-hidden bg-grid-dots">
        <div className="max-w-content mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted mb-6 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
            <ChevronRight size={12} />
            <Link
              to={`/courses?category=${encodeURIComponent(course.category)}`}
              className="hover:text-primary transition-colors"
            >
              {course.category}
            </Link>
            <ChevronRight size={12} />
            <span className="font-semibold text-deep truncate max-w-[200px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-white shadow-sm">
                <Award size={13} />
                <span>{course.level}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-line text-deep shadow-sm">
                <Clock size={13} className="text-primary" />
                <span>{course.duration}</span>
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background border border-line/70 text-muted">
                {course.category}
              </span>
            </div>

            {/* Course Title */}
            <h1 className="text-[clamp(36px,5vw,56px)] font-bold text-deep tracking-tight leading-[1.1]">
              {course.title}
            </h1>

            {/* Summary */}
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              {course.summary}
            </p>

            {/* Key Value Prop Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-deep">
              <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full border border-line/70 shadow-sm">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Govt. Recognized Certification</span>
              </span>
              <span className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-full border border-line/70 shadow-sm">
                <Briefcase size={14} className="text-primary" />
                <span>100% Job Placement Assistance</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TWO-COLUMN CONTENT LAYOUT ─── */}
      <section className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Syllabus Breakdown (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tools Covered Strip */}
            {course.tools && course.tools.length > 0 && (
              <div className="bg-surface border border-line/80 rounded-panel p-6 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                    <Terminal size={15} className="text-primary" />
                    <span>Tools & Technologies Mastered in this Track</span>
                  </h3>
                  <span className="text-xs text-muted font-mono">{course.tools.length} technologies</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full bg-background border border-line text-sm font-semibold text-deep shadow-sm hover:border-primary/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {isSemesterCourse ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2 tracking-tight">
                    Your semester-by-semester roadmap
                  </h2>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Official curriculum roadmap from our brochure. Each semester advances your practical capabilities from core fundamentals to job-ready production skills.
                  </p>
                </div>

                {isMobile ? (
                  // Mobile fallback: clean vertical stack to prevent sticky pinning jank on small screens
                  <div className="space-y-4">
                    {course.semesters.map((sem) => (
                      <div
                        key={sem.number}
                        className="bg-surface rounded-[22px] border-[1.5px] border-line shadow-card p-6 space-y-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-bold text-primary uppercase tracking-wider">
                              Semester {sem.number}
                            </span>
                            <h3 className="text-lg font-bold text-deep mt-0.5">
                              {sem.title}
                            </h3>
                          </div>
                          <span className="text-3xl font-extrabold text-primary/30 font-mono select-none">
                            0{sem.number}
                          </span>
                        </div>

                        <div className="space-y-3 pt-1">
                          {sem.modules.map((mod, mIdx) => (
                            <div key={mIdx} className="space-y-2">
                              {mod.name && (
                                <p className="text-xs font-semibold text-deep/90 flex items-center gap-1.5">
                                  <Layers size={13} className="text-primary flex-shrink-0" />
                                  <span>{mod.name}</span>
                                </p>
                              )}
                              <div className="flex flex-wrap gap-1.5">
                                {mod.topics.map((topic, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2.5 py-1 rounded-full bg-soft/75 border border-line/60 text-xs font-medium text-deep"
                                  >
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Desktop & Tablet: 3D interactive ScrollStack pinning roadmap
                  <div className="pt-2">
                    <ScrollStack
                      useWindowScroll={true}
                      stackPosition="90px"
                      itemDistance={100}
                      itemStackDistance={24}
                      baseScale={0.85}
                      itemScale={0.03}
                      dimAmount={0.15}
                      blurAmount={0}
                      smoothScroll={false}
                    >
                      {course.semesters.map((sem) => (
                        <ScrollStackItem
                          key={sem.number}
                          itemClassName="!h-auto min-h-[220px] !bg-surface !rounded-[22px] !border-[1.5px] !border-line !shadow-card p-6 sm:p-8 flex flex-col justify-between"
                        >
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4 border-b border-line/50 pb-3">
                              <div>
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                  Semester {sem.number}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-deep mt-0.5">
                                  {sem.title}
                                </h3>
                              </div>
                              <span className="text-4xl sm:text-5xl font-extrabold text-primary/30 font-mono select-none">
                                0{sem.number}
                              </span>
                            </div>

                            <div className="space-y-4 pt-1">
                              {sem.modules.map((mod, mIdx) => (
                                <div key={mIdx} className="space-y-2">
                                  {mod.name && (
                                    <p className="text-xs font-bold uppercase tracking-wider text-muted flex items-center gap-1.5">
                                      <Layers size={13} className="text-primary flex-shrink-0" />
                                      <span>{mod.name}</span>
                                    </p>
                                  )}
                                  <div className="flex flex-wrap gap-2">
                                    {mod.topics.map((topic, tIdx) => (
                                      <span
                                        key={tIdx}
                                        className="px-3 py-1.5 rounded-full bg-soft/70 border border-line/70 text-xs font-medium text-deep"
                                      >
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </ScrollStackItem>
                      ))}
                    </ScrollStack>
                  </div>
                )}
              </div>
            ) : (
              // Standard Modular Courses keep ModuleAccordion
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-deep mb-2">
                    Detailed syllabus.
                  </h2>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    Step-by-step topic breakdown verified against our official curriculum. Practical hands-on lab sessions accompany every topic.
                  </p>
                </div>
                {course.modules && (
                  <ModuleAccordion modules={course.modules} defaultOpenIndex={0} />
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Enrollment Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted">
                  Course Overview
                </span>
                <p className="text-xl font-bold text-deep mt-1">{course.title}</p>
              </div>

              {/* Specs */}
              <div className="space-y-3 py-3 border-y border-line/60 text-sm">
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50"
                >
                  <FileDown size={15} />
                  <span>Download official brochure (PDF)</span>
                </a>
              </div>

              {/* Trust bullets */}
              <div className="pt-2 border-t border-line/40 text-xs text-muted space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Flexible morning, evening &amp; weekend timings</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Extra practice lab hours with mentor guidance</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>Personalized 1-on-1 doubt clearing sessions</span>
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
