import { NextResponse } from "next/server";

export function middleware(request) {

    const isLoggedIn = request.cookies.get('user_login')?.value;

    // redirect if user not logged in
    if (!isLoggedIn && request.nextUrl.pathname.startsWith('/my-dashboard')) {
        return NextResponse.redirect(new URL('/login-register', request.url));
    }

    // redirect if user already logged in
    if (isLoggedIn && request.nextUrl.pathname.startsWith('/login-register')) {
        return NextResponse.redirect(new URL('/my-dashboard', request.url));
    }

    return NextResponse.next();
}