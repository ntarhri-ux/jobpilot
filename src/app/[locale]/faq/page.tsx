import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { ChevronRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Häufige Fragen zur Jobvermittlung in Hessen",
  description:
    "Antworten auf häufige Fragen zu JobPilot Hessen: Kosten, Ablauf, Regionen, Branchen, AVGS, Vermittlungsgutschein und mehr.",
  keywords: [
    "Jobvermittlung FAQ",
    "Arbeitsvermittlung Fragen",
    "AVGS Fragen",
    "Personalvermittlung Hessen FAQ",
  ],
};

const FAQ_SECTIONS = [
  {
    title: "Allgemein",
    items: [
      {
        q: "Was ist JobPilot Hessen?",
        a: "JobPilot Hessen ist ein regionaler privater Vermittlungsdienstleister mit Sitz in Wiesbaden. Wir unterstützen arbeitsuchende Menschen und Arbeitgeber bei passgenauer Vermittlung in Hessen und dem Rhein-Main-Gebiet.",
      },
      {
        q: "Ist JobPilot eine Jobbörse?",
        a: "Nein, wir sind mehr als eine Jobbörse. Wir sind ein persönlicher Vermittlungsdienstleister, der Bewerber individuell berät, gezielt an Arbeitgeber vermittelt und den gesamten Prozess begleitet.",
      },
      {
        q: "In welchen Regionen vermittelt JobPilot?",
        a: "Wir vermitteln in ganz Hessen mit Schwerpunkt auf Wiesbaden, Frankfurt am Main, Darmstadt, Offenbach, Mainz-Kastel, Eschborn und dem gesamten Rhein-Main-Gebiet.",
      },
    ],
  },
  {
    title: "Für Bewerber",
    items: [
      {
        q: "Ist die Vermittlung für mich kostenlos?",
        a: "Ja, für Arbeitsuchende ist unsere Vermittlung kostenlos. Die Finanzierung erfolgt über Arbeitgeberhonorare oder — sofern die Voraussetzungen erfüllt sind — über den Aktivierungs- und Vermittlungsgutschein (AVGS).",
      },
      {
        q: "Wie läuft die Vermittlung ab?",
        a: "In vier Schritten: 1. Kontaktaufnahme und Erstgespräch. 2. Profilerstellung und Beratung. 3. Gezielte Vermittlung an passende Arbeitgeber. 4. Begleitung bis zum Vertragsabschluss.",
      },
      {
        q: "Wie schnell bekomme ich eine Rückmeldung?",
        a: "Wir melden uns in der Regel innerhalb von 48 Stunden bei Ihnen und vereinbaren ein Beratungsgespräch.",
      },
      {
        q: "Welche Unterlagen brauche ich?",
        a: "Idealerweise einen aktuellen Lebenslauf. Wenn Sie keinen haben, helfen wir Ihnen bei der Erstellung. Zeugnisse und Qualifikationsnachweise sind hilfreich, aber nicht zwingend für den ersten Kontakt.",
      },
      {
        q: "Muss ich mich vorher bei der Arbeitsagentur melden?",
        a: "Nein, das ist keine Voraussetzung für unsere Vermittlung. Wenn Sie jedoch einen AVGS nutzen möchten, müssen Sie arbeitsuchend oder arbeitslos gemeldet sein.",
      },
    ],
  },
  {
    title: "Für Arbeitgeber",
    items: [
      {
        q: "Was kostet die Personalvermittlung für Arbeitgeber?",
        a: "Wir arbeiten in der Regel auf Erfolgsbasis. Details besprechen wir gerne in einem persönlichen Gespräch, da die Konditionen je nach Branche, Stellenprofil und Umfang variieren.",
      },
      {
        q: "Wie schnell erhalte ich passende Kandidaten?",
        a: "In der Regel stellen wir innerhalb von 5–10 Werktagen erste passende Profile vor. Bei dringendem Bedarf auch schneller.",
      },
      {
        q: "Welche Branchen deckt JobPilot ab?",
        a: "Wir vermitteln branchenübergreifend: IT, Finanzen, Gesundheit, Logistik, Verwaltung, Handwerk, Vertrieb, Bildung und mehr. Besonderer Fokus liegt auf den starken Branchen des Rhein-Main-Gebiets.",
      },
    ],
  },
  {
    title: "AVGS & Vermittlungsgutschein",
    items: [
      {
        q: "Was ist ein AVGS?",
        a: "Der Aktivierungs- und Vermittlungsgutschein (AVGS) ist ein Instrument der Agentur für Arbeit. Er ermöglicht Arbeitsuchenden, einen zugelassenen privaten Vermittler einzuschalten. Die Kosten trägt die Arbeitsagentur oder das Jobcenter.",
      },
      {
        q: "Kann ich meinen AVGS bei JobPilot einlösen?",
        a: "Bitte kontaktieren Sie uns, um die aktuellen Möglichkeiten zu besprechen. Die Voraussetzungen für die Abrechnung über AVGS umfassen unter anderem eine AZAV-Zulassung des Vermittlers.",
      },
      {
        q: "Wie bekomme ich einen AVGS?",
        a: "Sprechen Sie Ihren Berater bei der Agentur für Arbeit oder dem Jobcenter an. Nach 6 Wochen Arbeitslosigkeit besteht in der Regel ein Rechtsanspruch auf den Gutschein.",
      },
    ],
  },
  {
    title: "Datenschutz & Sicherheit",
    items: [
      {
        q: "Wie werden meine Daten geschützt?",
        a: "Wir verarbeiten Ihre Daten DSGVO-konform und ausschließlich zum Zweck der Vermittlung. Ihre Unterlagen werden nur mit Ihrer ausdrücklichen Zustimmung an Arbeitgeber weitergeleitet.",
      },
      {
        q: "Kann ich meine Daten löschen lassen?",
        a: "Ja, jederzeit. Kontaktieren Sie uns und wir löschen alle Ihre personenbezogenen Daten vollständig.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_SECTIONS.flatMap((section) =>
              section.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              }))
            ),
          }),
        }}
      />

      <section className="bg-primary text-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Häufige Fragen</h1>
          <p className="text-white/70 text-lg">
            Antworten auf die wichtigsten Fragen rund um JobPilot Hessen, unsere Vermittlung
            und den AVGS.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {FAQ_SECTIONS.map((section) => (
            <div key={section.title} className="mb-10 last:mb-0">
              <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
              <div className="space-y-2">
                {section.items.map((faq) => (
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
          ))}
        </div>
      </section>

      <section className="py-14 lg:py-18 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ihre Frage war nicht dabei?</h2>
          <p className="text-white/70 mb-6">Rufen Sie uns an oder schreiben Sie uns — wir helfen gerne weiter.</p>
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
