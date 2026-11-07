# Infodesk Computer Education — Official Marketing Website

> **Tagline:** Start IT here  
> **Head Office:** Mumbai, Maharashtra  
> **Accreditation:** Govt. Recognized · ISO 9001:2015 Certified Board · MSME Registered · Skill India

A modern, fast, multi-page marketing website for **Infodesk Computer Education**, built strictly according to the institute's official brochure (`Infodesk_Computer_Education.pdf`) with authentic assets, exact course syllabi, verified recognition, and real student testimonials.

---

## 🚀 Tech Stack

- **Framework:** React 19 + Vite 6
- **Routing:** React Router 7 (`BrowserRouter`)
- **Styling:** Tailwind CSS 3 with custom tokens
- **Animations:** Framer Motion 12 + React Bits (JS + CSS variant: ScrollStack, LogoLoop, Stepper, Masonry)
- **Icons:** Hugeicons (`@hugeicons/react`, `@hugeicons/core-free-icons`) & Lucide React
- **Typography:** Google Fonts (*Bricolage Grotesque* for headings, *Figtree* for body)
- **Data Layer:** Pure decoupled JavaScript files in `src/data/` (no backend required)

---

## 🎨 Design System

- **Primary Colors:**
  - Royal Blue: `#2448c9` (brand primary, buttons, accents)
  - Deep Blue: `#13266f` (headings, dark terminal card, demo banner)
  - Soft Blue: `#dfe5fb` (background tints, chips, filter tabs)
  - Bright Blue: `#4a6df0` (focus rings, button glows)
  - Off-White: `#f6f5f1` (page background)
  - Card Surface: `#fdfcf9` (cards, containers)
  - Ink: `#10173a` (body text)
  - Muted: `#566086` (secondary text)
  - Line: `#dcdde6` (borders, dividers)
- **Border Radii:** Cards `22px`, Panels `24px`, Hero Banners `32px`, Pill Buttons `9999px`
- **Shadow:** `0 18px 40px -22px rgba(19, 38, 111, 0.45)`
- **Mobile Responsive:** Breakpoint at `860px` (`nav:`) for sticky desktop navigation vs. animated mobile drawer. Tested on mobile (375px), tablet (768px), and desktop (1280px+).

---

## 📁 Project Structure

```
infodesk-nexus/
├── public/
│   ├── _redirects                     # Netlify SPA rewrite rule
│   └── assets/
│       ├── Infodesk_Computer_Education.pdf  # Source brochure (downloadable)
│       ├── logo.png                   # Official institute logo
│       ├── logo-badge.png             # Logo icon / favicon
│       ├── awards/                    # Ashneer Grover award photos
│       ├── certificates/              # Kareem Shah's 5 professional certificates
│       ├── partners/                  # 25 corporate recruitment partner logos
│       ├── recognition/               # Skill India, MSME, Digital India badges
│       ├── seminars/                  # College seminar photos
│       ├── testimonials/              # Verified student testimonial photos
│       └── institute/                 # Drop new space photos here (auto-detected)
├── src/
│   ├── App.jsx                        # Root routes and layouts
│   ├── index.css                      # Tailwind directives, focus rings, marquee
│   ├── main.jsx                       # React entry point
│   ├── components/
│   │   ├── Button.jsx                 # Pill button with hover shine
│   │   ├── CourseCard.jsx             # Course preview card with chips
│   │   ├── FloatingWhatsApp.jsx       # Fixed bottom-right WhatsApp chat pill
│   │   ├── Footer.jsx                 # Full footer with branches & copyright
│   │   ├── Header.jsx                 # Sticky blur nav with mobile drawer
│   │   ├── Lightbox.jsx               # Zoomable modal image viewer
│   │   ├── LogoLoop.jsx               # React Bits infinite hardware-accelerated ticker
│   │   ├── LogoLoop.css               # LogoLoop styles & fade masks
│   │   ├── Masonry.jsx                # React Bits responsive photo masonry grid
│   │   ├── Masonry.css                # Masonry layout & card styling
│   │   ├── ModuleAccordion.jsx        # Smooth animated course syllabus accordion
│   │   ├── PageTransition.jsx         # 18px slide up + fade transition
│   │   ├── ScrollReveal.jsx           # Viewport entry animation
│   │   ├── ScrollStack.jsx            # React Bits sticky stacked cards component
│   │   ├── ScrollStack.css            # ScrollStack pinning & perspective styles
│   │   ├── Stepper.jsx                # React Bits multi-step animated form
│   │   ├── Stepper.css                # Stepper layout, buttons & progress bar
│   │   └── TerminalCard.jsx           # 3D interactive CLI card with typing effect
│   ├── data/
│   │   ├── branches.js                # 4 Mumbai branches data
│   │   ├── courses.js                 # 18 complete courses, syllabi & semester roadmaps
│   │   ├── galleryManifest.json       # Auto-indexed gallery photo catalog
│   │   └── testimonials.js            # 4 authentic student reviews
│   └── pages/
│       ├── Home.jsx                   # Hero, 3D CLI, awards, marquee, demo CTA
│       ├── Courses.jsx                # Filterable course directory
│       ├── CourseDetail.jsx           # Module accordion, semester tabs, demo sticky card
│       ├── About.jsx                  # 4-step method, certificates gallery, seminars
│       ├── Placements.jsx             # 100% assistance, 25 logos, reviews slider
│       ├── Gallery.jsx                # Auto-glob photo viewer with category filters
│       ├── Contact.jsx                # Branch cards, phones, interactive demo form
│       └── NotFound.jsx               # Clean 404 page
├── vercel.json                        # Vercel SPA rewrite rule
├── vite.config.js                     # Chunk splitting and alias config
└── tailwind.config.js                 # Theme tokens and custom breakpoints
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node.js 22)
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173/`. Hot Module Replacement (HMR) is enabled.

### 3. Build for Production
```bash
npm run build
```
Generates optimized code-split production bundles in `dist/` with separate vendor chunks:
- `vendor-react`: React, React-DOM, React Router
- `vendor-motion`: Framer Motion
- `vendor-icons`: Lucide React

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub or GitLab.
2. In the [Vercel Dashboard](https://vercel.com/new), import the repository.
3. Select `Vite` as the Framework Preset (Root Directory: `./infodesk-nexus`).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy! The included `vercel.json` automatically ensures all client-side routes (`/courses`, `/about`, `/contact`, etc.) resolve to `/index.html`.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://app.netlify.com/).
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Deploy! The included `public/_redirects` ensures seamless SPA client-side routing.

---

## 📋 Content Placeholders & Verification Checklist

The following items are placeholders awaiting final details from the Infodesk administrative team:

| Key | File Location | Description & Action Required |
|---|---|---|
| `[EMAIL_PLACEHOLDER]` | `src/data/branches.js` | Placeholder `admissions@infodeskcompedu.com`. Update with official institute email. |
| `[STREET_ADDRESS_PLACEHOLDER]` | `src/data/branches.js` | Street addresses for **Behram Baug**, **Jogeshwari West**, and **Motilal Nagar** branches. (Note: **Goregaon West** has the official address from the brochure). |
| `[MAPS_LINK_PLACEHOLDER]` | `src/data/branches.js` | Google Maps location URLs for each branch. |
| `[HEAD_OFFICE_NOTE]` | `src/data/branches.js` | Behram Baug is marked as Head Office in brochure header; Goregaon West is listed on certificates. Update if needed. |
| `[PLACEMENT_PROCESS_PLACEHOLDER]` | `src/pages/Placements.jsx` | 4-step placement pipeline (Resume & Portfolio, Mock Interviews, Campus Drives, Offer Letter). |
| `[GALLERY_CAPTIONS_PLACEHOLDER]` | `src/pages/Gallery.jsx` & `src/data/galleryManifest.json` | Authentic captions and descriptions for individual gallery images. |
| `[OUR_NEW_INSTITUTE_PHOTOS]` | `public/assets/gallery/our-new-institute/` | Photos of the new campus / facility. When dropped in, they will automatically appear in the Gallery tab. |
| `[CONTACT_FORM_BACKEND]` | `src/pages/Contact.jsx` | The interactive 3-step form currently routes validated enquiries to official WhatsApp (`919920108967`) with pre-filled parameters. To integrate email dispatch via Formspree or EmailJS, replace the `handleFinalSubmit` handler. |

---

## ⚡ React Bits Components Integration

The application integrates components from **React Bits** (JS + CSS variant) with runtime flags configured in `src/config/effects.js`:

### Data Science Course (`/courses/data-science`)
1. **GradientText** (`effectsConfig.dataScienceGradientText`): Royal blue `#2448c9` to bright blue `#4a6df0` slow sweep on the main H1. Falls back to solid text on reduced motion.
2. **Particles** (`effectsConfig.dataScienceParticles`): Hero right side "Data lab" card background with constellation lines (`connections={true}`), 50 low-density particles (`particleColors={['#4a6df0', '#a5d8ff', '#ffffff']}`), pointer interaction disabled (`moveParticlesOnHover={false}`, `clickBurst={false}`), wrapped in `<LazyMount>`. Strictly 1 WebGL canvas effect on the page.
3. **TextType** (`effectsConfig.dataScienceTextType`): Terminal card typing looping lines (`df = pd.read_csv("sales.csv")`, `df.groupby("city").mean()`, `model.fit(X_train, y_train)`, `st.line_chart(df)`), ice-white with bright-blue `>>>` prompt, first line visible immediately.
4. **DecryptedText** (`effectsConfig.dataScienceDecryptedText`): Card caption `"Raw data to real decisions."` (resolves once on first view).
5. **CountUp** (`effectsConfig.countUp`): Tools card header count (`{course.tools.length}` = 13 technologies).
6. **LogoLoop** (`effectsConfig.dataScienceToolsLoop`): Tools card chip row (soft-blue chips, 13 brochure tools, pause on hover, fade edges; static wrap grid on reduced motion).
7. **RubberSegment** (`effectsConfig.dataScienceMlScatter`): Card `"Machine learning in ten seconds"` (Supervised, Unsupervised, Generative) controlling an interactive deterministic 50-point SVG scatter plot with live accessible captions.
8. **SpotlightCard** (`effectsConfig.dataScienceSpotlight`): Soft royal-blue spotlight (`rgba(36, 72, 201, 0.08)`) on syllabus module cards.
9. **AnimatedContent**: Staggered scroll reveals and smooth entry for the project flow stages and syllabus modules.

### Unverified Copy Items (Confirm or Supply)
The following marketing copy items are present in the Course Detail pages and should be confirmed or supplied by the Infodesk team:
1. `"Flexible morning, evening & weekend timings"`
2. `"Personalized 1-on-1 doubt clearing sessions"`
3. `"Small batches, in-person"`
4. `"Step-by-step topic breakdown verified against our official curriculum"`

---

## 📸 Adding New Photos to the Gallery

The Gallery uses a pre-generated manifest (`src/data/galleryManifest.json`) and category folders under `public/assets/gallery/`:
1. Drop new photos into the appropriate category folder:
   - `public/assets/gallery/seminars/`
   - `public/assets/gallery/award/`
   - `public/assets/gallery/events/`
   - `public/assets/gallery/our-new-institute/`
2. Run `node scripts/index-gallery.cjs` (or update `src/data/galleryManifest.json`) to index new files.
3. The photos will immediately appear with full lightbox and Masonry layout!

---

© 2026 Infodesk Computer Education. All rights reserved.
