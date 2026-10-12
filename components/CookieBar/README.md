# CookieBar
The consent notice, pinned to the bottom of the viewport until the visitor chooses. The choice is remembered in `localStorage`.

Class API: the `.sx-cookie` markup with `[data-sx-consent="all|essential"]` buttons and `hidden` on the element, then `SX.initCookieBar()` — it shows the bar only when no choice is stored. React: `<SX.CookieBar policyHref="/privacy" onChoice={fn} />`.

**Rules:** both choices are equally prominent — no dark patterns, no pre-ticked boxes. The text states plainly what is set; if you ever add analytics, the wording and the `onChoice` handler must change together. Link the privacy policy from the bar. Don't block the page behind it.
