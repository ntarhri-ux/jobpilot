import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HeroSearch from "@/components/HeroSearch";
import {
  MapPin,
  Briefcase,
  Users,
  Trophy,
  Star,
  Target,
  Heart,
  Shield,
  ArrowRight,
  Building2,
  GraduationCap,
  Stethoscope,
  Wrench,
  TrendingUp,
  Truck,
  Monitor,
  CheckCircle2,
  Phone,
  Clock,
  ChevronRight,
  Handshake,
  FileText,
  MessageSquare,
  Zap,
  Award,
} from "lucide-react";

export const metadata = {
  title:
    "JobPilot Hessen — Jobvermittlung & Stellenangebote in Wiesbaden, Frankfurt & Rhein-Main",
  description:
    "Regionale private Arbeitsvermittlung in Hessen. Stellenangebote in Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet. Persönliche Karriereberatung und gezielte Vermittlung. Unterstützung im Rahmen des AVGS möglich.",
  keywords: [
    "Jobs Hessen",
    "Stellenangebote Wiesbaden",
    "Stellenangebote Frankfurt",
    "Jobvermittlung Hessen",
    "Arbeitsvermittlung Wiesbaden",
    "Karriereberatung Rhein-Main",
    "Arbeit finden Hessen",
    "Kostenlose Jobvermittlung",
  ],
  alternates: {
    canonical: "https://jobpilot-hessen.de/de",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de",
      "en-US": "https://jobpilot-hessen.de/en",
    },
  },
};

export default function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = useTranslations();

  return (
    <>
      {/* JSON-LD — WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JobPilot Hessen",
            url: "https://jobpilot-hessen.de",
            description:
              "Persönliche Jobvermittlung für Hessen — Wiesbaden, Frankfurt und Rhein-Main.",
            inLanguage: ["de-DE", "en-US"],
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://jobpilot-hessen.de/jobs?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* JSON-LD — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmploymentAgency",
            name: "JobPilot Hessen",
            url: "https://jobpilot-hessen.de",
            description:
              "Regionaler privater Vermittlungsdienstleister für Hessen. Persönliche Begleitung von Bewerbern und Arbeitgebern bei passgenauer Vermittlung.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Bahnhofstraße 42",
              addressLocality: "Wiesbaden",
              addressRegion: "Hessen",
              postalCode: "65185",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 50.0826,
              longitude: 8.24,
            },
            telephone: "+4961112345678",
            email: "info@jobpilot-hessen.de",
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
            areaServed: [
              { "@type": "City", name: "Wiesbaden" },
              { "@type": "City", name: "Frankfurt am Main" },
              { "@type": "City", name: "Darmstadt" },
              { "@type": "City", name: "Offenbach" },
              { "@type": "City", name: "Mainz" },
              { "@type": "State", name: "Hessen" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "340",
              bestRating: "5",
            },
          }),
        }}
      />
      {/* JSON-LD — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ist die Jobvermittlung bei JobPilot kostenlos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, für Arbeitssuchende ist unsere Vermittlung komplett kostenlos. Mit einem Vermittlungsgutschein der Agentur für Arbeit erhalten Sie zusätzlich kostenlose Karriereberatung und Coaching.",
                },
              },
              {
                "@type": "Question",
                name: "In welchen Regionen vermittelt JobPilot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wir vermitteln in ganz Hessen mit Schwerpunkt auf Wiesbaden, Frankfurt am Main, Darmstadt, Offenbach und dem gesamten Rhein-Main-Gebiet.",
                },
              },
              {
                "@type": "Question",
                name: "Wie läuft die Jobvermittlung ab?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In drei Schritten: 1. Profil erstellen und Lebenslauf hochladen. 2. Persönliches Beratungsgespräch zur Klärung Ihrer Wünsche und Stärken. 3. Gezielte Vermittlung an passende Arbeitgeber in der Region.",
                },
              },
              {
                "@type": "Question",
                name: "Welche Branchen deckt JobPilot ab?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Wir vermitteln in allen Branchen: IT & Software, Finanzen & Banken, Gesundheit & Pflege, Logistik, Verwaltung, Handwerk, Vertrieb, Bildung und mehr.",
                },
              },
              {
                "@type": "Question",
                name: "Kann ich JobPilot auch als Arbeitgeber nutzen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, Arbeitgeber können Stellenanzeigen schalten und von unserer Vorauswahl passender Kandidaten profitieren. Wir bieten passgenaue Vermittlung für die Region Hessen.",
                },
              },
            ],
          }),
        }}
      />

      {/* ============================================ */}
      {/* HERO — Wiesbaden Skyline, seriös, regional */}
      {/* ============================================ */}
      <section className="relative text-white overflow-hidden" aria-label="Hero">
        {/* Background image with subtle zoom animation */}
        <div className="absolute inset-0">
          <img
            src="/hero-wiesbaden.svg"
            alt=""
            role="presentation"
            className="w-full h-full object-cover hero-bg-animate"
            fetchPriority="high"
          />
        </div>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3c]/70 via-[#0d1f3c]/50 to-[#0d1f3c]/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-medium mb-6 border border-white/10">
              <Shield className="w-3.5 h-3.5 text-accent" />
              <span className="text-white/80">Regionaler privater Vermittlungsdienstleister in Hessen</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Jobs in Hessen finden.
              <span className="block text-white/60 text-xl sm:text-2xl lg:text-3xl font-normal mt-3 tracking-normal">
                Persönliche Vermittlung für Wiesbaden, Frankfurt
                <span className="hidden sm:inline"> und das Rhein-Main-Gebiet</span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/50 mb-8 leading-relaxed max-w-xl mx-auto">
              Digital unterstützt, persönlich begleitet — mit kostenloser Karriereberatung und gezieltem Job-Matching in Ihrer Region.
            </p>

            {/* 2 klare CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                href="/jobs"
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Jobs entdecken
              </Link>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center"
              >
                Kostenlose Beratung anfragen
              </Link>
            </div>

            {/* Suchleiste */}
            <HeroSearch />
          </div>
        </div>

        {/* Subtle bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ============================================ */}
      {/* VERTRAUENSLEISTE — harte Fakten über dem Fold */}
      {/* ============================================ */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-border">
            {[
              { value: "2.500+", label: "Offene Stellen" },
              { value: "350+", label: "Arbeitgeber" },
              { value: "85%", label: "Vermittlungsquote" },
              { value: "< 48h", label: "Reaktionszeit" },
              { value: "100%", label: "Kostenlos für Bewerber" },
            ].map((item) => (
              <div key={item.label} className="py-5 px-4 text-center">
                <div className="text-lg lg:text-xl font-bold text-primary">
                  {item.value}
                </div>
                <div className="text-xs text-muted mt-0.5">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FÜR WEN — 3 Zielgruppen klar getrennt */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Für wen ist JobPilot?
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Ob Sie eine Stelle suchen, Mitarbeiter finden oder als Institution
              kooperieren möchten — wir haben die passende Lösung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bewerber */}
            <div className="bg-background rounded-xl p-7 border border-border hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Für Arbeitssuchende
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Kostenlose Jobvermittlung, persönliche Beratung und
                Bewerbungshilfe. Wir finden die passende Stelle in Ihrer Region.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Persönliches Matching",
                  "Bewerbungscoaching",
                  "Kostenlos mit Vermittlungsgutschein",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Jobs finden <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Arbeitgeber */}
            <div className="bg-background rounded-xl p-7 border border-border hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Für Arbeitgeber
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Passende Fachkräfte aus der Region. Wir übernehmen Vorauswahl,
                Screening und liefern qualifizierte Kandidaten.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Gezielte Kandidatenvorauswahl",
                  "Regionales Talentpool",
                  "Schnelle Besetzung",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Mitarbeiter finden <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Institutionen */}
            <div className="bg-background rounded-xl p-7 border border-border hover:border-primary/20 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Handshake className="w-5 h-5 text-accent-dark" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Für Jobcenter & Träger
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Kooperation mit Arbeitsagentur, Bildungsträgern und Kommunen.
                Gemeinsam für gezielte regionale Vermittlung.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Regionaler Vermittlungsdienstleister",
                  "AVGS-Unterstützung möglich",
                  "Nachhaltige Integration",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Kooperation anfragen <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SO FUNKTIONIERT ES — 3 Schritte */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              So läuft die Vermittlung ab
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Drei Schritte von der Anmeldung bis zum neuen Job — persönlich
              begleitet und transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: FileText,
                title: "Profil erstellen",
                description:
                  "Registrieren Sie sich und laden Sie Ihren Lebenslauf hoch. Wir analysieren Ihre Qualifikationen und Wünsche.",
              },
              {
                step: "2",
                icon: MessageSquare,
                title: "Persönliche Beratung",
                description:
                  "In einem individuellen Gespräch klären wir Ihre Ziele, Stärken und die passende Branche — online oder vor Ort.",
              },
              {
                step: "3",
                icon: Zap,
                title: "Gezielte Vermittlung",
                description:
                  "Wir vermitteln Sie direkt an geprüfte Arbeitgeber in Ihrer Region. Persönliche Begleitung bis zum Vertragsabschluss.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Jetzt kostenlos registrieren <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BRANCHEN — Regionale Stärken */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Branchen in Hessen
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Von IT über Pflege bis Logistik — wir kennen den regionalen
              Arbeitsmarkt und vermitteln branchenübergreifend.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Monitor,
                label: "IT & Software",
                count: "380+",
                region: "Frankfurt, Eschborn",
              },
              {
                icon: Building2,
                label: "Finanzen & Banken",
                count: "210+",
                region: "Frankfurt",
              },
              {
                icon: Stethoscope,
                label: "Gesundheit & Pflege",
                count: "290+",
                region: "Wiesbaden, Darmstadt",
              },
              {
                icon: Wrench,
                label: "Ingenieurwesen",
                count: "175+",
                region: "Rhein-Main",
              },
              {
                icon: TrendingUp,
                label: "Vertrieb & Marketing",
                count: "320+",
                region: "Wiesbaden, Frankfurt",
              },
              {
                icon: Briefcase,
                label: "Verwaltung & Büro",
                count: "250+",
                region: "Wiesbaden",
              },
              {
                icon: Truck,
                label: "Logistik & Transport",
                count: "140+",
                region: "Flughafen, Offenbach",
              },
              {
                icon: GraduationCap,
                label: "Bildung & Soziales",
                count: "165+",
                region: "Hessen-weit",
              },
            ].map((cat) => (
              <Link
                key={cat.label}
                href="/jobs"
                className="group rounded-xl p-5 bg-background border border-border hover:border-primary/20 hover:bg-white transition-all"
              >
                <cat.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-0.5">
                  {cat.label}
                </h3>
                <p className="text-xs text-muted">{cat.count} Stellen</p>
                <p className="text-xs text-primary/60 mt-1">{cat.region}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* AKTUELLE JOBS */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Aktuelle Stellenangebote
              </h2>
              <p className="text-sm text-muted">
                Die neuesten Jobs aus Wiesbaden, Frankfurt und der Region
              </p>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary-light transition-colors"
            >
              Alle Stellen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                slug: "senior-software-engineer-deutsche-bank",
                title: "Senior Software Engineer",
                company: "Deutsche Bank AG",
                location: "Frankfurt am Main",
                type: "Vollzeit",
                salary: "65.000 - 85.000 EUR",
                tags: ["React", "TypeScript", "Node.js"],
              },
              {
                slug: "marketing-manager-rv",
                title: "Marketing Manager (m/w/d)",
                company: "R+V Versicherung",
                location: "Wiesbaden",
                type: "Vollzeit",
                salary: "50.000 - 65.000 EUR",
                tags: ["Marketing", "Social Media", "B2B"],
              },
              {
                slug: "pflegefachkraft-helios",
                title: "Pflegefachkraft (m/w/d)",
                company: "HELIOS Klinikum",
                location: "Wiesbaden",
                type: "Voll-/Teilzeit",
                salary: "38.000 - 48.000 EUR",
                tags: ["Pflege", "Klinik"],
              },
              {
                slug: "sachbearbeiter-finanzen-stadt-wiesbaden",
                title: "Sachbearbeiter Finanzen",
                company: "Stadt Wiesbaden",
                location: "Wiesbaden",
                type: "Vollzeit",
                salary: "TVöD E9",
                tags: ["Verwaltung", "Öffentlicher Dienst"],
              },
              {
                slug: "ausbildung-fachinformatiker-sap",
                title: "Ausbildung Fachinformatiker",
                company: "SAP SE",
                location: "Eschborn",
                type: "Ausbildung",
                salary: "1.100 EUR/Monat",
                tags: ["IT", "Ausbildung"],
              },
              {
                slug: "logistikleiter-dhl",
                title: "Logistikleiter (m/w/d)",
                company: "DHL Supply Chain",
                location: "Frankfurt-Flughafen",
                type: "Vollzeit",
                salary: "55.000 - 70.000 EUR",
                tags: ["Logistik", "Führung"],
              },
            ].map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}` as any}
                className="group bg-white rounded-xl border border-border p-5 hover:border-primary/20 hover:shadow-md transition-all block"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">
                      {job.title}
                    </h3>
                    <p className="text-xs text-muted">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> {job.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-primary">
                    {job.salary}
                  </p>
                  <div className="flex gap-1">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-background rounded text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-1 text-sm text-primary font-semibold"
            >
              Alle Stellen ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNERSCHAFT — Vertrauen + Professionalität */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/5 rounded-full px-3 py-1.5 text-xs text-primary font-medium mb-5">
                <Shield className="w-3.5 h-3.5" />
                Unterstützung im Rahmen bestehender Förderwege möglich
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Professionelle Vermittlung mit persönlicher Begleitung
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Als regionaler privater Vermittlungsdienstleister in Hessen
                bieten wir persönliche Beratung, Zugang zu regionalen Arbeitgebern
                und Begleitung bis zur erfolgreichen Einstellung. Unterstützung
                im Rahmen bestehender Förderwege wie dem AVGS ist möglich.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Kostenlose Vermittlung für Arbeitsuchende",
                  "Persönliche Beratung und Bewerbungscoaching",
                  "Gezielte Vermittlung an regionale Arbeitgeber",
                  "Begleitung bei Wiedereinstieg und Quereinstieg",
                  "Unterstützung mit Vermittlungsgutschein (AVGS) möglich",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/coaching"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors"
              >
                Mehr zu Coaching & Beratung <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { value: "12.000+", label: "Beratungsgespräche" },
                    { value: "85%", label: "Vermittlungsquote" },
                    { value: "200+", label: "Partnerunternehmen" },
                    { value: "4.8/5", label: "Kundenbewertung" },
                  ].map((s) => (
                    <div key={s.label} className="text-center py-4">
                      <div className="text-xl font-bold text-primary">
                        {s.value}
                      </div>
                      <div className="text-xs text-muted mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-5 bg-background rounded-xl p-5 border border-border">
                <div className="flex items-center gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground italic leading-relaxed mb-3">
                  &ldquo;Dank JobPilot habe ich innerhalb von 3 Wochen eine
                  Stelle als Projektmanagerin in Frankfurt gefunden. Die
                  persönliche Beratung war entscheidend.&rdquo;
                </blockquote>
                <p className="text-xs text-muted">
                  — Maria K., Projektmanagerin, Frankfurt am Main
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* REGIONALE ABDECKUNG */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Regionale Vermittlung in ganz Hessen
            </h2>
            <p className="text-muted max-w-xl mx-auto">
              Wir kennen den lokalen Arbeitsmarkt. Unsere Berater sind vor Ort
              und verstehen die Besonderheiten jeder Region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { city: "Wiesbaden", jobs: "420+" },
              { city: "Frankfurt", jobs: "680+" },
              { city: "Darmstadt", jobs: "290+" },
              { city: "Offenbach", jobs: "180+" },
              { city: "Mainz-Kastel", jobs: "95+" },
              { city: "Eschborn", jobs: "210+" },
            ].map((item) => (
              <Link
                key={item.city}
                href="/jobs"
                className="bg-white rounded-lg p-4 border border-border text-center hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-primary mx-auto mb-1.5" />
                <div className="font-semibold text-foreground text-sm">
                  {item.city}
                </div>
                <div className="text-xs text-muted">{item.jobs} Stellen</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BLOG PREVIEW — Ratgeber */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                Ratgeber & Karriere-Tipps
              </h2>
              <p className="text-sm text-muted">
                Expertenwissen für Ihre Bewerbung und Karriere in Hessen
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1 text-sm text-primary font-semibold hover:text-primary-light transition-colors"
            >
              Alle Artikel <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                slug: "10-tipps-vorstellungsgespraech",
                title: "10 Tipps für das perfekte Vorstellungsgespräch",
                excerpt:
                  "Vorbereitung, Körpersprache und die richtigen Antworten auf schwierige Fragen.",
                category: "Bewerbungstipps",
                readTime: "12 Min.",
                image: "/blog/vorstellungsgespraech.svg",
              },
              {
                slug: "arbeitsmarkt-hessen-2026",
                title: "Arbeitsmarkt Hessen 2026: Trends und Chancen",
                excerpt:
                  "Welche Branchen boomen in der Rhein-Main-Region? Aktuelle Entwicklungen.",
                category: "Arbeitsmarkt",
                readTime: "14 Min.",
                image: "/blog/arbeitsmarkt-hessen.svg",
              },
              {
                slug: "lebenslauf-guide",
                title: "Lebenslauf schreiben: Der ultimative Guide",
                excerpt:
                  "Von der Struktur bis zum Design — alles für den professionellen Lebenslauf.",
                category: "Bewerbungstipps",
                readTime: "15 Min.",
                image: "/blog/lebenslauf.svg",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as any}
                className="block group"
              >
                <article className="bg-background rounded-xl border border-border overflow-hidden hover:border-primary/20 hover:shadow-md transition-all h-full">
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-foreground text-[10px] font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted mb-2">{post.readTime} Lesezeit</p>
                    <h3 className="font-semibold text-foreground text-sm mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ — für SEO + Vertrauen */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Ist die Jobvermittlung bei JobPilot kostenlos?",
                a: "Ja, für Arbeitssuchende ist unsere Vermittlung komplett kostenlos. Mit einem Vermittlungsgutschein der Agentur für Arbeit erhalten Sie zusätzlich kostenlose Karriereberatung und Coaching.",
              },
              {
                q: "In welchen Regionen vermittelt JobPilot?",
                a: "Wir vermitteln in ganz Hessen mit Schwerpunkt auf Wiesbaden, Frankfurt am Main, Darmstadt, Offenbach und dem gesamten Rhein-Main-Gebiet.",
              },
              {
                q: "Wie läuft die Jobvermittlung ab?",
                a: "In drei Schritten: 1. Profil erstellen und Lebenslauf hochladen. 2. Persönliches Beratungsgespräch zur Klärung Ihrer Wünsche und Stärken. 3. Gezielte Vermittlung an passende Arbeitgeber in der Region.",
              },
              {
                q: "Welche Branchen deckt JobPilot ab?",
                a: "Wir vermitteln in allen Branchen: IT & Software, Finanzen & Banken, Gesundheit & Pflege, Logistik, Verwaltung, Handwerk, Vertrieb, Bildung und mehr.",
              },
              {
                q: "Kann ich JobPilot auch als Arbeitgeber nutzen?",
                a: "Ja, Arbeitgeber können Stellenanzeigen schalten und von unserer Vorauswahl passender Kandidaten profitieren. Wir bieten passgenaue Vermittlung für die Region Hessen.",
              },
              {
                q: "Wie schnell bekomme ich eine Rückmeldung?",
                a: "In der Regel melden wir uns innerhalb von 48 Stunden bei Ihnen. Bei dringenden Anfragen auch schneller — rufen Sie uns gerne an.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-white rounded-lg border border-border group"
              >
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

      {/* ============================================ */}
      {/* CTA — klar, nicht überladen */}
      {/* ============================================ */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Bereit für den nächsten Karriereschritt?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Registrieren Sie sich kostenlos und lassen Sie sich persönlich
            beraten. Oder rufen Sie uns direkt an.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/auth/register"
              className="w-full sm:w-auto px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Kostenlos registrieren
            </Link>
            <a
              href="tel:+4961112345678"
              className="w-full sm:w-auto px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20 text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +49 611 123 456 78
            </a>
          </div>
          <p className="text-xs text-white/50 mt-4">
            Mo–Fr 9:00–18:00 Uhr | Kostenlos und unverbindlich
          </p>
        </div>
      </section>
    </>
  );
}
