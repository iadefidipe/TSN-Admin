// middleware.ts
import { NextResponse } from "next/server"

export function middleware(request) {
  if (request.nextUrl.pathname === "/companies") {
    return NextResponse.redirect(new URL("/", request.url))
  }
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // if(request.nextUrl.pathname === '/profile') {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  if (request.nextUrl.pathname === "/about") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // if(request.nextUrl.pathname === '/messages') {
  //   return NextResponse.redirect(new URL('/profile/create', request.url))
  // }

  // if(request.nextUrl.pathname === '/assessment') {
  //   return NextResponse.redirect(new URL('/profile/create', request.url))
  // }

  if (request.nextUrl.pathname === "/how-it-works") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if (request.nextUrl.pathname === "/posts") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}
