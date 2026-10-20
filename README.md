# HOODRAT Official Website

A static, GitHub Pages-compatible replacement for the existing HOODRAT website. It is built with plain HTML, CSS, JavaScript and local repository assets. It has no Tokly runtime dependency, server, database, account system, or paid plugin requirement.

## Local preview

Run the site from the repository root:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Then open `http://localhost:3000`. The required route manifest is available at `/manus-routes.json`.

## Update editable information

Edit only `config.js` for routine content changes. It contains the project copy, contract, network, verified links, source-labelled market snapshot, social links, airdrop status, About checklist, roadmap, and FAQ content.

The current $HOODRAT contract and official buy destination are:

- Contract: `0x05b806651e071dea47bd214008b632ddc7970ca4`
- Ape.store: `https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4`

Do not replace those values with another similarly named HOODRAT token without owner confirmation. The market values in `config.js` are labelled snapshots, not a live in-page API feed. Use the verified Ape.store and DexScreener links for live activity.

## Assets

The unmodified supplied originals used by the website are in `assets/source/`. Delivery-friendly WebP copies are in `assets/optimized/`; the originals remain unchanged. The full placement audit is in [docs/asset-manifest.md](docs/asset-manifest.md).

## Build static output

```bash
python3 scripts/build_static.py
```

This creates a fresh `dist/` directory containing only the files needed to host the website. It does not modify the source files.

## Deploy only after review approval

The included GitHub Actions workflow is intentionally manual-only. It does not run on push. After the implementation and preview are approved, follow [docs/deployment.md](docs/deployment.md) to enable GitHub Pages and deploy deliberately. Do not change `hoodrat.onhood.cc`, DNS records, or the current Tokly site until the GitHub Pages version is checked and a migration is approved.

## Project records

- [Implementation plan](plan.md)
- [Editable outcomes](TODO.md)
- [Verified asset manifest](docs/asset-manifest.md)
- [Market-data research](docs/live-data-research.md)
- [Testing report](docs/testing-report.md)
- [Known missing information](docs/missing-information.md)
