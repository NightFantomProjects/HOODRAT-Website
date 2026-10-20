# HOODRAT Interaction & Destination Verification

**Verified:** 2026-10-20
**Local build:** Static site served on port 3000
**Contract:** `0x05b806651e071dea47bd214008b632ddc7970ca4`

## Browser control audit — passed

The reusable check at `scripts/verify_interactions.py` verified the following against the local rendered site:

- All regular in-page anchor destinations resolve to a unique page target: Home, About, Token, Roadmap, Community, Airdrop, and the historical-airdrop note.
- The keyboard skip link targets the main landmark.
- The FAQ dialog opens and closes, and all five FAQ accordions expand.
- The mobile menu exposes the purchase control, updates its ARIA state, closes after an internal navigation choice, and does not introduce horizontal overflow.
- Every rendered external control has the exact configured route, opens a new tab, and uses `rel="noopener noreferrer"`.
- The rendered page produced no browser console or page errors during the audit.

## Confirmed external destinations

| Control | Verified route | Verification result |
| --- | --- | --- |
| Buy on Ape.store | `https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4` | Public page reachable; lists `$HOODRAT` with the confirmed contract. |
| View on Explorer | `https://robinhoodchain.blockscout.com/token/0x05b806651e071dea47bd214008b632ddc7970ca4` | Public page reachable; contract page identifies HOODRAT and reported 121 holders at verification time. |
| Live chart | `https://dexscreener.com/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4` | Configured public DexScreener path verified. Its direct text fetch exposes a client-rendered loading page; command-line requests received an anti-bot HTTP 403. |
| Official website | `https://hoodrat.onhood.cc` | Public site reachable. |
| X | `https://x.com/RodentFinance` | Public profile reachable. The isolated Chromium popup received a browser-network error after the click, while direct HTTP and page extraction returned the correct profile. The website route remains correct. |
| Discord | `https://discord.gg/y3kAtRzRA` | Public invite reachable and redirected to `https://discord.com/invite/y3kAtRzRA`. The invite describes the official `$HOODRAT` community. |

## Source update

The static market snapshot now records `121` holders, sourced from the verified Blockscout token page. Price, market cap, and liquidity remain expressly labeled as a dated snapshot rather than a live quote.

## Boundary

The destination audit confirms route and control behavior. It does not initiate wallet connections, trades, Discord authentication, X authentication, or any third-party account action.
