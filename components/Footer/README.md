# Footer
The site footer: logo + one-line positioning, 2–3 link columns, the Disclaimer, and the legal line with the registered entity name.

`footer.sx-footer` › `.sx-container` › `.sx-footer__grid` (about column + link columns), `p.sx-disclaimer`, `.sx-footer__base`. The consumer provides the legal entity name (stateXchange is a trade name — the registered name must appear) and a contact **email** (no personal name). **Never show a physical address, city or state.** Legal column always links Privacy policy, Terms of use and Grievance redressal. React: `<SX.Footer columns={…} legalName="…" contact="…" />`.
