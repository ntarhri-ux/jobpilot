"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const t = useTranslations();
  const [showPassword, setShowPassword] = useState(false);

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
            {t("auth.loginTitle")}
          </h1>
          <p className="text-muted mt-1">{t("auth.loginSubtitle")}</p>
        </div>

        <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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
                  placeholder="••••••••"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted">
                  {t("auth.rememberMe")}
                </span>
              </label>
              <button type="button" className="text-sm text-primary hover:text-primary-light font-medium">
                {t("auth.forgotPassword")}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
            >
              {t("common.login")}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-muted">
            {t("auth.noAccount")}{" "}
            <Link
              href="/auth/register"
              className="text-primary font-semibold hover:text-primary-light"
            >
              {t("common.register")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
