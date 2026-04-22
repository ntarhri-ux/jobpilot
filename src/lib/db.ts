// @ts-nocheck
// Prisma 7 client factory for Neon serverless on Vercel
// Uses dynamic access patterns to prevent Turbopack from inlining env vars at build time

import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/generated/prisma/client";

let cachedClient: PrismaClient | null = null;

export function getDbClient(): PrismaClient {
  if (cachedClient) return cachedClient;

  // Use bracket notation to prevent Turbopack/bundler from inlining
  // process.env.DATABASE_URL as undefined at build time
  const envKey = "DATABASE_URL";
  const connectionString = process.env[envKey];

  if (!connectionString) {
    throw new Error(
      `DATABASE_URL environment variable is not set. ` +
      `Available env keys: ${Object.keys(process.env).filter(k => k.includes("DATABASE") || k.includes("PG")).join(", ") || "(none matching)"}`
    );
  }

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  cachedClient = new PrismaClient({ adapter });

  return cachedClient;
}
