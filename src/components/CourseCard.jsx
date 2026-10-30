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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
      className="glass-card rounded-card p-6 flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Specular subtle light gleam */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-2xl pointer-events-none -mr-8 -mt-8 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="glass-pill inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full text-deep">
            <Award size={13} className="text-primary" />
            <span>{course.level}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-muted font-medium bg-white/40 px-2 py-0.5 rounded-full border border-white/60">
            <Clock size={13} />
            <span>{course.duration}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-deep group-hover:text-primary transition-colors duration-200">
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
              className="text-xs px-2.5 py-0.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/90 text-ink/80 font-medium shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-5 border-t border-line/40 flex items-center justify-between relative z-10">
        <span className="text-xs text-muted font-medium">{course.category}</span>
        <Link
          to={`/courses/${course.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-200"
        >
          <span>View syllabus</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </motion.div>
  );
}
