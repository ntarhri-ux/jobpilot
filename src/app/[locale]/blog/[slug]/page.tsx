import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Bookmark,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export default function BlogPostPage() {
  const t = useTranslations();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted hover:text-primary text-sm mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> {t("common.back")} zum Ratgeber
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          Bewerbungstipps
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          10 Tipps für das perfekte Vorstellungsgespräch
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" /> Sarah Müller
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> 15. März 2026
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> 5 Min. Lesezeit
          </span>
        </div>
      </header>

      {/* Cover Image Placeholder */}
      <div className="h-64 sm:h-80 gradient-primary rounded-3xl mb-10 flex items-center justify-center relative overflow-hidden">
        <BookOpen className="w-24 h-24 text-white/10" />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
        <p className="text-lg font-medium text-foreground">
          Ein Vorstellungsgespräch kann über deine berufliche Zukunft
          entscheiden. Mit der richtigen Vorbereitung kannst du selbstbewusst
          auftreten und einen bleibenden Eindruck hinterlassen. Hier sind unsere
          10 besten Tipps.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          1. Recherchiere das Unternehmen gründlich
        </h2>
        <p>
          Informiere dich über die Unternehmensgeschichte, aktuelle Projekte,
          Werte und die Unternehmenskultur. Besuche die Webseite, lies aktuelle
          Pressemitteilungen und schau dir die Social-Media-Kanäle an. Zeige im
          Gespräch, dass du weißt, worauf sich das Unternehmen fokussiert.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          2. Bereite Antworten auf häufige Fragen vor
        </h2>
        <p>
          Klassische Fragen wie &quot;Erzählen Sie etwas über sich&quot;, &quot;Warum möchten
          Sie bei uns arbeiten?&quot; oder &quot;Wo sehen Sie sich in fünf Jahren?&quot;
          kommen fast immer. Übe deine Antworten laut — am besten vor einem
          Spiegel oder mit einem Freund.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          3. Kleide dich angemessen
        </h2>
        <p>
          Der erste Eindruck zählt. Wähle dein Outfit passend zur
          Unternehmenskultur. Im Bankensektor in Frankfurt ist ein Anzug
          angebracht, während in einem Startup eine gepflegte
          Business-Casual-Garderobe reicht.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          4. Achte auf Körpersprache
        </h2>
        <p>
          Ein fester Händedruck, Blickkontakt und eine aufrechte Haltung
          signalisieren Selbstbewusstsein. Vermeide verschränkte Arme oder
          nervöses Zappeln. Lächle natürlich und zeige echtes Interesse.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          5. Stelle eigene Fragen
        </h2>
        <p>
          Bereite mindestens 3-5 Fragen vor, die du am Ende stellen kannst. Das
          zeigt Interesse und Engagement. Frage zum Beispiel nach dem Team, den
          Entwicklungsmöglichkeiten oder aktuellen Herausforderungen.
        </p>

        <div className="bg-primary/5 rounded-2xl p-6 my-8 border-l-4 border-primary">
          <p className="font-semibold text-foreground mb-2">
            Tipp von JobPilot:
          </p>
          <p>
            Nutze unser kostenloses Interview-Training, um dich optimal
            vorzubereiten. Unsere Berater simulieren reale
            Vorstellungsgespräche und geben dir wertvolles Feedback.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          6. Sei pünktlich
        </h2>
        <p>
          Plane genug Zeit für die Anreise ein. 10-15 Minuten vor dem Termin da
          zu sein ist ideal. Bei Online-Interviews: Teste vorher die Technik
          und sorge für eine ruhige Umgebung.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          7. Bringe relevante Unterlagen mit
        </h2>
        <p>
          Drucke deinen Lebenslauf, das Anschreiben und Zeugnisse aus. Ein
          Notizblock für eigene Notizen zeigt Professionalität.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          8. Nutze die STAR-Methode
        </h2>
        <p>
          Bei Verhaltensfragen (Situation, Task, Action, Result): Beschreibe
          eine konkrete Situation, deine Aufgabe, was du getan hast und welches
          Ergebnis du erzielt hast. Das macht deine Antworten greifbar.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          9. Sei authentisch
        </h2>
        <p>
          Verstelle dich nicht. Arbeitgeber suchen echte Menschen, die ins Team
          passen. Sei ehrlich über deine Stärken und Schwächen — und zeige, wie
          du an dir arbeitest.
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8">
          10. Follow-up nicht vergessen
        </h2>
        <p>
          Eine kurze Dankes-E-Mail nach dem Gespräch hinterlässt einen positiven
          Eindruck. Bedanke dich für die Zeit und betone nochmals dein Interesse
          an der Stelle.
        </p>
      </div>

      {/* Share & Save */}
      <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl text-sm text-muted hover:text-primary hover:border-primary transition-all">
          <Share2 className="w-4 h-4" /> Teilen
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl text-sm text-muted hover:text-primary hover:border-primary transition-all">
          <Bookmark className="w-4 h-4" /> Speichern
        </button>
      </div>

      {/* CTA */}
      <div className="mt-10 bg-primary/5 rounded-3xl p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Brauchst du Hilfe bei der Bewerbung?
        </h3>
        <p className="text-muted mb-6">
          Unsere Karriereberater helfen dir beim Interview-Training und der
          Bewerbungsvorbereitung.
        </p>
        <Link
          href="/coaching"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-all"
        >
          Coaching buchen <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
