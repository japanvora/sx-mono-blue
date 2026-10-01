/** stateXchange UI — window.SX. Every component is also a plain CSS class API (bundle.css): the React wrappers only emit those classes. */
import type { ReactNode, MouseEventHandler, InputHTMLAttributes, SelectHTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

/** Theme helpers. `setTheme` writes `data-theme` on <html> and remembers the choice. */
export declare function setTheme(mode: "light" | "dark" | "system"): "light" | "dark";
export declare function initTheme(): "light" | "dark";
/** Wires keyboard + click behaviour for class-API tabs (`.sx-tabs[role=tablist]`). */
export declare function initTabs(scope?: ParentNode): void;

/** Brand lockup — stateXchange or a product sub-brand (product="orion" | "mizar" | "merak" | "orbit" | "eigen" | "orbit"; endorsement line "by stateXchange" defaults on at md/lg). Classes: sx-logo, sx-logo--product, sx-logo--orion|mizar|merak|orbit|eigen, sx-logo__word--product, sx-logo__by, sx-logo__belt-a|b, sx-logo--sm|lg, sx-logo__mark, sx-logo__word, sx-logo__x, sx-logo__tag. */
export interface LogoProps { product?: "statexchange" | "orion" | "mizar" | "merak" | "orbit" | "eigen"; size?: "sm" | "md" | "lg"; variant?: "lockup" | "mark" | "wordmark"; tagline?: boolean; endorsed?: boolean; href?: string; className?: string }
export declare function Logo(p: LogoProps): JSX.Element;

/** Action button. Classes: sx-btn, sx-btn--secondary|ghost|danger, sx-btn--sm|lg, sx-btn--block. */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { variant?: "primary" | "secondary" | "ghost" | "danger"; size?: "sm" | "md" | "lg"; block?: boolean; href?: string; children?: ReactNode }
export declare function Button(p: ButtonProps): JSX.Element;

/** Inline text link. Classes: sx-link, sx-link--quiet. */
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> { quiet?: boolean }
export declare function Link(p: LinkProps): JSX.Element;

/** Labelled text input or textarea. Classes: sx-field, sx-label, sx-input, sx-input--mono, sx-help, sx-error, is-invalid. */
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> { label: ReactNode; help?: ReactNode; error?: ReactNode; optional?: boolean; mono?: boolean; multiline?: boolean }
export declare function Field(p: FieldProps): JSX.Element;

/** Labelled native select. Classes: sx-field, sx-select-wrap, sx-select. */
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { label?: ReactNode; help?: ReactNode; options: Array<string | { value: string; label: string }> }
export declare function Select(p: SelectProps): JSX.Element;

/** Checkbox or radio with label. Class: sx-check. */
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> { label: ReactNode; type?: "checkbox" | "radio" }
export declare function Checkbox(p: CheckboxProps): JSX.Element;

/** On/off switch (checkbox with role=switch). Class: sx-switch. */
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> { label?: ReactNode }
export declare function Switch(p: SwitchProps): JSX.Element;

/** Status pill. Classes: sx-badge, sx-badge--accent|success|warning|danger|outline, sx-badge__dot. */
export interface BadgeProps { tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "outline"; dot?: boolean; className?: string; children?: ReactNode }
export declare function Badge(p: BadgeProps): JSX.Element;

/** Inline message. Classes: sx-alert, sx-alert--info|success|warning|danger, sx-alert__icon, sx-alert__title, sx-alert__text. */
export interface AlertProps { tone?: "info" | "success" | "warning" | "danger"; title?: ReactNode; className?: string; children?: ReactNode }
export declare function Alert(p: AlertProps): JSX.Element;

/** Content container. Classes: sx-card, sx-card--raised|muted|interactive, sx-card__eyebrow|title|body|footer. */
export interface CardProps { variant?: "raised" | "muted" | "interactive"; eyebrow?: ReactNode; title?: ReactNode; body?: ReactNode; footer?: ReactNode; as?: string; onClick?: MouseEventHandler; className?: string; children?: ReactNode }
export declare function Card(p: CardProps): JSX.Element;

/** KPI tile. Classes: sx-stat, sx-stat__label|value|unit|meta|delta, sx-stat__delta--up|down; grid: sx-stats. */
export interface StatProps { label: ReactNode; value: ReactNode; unit?: ReactNode; delta?: string; deltaDirection?: "up" | "down"; meta?: ReactNode; className?: string }
export declare function Stat(p: StatProps): JSX.Element;

/** Data table. Default compact (34px), all cell borders, no wrap. Classes: sx-table-wrap, sx-table, sx-table--dense (default), sx-table--comfortable; cell modifiers is-num, is-primary, is-code, is-wrap. Key/value blocks: sx-kv. */
export interface DataTableColumn<R = any> { key: string; header: ReactNode; align?: "left" | "right"; kind?: "primary" | "code"; render?: (row: R) => ReactNode }
export interface DataTableProps<R = any> { columns: DataTableColumn<R>[]; rows: R[]; dense?: boolean; caption?: string }
export declare function DataTable(p: DataTableProps): JSX.Element;

/** Tab set. Classes: sx-tabs, sx-tab, sx-tabpanel (ARIA tablist; aria-selected drives the style). */
export interface TabsProps { items: Array<{ value: string; label: ReactNode; content: ReactNode }>; defaultValue?: string; label?: string; className?: string }
export declare function Tabs(p: TabsProps): JSX.Element;

/** Top bar with built-in mobile drawer (toggle shows below 720px or with compact). Classes: sx-nav, sx-nav--sticky, sx-nav--compact, sx-nav__toggle, sx-nav__inner|links|link|actions. */
export interface NavbarProps { links: Array<{ label: string; href: string; current?: boolean }>; actions?: ReactNode; mobileActions?: ReactNode; homeHref?: string; sticky?: boolean; compact?: boolean; className?: string }
export declare function Navbar(p: NavbarProps): JSX.Element;

/** Landing hero. Classes: sx-hero, sx-hero--grid, sx-hero__eyebrow|title|lede|actions|points. */
export interface HeroProps { eyebrow?: ReactNode; title: ReactNode; lede?: ReactNode; actions?: ReactNode; points?: string[]; grid?: boolean; className?: string }
export declare function Hero(p: HeroProps): JSX.Element;

/** Section intro. Classes: sx-section-head, sx-section-head--center, __eyebrow|title|lede. */
export interface SectionHeaderProps { eyebrow?: ReactNode; title: ReactNode; lede?: ReactNode; align?: "left" | "center"; className?: string }
export declare function SectionHeader(p: SectionHeaderProps): JSX.Element;

/** Numbered capability grid. Classes: sx-features, sx-feature, sx-feature__index|title|body. */
export interface FeatureGridProps { items: Array<{ title: ReactNode; body?: ReactNode; index?: string }>; className?: string }
export declare function FeatureGrid(p: FeatureGridProps): JSX.Element;

/** Site footer with link columns, disclaimer and legal line. Classes: sx-footer, sx-footer__grid|about|heading|list|link|base. */
export interface FooterProps { about?: ReactNode; columns: Array<{ heading: string; links: Array<{ label: string; href: string }> }>; legalName: string; contact?: ReactNode; disclaimer?: ReactNode; year?: number; className?: string }
export declare function Footer(p: FooterProps): JSX.Element;

/** Regulatory disclaimer text. Classes: sx-disclaimer, sx-disclaimer--boxed. */
export interface DisclaimerProps { boxed?: boolean; className?: string; children?: ReactNode }
export declare function Disclaimer(p: DisclaimerProps): JSX.Element;

/** Modal dialog. Classes: sx-backdrop, sx-dialog, sx-dialog__head|title|body|foot. */
export interface DialogProps { open: boolean; title: ReactNode; onClose?: () => void; actions?: ReactNode; tone?: "default" | "danger"; children?: ReactNode }
export declare function Dialog(p: DialogProps): JSX.Element | null;

export type IconName = "arrow-right"|"arrow-left"|"arrow-up-right"|"chevron-down"|"chevron-right"|"chevron-left"|"check"|"x"|"plus"|"minus"|"search"|"menu"|"more"|"sliders"|"filter"|"user"|"log-out"|"bell"|"mail"|"calendar"|"clock"|"info"|"check-circle"|"alert-circle"|"x-circle"|"alert-triangle"|"download"|"upload"|"copy"|"external-link"|"link"|"edit"|"trash"|"eye"|"refresh"|"play"|"pause"|"stop"|"activity"|"zap"|"chart-line"|"chart-bar"|"server"|"database"|"cpu"|"terminal"|"shield"|"lock"|"key"|"inbox"|"sun"|"moon";
/** Line icon, 24px grid, 2px stroke, currentColor. Class API: SX.icon(name) returns an SVG string; <i data-sx-icon="name"> + SX.initIcons(). Class: sx-icon; icon-only buttons: sx-icon-btn. */
export interface IconProps { name: IconName; size?: number; label?: string; className?: string }
export declare function Icon(p: IconProps): JSX.Element;
export declare function icon(name: IconName, o?: { size?: number; label?: string; className?: string }): string;
export declare function initIcons(scope?: ParentNode): void;

/** Transient confirmation. Imperative: SX.toast({title,text,tone,duration}) returns a dismiss function; danger toasts stay until dismissed. Classes: sx-toaster, sx-toast, sx-toast--info|success|warning|danger. */
export interface ToastOptions { title?: string; text?: string; tone?: "info" | "success" | "warning" | "danger"; duration?: number }
export declare function toast(o: ToastOptions): () => void;
/** Documentation-only: toasts are created with SX.toast(). */
export interface ToastProps extends ToastOptions {}
export declare function Toast(p: ToastProps): null;

/** Page navigation for long tables. Classes: sx-pagination, sx-pagination__summary|list, sx-page, sx-page--nav|gap. */
export interface PaginationProps { page: number; pageCount: number; onChange?: (page: number) => void; total?: number; pageSize?: number; className?: string }
export declare function Pagination(p: PaginationProps): JSX.Element;
export declare function pageRange(page: number, count: number, siblings?: number): Array<number | "gap">;
export declare function paginationHTML(o: { page: number; pageCount: number; total?: number; pageSize?: number; href?: (n: number) => string }): string;

/** Token-coloured SVG charts: line, area, bar; plus sparklines. Class API: <div data-sx-chart='{json spec}'> + SX.renderCharts(). */
export interface ChartSeries { name?: string; values: Array<number | null>; area?: boolean }
export interface ChartProps { type?: "line" | "area" | "bar"; labels?: string[]; series: ChartSeries[]; unit?: string; yMin?: number; yMax?: number; zero?: boolean; width?: number; height?: number; label?: string; legend?: boolean; maxLabels?: number; className?: string }
export declare function Chart(p: ChartProps): JSX.Element;
export declare function Sparkline(p: { values: number[]; width?: number; height?: number; tone?: "up" | "down"; label?: string; className?: string }): JSX.Element;
export declare function chartSVG(p: ChartProps): string;
export declare function sparklineSVG(values: number[], o?: { width?: number; height?: number; tone?: "up" | "down"; label?: string }): string;
export declare function renderCharts(scope?: ParentNode): void;

/** Placeholder for a view with nothing to show. Classes: sx-empty, sx-empty--plain, sx-empty__icon|title|text|actions. */
export interface EmptyStateProps { icon?: IconName; title: ReactNode; text?: ReactNode; actions?: ReactNode; plain?: boolean; className?: string }
export declare function EmptyState(p: EmptyStateProps): JSX.Element;

/** Mobile navigation drawer. Classes: sx-drawer, sx-drawer-backdrop, sx-drawer__head|links|link|foot. Class API: button[data-sx-drawer-open=id] + SX.initNav(). */
export interface MobileMenuProps { id?: string; links: Array<{ label: string; href: string; current?: boolean }>; actions?: ReactNode; onClose: () => void }
export declare function MobileMenu(p: MobileMenuProps): JSX.Element;
export declare function initNav(scope?: ParentNode): void;
