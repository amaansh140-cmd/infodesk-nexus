import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import LiquidEtherBackground from '@/components/LiquidEtherBackground';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'Infodesk Nexus — Premium Online Institute',
  description: 'Master advanced courses with Infodesk Nexus — a premium online institute portal for lifelong learners.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* LiquidEther WebGL Background */}
        <LiquidEtherBackground />

        {/* App Content */}
        <div className="app-content">
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
