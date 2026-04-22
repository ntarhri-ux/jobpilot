import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Star,
  Clock,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Jobvermittlung Wiesbaden — Kostenlose Arbeitsvermittlung & Karriereberatung | JobPilot",
  description:
    "Professionelle Jobvermittlung in Wiesbaden ✓ Kostenlos für Bewerber ✓ AVGS-Coaching ✓ Persönliche Beratung ✓ Über 80 regionale Arbeitgeber. Finden Sie Ihren Traumjob in der Landeshauptstadt Hessens.",
  keywords: [
    "Jobvermittlung Wiesbaden",
    "Arbeitsvermittlung Wiesbaden",
    "Personalvermittlung Wiesbaden",
    "Jobs Wiesbaden",
    "Stellenangebote Wiesbaden",
    "Karriereberatung Wiesbaden",
    "AVGS Wiesbaden",
    "Arbeit finden Wiesbaden",
    "Jobcoaching Wiesbaden",
    "Bewerbungshilfe Wiesbaden",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/jobvermittlung-wiesbaden",
  },
  openGraph: {
    title: "Jobvermittlung Wiesbaden — Kostenlos & Persönlich | JobPilot",
    description:
      "Ihre regionale Arbeitsvermittlung in Wiesbaden. Kostenlos für Bewerber, persönliche Karriereberatung, AVGS-Unterstützung.",
    url: "https://jobpilot-hessen.de/de/jobvermittlung-wiesbaden",
  },
};

const BRANCHEN = [
  {
    name: "Öffentlicher Dienst",
    jobs: "320+",
    desc: "Land Hessen, Stadtverwaltung, Ministerien",
  },
  {
    name: "Versicherungen & Finanzen",
    jobs: "180+",
    desc: "R+V, DBV, SV SparkassenVersicherung",
  },
  {
    name: "Gesundheitswesen",
    jobs: "150+",
    desc: "Helios HSK, Asklepios, DKD",
  },
  {
    name: "IT & Digitalisierung",
    jobs: "90+",
    desc: "Softwareentwicklung, IT-Support, Datenanalyse",
  },
  {
    name: "Tourismus & Gastronomie",
    jobs: "110+",
    desc: "Hotels, Kurhäuser, Veranstaltungen",
  },
  {
    name: "Handel & Dienstleistung",
    jobs: "200+",
    desc: "Einzelhandel, Beratung, Verwaltung",
  },
];

const VORTEILE = [
  {
    icon: Shield,
    title: "100% Kostenlos",
    desc: "Für Bewerber entstehen keine Kosten — wir werden vom Arbeitgeber vergütet.",
  },
  {
    icon: Users,
    title: "Persönliche Beratung",
    desc: "Ein fester Ansprechpartner, der Sie kennt und individuell berät.",
  },
  {
    icon: MapPin,
    title: "Regional verwurzelt",
    desc: "Wir kennen den Wiesbadener Arbeitsmarkt und haben direkte Kontakte zu Arbeitgebern.",
  },
  {
    icon: Star,
    title: "AVGS-Coaching",
    desc: "Kostenloses Karriere-Coaching mit Aktivierungs- und Vermittlungsgutschein.",
  },
  {
    icon: Clock,
    title: "Schnelle Vermittlung",
    desc: "Durchschnittlich vermitteln wir innerhalb von 4-8 Wochen.",
  },
  {
    icon: Briefcase,
    title: "80+ Arbeitgeber",
    desc: "Zugang zu regionalen Stellenangeboten, die nicht öffentlich ausgeschrieben sind.",
  },
];

const FAQS = [
  {
    q: "Ist die Jobvermittlung in Wiesbaden wirklich kostenlos?",
    a: "Ja, für Bewerber ist unsere Vermittlung zu 100% kostenlos. Die Kosten übernimmt der Arbeitgeber. Auch das AVGS-Coaching ist für Sie kostenfrei — die Kosten werden von der Agentur für Arbeit oder dem Jobcenter getragen.",
  },
  {
    q: "Welche Jobs werden in Wiesbaden am meisten gesucht?",
    a: "In Wiesbaden sind besonders Stellen im öffentlichen Dienst (Land Hessen, Stadtverwaltung), bei Versicherungen (R+V, DBV), im Gesundheitswesen und in der IT-Branche gefragt. Auch kaufmännische Stellen und Positionen im Tourismusbereich sind stark nachgefragt.",
  },
  {
    q: "Wie bekomme ich einen AVGS für Wiesbaden?",
    a: "Den Aktivierungs- und Vermittlungsgutschein (AVGS) erhalten Sie bei Ihrer Agentur für Arbeit Wiesbaden (Klarenthaler Str. 34) oder beim Jobcenter Wiesbaden. Sprechen Sie Ihren Vermittler aktiv darauf an. Nach 6 Wochen Arbeitslosigkeit haben Sie einen Rechtsanspruch darauf.",
  },
  {
    q: "Wie schnell finde ich einen Job über JobPilot in Wiesbaden?",
    a: "Die durchschnittliche Vermittlungsdauer beträgt 4-8 Wochen, abhängig von Ihrer Qualifikation und Ihren Wünschen. Dank unserer direkten Kontakte zu regionalen Arbeitgebern können wir oft schneller vermitteln als andere Anbieter.",
  },
  {
    q: "Vermittelt JobPilot auch Zeitarbeit in Wiesbaden?",
    a: "Unser Fokus liegt auf der direkten Festanstellung. Wir vermitteln Sie direkt an den Arbeitgeber — ohne Umweg über Zeitarbeit. So haben Sie von Anfang an einen sicheren Arbeitsplatz mit allen Vorteilen einer Festanstellung.",
  },
];

export default function JobvermittlungWiesbaden() {
  return (
    <>
      {/* JSON-LD: LocalBusiness + FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            name: "JobPilot Hessen — Jobvermittlung Wiesbaden",
            description:
              "Professionelle und kostenlose Jobvermittlung in Wiesbaden. Persönliche Karriereberatung, AVGS-Coaching und regionale Arbeitsvermittlung.",
            url: "https://jobpilot-hessen.de/de/jobvermittlung-wiesbaden",
            telephone: "+49 611 95009876",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Mainzer Straße 25",
              addressLocality: "Wiesbaden",
              postalCode: "65185",
              addressRegion: "Hessen",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.0782,
              longitude: 8.2397,
            },
            areaServed: [
              { "@type": "City", name: "Wiesbaden" },
              { "@type": "City", name: "Mainz-Kastel" },
              { "@type": "City", name: "Taunusstein" },
              { "@type": "City", name: "Eltville" },
            ],
            priceRange: "Kostenlos für Bewerber",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
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
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium mb-6 border border-white/10">
              <MapPin className="w-3.5 h-3.5" /> Wiesbaden &
              Rhein-Main-Gebiet
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Jobvermittlung in Wiesbaden — Kostenlos & Persönlich
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              Als regionaler Vermittlungsdienstleister in der Landeshauptstadt
              Hessens verbinden wir Bewerber mit den besten Arbeitgebern in
              Wiesbaden. Persönliche Beratung, AVGS-Coaching und über 80
              regionale Partnerunternehmen — 100% kostenlos für Sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
              >
                Kostenlos beraten lassen <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
              >
                <Briefcase className="w-4 h-4" /> Jobs in Wiesbaden
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Vermittelte Bewerber", value: "500+" },
            { label: "Partnerunternehmen", value: "80+" },
            { label: "Kundenzufriedenheit", value: "97%" },
            { label: "Ø Vermittlungsdauer", value: "6 Wochen" },
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

        {/* Vorteile */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Warum JobPilot für Ihre Jobvermittlung in Wiesbaden?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {VORTEILE.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <v.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                {v.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* So funktioniert's */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          So funktioniert unsere Arbeitsvermittlung in Wiesbaden
        </h2>
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              step: "1",
              title: "Erstgespräch",
              desc: "Kostenlose Beratung — persönlich oder telefonisch. Wir lernen Sie, Ihre Stärken und Wünsche kennen.",
            },
            {
              step: "2",
              title: "Profil & Coaching",
              desc: "Wir erstellen Ihr Bewerberprofil und optimieren Ihre Unterlagen. AVGS-Coaching inklusive.",
            },
            {
              step: "3",
              title: "Vermittlung",
              desc: "Wir präsentieren Sie gezielt bei passenden Arbeitgebern in Wiesbaden und Umgebung.",
            },
            {
              step: "4",
              title: "Neuer Job",
              desc: "Sie starten bei Ihrem neuen Arbeitgeber. Wir begleiten Sie auch in der Probezeit.",
            },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {s.step}
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Branchen */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Top-Branchen für Jobvermittlung in Wiesbaden
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BRANCHEN.map((b) => (
            <div
              key={b.name}
              className="bg-white border border-border rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">{b.name}</h3>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {b.jobs} Stellen
                </span>
              </div>
              <p className="text-sm text-muted">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Häufige Fragen zur Jobvermittlung in Wiesbaden
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
            Jetzt Ihre kostenlose Beratung in Wiesbaden starten
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ob Berufseinsteiger, Wiedereinsteiger oder erfahrene Fachkraft — wir
            finden den passenden Job für Sie in Wiesbaden und der Region
            Rhein-Main.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-all"
            >
              <Phone className="w-4 h-4" /> Termin vereinbaren
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
