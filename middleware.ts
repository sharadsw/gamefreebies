import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { logger } from "./lib/utils";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // Request logger
  logger.info({ method: req.method, path: pathname, data: req.body });

  // Restrict usage on GET /api/subscribers
  if (pathname.startsWith(`/api/subscribers`) && req.method === "GET") {
    if (
      !req.headers.get("referer")?.includes(process.env.SERVICE_URL as string)
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
};
