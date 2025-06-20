import { NextRequest, NextResponse } from "next/server";
// import { isAuthenticated } from "@/services/auth.service";

const protectedRoutes = ["/"];

export function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const token = request.cookies.get("accessToken")?.value;
  
  if (!token && protectedRoutes.includes(currentPath)) {
    const absoluteUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  if (token && currentPath === "/login") {
    return NextResponse.redirect(new URL("/", request.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/"],
};