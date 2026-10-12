# Accordion
FAQ and disclosure lists, built on native `<details>`/`<summary>` so it works with no JavaScript and is searchable by the browser's find.

`div.sx-accordion` › `details.sx-accordion__item` › `summary` (question + a `chevron-down` icon, which CSS rotates when open) + `div.sx-accordion__body`. Open the first item when one question dominates; otherwise start closed.

**Rules:** questions in the visitor's words, answers under 60 words. Never hide anything a regulator or client must see — disclaimers and fee terms stay visible on the page. React: `<SX.Accordion items={[{question, answer}]} openIndex={0} />`.
