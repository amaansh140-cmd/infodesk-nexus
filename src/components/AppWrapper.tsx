'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import ConditionalNavbar from './ConditionalNavbar';
import LiquidEtherBackground from './LiquidEtherBackground';
import { useAuth } from '../context/AuthContext';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isLoading } = useAuth();
  
  // If we are on an admin or portal route, DO NOT render the landing page wrappers.
  // We want the dashboard to take up the full screen width and height natively.
  const isPortalRoute = pathname?.startsWith('/super-admin') || 
                        pathname?.startsWith('/sub-admin') ||
                        pathname?.startsWith('/faculty') ||
                        pathname?.startsWith('/student');

  useEffect(() => {
    if (isLoading) return;
    
    if (isPortalRoute && !user) {
      router.push('/login');
    } else if (user) {
      // Basic role protection
      if (pathname?.startsWith('/super-admin') && user.role !== 'superadmin') {
        router.push(`/${user.role === 'subadmin' ? 'sub-admin' : user.role}`);
      }
      if (pathname?.startsWith('/sub-admin') && user.role !== 'subadmin') {
        router.push(`/${user.role === 'superadmin' ? 'super-admin' : user.role}`);
      }
      if (pathname?.startsWith('/faculty') && user.role !== 'faculty') {
        router.push(`/${user.role === 'superadmin' ? 'super-admin' : user.role === 'subadmin' ? 'sub-admin' : 'student'}`);
      }
      if (pathname?.startsWith('/student') && user.role !== 'student') {
        router.push(`/${user.role === 'superadmin' ? 'super-admin' : user.role === 'subadmin' ? 'sub-admin' : 'faculty'}`);
      }
    }
  }, [isLoading, user, pathname, isPortalRoute, router]);

  if (isPortalRoute) {
    if (isLoading || !user) return null; // Avoid rendering flash before redirect

    return (
      <main style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
        {children}
      </main>
    );
  }
  
  // Otherwise, render the public landing page layout with the ethereal background
  return (
    <>
      <LiquidEtherBackground />
      <div className="app-content">
        <ConditionalNavbar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  );
}
