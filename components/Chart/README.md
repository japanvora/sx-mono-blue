# Chart
Token-coloured SVG charts — line, area and bar — plus inline sparklines, with mono axis labels, hairline gridlines and no chart library.

**Use:** React `<SX.Chart type="line" labels={…} series={[{name:"p50",values:[…]}]} unit=" ms" />`, `<SX.Sparkline values={…} tone="up" />`. Plain HTML: `<div data-sx-chart='{"type":"bar",…}'></div>` / `<span data-sx-spark='{"values":[…]}'></span>` then `SX.renderCharts()`. Or `SX.chartSVG(spec)` for a string (server-side, PDFs). Series colours `chart-1…chart-4` in order; `null` values break a line instead of interpolating. Y axis uses rounded ticks; bars always start at zero; `zero: true` forces it for lines.

**Rules:**
- Max 4 series; if you need more, split the chart. Legend appears automatically for 2+ series.
- Always put the chart in a Card with a title that states the metric and period ("Order latency · today").
- Sparkline `tone` means good/bad, not up/down (falling latency is `up`).
- Every chart has `label` (becomes the SVG's accessible name); for data users must read exactly, pair it with a DataTable.
- **Compliance:** operational metrics only on public pages (latency, uptime, throughput). No equity curves, returns or P&L charts on marketing surfaces.

Not included: hover crosshair/tooltips beyond the native bar `<title>`, zoom, candlesticks — use a dedicated charting library for trading views.
