import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_infodesk_key_2026_fallback';
const key = new TextEncoder().encode(JWT_SECRET);

// Protected dashboard routes that strictly require authentication
const PORTAL_ROLES: Record<string, string> = {
  '/super-admin': 'superadmin',
  '/sub-admin': 'subadmin',
  '/faculty': 'faculty',
  '/student': 'student',
};

// Protected API routes that require authentication
const PROTECTED_API_PREFIXES = [
  '/api/admins',
  '/api/admin',
  '/api/faculties',
  '/api/students',
  '/api/attendance',
  '/api/staff-attendance',
  '/api/student-daily-attendance',
  '/api/lecture-plans',
  '/api/device-code',
  '/api/auth/impersonate',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. Exclude public static assets and system files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.') // Static files (.png, .css, .js, .svg, etc.)
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('nexus_session')?.value;

  // 2. Check if this is the login page
  if (pathname === '/login' || pathname.startsWith('/login/')) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token, key);
        const role = payload.role as string;
        // If already logged in, redirect straight to their dashboard
        if (role === 'superadmin') return NextResponse.redirect(new URL('/super-admin', request.url));
        if (role === 'subadmin') return NextResponse.redirect(new URL('/sub-admin', request.url));
        if (role === 'faculty') return NextResponse.redirect(new URL('/faculty', request.url));
        if (role === 'student') return NextResponse.redirect(new URL('/student', request.url));
      } catch {
        // Token is invalid/expired; clear it and let them view login page
        const response = NextResponse.next();
        response.cookies.delete('nexus_session');
        return response;
      }
    }
    return NextResponse.next();
  }

  // 3. Check if this is a public website page
  const isPublicPage = 
    pathname === '/' ||
    pathname.startsWith('/courses') ||
    pathname.startsWith('/playground') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/learn');

  if (isPublicPage) {
    return NextResponse.next();
  }

  // 4. Check if this is an API route
  if (pathname.startsWith('/api/')) {
    const isProtectedApi = PROTECTED_API_PREFIXES.some(prefix => pathname.startsWith(prefix));
    
    if (!isProtectedApi) {
      // Public API (e.g. /api/auth, /api/auth/logout, /api/auth/me, /api/courses, /api/branches, /api/notices, /api/execute, /api/razorpay)
      return NextResponse.next();
    }

    // Protected API check
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
      const { payload } = await jwtVerify(token, key);
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-role', payload.role as string);
      requestHeaders.set('x-user-id', payload.id as string);
      if (payload.branch) {
        requestHeaders.set('x-user-branch', payload.branch as string);
      }
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
  }

  // 5. Check if this is a protected dashboard portal route
  const portalEntry = Object.entries(PORTAL_ROLES).find(([prefix]) => pathname.startsWith(prefix));

  if (portalEntry) {
    const [prefix, expectedRole] = portalEntry;

    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, key);
      const role = payload.role as string;

      // Superadmin has access everywhere, otherwise role must match
      if (role !== expectedRole && role !== 'superadmin') {
        // Redirect to their own dashboard instead of login loop
        const userDashboard = 
          role === 'superadmin' ? '/super-admin' :
          role === 'subadmin' ? '/sub-admin' :
          role === 'faculty' ? '/faculty' :
          role === 'student' ? '/student' : '/login';
        return NextResponse.redirect(new URL(userDashboard, request.url));
      }

      return NextResponse.next();
    } catch {
      // Invalid or expired token on protected route -> clear cookie and redirect to login
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('nexus_session');
      return response;
    }
  }

  // Any other route
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
