# Prose
Long-form typography for pages that are mostly words: privacy policy, terms of use, grievance redressal, disclosures, articles.

`div.sx-prose` around raw HTML or markdown output — headings, paragraphs, lists, links, tables, quotes and code are all styled. Held to 72ch for readability. `p.sx-prose__updated` carries the "Last updated" line at the top of legal pages.

**Rules:** one H1 comes from PageHeader, so prose starts at H2. Number legal clauses in the heading text ("1. Who we are") so they can be cited. Never paste a policy in as a screenshot or PDF-only. React: `<SX.Prose html={…} updated="23 September 2026" />`.
