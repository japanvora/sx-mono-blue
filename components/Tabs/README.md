# Tabs
Switches between sibling views of one object (a deployment's Overview / Orders / Logs) without leaving the page.

Class API: `.sx-tabs[role=tablist]` › `button.sx-tab[role=tab][aria-selected][aria-controls]`, panels `.sx-tabpanel[role=tabpanel]` with `hidden`. Call `SX.initTabs()` once to wire click + ← → keys. Selected state is the `accent` underline driven by `aria-selected`. 2–6 tabs, one or two words each. Not for primary site navigation (use Navbar). React: `<SX.Tabs items=[{value,label,content}] />`.
