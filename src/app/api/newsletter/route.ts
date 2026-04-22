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

    const { getDbClient } = await import("@/lib/db");
    const prisma = await getDbClient();

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
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      debug: process.env.NODE_ENV !== "production" ? error?.message : undefined,
    }, { status: 500 });
  }
}
