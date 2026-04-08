import { useTranslations } from "next-intl";
import {
  Heart,
  Shield,
  Lightbulb,
  MapPin,
  Users,
  Target,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns — JobPilot Jobvermittlung in Hessen seit 2024",
  description:
    "JobPilot ist Ihr Partner für Jobvermittlung in Hessen. In Zusammenarbeit mit dem Arbeitsamt verbinden wir Arbeitssuchende mit Arbeitgebern in Wiesbaden, Frankfurt und dem Rhein-Main-Gebiet.",
  keywords: [
    "Jobvermittlung Hessen",
    "Arbeitsvermittlung Wiesbaden",
    "Arbeitsamt Kooperation",
    "Karriereberatung Team",
  ],
  openGraph: {
    title: "Über JobPilot — Jobvermittlung in Hessen",
    description: "Lernen Sie unser Team kennen. Professionelle Arbeitsvermittlung in Zusammenarbeit mit dem Arbeitsamt.",
  },
  alternates: {
    canonical: "https://jobpilot-hessen.de/de/ueber-uns",
    languages: {
      "de-DE": "https://jobpilot-hessen.de/de/ueber-uns",
      "en-US": "https://jobpilot-hessen.de/en/about",
    },
  },
};

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Header */}
      <section className="gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("about.title")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {t("about.subtitle")}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t("about.mission.title")}
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-6">
              {t("about.mission.description")}
            </p>
            <p className="text-muted leading-relaxed">
              Gegründet in Wiesbaden, kennen wir den hessischen Arbeitsmarkt wie
              unsere Westentasche. Ob Frankfurt, Darmstadt, Offenbach oder
              Mainz-Kastel — unser Netzwerk erstreckt sich über die gesamte
              Rhein-Main-Region.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, value: "12.000+", label: "Beratene Personen" },
              { icon: Award, value: "8.000+", label: "Vermittlungen" },
              { icon: Handshake, value: "350+", label: "Partnerunternehmen" },
              { icon: Target, value: "85%", label: "Vermittlungsquote" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl border border-border p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {t("about.values.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: t("about.values.personal"),
                description:
                  "Jeder Mensch ist einzigartig. Wir nehmen uns Zeit für individuelle Beratung und persönlichen Kontakt.",
                color: "bg-red-50 text-red-500",
              },
              {
                icon: Shield,
                title: t("about.values.professional"),
                description:
                  "Unser Team besteht aus erfahrenen Karriereberatern mit tiefem Branchen- und Marktwissen.",
                color: "bg-blue-50 text-blue-500",
              },
              {
                icon: Lightbulb,
                title: t("about.values.innovative"),
                description:
                  "KI-gestütztes Matching, digitale Beratung und moderne Tools für eine effiziente Jobsuche.",
                color: "bg-amber-50 text-amber-500",
              },
              {
                icon: MapPin,
                title: t("about.values.regional"),
                description:
                  "Tief verwurzelt in Hessen, bestens vernetzt mit regionalen Arbeitgebern und Institutionen.",
                color: "bg-green-50 text-green-500",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl border border-border p-8 text-center"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team placeholder */}
        <div className="bg-primary/5 rounded-3xl p-12 text-center mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Unser Team
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            Erfahrene Karriereberater, HR-Experten und Technologie-Spezialisten
            — vereint durch die Mission, Menschen in Hessen den Weg zum Traumjob
            zu ebnen.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Dr. Anna Weber", role: "Geschäftsführung" },
              { name: "Thomas Müller", role: "Leitung Beratung" },
              { name: "Sarah Schmidt", role: "HR-Expertin" },
              { name: "Markus Hoffmann", role: "Technik" },
            ].map((member) => (
              <div key={member.name}>
                <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary/50" />
                </div>
                <p className="font-medium text-foreground text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Bereit, mit uns durchzustarten?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/register"
              className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-all shadow-md inline-flex items-center gap-2"
            >
              Jetzt registrieren <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/kontakt"
              className="px-6 py-3 border border-border text-foreground rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
