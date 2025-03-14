import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookieStore = cookies() 
    const token = cookieStore.get("foo_token") 

    if(token){
        const response = NextResponse.next({})
        return response
    }
    // cookieStore.set("foo_token" , "1234example")
    return NextResponse.redirect(new URL('/', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/grants' , '/founders'],
}