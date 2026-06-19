'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide Navbar on dashboard/admin routes
  if (pathname?.startsWith('/super-admin')) {
    return null;
  }
  
  return <Navbar />;
}
