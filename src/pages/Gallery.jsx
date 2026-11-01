import React, { useState } from 'react';
import { Camera, ExternalLink, Move3d, Sparkles, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import DomeGallery from '../components/DomeGallery';

// Showcase images for the 3D Circular Dome Gallery
const domeShowcaseImages = [
  // Awards & National Recognition
  {
    src: '/assets/awards/ashneer-award-main.jpg',
    alt: "India's Best Institute Award Honored by Ashneer Grover",
  },
  {
    src: '/assets/awards/ashneer-award-1.jpg',
    alt: "Ashneer Grover presenting the national trophy to Infodesk",
  },
  {
    src: '/assets/awards/ashneer-award-3.jpg',
    alt: "Infodesk faculty team celebrating national award win",
  },

  // College Seminars & Campus Workshops
  {
    src: '/assets/seminars/seminar-1.jpg',
    alt: "Interactive college IT workshop in Mumbai",
  },
  {
    src: '/assets/seminars/seminar-2.jpg',
    alt: "Technical guidance seminar on full stack & programming stacks",
  },
  {
    src: '/assets/seminars/seminar-3.jpg',
    alt: "Data science and analytics orientation for students",
  },
  {
    src: '/assets/seminars/seminar-audience.jpg',
    alt: "Packed auditorium at campus tech guidance session",
  },

  // Global Industry Certifications
  {
    src: '/assets/certificates/microsoft-powerbi.jpg',
    alt: "Microsoft Certified: Power BI Data Analyst Associate",
  },
  {
    src: '/assets/certificates/snowflake-snowpro.jpg',
    alt: "Snowflake SnowPro Core Certification",
  },
  {
    src: '/assets/certificates/alteryx-designer.jpg',
    alt: "Alteryx Designer Core Certified Professional",
  },
  {
    src: '/assets/certificates/alteryx-server.jpg',
    alt: "Alteryx Server Administration Certified",
  },
  {
    src: '/assets/certificates/google-digital-garage.jpg',
    alt: "Google Digital Garage: Fundamentals of Digital Marketing",
  },

  // Alumni & Placements
  {
    src: '/assets/testimonials/faiza-kachwala.jpg',
    alt: "Faiza Kachwala - Placement Graduate",
  },
  {
    src: '/assets/testimonials/sonu-sharma.jpg',
    alt: "Sonu Sharma - Digital Marketing Graduate",
  },
  {
    src: '/assets/testimonials/rehan-shaikh.jpg',
    alt: "Rehan Shaikh - Full Stack Developer",
  },
  {
    src: '/assets/testimonials/komal-kamble.jpg',
    alt: "Komal Kamble - Data Analyst Graduate",
  },
];

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

  // Combined images for the 3D Circular Dome Gallery
  const allDomeImages = [
    ...dynamicInstitutePhotos.map((p) => ({ src: p.image, alt: p.title })),
    ...domeShowcaseImages,
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* ─── HEADER ─── */}
      <section className="bg-soft/60 border-b border-line/60 py-16 sm:py-20">
        <div className="max-w-content mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-line/80 text-xs font-semibold text-primary mb-3">
            <Sparkles size={13} className="text-primary" />
            <span>Campus Memories & Recognitions</span>
          </div>
          <h1 className="text-[clamp(36px,5vw,60px)] font-bold text-deep tracking-tight">
            Campus life and milestones.
          </h1>
          <p className="text-muted text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            A visual glimpse into our national awards, college workshops, industry certifications, and Mumbai training spaces.
          </p>
        </div>
      </section>

      {/* ─── 3D CIRCULAR DOME GALLERY SHOWCASE ─── */}
      <section className="max-w-content mx-auto px-6">
        <div className="bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-line/50">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft text-primary text-xs font-semibold mb-2">
                <Move3d size={13} className="text-primary" />
                <span>Interactive 360° Circular Dome</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-deep tracking-tight">
                Explore in 360 degrees.
              </h2>
              <p className="text-muted text-sm mt-1 max-w-xl">
                Drag anywhere to rotate the spherical dome. Click any tile to expand and inspect the photograph.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start md:self-auto bg-background px-4 py-2 rounded-full border border-line/70 text-xs text-muted font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Interactive 3D Sphere</span>
            </div>
          </div>

          {/* Dome Container */}
          <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[640px] rounded-2xl overflow-hidden mt-6 border border-line/70 bg-[#0c163b] shadow-inner">
            <DomeGallery
              images={allDomeImages}
              fit={0.55}
              minRadius={420}
              padFactor={0.16}
              overlayBlurColor="#0c163b"
              grayscale={false}
              openedImageWidth="min(88vw, 480px)"
              openedImageHeight="min(88vw, 480px)"
              imageBorderRadius="14px"
              openedImageBorderRadius="24px"
            />

            {/* Instruction pill floating at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium tracking-wide flex items-center gap-2 shadow-lg">
              <Compass size={13} className="animate-spin text-white/70" style={{ animationDuration: '6s' }} />
              <span>Drag to rotate • Click any tile to enlarge</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILTER TABS & PHOTO ARCHIVE GRID ─── */}
      <section className="max-w-content mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-deep tracking-tight">
            Browse by category.
          </h3>
          <p className="text-muted text-sm mt-1.5">
            Filter our event captures, campus seminars, and institutional honors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-deep/80 border border-line/80 hover:bg-soft/40'
                }`}
              >
                <span>{cat}</span>
                {isActive && (
                  <motion.div
                    layoutId="galleryFilterBubble"
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Content */}
        {filteredItems.length === 0 && activeCategory === 'Our new institute' ? (
          // Tasteful "Photos coming soon" empty state for new institute space
          <div className="max-w-md mx-auto text-center py-20 px-6 bg-surface border border-line/80 rounded-panel shadow-card space-y-4">
            <div className="w-16 h-16 rounded-full bg-soft text-primary mx-auto flex items-center justify-center">
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
                  className="bg-surface border border-line/80 rounded-2xl overflow-hidden shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col"
                >
                  <div className="h-60 overflow-hidden bg-background relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-white/90 text-deep shadow-lg">
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
