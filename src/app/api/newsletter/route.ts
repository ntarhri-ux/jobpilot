// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const url = process["env"]["DATABASE_URL"];
    if (!url) {
      return NextResponse.json({ error: "DB URL missing" }, { status: 500 });
    }

    // Use neon HTTP driver directly — no Pool, no Prisma
    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(url);

    const normalizedEmail = email.toLowerCase();

    // Check if already subscribed
    const existing = await sql`SELECT id FROM "Newsletter" WHERE email = ${normalizedEmail} LIMIT 1`;

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Sie sind bereits für den Newsletter angemeldet." },
        { status: 200 }
      );
    }

    // Generate a cuid-like ID
    const id = 'nl_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);

    // Subscribe
    await sql`INSERT INTO "Newsletter" (id, email, "createdAt") VALUES (${id}, ${normalizedEmail}, NOW())`;

    return NextResponse.json(
      { success: true, message: "Erfolgreich angemeldet! Sie erhalten ab sofort unseren Newsletter." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Newsletter error:", error?.message);
    return NextResponse.json({
      error: "Ein Fehler ist aufgetreten.",
      version: "v9-neon-direct",
      detail: String(error?.message || error).substring(0, 300),
    }, { status: 500 });
  }
}
