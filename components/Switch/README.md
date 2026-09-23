# Switch
An on/off toggle that takes effect immediately — a checkbox with `role="switch"`.

`<label class="sx-switch"><input type="checkbox" role="switch"> Label</label>`. Track is `border-control` off, `accent` on. Use only when the change applies instantly (no Save button); settings that need confirmation use Checkbox + Button. React: `<SX.Switch label="…" checked={v} onChange={…} />`.
