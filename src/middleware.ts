import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_infodesk_key_2026_fallback';
const key = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude public paths and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/api/auth') ||
    pathname === '/' ||
    pathname.includes('.') // Exclude static assets like .png, .css
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get('nexus_session')?.value;
  
  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const { payload } = await jwtVerify(token, key);
    const role = payload.role as string;
    
    // Role-Based Access Control (RBAC) Checks
    if (pathname.startsWith('/super-admin') && role !== 'superadmin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (pathname.startsWith('/sub-admin') && role !== 'subadmin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (pathname.startsWith('/faculty') && role !== 'faculty') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    if (pathname.startsWith('/student') && role !== 'student') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    // Attach verified context for API routes
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-role', role);
    requestHeaders.set('x-user-id', payload.id as string);
    if (payload.branch) {
      requestHeaders.set('x-user-branch', payload.branch as string);
    }

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

  } catch (error) {
    // Token is invalid or expired
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Unauthorized: Invalid token' }, { status: 401 });
    }
    // Delete the invalid cookie and redirect
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('nexus_session');
    return response;
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
