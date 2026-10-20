# HOODRAT Website — Testing Report

**Test date:** 2026-10-20
**Preview mode:** Local static server on port 3000
**Publication status:** Not deployed. GitHub Pages, custom domain, DNS, and the existing `hoodrat.onhood.cc` website were not changed.

## Passed checks

- `node --check config.js` and `node --check script.js` completed without syntax errors.
- `manus-routes.json` and `site.webmanifest` parsed as valid JSON. The sitemap contained valid root markers.
- `GET /`, `/manus-routes.json`, `/robots.txt`, `/sitemap.xml`, and `/site.webmanifest` returned HTTP 200 from the local static server.
- All 13 local `src`/`href` references found in `index.html` existed in the repository.
- Desktop render was captured at 1440×1080 as a 1440×4292 full-page image. Mobile render was captured at 390×844 as a 390×6790 full-page image.
- Browser automation confirmed desktop hero rendering, five config-driven feature highlights, five config-driven roadmap milestones, five FAQs, external-link `noopener noreferrer` protection, FAQ disclosure behavior, and contract-copy confirmation.
- Browser automation confirmed no horizontal overflow at desktop and mobile viewport sizes.
- Browser automation confirmed the mobile menu opens, exposes `aria-expanded="true"`, closes after a navigation selection, and returns to `aria-expanded="false"`.
- After the independent audit, browser automation confirmed the closed mobile navigation is hidden from assistive technology and visually hidden; the expanded mobile menu exposes the verified Buy, X and Discord controls.
- Browser automation confirmed the mobile roadmap resolves to one column.
- The interaction run produced no page errors or browser console errors.

## Visual comparison

The implemented layout follows the supplied original mockup’s order: dark sticky header, lime hero lettering and purchase/community controls, five-icon rail, Halloween/ About split row, token/market area, community links, luminous horizontal-to-vertical roadmap, FAQ and footer. It uses the supplied transparent logo/emblem, dumpster scene, Halloween scene, rat-community image, and night-city art as non-functional visuals. The hero and airdrop panel retain real HTML headings, copy and controls rather than becoming flattened screenshots.

The supplied original mockup used different composed hero and character art. The implementation uses the newly supplied dumpster-rat, night-city and rat-pack artwork instead, preserving the intended neon urban direction without copying the full-page reference as an image.

## Test observation resolved

The first post-audit browser assertion read the clipboard toast immediately after click, before the asynchronous clipboard operation had settled. That assertion failed without a page or console error. The check was rerun with an explicit wait for the toast text; it then confirmed `Contract address copied.` and completed every desktop/mobile assertion successfully. This was a test-synchronization correction, not a website source defect.

## Verified links and data boundary

The site configuration uses the owner-confirmed contract `0x05b806651e071dea47bd214008b632ddc7970ca4` and matching Ape.store URL. Explorer, live-chart, X and Discord destinations are centralized in `config.js`. On-page market values are visibly labelled as an Ape.store snapshot; no unsupported live API claim is made. The verified data-source findings and the holder-count limitation are documented in `live-data-research.md`.

## Not tested

- A public GitHub Pages deployment, because enabling it requires a separate publication decision.
- The `hoodrat.onhood.cc` custom-domain migration, DNS propagation and public HTTPS on the replacement host, because live settings must remain untouched until approved.
- Third-party provider availability after navigation, wallet connection or any transaction flow. The exact verified URLs were tested as configured links; no external-wallet or purchase action was initiated.

## Evidence files

- `docs/screenshots/hoodrat-desktop.png`
- `docs/screenshots/hoodrat-mobile.png`
