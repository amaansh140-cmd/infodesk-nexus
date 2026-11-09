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
1. **Particles** (`effectsConfig.dataScienceHeroParticles`): Full-bleed constellation hero background in deep blue (`#13266f` to `#0b1a52`) with 65 low-density particles (`connections={true}`, `particleColors={['#4a6df0', '#a5d8ff', '#ffffff']}`), pointer interaction disabled, wrapped in `<LazyMount>`.
2. **GradientText** (`effectsConfig.dataScienceGradientText`): Very large H1 (`clamp(48px, 6.5vw, 96px)`) in sentence case with royal blue `#a5d8ff` to bright blue `#4a6df0` slow sweep.
3. **TextType** (`effectsConfig.dataScienceTextType`): Terminal prompt typing Python commands (`df.groupby("city").mean()`, `model.fit(X_train, y_train)`, `st.line_chart(df)`).
4. **CardSwap** (`effectsConfig.dataScienceCardSwap`): Desktop 3D interactive stack with 3 cards (`model.py`, `training_loss.svg`, `pipeline_flow`). Swapped for a static code card on viewports `< 1024px` to eliminate mobile touch conflicts. Chart labels use neutral `Epoch` / `Loss` indicators with `Sample data` badge.
5. **StarBorder** (`effectsConfig.starBorder`): Primary "Book a free demo" CTA button and closing banner button with radiant edge border animation (`backgroundColor="#f6f5f1"`, `textColor="#13266f"`, `color="#4a6df0"`, `trailColor="#a5d8ff"`, `radius={999}`).
6. **LogoLoop** (`effectsConfig.dataScienceLogoLoop`): Infinite marquee ticker under hero displaying the 13 official brochure tools and technologies with smooth pause on hover.
7. **CountUp** (`effectsConfig.countUp`): 4 verified metrics directly derived from course data (12 months, 13 core tools, 12 modules, 4 branches).
8. **ScrollStack** (`effectsConfig.scrollStack`): Full-width 5-stage project workflow stack with window scroll pinning on desktop (`itemDistance={40}`, `itemStackDistance={12}`, `holdDistance={80}`, `dimAmount={0}`) and unpinned vertical stack on mobile.
9. **Threads** (`effectsConfig.dataScienceThreads`): Deep-blue generative AI wave background canvas wrapped in `<LazyMount>` (`color={[0.29, 0.43, 0.94]}`, `accentColor={[0.65, 0.85, 1.0]}`, `amplitude={1.1}`, `distance={0.35}`, `enableMouseInteraction={false}`, `lineCount={65}`, `thickness={2.5}`, `opacity={0.85}`).
10. **DecryptedText** (`effectsConfig.dataScienceDecryptedText`): "Generative AI, hands on" cypher reveal.
11. **SpotlightCard** (`effectsConfig.spotlightCard`): Single-border cursor spotlight cards on Informatica governance tracks, syllabus modules, and student stories.
12. **FlipCard** (`effectsConfig.dataScienceRelatedFlip`): Related courses flat flipping cards (`height={300}`, front: program summary, tools chips, duration, and single flip hint; back: curriculum preview & direct course link; keyboard focus ring enabled).

### Digital Marketing Course (`/courses/digital-marketing`)
1. **Aurora** (`effectsConfig.digitalMarketingAurora`): Deep blue (`#2448c9`, `#4a6df0`, `#a5d8ff`) fluid WebGL background canvas in hero, wrapped in `<LazyMount>` (`mouseInteraction={false}`).
2. **ShinyText** (`effectsConfig.digitalMarketingShinyText`): Soft metallic shine across the bold H1 heading.
3. **TrueFocus** (`effectsConfig.digitalMarketingTrueFocus`): Animated ice-blue bracket frame highlighting marketing core pillars ("Search Social Ads Content") with static fallback under reduced-motion.
4. **Stack** (`effectsConfig.digitalMarketingStack`): Desktop 3D deck of 4 marketing cards (SEO search result, SMM social post with zero numbers, Google Ads search banner, Email nurture sequence) with manual swipe/click and static mobile SEO fallback.
5. **Counter** (`effectsConfig.counter`): Bottom glass stats bar displaying 10 modules, 6 months, 4 branches, and 67 topics covered.
6. **CurvedLoop** (`effectsConfig.digitalMarketingCurvedLoop`): Soft-blue band ticker continuously looping 15 brochure marketing channels (static wrapping chips under reduced motion).
7. **GooeyNav as Tabs** (`effectsConfig.digitalMarketingGooeyNav`): Accessible 4-stage funnel navigation (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, and ArrowLeft/ArrowRight/Home/End keyboard navigation) with `noCanvas={true}` for zero-WebGL footprint.
8. **FlowingMenu** (`effectsConfig.digitalMarketingFlowingMenu`): Desktop liquid menu linking each of the 10 modules to its syllabus accordion with module index and topic count tags (clean vertical expandable list fallback on mobile).
9. **GlassIcons** (`effectsConfig.digitalMarketingGlassIcons`): Grid of 6 mastered marketing channels using royal blue, bright blue, and ice blue gradients with `noCanvas={true}` DOM/CSS mode.
10. **AnimatedList** (`effectsConfig.digitalMarketingAnimatedList`): Interactive spring-animated list of 8 practical classroom skills with module tags (static list fallback under reduced motion).
11. **ScrollReveal** (`effectsConfig.digitalMarketingScrollReveal`): Deep blue section with un-blurring sentence: *"SEO, social media, ads, content, WhatsApp and email. One course, 10 modules."*
12. **PixelCard** (`effectsConfig.digitalMarketingPixelCard`): Related courses (ADDM 12 months & Graphic Design 4 months) with interactive twinkling pixels on hover and direct syllabus links.
13. **LaserFlow** (`effectsConfig.digitalMarketingLaserFlow`): Closing demo banner WebGL background canvas in `<LazyMount>` with off-white `StarBorder` button.

### ⚠️ Brochure Discrepancies & Items Needing Confirmation
1. **SEM Module Copy Error (Pending Confirmation):**
   - On Page 4 of the official brochure (`Infodesk_Computer_Education.pdf`), the syllabus for **Module 3 - SEM (Search Engine Marketing)** mistakenly duplicates the exact bullets of Module 1 - SEO (*General SEO, SEO tools, Local SEO, etc.*).
   - Following strict truth-in-advertising guidelines, we did not repeat the duplicate SEO bullets and did not invent unverified paid search topics.
   - SEM is currently presented with 0 topic badges and the single approved summary line: `"Reach customers through paid search."`.
   - **Topics covered count:** Computed dynamically in code as **67 topics** across the remaining 9 brochure modules. Client must provide the true SEM curriculum topics to update this module and the topic tally.
2. **5 Unverified Overview Sidebar Claims:**
   - `"100% job assistance"` (Course overview sidebar - placement assistance guarantee)
   - `"Flexible morning, evening & weekend timings"` (Course overview sidebar - batch schedule flexibility)
   - `"Extra practice lab hours with mentor guidance"` (Course overview sidebar - complimentary lab access)
   - `"Personalized 1-on-1 doubt clearing sessions"` (Course overview sidebar - individual mentorship)
   - `"Small batches, in-person"` (Course overview sidebar - class size and delivery format)

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
