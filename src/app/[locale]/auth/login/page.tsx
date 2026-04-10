"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Mail, Lock, Eye, EyeOff, Loader2, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const t = useTranslations();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }
    if (!password) {
      setError("Bitte geben Sie Ihr Passwort ein.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ein Fehler ist aufgetreten.");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } catch {
      setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
      setLoading(false);
    }
  }

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
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-700 font-medium">
                Anmeldung erfolgreich! Sie werden weitergeleitet...
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.de"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled={loading || success}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled={loading || success}
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
                  disabled={loading || success}
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
              disabled={loading || success}
              className="w-full py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Wird angemeldet...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Erfolgreich!
                </>
              ) : (
                t("common.login")
              )}
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
