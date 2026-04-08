"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  Search,
  MapPin,
  Briefcase,
  Building2,
  SlidersHorizontal,
  Clock,
  X,
  ChevronDown,
  Star,
} from "lucide-react";

const MOCK_JOBS = [
  {
    id: "1",
    slug: "senior-software-engineer-deutsche-bank",
    title: "Senior Software Engineer",
    company: "Deutsche Bank AG",
    location: "Frankfurt am Main",
    type: "vollzeit",
    category: "IT & Software",
    salary: "65.000 - 85.000 EUR",
    description: "Entwicklung moderner Banking-Anwendungen mit React und Java.",
    tags: ["React", "TypeScript", "Java", "Spring Boot"],
    featured: true,
    daysAgo: 2,
  },
  {
    id: "2",
    slug: "marketing-manager-rv",
    title: "Marketing Manager (m/w/d)",
    company: "R+V Versicherung",
    location: "Wiesbaden",
    type: "vollzeit",
    category: "Vertrieb & Marketing",
    salary: "50.000 - 65.000 EUR",
    description: "Leitung der digitalen Marketing-Strategie.",
    tags: ["Marketing", "Social Media", "B2B", "Kampagnen"],
    featured: false,
    daysAgo: 3,
  },
  {
    id: "3",
    slug: "pflegefachkraft-helios",
    title: "Pflegefachkraft (m/w/d)",
    company: "HELIOS Klinikum",
    location: "Wiesbaden",
    type: "vollzeit",
    category: "Gesundheit & Pflege",
    salary: "38.000 - 48.000 EUR",
    description: "Pflegerische Versorgung auf einer allgemeinchirurgischen Station.",
    tags: ["Pflege", "Klinik", "Schichtdienst"],
    featured: true,
    daysAgo: 1,
  },
  {
    id: "4",
    slug: "sachbearbeiter-finanzen-stadt-wiesbaden",
    title: "Sachbearbeiter Finanzen (m/w/d)",
    company: "Stadt Wiesbaden",
    location: "Wiesbaden",
    type: "vollzeit",
    category: "Verwaltung & Büro",
    salary: "TVöD E9",
    description: "Sachbearbeitung im Bereich Haushalt und Finanzen.",
    tags: ["Verwaltung", "Finanzen", "Öffentlicher Dienst"],
    featured: false,
    daysAgo: 5,
  },
  {
    id: "5",
    slug: "ausbildung-fachinformatiker-sap",
    title: "Ausbildung Fachinformatiker (m/w/d)",
    company: "SAP SE",
    location: "Eschborn",
    type: "ausbildung",
    category: "IT & Software",
    salary: "1.100 EUR/Monat",
    description: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung.",
    tags: ["IT", "Ausbildung", "Entwicklung", "ABAP"],
    featured: false,
    daysAgo: 7,
  },
  {
    id: "6",
    slug: "logistikleiter-dhl",
    title: "Logistikleiter (m/w/d)",
    company: "DHL Supply Chain",
    location: "Frankfurt-Flughafen",
    type: "vollzeit",
    category: "Logistik & Transport",
    salary: "55.000 - 70.000 EUR",
    description: "Leitung des Logistikzentrums am Frankfurter Flughafen.",
    tags: ["Logistik", "Führung", "Supply Chain"],
    featured: true,
    daysAgo: 2,
  },
  {
    id: "7",
    slug: "erzieher-kita-mainz",
    title: "Erzieher/in (m/w/d)",
    company: "AWO Hessen-Süd",
    location: "Mainz-Kastel",
    type: "teilzeit",
    category: "Bildung & Soziales",
    salary: "32.000 - 42.000 EUR",
    description: "Pädagogische Betreuung in einer Kindertagesstätte.",
    tags: ["Pädagogik", "Kita", "Erziehung"],
    featured: false,
    daysAgo: 4,
  },
  {
    id: "8",
    slug: "werkstudent-controlling-commerzbank",
    title: "Werkstudent Controlling (m/w/d)",
    company: "Commerzbank AG",
    location: "Frankfurt am Main",
    type: "teilzeit",
    category: "Finanzen & Banken",
    salary: "15 EUR/Stunde",
    description: "Unterstützung des Controlling-Teams im Reporting.",
    tags: ["Controlling", "Excel", "Finanzen", "Werkstudent"],
    featured: false,
    daysAgo: 1,
  },
];

const LOCATIONS = [
  "Alle Standorte",
  "Wiesbaden",
  "Frankfurt am Main",
  "Darmstadt",
  "Mainz",
  "Offenbach",
  "Eschborn",
];

const CATEGORIES = [
  "Alle Kategorien",
  "IT & Software",
  "Finanzen & Banken",
  "Gesundheit & Pflege",
  "Vertrieb & Marketing",
  "Verwaltung & Büro",
  "Logistik & Transport",
  "Bildung & Soziales",
  "Ingenieurwesen",
];

const TYPES = ["vollzeit", "teilzeit", "minijob", "ausbildung", "praktikum"];

export default function JobsPage() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("Alle Standorte");
  const [category, setCategory] = useState("Alle Kategorien");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Read URL search params from homepage search
  useEffect(() => {
    const q = searchParams.get("q");
    const ort = searchParams.get("ort");
    const typ = searchParams.get("typ");
    if (q) setSearchQuery(q);
    if (ort) {
      const matchedLocation = LOCATIONS.find((loc) =>
        loc.toLowerCase().includes(ort.toLowerCase())
      );
      if (matchedLocation) setLocation(matchedLocation);
    }
    if (typ) setSelectedTypes([typ]);
  }, [searchParams]);

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesLocation =
      location === "Alle Standorte" || job.location.includes(location);
    const matchesCategory =
      category === "Alle Kategorien" || job.category === category;
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(job.type);
    return matchesSearch && matchesLocation && matchesCategory && matchesType;
  });

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <>
      {/* Page Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("jobs.title")}
          </h1>
          <p className="text-white/80 text-lg">{t("jobs.subtitle")}</p>

          {/* Search Bar */}
          <div className="mt-8 bg-white rounded-2xl p-2 shadow-xl">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center gap-2 px-4 py-3">
                <Search className="w-5 h-5 text-muted flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("hero.searchPlaceholder")}
                  className="w-full text-foreground text-sm focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")}>
                    <X className="w-4 h-4 text-muted" />
                  </button>
                )}
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-3 border-t sm:border-t-0 sm:border-l border-border">
                <MapPin className="w-5 h-5 text-muted flex-shrink-0" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-foreground text-sm focus:outline-none bg-transparent"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 text-muted border-t border-border"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`lg:w-72 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filter
              </h3>

              {/* Category filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("jobs.filters.category")}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type filter */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  {t("jobs.filters.type")}
                </label>
                <div className="space-y-2">
                  {TYPES.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleType(type)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-foreground">
                        {t(`jobs.types.${type}` as any)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {(selectedTypes.length > 0 ||
                category !== "Alle Kategorien" ||
                location !== "Alle Standorte") && (
                <button
                  onClick={() => {
                    setSelectedTypes([]);
                    setCategory("Alle Kategorien");
                    setLocation("Alle Standorte");
                  }}
                  className="w-full py-2 text-sm text-secondary font-medium hover:text-secondary-dark transition-colors"
                >
                  Filter zurücksetzen
                </button>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted">
                <strong className="text-foreground">{filteredJobs.length}</strong>{" "}
                Stellenangebote gefunden
              </p>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-border">
                <Search className="w-12 h-12 text-muted mx-auto mb-4" />
                <p className="text-muted">{t("jobs.noResults")}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Link
                    key={job.id}
                    href={`/jobs/${job.slug}` as any}
                    className="block group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">
                              {job.title}
                            </h3>
                            <p className="text-muted">{job.company}</p>
                          </div>
                          {job.featured && (
                            <span className="flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent-dark text-xs font-semibold rounded-full whitespace-nowrap">
                              <Star className="w-3 h-3" /> {t("jobs.featured")}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />{" "}
                            {t(`jobs.types.${job.type}` as any)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> vor {job.daysAgo} Tagen
                          </span>
                        </div>
                        <p className="text-sm text-muted mt-2">
                          {job.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
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
                          <span className="text-sm font-bold text-primary whitespace-nowrap">
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
