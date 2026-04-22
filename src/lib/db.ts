// @ts-nocheck
// Prisma 7 client factory for Neon serverless on Vercel
// ALL imports are dynamic to prevent Turbopack from bundling/replacing them

let cachedClient: any = null;

export async function getDbClient() {
  if (cachedClient) return cachedClient;

  // Dynamic imports — bypasses Turbopack bundling entirely
  const neonMod = await import("@neondatabase/serverless");
  const adapterMod = await import("@prisma/adapter-neon");
  const prismaMod = await import("@/generated/prisma/client");

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const sql = neonMod.neon(connectionString);
  const adapter = new adapterMod.PrismaNeonHttp(sql);
  cachedClient = new prismaMod.PrismaClient({ adapter });

  return cachedClient;
}
