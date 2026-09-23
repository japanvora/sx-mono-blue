# Pagination
Page navigation for long tables and logs: a "Showing 126–150 of 312" summary on the left, previous/next plus numbered pages on the right.

React: `<SX.Pagination page={p} pageCount={13} total={312} pageSize={25} onChange={setP} />`. Plain HTML: `SX.paginationHTML({page, pageCount, total, pageSize, href: n => "?page="+n})` returns links; without `href` it returns buttons with `data-page`. `SX.pageRange(page, count)` gives the numbers with `"gap"` markers (first, last, current ±1).

**Rules:** place directly under the table, aligned to its edges. Current page = `primary` fill + `aria-current="page"`. Numbers are mono. For live streams (order logs) prefer "Load older" over numbered pages; for < 2 pages render nothing. The consumer owns the data fetching.
