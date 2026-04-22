// @ts-nocheck
// Prisma 7 + Neon serverless for Vercel
// ALL imports dynamic, env var access uses anti-inlining tricks

let cachedClient: any = null;

export async function getDbClient() {
  if (cachedClient) return cachedClient;

  // CRITICAL: prevent Turbopack from statically analyzing these imports
  const neonPkg = "@neondatabase/serverless";
  const adapterPkg = "@prisma/adapter-neon";
  const prismaPkg = "../generated/prisma/client";

  const neonMod = await import(/* webpackIgnore: true */ neonPkg);
  const adapterMod = await import(/* webpackIgnore: true */ adapterPkg);
  const prismaMod = await import(prismaPkg);

  // Anti-inlining: build the key dynamically so Turbopack can't replace it
  const key = ["DATABASE", "URL"].join("_");
  const url = process["env"][key];

  if (!url || typeof url !== "string") {
    throw new Error(`DATABASE_URL not set or not a string. Type: ${typeof url}`);
  }

  // Pool-based approach (WebSocket) — works on Node.js 18+ (Vercel Functions)
  const pool = new neonMod.Pool({ connectionString: url });
  const adapter = new adapterMod.PrismaNeon(pool);
  cachedClient = new prismaMod.PrismaClient({ adapter });

  return cachedClient;
}
