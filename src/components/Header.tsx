"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Globe, Users, Building2, Handshake, FileCheck } from "lucide-react";
import { useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [zielgruppenOpen, setZielgruppenOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setZielgruppenOpen(false);
      }
      setLangOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainNav = [
    { href: "/" as const, label: t("nav.home") },
    { href: "/jobs" as const, label: t("nav.jobs") },
    { href: "/coaching" as const, label: t("nav.coaching") },
    { href: "/blog" as const, label: t("nav.blog") },
  ];

  const zielgruppenItems = [
    { href: "/fuer-bewerber" as const, label: "Für Bewerber", icon: Users, desc: "Kostenlose Vermittlung & Beratung" },
    { href: "/fuer-arbeitgeber" as const, label: "Für Arbeitgeber", icon: Building2, desc: "Passende Fachkräfte finden" },
    { href: "/fuer-institutionen" as const, label: "Für Institutionen", icon: Handshake, desc: "Jobcenter, Träger & Agenturen" },
    { href: "/avgs" as const, label: "AVGS / Vermittlungsgutschein", icon: FileCheck, desc: "Infos zum Vermittlungsgutschein" },
  ];

  const moreNav = [
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
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base">JP</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary leading-none">
                Job<span className="text-secondary">Pilot</span>
              </span>
              <p className="text-[10px] text-muted leading-none mt-0.5 hidden md:block">
                Arbeitsvermittlung Hessen
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Zielgruppen Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setZielgruppenOpen(!zielgruppenOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  zielgruppenOpen
                    ? "text-primary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                Angebote
                <ChevronDown className={`w-3 h-3 transition-transform ${zielgruppenOpen ? "rotate-180" : ""}`} />
              </button>
              {zielgruppenOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-border py-2 w-72 z-50">
                  {zielgruppenItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setZielgruppenOpen(false)}
                      className="flex items-start gap-3 px-4 py-2.5 hover:bg-primary/5 transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-foreground">{item.label}</div>
                        <div className="text-xs text-muted">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {moreNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-muted hover:text-primary hover:bg-primary/5 transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="uppercase">{locale}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-lg border border-border py-1 min-w-[110px] z-50">
                  <button
                    onClick={() => switchLocale("de")}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-primary/5 ${locale === "de" ? "text-primary font-medium" : ""}`}
                  >
                    Deutsch
                  </button>
                  <button
                    onClick={() => switchLocale("en")}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-primary/5 ${locale === "en" ? "text-primary font-medium" : ""}`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Arbeitgeber CTA - visible on desktop */}
            <Link
              href="/fuer-arbeitgeber"
              className="hidden xl:inline-flex px-3 py-2 text-xs font-semibold text-secondary border border-secondary/30 hover:bg-secondary/5 rounded-lg transition-all"
            >
              Mitarbeiter finden
            </Link>

            {/* Auth */}
            <Link
              href="/auth/login"
              className="hidden sm:inline-flex px-3 py-2 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-all"
            >
              {t("common.login")}
            </Link>
            <Link
              href="/auth/register"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light rounded-lg transition-all"
            >
              {t("common.register")}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              aria-label="Menü öffnen"
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
            <nav className="flex flex-col gap-0.5">
              {mainNav.map((item) => (
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

              <div className="px-4 py-2 text-xs text-muted font-medium uppercase tracking-wide">
                Angebote
              </div>
              {zielgruppenItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg"
                >
                  <item.icon className="w-4 h-4 text-muted" />
                  {item.label}
                </Link>
              ))}

              <hr className="my-2 border-border" />
              {moreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary"
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
                className="mx-4 py-3 text-sm font-semibold text-white bg-primary rounded-lg text-center"
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
