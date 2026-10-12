# Steps
A numbered process: how an engagement runs, or what happens after someone books a call.

`ol.sx-steps` (add `--row` for columns; default stacks) › `li.sx-step` › `span.sx-step__n` (the number is drawn by CSS counters — leave the span empty), `h3.sx-step__title`, `p.sx-step__body`. 3–5 steps, each a verb phrase. Because it's an ordered list, the order is real — don't use it for unordered features (that's FeatureGrid). React: `<SX.Steps items={[{title, body}]} layout="row" />`.
