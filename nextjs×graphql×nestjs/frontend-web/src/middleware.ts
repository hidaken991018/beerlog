import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // console.log(res, new URL('/', req.url));
  // console.log(req);
  // if (res.status === 404) {
  // return NextResponse.rewrite(new URL('/post', req.url));
  // }
}
