// @ts-nocheck
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const url = process["env"]["DATABASE_URL"];

    if (!url) {
      return NextResponse.json({ error: "No DATABASE_URL", type: typeof url });
    }

    // Test 1: Can we create a Pool with the URL?
    const { Pool } = await import("@neondatabase/serverless");
    const pool = new Pool({ connectionString: url });

    // Test 2: Can we query?
    const result = await pool.query("SELECT 1 as test");

    return NextResponse.json({
      success: true,
      urlPrefix: url.substring(0, 25),
      queryResult: result.rows[0],
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message?.substring(0, 300),
      stack: error.stack?.substring(0, 200),
    }, { status: 500 });
  }
}
