"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

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
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="px-4 py-3 rounded-xl bg-white text-foreground text-sm w-full md:w-72 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light transition-colors flex items-center gap-2 whitespace-nowrap">
                {t("footer.newsletter.button")}
                <ArrowRight className="w-4 h-4" />
              </button>
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/jobs" as const, label: t("nav.jobs") },
                { href: "/coaching" as const, label: t("nav.coaching") },
                { href: "/blog" as const, label: t("nav.blog") },
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

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {t("footer.services")}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{t("coaching.services.career.title")}</li>
              <li>{t("coaching.services.application.title")}</li>
              <li>{t("coaching.services.interview.title")}</li>
              <li>{t("coaching.services.integration.title")}</li>
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
