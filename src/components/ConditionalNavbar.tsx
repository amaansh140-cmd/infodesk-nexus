'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide Navbar on dashboard/portal routes and login page
  if (
    pathname?.startsWith('/super-admin') ||
    pathname?.startsWith('/sub-admin') ||
    pathname?.startsWith('/faculty') ||
    pathname?.startsWith('/student') ||
    pathname === '/login'
  ) {
    return null;
  }
  
  return <Navbar />;
}
