# Streamer Website by Der_Schimanski

Eine persoenliche Streamer- und Creator-Website fuer Der_Schimanski, entwickelt mit React, Vite und Tailwind CSS 4.
Das Projekt ist als moderne Landingpage gedacht und setzt aktuell vor allem auf eine starke Hero-Section, eine glaeserne UI-Optik und wiederverwendbare Komponenten.

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

Production-Build:

```bash
npm run build
```

## Aktueller Projektstand

Die Seite besitzt bereits eine funktionierende Grundstruktur mit:

- `Navbar`
- `Hero`
- vorbereiteten Sektionen fuer `About`, `MyStats`, `Highlights`, `MyMainGames`, `Cooperations`, `Media` und `Contact`
- `Footer`

Wichtig: Mehrere Content-Sektionen sind aktuell zwar schon als Komponenten eingebunden, enthalten aber im Moment noch Platzhalter ohne inhaltlichen Ausbau.

## Bereits umgesetzt

### Navigation und Layout

- Fixierte Navbar mit Scroll-Effekt
- Desktop-Navigation mit Glasoptik
- Mobiles Menue mit Toggle-Button
- Footer mit Navigation, Social-Icons, Logo und dynamischem Jahr
- Grundlegende Seitenstruktur ueber `App.jsx`

### Hero Section

- Fullscreen-Hero mit Hintergrundbild
- Gradient-Overlay fuer bessere Lesbarkeit
- Animierte Partikel im Hintergrund
- Badge fuer Twitch- und Creator-Branding
- Headline mit hervorgehobenen Textstellen und Glow-Effekt
- CTA-Buttons fuer Twitch und YouTube
- Rechte Hero-Spalte mit Avatar als Hauptmotiv
- Zusaetzliche visuelle Karten fuer Building- und Survival-Content

### UI und Styling

- Eigenes Farbsystem in `src/index.css`
- Glasoptik ueber `glass` und `glass-strong`
- Wiederverwendbare `Button`-Komponente
- Eigene Animationsklassen wie `fade-in`, `fade-in-left`, `slide-in-left`, `slide-in-right` und `slide-up`
- Animation-Delay-Utilities fuer gestaffelte Einstiege

## Assets im Projekt

Aktuell werden unter anderem diese Dateien in der Hero- und Branding-Darstellung verwendet:

- `public/ai_gamingsetup.png`
- `public/ai_building_game.png`
- `public/ai_survival_game.png`
- `public/my-character-2.png`
- `public/my_Character_2.png`

## Projektstruktur

```text
src/
  components/
    Button.jsx
  layout/
    Navbar.jsx
    Footer.jsx
  sections/
    Hero.jsx
    About.jsx
    MyStats.jsx
    Highlights.jsx
    MyMainGames.jsx
    Cooperations.jsx
    Media.jsx
    Contact.jsx
  App.jsx
  index.css
```

## Letzte groessere Neuerungen

- Hero visuell erweitert durch Avatar-Komposition und zusaetzliche Bildkarten
- Neue Hero-Assets fuer Gaming- und Character-Visuals eingebunden
- Neue Bewegungsanimationen fuer Hero-Elemente hinzugefuegt
- Twitch- und YouTube-Buttons farblich sauber an das Theme angebunden
- Footer-Icons auf `react-icons` umgestellt
- README aufgeraeumt und an den aktuellen Stand angepasst

## Dokumentation im Projekt

- [BUTTON_GUIDE.md](./BUTTON_GUIDE.md): Erklaert die Struktur der Button-Komponente und das verwendete Farbsystem

## Was als Naechstes fehlt

- Inhalte fuer die aktuell noch leeren Sektionen
- Finale Ueberarbeitung der Navbar
- Echte Social-Media-Links statt `#`
- Funktion fuer den `Contact Me`-Button
- Responsive-Feinschliff und allgemeiner UI-Polish

## Projektstatus

Das Projekt hat bereits eine sichtbare Landingpage-Basis mit funktionierender Navigation, Hero-Inszenierung und Footer.
Der naechste sinnvolle Schritt ist der inhaltliche Ausbau der restlichen Sektionen.
