"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Lock, Eye, EyeOff, User, Briefcase, Search } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"jobseeker" | "employer">("jobseeker");

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">JP</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {t("auth.registerTitle")}
          </h1>
          <p className="text-muted mt-1">{t("auth.registerSubtitle")}</p>
        </div>

        <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
          {/* Role Toggle */}
          <div className="flex bg-background rounded-xl p-1 mb-6">
            <button
              onClick={() => setRole("jobseeker")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "jobseeker"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Search className="w-4 h-4" />
              {t("auth.asJobseeker")}
            </button>
            <button
              onClick={() => setRole("employer")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                role === "employer"
                  ? "bg-primary text-white shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {t("auth.asEmployer")}
            </button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.name")}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  placeholder="Max Mustermann"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="email"
                  placeholder="name@email.de"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mindestens 8 Zeichen"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.confirmPassword")}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="password"
                  placeholder="Passwort wiederholen"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary mt-0.5"
              />
              <span className="text-xs text-muted">
                Ich akzeptiere die Datenschutzerklärung und die AGB von
                JobPilot. Meine Daten werden gemäß DSGVO verarbeitet.
              </span>
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-secondary hover:bg-secondary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
            >
              {t("common.register")}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted">
            {t("auth.hasAccount")}{" "}
            <Link
              href="/auth/login"
              className="text-primary font-semibold hover:text-primary-light"
            >
              {t("common.login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
