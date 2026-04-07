import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BookOpen, Clock, ArrowRight, Tag, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ratgeber & Karriere-Tipps",
  description:
    "Expertenwissen für deine Karriere: Bewerbungstipps, Arbeitsmarkt-Trends in Hessen, Gehaltsverhandlung und mehr. Dein Karriere-Ratgeber von JobPilot.",
};

const BLOG_POSTS = [
  {
    slug: "10-tipps-vorstellungsgespraech",
    title: "10 Tipps für das perfekte Vorstellungsgespräch",
    excerpt:
      "So überzeugst du im Bewerbungsgespräch: Vorbereitung, Körpersprache und die richtigen Antworten auf schwierige Fragen.",
    category: "Bewerbungstipps",
    readTime: 5,
    date: "15. März 2026",
    author: "Sarah Müller",
  },
  {
    slug: "arbeitsmarkt-hessen-2026",
    title: "Arbeitsmarkt Hessen 2026: Trends und Chancen",
    excerpt:
      "Welche Branchen boomen in der Rhein-Main-Region? Ein Überblick über die aktuellen Entwicklungen und Zukunftsprognosen.",
    category: "Arbeitsmarkt",
    readTime: 7,
    date: "10. März 2026",
    author: "Dr. Thomas Weber",
  },
  {
    slug: "lebenslauf-guide",
    title: "Lebenslauf schreiben: Der ultimative Guide",
    excerpt:
      "Von der Struktur bis zum Design: Alles, was du für einen professionellen Lebenslauf wissen musst.",
    category: "Bewerbungstipps",
    readTime: 8,
    date: "5. März 2026",
    author: "Lisa Schmidt",
  },
  {
    slug: "gehaltsverhandlung-tipps",
    title: "Gehaltsverhandlung: So bekommst du, was du verdienst",
    excerpt:
      "Strategien und Taktiken für eine erfolgreiche Gehaltsverhandlung. Mit konkreten Formulierungen und Übungen.",
    category: "Karriere",
    readTime: 6,
    date: "1. März 2026",
    author: "Markus Hoffmann",
  },
  {
    slug: "beruflicher-wiedereinstieg",
    title: "Beruflicher Wiedereinstieg: So gelingt die Rückkehr",
    excerpt:
      "Nach Elternzeit, Krankheit oder Arbeitslosigkeit zurück in den Beruf — Tipps, Programme und Unterstützungsangebote in Hessen.",
    category: "Integration",
    readTime: 6,
    date: "25. Februar 2026",
    author: "Anna Becker",
  },
  {
    slug: "it-jobs-rhein-main",
    title: "IT-Jobs im Rhein-Main-Gebiet: Wo die besten Chancen liegen",
    excerpt:
      "Frankfurt, Wiesbaden, Darmstadt — die Tech-Szene in Hessen wächst. Welche Unternehmen einstellen und was gesucht wird.",
    category: "Arbeitsmarkt",
    readTime: 5,
    date: "20. Februar 2026",
    author: "Dr. Thomas Weber",
  },
  {
    slug: "arbeitsrecht-kuendigung",
    title: "Kündigung erhalten? Deine Rechte als Arbeitnehmer",
    excerpt:
      "Was du bei einer Kündigung beachten musst: Fristen, Abfindung, Arbeitslosengeld und der richtige nächste Schritt.",
    category: "Arbeitsrecht",
    readTime: 9,
    date: "15. Februar 2026",
    author: "RA Michael Klein",
  },
  {
    slug: "bewerbung-oeffentlicher-dienst",
    title: "Bewerbung im Öffentlichen Dienst: Besonderheiten & Tipps",
    excerpt:
      "TVöD, Beamtenlaufbahn und Assessment Center — so bewirbst du dich erfolgreich bei Bund, Land und Kommunen.",
    category: "Bewerbungstipps",
    readTime: 7,
    date: "10. Februar 2026",
    author: "Sarah Müller",
  },
];

const CATEGORIES = [
  "Alle",
  "Bewerbungstipps",
  "Karriere",
  "Arbeitsmarkt",
  "Arbeitsrecht",
  "Integration",
];

export default function BlogPage() {
  const t = useTranslations();

  return (
    <>
      {/* JSON-LD for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "JobPilot Ratgeber",
            description: t("blog.subtitle"),
            url: "https://jobpilot-hessen.de/ratgeber",
            publisher: {
              "@type": "Organization",
              name: "JobPilot",
            },
          }),
        }}
      />

      {/* Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("blog.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">{t("blog.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium border border-border hover:border-primary hover:text-primary transition-all bg-white"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <article className="mb-12 group">
          <div className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto gradient-primary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-white/10" />
                </div>
                <span className="absolute top-6 left-6 px-3 py-1 bg-accent text-primary-dark text-sm font-semibold rounded-full">
                  {BLOG_POSTS[0].category}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-muted mb-4">
                  <span>{BLOG_POSTS[0].date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {BLOG_POSTS[0].readTime} Min.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {BLOG_POSTS[0].author}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  {t("common.readMore")} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 gradient-primary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/10" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-muted mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} Min.</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                  <span className="text-sm font-semibold text-primary flex items-center gap-1">
                    {t("common.readMore")} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
