# Streamer Website by Der_Schimanski

Eine persoenliche Streamer- und Creator-Website fuer Der_Schimanski, aufgebaut mit React, Vite und Tailwind CSS.
Das Projekt entwickelt sich Schritt fuer Schritt zu einer modernen Landingpage mit eigener Farbwelt, wiederverwendbaren UI-Komponenten und einer glasartigen Oberfläche.

<<<<<<< HEAD

## Tech Stack
=======
<<<<<<< HEAD
## Tech Stack
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0a648bcac366f798d2ef3caad1d858382a77c788
=======

## Tech Stack
=======
- Added the main page structure with the `Hero`, `About`, `MyStats`, `Highlights`, `MyMainGames`, `Cooperations`, `Media`, and `Contact` sections.
- Improved the Navbar with desktop navigation, a scroll effect, a mobile menu, and a logo image.
- Refined the Navbar logo layout so the image and text sit next to each other more cleanly.
- Added the `glass-strong` class in `index.css` to give the Navbar a stronger glass effect while scrolling.
- Enhanced the `glass` and `glass-strong` classes with borders, glow, inset highlights, and radial light effects for a stronger glass look.
- Added a new Footer with navigation links, social media icons, and the current year.
- Updated the Footer layout so the copyright text now sits below the name and next to the logo image.
- Increased and refined the Footer logo area for a clearer visual identity.
- Switched the social media icons in the Footer to `react-icons`.
- Added a reusable `Button` component with multiple size variants for the UI.
- Expanded the `Hero` section background with a stronger gradient overlay and animated light-blue floating dots.
- The Navbar is not final yet and may be reworked later.
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 6bb3a0ea83e786d9ec66eb82252c58beb7579ad8
=======

>>>>>>> b44f10c6082b77e0756a22a17c8aecebc320e612
>>>>>>> 573f84afb7a8345b72dbd16131f955a87fdbf153

>>>>>>> 0a648bcac366f798d2ef3caad1d858382a77c788
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

## Bereits umgesetzt

### Struktur und Layout

- Hauptseitenstruktur mit den zentralen Landingpage-Sektionen aufgebaut
- Navbar mit Desktop-Navigation, Mobile-Menue, Scroll-Effekt und Logo-Bereich umgesetzt
- Footer mit Navigation, Social-Media-Icons, Logo und dynamischem Jahr eingebunden
- Responsive Grundstruktur fuer Desktop und Mobile verbessert

### Hero Section

- Fullscreen-Hero-Bereich mit Hintergrundbild
- Dunkler Gradient fuer bessere Lesbarkeit ueber dem Hero-Bild
- Animierte hellblaue Punkte im Hintergrund
- Badge fuer Twitch- und Creator-Branding
- Grosse Headline mit hervorgehobenen Textstellen und Glow-Effekt
- CTA-Bereich mit Button fuer Twitch

### UI und Styling

- Eigene Theme-Farbvariablen in `src/index.css`
- Eigene `glass`- und `glass-strong`-Klassen fuer die Glasoptik
- Blur-, Border-, Glow- und Lichtreflex-Effekte fuer Oberflaechen
- Eigene Animationen wie `fade-in`, `fade-in-left` und `drift-slow`
- Wiederverwendbare `Button`-Komponente mit mehreren Groessenvarianten

### Buttons und Farbsystem

- `Button.jsx` als zentrale wiederverwendbare Button-Komponente aufgebaut
- Farbvarianten fuer `primary`, `twitch`, `youtube`, `blue` und `green` vorbereitet
- Button-Focus- und Hover-Zustaende verbessert
- Fallbacks fuer ungueltige `size`- und `color`-Werte eingebaut
- Twitch- und YouTube-Farben im Theme sauber benannt und als Utilities nutzbar gemacht

## Neuere Aenderungen

- Twitch-CTA im Hero von einer uneindeutigen roten Variante auf `color="twitch"` umgestellt
- Farbzuordnung in `Button.jsx` bereinigt, damit die Theme-Farben korrekt greifen
- Mehrere Tippfehler in der Button-Komponente korrigiert, unter anderem bei `font-medium`, `focus-visible` und `text-secondary-foreground`
- Hover-Farben fuer Twitch und YouTube in `src/index.css` auf gueltige Farbwerte umgestellt
- Projektinterne Erklaerdatei [BUTTON_GUIDE.md](./BUTTON_GUIDE.md) hinzugefuegt, damit die Struktur von `Button.jsx` und das Farbsystem leichter nachvollziehbar sind

## Bisherige Bugfixes

- Fehlerhafte Footer-Icons aus `lucide-react` ersetzt
- Copyright-Text im Footer korrigiert
- `window.scrollY` in der Navbar korrigiert
- Mobile-Sichtbarkeit der Navigation korrigiert
- Footer-Struktur fuer Bild, Name und Text sauber ausgerichtet
- Fehlerhafte bzw. unpassende Button-Farbklassen ueberarbeitet
- README-Merge-Konfliktreste bereinigt

## Dokumentation im Projekt

- [BUTTON_GUIDE.md](./BUTTON_GUIDE.md): Erklaert den Aufbau von `src/components/Button.jsx`, das Farbsystem und die Ursache fuer das fruehere Farbproblem im Twitch-Bereich der Hero-Section

## Was aktuell noch fehlt

- Finale optische Ueberarbeitung der Navbar
- Echte Social-Media-Links statt `#`
- Funktion fuer den `Contact Me`-Button
- Rechte Spalte der Hero Section weiter ausbauen
- Weitere Inhalte und Feinschliff in den restlichen Sektionen
- Abschliessender Responsive- und UI-Feinschliff fuer die gesamte Seite

## Projektstatus

Das Grundlayout und die wichtigsten UI-Bausteine stehen bereits.
Der aktuelle Fokus liegt auf Feinschliff, zusaetzlichem Content, sauberer Komponentenstruktur und dem weiteren Ausbau des Designs.
