import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — DSGVO",
  description:
    "Datenschutzerklärung von JobPilot. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Datenschutzerklärung
      </h1>

      <div className="bg-white rounded-2xl border border-border p-8 space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            2. Verantwortliche Stelle
          </h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
            JobPilot GmbH
            <br />
            Musterstraße 1<br />
            65183 Wiesbaden
            <br />
            E-Mail: datenschutz@jobpilot-hessen.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            3. Datenerfassung auf dieser Website
          </h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">
            Cookies
          </h3>
          <p>
            Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
            Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns
            dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
            machen.
          </p>
          <h3 className="font-semibold text-foreground mt-4 mb-2">
            Kontaktformular
          </h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns
            gespeichert.
          </p>
          <h3 className="font-semibold text-foreground mt-4 mb-2">
            Registrierung / Nutzerkonto
          </h3>
          <p>
            Bei der Registrierung werden Ihre E-Mail-Adresse, Ihr Name und Ihr
            Passwort (verschlüsselt) gespeichert. Optional können Sie weitere
            Daten wie Lebenslauf, Berufserfahrung und Qualifikationen
            hinterlegen, um unseren Vermittlungsservice zu nutzen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
            und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
            Wenden Sie sich dazu an: datenschutz@jobpilot-hessen.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            5. Datenweitergabe im Rahmen der Vermittlung
          </h2>
          <p>
            Im Rahmen unserer Vermittlungstätigkeit können bestimmte Daten
            (z.B. Qualifikationen, Berufserfahrung) mit potenziellen
            Arbeitgebern oder — bei Vorliegen eines AVGS — mit der Agentur
            für Arbeit geteilt werden. Dies geschieht ausschließlich mit
            Ihrer ausdrücklichen Einwilligung und auf Grundlage von Art. 6
            Abs. 1 lit. a DSGVO.
          </p>
        </section>

        <p className="text-sm">Stand: April 2026</p>
      </div>
    </div>
  );
}
