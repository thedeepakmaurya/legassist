import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("authToken");
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  if (!token && pathname.startsWith("/dashboard")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  const blockedForAuth = ["/", "/signin", "/signup"];
  if (token && blockedForAuth.includes(pathname)) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/", "/signin", "/signup"],
};
