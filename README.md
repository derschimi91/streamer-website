# Streamer Website by Der_Schimanski

Eine persoenliche Streamer- und Creator-Website fuer Der_Schimanski, aufgebaut mit React, Vite und Tailwind CSS.
Das Projekt wird Schritt fuer Schritt als moderne Landingpage mit mehreren Sektionen, eigener Farbwelt und einer glasartigen UI weiterentwickelt.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- `lucide-react`
- `react-icons`

## Projektstart

```bash
npm install
npm run dev
```

Fuer einen Production-Build:

```bash
npm run build
```

## Aktueller Stand

Die Grundstruktur der Seite ist bereits eingebunden. Aktuell enthaelt das Projekt die Bereiche:

- `Hero`
- `About`
- `MyStats`
- `Highlights`
- `MyMainGames`
- `Cooperations`
- `Media`
- `Contact`
- `Footer`

## Bereits Umgesetzt

### Navigation

- Eine feste Navbar mit Logo-Bild und Logo-Text
- Desktop-Navigation mit mehreren Navigationspunkten
- Mobile-Menue mit Burger-Button
- Scroll-Effekt fuer die Navbar
- Staerkerer Glas-Effekt beim Scrollen ueber die Klasse `glass-strong`
- Responsive Verhalten verbessert, sodass die Desktop-Navigation auf Mobile jetzt ausgeblendet wird

### Hero Section

- Fullscreen-Hero-Bereich mit Hintergrundbild
- Dunkler Gradient fuer bessere Lesbarkeit
- Animierte hellblaue Punkte im Hintergrund
- Badge fuer Twitch-/YouTube-Branding
- Grosse Headline mit hervorgehobenen Textstellen
- Einleitungstext fuer den Creator-Bereich
- Zusaetzlicher Glow-Text-Effekt

### UI und Styling

- Eigene Farbvariablen in `index.css`
- Eigene `glass`- und `glass-strong`-Klassen
- Glasoptik mit Blur, Border, Glow und Lichtreflexen
- Eigene Animationen wie `fade-in` und `drift-slow`
- Wiederverwendbare `Button`-Komponente mit mehreren Groessenvarianten

### Footer

- Footer mit Logo, Name und dynamischem Jahr
- Copyright-Text unter dem Namen und neben dem Logo
- Navigationslinks im Footer
- Social-Media-Icons im Footer
- Social Icons auf `react-icons` umgestellt
- Footer-Logo vergroessert und Layout verbessert

## Bisherige Bugfixes

- Fehlerhafte Footer-Icons aus `lucide-react` ersetzt
- Copyright-Text im Footer korrigiert
- `window.scrollY` in der Navbar korrigiert
- Mobile-Sichtbarkeit der Navigation korrigiert
- Footer-Struktur fuer Bild, Name und Text sauber ausgerichtet

## Was Aktuell Noch Fehlt

- Finale optische Ueberarbeitung der Navbar
- Echte Social-Media-Links statt `#`
- Funktion fuer den `Contact Me`-Button
- Rechte Spalte der Hero Section weiter ausbauen
- Weitere Inhalte und Feinschliff in den restlichen Sektionen
- Abschliessender Responsive- und UI-Feinschliff fuer die gesamte Seite

## Projektstatus

Das Grundlayout und die wichtigsten UI-Bausteine stehen bereits.
Der aktuelle Fokus liegt jetzt auf dem Feinschliff, zusaetzlichem Content und der weiteren visuellen Ausarbeitung der einzelnen Sektionen.
