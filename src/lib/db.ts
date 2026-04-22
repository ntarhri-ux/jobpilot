// @ts-nocheck
// Prisma 7 + Neon serverless for Vercel
// Uses globalThis to cache client across requests

let _client: any = null;

export async function getDbClient(connectionString: string) {
  if (_client) return _client;

  const { Pool } = await import("@neondatabase/serverless");
  const { PrismaNeon } = await import("@prisma/adapter-neon");
  const { PrismaClient } = await import("../generated/prisma/client");

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  _client = new PrismaClient({ adapter });

  return _client;
}
