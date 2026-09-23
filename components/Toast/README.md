# Toast
A short, non-blocking message confirming an action or reporting a background event, stacked bottom-right.

**Imperative:** `const dismiss = SX.toast({ tone: "success", title: "Settings saved", text: "…" })` — works with or without React; the toaster region (`aria-live="polite"`) is created on first call. Default duration 5s (paused on hover); **danger toasts never auto-dismiss** — an error the operator didn't see is a failure. Pass `duration: 0` to make any toast sticky.

**When:** results of the user's own action (saved, exported, copied) and background events (session expired). Not for form validation (use Field errors) or for information that must stay on screen (use Alert). Title ≤ 5 words stating the fact; text says what happens next. No actions inside toasts — anything that needs a decision is a Dialog.
