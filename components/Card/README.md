# Card
The default container for a grouped piece of content, with optional eyebrow, title, body and footer.

Variants: default (hairline `border`), `--raised` (adds `shadow-md` — for the one card you want noticed), `--muted` (`surface` fill, secondary info), `--interactive` (hover lift, whole card clickable — make it an `<a>`). Padding `space-5`, radius `radius-lg`. Don't nest cards; use a divider or Tabs instead. React: `<SX.Card eyebrow="Data" title="…" body="…" footer={…} />`.
