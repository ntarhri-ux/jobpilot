// @ts-nocheck
// Prisma 7 client factory for Neon serverless on Vercel
// Uses HTTP adapter (neon + PrismaNeonHttp) — works on all serverless runtimes
// No WebSocket needed, purely HTTP/fetch based

import { neon } from "@neondatabase/serverless";
import { PrismaNeonHttp } from "@prisma/adapter-neon";
import { PrismaClient } from "@/generated/prisma/client";

let cachedClient: PrismaClient | null = null;

export function getDbClient(): PrismaClient {
  if (cachedClient) return cachedClient;

  // Dynamic key to prevent Turbopack from inlining env vars at build time
  const envKey = "DATABASE" + "_URL";
  const connectionString = process["env"][envKey];

  if (!connectionString) {
    throw new Error(
      `DATABASE_URL is not set. Keys: ${Object.keys(process["env"]).filter(k => k.includes("DATA")).join(", ") || "none"}`
    );
  }

  // Use HTTP-based neon() driver instead of WebSocket Pool
  const sql = neon(connectionString);
  const adapter = new PrismaNeonHttp(sql);
  cachedClient = new PrismaClient({ adapter });

  return cachedClient;
}
