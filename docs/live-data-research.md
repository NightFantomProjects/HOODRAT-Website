# HOODRAT — Verified Public Token and Market Research

**Research date:** 2026-10-20
**Purpose:** Record public facts used by the replacement website. This is not investment advice and values are volatile.

## Official contract and purchase destination

The project owner confirmed that the official $HOODRAT contract is `0x05b806651e071dea47bd214008b632ddc7970ca4` and the official purchase destination is [Ape.store on RobinHood](https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4). The current public HOODRAT website independently displays the same contract in its header, contract section, Uniswap purchase links, Blockscout token link, and DexScreener links. [1] [2]

The linked Blockscout token destination is `https://robinhoodchain.blockscout.com/token/0x05b806651e071dea47bd214008b632ddc7970ca4`. It is safe to centralize as the Explorer control because the current official website directly links to it. [1]

## Public market information

On the research date, the confirmed Ape.store page displayed a price of `$0.000002`, a `0.0%` 24-hour move, market cap `$2.3K`, 24-hour volume `$0`, liquidity `$52.578`, and a holder count of `—`. It also exposes trades, a holders tab, and a DexScreener chart link. These numbers are snapshots only and must not be represented as an evergreen live feed in static content. [2]

The current official HOODRAT site displayed a different, likely older, snapshot: price `$0.0000022861`, market cap `$2.29K`, liquidity `$33.43`, and `118` holders. The new site will not repeat its holder count as current because Ape.store did not expose a current count on the research date. [1]

A direct DexScreener API request for the confirmed token returned `pairs: null` even though the current site and Ape.store page provide DexScreener chart links. The website should direct visitors to the live chart rather than claim that a client-side API refresh is working unless a compatible source is later verified. [3]

## Verified community destinations

The current official website links to X at `https://x.com/RodentFinance` and Discord at `https://discord.gg/y3kAtRzRA`. Those are the only social/community destinations centralised for the new site. Its displayed GitHub URL is malformed (`github.com/DeepFriedBlockchains@proton.me`) and will not be used. [1]

## Excluded lookalike token data

Search results returned another Robinhood-chain HOODRAT with the different contract `0x8e62F281f282686fCa6dCB39288069a93fC23F1c`. Its price, market cap, holders, supply, website, and social links are unrelated to the owner-confirmed contract and must not be used for this website. [4]

## References

[1]: https://hoodrat.onhood.cc "Current HOODRAT website"

[2]: https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4 "Confirmed HOODRAT Ape.store listing"

[3]: https://api.dexscreener.com/latest/dex/tokens/0x05b806651e071dea47bd214008b632ddc7970ca4 "DexScreener token API response"

[4]: https://web3.bitget.com/en/swap/robinhood/0x8e62F281f282686fCa6dCB39288069a93fC23F1c "Unrelated HOODRAT listing with different contract"
