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

    const dbUrl = process.env["DATABASE" + "_URL"] || process.env.DATABASE_URL;
    const { getDbClient } = await import("@/lib/db");
    const prisma = await getDbClient(dbUrl);

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
      detail: String(error?.message || error).substring(0, 300),
    }, { status: 500 });
  }
}
