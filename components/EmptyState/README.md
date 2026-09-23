# EmptyState
What a table, list or dashboard shows when it has nothing to show — icon, one-line title, one-sentence explanation and at most one action.

`div.sx-empty` (dashed `border-control` outline; `--plain` removes it when already inside a Card) › `.sx-empty__icon` › `h3.sx-empty__title` › `p.sx-empty__text` › `.sx-empty__actions`. React: `<SX.EmptyState icon="server" title="…" text="…" actions={…} />`.

**Three cases, three messages:** *first use* ("No deployments yet" + how they appear), *no results* ("No orders match these filters" + Clear filters), *error* — never an empty state; show an Alert with the cause. Don't invent optimism ("Start trading today!"); state the fact and the next step.
