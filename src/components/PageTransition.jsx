import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (shouldReduceMotion) {
    return <main>{children}</main>;
  }

  const isHome = pathname === '/';

  return (
    <motion.main
      key={pathname}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : isHome
            ? { opacity: 0 }
            : { opacity: 0, y: 18 }
      }
      animate={{ opacity: 1, y: 0 }}
      exit={
        shouldReduceMotion
          ? { opacity: 0 }
          : isHome
            ? { opacity: 0 }
            : { opacity: 0, y: -18 }
      }
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.main>
  );
}
