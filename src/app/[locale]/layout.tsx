import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: "JobPilot — Dein Navigator zum Traumjob in Hessen",
    template: "%s | JobPilot — Jobvermittlung Hessen",
  },
  description:
    "JobPilot Hessen — regionaler privater Vermittlungsdienstleister. Persönliche Jobvermittlung, Karriereberatung und Coaching in Wiesbaden, Frankfurt und ganz Hessen. AVGS-Unterstützung möglich.",
  keywords: [
    "Jobs Hessen",
    "Stellenangebote Wiesbaden",
    "Stellenangebote Frankfurt am Main",
    "Arbeit finden Rhein-Main",
    "Jobvermittlung Hessen",
    "Jobvermittlung Wiesbaden",
    "Karriereberatung Frankfurt",
    "Arbeitsvermittlung Wiesbaden",
    "Private Arbeitsvermittlung Hessen",
    "Jobcoaching Hessen",
    "Bewerbungshilfe kostenlos",
    "Beruflicher Wiedereinstieg Hessen",
    "IT Jobs Frankfurt",
    "Öffentlicher Dienst Hessen",
    "Lebenslauf Hilfe",
    "Vorstellungsgespräch Tipps",
    "Gehaltsverhandlung",
    "Arbeitsmarkt Hessen 2026",
    "Arbeitsvermittlung Rhein-Main-Gebiet",
    "Coaching Arbeitsuchende",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    alternateLocale: "en_US",
    siteName: "JobPilot",
    title: "JobPilot — Stellenangebote & Jobvermittlung in Hessen",
    description:
      "Finde deinen Traumjob in Wiesbaden, Frankfurt und ganz Hessen. Persönliche Karriereberatung & Coaching vom regionalen Vermittlungsdienstleister.",
    url: "https://jobpilot-hessen.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobPilot — Stellenangebote in Hessen",
    description: "Jobs in Wiesbaden, Frankfurt & Rhein-Main. Regionale Jobvermittlung mit persönlicher Beratung.",
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
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
