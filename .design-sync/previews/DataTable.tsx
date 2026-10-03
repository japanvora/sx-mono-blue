import * as React from "react";
import { DataTable, Badge } from "@statexchange/mono-blue";

const columns = [
  { key: "instrument", header: "Instrument", kind: "primary" as const },
  { key: "exchange", header: "Exchange" },
  { key: "status", header: "Status", render: (r: any) => <Badge tone={r.tone} dot>{r.status}</Badge> },
  { key: "orders", header: "Orders", align: "right" as const },
  { key: "latency", header: "p50 latency", align: "right" as const },
  { key: "updated", header: "Last update", kind: "code" as const },
];

const rows = [
  { instrument: "NIFTY FUT", exchange: "NSE", status: "Live", tone: "success", orders: "4,812", latency: "38.2 ms", updated: "14:32:05" },
  { instrument: "BANKNIFTY FUT", exchange: "NSE", status: "Live", tone: "success", orders: "3,907", latency: "41.0 ms", updated: "14:32:04" },
  { instrument: "CRUDEOIL FUT", exchange: "MCX", status: "Paused", tone: "warning", orders: "1,264", latency: "52.7 ms", updated: "13:58:41" },
  { instrument: "SILVER FUT", exchange: "MCX", status: "Error", tone: "danger", orders: "0", latency: "—", updated: "09:15:00" },
];

export const Compact = () => <DataTable columns={columns} rows={rows} caption="Deployments" />;

export const Comfortable = () => <DataTable columns={columns} rows={rows.slice(0, 2)} comfortable />;
