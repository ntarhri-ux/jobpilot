// @ts-nocheck
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Das Passwort muss mindestens 6 Zeichen lang sein." },
        { status: 400 }
      );
    }

    const url = process["env"]["DATABASE_URL"];
    if (!url) {
      return NextResponse.json({ error: "Server-Konfigurationsfehler." }, { status: 500 });
    }

    const { neon } = await import("@neondatabase/serverless");
    const sql = neon(url);

    const normalizedEmail = email.toLowerCase();

    // Check if user already exists
    const existing = await sql`SELECT id FROM "User" WHERE email = ${normalizedEmail} LIMIT 1`;

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "Diese E-Mail-Adresse ist bereits registriert." },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate ID
    const id = 'usr_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
    const userRole = role === "employer" ? "employer" : "jobseeker";

    // Create user
    const created = await sql`
      INSERT INTO "User" (id, email, password, name, role, "createdAt", "updatedAt")
      VALUES (${id}, ${normalizedEmail}, ${hashedPassword}, ${name}, ${userRole}, NOW(), NOW())
      RETURNING id, email, name, role
    `;

    const user = created[0];

    // Create JWT token
    const token = signToken({
      userId: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    const response = NextResponse.json(
      {
        success: true,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
      { status: 201 }
    );

    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process["env"]["NODE_ENV"] === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error("Register error:", error?.message);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}
