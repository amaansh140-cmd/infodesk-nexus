import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Globe, MapPin, ArrowRight } from 'lucide-react';
import { branches, headOffice } from '../data/branches';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-line/80 pt-16 pb-12 mt-20">
      <div className="max-w-content mx-auto px-6">
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

          {/* Col 3: Popular Courses (3 cols) */}
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
                <Link to="/courses/tally-prime-gst" className="text-muted hover:text-primary transition-colors">
                  Tally Prime with GST (3 Months)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mumbai Branches & Phone (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-deep/90">
              Mumbai Branches
            </h4>
            <div className="space-y-3 text-[14px]">
              {branches.map((b) => (
                <div key={b.id} className="pb-2 border-b border-line/40 last:border-0 last:pb-0">
                  <p className="font-semibold text-deep">{b.name}</p>
                  <a
                    href={`tel:${b.primaryPhoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-primary hover:underline text-[13px] mt-0.5"
                  >
                    <Phone size={12} />
                    <span>{b.primaryPhone}</span>
                  </a>
                </div>
              ))}
              <div className="pt-2">
                <a
                  href={`https://${headOffice.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] text-muted hover:text-primary"
                >
                  <Globe size={13} />
                  <span>{headOffice.website}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2026 Infodesk Computer Education. All rights reserved.</p>
          <p>Designed and built with care for future tech professionals.</p>
        </div>
      </div>
    </footer>
  );
}
