# DataTable
A horizontally scrollable data table with uppercase headers, right-aligned mono numbers and row hover.

Wrap in `.sx-table-wrap` (border, radius, overflow). Cell modifiers: `is-num` (right-aligned, mono, tabular — use on the `<th>` too), `is-primary` (row identifier), `is-code` (timestamps, IDs). Default is compact (34px rows), all cell borders, no wrap — names end in an ellipsis, numbers never break. Add `is-wrap` to a cell only for long text. `comfortable` restores 12px/16px padding for low-density screens. Key/value blocks use `.sx-kv` (label, value pairs as direct children).
 Status goes in a Badge, not coloured text. Empty cells show `—`, never blank. React: `<SX.DataTable columns=[{key,header,align,kind,render}] rows={…} />`. The consumer provides sorting/pagination.
