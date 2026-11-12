import React from 'react';
import { Quote, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GoogleIcon, GoogleStars } from './GoogleRatingBadge';
import { GOOGLE_BUSINESS_INFO } from '../data/testimonials';

export default function GoogleReviewCard({ review, className = '' }) {
  if (!review) return null;

  const isGoogle = review.source === 'Google Review';

  return (
    <article
      className={`bg-white border border-line/80 rounded-2xl sm:rounded-[22px] p-5 sm:p-6 shadow-card flex flex-col justify-between space-y-4 hover:border-primary/40 transition-all ${className}`}
      aria-label={`Review by ${review.name}`}
    >
      <div className="space-y-3">
        {/* Card Header: Source badge & Rating */}
        <div className="flex items-center justify-between gap-2 border-b border-line/50 pb-3">
          <div className="flex items-center gap-2">
            <GoogleStars rating={review.rating || 5} size={14} />
            <span className="text-[11px] font-bold text-deep font-mono">5.0</span>
          </div>

          {isGoogle ? (
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-soft text-[10px] font-semibold text-primary border border-primary/20">
              <GoogleIcon className="w-3 h-3" />
              <span>Google Review</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
              <CheckCircle2 size={10} />
              <span>Alumni Story</span>
            </span>
          )}
        </div>

        {/* Course & Mentor Tags */}
        {(review.course || review.mentor) && (
          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            {review.course && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-soft/70 text-deep border border-line/60">
                {review.course}
              </span>
            )}
            {review.mentor && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200/60">
                {review.mentor}
              </span>
            )}
          </div>
        )}

        {/* Verbatim Review Quote */}
        <p className="text-xs sm:text-sm text-ink/90 leading-relaxed italic pt-1">
          “{review.quote.replace(/'/g, '’')}”
        </p>
      </div>

      {/* Reviewer Meta Footer */}
      <div className="flex items-center justify-between gap-3 pt-3.5 border-t border-line/50">
        <div className="flex items-center gap-3 min-w-0">
          {review.image ? (
            <img
              src={review.image}
              alt={review.name}
              className="w-10 h-10 rounded-full object-cover border border-line/80 shadow-xs shrink-0"
              loading="lazy"
            />
          ) : (
            <div
              className="w-10 h-10 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs"
              style={{ backgroundColor: review.avatarBg || '#4285F4' }}
              aria-hidden="true"
            >
              {review.initials || review.name.slice(0, 2).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <h4 className="text-sm font-bold text-deep leading-tight truncate">
              {review.name}
            </h4>
            <p className="text-[11px] text-muted truncate mt-0.5">
              {review.date ? `${review.date} · ` : ''}{review.role || 'Verified Student'}
            </p>
          </div>
        </div>

        {isGoogle && (
          <a
            href={GOOGLE_BUSINESS_INFO.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/70 hover:text-primary transition-colors p-1"
            title="View original on Google Business Profile"
            aria-label={`View ${review.name}'s review on Google`}
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
