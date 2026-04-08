import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt — JobPilot Jobvermittlung Wiesbaden",
  description:
    "Kontaktieren Sie JobPilot in Wiesbaden. Wir helfen Ihnen bei der Jobsuche in Hessen, Karriereberatung und Arbeitsvermittlung. Telefon, E-Mail oder persönlich vor Ort.",
  keywords: [
    "Kontakt Jobvermittlung Wiesbaden",
    "JobPilot Adresse",
    "Karriereberatung Termin",
    "Arbeitsvermittlung Kontakt Hessen",
  ],
  openGraph: {
    title: "Kontakt — JobPilot Wiesbaden",
    description: "Kontaktieren Sie uns für kostenlose Karriereberatung in Wiesbaden und Frankfurt.",
    type: "website",
  },
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/kontakt",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/kontakt",
      "en-US": "https://jobpilot-hessen.de/en/contact",
    },
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
