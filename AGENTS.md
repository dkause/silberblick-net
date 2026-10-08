## Dev Server

Always start in background mode:

```
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

## Build & Verify

```
npm run build          # production build to dist/
npx prettier --write . # format (no semicolons, single quotes)
npx stylelint "src/**/*.css"  # lint CSS
```

No typecheck or test commands exist. No CI pipeline.

## Project Structure

- **Static Astro site** (no SSR) for `silberblick.net` — a German-language freelance portfolio
- `src/pages/` — all routes as `.astro` files (no content collections)
- `src/components/` — small shared `.astro` components (CTA, navigation, logo, head, testimonial)
- `src/layouts/` — `BaseLayout.astro` (sidebar layout for inner pages), `header.astro`
- `src/scripts/moving-cells.js` — PixiJS v8 wobble effect on homepage portrait
- `src/styles/global.css` — single global stylesheet, all design tokens as CSS custom properties
- `_IA+Content/` — **draft markdown content, NOT wired into the site** (no Astro content collections)
- `public/` — only favicons

## Key Patterns

- Site is `lang="de"`, all visible text in German
- Inner pages use `BaseLayout` which wraps content in a sidebar + content flex layout
- Landing page (`index.astro`) passes `landing` prop to BaseLayout, which toggles `body.landing` class for different header/nav behavior
- CSS utility classes: `.stack` (vertical spacing), `.grid` (flex wrap), `.grid-grid` (CSS grid)
- Navigation: menu button lives in `header.astro` (before the logo, `aria-label`/`aria-controls`); nav in `navigation.astro` (`id="hauptnavigation"`), shown/hidden via CSS `[aria-expanded='true'] ~ nav` selector and `width >=735px` media query
- PixiJS: `moving-cells.js` loads an image from `data-src`, splits into a 14x14 grid, animates cells on mouse move — only used on homepage; under `prefers-reduced-motion: reduce` the static image is shown instead
- `@astrojs/sitemap` integration enabled (site: `https://silberblick.net`)

## Code Style

- Prettier: no semicolons, single quotes, `prettier-plugin-astro`
- Stylelint: `stylelint-config-standard` with several rules disabled (see `.stylelintrc.json`)
- TSConfig: extends `astro/tsconfigs/strict` — but no TypeScript files exist yet
