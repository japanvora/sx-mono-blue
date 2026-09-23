# Hero
The landing-page opener: eyebrow, one headline, a lede, up to two CTAs and a mono proof-point row.

Structure: `section.sx-hero` › `.sx-container` › `p.sx-hero__eyebrow`, `h1.sx-hero__title` (wrap one phrase in `<em>` for the `accent-text` highlight), `p.sx-hero__lede`, `.sx-hero__actions`, `ul.sx-hero__points`. `sx-hero--grid` adds a 48px `surface-2` grid texture — use on the home page only. Headline ≤ 8 words, lede ≤ 2 lines. One per page. React: `<SX.Hero eyebrow title lede actions points grid />`.
