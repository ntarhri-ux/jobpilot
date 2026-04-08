"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Search, MapPin } from "lucide-react";

export default function HeroSearch() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (location) params.set("ort", location);
    router.push(`/${locale}/jobs?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleTagClick = (tag: string) => {
    if (["Frankfurt", "Wiesbaden", "Darmstadt"].includes(tag)) {
      router.push(`/${locale}/jobs?ort=${tag}`);
    } else if (tag === "IT Jobs") {
      router.push(`/${locale}/jobs?q=IT`);
    } else if (tag === "Vollzeit") {
      router.push(`/${locale}/jobs?typ=vollzeit`);
    }
  };

  return (
    <>
      {/* Search Bar */}
      <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1 flex items-center gap-2 px-4 py-3">
            <Search className="w-5 h-5 text-muted flex-shrink-0" />
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full text-foreground text-sm focus:outline-none"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 px-4 py-3 border-t sm:border-t-0 sm:border-l border-border">
            <MapPin className="w-5 h-5 text-muted flex-shrink-0" />
            <input
              type="text"
              placeholder={t("hero.locationPlaceholder")}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full text-foreground text-sm focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
          >
            {t("hero.searchButton")}
          </button>
        </div>
      </div>

      {/* Quick tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {["Frankfurt", "Wiesbaden", "Darmstadt", "IT Jobs", "Vollzeit"].map(
          (tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 hover:bg-white/20 cursor-pointer transition-colors"
            >
              {tag}
            </button>
          )
        )}
      </div>
    </>
  );
}
