# Stat
A KPI tile: uppercase label, large mono value with unit, and an optional delta + context line.

Lay tiles out in `.sx-stats` (auto-fit grid, `space-4` gap). Values are always `font-mono` with tabular numerals so columns don't jitter on update. `--up`/`--down` mean *good/bad*, not arithmetic sign — a latency drop is `--up` (success). Always pair a delta with its comparison ("vs last session").

**Compliance:** on public/marketing pages show operational metrics (latency, uptime, orders) only — never returns, P&L or accuracy claims. React: `<SX.Stat label="Latency p50" value="42.8" unit="ms" delta="−3.1 ms" deltaDirection="up" meta="vs last session" />`.
