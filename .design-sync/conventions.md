# stateXchange Mono Blue — how to build with it

**Setup.** No provider or wrapper component. Everything is styled by the bundled stylesheet (`styles.css` → `_ds_bundle.css`), whose tokens live on `:root` / `[data-theme="light"]`. Set `<html data-theme="light">` or `"dark"` for an explicit theme; without it the system follows `prefers-color-scheme`. Components are on `window.SX` (e.g. `SX.Button`, `SX.DataTable`).

**Styling idiom: `sx-` classes + `var(--token)`. Never hard-code colours, spacing or fonts.**
- Colour: `--bg --surface --surface-2 --border --border-control --ink --ink-2 --ink-3 --primary --primary-hover --on-primary --accent --accent-text --accent-soft --success(-soft) --warning(-soft) --danger(-soft) --chart-1..4`.
- Space: `--space-1` 4 · `--space-1-5` 6 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 24 (the workhorse: card padding, gutters) · `--space-6..9` 32/48/64/96.
- Shape and size: `--radius-sm/md/lg/pill`, `--control-sm/md/lg` (32/40/48), `--container` 1200px.
- Type: `--font-display` (Montserrat, headings), `--font-sans` (Inter, UI text), `--font-mono` (JetBrains Mono — every figure, time, symbol and ID; add `.sx-num` for tabular figures).
- Layout glue: `.sx-container`, `.sx-stats` (grid of `Stat`), `.sx-card`, `.sx-features`.

**Tables — the house rule.** Use `<DataTable>`; it is compact by default: 34px rows, a 1px border on every cell, no wrapping. Names end in an ellipsis, numbers never break. Columns: `{key, header, align:"right"` for numbers (mono, tabular, right-aligned; put the unit in the header), `kind:"primary"` for the row identity, `kind:"code"` for IDs and timestamps, `render}`. Status goes in a `Badge` (`tone`, `dot`), never coloured text. Empty cells show `—`. `comfortable` restores roomy padding only for low-density screens. Hand-written tables use `.sx-table-wrap > table.sx-table` with `is-num` / `is-primary` / `is-code` on cells and `is-wrap` only on long-text cells.

**Label/value blocks** use `.sx-kv`: label and value elements as alternating direct children, which gives a bordered two-column grid with the label muted and the value in full ink.

**Copy.** No narration or explanatory ledes. One primary `Button` per view; `variant="secondary"` for the rest, `"ghost"` for low-emphasis, `"danger"` only for destructive actions.

**Where the truth lives.** Read `_ds_bundle.css` (classes) and the token block at its top before styling, and each component's `.prompt.md` for usage.

```jsx
const { DataTable, Badge, Button } = window.SX;
<div className="sx-container" style={{display:"grid",gap:"var(--space-5)"}}>
  <DataTable caption="Deployments"
    columns={[{key:"sym",header:"Instrument",kind:"primary"},
              {key:"st",header:"Status",render:r=><Badge tone="success" dot>{r.st}</Badge>},
              {key:"n",header:"Orders",align:"right"}]}
    rows={[{sym:"NIFTY FUT",st:"Live",n:"4,812"}]} />
  <dl className="sx-kv"><dt>Broker</dt><dd>Kotak</dd><dt>Lots</dt><dd>2</dd></dl>
  <Button>Save changes</Button>
</div>
```
