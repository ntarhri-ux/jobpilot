import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  Euro,
  Share2,
  Bookmark,
  CheckCircle2,
  Send,
} from "lucide-react";

// This would come from DB in production
const JOB = {
  id: "1",
  title: "Senior Software Engineer",
  company: "Deutsche Bank AG",
  location: "Frankfurt am Main",
  type: "Vollzeit",
  category: "IT & Software",
  salary: "65.000 - 85.000 EUR",
  description: `
    Wir suchen einen erfahrenen Software Engineer zur Verstärkung unseres Digital Banking Teams in Frankfurt am Main.

    Als Senior Software Engineer werden Sie maßgeblich an der Entwicklung und Weiterentwicklung unserer Banking-Plattform beteiligt sein. Sie arbeiten in einem agilen Team und gestalten die Zukunft des digitalen Bankings mit.

    Ihre Aufgaben umfassen die Konzeption und Implementierung von Microservices, die Optimierung bestehender Systeme und die Zusammenarbeit mit internationalen Teams.
  `,
  requirements: [
    "Mindestens 5 Jahre Erfahrung in der Softwareentwicklung",
    "Sehr gute Kenntnisse in React, TypeScript und Node.js",
    "Erfahrung mit Java/Spring Boot und Microservices-Architektur",
    "Kenntnisse in Cloud-Technologien (AWS/Azure)",
    "Agile Arbeitsweise (Scrum/Kanban)",
    "Fließende Deutsch- und Englischkenntnisse",
  ],
  benefits: [
    "Attraktives Gehalt mit leistungsorientiertem Bonus",
    "Flexible Arbeitszeiten und Home-Office-Möglichkeit",
    "30 Tage Urlaub",
    "Betriebliche Altersvorsorge",
    "Weiterbildungsbudget von 5.000 EUR/Jahr",
    "Jobticket für den ÖPNV",
    "Moderne Büros im Frankfurter Bankenviertel",
  ],
  tags: ["React", "TypeScript", "Node.js", "Java", "Spring Boot", "AWS"],
  postedDaysAgo: 2,
  featured: true,
};

export default function JobDetailPage() {
  const t = useTranslations();

  return (
    <>
      {/* JSON-LD for job posting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: JOB.title,
            description: JOB.description,
            datePosted: new Date(
              Date.now() - JOB.postedDaysAgo * 86400000
            ).toISOString(),
            hiringOrganization: {
              "@type": "Organization",
              name: JOB.company,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: JOB.location,
                addressRegion: "Hessen",
                addressCountry: "DE",
              },
            },
            employmentType: "FULL_TIME",
            baseSalary: {
              "@type": "MonetaryAmount",
              currency: "EUR",
              value: {
                "@type": "QuantitativeValue",
                minValue: 65000,
                maxValue: 85000,
                unitText: "YEAR",
              },
            },
          }),
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> {t("common.back")} zu
          Stellenangeboten
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {JOB.title}
                  </h1>
                  <p className="text-lg text-muted mt-1">{JOB.company}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {JOB.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" /> {JOB.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" /> {JOB.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> vor {JOB.postedDaysAgo} Tagen
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {JOB.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Stellenbeschreibung
              </h2>
              <div className="prose text-muted leading-relaxed whitespace-pre-line">
                {JOB.description.trim()}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Anforderungen
              </h2>
              <ul className="space-y-3">
                {JOB.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Was wir bieten
              </h2>
              <ul className="space-y-3">
                {JOB.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
              <button className="w-full py-3 bg-secondary hover:bg-secondary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                {t("jobs.apply")}
              </button>
              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-2.5 border border-border rounded-xl text-sm font-medium text-muted hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  {t("jobs.save")}
                </button>
                <button className="flex-1 py-2.5 border border-border rounded-xl text-sm font-medium text-muted hover:text-primary hover:border-primary transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" />
                  {t("jobs.share")}
                </button>
              </div>

              <hr className="my-6 border-border" />

              {/* Company Info */}
              <div>
                <h3 className="font-bold text-foreground mb-3">
                  Über {JOB.company}
                </h3>
                <div className="space-y-2 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Großunternehmen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{JOB.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span>Finanzdienstleistungen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
