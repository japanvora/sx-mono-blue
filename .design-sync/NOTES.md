# design-sync notes — sx-mono-blue

- Build: `buildCmd` concatenates components/tokens.css + components/bundle.css; entry `./.design-sync/entry/index.mjs`; node_modules `./node_modules`.
- Browser on this server: set `DS_CHROMIUM_PATH=/root/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell` (the converter's playwright expects build 1243, not installed).
- Known validate warnings (floor cards, no authored preview): Icon and Sparkline RENDER_BLANK, Stat RENDER_THIN.
- 2026-10-03: repo was missing --space-1-5 and --width-cell-wrap (table rules used them); added in 7f3e6d2 after the operator approved.
- Synced DataTable.d.ts names `DataTableColumn` without defining it; the conventions header lists the column fields (key, header, align, kind, render).

## Re-sync risks
- Any new `var(--x)` in bundle.css must exist in tokens.css — check before syncing.

## 2026-10-12 — the published design system is the claude.ai artifact, not the Claude Design project
- The Claude Design project pinned in config.json (c1f0db7b) is not visible to the account now signed in to /design-login; the live design system is https://claude.ai/artifact/3CTMPhpAdEvjDEK91HSDT5 (Design System artifact type, files under project/).
- The repo and the artifact had drifted both ways (repo: 1-2 Oct table rules; artifact: website layer, CELESTIA/ALCOR logos). Merged 12-Oct by importing the artifact on a branch from the 23-Sep base and merging three-way; both now carry the same tokens.json, bundle.css, bundle.js, index.d.ts and component docs.
- The artifact builds its CSS variables from tokens.json, not from components/tokens.css: any new var(--x) in bundle.css must be added to tokens.json too (space-1-5 and width-cell-wrap were missing there until 12-Oct).
- Repo logo SVGs carry an embedded content-credentials block; the artifact's uploads are the same drawings without it. Not a difference to sync.
