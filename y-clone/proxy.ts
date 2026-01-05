// proxy.ts (in the project root)
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request: NextRequest) {
  const jwtCookie = request.cookies.get("jwt")?.value;

  // no cookie -> go login
  if (!jwtCookie) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // cookie exists -> verify
  try {
    jwt.verify(jwtCookie, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
