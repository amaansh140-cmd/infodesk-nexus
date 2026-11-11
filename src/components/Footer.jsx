import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe, MapPin, ArrowRight } from 'lucide-react';
import { branches, headOffice } from '../data/branches';
import GradualBlur from './GradualBlur';
import { effectsConfig } from '../config/effects';

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-line/80 pt-16 pb-12 mt-20">
      {/* Progressive blur above footer top edge */}
      {effectsConfig.gradualBlur && (
        <div className="absolute top-0 left-0 right-0 h-0 pointer-events-none">
          <GradualBlur position="bottom" height="2.5rem" strength={1.2} />
        </div>
      )}

      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-line/60">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block" aria-label="Infodesk Home">
              <img
                src="/assets/logo.png"
                alt="Infodesk Computer Education"
                className="h-10 w-auto object-contain"
                width="180"
                height="40"
              />
            </Link>
            <p className="text-muted text-[15px] leading-relaxed max-w-sm">
              Start IT here. Government recognized and ISO 9001:2015 certified IT training institute delivering industry-led technology education across Mumbai.
            </p>
            <div className="pt-2 text-xs font-medium text-deep/75 space-y-1">
              <p>• ISO 9001:2015 Certified Board</p>
              <p>• Government Recognized Institute</p>
              <p>• 100% Quality &amp; Practical Education</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep/90">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[15px]">
              <li>
                <Link to="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted hover:text-primary transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted hover:text-primary transition-colors">
                  About Institute
                </Link>
              </li>
              <li>
                <Link to="/placements" className="text-muted hover:text-primary transition-colors">
                  Placements &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact &amp; Branches
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Course Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep/90">
              Popular Tracks
            </h4>
            <ul className="space-y-2 text-[15px]">
              <li>
                <Link to="/courses/data-science" className="text-muted hover:text-primary transition-colors">
                  Data Science (12 Months)
                </Link>
              </li>
              <li>
                <Link to="/courses/data-analytics" className="text-muted hover:text-primary transition-colors">
                  Data Analytics (6 Months)
                </Link>
              </li>
              <li>
                <Link to="/courses/digital-marketing" className="text-muted hover:text-primary transition-colors">
                  Digital Marketing (6 Months)
                </Link>
              </li>
              <li>
                <Link to="/courses/fswd" className="text-muted hover:text-primary transition-colors">
                  Full Stack Web Dev (6 Months)
                </Link>
              </li>
              <li>
                <Link to="/courses/ethical-hacking" className="text-muted hover:text-primary transition-colors">
                  Ethical Hacking (6 Months)
                </Link>
              </li>
              <li>
                <Link to="/courses/advance-excel" className="text-muted hover:text-primary transition-colors">
                  Tally Prime with GST (3 Months)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Mumbai Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep/90">
              Mumbai Branches
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              {branches.map((b) => {
                const phone = b.primaryPhone || b.phone || '';
                return (
                  <div key={b.id || b.slug} className="border-b border-line/40 pb-2 last:border-0 last:pb-0">
                    <p className="font-semibold text-deep">{b.name}</p>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-muted hover:text-primary inline-flex items-center gap-1.5 py-1 text-xs sm:text-sm"
                    >
                      <Phone size={13} className="text-primary shrink-0" />
                      <span>{phone}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-4">
          <p>© {new Date().getFullYear()} Infodesk Computer Education. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Govt. Recognized · ISO 9001:2015</span>
            </span>
            <Link to="/contact" className="hover:text-primary transition-colors flex items-center gap-1">
              <span>Book counseling</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
