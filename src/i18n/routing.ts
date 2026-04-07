import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/jobs": "/jobs",
    "/jobs/[slug]": "/jobs/[slug]",
    "/coaching": "/coaching",
    "/blog": {
      de: "/ratgeber",
      en: "/blog",
    },
    "/blog/[slug]": {
      de: "/ratgeber/[slug]",
      en: "/blog/[slug]",
    },
    "/kontakt": {
      de: "/kontakt",
      en: "/contact",
    },
    "/ueber-uns": {
      de: "/ueber-uns",
      en: "/about",
    },
    "/auth/login": "/auth/login",
    "/auth/register": "/auth/register",
    "/dashboard": "/dashboard",
    "/impressum": "/impressum",
    "/datenschutz": "/datenschutz",
  },
});

export type Locale = (typeof routing.locales)[number];
