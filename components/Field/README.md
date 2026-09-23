# Field
A labelled text input or textarea with optional help or error text — the base of every form.

```html
<div class="sx-field">
  <label class="sx-label" for="email">Work email</label>
  <input class="sx-input" id="email" type="email" aria-describedby="email-help">
  <span class="sx-help" id="email-help">We reply within one business day.</span>
</div>
```
- Error: add `is-invalid` to `.sx-field`, `aria-invalid="true"` to the input, and swap help for `<span class="sx-error">`. Say what to do, not what went wrong.
- `sx-input--mono` for IDs, registration numbers, symbols, API keys.
- Textarea: same `sx-input` class on a `<textarea>`.
- Labels always visible (no placeholder-as-label). Mark optional fields, not required ones.
React: `<SX.Field label="Work email" help="…" error={err} mono />`.
