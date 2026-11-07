import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

function optimizeHugeicons() {
  return {
    name: 'optimize-hugeicons',
    enforce: 'pre',
    transform(code, id) {
      if (id.includes('/src/') && code.includes('@hugeicons/core-free-icons')) {
        return code.replace(
          /import\s*\{([^}]+)\}\s*from\s*['"]@hugeicons\/core-free-icons['"];?/g,
          (match, imports) => {
            const names = imports.split(/\s*,\s*|\s+/).map((s) => s.trim()).filter(Boolean);
            return names.map((name) => `import ${name} from '@hugeicons/core-free-icons/${name}';`).join('\n');
          }
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [optimizeHugeicons(), react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion', 'motion'],
          'vendor-gsap': ['gsap'],
          'vendor-three': ['three'],
          'vendor-icons': ['lucide-react', '@hugeicons/react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
