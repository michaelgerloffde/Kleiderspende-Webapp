# Anforderungstabelle – Fallstudie IPWA01-01

Legende Status: ⬜ offen · 🟡 in Arbeit · ✅ erfüllt

## Hauptaufgaben

| Nr. | Anforderung | Umsetzung / Lösungsansatz | Status | Beleg (Screenshot/Datei) |
|-----|-------------|---------------------------|--------|--------------------------|
| a | Öffentliches Code-Repository einrichten | | ⬜ | |
| b | Webanwendung mit modernen CSS-/JS-Frameworks | | ⬜ | |
| c | Ergebnis dokumentieren, Code im Repository ablegen | | ⬜ | |

## Detailanforderungen (zu b)

| Nr. | Anforderung | Umsetzung / Lösungsansatz | Status | Beleg |
|-----|-------------|---------------------------|--------|-------|
| b.a | Titel und Logo | | ⬜ | |
| b.b | Header mit globaler Navigation, Content-Bereich, Footer mit rechtlichen Hinweisen | | ⬜ | |
| b.c | Responsiv: Desktop, Tablet, Smartphone | | ⬜ | |
| b.d | Formular zur Registrierung einer Kleiderspende | | ⬜ | |
| b.e | Übergabe an der Geschäftsstelle ODER Abholung durch Sammelfahrzeug | | ⬜ | |
| b.f | Bei Übergabe: nur Art der Kleidung + Krisengebiet aus Liste | | ⬜ | |
| b.g | Bei Abholung: Abholadresse + Art der Kleidung + Krisengebiet | | ⬜ | |
| b.h | Prüfung, ob Abholadresse in der Nähe der Geschäftsstelle liegt (erste zwei Stellen der PLZ identisch) | | ⬜ | |
| b.i | Bestätigungsseite mit allen Daten: Art der Kleider, Krisengebiet, Datum, Uhrzeit, Ort | | ⬜ | |

## Formale Anforderungen (Prüfungsleitfaden)

| Nr. | Anforderung | Status |
|-----|-------------|--------|
| F.1 | Titelblatt mit Link zum öffentlichen Repository | ⬜ |
| F.2 | Inhaltsverzeichnis | ⬜ |
| F.3 | Abbildungs- und/oder Tabellenverzeichnis | ⬜ |
| F.4 | Abkürzungsverzeichnis | ⬜ |
| F.5 | Textteil 7–10 Seiten (Einleitung, Hauptteil, Schluss) | ⬜ |
| F.6 | Literaturverzeichnis nach IU-Zitierleitfaden | ⬜ |
| F.7 | Verzeichnis der Anhänge | ⬜ |
| F.8 | Anhänge und Materialien | ⬜ |
| F.9 | Eidesstattliche Erklärung über myCampus abgegeben | ⬜ |
| F.10 | Abgabe über Turnitin | ⬜ |

## Interpretationsspielräume

Die Aufgabenstellung lässt bewusst Fragen offen. Hier festhalten, wie Du sie auflöst – dieser Abschnitt ist Kernmaterial für das Analyse-Kapitel.

| Nr. | Offene Frage | Alternativen | Entscheidung | Begründung |
|-----|--------------|--------------|--------------|------------|
| I-1 | Was passiert, wenn die PLZ nicht zur Geschäftsstelle passt? | Fehlermeldung / automatische Umleitung auf Übergabe | | |
| I-2 | Werden die Daten gespeichert? | Kein Backend / localStorage / API | | |
| I-3 | Ist die Bestätigung eine eigene Route oder ein Zustandswechsel? | React Router / State | | |
| I-4 | Werden Kontaktdaten der Spendenden erhoben? | ja / nein | | |
| I-5 | | | | |
