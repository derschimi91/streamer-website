# Button.jsx Guide

Diese Datei ist als kleine Nachlese fuer dein Projekt gedacht.

## Warum die Farbe im `Hero.jsx` beim Twitch-Button nicht funktioniert hat

Der Hauptgrund war eine Kombination aus zwei Dingen:

1. In [Hero.jsx](/f:/Streamer%20Website/src/sections/Hero.jsx) wurde beim Twitch-Button `color="red"` verwendet.
2. In [Button.jsx](/f:/Streamer%20Website/src/components/Button.jsx) waren einige Tailwind-Klassen falsch benannt.

Konkret:

- `bg-color-red-500` ist keine normale Tailwind-Klasse. Richtig waere zum Beispiel `bg-red-500`.
- Fuer Twitch waren die Klassennamen `bg-twitch` und `hover:bg-twitch-hover` hinterlegt, aber in [index.css](/f:/Streamer%20Website/src/index.css) heissen die Theme-Farben `--color-twitch-primary` und `--color-twitch-hover`.
- In Tailwind v4 wird aus `--color-twitch-primary` die Utility-Klasse `bg-twitch-primary`, nicht `bg-twitch`.

Deshalb hatte dein Button zwar ein `color`-Prop, aber die zugehoerigen CSS-Klassen haben nicht sauber gegriffen.

## So ist `Button.jsx` jetzt aufgebaut

Die Datei hat drei wichtige Teile:

### 1. Props

`Button` bekommt diese Props:

- `className`: fuer zusaetzliche Klassen von aussen
- `color`: welches Farbschema benutzt werden soll
- `size`: welche Groesse der Button haben soll
- `type`: HTML-Button-Typ, standardmaessig `button`
- `children`: alles, was im Button angezeigt wird
- `...props`: weitere Props wie `onClick`, `disabled`, `aria-label`

## 2. `baseClasses`

Hier stehen die Klassen, die immer gelten.

Beispiele:

- `rounded-full` macht den Button rund
- `font-medium` setzt die Schriftstaerke
- `focus-visible:ring-2` zeigt beim Tastatur-Fokus einen Ring
- `transition-all duration-300` sorgt fuer weiche Uebergaenge

## 3. `colorClasses`

Hier wird festgelegt, welche Farbe zu welchem `color`-Wert gehoert.

Beispiel:

```jsx
twitch: "bg-twitch-primary hover:bg-twitch-hover shadow-twitch-primary/25"
```

Wenn du also in einer anderen Datei das hier schreibst:

```jsx
<Button color="twitch">Follow Me</Button>
```

dann nimmt der Button genau dieses Farbschema.

## 4. `sizeClasses`

Hier wird nur die Groesse gesteuert:

```jsx
sm: "px-4 py-2 text-sm"
default: "px-6 py-3 text-base"
lg: "px-8 py-4 text-lg"
```

## Wie du neue Farben anlegst

Wenn du eine neue Button-Farbe willst, brauchst du meistens zwei Stellen:

### In `index.css`

```css
--color-discord-primary: #5865f2;
--color-discord-hover: #4752c4;
```

### In `Button.jsx`

```jsx
discord: "bg-discord-primary hover:bg-discord-hover shadow-discord-primary/25"
```

Danach kannst du den Button so benutzen:

```jsx
<Button color="discord">Join Discord</Button>
```

## Merksatz fuer dich

Wenn eine Button-Farbe nicht kommt, pruefe immer diese 3 Punkte:

1. Ist der `color`-Wert in JSX wirklich richtig, zum Beispiel `twitch`?
2. Gibt es in `Button.jsx` einen passenden Eintrag in `colorClasses`?
3. Gibt es in `index.css` die passende Theme-Farbe, damit Tailwind die Utility bauen kann?

## Beispiel aus deinem Hero

Vorher:

```jsx
<Button color="red">...</Button>
```

Jetzt:

```jsx
<Button color="twitch">...</Button>
```

Das passt jetzt auch inhaltlich besser, weil es ein Twitch-Button ist.
