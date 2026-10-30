/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      nav: '860px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#2448c9',     // royal blue (primary)
        deep: '#13266f',        // deep blue (headings, dark bands)
        soft: '#dfe5fb',        // soft blue (tints, chips, page headers)
        bright: '#4a6df0',      // bright blue (focus rings, glows)
        background: '#f6f5f1',  // off-white (page background)
        surface: '#fdfcf9',     // card surface
        ink: '#10173a',         // text primary
        muted: '#566086',       // text secondary
        line: '#dcdde6',        // line/border
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '22px',
        panel: '24px',
        band: '32px',
      },
      boxShadow: {
        signature: '0 18px 40px -22px rgba(19, 38, 111, 0.45)',
        card: '0 8px 24px -12px rgba(19, 38, 111, 0.15)',
        hover: '0 24px 48px -18px rgba(19, 38, 111, 0.25)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
