import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Award, Sparkles, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course }) {
  const isCareerProgram = course.level.toLowerCase().includes('career');
  const isAdvanceDiploma = course.level.toLowerCase().includes('advance diploma');
  const isDiploma = course.level.toLowerCase().includes('diploma') && !isAdvanceDiploma;

  const levelBadgeClass = isCareerProgram
    ? 'bg-emerald-50 text-emerald-800 border-emerald-200/70'
    : isAdvanceDiploma
    ? 'bg-blue-50 text-primary border-blue-200/70'
    : isDiploma
    ? 'bg-indigo-50 text-indigo-700 border-indigo-200/70'
    : 'bg-soft/70 text-deep border-line/70';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative bg-surface border border-line/80 rounded-card p-6 flex flex-col justify-between shadow-card hover:shadow-[0_20px_40px_-16px_rgba(19,38,111,0.2)] hover:-translate-y-1.5 transition-all duration-300 group overflow-hidden"
    >
      {/* Top accent glow line on hover */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${levelBadgeClass}`}>
            {isCareerProgram ? (
              <Sparkles size={12} className="text-emerald-600" />
            ) : (
              <Award size={12} className="text-primary" />
            )}
            <span>{course.level}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium bg-background px-2.5 py-0.5 rounded-full border border-line/50">
            <Clock size={12} />
            <span>{course.duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-deep group-hover:text-primary transition-colors leading-snug">
          <Link to={`/courses/${course.slug}`}>
            {course.title}
          </Link>
        </h3>

        {/* One-Line Summary */}
        <p className="text-muted text-sm mt-2.5 leading-relaxed line-clamp-2">
          {course.summary}
        </p>

        {/* 3 Tool Chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {course.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="text-xs px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-ink/80 font-medium group-hover:border-primary/30 transition-colors"
            >
              {tool}
            </span>
          ))}
          {course.tools.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-soft/40 text-muted font-medium">
              +{course.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-5 border-t border-line/50 flex items-center justify-between">
        <span className="text-xs text-muted font-medium flex items-center gap-1">
          <BookOpen size={12} />
          <span>{course.category}</span>
        </span>
        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-bright group-hover:translate-x-1 transition-all"
        >
          <span>View syllabus</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
