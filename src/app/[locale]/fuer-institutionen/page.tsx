import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Handshake,
  Shield,
  Phone,
  MapPin,
  Users,
  Target,
  FileCheck,
  Building2,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Für Jobcenter, Arbeitsagentur & Bildungsträger — Kooperation",
  description:
    "JobPilot Hessen als Kooperationspartner für Jobcenter, Arbeitsagenturen und Bildungsträger. Regionale Arbeitsvermittlung mit Integrationsfokus in Wiesbaden, Frankfurt und Rhein-Main.",
  keywords: [
    "Private Arbeitsvermittlung Hessen",
    "Kooperation Jobcenter",
    "Arbeitsvermittlung Bildungsträger",
    "AVGS Vermittler Hessen",
    "Integration Arbeitsmarkt Hessen",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/fuer-institutionen",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/fuer-institutionen",
      "en-US": "https://jobpilot-hessen.de/en/for-institutions",
    },
  },
};

export default function FuerInstitutionenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium mb-5">
              <Handshake className="w-3.5 h-3.5" />
              <span>Für Institutionen & Träger</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Professionelle Vermittlungspartnerschaft für Hessen
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              JobPilot Hessen ist ein regionaler privater Vermittlungsdienstleister mit Fokus auf nachhaltige
              Arbeitsmarktintegration. Wir arbeiten strukturiert, transparent und ergebnisorientiert —
              ein verlässlicher Partner für Jobcenter, Arbeitsagenturen und Bildungsträger.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Kooperationsgespräch anfragen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Unser Ansatz */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Unser Vermittlungsansatz
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Wir verbinden arbeitsuchende Menschen mit Arbeitgebern in Hessen — persönlich,
              strukturiert und mit dem Ziel nachhaltiger sozialversicherungspflichtiger Beschäftigung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Integrationsorientiert",
                text: "Unser Fokus liegt auf nachhaltiger Integration in den ersten Arbeitsmarkt — nicht auf kurzfristiger Vermittlung.",
              },
              {
                icon: MapPin,
                title: "Regional verankert",
                text: "Wir kennen den Arbeitsmarkt in Wiesbaden, Frankfurt, Darmstadt und dem Rhein-Main-Gebiet aus erster Hand.",
              },
              {
                icon: Users,
                title: "Persönliche Begleitung",
                text: "Jeder Bewerber erhält einen festen Ansprechpartner, der den gesamten Vermittlungsprozess begleitet.",
              },
              {
                icon: Building2,
                title: "Arbeitgebernetzwerk",
                text: "Über 350 regionale Arbeitgeber in verschiedenen Branchen — von KMU bis Großunternehmen.",
              },
              {
                icon: FileCheck,
                title: "Transparente Prozesse",
                text: "Klare Dokumentation, nachvollziehbare Vermittlungsschritte und regelmäßige Statusberichte.",
              },
              {
                icon: TrendingUp,
                title: "Messbare Ergebnisse",
                text: "85% Vermittlungsquote und nachweisbare Integration in sozialversicherungspflichtige Beschäftigung.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-6 border border-border">
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zielgruppen */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
            Zielgruppen, die wir betreuen
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10">
            Wir arbeiten mit unterschiedlichen Personengruppen und passen unsere
            Vermittlungsstrategie individuell an.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Langzeitarbeitslose mit Integrationsbedarf",
              "Berufsrückkehrer und Wiedereinsteiger",
              "Geringqualifizierte mit Entwicklungspotenzial",
              "Menschen mit Migrationshintergrund",
              "Quereinsteiger und Berufswechsler",
              "Junge Erwachsene ohne abgeschlossene Ausbildung",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 bg-white rounded-lg border border-border">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regionale Abdeckung */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
            Regionale Abdeckung
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10">
            Wir vermitteln in ganz Hessen mit Schwerpunkt auf dem wirtschaftsstarken Rhein-Main-Gebiet.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "Wiesbaden",
              "Frankfurt am Main",
              "Darmstadt",
              "Offenbach",
              "Mainz-Kastel",
              "Eschborn",
            ].map((city) => (
              <div key={city} className="bg-background rounded-lg p-4 border border-border text-center">
                <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
                <span className="text-sm font-medium text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVGS Info */}
      <section className="py-14 lg:py-18 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Zusammenarbeit im Rahmen des AVGS
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Die Bundesagentur für Arbeit ermöglicht die Zusammenarbeit mit privaten
            Arbeitsvermittlern im Rahmen des Aktivierungs- und Vermittlungsgutscheins (AVGS).
            Bei erfolgreicher Vermittlung in sozialversicherungspflichtige Beschäftigung kann
            ein Erfolgshonorar direkt von der Agentur für Arbeit oder dem Jobcenter an den
            Vermittler gezahlt werden. Voraussetzung ist unter anderem eine AZAV-Zulassung.
          </p>
          <p className="text-sm text-muted mb-6">
            Sprechen Sie uns an, um die Möglichkeiten einer Zusammenarbeit zu besprechen.
          </p>
          <Link
            href="/avgs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors"
          >
            Mehr zum AVGS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Kooperation anfragen</h2>
          <p className="text-white/70 mb-6">
            Wir freuen uns auf den Austausch mit Ihnen. Lassen Sie uns gemeinsam
            herausfinden, wie wir arbeitsuchende Menschen in Hessen gezielt in
            Beschäftigung bringen können.
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
