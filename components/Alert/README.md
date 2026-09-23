# Alert
An inline message about system state — info, success, warning or danger — with title, one-line explanation and icon.

Structure: `.sx-alert.sx-alert--{tone}` › `svg.sx-alert__icon` › `.sx-alert__body` › `p.sx-alert__title` + `p.sx-alert__text`. Use `role="alert"` for danger, `role="status"` otherwise.

**Writing:** title states the fact ("Order rejected by broker"); text states cause and what the system did or will do ("No retry was attempted"). No exclamation marks, no blame. Full-width soft fill, no side stripe. React: `<SX.Alert tone="warning" title="…">…</SX.Alert>`.
