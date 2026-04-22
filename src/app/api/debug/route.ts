import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const envKey = "DATABASE" + "_URL";
  const url = process["env"][envKey];

  return NextResponse.json({
    hasDbUrl: !!url,
    urlPrefix: url ? url.substring(0, 20) + "..." : "NOT SET",
    nodeEnv: process.env.NODE_ENV,
    envKeysWithDb: Object.keys(process["env"]).filter(k =>
      k.includes("DATA") || k.includes("PG") || k.includes("NEON")
    ),
  });
}
