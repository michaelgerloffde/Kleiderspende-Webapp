Notizen:

Tag 1:
- Aktivitätsdiagramm
- Skizzenprototyp für erste Anordnung der Webpage
- Anhand des Prototyps und ACD - Interpretationsspielräume abgeleitet


Tag 2


Projekt Anlegen:

Statisches Gerüst 
Für die statische Grundstruktur der Komponenten (Header, Footer, Formularlayout) wurden KI-generierte Vorlagen als Ausgangspunkt verwendet und anschließend an die Anforderungen des Projekts angepasst. Die fachliche Konzeption, die Ablauflogik sowie deren Umsetzung wurden eigenständig erarbeitet.




**Tag 1 – Konzeption**

- Aufgabenstellung und Prüfungsleitfaden IPWA01-01 durchgearbeitet, Anforderungen a)–i) in Tabelle überführt (ANFORDERUNGEN.md)
- Aktivitätsdiagramm des Spendenablaufs eigenständig erstellt (Papier)
- Ablauf festgelegt: Spendenart → ggf. Adresse + Validierung → Kleidungsart → Krisengebiet → Prüfung → Bestätigungsseite → Dankeschön
- Entscheidung: Adresse **vor** Kleidungsart/Krisengebiet abfragen (früher Abbruch spart investierte Zeit)
- Entscheidung: Bei Übergabe Adressfeld **ausgegraut statt ausgeblendet** (Layoutstabilität, Nachvollziehbarkeit; Barrierefreiheit als benannte Einschränkung)
- Entscheidung: PLZ als **Textfeld**, nicht Dropdown (sonst wäre die geforderte Plausibilitätsprüfung überflüssig)
- Entscheidung: Nur Krisengebiet optional, alle übrigen Felder Pflicht
- Interpretationsspielräume gesammelt (37 in 9 Blöcken), Kandidaten für den Bericht ausgewählt
- Terminvergabe per Mail als Idee verworfen → konzeptionell als Scope-Grenze und Ausblick im Bericht
- Diskussion Nutzungskontext vs. Use Cases vs. Personas → Ergebnis: Use Cases + zwei kurze Personas, Nutzungskontext gestrichen

**Tag 2 – Technisches Setup**

- Repository geprüft, Projektordner eingerichtet
- Technologiewahl: React + Vite + Tailwind CSS
- Vite-Projekt aufgesetzt: `npm create vite@latest . -- --template react`, Option "Ignore files and continue" (Notizdateien sollten erhalten bleiben)
- Linter: ESLint gewählt
- Tailwind installiert: `npm install tailwindcss @tailwindcss/vite`
- `vite.config.js` um Tailwind-Plugin ergänzt
- `src/index.css` auf `@import "tailwindcss";` reduziert
- Dev-Server getestet (`npm run dev`, localhost:5173), Tailwind-Funktion mit Testklassen verifiziert
- Gelernt: `node_modules` gehört nicht ins Repository (steht in `.gitignore`)
- Commit: Projektsetup React + Vite + Tailwind

**Tag 3 – Grundlagen und statisches Gerüst**

- React-Grundlagen erarbeitet: Komponente = Funktion mit Großbuchstaben, die JSX zurückgibt
- JSX-Regeln: `className` statt `class`, alle Tags schließen, nur ein Wurzelelement im `return`
- Rollenverteilung verstanden: `index.html` = Rahmen (`<head>`, Titel, Favicon, `lang`), `App.jsx` = sichtbarer Inhalt
- Entscheidung Komponentenaufteilung: eigene Dateien nur bei ausreichendem Umfang; `<main>` und `<section>` bleiben inline
- Merkblatt als PDF angelegt (JSX, const/let, Bedingungen, useState, `.map()`, Tailwind, Python-Vergleich)
- Tailwind-Prinzip verstanden: Utility-Klassen statt fertiger Komponenten, HTML-Struktur selbst bauen
- Reduzierte Gestaltungspalette festgelegt (wenige wiederkehrende Werte für Abstände, Farben, Schriftgrößen)
- Responsivität verstanden: mobile first, Präfixe `md:` / `lg:` ergänzen statt ersetzen
- Bootstrap als Alternative erwogen und verworfen (Setup bereits erfolgt, Tailwind erlaubt eigenes Erscheinungsbild)
- Burger-Menü verworfen → stattdessen Navigation responsiv skalieren oder auf Smartphone ausblenden (Links stehen im Footer)
- Komponenten angelegt: `Header.jsx`, `Hero.jsx`, `Spendenformular.jsx`, `Bestaetigung.jsx`, `Footer.jsx`, `Listen.js`
- Statisches Gerüst umgesetzt (Layout und Felder, noch ohne Logik)
- Semantische Tags gewählt: `<header>`, `<section>`, `<footer>`, `<dl>` für die Bestätigungsansicht
- Entscheidung KI-Einsatz: Layout-Vorlagen als Ausgangspunkt, Ablauflogik eigenständig; Kennzeichnung im Bericht geplant

**Offen / als Nächstes**

- IU-Vorgaben zur KI-Kennzeichnung im Prüfungsleitfaden und auf myCampus prüfen
- Logo als SVG erstellen und in `public/` ablegen
- `index.html`: Titel, `lang="de"`, Favicon setzen
- Dropdowns mit Daten aus `Listen.js` füllen (`.map()`)
- `useState` für Spendenart, Adressfelder, Kleidungsart, Krisengebiet
- Adressfeld abhängig von Spendenart ausgrauen
- PLZ-Plausibilitätsprüfung (erste zwei Ziffern vs. Geschäftsstelle)
- Wechsel zur Bestätigungsseite, Anzeige von Datum/Uhrzeit/Ort
- Responsivität ergänzen, Test auf drei Breiten, Screenshots für die Dokumentation
- Commit: Statisches Grundgerüst der Komponenten