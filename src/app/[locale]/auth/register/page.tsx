"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Mail, Lock, Eye, EyeOff, User, Briefcase, Search, Loader2, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"jobseeker" | "employer">("jobseeker");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Client validation
    if (!name.trim()) {
      setError("Bitte geben Sie Ihren Namen ein.");
      return;
    }
    if (!email.trim()) {
      setError("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }
    if (password.length < 6) {
      setError("Das Passwort muss mindestens 6 Zeichen lang sein.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Die Passwörter stimmen nicht überein.");
      return;
    }
    if (!accepted) {
      setError("Bitte akzeptieren Sie die Datenschutzerklärung und AGB.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password, role }),
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
      }, 1500);
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
            {t("auth.registerTitle")}
          </h1>
          <p className="text-muted mt-1">{t("auth.registerSubtitle")}</p>
        </div>

        <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
          {/* Success Message */}
          {success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-green-700 font-medium">
                Registrierung erfolgreich! Sie werden weitergeleitet...
              </p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

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

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.name")}
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Max Mustermann"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled={loading || success}
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
                  placeholder="Mindestens 6 Zeichen"
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

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                {t("auth.confirmPassword")}
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Passwort wiederholen"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  disabled={loading || success}
                />
              </div>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary mt-0.5"
                disabled={loading || success}
              />
              <span className="text-xs text-muted">
                Ich akzeptiere die Datenschutzerklärung und die AGB von
                JobPilot. Meine Daten werden gemäß DSGVO verarbeitet.
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || success}
              className="w-full py-3 bg-secondary hover:bg-secondary-light text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Wird registriert...
                </>
              ) : success ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Erfolgreich!
                </>
              ) : (
                t("common.register")
              )}
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
