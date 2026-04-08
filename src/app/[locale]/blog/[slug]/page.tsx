import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  ArrowRight,
  Tag,
} from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.image }],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="space-y-2 my-4">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const formatInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  };

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) {
      flushList();
      i++;
      continue;
    }

    // Table detection
    if (line.includes("|") && line.startsWith("|")) {
      flushList();
      const tableRows: string[][] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith("|")) {
        const row = lines[j]
          .trim()
          .split("|")
          .filter((cell) => cell.trim() !== "")
          .map((cell) => cell.trim());
        if (!lines[j].trim().match(/^\|[\s-|]+\|$/)) {
          tableRows.push(row);
        }
        j++;
      }
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  {header.map((cell, idx) => (
                    <th
                      key={idx}
                      className="px-4 py-3 text-left font-semibold text-foreground border-b border-border"
                      dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={rowIdx % 2 === 0 ? "bg-white" : "bg-background"}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="px-4 py-3 border-b border-border text-muted"
                        dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      i = j;
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl font-bold text-foreground mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-foreground mt-8 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // List items
    if (line.startsWith("- ") || line.startsWith("* ")) {
      listItems.push(line.slice(2));
      i++;
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line)) {
      flushList();
      const numItems: string[] = [];
      let j = i;
      while (j < lines.length && /^\d+\.\s/.test(lines[j].trim())) {
        numItems.push(lines[j].trim().replace(/^\d+\.\s/, ""));
        j++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 list-decimal list-inside">
          {numItems.map((item, idx) => (
            <li
              key={idx}
              className="text-muted"
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </ol>
      );
      i = j;
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p
        key={`p-${i}`}
        className="text-muted leading-relaxed my-3"
        dangerouslySetInnerHTML={{ __html: formatInline(line) }}
      />
    );
    i++;
  }

  flushList();
  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `https://jobpilot-hessen.de${post.image}`,
            author: { "@type": "Person", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "JobPilot",
            },
            datePublished: post.date,
            keywords: post.tags.join(", "),
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime} Min. Lesezeit
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-background text-muted rounded-full text-xs"
              >
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        <div className="h-64 sm:h-80 relative rounded-3xl mb-10 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {renderMarkdown(post.content)}
        </div>

        {/* Share & Save */}
        <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl text-sm text-muted hover:text-primary hover:border-primary transition-all">
            <Share2 className="w-4 h-4" /> Teilen
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl text-sm text-muted hover:text-primary hover:border-primary transition-all">
            <Bookmark className="w-4 h-4" /> Speichern
          </button>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Ähnliche Artikel
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}` as any}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200">
                    <div className="h-32 relative overflow-hidden bg-primary">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-muted">
                        {related.category} • {related.readTime} Min.
                      </span>
                      <h3 className="text-sm font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 bg-primary/5 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">
            Brauchst du Hilfe bei der Bewerbung?
          </h3>
          <p className="text-muted mb-6">
            Unsere Karriereberater helfen dir beim Interview-Training und der
            Bewerbungsvorbereitung — kostenlos mit Vermittlungsgutschein.
          </p>
          <Link
            href="/coaching"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-all"
          >
            Coaching buchen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </>
  );
}
