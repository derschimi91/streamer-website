# Streamer Website by Der_Schimanski

Eine persoenliche Streamer- und Creator-Website fuer Der_Schimanski, aufgebaut mit React, Vite und Tailwind CSS 4.
Das Projekt entwickelt sich Schritt fuer Schritt zu einer modernen Landingpage mit eigener Farbwelt, wiederverwendbaren UI-Komponenten, Glasoptik und einer immer staerkeren Hero-Inszenierung.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- `react-icons`
- `lucide-react`

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

## Bereits umgesetzt

### Struktur und Layout

- Hauptseitenstruktur mit den zentralen Landingpage-Sektionen aufgebaut
- Navbar mit Desktop-Navigation, Mobile-Menue, Scroll-Effekt und Logo-Bereich umgesetzt
- Footer mit Navigation, Social-Media-Icons, Logo und dynamischem Jahr eingebunden
- Responsive Grundstruktur fuer Desktop und Mobile verbessert

### Hero Section

- Fullscreen-Hero-Bereich mit Hintergrundbild und dunklem Gradient-Overlay fuer bessere Lesbarkeit
- Animierte hellblaue Partikel im Hintergrund fuer mehr Bewegung im Einstieg
- Badge fuer Twitch- und Creator-Branding oberhalb der Headline
- Grosse Headline mit hervorgehobenen Textstellen und Glow-Effekt
- CTA-Bereich mit Twitch- und YouTube-Button
- Rechte Hero-Spalte mit einer visuellen Bildkomposition aus Avatar und zwei schwebenden Game-Cards
- Neue Hero-Assets in `public/` fuer Avatar, Building-Game-Motiv und Survival-Motiv eingebunden

### UI und Styling

- Eigene Theme-Farbvariablen in `src/index.css`
- Eigene `glass`- und `glass-strong`-Klassen fuer die Glasoptik
- Blur-, Border-, Glow- und Lichtreflex-Effekte fuer Oberflaechen
- Wiederverwendbare `Button`-Komponente mit mehreren Groessenvarianten
- Eigene Animations-Utilities wie `fade-in`, `fade-in-left`, `slide-in-left`, `slide-in-right` und `slide-up`
- Animation-Delay-Utilities fuer gestaffelte Hero-Elemente

### Buttons und Farbsystem

- `Button.jsx` als zentrale wiederverwendbare Button-Komponente aufgebaut
- Farbvarianten fuer `primary`, `twitch`, `youtube`, `blue` und `green` vorbereitet
- Button-Focus- und Hover-Zustaende verbessert
- Fallbacks fuer ungueltige `size`- und `color`-Werte eingebaut
- Twitch- und YouTube-Farben im Theme sauber benannt und als Utilities nutzbar gemacht

## Neuere Aenderungen

- Hero visuell deutlich erweitert: Die rechte Spalte zeigt jetzt den Avatar als Hauptmotiv sowie zwei dekorative Game-Cards mit versetzter Positionierung
- Neue Bilddateien `public/ai_building_game.png`, `public/ai_survival_game.png` und `public/my-character-2.png` ins Projekt aufgenommen
- Neue Einstiegseffekte fuer die Hero-Komposition eingebaut: `slide-in-left`, `slide-in-right` und `slide-up`
- Hero-Elemente ueber Animation-Delays zeitlich gestaffelt, damit der Einstieg lebendiger wirkt
- Twitch-CTA im Hero von einer uneindeutigen roten Variante auf `color="twitch"` umgestellt
- Farbzuordnung in `Button.jsx` bereinigt, damit die Theme-Farben korrekt greifen
- Mehrere Tippfehler in der Button-Komponente korrigiert, unter anderem bei `font-medium`, `focus-visible` und `text-secondary-foreground`
- Hover-Farben fuer Twitch und YouTube in `src/index.css` auf gueltige Farbwerte umgestellt
- Projektinterne Erklaerdatei [BUTTON_GUIDE.md](./BUTTON_GUIDE.md) hinzugefuegt, damit die Struktur von `Button.jsx` und das Farbsystem leichter nachvollziehbar sind
- README-Merge-Konfliktreste bereinigt und die Projektdokumentation insgesamt vereinheitlicht

## Bisherige Bugfixes

- Fehlerhafte Footer-Icons aus `lucide-react` ersetzt
- Copyright-Text im Footer korrigiert
- `window.scrollY` in der Navbar korrigiert
- Mobile-Sichtbarkeit der Navigation korrigiert
- Footer-Struktur fuer Bild, Name und Text sauber ausgerichtet
- Fehlerhafte bzw. unpassende Button-Farbklassen ueberarbeitet

## Dokumentation im Projekt

- [BUTTON_GUIDE.md](./BUTTON_GUIDE.md): Erklaert den Aufbau von `src/components/Button.jsx`, das Farbsystem und die Ursache fuer das fruehere Farbproblem im Twitch-Bereich der Hero-Section

## Was aktuell noch fehlt

- Finale optische Ueberarbeitung der Navbar
- Echte Social-Media-Links statt `#`
- Funktion fuer den `Contact Me`-Button
- Weitere Inhalte und Feinschliff in den restlichen Sektionen
- Abschliessender Responsive- und UI-Feinschliff fuer die gesamte Seite

## Projektstatus

Das Grundlayout und die wichtigsten UI-Bausteine stehen bereits.
Der aktuelle Fokus liegt auf Feinschliff, zusaetzlichem Content, sauberer Komponentenstruktur und dem weiteren Ausbau der Hero-Inszenierung.
