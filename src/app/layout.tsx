import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JobPilot — Jobvermittlung & Stellenangebote in Hessen | Wiesbaden & Frankfurt",
    template: "%s | JobPilot Hessen",
  },
  description:
    "JobPilot Hessen — Ihr regionaler privater Vermittlungsdienstleister. Stellenangebote in Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet. Persönliche Karriereberatung, Coaching und Bewerbungshilfe. AVGS-Unterstützung möglich.",
  keywords: [
    "Jobs Hessen",
    "Stellenangebote Wiesbaden",
    "Stellenangebote Frankfurt",
    "Jobvermittlung Hessen",
    "Arbeit finden Rhein-Main",
    "Karriereberatung Wiesbaden",
    "Arbeitsvermittlung Hessen",
    "Bewerbungshilfe",
    "Jobcoaching Frankfurt",
    "Jobsuche Hessen",
  ],
  metadataBase: new URL("https://jobpilot-hessen.de"),
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/de",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    siteName: "JobPilot",
    title: "JobPilot — Jobvermittlung & Stellenangebote in Hessen",
    description:
      "Finden Sie Ihren Traumjob in Wiesbaden, Frankfurt und ganz Hessen. Persönliche Karriereberatung und regionale Jobvermittlung.",
    url: "https://jobpilot-hessen.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobPilot — Jobvermittlung Hessen",
    description: "Stellenangebote & Karriereberatung in Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "k4cH_4Jz5FnUBYRmDIUdAHrGkp2gq-ZAnycmxQ53gNQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
