import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

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
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
