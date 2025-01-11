import { NextResponse } from "next/server";
import manifest from "./__manifest";

export async function GET() {
  return new NextResponse(JSON.stringify(manifest()), {
    headers: {
      "Content-Type": "application/manifest+json",
    },
  });
}

export const dynamic = "force-static";
