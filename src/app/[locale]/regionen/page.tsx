import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { MapPin, ArrowRight, Phone, Building2, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Regionen — Arbeitsvermittlung in Hessen & Rhein-Main",
  description:
    "JobPilot Hessen vermittelt in Wiesbaden, Frankfurt am Main, Darmstadt, Offenbach, Eschborn und dem gesamten Rhein-Main-Gebiet. Regionale Jobvermittlung mit persönlicher Beratung.",
  keywords: [
    "Jobs Wiesbaden",
    "Arbeit Frankfurt am Main",
    "Stellenangebote Darmstadt",
    "Jobvermittlung Offenbach",
    "Arbeitsvermittlung Rhein-Main",
    "Jobs Eschborn",
    "Personalvermittlung Hessen",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/regionen",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/regionen",
      "en-US": "https://jobpilot-hessen.de/en/regions",
    },
  },
};

const REGIONS = [
  {
    name: "Wiesbaden",
    description:
      "Landeshauptstadt Hessens und unser Hauptstandort. Starker öffentlicher Sektor, Versicherungswirtschaft und wachsender Dienstleistungsbereich.",
    highlights: ["Landeshauptstadt", "Versicherungen & Finanzen", "Öffentlicher Dienst", "Gesundheitswesen"],
    employers: "80+",
  },
  {
    name: "Frankfurt am Main",
    description:
      "Finanzmetropole und größter Arbeitsmarkt der Region. Banken, IT, Beratung und internationale Unternehmen bieten vielfältige Karrieremöglichkeiten.",
    highlights: ["Banken & Finanzen", "IT & Technologie", "Beratung", "Logistik & Flughafen"],
    employers: "120+",
  },
  {
    name: "Darmstadt",
    description:
      "Wissenschaftsstadt mit starkem Technologie- und Pharmastandort. Idealer Arbeitsmarkt für Fachkräfte in IT, Chemie und Forschung.",
    highlights: ["IT & Software", "Pharma & Chemie", "Forschung", "Telekommunikation"],
    employers: "45+",
  },
  {
    name: "Offenbach am Main",
    description:
      "Kreativ- und Dienstleistungsstandort direkt neben Frankfurt. Wachsender Arbeitsmarkt mit guter Anbindung und attraktiven Arbeitgebern.",
    highlights: ["Kreativwirtschaft", "Logistik", "Dienstleistungen", "Handel"],
    employers: "35+",
  },
  {
    name: "Mainz-Kastel & Umgebung",
    description:
      "Brücke zwischen Hessen und Rheinland-Pfalz. Gute Infrastruktur und vielfältige Arbeitgeber in Verwaltung, Produktion und Handel.",
    highlights: ["Verwaltung", "Produktion", "Handel", "Handwerk"],
    employers: "25+",
  },
  {
    name: "Eschborn",
    description:
      "Beliebter Unternehmensstandort vor den Toren Frankfurts. Zahlreiche Konzernzentralen und mittelständische Unternehmen.",
    highlights: ["Konzernzentralen", "IT & Beratung", "Finanzen", "Vertrieb"],
    employers: "40+",
  },
];

export default function RegionenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium mb-5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Unsere Regionen</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Arbeitsvermittlung in Hessen & Rhein-Main
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Wir kennen den regionalen Arbeitsmarkt aus erster Hand. Als privater
              Vermittlungsdienstleister mit Sitz in Wiesbaden verbinden wir Bewerber und
              Arbeitgeber im gesamten Rhein-Main-Gebiet.
            </p>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-10 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: MapPin, value: "6+", label: "Regionen in Hessen" },
              { icon: Building2, value: "350+", label: "Regionale Arbeitgeber" },
              { icon: Briefcase, value: "8", label: "Branchen abgedeckt" },
              { icon: Users, value: "85%", label: "Vermittlungsquote" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <stat.icon className="w-5 h-5 text-primary mb-2" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regionen Grid */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Regionen im Überblick
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Von Wiesbaden bis Frankfurt, von Darmstadt bis Eschborn — wir vermitteln
              dort, wo die Arbeitgeber sind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/5 p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-bold text-foreground">{region.name}</h3>
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {region.employers} Arbeitgeber
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted leading-relaxed mb-4">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs bg-background text-foreground px-2 py-1 rounded border border-border"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Regionen */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Weitere Regionen in Hessen
          </h2>
          <p className="text-muted mb-8">
            Neben unseren Schwerpunktregionen vermitteln wir auch in weiteren Teilen Hessens.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Kassel",
              "Gießen",
              "Fulda",
              "Marburg",
              "Hanau",
              "Rüsselsheim",
              "Bad Homburg",
              "Oberursel",
              "Friedberg",
              "Limburg",
              "Wetzlar",
              "Bensheim",
            ].map((city) => (
              <span
                key={city}
                className="text-sm bg-background text-muted px-3 py-1.5 rounded-full border border-border"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Job in Ihrer Region finden</h2>
          <p className="text-white/70 mb-6">
            Egal ob Wiesbaden, Frankfurt oder Darmstadt — wir finden die passende Stelle
            für Sie. Kontaktieren Sie uns für ein kostenloses Erstgespräch.
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
