import * as React from "react";
import { Field } from "@statexchange/mono-blue";

const col: React.CSSProperties = { width: 280 };

export const WithHelp = () => (
  <div style={col}>
    <Field label="Work email" type="email" placeholder="you@firm.in" help="We reply within one business day." />
  </div>
);

export const Error = () => (
  <div style={col}>
    <Field label="SEBI RA registration no." mono defaultValue="INH00001" error="Enter the full 12-character number." />
  </div>
);

export const OptionalMultiline = () => (
  <div style={col}>
    <Field label="Requirement" optional multiline placeholder="Instruments, timeframe, broker…" />
  </div>
);
