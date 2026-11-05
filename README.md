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

The application integrates four components from **React Bits** (JS + CSS variant):
1. **ScrollStack** (`/courses/:slug`):
   - Renders "Your semester-by-semester roadmap" for 4 semester-based programs: **ADSE**, **ADGWA**, **ADAT**, and **DCA**.
   - Features pinned stacked cards with 22px border radius, topic chips, and numeral markers.
   - Gracefully falls back to a non-sticky vertical stack on mobile screens (< 768px). Modular courses retain `ModuleAccordion`.
2. **LogoLoop**:
   - **Placements Page (`/placements`)**: Infinite marquee showcasing 25 corporate recruitment partner logos with pause-on-hover, subtle scale effect, and side fade masks. Automatically renders an accessible static grid when `prefers-reduced-motion` is active.
   - **Home Page (`/`)**: Highlighting 12 core industry tools (Python, Power BI, Tableau, SQL, Excel, Tally Prime, Photoshop, Premiere Pro, After Effects, Figma, WordPress, Java) as soft-blue interactive chips.
3. **Stepper** (`/contact`):
   - Interactive 3-step admission and demo booking flow inside the deep-blue card.
   - Validates Indian 10-digit mobile numbers (`/^[6-9]\d{9}$/`), selects course options, and configures preferred branch and slot before opening WhatsApp with full details.
4. **Masonry**:
   - **Gallery Page (`/gallery`)**: Fluid photo layout supporting category filtering (**All**, **College seminars**, **Award ceremony**, **Campus events**, **Our new institute**). Includes a custom empty state when no photos are present in a category.
   - **About Page (`/about`)**: Dynamic masonry grid showcasing college seminar sessions across Mumbai colleges.

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
