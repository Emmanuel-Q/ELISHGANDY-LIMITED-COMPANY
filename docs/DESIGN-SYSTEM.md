# Design system

## Direction

Modern industrial corporate with editorial layouts: deep navy, warm ivory, forest green, and restrained copper. Photography is illustrative and must never be represented as company-owned work.

## Tokens

The source of truth is `css/styles.css`:

- Navy `#102b38`, deep navy `#0a202b`
- Forest green `#2d6048`, light green `#e7eee8`
- Warm copper `#bd8054`
- Ivory `#f7f6f1`, paper `#fffefa`
- Main text `#1c2a2c`, muted text `#64716e`
- Content width `1180px`; responsive page gutters use `--gutter`

## Type and layout

Manrope is used for display headings and DM Sans for body text, with system fallbacks. Headings use a fluid scale. Layouts use Grid/Flexbox with responsive breakpoints at 1020px and 700px.

## Components and motion

Buttons, service cards, editorial image/text splits, contact forms, and CTA panels use shared classes. Motion is limited to short opacity/transform transitions and optional Intersection Observer reveals. `prefers-reduced-motion` is respected.
