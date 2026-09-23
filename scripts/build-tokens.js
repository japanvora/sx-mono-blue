// Regenerates components/tokens.css from tokens.json. Run: node scripts/build-tokens.js
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const t = JSON.parse(fs.readFileSync(path.join(root, "tokens.json"), "utf8"));
const line = (n, v) => `  --${n}: ${v};`;
const themed = (id) => [...t.color.tokens, ...t.shadow.tokens].map(c => line(c.name, c.value[id])).join("\n");
const flat = ["spacing", "radius", "size"].flatMap(f => t[f].tokens.map(x => line(x.name, x.value)))
  .concat(Object.entries(t.type.families).map(([k, v]) => line("font-" + k, v))).join("\n");
const css = `/* stateXchange — Mono Blue: design tokens. Generated from tokens.json. Load before bundle.css. */
:root,
[data-theme="light"] {
${themed("light")}
${flat}
}

[data-theme="dark"] {
${themed("dark")}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
${themed("dark").split("\n").map(l => "  " + l).join("\n")}
  }
}
`;
fs.writeFileSync(path.join(root, "components", "tokens.css"), css);
console.log("components/tokens.css written");
