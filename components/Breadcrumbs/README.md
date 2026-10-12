# Breadcrumbs
The trail back up the page hierarchy, shown above the page title on anything two levels deep or more.

`nav[aria-label="Breadcrumb"]` › `ol.sx-breadcrumbs` › `li` with links, the last one a plain `span` with `aria-current="page"`. Separators are drawn in CSS — don't type them. Skip on top-level pages. React: `<SX.Breadcrumbs items={[{label:"Home",href:"/"},{label:"ORION"}]} />`.
