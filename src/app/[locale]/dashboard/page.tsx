"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Briefcase,
  Bookmark,
  MessageSquare,
  Calendar,
  User,
  Settings,
  TrendingUp,
  Eye,
  Clock,
  ChevronRight,
  Bell,
  FileText,
} from "lucide-react";

export default function DashboardPage() {
  const t = useTranslations();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Willkommen, Max!
          </h1>
          <p className="text-muted">
            Hier ist dein aktueller Bewerbungsstatus.
          </p>
        </div>
        <button className="relative p-2 rounded-xl border border-border hover:bg-primary/5 transition-colors">
          <Bell className="w-5 h-5 text-muted" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            icon: Briefcase,
            label: "Bewerbungen",
            value: "12",
            trend: "+3 diese Woche",
            color: "text-primary bg-primary/10",
          },
          {
            icon: Eye,
            label: "Profil-Aufrufe",
            value: "48",
            trend: "+12 diese Woche",
            color: "text-green-600 bg-green-50",
          },
          {
            icon: Bookmark,
            label: "Gespeicherte Jobs",
            value: "8",
            trend: "",
            color: "text-accent-dark bg-accent/10",
          },
          {
            icon: MessageSquare,
            label: "Nachrichten",
            value: "5",
            trend: "2 ungelesen",
            color: "text-purple-600 bg-purple-50",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-border p-5"
          >
            <div
              className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-3`}
            >
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
            {stat.trend && (
              <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {stat.trend}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Applications */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center justify-between">
              Aktuelle Bewerbungen
              <span className="text-sm text-primary font-medium cursor-pointer">
                Alle anzeigen
              </span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Senior Software Engineer",
                  company: "Deutsche Bank AG",
                  status: "Interview",
                  statusColor: "bg-green-100 text-green-700",
                  date: "Vor 2 Tagen",
                },
                {
                  title: "Frontend Developer",
                  company: "Commerzbank AG",
                  status: "In Prüfung",
                  statusColor: "bg-blue-100 text-blue-700",
                  date: "Vor 5 Tagen",
                },
                {
                  title: "Product Manager",
                  company: "SAP SE",
                  status: "Gesendet",
                  statusColor: "bg-gray-100 text-gray-700",
                  date: "Vor 1 Woche",
                },
              ].map((app, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background hover:bg-primary/5 transition-colors cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm">
                      {app.title}
                    </h3>
                    <p className="text-xs text-muted">{app.company}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${app.statusColor}`}
                  >
                    {app.status}
                  </span>
                  <span className="text-xs text-muted hidden sm:block">
                    {app.date}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted" />
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">
              Empfohlene Jobs für dich
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Full Stack Developer",
                  company: "Lufthansa Industry Solutions",
                  location: "Frankfurt",
                  match: "92%",
                },
                {
                  title: "Tech Lead",
                  company: "ING-DiBa",
                  location: "Frankfurt",
                  match: "87%",
                },
                {
                  title: "DevOps Engineer",
                  company: "Siemens",
                  location: "Offenbach",
                  match: "84%",
                },
              ].map((job, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-sm">
                      {job.title}
                    </h3>
                    <p className="text-xs text-muted">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                    {job.match} Match
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Completeness */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-4">Profil-Status</h3>
            <div className="relative w-full h-3 bg-background rounded-full mb-3">
              <div
                className="absolute left-0 top-0 h-full bg-primary rounded-full"
                style={{ width: "70%" }}
              />
            </div>
            <p className="text-sm text-muted mb-4">
              70% vollständig — vervollständige dein Profil für bessere Matches.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Lebenslauf hochladen", done: false },
                { label: "Skills hinzufügen", done: true },
                { label: "Berufserfahrung ergänzen", done: true },
                { label: "Profilbild hochladen", done: false },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      item.done ? "bg-green-500" : "bg-border"
                    }`}
                  >
                    {item.done && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={item.done ? "text-muted line-through" : "text-foreground"}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Appointments */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Nächste Termine
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="font-medium text-sm text-foreground">
                  Karriereberatung
                </p>
                <p className="text-xs text-muted flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" /> Morgen, 10:00 Uhr
                </p>
              </div>
              <div className="p-3 rounded-xl bg-background">
                <p className="font-medium text-sm text-foreground">
                  Interview-Training
                </p>
                <p className="text-xs text-muted flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" /> Fr, 14:00 Uhr
                </p>
              </div>
            </div>
            <Link
              href="/coaching"
              className="block text-center text-sm text-primary font-medium mt-4 hover:text-primary-light"
            >
              Termin buchen
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl border border-border p-6">
            <h3 className="font-bold text-foreground mb-4">Schnellzugriff</h3>
            <div className="space-y-2">
              {[
                { icon: User, label: "Profil bearbeiten" },
                { icon: FileText, label: "Lebenslauf verwalten" },
                { icon: MessageSquare, label: "Nachrichten" },
                { icon: Settings, label: "Einstellungen" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 p-3 rounded-xl text-sm text-muted hover:text-primary hover:bg-primary/5 transition-all"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
