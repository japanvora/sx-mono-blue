# design-sync notes — sx-mono-blue

- Build: `buildCmd` concatenates components/tokens.css + components/bundle.css; entry `./.design-sync/entry/index.mjs`; node_modules `./node_modules`.
- Browser on this server: set `DS_CHROMIUM_PATH=/root/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell` (the converter's playwright expects build 1243, not installed).
- Known validate warnings (floor cards, no authored preview): Icon and Sparkline RENDER_BLANK, Stat RENDER_THIN.
- 2026-10-03: repo was missing --space-1-5 and --width-cell-wrap (table rules used them); added in 7f3e6d2 after the operator approved.
- Synced DataTable.d.ts names `DataTableColumn` without defining it; the conventions header lists the column fields (key, header, align, kind, render).

## Re-sync risks
- Any new `var(--x)` in bundle.css must exist in tokens.css — check before syncing.
