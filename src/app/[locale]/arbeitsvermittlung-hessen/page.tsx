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
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Arbeitsvermittlung Hessen — Private Jobvermittlung Rhein-Main kostenlos | JobPilot",
  description:
    "Private Arbeitsvermittlung in Hessen ✓ Wiesbaden, Frankfurt, Mainz, Darmstadt ✓ Kostenlos für Bewerber ✓ AVGS-Coaching ✓ Regionale Expertise. Ihr Partner für Jobvermittlung im Rhein-Main-Gebiet.",
  keywords: [
    "Arbeitsvermittlung Hessen",
    "private Arbeitsvermittlung",
    "Jobvermittlung Rhein-Main",
    "Personalvermittlung Hessen",
    "Arbeitsvermittlung kostenlos",
    "AVGS Hessen",
    "Jobvermittlung Mainz",
    "Arbeit finden Hessen",
    "Vermittlungsgutschein Hessen",
    "Karriereberatung Hessen",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/arbeitsvermittlung-hessen",
  },
  openGraph: {
    title: "Arbeitsvermittlung Hessen — Kostenlos & Regional | JobPilot",
    description:
      "Private Arbeitsvermittlung im Rhein-Main-Gebiet. Wiesbaden, Frankfurt, Mainz, Darmstadt — kostenlos für Bewerber.",
    url: "https://jobpilot-hessen.de/de/arbeitsvermittlung-hessen",
  },
};

const STAEDTE = [
  {
    name: "Wiesbaden",
    link: "/jobvermittlung-wiesbaden",
    stellen: "500+",
    branchen: "Öffentlicher Dienst, Versicherungen, Gesundheit",
  },
  {
    name: "Frankfurt am Main",
    link: "/jobvermittlung-frankfurt",
    stellen: "1.800+",
    branchen: "Banken, IT, Logistik, Beratung",
  },
  {
    name: "Mainz",
    link: "/kontakt",
    stellen: "350+",
    branchen: "Medien, Pharma, Universität, Verwaltung",
  },
  {
    name: "Darmstadt",
    link: "/kontakt",
    stellen: "400+",
    branchen: "IT, Pharma, Forschung, Telekommunikation",
  },
  {
    name: "Offenbach",
    link: "/kontakt",
    stellen: "250+",
    branchen: "Kreativwirtschaft, Handel, Logistik",
  },
  {
    name: "Bad Homburg",
    link: "/kontakt",
    stellen: "180+",
    branchen: "Finanzen, Pharma, Dienstleistung",
  },
];

const FAQS = [
  {
    q: "Was ist eine private Arbeitsvermittlung?",
    a: "Eine private Arbeitsvermittlung wie JobPilot unterstützt Arbeitssuchende bei der Jobsuche — unabhängig von der Agentur für Arbeit. Wir haben direkte Kontakte zu Arbeitgebern und können oft schneller und gezielter vermitteln als das Jobcenter. Für Bewerber ist unser Service kostenlos.",
  },
  {
    q: "Ist die private Arbeitsvermittlung in Hessen kostenlos?",
    a: "Ja, für Bewerber ist die Vermittlung zu 100% kostenlos. Der Arbeitgeber zahlt bei erfolgreicher Vermittlung eine Provision. Mit einem AVGS (Aktivierungs- und Vermittlungsgutschein) erhalten Sie zusätzlich kostenloses Coaching.",
  },
  {
    q: "Wie unterscheidet sich JobPilot vom Jobcenter?",
    a: "Anders als das Jobcenter bieten wir persönliche Einzelbetreuung, individuelles Coaching und direkten Zugang zu regionalen Arbeitgebern. Wir kennen den hessischen Arbeitsmarkt und haben Beziehungen, die das Jobcenter nicht hat. Zudem vermitteln wir in Festanstellungen — keine Maßnahmen oder Zeitarbeit.",
  },
  {
    q: "In welchen Städten in Hessen vermittelt JobPilot?",
    a: "Wir vermitteln im gesamten Rhein-Main-Gebiet: Wiesbaden, Frankfurt am Main, Mainz, Darmstadt, Offenbach, Eschborn, Bad Homburg, Taunusstein und weitere Städte. Unser Hauptstandort ist in Wiesbaden.",
  },
  {
    q: "Welche Qualifikationen brauche ich?",
    a: "Wir vermitteln Bewerber aller Qualifikationsstufen — vom Helfer über Facharbeiter bis zur Führungskraft. Besonders gefragt sind kaufmännische Berufe, IT-Fachkräfte, Pflegekräfte und Handwerker. Auch Quereinsteiger und Berufsrückkehrer sind willkommen.",
  },
];

export default function ArbeitsvermittlungHessen() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            name: "JobPilot Hessen — Arbeitsvermittlung Hessen & Rhein-Main",
            description:
              "Private Arbeitsvermittlung in Hessen. Kostenlose Jobvermittlung in Wiesbaden, Frankfurt, Mainz, Darmstadt und dem Rhein-Main-Gebiet.",
            url: "https://jobpilot-hessen.de/de/arbeitsvermittlung-hessen",
            telephone: "+49 611 95009876",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Wiesbaden",
              addressRegion: "Hessen",
              addressCountry: "DE",
            },
            areaServed: {
              "@type": "State",
              name: "Hessen",
            },
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
              <MapPin className="w-3.5 h-3.5" /> Hessen & Rhein-Main-Gebiet
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Private Arbeitsvermittlung in Hessen — Kostenlos & Regional
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              JobPilot ist Ihre private Arbeitsvermittlung im
              Rhein-Main-Gebiet. Von Wiesbaden über Frankfurt bis Darmstadt —
              wir kennen die regionalen Arbeitgeber persönlich und bringen Sie
              in Festanstellung. 100% kostenlos, mit AVGS-Coaching und
              individueller Betreuung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
              >
                Kostenlose Beratung starten <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/avgs"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Star className="w-4 h-4" /> AVGS-Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Städte in Hessen", value: "12+" },
            { label: "Partnerunternehmen", value: "200+" },
            { label: "Erfolgreiche Vermittlungen", value: "1.500+" },
            { label: "Branchen", value: "20+" },
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

        {/* Warum private Arbeitsvermittlung */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Warum eine private Arbeitsvermittlung in Hessen?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" /> Jobcenter vs.
              JobPilot
            </h3>
            <div className="space-y-3">
              {[
                "Persönlicher Ansprechpartner statt wechselnde Sachbearbeiter",
                "Individuelle Karriereberatung statt Standardmaßnahmen",
                "Direkter Zugang zu regionalen Arbeitgebern",
                "Fokus auf Festanstellung — keine Zeitarbeit",
                "AVGS-Coaching mit professionellen Trainern",
                "Begleitung während der Probezeit",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-4">
              So funktioniert es
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  text: "AVGS bei Ihrer Agentur für Arbeit oder Jobcenter beantragen",
                },
                {
                  step: "2",
                  text: "Kostenloses Erstgespräch bei JobPilot vereinbaren",
                },
                {
                  step: "3",
                  text: "Individuelles Coaching und Bewerbungsoptimierung",
                },
                {
                  step: "4",
                  text: "Gezielte Vermittlung an passende Arbeitgeber in Hessen",
                },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <span className="text-foreground font-medium">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Städte */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Unsere Standorte für Arbeitsvermittlung in Hessen
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {STAEDTE.map((s) => (
            <Link
              key={s.name}
              href={s.link as any}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all group block"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {s.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">
                {s.stellen}
              </div>
              <p className="text-xs text-muted">Stellen</p>
              <p className="text-sm text-muted mt-3">{s.branchen}</p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Häufige Fragen zur Arbeitsvermittlung in Hessen
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
            Jetzt kostenlose Arbeitsvermittlung in Hessen nutzen
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Egal ob Wiesbaden, Frankfurt, Mainz oder Darmstadt — wir finden den
            passenden Job für Sie. Kostenlos und unverbindlich.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all"
            >
              <Phone className="w-4 h-4" /> Beratungstermin buchen
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
