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

    // ALL DB logic inline — no external imports that bundler can destroy
    const url = process["env"]["DATABASE_URL"];
    if (!url) {
      return NextResponse.json({ error: "DB config missing", version: "v8-inline" }, { status: 500 });
    }

    const { Pool } = await import("@neondatabase/serverless");
    const { PrismaNeon } = await import("@prisma/adapter-neon");
    const { PrismaClient } = await import("../../../generated/prisma/client");

    const pool = new Pool({ connectionString: url });
    const adapter = new PrismaNeon(pool);
    const prisma = new PrismaClient({ adapter });

    // Check if already subscribed
    const existing = await prisma.newsletter.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Sie sind bereits für den Newsletter angemeldet." },
        { status: 200 }
      );
    }

    // Subscribe
    await prisma.newsletter.create({
      data: { email: email.toLowerCase() },
    });

    return NextResponse.json(
      { success: true, message: "Erfolgreich angemeldet! Sie erhalten ab sofort unseren Newsletter." },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Newsletter error:", error?.message);
    return NextResponse.json({
      error: "Ein Fehler ist aufgetreten.",
      version: "v8-inline",
      detail: String(error?.message || error).substring(0, 300),
    }, { status: 500 });
  }
}
