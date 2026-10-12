# ChartTheme
The Mono Blue colours for TradingView charts (used on the CygnusAlpha TradingView account): solid Electric rising candles, solid Midnight falling candles, an amber SuperTrend line, quiet grid and scales.

Enter the values in TradingView › Chart settings (Symbol, Canvas, Scales and lines) and on the indicator's Style tab. TradingView keeps its own chart font, so only colours carry over.

| Setting | Light | Dark |
|---|---|---|
| Body, borders, wick · up | `#2F6BFF` accent | `#7AA2FF` chart-1 |
| Body, borders, wick · down | `#191970` primary | `#DCE3FF` chart-2 |
| Background (solid) | `#FFFFFF` bg | `#0B0F1E` bg |
| Grid lines · horizontal | `#EEF2FA` surface-2 | `#161C38` |
| Grid lines · vertical | off | off |
| Session breaks (dashed) | `#C9CFDD` | `#323B66` |
| Crosshair (dashed) | `#828BA3` border-control | `#616B97` border-control |
| Watermark | `#F3F5FB` | `#111733` |
| Scales · text | `#5B6378` ink-3 | `#9AA3B8` ink-3 |
| Scales · lines | `#E1E5EF` border | `#262E52` border |
| SuperTrend line, 2 px | `#8A5A00` warning | `#F2C14E` warning |

**Rules:** solid candles only — no hollow bodies, no green/red. Rising and falling differ in lightness (Electric against Midnight; light blue against pale blue in dark), so they read apart without colour vision. Indicator lines take `warning` (amber) so they stand clear of the blue candles; a second indicator takes `chart-4` (Slate). For charts drawn inside our own apps use the Chart component, which follows the same series colours.
