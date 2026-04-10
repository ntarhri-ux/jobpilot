import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  Monitor,
  Landmark,
  Stethoscope,
  Truck,
  FileText,
  Wrench,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Branchen — Personalvermittlung nach Branche in Hessen",
  description:
    "JobPilot Hessen vermittelt branchenübergreifend: IT, Finanzen, Gesundheit, Logistik, Verwaltung, Handwerk, Vertrieb und Bildung. Fachkräfte und Stellen in Hessen und Rhein-Main.",
  keywords: [
    "IT Jobs Hessen",
    "Finanzen Jobs Frankfurt",
    "Gesundheit Jobs Wiesbaden",
    "Logistik Jobs Rhein-Main",
    "Handwerk Stellenangebote Hessen",
    "Personalvermittlung Branchen",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/branchen",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/branchen",
      "en-US": "https://jobpilot-hessen.de/en/industries",
    },
  },
};

const INDUSTRIES = [
  {
    icon: Monitor,
    name: "IT & Software",
    description:
      "Softwareentwicklung, IT-Administration, Datenanalyse, Cybersecurity und mehr. Frankfurt und Darmstadt gehören zu den stärksten IT-Standorten Deutschlands.",
    roles: ["Softwareentwickler", "IT-Administrator", "Data Analyst", "DevOps Engineer", "IT-Projektmanager"],
    demand: "Sehr hoch",
  },
  {
    icon: Landmark,
    name: "Finanzen & Banken",
    description:
      "Frankfurt ist das Finanzzentrum Europas. Wir vermitteln in Banken, Versicherungen, Fintech-Unternehmen und Wirtschaftsprüfungen.",
    roles: ["Controller", "Buchhalter", "Finanzberater", "Compliance-Manager", "Risikomanager"],
    demand: "Hoch",
  },
  {
    icon: Stethoscope,
    name: "Gesundheit & Pflege",
    description:
      "Kliniken, Pflegeeinrichtungen und Arztpraxen in Hessen suchen dringend Fachkräfte. Wir vermitteln medizinisches und pflegerisches Personal.",
    roles: ["Pflegefachkraft", "Medizinische Fachangestellte", "Physiotherapeut", "Altenpfleger", "Arzthelferin"],
    demand: "Sehr hoch",
  },
  {
    icon: Truck,
    name: "Logistik & Transport",
    description:
      "Der Frankfurter Flughafen und die zentrale Lage machen Hessen zum Logistik-Drehkreuz. Lagerfachkräfte, Disponenten und Fahrer sind gefragt.",
    roles: ["Lagerist", "Disponent", "Speditionskaufmann", "Berufskraftfahrer", "Supply Chain Manager"],
    demand: "Hoch",
  },
  {
    icon: FileText,
    name: "Verwaltung & Büro",
    description:
      "Kaufmännische Fachkräfte für Büro, Verwaltung und Sachbearbeitung werden branchenübergreifend gesucht — im öffentlichen Dienst wie in der Privatwirtschaft.",
    roles: ["Sachbearbeiter", "Bürokauffrau", "Verwaltungsfachangestellter", "Assistenz", "Empfangskraft"],
    demand: "Mittel",
  },
  {
    icon: Wrench,
    name: "Handwerk & Produktion",
    description:
      "Fachkräftemangel im Handwerk — wir verbinden Handwerksbetriebe und Produktionsunternehmen mit qualifizierten Bewerbern in Hessen.",
    roles: ["Elektriker", "Mechaniker", "Schreiner", "Produktionsmitarbeiter", "Schweißer"],
    demand: "Sehr hoch",
  },
  {
    icon: TrendingUp,
    name: "Vertrieb & Marketing",
    description:
      "Vertriebsprofis und Marketingexperten sind in der wachsenden Wirtschaftsregion Rhein-Main stark nachgefragt.",
    roles: ["Vertriebsmitarbeiter", "Key Account Manager", "Marketing Manager", "Online Marketing", "Sales Manager"],
    demand: "Hoch",
  },
  {
    icon: GraduationCap,
    name: "Bildung & Soziales",
    description:
      "Erzieher, Sozialarbeiter und Lehrkräfte werden in Hessen dringend gesucht. Wir vermitteln an Kitas, Schulen und soziale Einrichtungen.",
    roles: ["Erzieher", "Sozialarbeiter", "Sozialpädagoge", "Lehrkraft", "Integrationshelfer"],
    demand: "Sehr hoch",
  },
];

function DemandBadge({ level }: { level: string }) {
  const color =
    level === "Sehr hoch"
      ? "bg-green-100 text-green-700 border-green-200"
      : level === "Hoch"
        ? "bg-blue-100 text-blue-700 border-blue-200"
        : "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${color}`}>
      Nachfrage: {level}
    </span>
  );
}

export default function BranchenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Personalvermittlung nach Branche
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Wir vermitteln branchenübergreifend in Hessen und dem Rhein-Main-Gebiet.
              Von IT über Gesundheit bis Handwerk — für jede Branche die passenden Fachkräfte.
            </p>
          </div>
        </div>
      </section>

      {/* Branchen Grid */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.name}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <industry.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{industry.name}</h3>
                    </div>
                    <DemandBadge level={industry.demand} />
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{industry.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Typische Positionen:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.roles.map((role) => (
                        <span
                          key={role}
                          className="text-xs bg-background text-muted px-2 py-1 rounded border border-border"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum branchenübergreifend */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Warum branchenübergreifende Vermittlung?
          </h2>
          <div className="space-y-3">
            {[
              "Quereinsteiger profitieren von unserer Kenntnis verschiedener Branchen",
              "Arbeitgeber erhalten Kandidaten mit übertragbaren Fähigkeiten",
              "Wir erkennen Potenziale, die rein branchenspezifische Vermittler übersehen",
              "Regionale Marktkenntnis über alle Wirtschaftszweige hinweg",
              "Flexibilität bei der Stellensuche — mehr Möglichkeiten für Bewerber",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-background rounded-lg border border-border">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ihre Branche. Unsere Expertise.</h2>
          <p className="text-white/70 mb-6">
            Ob Sie Fachkräfte suchen oder einen neuen Job — sprechen Sie uns an.
            Wir kennen die Anforderungen Ihrer Branche.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4961112345678"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> +49 611 123 456 78
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
