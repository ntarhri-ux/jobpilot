import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Clock,
  Shield,
  Users,
  Target,
  Phone,
  MapPin,
  TrendingUp,
  Zap,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Für Arbeitgeber — Personalvermittlung Hessen | Fachkräfte finden",
  description:
    "Passgenaue Personalvermittlung für Unternehmen in Hessen. Wir liefern qualifizierte Kandidaten aus Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet. Schnelle Besetzung, regionale Expertise.",
  keywords: [
    "Personalvermittlung Hessen",
    "Mitarbeiter finden Wiesbaden",
    "Fachkräfte Frankfurt",
    "Personaldienstleister Rhein-Main",
    "Arbeitnehmerüberlassung Hessen",
    "Recruiting Hessen",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/fuer-arbeitgeber",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/fuer-arbeitgeber",
      "en-US": "https://jobpilot-hessen.de/en/for-employers",
    },
  },
};

export default function FuerArbeitgeberPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium mb-5">
              <Building2 className="w-3.5 h-3.5" />
              <span>Für Arbeitgeber</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Passende Mitarbeiter aus Hessen — schnell und zuverlässig
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Als regionaler Vermittlungsdienstleister liefern wir Ihnen qualifizierte Kandidaten
              aus Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet. Vorausgewählt, motiviert und
              passgenau für Ihre offene Stelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Personalbedarf melden
              </Link>
              <a
                href="tel:+4961112345678"
                className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Warum JobPilot */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ihre Vorteile als Arbeitgeber
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Wir verstehen kleine und mittlere Unternehmen in Hessen. Unsere Vermittlung
              ist regional, persönlich und ergebnisorientiert.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Passgenaue Vorauswahl",
                text: "Wir schicken Ihnen nur Kandidaten, die fachlich und persönlich zu Ihrer Stelle passen. Keine Massenflut an Bewerbungen.",
              },
              {
                icon: MapPin,
                title: "Regionale Kandidaten",
                text: "Unsere Bewerber kommen aus Wiesbaden, Frankfurt, Darmstadt, Offenbach und dem gesamten Rhein-Main-Gebiet.",
              },
              {
                icon: Clock,
                title: "Schnelle Besetzung",
                text: "Erste passende Profile innerhalb von 5–10 Werktagen. Kurze Wege, direkte Kommunikation.",
              },
              {
                icon: Shield,
                title: "Geprüfte Profile",
                text: "Jeder Kandidat wird persönlich beraten und auf Eignung geprüft — Qualifikation, Motivation, Verfügbarkeit.",
              },
              {
                icon: Users,
                title: "Persönlicher Ansprechpartner",
                text: "Ein fester Berater betreut Ihr Unternehmen. Kein Callcenter, keine wechselnden Kontakte.",
              },
              {
                icon: TrendingUp,
                title: "Nachhaltige Besetzung",
                text: "Unser Ziel ist die langfristige Integration in sozialversicherungspflichtige Beschäftigung — nicht nur kurzfristige Besetzung.",
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

      {/* Branchen */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center">
            Branchen, in denen wir vermitteln
          </h2>
          <p className="text-muted text-center max-w-xl mx-auto mb-10">
            Branchenübergreifend und spezialisiert — wir kennen die Anforderungen
            in den wichtigsten Wirtschaftszweigen Hessens.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "IT & Software",
              "Finanzen & Banken",
              "Gesundheit & Pflege",
              "Logistik & Transport",
              "Verwaltung & Büro",
              "Handwerk & Produktion",
              "Vertrieb & Marketing",
              "Bildung & Soziales",
            ].map((branch) => (
              <div key={branch} className="bg-white rounded-lg p-4 border border-border text-center">
                <span className="text-sm font-medium text-foreground">{branch}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10 text-center">
            So arbeiten wir zusammen
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Anforderungsprofil klären",
                text: "In einem kurzen Gespräch erfassen wir Ihre Anforderungen: Qualifikation, Erfahrung, Einsatzort, Rahmenbedingungen.",
              },
              {
                step: "2",
                title: "Kandidatenvorauswahl",
                text: "Wir suchen in unserem regionalen Bewerberpool und führen Erstgespräche mit passenden Kandidaten.",
              },
              {
                step: "3",
                title: "Profilvorstellung",
                text: "Sie erhalten aussagekräftige Profile vorausgewählter Bewerber — inklusive unserer Einschätzung.",
              },
              {
                step: "4",
                title: "Vorstellungsgespräch & Einstellung",
                text: "Wir koordinieren Termine, begleiten den Prozess und stehen Ihnen bis zur erfolgreichen Einstellung zur Seite.",
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

      {/* Zahlen */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "350+", label: "Arbeitgeber vertrauen uns" },
              { value: "85%", label: "Vermittlungsquote" },
              { value: "< 48h", label: "Erste Rückmeldung" },
              { value: "5–10", label: "Tage bis zum ersten Profil" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Personalbedarf? Wir helfen.</h2>
          <p className="text-white/70 mb-6">
            Teilen Sie uns Ihren Bedarf mit. Wir melden uns innerhalb von 24 Stunden
            mit einem konkreten Vorschlag.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Anfrage senden
            </Link>
            <a
              href="tel:+4961112345678"
              className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> +49 611 123 456 78
            </a>
          </div>
          <p className="text-xs text-white/50 mt-4">Mo–Fr 9:00–18:00 Uhr</p>
        </div>
      </section>
    </>
  );
}
