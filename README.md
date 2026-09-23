# stateXchange — Mono Blue UI

The interface system for stateXchange web apps and sites: Midnight and Electric blue on white, a dark theme that mirrors it, Montserrat for display, Inter for UI, JetBrains Mono for every number. It is built to look like what the business sells — precise, controlled, deterministic infrastructure — and nothing louder.

## Content fundamentals

**Voice:** declarative, technical, calm. Short sentences that state facts. The brand's own lines set the register: *"Private. Controlled. Deterministic."* · *"No signals. No advice. Only infrastructure."*

- Say what the system does and how it fails: "Open orders will be cancelled at the broker. Positions are not closed."
- Sentence case everywhere (buttons, headings, tabs). No exclamation marks, no emoji, no hype words (revolutionary, AI-powered, guaranteed).
- **Tailor-made, not a platform.** Every system is built to the client's requirement from internal modules. Write "built to your requirement", "your deployment" — never "sign up", "our platform", "self-serve", and never name the internal modules.
- **Compliance.** Never state or imply returns, profits, accuracy, win rates or recommendations. Operational metrics only (latency, uptime, orders routed). Every public page carries the Disclaimer component.
- **No physical location** anywhere — no address, city or state. Contact is email and a booking link. Grievance contact: email only, no personal name.
- The registered legal entity name appears in the footer; "stateXchange" is the trade name.
- Numbers: Indian digit grouping is optional, but be consistent per surface; units always shown (ms, %, ₹); timestamps in IST, 24-hour, mono.

## Visual foundations

**Colour.** White `bg` ground, `ink` text, `primary` (Midnight #191970) for the one main action, `accent` (Electric #2F6BFF) for focus, selection and the X. Electric is a highlight, not a text colour — small text and links use `accent-text` (#1F55E0). States: `success` (Live), `warning` (Paused), `danger` (Error, destructive) — each with a `-soft` ground for badges and alerts. Data series use `chart-1…chart-4` in order (Electric, Midnight, mid-blue, Slate). Dark theme: `bg` #0B0F1E, Midnight becomes pale (`logo-base` #DCE3FF) and actions switch to electric-light #7AA2FF with dark text. Every text token passes 4.5:1 on `bg`, `surface` and `surface-2` in both themes; `border-control` passes 3:1 for control outlines. `border` is decorative only.

**Type.** Montserrat 600–700 for headings and the logo (`display-xl` 56/64 → `h3` 19/27). Inter for all UI and reading text (`body` 15/24 default). JetBrains Mono with tabular numerals for every figure, timestamp, symbol and ID (`figure-xl` for KPIs). Eyebrows and table headers are 12px uppercase with tracking, in `accent-text` or `ink-3`.

**Space & layout.** 4px base; `space-5` (24) is the workhorse — card padding, grid gutters, container side padding. Content max width `container` (1200px). Sections `space-8` apart, hero `space-9`. Controls are `control-md` (40px) by default.

**Shape & depth.** `radius-md` (10) for controls, `radius-lg` (14) for cards, tables, dialogs; `radius-pill` only for badges and switches. Hairline `border` first, shadow second: `shadow-md` for the single raised card, `shadow-lg` for dialogs only. No gradients, no glass, no glow.

**Texture.** One allowed: the 48px `surface-2` grid behind the home-page hero (`sx-hero--grid`). Parallel diagonal cuts echoing the logo's strokes are reserved for brand surfaces (covers, social banners), not UI.

## Iconography

Use the system's own set (Icon component, 52 icons): 24px grid, 2px stroke, round caps and joins, `currentColor`. 16px in buttons, 20px default, 24px in empty states; icon-only buttons (`sx-icon-btn`) always carry an `aria-label`. Icons support labels, they don't replace them — except universal controls (close, menu, search, more). Status icons take the state colour. Feature lists use mono numerals (01, 02…) instead of icons. No emoji, no filled or third-party icons mixed in, no illustrations or 3D.

## Logo

Angular two-piece S mark + `stateXchange` wordmark with the enlarged X, tagline "Analytics | Data | Strategy | Trading | Quant". In HTML use the Logo component (it follows the theme). Everywhere else use the outlined SVGs in *Logos*: `stateXchange-lockup.svg` on white, `stateXchange-lockup-dark.svg` on dark, `-black` for single-ink print. Clear space = cap height of the X; minimum lockup width 120px, mark 20px. Never recolour, stretch, outline or add effects.

### Products — ORION, MIZAR, MERAK, ORBIT, EIGEN

Each product gets its own mark from one rule: an angular container cut into two pieces (Electric over Midnight) holding its namesake's stars — ORION a hexagon with Orion's Belt, MIZAR a diamond with the Mizar–Alcor double star, MERAK a triangle with the two pointer stars aimed at its apex (the North Star), ORBIT an octagon ring around a central star with a satellite star sitting in the ring's gap, EIGEN a square split into matrix brackets holding three growing stars on the diagonal (an eigenvector, scaled). Wordmarks are uppercase Montserrat Bold. Endorsed lockups ("NAME by stateXchange") on first-contact surfaces, plain lockups inside the product. Files in the *ORION*, *MIZAR*, *MERAK*, *ORBIT* and *EIGEN* groups; component: `<SX.Logo product="orion|mizar|merak|orbit|eigen" />`.

## Using it in an app

1. Load `components/bundle.css` after `tokens.css` (bundle.css imports the three Google fonts).
2. Set `<html data-theme="light">` or call `SX.initTheme()` (system preference + remembered choice); `SX.setTheme("dark")` to switch.
3. Either write the class API directly (`class="sx-btn sx-btn--secondary"` — works in any framework or plain HTML), or, with React 18 on the page, use `window.SX.Button`, `SX.DataTable` etc., which emit the same classes.
4. Plain-HTML behaviours, each called once after the markup exists: `SX.initTabs()`, `SX.initNav()` (mobile drawer), `SX.initIcons()` (`<i data-sx-icon>`), `SX.renderCharts()` (`data-sx-chart` / `data-sx-spark`). `SX.toast({...})` works anywhere.

Components: Icon · Logo · Button · Link · Field · Select · Checkbox · Switch · Badge · Alert · Toast · EmptyState · Card · Stat · Chart · DataTable · Pagination · Tabs · Navbar · MobileMenu · Hero · SectionHeader · FeatureGrid · Footer · Disclaimer · Dialog.
