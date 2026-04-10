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

    console.log("DATABASE_URL set:", !!process.env.DATABASE_URL);
    console.log("DATABASE_URL type:", typeof process.env.DATABASE_URL);
    console.log("DATABASE_URL starts:", process.env.DATABASE_URL?.substring(0, 20));

    const { prisma } = await import("@/lib/db");

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
    console.error("Newsletter error:", error);
    const message = error?.message?.includes("connect")
      ? "Datenbankverbindung fehlgeschlagen. Bitte versuchen Sie es erneut."
      : "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
