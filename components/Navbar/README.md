# Navbar
The top bar: logo left, primary links centre, at most two actions right, `nav-height` tall with a hairline bottom border — with a built-in mobile drawer.

Structure: `header.sx-nav` › `.sx-container.sx-nav__inner` › Logo (`sm`) + `nav > ul.sx-nav__links` + `.sx-nav__actions` (buttons + `button.sx-icon-btn.sx-nav__toggle`). Mark the current page with `aria-current="page"` (accent underline). `sx-nav--sticky` pins it. Below 720px (or always, with `sx-nav--compact` for app shells) links and buttons hide and the menu toggle opens the MobileMenu drawer. ≤ 5 links; one primary button (Book a call). React: `<SX.Navbar links={…} actions={…} mobileActions={…} sticky />`.
