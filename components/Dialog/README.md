# Dialog
A modal confirmation for consequential actions — title as a question, body stating exactly what will and will not happen, actions right-aligned.

`div.sx-backdrop` (`overlay` scrim) › `div.sx-dialog[role=dialog|alertdialog][aria-modal]` › `__head` › `h2.__title`, `__body`, `__foot` (secondary then primary/danger). Use `alertdialog` for destructive confirms. Body names side effects explicitly ("Positions are not closed"). The React wrapper closes on Esc and backdrop click; the consumer provides focus trapping and focus return. React: `<SX.Dialog open title onClose actions tone="danger">…</SX.Dialog>`.
