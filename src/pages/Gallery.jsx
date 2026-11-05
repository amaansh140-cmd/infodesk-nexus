import React, { useState, useMemo } from 'react';
import { Camera, Sparkles, Image as ImageIcon, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Masonry from '../components/Masonry';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import galleryManifest from '../data/galleryManifest.json';

// Verified metadata lookup for brochure photos extracted from PDF
const photoMetadataLookup = {
  // Seminars
  'seminar-1.jpg': {
    title: 'College IT Guidance Workshop',
    alt: 'Infodesk faculty addressing college students during a Mumbai technical workshop',
    description: 'Practical full-stack development orientation conducted for undergraduates across Mumbai colleges.',
  },
  'seminar-2.jpg': {
    title: 'Programming & Data Science Seminar',
    alt: 'Classroom seminar demonstrating Python programming and modern database concepts',
    description: 'Hands-on seminar introducing Python, SQL, and data analytics tools to aspiring engineers.',
  },
  'seminar-3.jpg': {
    title: 'Career Paths in Software Engineering',
    alt: 'Infodesk technical mentors interacting with students on software engineering careers',
    description: 'Guidance session on full stack development, industry certifications, and tech team expectations.',
  },
  'seminar-audience.jpg': {
    title: 'Campus Tech Conclave',
    alt: 'Auditorium filled with students participating in the Infodesk campus tech guidance conclave',
    description: 'Packed college auditorium during the annual tech career guidance and scholarship orientation.',
  },

  // Awards
  'ashneer-award-main.jpg': {
    title: "India's Best Institute Award",
    alt: "Kareem Shah receiving the national institute award trophy from Ashneer Grover",
    description: "Infodesk Computer Education honored as India's Best IT Training Institute by Ashneer Grover.",
  },
  'ashneer-award-1.jpg': {
    title: 'National Recognition Felicitation',
    alt: 'National award ceremony stage felicitation for Infodesk Computer Education',
    description: 'Recognition for academic excellence, 100% placement assistance, and practical lab training.',
  },
  'ashneer-award-3.jpg': {
    title: 'Faculty Trophy Celebration',
    alt: 'Infodesk leadership and faculty celebrating the national award win',
    description: 'Senior faculty team celebrating national recognition for educational impact in Mumbai.',
  },

  // Events
  'tech-orientation-event.jpg': {
    title: 'Annual Student Tech Meet',
    alt: 'Infodesk students gathered for the annual technology presentation event',
    description: 'Interactive project demo and certification award session with batch graduates.',
  },
  'campus-coding-drive.jpg': {
    title: 'Campus Coding Challenge',
    alt: 'Students participating in practical problem solving and algorithm challenges',
    description: 'Collaborative coding competition organized across local Mumbai college campuses.',
  },
  'career-conclave.jpg': {
    title: 'Industry Readiness Conclave',
    alt: 'Mentors discussing hiring trends and technical portfolio building',
    description: 'Guidance panel on resume building, GitHub repositories, and tech interviews.',
  },
};

// Filter category chips definition
const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'seminars', label: 'Seminars' },
  { id: 'award', label: 'Award' },
  { id: 'events', label: 'Events' },
  { id: 'our-new-institute', label: 'Our new institute' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Load photos from gallery manifest
  const allItems = useMemo(() => {
    return galleryManifest.map((item, idx) => {
      const meta = photoMetadataLookup[item.filename] || {
        title: item.filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
        alt: `Infodesk Computer Education - ${item.filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')}`,
        description: '[CAPTION_PLACEHOLDER: Description for newly added photo]',
      };

      return {
        id: `gallery-item-${idx + 1}`,
        category: item.category,
        img: item.img,
        alt: meta.alt,
        title: meta.title,
        description: meta.description,
      };
    });
  }, []);

  // Filter items according to the active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [allItems, activeCategory]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* ─── PAGE HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-14 sm:py-20 relative overflow-hidden bg-grid-dots">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-line/80 text-xs font-semibold text-deep mb-4 shadow-sm">
            <Camera size={13} className="text-primary" />
            <span>Campus Life & Milestones</span>
          </div>
          <h1 className="text-[clamp(36px,5.2vw,64px)] font-bold text-deep tracking-tight">
            Life and achievements at Infodesk.
          </h1>
          <p className="text-muted text-lg sm:text-[19px] mt-4 leading-relaxed max-w-2xl mx-auto">
            From national institute honors to college coding seminars, explore the moments that define our student community in Mumbai.
          </p>
        </div>
      </section>

      {/* ─── GALLERY CONTROLS & MASONRY GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        <ScrollReveal>
          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? allItems.length
                  : allItems.filter((it) => it.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-primary text-white shadow-primary/25 shadow-md scale-[1.02]'
                      : 'bg-surface text-muted hover:text-deep border border-line hover:border-primary/40'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-white/20 text-white' : 'bg-background text-muted'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Empty State for "Our new institute" category */}
          {filteredItems.length === 0 ? (
            <div className="bg-surface border border-line/80 rounded-band p-10 sm:p-16 text-center max-w-2xl mx-auto shadow-card space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-soft text-primary flex items-center justify-center shadow-inner">
                <ImageIcon size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-deep">
                  Photos coming soon.
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  We are currently documenting our brand-new expanded facility with high-end workstations and dedicated lab cabins. New photos will appear here shortly.
                </p>
              </div>
              <div className="pt-2">
                <Link to="/contact">
                  <Button variant="primary" size="md" icon={<ArrowRight size={15} />}>
                    Schedule an in-person visit
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            // Masonry Component (Re-renders on category switch to retrigger entrance animation)
            <div className="w-full">
              <Masonry
                key={activeCategory}
                items={filteredItems}
                columns="auto"
                columnWidth={260}
                gap={14}
                radius={22}
                animateFrom="bottom"
                stagger={0.05}
                blurToFocus={true}
                revealOnScroll={true}
                hoverEffect="zoom"
                captions="hover"
                lightbox={true}
                parallax={0}
                draggable={false}
              />
            </div>
          )}
        </ScrollReveal>
      </section>
    </div>
  );
}
