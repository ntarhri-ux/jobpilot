import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HeroSearch from "@/components/HeroSearch";
import {
  Search,
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
  BookOpen,
  Monitor,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "JobPilot — Stellenangebote & Jobvermittlung in Hessen | Wiesbaden & Frankfurt",
  description:
    "Finden Sie aktuelle Stellenangebote in Wiesbaden, Frankfurt und ganz Hessen. Kostenlose Jobvermittlung & Karriereberatung in Zusammenarbeit mit dem Arbeitsamt. Über 2.500 offene Stellen.",
  keywords: [
    "Jobs Hessen",
    "Stellenangebote Wiesbaden",
    "Stellenangebote Frankfurt",
    "Jobvermittlung Hessen",
    "Arbeitsamt Wiesbaden",
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
      {/* JSON-LD Structured Data — WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "JobPilot",
            url: "https://jobpilot-hessen.de",
            description: t("hero.subtitle"),
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
            name: "JobPilot",
            url: "https://jobpilot-hessen.de",
            description:
              "Jobvermittlung und Karriereberatung in Hessen — Wiesbaden, Frankfurt und Rhein-Main-Gebiet. In Zusammenarbeit mit dem Arbeitsamt.",
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
              longitude: 8.2400,
            },
            telephone: "+4961112345678",
            email: "info@jobpilot-hessen.de",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
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
            sameAs: [],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "340",
              bestRating: "5",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative gradient-hero text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span>In Zusammenarbeit mit dem Arbeitsamt Hessen</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t("hero.title")}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* Search Bar & Quick Tags */}
            <HeroSearch />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
            {[
              { icon: Briefcase, value: "2.500+", label: t("hero.stats.jobs") },
              { icon: Building2, value: "350+", label: t("hero.stats.companies") },
              { icon: Trophy, value: "8.000+", label: t("hero.stats.placements") },
              { icon: Star, value: "96%", label: t("hero.stats.satisfaction") },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center"
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl lg:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("features.title")}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t("features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: t("features.jobMatching.title"),
                description: t("features.jobMatching.description"),
                color: "bg-primary/10 text-primary",
              },
              {
                icon: Heart,
                title: t("features.coaching.title"),
                description: t("features.coaching.description"),
                color: "bg-secondary/10 text-secondary",
              },
              {
                icon: Users,
                title: t("features.network.title"),
                description: t("features.network.description"),
                color: "bg-accent/10 text-accent-dark",
              },
              {
                icon: Shield,
                title: t("features.support.title"),
                description: t("features.support.description"),
                color: "bg-green-50 text-green-600",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t("categories.title")}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {t("categories.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Monitor, label: t("categories.it"), count: "380+", color: "from-blue-500 to-blue-600" },
              { icon: Building2, label: t("categories.finance"), count: "210+", color: "from-emerald-500 to-emerald-600" },
              { icon: Stethoscope, label: t("categories.health"), count: "290+", color: "from-red-500 to-red-600" },
              { icon: Wrench, label: t("categories.engineering"), count: "175+", color: "from-orange-500 to-orange-600" },
              { icon: TrendingUp, label: t("categories.sales"), count: "320+", color: "from-purple-500 to-purple-600" },
              { icon: Briefcase, label: t("categories.admin"), count: "250+", color: "from-cyan-500 to-cyan-600" },
              { icon: Truck, label: t("categories.logistics"), count: "140+", color: "from-amber-500 to-amber-600" },
              { icon: GraduationCap, label: t("categories.education"), count: "165+", color: "from-pink-500 to-pink-600" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href="/jobs"
                className="group relative overflow-hidden rounded-2xl p-6 bg-white border border-border hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{cat.label}</h3>
                <p className="text-sm text-muted">{cat.count} Stellen</p>
                <ArrowRight className="absolute top-6 right-6 w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Aktuelle Stellenangebote
              </h2>
              <p className="text-muted">Die neuesten Jobs aus der Region</p>
            </div>
            <Link
              href="/jobs"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                slug: "senior-software-engineer-deutsche-bank",
                title: "Senior Software Engineer",
                company: "Deutsche Bank AG",
                location: "Frankfurt am Main",
                type: "Vollzeit",
                salary: "65.000 - 85.000 EUR",
                tags: ["React", "TypeScript", "Node.js"],
                featured: true,
              },
              {
                slug: "marketing-manager-rv",
                title: "Marketing Manager",
                company: "R+V Versicherung",
                location: "Wiesbaden",
                type: "Vollzeit",
                salary: "50.000 - 65.000 EUR",
                tags: ["Marketing", "Social Media", "B2B"],
                featured: false,
              },
              {
                slug: "pflegefachkraft-helios",
                title: "Pflegefachkraft (m/w/d)",
                company: "HELIOS Klinikum",
                location: "Wiesbaden",
                type: "Voll-/Teilzeit",
                salary: "38.000 - 48.000 EUR",
                tags: ["Pflege", "Klinik", "Schichtdienst"],
                featured: true,
              },
              {
                slug: "sachbearbeiter-finanzen-stadt-wiesbaden",
                title: "Sachbearbeiter Finanzen",
                company: "Stadt Wiesbaden",
                location: "Wiesbaden",
                type: "Vollzeit",
                salary: "TVöD E9",
                tags: ["Verwaltung", "Finanzen", "Öffentlicher Dienst"],
                featured: false,
              },
              {
                slug: "ausbildung-fachinformatiker-sap",
                title: "Ausbildung Fachinformatiker",
                company: "SAP SE",
                location: "Eschborn",
                type: "Ausbildung",
                salary: "1.100 EUR/Monat",
                tags: ["IT", "Ausbildung", "Entwicklung"],
                featured: false,
              },
              {
                slug: "logistikleiter-dhl",
                title: "Logistikleiter (m/w/d)",
                company: "DHL Supply Chain",
                location: "Frankfurt-Flughafen",
                type: "Vollzeit",
                salary: "55.000 - 70.000 EUR",
                tags: ["Logistik", "Führung", "Supply Chain"],
                featured: true,
              },
            ].map((job, i) => (
              <Link
                key={i}
                href={`/jobs/${job.slug}` as any}
                className="group relative bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 block"
              >
                {job.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-accent/10 text-accent-dark text-xs font-semibold rounded-full">
                    {t("jobs.featured")}
                  </span>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted">{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" /> {job.type}
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary mb-4">
                  {job.salary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-background rounded-full text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-primary font-semibold"
            >
              {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Arbeitsamt Partnership Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 text-sm text-secondary font-medium mb-6">
                <Shield className="w-4 h-4" />
                Offizielle Partnerschaft
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                In Zusammenarbeit mit dem Arbeitsamt
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                Als offizieller Partner der Agentur für Arbeit in Hessen bieten
                wir dir besondere Vorteile: Kostenlose Beratung,
                Weiterbildungsmöglichkeiten und bevorzugten Zugang zu regionalen
                Stellenangeboten.
              </p>
              <ul className="space-y-4">
                {[
                  "Kostenlose Karriereberatung für Arbeitssuchende",
                  "Weiterbildungsprogramme mit Bildungsgutschein",
                  "Direkte Vermittlung an regionale Arbeitgeber",
                  "Spezielle Programme für Berufseinsteiger & Wiedereinstieg",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/coaching"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-secondary text-white rounded-xl font-semibold hover:bg-secondary-light transition-all shadow-md hover:shadow-lg"
              >
                {t("common.learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "12.000+", label: "Beratungsgespräche" },
                    { value: "85%", label: "Vermittlungsquote" },
                    { value: "200+", label: "Partnerunternehmen" },
                    { value: "4.8/5", label: "Bewertung" },
                  ].map((s) => (
                    <div key={s.label} className="text-center p-4">
                      <div className="text-2xl font-bold text-primary">
                        {s.value}
                      </div>
                      <div className="text-sm text-muted mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {t("blog.title")}
              </h2>
              <p className="text-muted">{t("blog.subtitle")}</p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors"
            >
              {t("common.viewAll")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                slug: "10-tipps-vorstellungsgespraech",
                title: "10 Tipps für das perfekte Vorstellungsgespräch",
                excerpt:
                  "So überzeugst du im Bewerbungsgespräch: Vorbereitung, Körpersprache und die richtigen Antworten auf schwierige Fragen.",
                category: "Bewerbungstipps",
                readTime: "12",
                date: "15. März 2026",
                image: "/blog/vorstellungsgespraech.svg",
              },
              {
                slug: "arbeitsmarkt-hessen-2026",
                title: "Arbeitsmarkt Hessen 2026: Trends und Chancen",
                excerpt:
                  "Welche Branchen boomen in der Rhein-Main-Region? Ein Überblick über die aktuellen Entwicklungen und Zukunftsprognosen.",
                category: "Arbeitsmarkt",
                readTime: "14",
                date: "10. März 2026",
                image: "/blog/arbeitsmarkt-hessen.svg",
              },
              {
                slug: "lebenslauf-guide",
                title: "Lebenslauf schreiben: Der ultimative Guide",
                excerpt:
                  "Von der Struktur bis zum Design: Alles, was du für einen professionellen Lebenslauf wissen musst.",
                category: "Bewerbungstipps",
                readTime: "15",
                date: "5. März 2026",
                image: "/blog/lebenslauf.svg",
              },
            ].map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}` as any} className="block group">
              <article
                className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} Min. Lesezeit</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("common.readMore")} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/register"
              className="px-8 py-4 bg-accent text-primary-dark rounded-xl font-bold text-lg hover:bg-accent-light transition-all shadow-xl hover:shadow-2xl"
            >
              {t("cta.button")}
            </Link>
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
            >
              {t("common.contactUs")}
            </Link>
          </div>

          {/* Employer CTA */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 mb-4">{t("cta.employerTitle")}</p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-light transition-colors"
            >
              {t("cta.employerButton")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
