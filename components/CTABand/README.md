# CTABand
The closing ask on a page: one heading, one line of context, one or two actions, on the Midnight primary fill.

`div.sx-cta` › heading block + `.sx-cta__actions`. Buttons invert automatically inside it (solid becomes the light fill, secondary becomes an outline) — don't restyle them.

**Rules:** one band per page, at the end. The heading names the action ("Start with a scoping call"), never a claim about outcomes. Put it inside a Section so it keeps the container width. React: `<SX.CTABand title lede actions={…} />`.
