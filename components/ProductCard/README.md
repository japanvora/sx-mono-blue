# ProductCard
A product in a grid — its mark, name, one-line role and a sentence of what it does. The entry point to ORION, EIGEN, MIZAR, MERAK and ORBIT from the site.

`div.sx-products` (auto-fit grid) › `a.sx-product` (or `div` when not linked) › `.sx-product__head` (the product mark SVG + `h3.sx-product__name` + `p.sx-product__role`) + `p.sx-product__body`.

**Rules:** name in the product's uppercase wordmark style; role is 2–4 words, not a slogan. The body says what the product does operationally — never what it earns. Use the product's own mark, never the stateXchange S. React: `<SX.ProductCard product="orion" role="Execution engine" body="…" href="/orion" />`.
