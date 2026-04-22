// @ts-nocheck
// Prisma 7 + Neon serverless for Vercel
// Dynamic imports + env var anti-inlining

let cachedClient: any = null;

export async function getDbClient() {
  if (cachedClient) return cachedClient;

  const { Pool } = await import("@neondatabase/serverless");
  const { PrismaNeon } = await import("@prisma/adapter-neon");
  const { PrismaClient } = await import("../generated/prisma/client");

  // Anti-inlining: construct the key at runtime so bundler can't replace it
  const k = ["DATA", "BASE", "_", "URL"].join("");
  const url = process["env"][k];

  if (!url || typeof url !== "string") {
    throw new Error(`ENV ${k} not set. Type: ${typeof url}. Keys: ${Object.keys(process["env"]).filter(x => x.includes("DATA")).join(",")}`);
  }

  const pool = new Pool({ connectionString: url });
  const adapter = new PrismaNeon(pool);
  cachedClient = new PrismaClient({ adapter });

  return cachedClient;
}
