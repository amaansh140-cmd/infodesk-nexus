import type { Metadata } from 'next';
import './globals.css';
import ConditionalNavbar from '@/components/ConditionalNavbar';
import AppWrapper from '@/components/AppWrapper';
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Infodesk Computer Education | E-Learning Portal",
  description: "Advanced multi-tenant e-learning management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <AppWrapper>
            {children}
          </AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
