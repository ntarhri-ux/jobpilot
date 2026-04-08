import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karriereberatung & Coaching in Wiesbaden — Kostenlos mit Bildungsgutschein",
  description:
    "Professionelles Jobcoaching und Karriereberatung in Wiesbaden und Frankfurt. Kostenlos mit Vermittlungsgutschein vom Arbeitsamt. Bewerbungstraining, Interviewvorbereitung und persönliche Beratung.",
  keywords: [
    "Karriereberatung Wiesbaden",
    "Jobcoaching Hessen",
    "Bewerbungstraining Frankfurt",
    "Coaching Arbeitsuchende",
    "Bildungsgutschein Hessen",
    "Karrierecoaching kostenlos",
    "Bewerbungshilfe Wiesbaden",
    "Interviewvorbereitung",
    "Vermittlungsgutschein Arbeitsamt",
  ],
  openGraph: {
    title: "Karriereberatung & Coaching — JobPilot Hessen",
    description:
      "Kostenlose Karriereberatung und professionelles Coaching in Wiesbaden. Mit Vermittlungsgutschein vom Arbeitsamt.",
    type: "website",
  },
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/coaching",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/coaching",
      "en-US": "https://jobpilot-hessen.de/en/coaching",
    },
  },
};

export default function CoachingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
