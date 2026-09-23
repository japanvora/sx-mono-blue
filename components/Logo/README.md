# Logo
The stateXchange lockup — angular two-piece S mark plus the wordmark with the enlarged X — rendered from tokens so it switches with the theme.

**Use:** top-left of every navbar (`sm`), footers (`sm`), login and splash screens (`lg`, with tagline). For email, PDFs and third-party surfaces use the outlined SVG files in *Logos* instead (the HTML version needs Montserrat loaded).

**Class API**
```html
<a class="sx-logo sx-logo--sm" href="/" aria-label="stateXchange">
  <svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
    <polyline class="sx-logo__top" points="82,8 24,44 48,60"/>
    <polyline class="sx-logo__bot" points="52,40 76,56 18,92"/>
  </svg>
  <span class="sx-logo__text"><span class="sx-logo__word">state<span class="sx-logo__x">X</span>change</span></span>
</a>
```
Add `<span class="sx-logo__tag">…</span>` after the word for the tagline. React: `<SX.Logo size="sm" href="/" />`, `variant="mark"` for the symbol alone.

**Rules**
- Colours come only from `logo-base`, `logo-accent`, `logo-text`. Never recolour, outline, add effects or place on a photo.
- Clear space: the cap height of the X on every side. Minimum: mark 20px, lockup 120px wide, tagline only when the lockup is ≥ 280px wide.
- One logo per view. The consumer provides `href` and the `aria-label`.

## Product sub-brands — ORION, MIZAR, MERAK, ORBIT, EIGEN
Each stateXchange product has its own mark, built from one rule so the family reads together: **an angular container cut into two pieces (Electric over Midnight, rotated like the S's two strokes) holding diamond stars from that product's namesake.** Same 13-unit stroke, square cuts, palette and uppercase Montserrat Bold wordmark (+0.06em tracking). The container shape is what tells them apart:

| Product | Container | Stars | Meaning |
|---|---|---|---|
| **ORION** | hexagon O | three in a diagonal line | Orion's Belt, on the S's diagonal |
| **MIZAR** | diamond | one large + one small, paired | Mizar and Alcor — the famous double star |
| **MERAK** | triangle, apex up | two stacked on the centre line | Merak and Dubhe, the "pointer" stars that lead to the North Star — the apex |
| **ORBIT** | octagon (the angular circle) | one large at the centre + one small sitting in the ring's gap | a body with a satellite on its orbit path — the cut in the ring is where the satellite travels |
| **EIGEN** | square split into matrix brackets `[ ]` | three on the diagonal, growing | an eigenvector: the direction a matrix keeps, only scaled — v, λv, λ²v |

- React: `<SX.Logo product="orion|mizar|merak|orbit|eigen" />`. "by stateXchange" shows at `md`/`lg`, drops at `sm`; force with `endorsed`.
- Class API: `sx-logo sx-logo--product sx-logo--<name>`, the product's mark SVG, `<span class="sx-logo__word sx-logo__word--product">NAME</span>` and optionally `<span class="sx-logo__by">by <b>state<span class="sx-logo__x">X</span>change</b></span>`.
- **Endorsed** lockup on first-contact surfaces (login, docs, contracts, marketing); **plain** lockup inside the product after sign-in.
- Never merge a product mark with the S; when shown together the stateXchange logo leads, products sit at equal or smaller size. Never mix two product marks in one lockup.
- Below 24px use each product's `-mark-small.svg` (one star).
- A new product follows the same rule: a new container polygon (not a hexagon, diamond, triangle, octagon or square — pentagon and heptagon remain) + its own star pattern.

ORION mark:
```html
<svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
  <polyline class="sx-logo__top" points="16,64 16,30 50,10 84,30"/>
  <polyline class="sx-logo__bot" points="84,36 84,70 50,90 16,70"/>
  <rect class="sx-logo__belt-b" x="29" y="56" width="12" height="12" transform="rotate(45 35 62)"/>
  <rect class="sx-logo__belt-a" x="44" y="44" width="12" height="12" transform="rotate(45 50 50)"/>
  <rect class="sx-logo__belt-b" x="59" y="32" width="12" height="12" transform="rotate(45 65 38)"/>
  
</svg>
```
MIZAR mark:
```html
<svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
  <polyline class="sx-logo__top" points="22,64 8,50 50,8 68,26"/>
  <polyline class="sx-logo__bot" points="78,36 92,50 50,92 32,74"/>
  <rect class="sx-logo__belt-a" x="35.5" y="47.5" width="17" height="17" transform="rotate(45 44 56)"/>
  <rect class="sx-logo__belt-b" x="56.5" y="34.5" width="9" height="9" transform="rotate(45 61 39)"/>
  
</svg>
```
MERAK mark:
```html
<svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
  <polyline class="sx-logo__top" points="30,88 12,88 50,12 63,38"/>
  <polyline class="sx-logo__bot" points="71,54 88,88 42,88"/>
  <rect class="sx-logo__belt-b" x="45" y="67" width="10" height="10" transform="rotate(45 50 72)"/>
  <rect class="sx-logo__belt-a" x="43" y="47" width="14" height="14" transform="rotate(45 50 54)"/>
  
</svg>
```
ORBIT mark:
```html
<svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
  <polyline class="sx-logo__top" points="14.6,69.5 11.2,66.1 11.2,33.9 33.9,11.2 66.1,11.2 69.5,14.6"/>
  <polyline class="sx-logo__bot" points="85.4,30.5 88.8,33.9 88.8,66.1 66.1,88.8 33.9,88.8 30.5,85.4"/>
  <rect class="sx-logo__belt-a" x="41" y="41" width="18" height="18" transform="rotate(45 50 50)"/>
  <rect class="sx-logo__belt-a" x="72.5" y="17.5" width="10" height="10" transform="rotate(45 77.5 22.5)"/>
  
</svg>
```
EIGEN mark:
```html
<svg class="sx-logo__mark" viewBox="0 0 100 100" aria-hidden="true">
  <polyline class="sx-logo__top" points="36,12 12,12 12,88 36,88"/>
  <polyline class="sx-logo__bot" points="64,88 88,88 88,12 64,12"/>
  <rect class="sx-logo__belt-b" x="30.5" y="60.5" width="9" height="9" transform="rotate(45 35 65)"/>
  <rect class="sx-logo__belt-a" x="43.5" y="43.5" width="13" height="13" transform="rotate(45 50 50)"/>
  <rect class="sx-logo__belt-a" x="56" y="26" width="18" height="18" transform="rotate(45 65 35)"/>
  
</svg>
```
