# HOODRAT Official Website — Implementation Plan

**Approval status:** Approved by project owner on 2026-10-20
**Project mode:** Static GitHub Pages-compatible website; no server, database, Tokly runtime, or paid hosting dependency.

## Approved Template-Fidelity Correction — 2026-10-20

The supplied full-page design reference is authoritative. The earlier mobile-first composition was rejected because it did not sufficiently match the reference. The implemented visual system therefore uses the reference’s compact dark header, wide neon graffiti lockup, left-copy/right-art hero, five-cell feature rail, paired Halloween/About panels, four-card Token Info plus two-link Quick Links row, horizontal roadmap, and compact footer. The local bundled display type is used for the wide graffiti treatment; supplied art remains scene-based rather than being used to flatten functional HTML sections.

## Scope and implementation approach

The project will be a single semantic HTML page with repository-local assets, CSS, and vanilla JavaScript. It will recreate the supplied mockup’s order and hierarchy: sticky navigation, hero, five feature highlights, historical Halloween airdrop, About HOODRAT, token/live-market area, quick links, responsive roadmap, FAQ, and footer. Every red-marked reference control will be a real anchor or button. Blue-marked content will be sourced from one `config.js` file. Yellow-marked artwork will remain non-interactive image decoration.

The site will use the exact contract and buy destination confirmed by the owner:

- Contract: `0x05b806651e071dea47bd214008b632ddc7970ca4`
- Buy: `https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4`
- Explorer: `https://robinhoodchain.blockscout.com/token/0x05b806651e071dea47bd214008b632ddc7970ca4`

The token configuration will also preserve the verified X and Discord destinations currently displayed by the public site. It will deliberately exclude the malformed GitHub URL currently shown there.

## Live-market treatment

The current official site and the confirmed Ape.store listing identify the same contract. Ape.store exposes a public current price, market cap, 24-hour volume, liquidity, trade activity, and a live chart destination. The new page will provide prominent routes to the live Ape.store trading screen and DexScreener chart. It will label any on-page numerical snapshot with its source and observation time rather than presenting it as permanently live.

A direct DexScreener token API request returned no pair for the confirmed contract during research, while the public Ape.store page still linked to a DexScreener chart. The implementation will not fabricate a client-side “live” API feed. If a stable, browser-safe official market-data endpoint is identified before implementation, `script.js` will refresh only explicitly supported values; otherwise the card will transparently say that live price/chart/activity are opened at Ape.store/DexScreener. The holder count will remain unavailable in the new UI until a source exposes it reliably—the current Ape.store listing showed `—` while the current official website carried an older value of 118.

## Design system

- **Design movement:** Neon street-poster art with cinematic urban-night illustration, based directly on the supplied original HOODRAT mockup.
- **Core principles:** Preserve the reference’s stacked one-page storytelling; keep messages and controls readable over artwork; use the supplied character/emblem assets as decoration while preserving real HTML content; visibly distinguish historical and planned claims from delivered facts.
- **Color philosophy:** Near-black and charcoal create a late-night alley setting, acid neon green is the interactive/brand signal, warm gold appears only for token/coin accents, and orange is reserved for the historical Halloween treatment.
- **Layout paradigm:** A magazine-like vertical sequence with edge-to-edge art panels, a high-contrast market rail, and an illuminated timeline rather than a generic dashboard grid.
- **Signature elements:** Dripping graffiti wordmark, lime border glow, grain/noise overlay, spray-stroke dividers, and coin/crown accents.
- **Interaction philosophy:** Navigation scrolls to real sections; buttons are obvious link controls; market actions open verified destinations in a secure new tab; motion is small, reduced for users who request less motion.
- **Animation:** Gentle border-pulse and artwork float effects, hover elevation and glow, with `prefers-reduced-motion` disabling transforms and continuous animation.
- **Typography system:** Supplied graffiti wordmark assets carry the brand. UI headings use high-impact local system display fallbacks; readable body text uses a system sans stack for offline resilience and GitHub Pages independence.
- **Brand essence:** A neon, community-led Robinhood-chain token site for the Rat Pack, built around underdog energy rather than generic crypto visuals. **Personality:** rebellious, cinematic, communal.
- **Brand voice:** Direct and crew-focused, never promising price outcomes. Examples: “SMALL RATS. BIG PLANS.” and “THE PACK MOVES TOGETHER.”
- **Wordmark & logo:** Use the supplied transparent HOODRAT character/logo in the header, hero badge, and footer; use the neon graffiti wordmark sparingly as a decorative visual.
- **Signature brand color:** `#A7FF2C` — electric rat-pack lime.

## Artwork plan

The original page mockups are visual/functional references only and will not be used as flattened web sections. Repository originals will remain unchanged. The supplied logo/emblem and character art will be copied into the site’s `assets/source/` directory. Newly supplied `1000002097.png` provides the dumpster-rat scene for the hero art treatment, and `1000004358.png` provides the Halloween airdrop artwork. `1000002122.png` and `1000001960.png` supply larger companion HOODRAT city/crew artwork for responsive hero and section treatments. No replacement image generation is planned.

## Project structure

```text
hoodrat/
├── index.html                  # Crawlable single-page structure and SEO metadata
├── styles.css                  # Theme, responsive composition, accessibility, animations
├── script.js                   # Config-driven rendering, menu, FAQ, clipboard and UI behaviors
├── config.js                   # Editable project copy, verified URLs, token and market-source settings
├── manus-routes.json           # Static route manifest for the single public page
├── favicon.png                 # Local brand icon derived from the verified token emblem
├── robots.txt                  # Crawl policy
├── sitemap.xml                 # Root-page sitemap; canonical domain held configurable
├── app.config.ts               # Webdev project logo metadata
├── assets/
│   ├── source/                 # Unchanged supplied image files used by the site
│   └── optimized/              # Optional web delivery copies without replacing originals
├── docs/
│   ├── asset-manifest.md       # Source asset audit and intended placements
│   ├── live-data-research.md   # Verified source notes and data limitations
│   ├── deployment.md           # GitHub Pages and safe custom-domain migration procedure
│   └── testing-report.md       # Actual verification results and remaining limits
├── README.md                   # Maintenance and local-preview instructions
└── .github/workflows/deploy-pages.yml # Prepared GitHub Pages deployment workflow, not activated
```

## Complete build workflow

1. Preserve the empty initialized repository baseline, copy only approved HOODRAT source assets, document the newly supplied hero and Halloween artworks, and configure diagnostics for HTML/CSS/JavaScript.
2. Author the static HTML, accessible controls, centralized configuration, responsive styling, route manifest, local favicon, and SEO/crawl files.
3. Add supported interactions: mobile menu, smooth internal navigation, close-on-navigation behavior, FAQ disclosure controls, clipboard copy for the contract, historical airdrop disclosure, market-source labels, and verified external links with `rel="noopener noreferrer"`.
4. Run the local static server on port 3000 and verify the route manifest and asset responses. Test desktop and mobile layouts, keyboard navigation, link destinations, console state, and the no-overflow requirement. Capture actual desktop and mobile screenshots.
5. Write the implementation-specific README, deployment and safe migration instructions, testing report, and missing-information list. Prepare but do not activate the GitHub Pages workflow, do not change DNS, and do not touch `hoodrat.onhood.cc`.
6. Commit the verified implementation and push it to the connected repository only after confirming the project’s repository path and preserving its initial history. No public launch, GitHub Pages activation, custom-domain change, or live-site modification will occur without explicit approval.

## Decisions requiring no further assumption

The owner has confirmed the official contract and Ape.store URL. The current site provides an official X and Discord destination. The airdrop remains historical, and planned utility/roadmap details must stay editable and not be implied as delivered. No financial performance promises, unverified supplies, alternate contracts, holders count, or external community/contact URL will be introduced.

## Remaining approval-sensitive items

- Implement the market experience as verified external live destinations plus source-labeled snapshots unless a browser-safe official data endpoint is confirmed.
- Prepare, but do not activate, GitHub Pages and do not change the existing custom-domain/DNS configuration.
