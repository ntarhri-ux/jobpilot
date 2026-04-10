/**
 * Datenbank-Setup-Skript für JobPilot Hessen
 *
 * Ausführen mit: npx tsx scripts/setup-db.ts
 *
 * Voraussetzung: DATABASE_URL muss in .env gesetzt sein
 */

import "dotenv/config";

async function main() {
  console.log("\n🚀 JobPilot Hessen — Datenbank-Setup\n");

  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("file:")) {
    console.error("❌ DATABASE_URL ist nicht korrekt gesetzt!");
    console.error("   Bitte setze eine PostgreSQL-URL in der .env Datei:");
    console.error("   DATABASE_URL=\"postgresql://...\"");
    console.error("\n   Hol dir eine kostenlose Datenbank bei: https://neon.tech\n");
    process.exit(1);
  }

  console.log("✅ DATABASE_URL gefunden");
  console.log("📦 Führe 'prisma db push' aus...\n");

  const { execSync } = await import("child_process");

  try {
    execSync("npx prisma db push --skip-generate", {
      stdio: "inherit",
      cwd: process.cwd()
    });
    console.log("\n✅ Datenbank-Tabellen erfolgreich erstellt!");
    console.log("✅ Alles bereit. Du kannst jetzt 'npm run dev' starten.\n");
  } catch {
    console.error("\n❌ Fehler beim Erstellen der Tabellen.");
    console.error("   Prüfe, ob die DATABASE_URL korrekt ist.\n");
    process.exit(1);
  }
}

main();
