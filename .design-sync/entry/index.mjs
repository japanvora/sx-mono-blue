// The ESM entry the design-sync converter bundles. The package ships a prebuilt
// IIFE (components/bundle.js) that assigns window.SX; this re-exports it under the
// names components/index.d.ts declares.
import "./react-global.mjs";
import "../../components/bundle.js";

const SX = window.SX;
export const {
  setTheme, initTheme, initTabs, Logo, Button, Link, Field, Select, Checkbox, Switch,
  Badge, Alert, Card, Stat, DataTable, Tabs, Navbar, Hero, SectionHeader, FeatureGrid,
  Footer, Disclaimer, Dialog, Icon, icon, initIcons, toast, Toast, Pagination, pageRange,
  paginationHTML, Chart, Sparkline, chartSVG, sparklineSVG, renderCharts, EmptyState,
  MobileMenu, initNav,
} = SX;
