// @ts-nocheck
// Prisma 7 + Neon serverless for Vercel
// Connection string is passed in from the caller (route handler)
// to bypass Turbopack env var inlining in this module

let cachedClient: any = null;
let cachedUrl: string = "";

export async function getDbClient(dbUrl?: string) {
  // If already initialized, return cached client
  if (cachedClient && cachedUrl) return cachedClient;

  // Use passed URL or try to read from env
  const url = dbUrl || process.env.DATABASE_URL;

  if (!url || typeof url !== "string" || !url.startsWith("postgres")) {
    throw new Error(`Invalid DB URL. Type: ${typeof url}, starts: ${String(url).substring(0, 10)}`);
  }

  const { Pool } = await import("@neondatabase/serverless");
  const { PrismaNeon } = await import("@prisma/adapter-neon");
  const { PrismaClient } = await import("../generated/prisma/client");

  const pool = new Pool({ connectionString: url });
  const adapter = new PrismaNeon(pool);
  cachedClient = new PrismaClient({ adapter });
  cachedUrl = url;

  return cachedClient;
}
