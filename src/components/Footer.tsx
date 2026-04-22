"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Clock, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const t = useTranslations();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setNewsletterStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail.trim() }),
      });

      const data = await res.json();

      if (!res.ok && res.status !== 200) {
        setNewsletterStatus("error");
        setNewsletterMsg(data.error || "Ein Fehler ist aufgetreten.");
        return;
      }

      setNewsletterStatus("success");
      setNewsletterMsg(data.message || "Erfolgreich angemeldet!");
      setNewsletterEmail("");

      setTimeout(() => {
        setNewsletterStatus("idle");
        setNewsletterMsg("");
      }, 5000);
    } catch {
      setNewsletterStatus("error");
      setNewsletterMsg("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    }
  }

  return (
    <footer className="bg-primary-dark text-white mt-auto">
      {/* Newsletter Bar */}
      <div className="gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-primary-dark">
                {t("footer.newsletter.title")}
              </h3>
              <p className="text-sm text-primary-dark/80">
                {t("footer.newsletter.subtitle")}
              </p>
            </div>
            <div>
              <form onSubmit={handleNewsletter} className="flex w-full md:w-auto gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t("footer.newsletter.placeholder")}
                  className="px-4 py-3 rounded-xl bg-white text-foreground text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-colors flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {newsletterStatus === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : newsletterStatus === "success" ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <>
                      {t("footer.newsletter.button")}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
              {newsletterMsg && (
                <p className={`text-xs mt-2 ${newsletterStatus === "success" ? "text-green-800" : "text-red-800"}`}>
                  {newsletterMsg}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-lg">JP</span>
              </div>
              <span className="text-xl font-bold">
                Job<span className="text-accent">Pilot</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{t("contact.info.address")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{t("contact.info.phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{t("contact.info.email")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{t("contact.info.hours")}</span>
              </div>
            </div>
          </div>

          {/* Angebote */}
          <div>
            <h4 className="font-semibold text-white mb-4">Angebote</h4>
            <ul className="space-y-2">
              {[
                { href: "/fuer-bewerber" as const, label: "Für Bewerber" },
                { href: "/fuer-arbeitgeber" as const, label: "Für Arbeitgeber" },
                { href: "/fuer-institutionen" as const, label: "Für Institutionen" },
                { href: "/avgs" as const, label: "AVGS Vermittlungsgutschein" },
                { href: "/coaching" as const, label: t("nav.coaching") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informationen */}
          <div>
            <h4 className="font-semibold text-white mb-4">Informationen</h4>
            <ul className="space-y-2">
              {[
                { href: "/jobs" as const, label: t("nav.jobs") },
                { href: "/jobvermittlung-wiesbaden" as any, label: "Jobvermittlung Wiesbaden" },
                { href: "/jobvermittlung-frankfurt" as any, label: "Jobvermittlung Frankfurt" },
                { href: "/arbeitsvermittlung-hessen" as any, label: "Arbeitsvermittlung Hessen" },
                { href: "/regionen" as const, label: "Regionen" },
                { href: "/branchen" as const, label: "Branchen" },
                { href: "/blog" as const, label: t("nav.blog") },
                { href: "/faq" as const, label: "FAQ" },
                { href: "/ueber-uns" as const, label: t("nav.about") },
                { href: "/kontakt" as const, label: t("nav.contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.legal")}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/impressum" as const, label: t("footer.impressum") },
                { href: "/datenschutz" as const, label: t("footer.datenschutz") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-white/70 text-sm">
                  {t("footer.agb")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
