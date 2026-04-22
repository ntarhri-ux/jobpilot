import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  MapPin,
  ArrowRight,
  Phone,
  Building2,
  Users,
  Briefcase,
  Star,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Jobvermittlung Frankfurt — Kostenlose Arbeitsvermittlung & Karriereberatung | JobPilot",
  description:
    "Professionelle Jobvermittlung in Frankfurt am Main ✓ Kostenlos für Bewerber ✓ AVGS-Coaching ✓ Banken, IT, Logistik ✓ Über 120 regionale Arbeitgeber. Ihr Karrieresprung in der Finanzmetropole.",
  keywords: [
    "Jobvermittlung Frankfurt",
    "Arbeitsvermittlung Frankfurt am Main",
    "Personalvermittlung Frankfurt",
    "Jobs Frankfurt",
    "Stellenangebote Frankfurt",
    "Karriereberatung Frankfurt",
    "AVGS Frankfurt",
    "Arbeit finden Frankfurt",
    "Jobcoaching Frankfurt am Main",
    "Bewerbungshilfe Frankfurt",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/jobvermittlung-frankfurt",
  },
  openGraph: {
    title: "Jobvermittlung Frankfurt am Main — Kostenlos & Persönlich | JobPilot",
    description:
      "Ihre regionale Arbeitsvermittlung in Frankfurt. Kostenlos für Bewerber, persönliche Karriereberatung, AVGS-Unterstützung.",
    url: "https://jobpilot-hessen.de/de/jobvermittlung-frankfurt",
  },
};

const BRANCHEN = [
  {
    name: "Banken & Finanzen",
    jobs: "450+",
    desc: "Deutsche Bank, Commerzbank, EZB, DZ Bank, KfW",
  },
  {
    name: "IT & Technologie",
    jobs: "380+",
    desc: "SAP Eschborn, Accenture, Capgemini, Deutsche Börse",
  },
  {
    name: "Logistik & Flughafen",
    jobs: "300+",
    desc: "Fraport, Lufthansa, DHL, DB Schenker",
  },
  {
    name: "Beratung & Consulting",
    jobs: "200+",
    desc: "McKinsey, BCG, Deloitte, PwC, KPMG",
  },
  {
    name: "Pharma & Chemie",
    jobs: "150+",
    desc: "Sanofi, Merz, Biotest, Celanese",
  },
  {
    name: "Kaufmännisch & Verwaltung",
    jobs: "350+",
    desc: "Sachbearbeitung, Assistenz, Buchhaltung, HR",
  },
];

const FAQS = [
  {
    q: "Was kostet die Jobvermittlung in Frankfurt bei JobPilot?",
    a: "Für Bewerber ist unsere Vermittlung zu 100% kostenlos. Wir finanzieren uns über Vermittlungsprovisionen, die der Arbeitgeber zahlt. Auch unser AVGS-Coaching wird von der Agentur für Arbeit oder dem Jobcenter übernommen — für Sie entstehen keinerlei Kosten.",
  },
  {
    q: "In welchen Branchen vermittelt JobPilot in Frankfurt?",
    a: "Frankfurt ist als Finanzmetropole besonders stark in den Bereichen Banken & Finanzen, IT & Technologie, Logistik (Flughafen), Beratung und Pharma. Wir vermitteln aber auch kaufmännische Stellen, Jobs im Gesundheitswesen, in der Gastronomie und im Handwerk.",
  },
  {
    q: "Kann ich mit AVGS-Gutschein zu JobPilot nach Frankfurt kommen?",
    a: "Ja! Wir sind ein AZAV-zertifizierter Träger und nehmen Ihren AVGS gerne an. Besuchen Sie Ihre Agentur für Arbeit Frankfurt (Fischerfeldstraße 10-12) oder Ihr Jobcenter und fragen Sie nach dem Aktivierungs- und Vermittlungsgutschein.",
  },
  {
    q: "Wie unterscheidet sich JobPilot von großen Personalvermittlern wie Hays oder Adecco?",
    a: "Als regionaler Vermittlungsdienstleister bieten wir persönliche, individuelle Betreuung statt Massenabfertigung. Sie haben einen festen Ansprechpartner, der den Frankfurter Arbeitsmarkt kennt. Zudem vermitteln wir ausschließlich in Festanstellung — keine Zeitarbeit.",
  },
  {
    q: "Vermittelt JobPilot auch für den Frankfurter Flughafen?",
    a: "Ja, der Flughafen Frankfurt (Fraport) und seine Partnerunternehmen gehören zu unseren wichtigsten Arbeitgebern. Wir vermitteln Stellen in der Logistik, im Kundenservice, in der Sicherheit, in der Gastronomie und in der Verwaltung am Flughafen.",
  },
];

export default function JobvermittlungFrankfurt() {
  return (
    <>
      {/* JSON-LD: EmploymentAgency + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            name: "JobPilot Hessen — Jobvermittlung Frankfurt am Main",
            description:
              "Professionelle und kostenlose Jobvermittlung in Frankfurt am Main. Persönliche Karriereberatung, AVGS-Coaching und regionale Arbeitsvermittlung in der Finanzmetropole.",
            url: "https://jobpilot-hessen.de/de/jobvermittlung-frankfurt",
            telephone: "+49 611 95009876",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Frankfurt am Main",
              addressRegion: "Hessen",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.1109,
              longitude: 8.6821,
            },
            areaServed: [
              { "@type": "City", name: "Frankfurt am Main" },
              { "@type": "City", name: "Offenbach am Main" },
              { "@type": "City", name: "Eschborn" },
              { "@type": "City", name: "Bad Homburg" },
            ],
            priceRange: "Kostenlos für Bewerber",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium mb-6 border border-white/10">
              <MapPin className="w-3.5 h-3.5" /> Frankfurt am Main &
              Rhein-Main-Gebiet
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Jobvermittlung Frankfurt — Ihre Karriere in der Finanzmetropole
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              Frankfurt am Main ist einer der dynamischsten Arbeitsmärkte
              Europas. Als regionaler Vermittlungsdienstleister verbinden wir
              Sie mit den Top-Arbeitgebern der Stadt — von Banken über IT bis
              zum Flughafen. Kostenlos, persönlich und effektiv.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
              >
                Kostenlos beraten lassen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Briefcase className="w-4 h-4" /> Jobs in Frankfurt
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Offene Stellen", value: "1.800+" },
            { label: "Partnerunternehmen", value: "120+" },
            { label: "Erfolgsquote", value: "94%" },
            { label: "Branchen", value: "15+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-primary/5 rounded-2xl"
            >
              <div className="text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Warum Frankfurt */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          Warum Arbeitsvermittlung in Frankfurt über JobPilot?
        </h2>
        <p className="text-muted mb-8 max-w-3xl leading-relaxed">
          Große Personalvermittler wie Hays, Adecco oder Randstad behandeln Sie
          als Nummer in der Datenbank. Bei JobPilot sind Sie ein Mensch mit
          individuellen Stärken und Zielen. Wir kennen den Frankfurter
          Arbeitsmarkt persönlich und haben direkte Beziehungen zu
          Personalverantwortlichen.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Shield,
              title: "100% Kostenlos für Bewerber",
              desc: "Keine versteckten Kosten, keine Gebühren. Wir werden vom Arbeitgeber vergütet.",
            },
            {
              icon: Users,
              title: "Fester Ansprechpartner",
              desc: "Ein Berater, der Sie persönlich kennt — nicht jedes Mal eine neue Hotline.",
            },
            {
              icon: TrendingUp,
              title: "Zugang zum verdeckten Stellenmarkt",
              desc: "Viele unserer Stellen werden nie öffentlich ausgeschrieben — nur über uns.",
            },
            {
              icon: Star,
              title: "AVGS-Coaching inklusive",
              desc: "Kostenloses Karriere-Coaching mit Ihrem Vermittlungsgutschein.",
            },
            {
              icon: Building2,
              title: "Nur Festanstellung",
              desc: "Wir vermitteln direkt zum Arbeitgeber — keine Zeitarbeit, keine Leiharbeit.",
            },
            {
              icon: Clock,
              title: "Schnelle Ergebnisse",
              desc: "Durchschnittlich 4-8 Wochen bis zur erfolgreichen Vermittlung.",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <v.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Branchen */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Top-Branchen für Jobvermittlung in Frankfurt am Main
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BRANCHEN.map((b) => (
            <div
              key={b.name}
              className="bg-white border border-border rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">{b.name}</h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {b.jobs} Stellen
                </span>
              </div>
              <p className="text-sm text-muted">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Häufige Fragen zur Jobvermittlung in Frankfurt
        </h2>
        <div className="space-y-4 mb-16">
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="bg-white border border-border rounded-2xl overflow-hidden group"
            >
              <summary className="p-6 cursor-pointer font-semibold text-foreground hover:text-primary transition-colors list-none flex items-center justify-between">
                {faq.q}
                <ArrowRight className="w-4 h-4 text-muted group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-muted leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Starten Sie Ihre Karriere in Frankfurt — kostenlos & unverbindlich
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ob Quereinsteiger, Berufsrückkehrer oder erfahrene Fachkraft — wir
            finden den passenden Job in Frankfurt und dem gesamten
            Rhein-Main-Gebiet für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all"
            >
              <Phone className="w-4 h-4" /> Termin vereinbaren
            </Link>
            <a
              href="tel:+4961195009876"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all"
            >
              0611 950 098 76
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
