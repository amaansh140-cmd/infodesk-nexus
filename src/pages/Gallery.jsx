import React, { useState } from 'react';
import { Camera, ExternalLink, ImageOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';

// Gallery dataset categorised by filters
const staticGalleryItems = [
  // Seminars
  {
    id: 'sem-1',
    category: 'Seminars',
    image: '/assets/seminars/seminar-1.jpg',
    title: 'College IT Workshop',
    desc: 'Interactive lab sessions across Mumbai campuses.',
  },
  {
    id: 'sem-2',
    category: 'Seminars',
    image: '/assets/seminars/seminar-2.jpg',
    title: 'Technical Guidance Seminar',
    desc: 'Live career mentoring on programming stacks.',
  },
  {
    id: 'sem-3',
    category: 'Seminars',
    image: '/assets/seminars/seminar-3.jpg',
    title: 'Data & Cloud Orientation',
    desc: 'Introducing college youth to analytics tools.',
  },
  {
    id: 'sem-aud',
    category: 'Seminars',
    image: '/assets/seminars/seminar-audience.jpg',
    title: 'Campus Tech Keynote',
    desc: 'Auditorium sessions with hundreds of eager participants.',
  },

  // Award
  {
    id: 'awd-1',
    category: 'Award',
    image: '/assets/awards/ashneer-award-main.jpg',
    title: 'National Award Presentation',
    desc: 'Honored with India’s Best Institute Award by Ashneer Grover.',
  },
  {
    id: 'awd-2',
    category: 'Award',
    image: '/assets/awards/ashneer-award-1.jpg',
    title: 'Award Ceremony Stage',
    desc: 'Institutional recognition on national stage.',
  },
  {
    id: 'awd-3',
    category: 'Award',
    image: '/assets/awards/ashneer-award-3.jpg',
    title: 'Trophy Celebration',
    desc: 'A milestone for quality computer education in Mumbai.',
  },

  // Events
  {
    id: 'evt-1',
    category: 'Events',
    image: '/assets/seminars/seminar-1.jpg',
    title: 'Annual Tech Meetup',
    desc: 'Student capstone presentations and faculty reviews.',
  },
  {
    id: 'evt-2',
    category: 'Events',
    image: '/assets/seminars/seminar-audience.jpg',
    title: 'Placement Orientation Day',
    desc: 'Connecting students directly with recruitment guidelines.',
  },
];

const galleryCategories = [
  'Our new institute',
  'Seminars',
  'Award',
  'Events',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Our new institute');
  const [selectedImage, setSelectedImage] = useState(null);

  // Dynamic lookup for new institute images:
  // Using Vite glob import so any photos copied to /public/assets/gallery/institute/ or src/assets/gallery/institute are automatically picked up!
  const instituteImagesGlob = import.meta.glob('/public/assets/gallery/institute/*.{png,jpg,jpeg,webp}', { eager: true });
  const dynamicInstitutePhotos = Object.keys(instituteImagesGlob).map((key, idx) => ({
    id: `dyn-inst-${idx}`,
    category: 'Our new institute',
    image: key.replace('/public', ''),
    title: 'Infodesk Institute Space',
    desc: 'New modern air-conditioned learning labs in Mumbai.',
  }));

  const allItems = [...dynamicInstitutePhotos, ...staticGalleryItems];
  const filteredItems = allItems.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16">
      {/* ─── HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-24">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-[clamp(36px,5vw,60px)] font-bold text-deep tracking-tight">
            Campus life and milestones.
          </h1>
          <p className="text-muted text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            A visual glimpse into our awards, campus workshops, events, and modern Mumbai learning spaces.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS & MASONRY GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-12 p-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/60 w-fit mx-auto max-w-full">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer select-none ${
                  isActive
                    ? 'text-white shadow-signature'
                    : 'text-deep/80 hover:text-deep hover:bg-white/60'
                }`}
              >
                <span className="relative z-10">{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="galleryFilterBubble"
                    className="absolute inset-0 rounded-full bg-primary -z-10 shadow-signature"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Content */}
        {filteredItems.length === 0 && activeCategory === 'Our new institute' ? (
          // Tasteful "Photos coming soon" empty state for new institute space
          <div className="max-w-md mx-auto text-center py-20 px-6 glass-panel rounded-panel shadow-signature space-y-4 relative overflow-hidden">
            <div className="w-16 h-16 rounded-full bg-soft/80 border border-white/80 text-primary mx-auto flex items-center justify-center shadow-sm">
              <Camera size={28} />
            </div>
            <h3 className="text-2xl font-bold text-deep">Photos coming soon.</h3>
            <p className="text-muted text-sm leading-relaxed">
              We are currently photographing our newly renovated high-tech Mumbai institute space. Photos of our new labs, air-conditioned lecture rooms, and student lounges will be published here shortly.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveCategory('Seminars')}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Explore college seminars while you wait →
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col"
                >
                  <div className="h-60 overflow-hidden bg-background relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2.5 rounded-full bg-white/90 backdrop-blur-md text-deep shadow-lg group-hover:scale-110 transition-transform">
                        <ExternalLink size={18} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-deep text-base group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-4">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={Boolean(selectedImage)}
        image={selectedImage?.image}
        title={selectedImage?.title}
        caption={selectedImage?.desc}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
