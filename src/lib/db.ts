// @ts-nocheck
// Prisma 7 client with Neon HTTP adapter (serverless-compatible)
import { PrismaClient } from "@/generated/prisma/client";
import { neon } from "@neondatabase/serverless";
import { PrismaNeonHttp } from "@prisma/adapter-neon";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not set!");
    return null as unknown as PrismaClient;
  }

  const sql = neon(connectionString);
  const adapter = new PrismaNeonHttp(sql);

  return new PrismaClient({ adapter } as any);
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
