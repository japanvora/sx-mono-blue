import * as React from "react";
import { Button } from "@statexchange/mono-blue";

const row: React.CSSProperties = { display: "flex", flexWrap: "wrap", alignItems: "center", gap: "var(--space-3)" };

export const Variants = () => (
  <div style={row}>
    <Button>Book a call</Button>
    <Button variant="secondary">View capabilities</Button>
    <Button variant="ghost">Read docs</Button>
    <Button variant="danger">Stop deployment</Button>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Button size="lg">Get started</Button>
    <Button>Save changes</Button>
    <Button size="sm" variant="secondary">Export CSV</Button>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <Button disabled>Deploy</Button>
    <Button variant="secondary" disabled>Cancel</Button>
  </div>
);

export const Block = () => (
  <div style={{ width: 320 }}>
    <Button block>Sign in</Button>
  </div>
);
