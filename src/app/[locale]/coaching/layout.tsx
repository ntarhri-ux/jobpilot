import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karriereberatung & Coaching in Wiesbaden — Persönliche Beratung",
  description:
    "Professionelles Jobcoaching und Karriereberatung in Wiesbaden und Frankfurt. Bewerbungstraining, Interviewvorbereitung und persönliche Beratung. AVGS-Unterstützung möglich.",
  keywords: [
    "Karriereberatung Wiesbaden",
    "Jobcoaching Hessen",
    "Bewerbungstraining Frankfurt",
    "Coaching Arbeitsuchende",
    "AVGS Coaching Hessen",
    "Karrierecoaching kostenlos",
    "Bewerbungshilfe Wiesbaden",
    "Interviewvorbereitung",
    "Vermittlungsgutschein AVGS",
  ],
  openGraph: {
    title: "Karriereberatung & Coaching — JobPilot Hessen",
    description:
      "Professionelle Karriereberatung und Coaching in Wiesbaden. AVGS-Unterstützung möglich.",
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
