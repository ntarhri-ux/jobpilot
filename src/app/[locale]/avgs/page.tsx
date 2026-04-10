import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  Phone,
  FileCheck,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AVGS Vermittlungsgutschein — Private Arbeitsvermittlung mit AVGS in Hessen",
  description:
    "Informationen zum Aktivierungs- und Vermittlungsgutschein (AVGS) bei JobPilot Hessen. Erfahren Sie, wie private Arbeitsvermittlung mit AVGS funktioniert und welche Voraussetzungen gelten.",
  keywords: [
    "AVGS Hessen",
    "Vermittlungsgutschein Wiesbaden",
    "Private Arbeitsvermittlung AVGS",
    "AVGS Arbeitsagentur",
    "Vermittlungsgutschein einlösen",
    "AZAV Zulassung Arbeitsvermittlung",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/avgs",
  },
};

export default function AVGSPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 text-xs font-medium mb-5">
              <FileCheck className="w-3.5 h-3.5" />
              <span>AVGS — Aktivierungs- und Vermittlungsgutschein</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Jobvermittlung mit Vermittlungsgutschein (AVGS)
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Der Aktivierungs- und Vermittlungsgutschein (AVGS) ermöglicht es Arbeitsuchenden,
              einen privaten Arbeitsvermittler einzuschalten. Hier erfahren Sie, wie das
              funktioniert und welche Voraussetzungen gelten.
            </p>
          </div>
        </div>
      </section>

      {/* Was ist der AVGS */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Was ist der AVGS?
          </h2>
          <div className="prose-sm text-muted leading-relaxed space-y-4">
            <p>
              Der <strong className="text-foreground">Aktivierungs- und Vermittlungsgutschein (AVGS)</strong> ist
              ein Instrument der Agentur für Arbeit und der Jobcenter. Er ermöglicht es
              arbeitsuchenden oder arbeitslosen Personen, einen zugelassenen privaten
              Arbeitsvermittler mit der Stellensuche zu beauftragen.
            </p>
            <p>
              Bei erfolgreicher Vermittlung in eine sozialversicherungspflichtige Beschäftigung
              von mindestens 15 Stunden pro Woche wird ein <strong className="text-foreground">Erfolgshonorar</strong> direkt
              von der Agentur für Arbeit oder dem Jobcenter an den Vermittler gezahlt. Für den
              Arbeitsuchenden ist die Vermittlung kostenlos.
            </p>
            <p>
              Die rechtliche Grundlage bildet <strong className="text-foreground">§ 45 Abs. 4 SGB III</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Voraussetzungen */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Voraussetzungen für den AVGS
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Für Arbeitsuchende:</h3>
              <ul className="space-y-2">
                {[
                  "Sie sind bei der Agentur für Arbeit oder dem Jobcenter arbeitsuchend oder arbeitslos gemeldet",
                  "Sie haben Anspruch auf einen AVGS — fragen Sie Ihren Berater bei der Arbeitsagentur oder dem Jobcenter",
                  "Nach 6 Wochen Arbeitslosigkeit besteht in der Regel ein Rechtsanspruch auf den AVGS (§ 45 Abs. 4 Satz 3 SGB III)",
                  "Der Gutschein ist in der Regel 3 Monate gültig und auf bestimmte Regionen oder Berufe beschränkbar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Für den privaten Vermittler:</h3>
              <ul className="space-y-2">
                {[
                  "Der Vermittler benötigt eine Zulassung nach AZAV (Akkreditierungs- und Zulassungsverordnung Arbeitsförderung)",
                  "Die Vermittlung muss in eine sozialversicherungspflichtige Beschäftigung mit mindestens 15 Wochenstunden erfolgen",
                  "Das Beschäftigungsverhältnis muss mindestens 6 Wochen bestehen, bevor die erste Rate gezahlt wird",
                  "Bei mindestens 6 Monaten Beschäftigung wird die zweite Rate fällig",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            So funktioniert die Vermittlung mit AVGS
          </h2>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "AVGS bei der Arbeitsagentur beantragen",
                text: "Sprechen Sie Ihren Berater bei der Agentur für Arbeit oder dem Jobcenter an und beantragen Sie einen Aktivierungs- und Vermittlungsgutschein.",
              },
              {
                step: "2",
                title: "Privaten Vermittler auswählen",
                text: "Wählen Sie einen zugelassenen privaten Arbeitsvermittler. Der Vermittler muss über eine AZAV-Zulassung verfügen.",
              },
              {
                step: "3",
                title: "Vermittlungsvertrag abschließen",
                text: "Sie schließen einen Vermittlungsvertrag mit dem privaten Vermittler. Dieser ist für Sie kostenlos — die Vergütung erfolgt bei Erfolg durch die Arbeitsagentur.",
              },
              {
                step: "4",
                title: "Gezielte Stellensuche und Vermittlung",
                text: "Der Vermittler sucht passende Stellen, bereitet Sie auf Gespräche vor und begleitet den Vermittlungsprozess.",
              },
              {
                step: "5",
                title: "Erfolgreiche Einstellung",
                text: "Bei erfolgreicher Aufnahme einer sozialversicherungspflichtigen Beschäftigung wird das Erfolgshonorar an den Vermittler gezahlt.",
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

      {/* Hinweis */}
      <section className="py-14 lg:py-18 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Wichtiger Hinweis</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Die Informationen auf dieser Seite dienen der allgemeinen Orientierung
                  und ersetzen keine individuelle Beratung. Ob und in welcher Form ein
                  AVGS erteilt wird, entscheidet Ihre zuständige Agentur für Arbeit oder
                  Ihr Jobcenter. Bitte klären Sie die genauen Voraussetzungen und Bedingungen
                  direkt mit Ihrem Berater. Weitere Informationen finden Sie auf der Website
                  der{" "}
                  <a
                    href="https://www.arbeitsagentur.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Bundesagentur für Arbeit
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Häufige Fragen zum AVGS
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Ist die Vermittlung mit AVGS für mich kostenlos?",
                a: "Ja, für Arbeitsuchende ist die Vermittlung über den AVGS kostenlos. Das Erfolgshonorar wird bei erfolgreicher Vermittlung direkt von der Agentur für Arbeit an den Vermittler gezahlt.",
              },
              {
                q: "Habe ich Anspruch auf einen AVGS?",
                a: "Nach 6 Wochen Arbeitslosigkeit besteht in der Regel ein Rechtsanspruch (§ 45 Abs. 4 Satz 3 SGB III). Davor liegt die Entscheidung im Ermessen Ihres Beraters. Sprechen Sie Ihren Berater bei der Arbeitsagentur oder dem Jobcenter an.",
              },
              {
                q: "Wie lange ist der AVGS gültig?",
                a: "Der AVGS ist in der Regel 3 Monate gültig. Er kann regional und berufsfachlich eingeschränkt sein.",
              },
              {
                q: "Was bedeutet AZAV-Zulassung?",
                a: "Die AZAV (Akkreditierungs- und Zulassungsverordnung Arbeitsförderung) regelt die Qualitätsstandards für Träger und Vermittler. Eine AZAV-Zulassung ist Voraussetzung, damit ein privater Vermittler über den AVGS abrechnen kann.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-background rounded-lg border border-border group">
                <summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-semibold text-foreground hover:text-primary transition-colors list-none">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Fragen zum AVGS?</h2>
          <p className="text-white/70 mb-6">
            Wir beraten Sie gerne und klären gemeinsam, welche Möglichkeiten der
            Förderung und Vermittlung für Sie bestehen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center"
            >
              Beratungsgespräch anfragen
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
