import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "@neondatabase/serverless",
    "@prisma/adapter-neon",
  ],
};

export default withNextIntl(nextConfig);
