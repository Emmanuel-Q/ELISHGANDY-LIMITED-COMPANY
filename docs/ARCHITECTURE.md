# Architecture

## Runtime

This is a static, multi-page website. Every route is an ordinary HTML file and works without a framework, server runtime, database, or build step. CSS and small ES modules provide responsive presentation and progressive enhancement.

## Organization

- Root: homepage and corporate pages.
- `services/`: service overview and dedicated pages for each of the eight divisions.
- `css/styles.css`: design tokens, global elements, page patterns, and responsive breakpoints.
- `js/navigation.js`: mobile menu behavior and Escape handling.
- `js/main.js`: navigation import, optional scroll reveals, and footer year.
- `js/contact.js`: honest frontend-only contact form feedback.
- `docs/`: project, content, SEO, deployment, and launch instructions.

## Shared patterns

Header, navigation, footer, breadcrumbs, CTA panels, and layout patterns are repeated as static markup. This avoids fragile browser-side HTML injection and keeps content available to crawlers and visitors when JavaScript is unavailable.

## Progressive enhancement

JavaScript only adds menu behavior, reveals, and validation feedback. Core navigation and page content are HTML. Reduced-motion preferences disable animations.

## Hosting

Upload the static site contents to the confirmed domain document root. Absolute canonical URLs and production sitemap URLs must be filled in after the public domain is confirmed. No deployment workflow is enabled without verified host settings and paths.
