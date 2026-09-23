# Link
Inline navigation inside text, in `accent-text` with a 1px underline that thickens on hover.

`<a class="sx-link" href="…">` for links in running text; `sx-link sx-link--quiet` (no underline until hover, semibold) for standalone "View all →" links. Never use `accent` for link text on white — it is borderline 4.5:1; `accent-text` is 6:1. React: `<SX.Link href="…" quiet>`.
