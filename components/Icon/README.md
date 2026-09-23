# Icon
The stateXchange line-icon set — 52 icons on a 24px grid, 2px stroke, round caps, drawn in `currentColor` so they take the text colour around them.

**Use:** `SX.icon("download")` returns an SVG string; or write `<i data-sx-icon="download"></i>` and call `SX.initIcons()` once; React: `<SX.Icon name="download" />`. Sizes: 16px inside buttons (`sx-btn__icon`), 20px default, 24px in empty states. Icon-only controls use `sx-icon-btn` (bordered) or `sx-icon-btn sx-icon-btn--ghost` and **must** have an `aria-label`.

**Rules:** icons support a label, they don't replace one — except universal controls (close, menu, search, more). One icon style only: never mix in filled or third-party icons. Status icons take the state colour (`success`, `warning`, `danger`); everything else inherits `ink`/`ink-3`. Need one that's missing? Draw it on the same grid and stroke, and add it to the set.

Names: arrow-right, arrow-left, arrow-up-right, chevron-down, chevron-right, chevron-left, check, x, plus, minus, search, menu, more, sliders, filter, user, log-out, bell, mail, calendar, clock, info, check-circle, alert-circle, x-circle, alert-triangle, download, upload, copy, external-link, link, edit, trash, eye, refresh, play, pause, stop, activity, zap, chart-line, chart-bar, server, database, cpu, terminal, shield, lock, key, inbox, sun, moon.
