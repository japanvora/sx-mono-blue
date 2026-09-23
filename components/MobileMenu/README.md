# MobileMenu
The small-screen navigation: a menu button in the Navbar (shown below 720px, or always with `sx-nav--compact`) opens a right-side drawer with large tap-target links and full-width actions.

**React:** built into `<SX.Navbar links actions mobileActions />` — nothing extra to wire; `SX.MobileMenu` is exported for custom shells. **Plain HTML:** a `button.sx-icon-btn.sx-nav__toggle[data-sx-drawer-open="menu"]` in `.sx-nav__actions`, a `div.sx-drawer-backdrop[data-sx-drawer-backdrop="menu"][hidden]` and a `div#menu.sx-drawer[role=dialog][aria-modal=true][hidden]` (head with Logo + `[data-sx-drawer-close]` button, `ul.sx-drawer__links` › `a.sx-drawer__link`, `.sx-drawer__foot` with `sx-btn--block` actions), then `SX.initNav()`. Esc, backdrop tap and the close button all close it; focus moves into the drawer and returns to the toggle.

**Rules:** same links, same order as desktop. Primary CTA first in the footer. On mobile the navbar's own CTA buttons hide — they live in the drawer.
