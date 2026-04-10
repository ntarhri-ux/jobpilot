// @ts-nocheck
// Prisma 7 client with Neon serverless adapter for Vercel
// Lazy initialization with dynamic imports for serverless compatibility
import { PrismaClient } from "@/generated/prisma/client";
import { Pool } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";

let _prisma: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (_prisma) return _prisma;

  const connectionString = process.env.DATABASE_URL;

  console.log("[db] Initializing PrismaClient...");
  console.log("[db] DATABASE_URL set:", !!connectionString);
  console.log("[db] typeof:", typeof connectionString);

  if (!connectionString) {
    console.error("[db] DATABASE_URL is missing!");
    throw new Error("DATABASE_URL environment variable is required");
  }

  console.log("[db] Creating Pool with:", connectionString.substring(0, 30) + "...");

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);

  _prisma = new PrismaClient({ adapter });
  console.log("[db] PrismaClient created successfully");
  return _prisma;
}

// For backward compatibility - but this will be lazy
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrisma();
    const value = (client as any)[prop];
    if (typeof value === "function") {
      return value.bind(client);
    }
    return value;
  },
});
