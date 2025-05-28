import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const allowedPaths = ["/", "/skills", "/projects", "/experience"];

  if (!allowedPaths.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - static files (_next, images, etc.)
     * - favicon
     */
    "/((?!_next|favicon.ico|images|icons|fonts).*)",
  ],
};
