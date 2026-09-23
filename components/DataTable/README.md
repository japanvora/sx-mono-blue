# DataTable
A horizontally scrollable data table with uppercase headers, right-aligned mono numbers and row hover.

Wrap in `.sx-table-wrap` (border, radius, overflow). Cell modifiers: `is-num` (right-aligned, mono, tabular — use on the `<th>` too), `is-primary` (row identifier), `is-code` (timestamps, IDs). `sx-table--dense` halves row padding. Status goes in a Badge, not coloured text. Empty cells show `—`, never blank. React: `<SX.DataTable columns=[{key,header,align,kind,render}] rows={…} />`. The consumer provides sorting/pagination.
