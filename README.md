# silberblick.net

Die Freelance-Website silberblick.net — Fusion aus Fotografie und Webentwicklung
mit der Botschaft „Weniger ist besser!" — als statische, deutschsprachige
Astro-Site. Ziel: Einkommen durch Aufträge. Konventionen siehe `../AGENTS.md`,
Agenten-Anweisungen (Dev-Server, Build, Patterns) siehe `./AGENTS.md`.

## Dateien

### Konfiguration

- `astro.config.mjs` — Astro-Konfiguration (statischer Build, Sitemap-Integration).
- `package.json` / `package-lock.json` — npm-Manifest und Lockfile (Astro, PixiJS, Prettier, Stylelint).
- `tsconfig.json` — TypeScript-Grundlage (`astro/tsconfigs/strict`); es existieren noch keine TS-Dateien.
- `.prettierrc` — Formatierung: keine Semikolons, Single Quotes, `prettier-plugin-astro`.
- `.stylelintrc.json` — CSS-Lint auf Basis von `stylelint-config-standard`, einige Regeln deaktiviert.
- `.gitignore` — Git-Ignores.
- `.ai/mcp/mcp.json`, `opencode.json`, `skills-lock.json` — Tool-/Agent-Konfiguration (MCP, OpenCode, Skill-Pinning).
- `.vscode/…`, `.zed/settings.json` — Editor-Einstellungen.

### Layouts & Komponenten

- `src/layouts/BaseLayout.astro` — Basis-Layout: `<head>`, Skip-Link, Header, `main`, Footer.
- `src/layouts/header.astro` — Header: Menü-Button (`aria-label`, `aria-controls`), Logo, Navigation; DOM-Reihenfolge = Tab-Reihenfolge.
- `src/layouts/footer.astro` — Footer mit SVG-Schriftzug „SILBERBLICK".
- `src/components/navigation.astro` — Hauptnavigation (`nav#hauptnavigation`), Ein-/Ausblenden per `[aria-expanded='true'] ~ nav`.
- `src/components/logo.astro` — Logo-Link „SILBERBLICK" auf die Startseite.
- `src/components/head.astro` — Meta-Tags, Titel, Person-Schema (JSON-LD), Matomo Tag Manager.
- `src/components/CTA.astro` — Call-to-Action-Element.
- `src/components/testimonial.astro` — Testimonial-Karte (Zitat, Zitatgeber, Bild).
- `src/scripts/moving-cells.js` — PixiJS-Wobble-Effekt (14x14-Zell-Grid) für das Startseiten-Portrait; bei `prefers-reduced-motion` statisches Bild.
- `src/styles/global.css` — zentrales Stylesheet: Design-Tokens als Custom Properties, Flex-Header, Skip-Link, Utility-Klassen (`.stack`, `.grid`, `.grid-grid`).

### Seiten

- `src/pages/index.astro` — Startseite (Landing: Hero, Wobble-Portrait, Argumente, Testimonials).
- `src/pages/kause-biografie.astro` — Kurzbiografie Daniel Kause.
- `src/pages/zertifikate.astro` — Zertifikate und Qualifikationen.
- `src/pages/kontakt.astro` — Kontaktseite mit Formular.
- `src/pages/legales/datenschutz.astro` — Datenschutzerklärung.
- `src/pages/legales/impressum.astro` — Impressum.
- `src/pages/legales/smartde.astro` — rechtliche Hinweise zu smartde.coop.
- `src/pages/referenzen/index.astro` — Referenzübersicht.
- `src/pages/referenzen/wordpress-relaunch.astro` — Referenz-Case-Study WordPress-Relaunch.
- `src/pages/referenzen/smartde-maintainer.astro` — Referenz-Case-Study smartde-Maintainer.
- `src/pages/webseiten/ux-strategie.astro` — Leistung: UX-Strategie.
- `src/pages/webseiten/wordPress.astro` — Leistung: WordPress.
- `src/pages/webseiten/handarbeit.astro` — Leistung: Handarbeit (individueller Code).
- `src/pages/webseiten/preise.astro` — Preise.

### Assets & Sonstiges

- `src/assets/…` — Bilder: Portraits (Daniel Kause, David Hamann), Zertifikate (CareerFoundry FSD/UX, Meisterbrief), Case-Study-Grafiken (CardSorting, HeatMap, Recherche-Dienste, smartde.coop, Lighthouse, SQUINT-Contact-Sheet), Logo `silberblick.svg`.
- `public/favicon.ico` / `public/favicon.svg` — Favicons.
- `_IA+Content/silberblick-allegorie.md` — Entwurf der Silberblick-Allegorie; nicht in die Site eingebunden.
