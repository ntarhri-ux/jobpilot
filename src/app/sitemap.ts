import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jobpilot-hessen.de";

  const staticPages = [
    { path: "", changeFreq: "daily" as const, priority: 1.0 },
    { path: "/jobs", changeFreq: "daily" as const, priority: 0.95 },
    { path: "/fuer-bewerber", changeFreq: "weekly" as const, priority: 0.9 },
    { path: "/fuer-arbeitgeber", changeFreq: "weekly" as const, priority: 0.9 },
    { path: "/fuer-institutionen", changeFreq: "weekly" as const, priority: 0.85 },
    { path: "/avgs", changeFreq: "monthly" as const, priority: 0.85 },
    { path: "/regionen", changeFreq: "monthly" as const, priority: 0.8 },
    { path: "/branchen", changeFreq: "monthly" as const, priority: 0.8 },
    { path: "/faq", changeFreq: "monthly" as const, priority: 0.75 },
    { path: "/coaching", changeFreq: "weekly" as const, priority: 0.85 },
    { path: "/ratgeber", changeFreq: "weekly" as const, priority: 0.9 },
    { path: "/ueber-uns", changeFreq: "monthly" as const, priority: 0.7 },
    { path: "/kontakt", changeFreq: "monthly" as const, priority: 0.7 },
    { path: "/impressum", changeFreq: "yearly" as const, priority: 0.3 },
    { path: "/datenschutz", changeFreq: "yearly" as const, priority: 0.3 },
  ];

  // Blog article slugs for dynamic sitemap
  const blogSlugs = [
    "10-tipps-vorstellungsgespraech",
    "arbeitsmarkt-hessen-2026",
    "lebenslauf-guide",
    "gehaltsverhandlung-tipps",
    "beruflicher-wiedereinstieg",
    "it-jobs-rhein-main",
    "arbeitsrecht-kuendigung",
    "bewerbung-oeffentlicher-dienst",
    "avgs-coaching-rhein-main",
    "quereinstieg-ki-rhein-main",
    "zeitarbeit-vs-festanstellung",
  ];

  // Job detail slugs
  const jobSlugs = [
    "senior-software-engineer-deutsche-bank",
    "marketing-manager-rv-versicherung",
    "pflegefachkraft-helios",
    "sachbearbeiter-stadt-wiesbaden",
    "ausbildung-fachinformatiker-sap",
    "logistikleiter-dhl",
    "controller-commerzbank",
    "erzieher-kita-frankfurt",
  ];

  const routes: MetadataRoute.Sitemap = [];

  // Localized path mappings for EN
  const enPathMap: Record<string, string> = {
    "/ratgeber": "/blog",
    "/ueber-uns": "/about",
    "/kontakt": "/contact",
    "/fuer-bewerber": "/for-jobseekers",
    "/fuer-arbeitgeber": "/for-employers",
    "/fuer-institutionen": "/for-institutions",
    "/regionen": "/regions",
    "/branchen": "/industries",
  };

  // Static pages with hreflang alternates
  for (const page of staticPages) {
    const enPath = enPathMap[page.path] || page.path;
    routes.push({
      url: `${baseUrl}/de${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          de: `${baseUrl}/de${page.path}`,
          en: `${baseUrl}/en${enPath}`,
        },
      },
    });
  }

  // Blog articles (high SEO value)
  for (const slug of blogSlugs) {
    routes.push({
      url: `${baseUrl}/de/ratgeber/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          de: `${baseUrl}/de/ratgeber/${slug}`,
          en: `${baseUrl}/en/blog/${slug}`,
        },
      },
    });
  }

  // Job detail pages
  for (const slug of jobSlugs) {
    routes.push({
      url: `${baseUrl}/de/jobs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/jobs/${slug}`,
          en: `${baseUrl}/en/jobs/${slug}`,
        },
      },
    });
  }

  return routes;
}
