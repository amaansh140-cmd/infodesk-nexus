import React from 'react';
import { MessageCircle, FileDown, CheckCircle2 } from 'lucide-react';
import Button from './Button';

export default function CourseOverviewCard({ course, branchCount = 4, className = '' }) {
  const whatsappMessage = encodeURIComponent(
    `Hello Infodesk Computer Education, I am interested in the ${course.title} (${course.duration}) course. Could you share batch timings, fee details, and book a free demo session?`
  );

  return (
    <div className={`bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6 ${className}`}>
      <div>
        <span className="text-xs font-bold text-muted">Course overview</span>
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
          <span className="font-semibold text-deep">{branchCount} Mumbai branches</span>
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
  );
}
