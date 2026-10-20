/*
 * HOODRAT site configuration
 * Update the values in this file for token information, copy, roadmap details, and approved links.
 * Values labelled as snapshots are not a live price feed.
 */
window.HOODRAT_CONFIG = {
  site: {
    name: "HOODRAT",
    ticker: "$HOODRAT",
    tagline: "SMALL RATS. BIG PLANS.",
    publicOrigin: "",
    currentOfficialWebsite: "https://hoodrat.onhood.cc",
    disclaimer:
      "HOODRAT is an independent community token and is not affiliated with or endorsed by Robinhood Markets, Inc.",
  },
  links: {
    buy: "https://ape.store/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4",
    explorer:
      "https://robinhoodchain.blockscout.com/token/0x05b806651e071dea47bd214008b632ddc7970ca4",
    chart:
      "https://dexscreener.com/robinhood/0x05b806651e071dea47bd214008b632ddc7970ca4",
    x: "https://x.com/RodentFinance",
    discord: "https://discord.gg/y3kAtRzRA",
    officialWebsite: "https://hoodrat.onhood.cc",
  },
  token: {
    name: "HOODRAT",
    symbol: "$HOODRAT",
    network: "Robinhood Chain",
    contract: "0x05b806651e071dea47bd214008b632ddc7970ca4",
  },
  market: {
    sourceName: "Ape.store public listing",
    observedDate: "20 Oct 2026",
    snapshot: {
      price: "$0.000002",
      change24h: "0.0%",
      marketCap: "$2.3K",
      volume24h: "$0",
      liquidity: "$52.578",
      holders: "Unavailable",
    },
    notice:
      "Snapshot values are recorded from the public listing and can change. Open Ape.store or DexScreener for live market activity.",
  },
  hero: {
    description:
      "HOODRAT is a community-driven token on the Robinhood Blockchain, built for the real ones. Rats run together.",
  },
  features: [
    { icon: "community", label: "Community Driven", caption: "The Rat Pack" },
    { icon: "chain", label: "On Robinhood Blockchain", caption: "Built on-chain" },
    { icon: "diamond", label: "Fair Launch", caption: "Open from day one" },
    { icon: "heart", label: "Real Utility Plans", caption: "Goals, not guarantees" },
    { icon: "growth", label: "Growing Together", caption: "Rat by rat" },
  ],
  airdrop: {
    status: "Historical campaign",
    year: "Past campaign",
    date: "October 31st",
    title: "HALLOWEEN AIRDROP",
    description: "Trick or treat? This Halloween, it was coins, not candy.",
    detail:
      "This is a past community campaign. There is no active entry form or eligibility claim on this page.",
  },
  about: {
    description:
      "HOODRAT is a community-driven token on the Robinhood Blockchain. Inspired by the underdogs, built for the real ones, and powered by a growing community of rats who believe in more than just memes — we believe in a movement.",
    checklist: [
      "Community first",
      "Fair launch",
      "Built on Robinhood Blockchain",
      "Utility development goals",
      "More than just a meme",
    ],
  },
  roadmap: [
    {
      icon: "check",
      title: "Launch",
      subtitle: "Live listing",
      status: "Live",
      completed: true,
    },
    {
      icon: "community",
      title: "Community",
      subtitle: "Growth",
      status: "In progress",
      completed: false,
    },
    {
      icon: "pumpkin",
      title: "Halloween",
      subtitle: "Airdrop",
      status: "Historical",
      completed: false,
    },
    {
      icon: "gear",
      title: "Utility",
      subtitle: "Development",
      status: "Planned",
      completed: false,
    },
    {
      icon: "rocket",
      title: "Future",
      subtitle: "Expansions",
      status: "Planned",
      completed: false,
    },
  ],
  faqs: [
    {
      question: "What is $HOODRAT?",
      answer:
        "HOODRAT is a community-driven token on the Robinhood Chain. It is built around the Rat Pack community and does not make a promise of financial performance.",
    },
    {
      question: "Which network is $HOODRAT on?",
      answer: "The official token configuration identifies the Robinhood Chain network.",
    },
    {
      question: "How do I verify the contract?",
      answer:
        "Compare the address shown on this site with the Blockscout token page before any transaction. Never rely on a similarly named token alone.",
    },
    {
      question: "Where can I buy $HOODRAT?",
      answer:
        "The verified Buy button opens the official HOODRAT listing on Ape.store. External trading platforms have their own terms and wallet requirements.",
    },
    {
      question: "Is the Halloween airdrop open?",
      answer:
        "No. The Halloween material is a historical campaign reference and this website does not collect entries or wallet information.",
    },
  ],
};
