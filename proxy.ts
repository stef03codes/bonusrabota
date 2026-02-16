import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('xano_auth_token')?.value;
  const { pathname } = request.nextUrl;

  const isPublicRoute = pathname === '/' || pathname.startsWith('/auth');
  const isInternal = pathname.startsWith('/_next') || pathname.includes('.');

  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/welcome', request.url));
  }

  if (!isPublicRoute && !isInternal && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
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