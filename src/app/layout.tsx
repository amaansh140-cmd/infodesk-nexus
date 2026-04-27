import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import LiquidEtherBackground from '@/components/LiquidEtherBackground';
import PageTransition from '@/components/PageTransition';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Infodesk Nexus — Premium Online Institute',
  description: 'Master advanced courses with Infodesk Nexus — a premium online institute portal for lifelong learners.',
};

import { CartProvider } from '@/context/CartContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <CartProvider>
          {/* LiquidEther WebGL Background */}
          <LiquidEtherBackground />

          {/* App Content */}
          <div className="app-content">
            <Navbar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
