import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  FileText,
  MessageSquare,
  Zap,
  Phone,
  Target,
  Heart,
  Clock,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Für Bewerber — Kostenlose Jobvermittlung in Hessen",
  description:
    "Kostenlose Arbeitsvermittlung für Arbeitsuchende in Wiesbaden, Frankfurt und Hessen. Persönliche Beratung, Bewerbungshilfe und gezielte Vermittlung an regionale Arbeitgeber.",
  keywords: [
    "Kostenlose Jobvermittlung Hessen",
    "Arbeitsvermittlung Wiesbaden",
    "Job finden Frankfurt",
    "Bewerbungshilfe kostenlos",
    "Karriereberatung Hessen",
    "Arbeit suchen Rhein-Main",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/fuer-bewerber",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/fuer-bewerber",
      "en-US": "https://jobpilot-hessen.de/en/for-jobseekers",
    },
  },
};

export default function FuerBewerberPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium mb-5">
              <Users className="w-3.5 h-3.5" />
              <span>Für Arbeitsuchende</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Ihre neue Stelle in Hessen — persönlich vermittelt
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              JobPilot Hessen ist Ihr regionaler privater Vermittlungsdienstleister. Wir unterstützen
              arbeitsuchende Menschen beim Einstieg in den Arbeitsmarkt — kostenlos, persönlich und mit
              Fokus auf nachhaltige Beschäftigung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/jobs"
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Stellenangebote ansehen
              </Link>
              <Link
                href="/kontakt"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center"
              >
                Beratungsgespräch anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
            Was wir für Sie tun
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Passgenaue Vermittlung",
                text: "Wir analysieren Ihre Qualifikationen und Wünsche und vermitteln Sie gezielt an passende Arbeitgeber in der Region.",
              },
              {
                icon: Heart,
                title: "Persönliche Begleitung",
                text: "Ein fester Ansprechpartner begleitet Sie vom ersten Gespräch bis zum Vertragsabschluss — kein Massenverfahren.",
              },
              {
                icon: FileText,
                title: "Bewerbungshilfe",
                text: "Professionelle Unterstützung bei Lebenslauf, Anschreiben und Bewerbungsunterlagen.",
              },
              {
                icon: MessageSquare,
                title: "Interview-Vorbereitung",
                text: "Wir bereiten Sie gezielt auf Vorstellungsgespräche vor — mit Tipps und Übungssituationen.",
              },
              {
                icon: MapPin,
                title: "Regionale Expertise",
                text: "Wir kennen den Arbeitsmarkt in Wiesbaden, Frankfurt, Darmstadt und dem gesamten Rhein-Main-Gebiet.",
              },
              {
                icon: Shield,
                title: "Kostenlos für Sie",
                text: "Unsere Vermittlung ist für Arbeitsuchende kostenlos. Unterstützung im Rahmen bestehender Förderwege ist möglich.",
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

      {/* Ablauf */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
            So läuft die Vermittlung ab
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Kontakt aufnehmen",
                text: "Registrieren Sie sich online oder rufen Sie uns an. Wir vereinbaren ein erstes Beratungsgespräch — telefonisch, per Video oder vor Ort in Wiesbaden.",
              },
              {
                step: "2",
                title: "Profil & Beratung",
                text: "Gemeinsam klären wir Ihre beruflichen Ziele, Qualifikationen und Wünsche. Wir erstellen ein aussagekräftiges Bewerberprofil.",
              },
              {
                step: "3",
                title: "Gezielte Vermittlung",
                text: "Wir suchen passende Stellenangebote in unserem Netzwerk und stellen den Kontakt zu geprüften Arbeitgebern in der Region her.",
              },
              {
                step: "4",
                title: "Begleitung bis zum Vertrag",
                text: "Wir unterstützen Sie bei Vorstellungsgesprächen und begleiten den Prozess bis zur erfolgreichen Einstellung.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
            Für wen ist unsere Vermittlung?
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10">
            Wir unterstützen Menschen in unterschiedlichen Lebenssituationen beim Einstieg
            oder Wiedereinstieg in den Arbeitsmarkt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Arbeitsuchende mit und ohne Berufserfahrung",
              "Wiedereinsteiger nach Elternzeit oder Krankheit",
              "Quereinsteiger und Berufswechsler",
              "Berufseinsteiger und Absolventen",
              "Menschen mit Vermittlungsgutschein (AVGS)",
              "Fachkräfte auf Stellensuche in Hessen",
              "Teilzeitsuche und Minijob-Interessenten",
              "Menschen mit Migrationshintergrund",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 p-3 bg-background rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVGS Hinweis */}
      <section className="py-14 lg:py-18 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Vermittlungsgutschein (AVGS)?
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Wenn Sie von der Agentur für Arbeit oder dem Jobcenter einen Aktivierungs- und
            Vermittlungsgutschein (AVGS) erhalten haben, kann unsere Vermittlung darüber
            abgerechnet werden — sofern die Voraussetzungen erfüllt sind. Sprechen Sie uns an,
            wir beraten Sie gerne.
          </p>
          <Link
            href="/avgs"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors"
          >
            Mehr zum AVGS erfahren <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-white/70 mb-6">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir melden uns
            innerhalb von 48 Stunden bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Beratung anfragen
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
