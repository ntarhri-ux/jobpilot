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
    template: "%s | JobPilot",
  },
  description:
    "JobPilot verbindet Arbeitssuchende mit Top-Arbeitgebern in Wiesbaden, Frankfurt und ganz Hessen. Jobvermittlung, Karriereberatung und Coaching.",
  keywords: [
    "Jobs Hessen",
    "Stellenangebote Wiesbaden",
    "Arbeit Frankfurt",
    "Jobvermittlung",
    "Karriereberatung",
    "Arbeitsamt",
    "Coaching",
    "Rhein-Main",
    "Bewerbungshilfe",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "JobPilot",
    title: "JobPilot — Dein Navigator zum Traumjob in Hessen",
    description:
      "Finde deinen Traumjob in Wiesbaden, Frankfurt und ganz Hessen. Persönliche Beratung & intelligentes Job-Matching.",
  },
  robots: {
    index: true,
    follow: true,
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
