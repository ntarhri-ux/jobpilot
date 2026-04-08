import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Clock, ArrowRight, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ratgeber & Karriere-Tipps",
  description:
    "Expertenwissen für deine Karriere: Bewerbungstipps, Arbeitsmarkt-Trends in Hessen, Gehaltsverhandlung und mehr. Dein Karriere-Ratgeber von JobPilot.",
};

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
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

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
        <Link href={`/blog/${featured.slug}` as any} className="block mb-12 group">
          <article className="bg-white rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto relative overflow-hidden bg-primary">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-6 left-6 px-3 py-1 bg-accent text-primary-dark text-sm font-semibold rounded-full z-10">
                  {featured.category}
                </span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-muted mb-4">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {featured.readTime} Min.
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {featured.author}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  {t("common.readMore")} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </article>
        </Link>

        {/* Post Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}` as any}
              className="block group"
            >
              <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-48 relative overflow-hidden bg-primary">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full z-10">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-sm text-muted mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} Min.</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-muted flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("common.readMore")} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
