"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: "/" as const, label: t("nav.home") },
    { href: "/jobs" as const, label: t("nav.jobs") },
    { href: "/coaching" as const, label: t("nav.coaching") },
    { href: "/blog" as const, label: t("nav.blog") },
    { href: "/ueber-uns" as const, label: t("nav.about") },
    { href: "/kontakt" as const, label: t("nav.contact") },
  ];

  const switchLocale = (newLocale: "de" | "en") => {
    router.replace(pathname as any, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">JP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">
                Job<span className="text-secondary">Pilot</span>
              </span>
              <p className="text-xs text-muted -mt-1 hidden md:block">
                {t("common.tagline")}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-muted hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg border border-border py-1 min-w-[120px]">
                  <button
                    onClick={() => switchLocale("de")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/5 ${locale === "de" ? "text-primary font-medium" : ""}`}
                  >
                    🇩🇪 Deutsch
                  </button>
                  <button
                    onClick={() => switchLocale("en")}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/5 ${locale === "en" ? "text-primary font-medium" : ""}`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            {/* Auth buttons */}
            <Link
              href="/auth/login"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              {t("common.login")}
            </Link>
            <Link
              href="/auth/register"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-light rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              {t("common.register")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-primary"
              >
                {t("common.login")}
              </Link>
              <Link
                href="/auth/register"
                onClick={() => setMobileOpen(false)}
                className="mx-4 py-3 text-sm font-semibold text-white bg-primary rounded-xl text-center"
              >
                {t("common.register")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
