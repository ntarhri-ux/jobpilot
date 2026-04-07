import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jobpilot-hessen.de";

  const staticPages = [
    "",
    "/jobs",
    "/coaching",
    "/ratgeber",
    "/ueber-uns",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ];

  const routes: MetadataRoute.Sitemap = [];

  // German pages (default)
  for (const page of staticPages) {
    routes.push({
      url: `${baseUrl}/de${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1.0 : page === "/jobs" ? 0.9 : 0.7,
      alternates: {
        languages: {
          de: `${baseUrl}/de${page}`,
          en: `${baseUrl}/en${page === "/ratgeber" ? "/blog" : page === "/ueber-uns" ? "/about" : page === "/kontakt" ? "/contact" : page}`,
        },
      },
    });
  }

  return routes;
}
