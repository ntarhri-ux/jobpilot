"use client";

import { useTranslations } from "next-intl";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("contact.title")}
          </h1>
          <p className="text-white/80 text-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Schreib uns eine Nachricht
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="name@email.de"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="+49 611 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.subject")} *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Bitte wählen...</option>
                      <option>Allgemeine Anfrage</option>
                      <option>Jobvermittlung</option>
                      <option>Coaching & Beratung</option>
                      <option>Für Arbeitgeber</option>
                      <option>Zusammenarbeit / Partnerschaft</option>
                      <option>Technischer Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")} *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder="Wie können wir dir helfen?"
                  />
                </div>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary mt-0.5"
                  />
                  <span className="text-xs text-muted">
                    Ich stimme der Verarbeitung meiner Daten gemäß der
                    Datenschutzerklärung zu.
                  </span>
                </label>

                <button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t("contact.form.send")}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-border p-8">
              <h3 className="font-bold text-foreground mb-6">
                Kontaktdaten
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: t("contact.info.address"),
                  },
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: t("contact.info.phone"),
                  },
                  {
                    icon: Mail,
                    label: "E-Mail",
                    value: t("contact.info.email"),
                  },
                  {
                    icon: Clock,
                    label: "Öffnungszeiten",
                    value: t("contact.info.hours"),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-primary/10 rounded-3xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-primary font-medium">
                  Wiesbaden, Hessen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
