// @ts-nocheck
// Prisma 7 client with Neon serverless adapter for Vercel
// IMPORTANT: Lazy initialization to ensure env vars are available at runtime
import { PrismaClient } from "@/generated/prisma/client";

let _prisma: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (_prisma) return _prisma;

  const connectionString = process.env.DATABASE_URL;

  console.log("[db] DATABASE_URL set:", !!connectionString);
  console.log("[db] DATABASE_URL type:", typeof connectionString);
  if (connectionString) {
    console.log("[db] DATABASE_URL starts:", connectionString.substring(0, 25));
  }

  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is required");
  }

  // Dynamic require to avoid bundling issues
  const { Pool } = require("@neondatabase/serverless");
  const { PrismaNeon } = require("@prisma/adapter-neon");

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  _prisma = new PrismaClient({ adapter });
  return _prisma;
}

// Export as a getter proxy so prisma is lazily initialized on first use
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient();
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});
