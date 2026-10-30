import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseCard({ course }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      className="bg-surface border border-line/80 rounded-card p-6 flex flex-col justify-between shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-soft text-deep">
            <Award size={13} className="text-primary" />
            <span>{course.level}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted font-medium">
            <Clock size={13} />
            <span>{course.duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-deep group-hover:text-primary transition-colors">
          <Link to={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        {/* One-Line Summary */}
        <p className="text-muted text-sm mt-2 leading-relaxed line-clamp-2">
          {course.summary}
        </p>

        {/* 3 Tool Chips */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {course.tools.slice(0, 3).map((tool) => (
            <span
              key={tool}
              className="text-xs px-2.5 py-0.5 rounded-full bg-background border border-line/60 text-ink/80 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-5 border-t border-line/50 flex items-center justify-between">
        <span className="text-xs text-muted font-medium">{course.category}</span>
        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform"
        >
          <span>View syllabus</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
