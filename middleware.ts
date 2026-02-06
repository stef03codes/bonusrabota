import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('xano_auth_token')?.value;
  const { pathname } = request.nextUrl;

  // 1. Define your path types
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isProtectedPage = pathname.startsWith('/dashboard');

  // 2. Logic: If user is logged in and tries to access /login, send them to /dashboard
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 3. Logic: If user is NOT logged in and tries to access /dashboard, send them to /login
  if (isProtectedPage && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};