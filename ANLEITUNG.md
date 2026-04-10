# JobPilot Hessen — Vollständige Anleitung

## Was ist JobPilot Hessen?

JobPilot Hessen ist eine professionelle Website für private Arbeitsvermittlung in Hessen.
Die Website richtet sich an drei Zielgruppen:
- **Bewerber** (Arbeitsuchende)
- **Arbeitgeber** (Unternehmen die Mitarbeiter suchen)
- **Institutionen** (Jobcenter, Arbeitsagenturen, Bildungsträger)

Die Website ist unter **https://jobpilot-hessen.de** erreichbar.

---

## Technische Übersicht (einfach erklärt)

| Was | Erklärung |
|-----|-----------|
| **Next.js** | Das Framework (Grundgerüst) der Website |
| **React** | Die Technologie für die Benutzeroberfläche |
| **Tailwind CSS** | Das Design-System für Farben, Abstände, Layouts |
| **Prisma** | Verbindung zur Datenbank (speichert Nutzer, Newsletter etc.) |
| **Neon PostgreSQL** | Die Cloud-Datenbank (kostenlos) |
| **Vercel** | Der Hosting-Dienst wo die Website läuft |
| **GitHub** | Wo der Code gespeichert ist |
| **next-intl** | Mehrsprachigkeit (Deutsch + Englisch) |

**GitHub-Repository:** https://github.com/ntarhri-ux/jobpilot
**Hosting:** Vercel (auto-deploy bei jedem Push)
**Domain:** jobpilot-hessen.de (DNS bei Hostinger)

---

## Alle Seiten der Website

| Seite | URL (Deutsch) | URL (Englisch) | Beschreibung |
|-------|--------------|----------------|--------------|
| **Startseite** | /de | /en | Hero, Suche, Vorteile, Branchen, FAQ |
| **Für Bewerber** | /de/fuer-bewerber | /en/for-jobseekers | Info für Arbeitsuchende |
| **Für Arbeitgeber** | /de/fuer-arbeitgeber | /en/for-employers | Info für Unternehmen |
| **Für Institutionen** | /de/fuer-institutionen | /en/for-institutions | Für Jobcenter und Träger |
| **AVGS** | /de/avgs | /en/avgs | Vermittlungsgutschein Info |
| **Jobs** | /de/jobs | /en/jobs | Stellenangebote durchsuchen |
| **Coaching** | /de/coaching | /en/coaching | Karriereberatung und Coaching |
| **Ratgeber/Blog** | /de/ratgeber | /en/blog | Blog-Artikel und Tipps |
| **Regionen** | /de/regionen | /en/regions | Regionen in Hessen |
| **Branchen** | /de/branchen | /en/industries | Branchen-Übersicht |
| **FAQ** | /de/faq | /en/faq | Häufige Fragen |
| **Über uns** | /de/ueber-uns | /en/about | Über JobPilot |
| **Kontakt** | /de/kontakt | /en/contact | Kontaktformular |
| **Registrierung** | /de/auth/register | /en/auth/register | Konto erstellen |
| **Login** | /de/auth/login | /en/auth/login | Anmelden |
| **Dashboard** | /de/dashboard | /en/dashboard | Nutzer-Dashboard |
| **Impressum** | /de/impressum | /en/impressum | Rechtliches |
| **Datenschutz** | /de/datenschutz | /en/datenschutz | Datenschutzerklärung |

---

## Projektstruktur (Ordner-Übersicht)

```
arbeit-1/
├── src/
│   ├── app/
│   │   ├── [locale]/              <-- Alle Seiten (jede Seite = ein Ordner)
│   │   │   ├── page.tsx           <-- Startseite
│   │   │   ├── fuer-bewerber/     <-- Für Bewerber Seite
│   │   │   ├── fuer-arbeitgeber/  <-- Für Arbeitgeber Seite
│   │   │   ├── fuer-institutionen/<-- Für Institutionen Seite
│   │   │   ├── avgs/             <-- AVGS Seite
│   │   │   ├── jobs/             <-- Jobs-Seite
│   │   │   ├── coaching/         <-- Coaching-Seite
│   │   │   ├── blog/             <-- Blog-Seite
│   │   │   ├── regionen/         <-- Regionen-Seite
│   │   │   ├── branchen/         <-- Branchen-Seite
│   │   │   ├── faq/              <-- FAQ-Seite
│   │   │   ├── kontakt/          <-- Kontakt-Seite
│   │   │   ├── ueber-uns/        <-- Über uns Seite
│   │   │   ├── auth/login/       <-- Login-Seite
│   │   │   ├── auth/register/    <-- Registrierungs-Seite
│   │   │   ├── dashboard/        <-- Dashboard
│   │   │   ├── impressum/        <-- Impressum
│   │   │   └── datenschutz/      <-- Datenschutz
│   │   ├── api/                   <-- Backend-Logik
│   │   │   ├── auth/register/    <-- Registrierung-Backend
│   │   │   ├── auth/login/       <-- Login-Backend
│   │   │   └── newsletter/       <-- Newsletter-Backend
│   │   ├── layout.tsx             <-- Haupt-Layout (SEO)
│   │   ├── globals.css            <-- Farben und Styles
│   │   ├── sitemap.ts             <-- Sitemap für Google
│   │   └── robots.txt             <-- Regeln für Suchmaschinen
│   ├── components/                <-- Wiederverwendbare Teile
│   │   ├── Header.tsx             <-- Navigation oben
│   │   ├── Footer.tsx             <-- Fußzeile unten
│   │   └── HeroSearch.tsx         <-- Suchleiste auf Startseite
│   ├── messages/                  <-- Übersetzungen
│   │   ├── de.json                <-- Deutsche Texte
│   │   └── en.json                <-- Englische Texte
│   ├── lib/                       <-- Hilfsfunktionen
│   │   ├── db.ts                  <-- Datenbankverbindung
│   │   ├── auth.ts                <-- Login/Registrierung Logik
│   │   ├── blog-data.ts           <-- Blog-Artikel Daten
│   │   └── jobs-data.ts           <-- Job-Daten
│   └── i18n/                      <-- Sprach-Konfiguration
│       ├── routing.ts             <-- URL-Pfade für DE/EN
│       └── navigation.ts          <-- Navigations-Helper
├── prisma/
│   └── schema.prisma              <-- Datenbank-Struktur
├── public/                        <-- Bilder und statische Dateien
│   ├── hero-wiesbaden.svg         <-- Wiesbaden-Skyline im Hero
│   └── blog/                      <-- Blog-Bilder
├── .env                           <-- Umgebungsvariablen (DATABASE_URL)
├── package.json                   <-- Projekt-Konfiguration
└── next.config.ts                 <-- Next.js Konfiguration
```

---

## Wichtige Dateien auf einen Blick

| Was ändern? | Welche Datei? |
|------------|---------------|
| **Startseite** | src/app/[locale]/page.tsx |
| **Navigation (Header)** | src/components/Header.tsx |
| **Fußzeile (Footer)** | src/components/Footer.tsx |
| **Farben** | src/app/globals.css |
| **SEO Titel und Beschreibung** | In jeder page.tsx oben bei metadata |
| **Deutsche Texte** | src/messages/de.json |
| **Englische Texte** | src/messages/en.json |
| **FAQ Fragen** | src/app/[locale]/faq/page.tsx |
| **Blog-Artikel** | src/lib/blog-data.ts |
| **Job-Angebote** | src/lib/jobs-data.ts |
| **AVGS-Seite** | src/app/[locale]/avgs/page.tsx |
| **Für Bewerber** | src/app/[locale]/fuer-bewerber/page.tsx |
| **Für Arbeitgeber** | src/app/[locale]/fuer-arbeitgeber/page.tsx |
| **Für Institutionen** | src/app/[locale]/fuer-institutionen/page.tsx |
| **Regionen** | src/app/[locale]/regionen/page.tsx |
| **Branchen** | src/app/[locale]/branchen/page.tsx |
| **Impressum** | src/app/[locale]/impressum/page.tsx |
| **Datenschutz** | src/app/[locale]/datenschutz/page.tsx |
| **Sitemap (Google)** | src/app/sitemap.ts |
| **Datenbank-Struktur** | prisma/schema.prisma |

---

## Wo kann ich Texte ändern?

### Telefonnummer ändern

Die Telefonnummer steht an mehreren Stellen. Suche nach +49 611 123 456 78 in diesen Dateien:

- src/components/Header.tsx -- Navigation oben
- src/components/Footer.tsx -- Fußzeile
- src/app/[locale]/fuer-bewerber/page.tsx
- src/app/[locale]/fuer-arbeitgeber/page.tsx
- src/app/[locale]/fuer-institutionen/page.tsx
- src/app/[locale]/avgs/page.tsx
- src/app/[locale]/faq/page.tsx
- src/app/[locale]/regionen/page.tsx
- src/app/[locale]/branchen/page.tsx

Auch das tel:+4961112345678 (ohne Leerzeichen, für den Anruf-Link) muss angepasst werden!

Tipp: Öffne VS Code und nutze Strg+Shift+H (Suchen und Ersetzen in allen Dateien) um alle Stellen gleichzeitig zu ändern.

### Adresse ändern

Die Adresse steht in den Übersetzungsdateien:
- src/messages/de.json -- suche nach "address"
- src/messages/en.json -- suche nach "address"

Aktuell: Bahnhofstraße 1, 65185 Wiesbaden

### E-Mail-Adresse ändern

- src/messages/de.json -- suche nach "email"
- src/messages/en.json -- suche nach "email"

Aktuell: info@jobpilot-hessen.de

### Öffnungszeiten ändern

- src/messages/de.json -- suche nach "hours"

---

## Logo ändern

Aktuell wird das Logo als Text "JP" mit dem Wort "JobPilot" angezeigt.

### So ersetzt du es mit einem Bild:
1. Lege dein Logo als logo.png in den public/ Ordner
2. Öffne src/components/Header.tsx
3. Suche den Block mit "JP" und "JobPilot"
4. Ersetze ihn mit:
   ```html
   <img src="/logo.png" alt="JobPilot" className="h-10" />
   ```
5. Mache das Gleiche in src/components/Footer.tsx
6. Speichern, committen, pushen

---

## Farben ändern

Die Farben werden in src/app/globals.css definiert:

- --color-primary: #1E3A5F       (Hauptfarbe, dunkles Blau)
- --color-primary-light: #2A4F7F  (Helleres Blau)
- --color-primary-dark: #0F1E33   (Dunkleres Blau)
- --color-secondary: #C1121F      (Rot, für wichtige Buttons)
- --color-secondary-light: #D4232F (Helleres Rot)
- --color-accent: #D4A843         (Gold, für Akzente)

Einfach die Farbcodes durch deine Wunschfarben ersetzen.
Farbcodes finden: https://coolors.co oder https://colorhunt.co

---

## FAQ Fragen ändern

Datei: src/app/[locale]/faq/page.tsx

Die Fragen sind so organisiert:
```
{
  title: "Allgemein",              <-- Abschnitt-Titel
  items: [
    {
      q: "Was ist JobPilot?",      <-- Frage
      a: "JobPilot ist ...",       <-- Antwort
    },
  ],
},
```

Neue Frage hinzufügen: Einfach einen neuen { q: "...", a: "..." } Block kopieren und Text ändern.

---

## Blog-Artikel ändern oder hinzufügen

Datei: src/lib/blog-data.ts

Jeder Artikel hat diese Felder:
- slug: URL-Name (keine Leerzeichen, keine Umlaute)
- title: Überschrift
- excerpt: Vorschau-Text
- category: Kategorie
- readTime: Lesezeit in Minuten
- date: Datum
- author: Autor
- image: Bild-Pfad (in public/blog/ ablegen)
- tags: Schlagwörter
- content: Vollständiger Artikel-Text

---

## Wie deploye ich Änderungen?

Nach jeder Änderung am Code, 3 Befehle im Terminal:

```
git add .
git commit -m "Beschreibung der Änderung"
git push origin main
```

Vercel erkennt den Push automatisch und aktualisiert die Website in 1-2 Minuten.

Terminal öffnen: VS Code mit Strg+Ö oder Terminal Menü oben

---

## Domain und DNS

Domain: jobpilot-hessen.de (gekauft bei Hostinger)

DNS-Einstellungen bei Hostinger:
- A-Record: @ zeigt auf 76.76.21.21
- CNAME: www zeigt auf cname.vercel-dns.com

Bei Vercel: Settings > Domains > jobpilot-hessen.de eingetragen

---

## Google Search Console

Was ist das? Zeigt dir wie deine Website bei Google gefunden wird.

Zugang: https://search.google.com/search-console

Sitemap eingereicht: https://jobpilot-hessen.de/sitemap.xml

Verifizierung: Meta-Tag in src/app/layout.tsx

---

## Datenbank einrichten (Neon PostgreSQL)

Die Website braucht eine Datenbank für Nutzer-Registrierung, Newsletter und Kontaktanfragen.

### Schritt 1: Neon-Account erstellen
1. Gehe zu https://neon.tech
2. Klick "Sign up" und melde dich mit GitHub an

### Schritt 2: Datenbank erstellen
1. Klick "Create Project"
2. Name: jobpilot
3. Region: EU (Frankfurt)
4. Kopiere den Connection String (sieht so aus: postgresql://user:passwort@host/datenbank?sslmode=require)

### Schritt 3: In Vercel einfügen
1. Gehe zu vercel.com > dein Projekt > Settings > Environment Variables
2. Füge hinzu: DATABASE_URL = (dein Connection String)
3. Füge hinzu: JWT_SECRET = jobpilot-hessen-geheim-2026-sicher
4. Save klicken

### Schritt 4: Tabellen erstellen
1. Öffne die .env Datei im Projektordner
2. Ersetze DATABASE_URL mit deinem Connection String
3. Im Terminal: npx prisma db push
4. Bei Vercel: Redeploy klicken

---

## SEO-Übersicht

Was wurde gemacht:
- Jede Seite hat eigene SEO-Metadaten (Titel, Beschreibung, Keywords)
- JSON-LD strukturierte Daten für Google
- Sitemap mit 30+ URLs und DE/EN Alternativen
- Google Search Console eingerichtet und Sitemap eingereicht
- Robots.txt für Suchmaschinen-Zugang

Wichtige Keywords: Jobs Hessen, Stellenangebote Wiesbaden, Stellenangebote Frankfurt, Jobvermittlung Hessen, AVGS Hessen, Personalvermittlung Hessen, Karriereberatung Rhein-Main

---

## Häufige Aufgaben

### Telefonnummer überall ändern
1. VS Code öffnen
2. Strg+Shift+H (Suchen in allen Dateien)
3. Suche: +49 611 123 456 78 > Ersetzen mit neuer Nummer
4. Suche auch: +4961112345678 > Ersetzen mit neuer Nummer ohne Leerzeichen
5. Speichern, git add, commit, push

### Neue FAQ-Frage hinzufügen
1. src/app/[locale]/faq/page.tsx öffnen
2. Neuen { q: "Frage", a: "Antwort" } Block einfügen
3. Speichern, committen, pushen

### Neuen Blog-Artikel schreiben
1. src/lib/blog-data.ts öffnen
2. Bestehenden Artikel kopieren
3. Alle Felder ändern (slug, title, content, etc.)
4. Speichern, committen, pushen

### Hero-Bereich auf Startseite ändern
1. src/app/[locale]/page.tsx öffnen
2. Den ersten section-Block bearbeiten
3. Texte ändern
4. Speichern, committen, pushen

### Neues Bild hinzufügen
1. Bild in den public/ Ordner legen
2. Im Code verwenden als src="/mein-bild.jpg"

---

## Was wurde alles gemacht? (Zusammenfassung)

### Phase 1: Grundgerüst
- Next.js App mit TypeScript erstellt
- Mehrsprachigkeit (DE/EN) eingerichtet
- Alle Grundseiten erstellt
- Datenbank-Schema definiert

### Phase 2: SEO-Optimierung
- Keywords und Meta-Beschreibungen
- JSON-LD strukturierte Daten
- Sitemap und Google Search Console

### Phase 3: Deployment
- GitHub-Repository erstellt
- Vercel-Hosting mit Auto-Deploy
- Domain jobpilot-hessen.de konfiguriert

### Phase 4: Funktionale Features
- Suchfunktion auf Startseite
- Filter auf Jobs-Seite
- Funktionierende Links

### Phase 5: Design-Überarbeitung
- Professionelles Design
- Hero mit Wiesbaden-Skyline
- Conversion-optimierte Buttons

### Phase 6: Strategisches Rebranding
- 7 neue Zielgruppen-Seiten
- Positionierung als privater Vermittlungsdienstleister
- Rechtlich korrekte Texte (keine falschen Arbeitsamt-Claims)
- AVGS-Seite, FAQ, Regionen, Branchen

### Phase 7: Backend
- Registrierung und Login funktional
- Newsletter-Anmeldung funktional
- PostgreSQL Cloud-Datenbank (Neon)
- API-Routen für alle Formulare

---

## Wichtige Links

- Website: https://jobpilot-hessen.de
- Vercel Dashboard: https://vercel.com
- GitHub Code: https://github.com/ntarhri-ux/jobpilot
- Google Search Console: https://search.google.com/search-console
- Neon Datenbank: https://console.neon.tech
- Hostinger (Domain): https://www.hostinger.de

---

Letzte Aktualisierung: April 2026
