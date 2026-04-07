import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">Impressum</h1>

      <div className="bg-white rounded-2xl border border-border p-8 space-y-6 text-muted leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            JobPilot GmbH
            <br />
            Musterstraße 1<br />
            65183 Wiesbaden
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Kontakt</h2>
          <p>
            Telefon: +49 611 123 456 78
            <br />
            E-Mail: info@jobpilot-hessen.de
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Vertreten durch
          </h2>
          <p>Dr. Anna Weber (Geschäftsführerin)</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Registereintrag
          </h2>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: Amtsgericht Wiesbaden
            <br />
            Registernummer: HRB XXXXX
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a
            Umsatzsteuergesetz:
            <br />
            DE XXX XXX XXX
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p>
            Dr. Anna Weber
            <br />
            Musterstraße 1<br />
            65183 Wiesbaden
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit. Wir sind nicht bereit oder
            verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
            jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte
            fremde Informationen zu überwachen.
          </p>
        </section>
      </div>
    </div>
  );
}
