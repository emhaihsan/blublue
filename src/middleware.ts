import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // For now, we'll implement basic middleware
  // In a real app, you'd want to check for valid wallet signatures or tokens
  return NextResponse.next()
}
 
export const config = {
  matcher: '/dashboard/:path*',
}
