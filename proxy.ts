import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('xano_auth_token')?.value;
  const userCredentials = request.cookies.get('user_data')?.value;
  const { pathname } = request.nextUrl;

  const isPublicRoute = pathname === '/' ||
      pathname.startsWith('/auth') ||
      pathname.startsWith('/tasker/posts') ||
      pathname.startsWith('/create-post') ||
      pathname.startsWith('/tasker/create-ad') ||
      pathname.startsWith('/dashboard');
  const isInternal = pathname.startsWith('/_next') || pathname.includes('.');

  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!isPublicRoute && !isInternal && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  if(userCredentials) {
    const user = JSON.parse(userCredentials);

    if(pathname.startsWith('/poster') && user.role === 'tasker') {
      return NextResponse.redirect(new URL('/permission-error', request.url));
    }

    if(pathname.startsWith('/tasker') && user.role === 'poster') {
      return NextResponse.redirect(new URL('/permission-error', request.url));
    }
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