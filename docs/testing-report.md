# HOODRAT Website — Testing Report

**Test date:** 2026-10-20
**Preview mode:** Local static server on port 3000
**Publication status:** Not deployed. GitHub Pages, custom domain, DNS, and the existing `hoodrat.onhood.cc` website were not changed.

## Template-fidelity correction

The earlier implementation was replaced after review because it did not faithfully follow the supplied reference design. The approved full-page template is now the source of truth for composition: compact dark header, wide neon graffiti mark, left-copy/right-art hero, five-part icon rail, side-by-side Halloween/About panels, four-card Token Info row with two Quick Links, horizontal roadmap, and compact footer. The supplied desktop reference was treated as design guidance, not flattened into the implementation.

The local Rubik Wet Paint display font is bundled under its SIL Open Font License and applied to the HOODRAT lockup and principal display headings. The static website does not fetch fonts from Google at runtime.

## Passed checks

- `node --check config.js` and `node --check script.js` completed successfully.
- `python3 scripts/build_static.py` completed successfully. The build includes the local display font and static route manifest.
- Local `GET /`, `/manus-routes.json`, and the bundled font file returned HTTP 200.
- Desktop visual capture was made at 1212×1297 against the approved reference width; Android-width capture was made at 540×1212.
- Browser automation confirmed the wide brand lockups, five highlights, four token cards, two Quick Links, five roadmap milestones, Explorer control, FAQ dialog, mobile menu, mobile Buy control, and no horizontal overflow.
- Final Android-width checks confirmed the hero copy ends before the separate artwork scene begins.
- The completed interaction tests recorded no browser page errors or console errors.

## Data and functionality boundary

The owner-confirmed contract is `0x05b806651e071dea47bd214008b632ddc7970ca4`, and Buy controls route to the matching Ape.store listing. The four-card Template Token Info row presents the contract through its Explorer link, matching the supplied design. A compact, source-labelled market snapshot and external live-chart destination remain available beneath those cards. The holder snapshot is `121`, verified from the configured Blockscout token page on 2026-10-20; it is not represented as a real-time feed. See `docs/interaction-verification.md` for the full all-controls and destination audit.

## Not tested

A public GitHub Pages release, custom-domain migration, DNS propagation, wallet connection, and transactions were not tested or initiated. The Pages workflow remains manual-only.

## Evidence files

- `docs/screenshots/hoodrat-desktop.png`
- `docs/screenshots/hoodrat-mobile.png`
