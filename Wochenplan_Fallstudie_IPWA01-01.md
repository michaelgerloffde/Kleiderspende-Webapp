# 7-Tage-Plan: Fallstudie IPWA01-01 – Kleiderspenden-Registrierung

**Ziel:** Lauffähige React-Webanwendung im öffentlichen Repository + 7–10 Seiten Ausarbeitung, ausgerichtet auf die Bewertungskriterien der IU.

---

## Der wichtigste Gedanke vorab

Die Bewertung verteilt sich so:

| Kriterium | Gewicht | Wo Du es verdienst |
|---|---|---|
| Problemerfassung | 15 % | Analyse der Ausgangslage, Interpretationsspielräume benennen |
| Analyse | 25 % | Zielgruppe, Anforderungen, begründete Schwerpunkte |
| Konzepte | 25 % | Technologiewahl, Architektur, Theorie-Praxis-Transfer |
| Ergebnis | 25 % | Lösung **plus kritische Reflexion**, Risiken, Schwachstellen |
| Sprache/Form | 10 % | IU-Richtlinien, Zitation, Verzeichnisse |

Der Code selbst ist nur ein Anhang. Bewertet wird die **Begründung** Deiner Entscheidungen. Deshalb: bei jedem Schritt notieren, *warum* Du etwas so machst.

**Faustregel für die Woche:** Lieber eine schlichte Anwendung, die vollständig und exzellent begründet ist, als eine schicke, die Du nicht erklären kannst.

---

## Tag 1 – Konzeption (kein Code!)

**Zeitbudget: 5–6 Stunden**

### Vormittag: Fall verstehen und schärfen

- [ ] Aufgabenstellung a)–i) in eine Tabelle übertragen (Spalten: Nr. | Anforderung | Umsetzung | Status). Diese Tabelle begleitet Dich die ganze Woche und landet später in der Ausarbeitung.
- [ ] Fiktiven Verein festlegen: Name, Sitz, PLZ der Geschäftsstelle, Gründungsjahr, Größe. Konkrete Details machen die Fallstudie glaubwürdig.
- [ ] Zwei Nutzungskontexte beschreiben – das ist der eigentlich spannende Punkt der Fallstudie:
  - Spendende zuhause am Smartphone (Abholung)
  - Spendende am Tablet in der Geschäftsstelle (Übergabe, Person steht daneben, will schnell fertig werden)
- [ ] Zwei kurze Personas ableiten (je 3–4 Sätze).

### Nachmittag: Lücken benennen und Lösung skizzieren

- [ ] **Interpretationsspielräume auflisten** – der Prüfungsleitfaden sagt ausdrücklich, dass Fallstudienaufgaben unterspezifiziert sind. Mindestens vier Punkte, z. B.:
  - Was passiert, wenn die PLZ nicht zur Geschäftsstelle passt? Fehlermeldung oder automatische Umleitung auf Übergabe?
  - Werden Daten gespeichert? (Ohne Backend: nein – das ist eine bewusste Scope-Entscheidung, keine Schlamperei.)
  - Ist die Bestätigung eine eigene Route oder ein Zustandswechsel?
  - Braucht es Kontaktdaten der Spendenden? Wenn ja: DSGVO-Implikationen.
  - Für jeden Punkt: Alternativen abwägen, eine Variante wählen, Entscheidung begründen.
- [ ] User Flow zeichnen: Start → Modus wählen → Felder → Validierung → Bestätigung. Mit allen Verzweigungen.
- [ ] Wireframes: drei Screens, je mobil und Desktop (Papier oder Excalidraw). Abfotografieren/exportieren – das sind Abbildungen 1–3 Deiner Arbeit.
- [ ] Datenmodell festlegen: welche Felder, welcher Typ, Pflicht ja/nein.
- [ ] **Alles einkreisen, was sich zur Laufzeit ändert** → das sind Deine States (Modus, Kleidungsart, Krisengebiet, Adresse, Fehler, abgeschickt).

### Abends: Fundament für die Schriftarbeit

- [ ] `NOTIZEN.md` anlegen, Entscheidungen des Tages eintragen.
- [ ] 5–7 Quellen sammeln und in Zotero/Citavi ablegen. Vorschlag zur Mischung:
  - Kursskript IPWA01 (Pflicht – zeigt den Theorie-Praxis-Transfer)
  - Offizielle React-Dokumentation
  - Offizielle Tailwind-Dokumentation
  - Ein Fachbuch zu Web-Usability oder UX (z. B. Nielsen'sche Heuristiken)
  - WCAG 2.1 / BITV zur Barrierefreiheit
  - Ein Buch oder Paper zu komponentenbasierter Architektur
- [ ] Zitierleitfaden der IU auf myCampus öffnen und die Zitierweise einmal anschauen.

> **Ergebnis Tag 1:** Kapitel 1 und 2 der Ausarbeitung sind inhaltlich fertig gedacht.

---

## Tag 2 – Setup und statisches Gerüst

**Zeitbudget: 6 Stunden**

### Setup (max. 2 Stunden, dann fragen statt googeln)

- [ ] GitHub-Repository anlegen, **öffentlich**, mit README (Projektbeschreibung, Setup-Anleitung, Link zur Fallstudie).
- [ ] Projekt aufsetzen:
  ```
  npm create vite@latest kleiderspenden -- --template react
  cd kleiderspenden
  npm install
  npm install tailwindcss @tailwindcss/vite
  npm run dev
  ```
- [ ] Tailwind einbinden (Plugin in `vite.config.js`, `@import "tailwindcss";` in der CSS-Datei).
- [ ] `.gitignore` prüfen: `node_modules/`, `dist/`, `NOTIZEN.md`.
- [ ] Ordnerstruktur: `src/components/`, `src/data/`.
- [ ] **Commit 1:** "Projekt-Setup mit Vite, React und Tailwind"

### Statisches Gerüst (4 Stunden)

Alles mit festen Texten, noch keine Logik. Hier bist Du in Deiner Komfortzone – es ist im Kern HTML mit Tailwind-Klassen.

- [ ] `Header.jsx` – Logo, Titel, globale Navigation *(Anforderung a, b)*
- [ ] `Footer.jsx` – Impressum, Datenschutz, Copyright *(Anforderung b)*
- [ ] `Hero.jsx` – Titel und Einstieg
- [ ] `Spendenformular.jsx` – alle Felder, noch ohne Funktion *(Anforderung d)*
- [ ] `Bestaetigung.jsx` – Platzhaltertexte *(Anforderung i)*
- [ ] Logo erstellen: einfaches SVG reicht. Selbstgemacht ist besser als generiert – Du musst es erklären können.
- [ ] `src/data/` – Listen für Kleidungsarten und Krisengebiete als einfache Arrays.
- [ ] **Commit 2:** "Statisches Grundgerüst der Komponenten"

**Lerneffekt heute:** React-Komponenten sind Funktionen, die JSX zurückgeben. `className` statt `class`. Mehr brauchst Du für heute nicht.

---

## Tag 3 – Der React-Tag

**Zeitbudget: 6 Stunden. Rechne mit Frust – das ist normal und geht vorbei.**

Heute nur **eine** Sache lernen: State steuert die Oberfläche.

- [ ] `useState` für den Modus einbauen (`"uebergabe"` / `"abholung"`), Radio-Buttons anbinden *(Anforderung e)*
- [ ] Bedingtes Rendern: Adressfelder erscheinen nur bei Abholung *(Anforderungen f, g)*
  ```jsx
  {modus === "abholung" && ( <div>…</div> )}
  ```
- [ ] Wenn das läuft: 10 Minuten Pause und ins Logbuch schreiben, was Du verstanden hast. Das ist der Moment, an dem React klickt.
- [ ] Selects für Kleidungsart und Krisengebiet an States binden (controlled components).
- [ ] Adressfelder (Straße, PLZ, Ort) an States binden.
- [ ] **Commit 3:** "Formularlogik mit React State"

**Konzeptvergleich für die Ausarbeitung (Theorie-Praxis-Transfer, 25 %):**
Der Unterschied zwischen imperativer DOM-Manipulation (klassisches JavaScript: Element suchen, sichtbar schalten) und deklarativem Rendering (React: State ändern, Framework zeichnet neu). Das ist ein Absatz, der in der Konzeption richtig gut aussieht – und Du hast ihn heute erlebt, nicht nur gelesen.

---

## Tag 4 – Restlogik und Validierung

**Zeitbudget: 6 Stunden**

- [ ] PLZ-Prüfung als eigene, testbare Funktion *(Anforderung h)*
  ```jsx
  function istInDerNaehe(plz) {
    return plz.substring(0, 2) === GESCHAEFTSSTELLE_PLZ.substring(0, 2);
  }
  ```
- [ ] Validierung aller Pflichtfelder, Fehlermeldungen unter den Feldern.
- [ ] Fehlermeldungen bewusst formulieren: sagen, was fehlt **und** was zu tun ist. (Guter Anknüpfungspunkt für die Usability-Quelle.)
- [ ] Bestätigungsseite mit allen geforderten Daten: Art der Kleider, Krisengebiet, Datum, Uhrzeit, Ort *(Anforderung i)*
  - Datum/Uhrzeit über `new Date()` und `toLocaleDateString("de-DE")`
  - "Ort" = Geschäftsstelle bei Übergabe, Abholadresse bei Abholung
- [ ] Umschalten Formular ↔ Bestätigung über einen State.
- [ ] **Commit 4:** "Validierung, PLZ-Prüfung und Bestätigungsseite"

**Fachlicher Punkt für die Ausarbeitung:** Clientseitige Validierung ist Komfort, keine Sicherheit. In einer Produktivumgebung müsste die Prüfung serverseitig wiederholt werden. Solche Sätze bringen Punkte bei "kritische Reflexion".

---

## Tag 5 – Responsivität, Test, Belege

**Zeitbudget: 5 Stunden**

- [ ] Responsivität mit Tailwind-Breakpoints ergänzen *(Anforderung c)*: Basis mobil, dann `sm:`, `md:`, `lg:`.
- [ ] Mobile Navigation (Burger-Menü) – ein `useState` für auf/zu.
- [ ] In den DevTools testen: 375 px (Handy), 768 px (Tablet), 1440 px (Desktop).
- [ ] **Screenshots systematisch anlegen** – das sind Deine Abbildungen:
  - Startseite in drei Breiten
  - Formular Modus "Übergabe"
  - Formular Modus "Abholung" mit Adressfeldern
  - Fehlermeldung bei ungültiger PLZ
  - Bestätigungsseite
- [ ] Qualitätscheck:
  - Tastaturbedienung (nur Tab und Enter – kommt man durch?)
  - Sichtbarer Fokusrahmen
  - Labels korrekt mit Feldern verknüpft
  - Farbkontraste ausreichend
- [ ] **Anforderungstabelle von Tag 1 komplett abhaken** – jede Anforderung a)–i) einzeln durchgehen.
- [ ] **Schwachstellenliste ehrlich schreiben** (Gold für die Reflexion):
  - Keine Persistenz, keine Datenbank
  - PLZ-Vergleich ist eine grobe Näherung – reale Entfernungen weichen ab; Geodaten wären genauer
  - Keine Adressverifikation
  - Keine Barrierefreiheitsprüfung mit echten Hilfsmitteln
  - Keine automatisierten Tests
  - DSGVO-Aspekte nicht umgesetzt
- [ ] README fertigstellen, letzter Code-Commit, Repo-Link notieren.

---

## Tag 6 – Ausarbeitung schreiben

**Zeitbudget: 7–8 Stunden. Ziel: vollständiger Rohtext, keine Perfektion.**

Gliederungsvorschlag (7–10 Seiten Textteil):

| Kap. | Inhalt | Seiten |
|---|---|---|
| 1 | **Einleitung** – Kontext gemeinnütziger Sektor, Fallvorstellung, Zielsetzung, Vorgehensweise | 1 |
| 2 | **Analyse der Ausgangssituation** – Zielgruppen/Personas, Anforderungsanalyse mit Tabelle a)–i), Identifikation der Interpretationsspielräume und deren Auflösung, Schwerpunktsetzung | 2 |
| 3 | **Konzeption** – Technologiewahl mit Alternativenabwägung (React vs. Vanilla JS; Tailwind vs. Bootstrap), Komponentenarchitektur, Datenmodell, Wireframes, UX-Prinzipien | 2 |
| 4 | **Umsetzung** – Aufbau der Komponenten, State-Konzept, bedingtes Rendern, Validierung und PLZ-Logik, Responsivität; mit Screenshots und kurzen Code-Ausschnitten | 2–3 |
| 5 | **Kritische Reflexion** – Abgleich mit den Anforderungen, Schwachstellen, Risiken (Datenschutz, Missbrauch, Skalierung), Übertragbarkeit auf ähnliche Fälle | 1,5 |
| 6 | **Fazit und Ausblick** – Backend, DSGVO-Konzept, Geodaten statt PLZ, Mehrsprachigkeit, Tests | 0,5 |

**Schreibreihenfolge (schneller als von vorne nach hinten):** Kapitel 4 zuerst (hast Du frisch im Kopf), dann 3, dann 2, dann 5, dann 6, ganz zuletzt 1.

**Drei Formulierungsmuster, die Punkte bringen:**
- „Die Aufgabenstellung lässt offen, ob … Es wurde entschieden, …, weil …"
- „Alternativ wäre … möglich gewesen. Dagegen sprach …"
- „Diese Lösung stößt an ihre Grenze, sobald …"

---

## Tag 7 – Überarbeiten, Formales, Abgabe

**Zeitbudget: 5–6 Stunden**

- [ ] Text einmal komplett laut lesen – findet die meisten holprigen Stellen.
- [ ] Prüfen: Steht bei **jeder** Entscheidung eine Begründung? Wenn nicht, ergänzen.
- [ ] Formale Bestandteile vervollständigen:
  - Titelblatt **mit Link zum öffentlichen Repository** (ausdrücklich gefordert!)
  - Inhaltsverzeichnis
  - Abbildungs- und/oder Tabellenverzeichnis
  - Abkürzungsverzeichnis (API, CSS, DSGVO, JSX, PLZ, UI, UX, WCAG)
  - Literaturverzeichnis nach IU-Zitierleitfaden
  - Verzeichnis der Anhänge
  - Anhang: Code-Auszüge, Wireframes, ggf. vollständige Anforderungstabelle
- [ ] Alle Abbildungen nummeriert, beschriftet und **im Text referenziert**.
- [ ] Zitate prüfen: jede fremde Aussage belegt, Verzeichnis vollständig.
- [ ] Rechtschreibung und Seitenumfang kontrollieren (7–10 Seiten Textteil, Verzeichnisse zählen nicht mit).
- [ ] Repository final prüfen: läuft `npm install && npm run dev` in einem frischen Ordner?
- [ ] Eidesstattliche Erklärung über myCampus abgeben – **vorher ist keine Einreichung möglich**.
- [ ] Abgabe über Turnitin im myCampus-Kurs.

---

## Was den Unterschied zwischen „gut" und „sehr gut" macht

1. **Alternativen zeigen, nicht nur Ergebnisse.** Jede Entscheidung mit verworfenen Optionen und Begründung.
2. **Die Unterspezifikation der Aufgabe explizit thematisieren.** Der Leitfaden nennt das ausdrücklich als Kern der Methode – wer es benennt, zeigt Methodenverständnis.
3. **Ehrliche Schwachstellenanalyse.** Selbst gefundene Schwächen wirken souverän; übersehene wirken naiv.
4. **Theorie sichtbar anwenden.** Fachbegriffe aus dem Kursskript belegt einsetzen: deklaratives vs. imperatives Rendering, Komponentenarchitektur, Mobile First, Trennung von Struktur und Präsentation.
5. **Übertragbarkeit formulieren.** Was ließe sich von dieser Lösung auf andere Portale des Vereins übertragen?
6. **Nachvollziehbare Commit-Historie.** Mehrere sprechende Commits über die Woche belegen den Arbeitsprozess.

---

## Notfallplan bei Zeitnot

Wenn es eng wird, in dieser Reihenfolge kürzen:

1. Optisches Feintuning (Farben, Animationen) – **zuerst streichen**
2. Zusätzliche Seiten/Routen – nicht gefordert
3. Umfang der Screenshots reduzieren

**Niemals kürzen:** die Anforderungen a)–i), die Begründungen in der Ausarbeitung, die kritische Reflexion, die formalen Verzeichnisse. Eine schlichte Anwendung mit exzellenter Ausarbeitung bekommt eine bessere Note als umgekehrt.
