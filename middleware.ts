import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "./lib/utils";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;
  let body = {};
  try {
    body = await req.json();
  } catch (error) {
    // pass
  }

  console.log(req);

  // Request logger
  logger.info({
    method: req.method,
    path: pathname,
    body: body,
    params: req.nextUrl.searchParams,
  }, "Incoming request");

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
};
