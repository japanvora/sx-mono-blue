# Using Mono Blue in an app

## 1. Load the CSS, in this order

```html
<link rel="stylesheet" href="components/tokens.css">   <!-- tokens: colours, type, spacing, radius -->
<link rel="stylesheet" href="components/bundle.css">   <!-- components; imports the 3 Google fonts -->
```

Self-host the fonts (Montserrat 500/600/700, Inter 400/500/600, JetBrains Mono 400/500) if your CSP blocks Google Fonts, and delete the `@import` at the top of `bundle.css`.

## 2. Set the theme

```html
<html data-theme="light">   <!-- or data-theme="dark" -->
```

```js
SX.initTheme();        // system preference + remembered choice
SX.setTheme("dark");   // explicit
```

## 3. Use the components

Class API — works in any framework, or none:

```html
<button class="sx-btn sx-btn--secondary">Export CSV</button>
```

React 18 (load `components/bundle.js` after React; it attaches `window.SX`):

```jsx
<SX.Button variant="secondary" size="sm">Export CSV</SX.Button>
<SX.DataTable columns={cols} rows={rows} />
```

Plain-HTML behaviours, called once after the markup exists:

```js
SX.initTabs(); SX.initNav(); SX.initIcons(); SX.renderCharts();
SX.toast({ tone: "success", title: "Settings saved" });
```

## Layout of this repo

| Path | What |
|---|---|
| `README.md` | the brand book — voice, colour, type, layout, logo and compliance rules |
| `tokens.json` | source of truth for every token (light + dark) |
| `components/tokens.css` | generated from tokens.json — `node scripts/build-tokens.js` |
| `components/bundle.css` | all 26 components as `sx-*` classes |
| `components/bundle.js` | `window.SX`: icons, toasts, charts, tabs, drawer, theme + React wrappers |
| `components/index.d.ts` | types and the class API per component |
| `components/<Comp>/README.md` | when and how to use that component |
| `components/<Comp>/preview.html` | live example, openable in a browser |
| `assets/Logos`, `assets/ORION` … | logo SVGs for the company and each product |
| `example/index.html` | a page built from the system |

## Rules that are not negotiable

- No physical location anywhere; contact is email and a booking link.
- "Tailor-made", never "platform".
- Operational metrics only (latency, uptime, orders) — never returns, P&L or accuracy claims.
- The Disclaimer component appears on every public page; the registered legal entity name appears in the footer.
