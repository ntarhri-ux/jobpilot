import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stellenangebote in Hessen — Jobs in Wiesbaden, Frankfurt & Rhein-Main",
  description:
    "Aktuelle Stellenangebote in Hessen: IT, Finanzen, Gesundheit, Verwaltung und mehr. Finden Sie Ihren Traumjob in Wiesbaden, Frankfurt am Main und dem Rhein-Main-Gebiet. Täglich neue Jobs.",
  keywords: [
    "Stellenangebote Hessen",
    "Jobs Wiesbaden",
    "Jobs Frankfurt am Main",
    "IT Jobs Rhein-Main",
    "Vollzeit Stellenangebote Hessen",
    "Teilzeit Jobs Wiesbaden",
    "Ausbildung Hessen",
    "Öffentlicher Dienst Hessen Jobs",
    "Pflege Jobs Frankfurt",
    "Logistik Jobs Rhein-Main",
    "Finanzen Jobs Frankfurt",
  ],
  openGraph: {
    title: "Stellenangebote Hessen — Über 2.500 aktuelle Jobs",
    description:
      "IT, Finanzen, Gesundheit, Logistik und mehr. Finden Sie Ihren Traumjob in Wiesbaden, Frankfurt und ganz Hessen.",
    type: "website",
  },
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/jobs",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/jobs",
      "en-US": "https://jobpilot-hessen.de/en/jobs",
    },
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}
