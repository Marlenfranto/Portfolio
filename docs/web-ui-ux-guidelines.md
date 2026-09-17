# Web UI/UX Guidelines Applied

This project follows the available frontend design and web interface guidance for a client-facing mobile engineering portfolio.

## Design Direction

- The site uses one consistent deep-space dark interface without a theme switch.
- Visual identity should feel like a premium engineering observatory: deep navy surfaces, crisp white text, electric blue and violet accents, restrained glass effects, constellations, and subtle cosmic depth.
- Decorative motion stays minimal and must respect `prefers-reduced-motion`.
- Content should reinforce Marlen’s positioning as a Senior Flutter & Mobile Engineer who builds production-grade offline-first, GIS, BLE, and cloud-connected applications while owning project planning, sprint delivery, ETA communication, client follow-ups, and release coordination.

## Interface Standards

- Use semantic HTML first: links for navigation, buttons for actions, labels for form controls.
- Keep one clear `<main>` landmark and one page-level `<h1>`.
- Provide visible `:focus-visible` states for links, buttons, inputs, and cards.
- Make touch targets comfortable and enable `touch-action: manipulation` on interactive controls.
- Use explicit link/button labels such as “View Case Studies,” “Download Resume,” and “Send Message.”
- Keep cards as real links so keyboard, middle-click, and copy-link behavior works.
- Keep a single validation command available through `npm test`.

## Forms

- Every field needs a visible label.
- Email fields use `type="email"`, `inputmode="email"`, `autocomplete="email"`, and `spellcheck="false"`.
- Status/help text uses `role="status"` and `aria-live="polite"` when it can communicate form behavior.
- Placeholders should be examples or prompts and use an ellipsis character.

## Media & Performance

- Use Astro image components for responsive AVIF/WebP output.
- Eagerly load only above-the-fold hero images.
- Lazy-load below-the-fold project images.
- Keep animations to compositor-friendly properties: `transform`, `opacity`, color, border, shadow.
- Never use `transition: all`.

## Accessibility & Layout

- Maintain heading hierarchy and balanced heading wraps.
- Ensure anchored sections have `scroll-margin-top` so sticky headers do not cover focused content.
- Avoid horizontal overflow on small screens.
- Ensure decorative overlays do not capture pointer events.
