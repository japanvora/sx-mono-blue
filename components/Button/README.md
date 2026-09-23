# Button
The single action control — four variants, three sizes, always one primary per view.

| Variant | Class | When |
|---|---|---|
| primary | `sx-btn` | The one main action (Book a call, Save, Deploy). Fill `primary`, text `on-primary`. |
| secondary | `sx-btn sx-btn--secondary` | Alternatives next to primary (Cancel, Export). Outline `border-control`. |
| ghost | `sx-btn sx-btn--ghost` | Low-weight actions in toolbars, tables, cards. Text `accent-text`. |
| danger | `sx-btn sx-btn--danger` | Destructive and irreversible (Stop, Delete, Revoke). Always confirm with a Dialog. |

Sizes: `sx-btn--sm` (`control-sm`, dense tables), default (`control-md`), `sx-btn--lg` (`control-lg`, hero CTAs only). `sx-btn--block` stretches full width (mobile forms).

**Rules:** labels are verbs in sentence case, ≤ 3 words. Never two primaries side by side. Disabled uses the `disabled` attribute (or `aria-disabled="true"` on links) — explain why nearby. React: `<SX.Button variant="secondary" size="sm">Export</SX.Button>`; passing `href` renders an `<a>`.
