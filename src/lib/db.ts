// @ts-nocheck
// Prisma 7 client factory for Neon serverless on Vercel
// Each API call creates a fresh client to avoid build-time bundling issues

import { PrismaClient } from "@/generated/prisma/client";

export async function createPrismaClient(): Promise<PrismaClient> {
  const connectionString = process.env.DATABASE_URL;

  console.log("[db] DATABASE_URL available:", !!connectionString);

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const { Pool } = await import("@neondatabase/serverless");
  const { PrismaNeon } = await import("@prisma/adapter-neon");

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  return new PrismaClient({ adapter });
}
