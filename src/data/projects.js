export const PROJECTS = [
  {
    id: "8", slug: "easykvm", title: "EasyKVM", year: "2026", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/easykvm-400.webp",
    imageLarge: "/easykvm-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "EasyKVM's headline 'The software KVM switch that flips your monitor between two computers' beside the paired app window.",
    short: "A software KVM switch. Press a hotkey — your monitor flips between two computers; keyboard, mouse, and audio follow. No hardware box, no cloud, no traffic ever leaves the LAN.",
    goal: "Replace the hardware KVM. Most people don't want a $200 box and a port-matching ordeal — they want the result: one monitor, one keyboard, one mouse, two computers, one hotkey to swap. EasyKVM does that in software over the LAN.",
    highlights: [
      "Monitor input switching via DDC/CI — no pixel streaming, native display quality on each machine",
      "Keyboard, mouse, and audio handoff with <50 ms LAN round-trip latency; ScreenCaptureKit on macOS 13+",
      "Pair over LAN with a 6-digit code; TLS handshake with TOFU cert-thumbprint pinning, no accounts, zero telemetry",
      "Native Swift / AppKit app on Mac, .NET 8 with WebView2 on Windows; Sparkle auto-updates signed with EdDSA",
      "Ed25519-signed license tokens verified offline on every launch; Stripe checkout + Fastify/Postgres license server"
    ],
    stack: ["Swift / AppKit", ".NET 8", "Fastify (Node 22)", "PostgreSQL 16", "Stripe", "Sparkle / Ed25519", "Docker"],
    links: { live: "https://easykvm.app/", github: "" }
  },
  {
    id: "10", slug: "tradeshot", title: "Tradeshot", year: "2026", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/tradeshot-400.webp",
    imageLarge: "/tradeshot-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "Tradeshot's dark hero, 'Don't post the screenshot. Post the tradeshot.' with 'screenshot' struck through, over a rising lime line chart.",
    short: "Trades turned into video replays. A moving chart that autoplays in the feed, where a static screenshot gets scrolled past.",
    goal: "Make a trade worth stopping for. A screenshot of a closed trade is a static image that shows the result and hides how it got there. Tradeshot turns the trade into a replay of the chart, sized for each feed and stamped with the trader's handle.",
    highlights: [
      "Three export ratios: 9:16 for TikTok, Reels and Shorts; 1:1 for Instagram and X; 16:9 for X, YouTube and Discord",
      "Every replay carries the trader's @handle and theme; on Creator, share pages show both",
      "Doubles as a trade review: the setup behind the entry, the drawdown sat through, how close the stop came, what was left on the table",
      "Free at 1 export a day (15 s, 720p 30fps); Trader at $2.99/mo or $24.99/yr (5 a day, 30 s, 1080p 60fps, own theme, no end card)",
      "Creator at $4.99/mo or $39.99/yr: 10 exports a day, 1-minute replays, saved themes, footer label, lasting share links"
    ],
    stack: ["Next.js", "React"],
    links: { live: "https://tradeshot.app/", github: "" }
  },
  {
    id: "2", slug: "dletter", title: "DLetter", year: "2025", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/dletter-400.webp",
    imageLarge: "/dletter-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "DLetter's dark landing page, 'Your Discord, Simplified.' beside a daily-digest mockup ringed by floating Discord messages.",
    short: "Discord noise turned into a daily digest. Thousands of messages, one inbox-friendly summary.",
    goal: "Turn Discord noise into signal. Stay on top of active servers without scrolling through thousands of messages.",
    highlights: [
      "Discord bot with real-time message ingestion",
      "AI-powered summarization of key discussions",
      "Customisable email delivery schedules",
      "Topic clustering across channels"
    ],
    stack: ["Python", "Discord API", "OpenAI", "SendGrid", "PostgreSQL"],
    links: { live: "https://dletter.app/", github: "https://github.com/patriktjaderqvist/dletter" }
  },
  {
    id: "9", slug: "proprinse", title: "Proprinse", year: "2026", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/proprinse-400.webp",
    imageLarge: "/proprinse-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "Proprinse's homepage, a drifting sports car in tyre smoke behind the italic serif headline 'Best discounts, points on top.'",
    short: "A prop firm discount and rewards platform where one code, RINSE, gets the best discount every listed firm runs. Eligible firms pay points on top, redeemable in the rewards store.",
    goal: "Stop traders paying full price. Prop firm discount codes are scattered across affiliate links and Discord posts, and none of them tell you whether the code you found is the best one the firm actually runs. Proprinse only lists firms where it is — one code everywhere — and pays points on the eligible ones on top of the discount.",
    highlights: [
      "One code, RINSE, across every listed firm — a firm is only listed if that code is the best discount it runs",
      "Points earned on eligible firms on top of the discount, redeemable in the rewards store",
      "Firm directory covering Apex Trader Funding, E8 Markets, FundedNext, Lucid Trading, My Funded Futures, TakeProfit Trader, and Topstep",
      "Trader accounts with a tools section and a scratch card playable once a day",
      "Ambassador programme and a Discord club for the trader community around it"
    ],
    stack: ["Next.js", "React"],
    links: { live: "https://proprinse.com/", github: "" }
  },
  {
    id: "1", slug: "traided", title: "Traided", year: "2025", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/traided-400.webp",
    imageLarge: "/traided-1200.webp",
    imageW: 1200, imageH: 598,
    imageAlt: "Traided's dark landing page, headline 'Your Edge, Our Execution' next to a chat panel logging a BTC trade execution.",
    short: "Natural-language trading automation. Strategies described in plain English, executed 24/7.",
    goal: "Let anyone automate trading strategies without writing code. Translate plain-English strategy descriptions into executable trading logic that runs around the clock.",
    highlights: [
      "Natural language strategy parsing via LLM",
      "Real-time market data integration",
      "Backtesting engine against historical data",
      "Secure broker API integrations"
    ],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "Docker"],
    links: { live: "https://traided.vercel.app/", github: "https://github.com/patriktjaderqvist/traided" },
    featured: true
  },
  {
    id: "7", slug: "caiche", title: "Caiche", year: "2026", category: "ventures",
    role: "Founder · Full-Stack",
    imageSmall: "/caiche-400.webp",
    imageLarge: "/caiche-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "Caiche in stark black on white: 'The cache for agent research', under a preview banner noting payments are in test mode.",
    short: "A marketplace where AI agents fetch cached, sourced research instead of re-running it. Buyers prepay credits via Stripe; producers earn 90% of every sale of research they've already done.",
    goal: "Stop AI agents from independently re-running the same research thousands of times a day. Build the trust, payment, and discovery layer that lets one agent's research compound into income for its owner — and a faster, cheaper answer for the next agent that asks the same question.",
    highlights: [
      "MCP server + HTTP API with Bearer-key auth and per-query credit debits",
      "Stripe Checkout for buyer top-ups; Stripe Connect Express for producer payouts",
      "\"Caiche me\" magic-phrase flow turns any cache miss into a new published unit",
      "Local sentence-transformers for embeddings; pgvector retrieval; Claude Haiku reviewer",
      "Source-URL liveness checks, SSRF defence, prompt-injection hardening, full security audit shipped"
    ],
    stack: ["Python", "FastAPI", "FastMCP", "PostgreSQL + pgvector", "Stripe Connect", "Anthropic", "Docker"],
    links: { live: "https://caiche.me/", github: "https://github.com/patriktjaderqvist/caiche" }
  },
  {
    id: "3", slug: "liatch", title: "Liatch", year: "2026", category: "academic",
    role: "Co-Founder · Full-Stack",
    imageSmall: "/liatch-400.webp",
    imageLarge: "/liatch-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "Liatch's black Swedish landing page, 'Hitta din nästa praktik', with a search field and an orange Hitta Plats button.",
    short: "Three-sided marketplace pairing Swedish vocational students, schools, and companies for LIA placements.",
    goal: "Simplify the LIA internship process for Swedish vocational students. Connect schools, students, and companies on one platform.",
    highlights: [
      "Three-sided marketplace (schools, students, companies)",
      "Internship matching and application flow",
      "School admin dashboard for oversight",
      "Company onboarding and talent sourcing"
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
    links: { live: "https://liatch.com/", github: "https://github.com/patriktjaderqvist/liatch" }
  },
  {
    id: "4", slug: "nordic-wealth-network", title: "Nordic Wealth Network", year: "2026 — present", category: "consulting",
    role: "BDM",
    imageSmall: "/nwn-400.webp",
    imageLarge: "/nwn-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "Nordic Wealth Network homepage over a wind-turbine and solar-farm sunset photo, listing NYSE, TSX, OMX exchange logos.",
    short: "Business development at a Nordic capital advisory. Owning the full sales cycle.",
    goal: "Build pipeline with family offices, pension funds, and long-term capital providers. Match growth-stage companies with investors whose horizons and values align.",
    highlights: [
      "Outbound prospecting across Nordic institutional investors",
      "Pipeline management and weekly reporting",
      "Coordinated investor introductions between companies and partners",
      "Outcomes under NDA"
    ],
    stack: ["CRM", "Investor Relations", "B2B Sales"],
    links: { live: "https://nordicwealthnetwork.com/", github: "" }
  },
  {
    id: "6", slug: "ml-center", title: "ML Center", year: "2024 — present", category: "consulting",
    role: "Partnerships",
    imageSmall: "/mlcenter-400.webp",
    imageLarge: "/mlcenter-1200.webp",
    imageW: 1200, imageH: 650,
    imageAlt: "ML Center's Swedish homepage: 'Tack för senaste ML Eventet!' over a photo of guests at an outdoor evening gathering.",
    short: "Sourcing and structuring collaborations between ML Center — a 450-strong Swedish investor community with serious capital behind it — and companies across the financial sector.",
    goal: "Open doors. Match ML Center with the right partners across the Swedish financial sector — brokers, fund managers, fintechs — where the community's reach and capital meet a company's need for engaged, informed investors.",
    highlights: [
      "Sourcing and negotiating partnerships across the Swedish financial sector",
      "Counterparts include brokers, fund managers, and fintechs (specifics under NDA)",
      "Positioning ML Center as a serious, capital-backed investor community",
      "Ongoing role — pipeline and partner relationships"
    ],
    stack: ["B2B Partnerships", "Business Development", "Financial Sector"],
    links: { live: "https://mlcenter.se/", github: "" }
  },
  {
    id: "5", slug: "catery", title: "Catery", year: "2024 — 2025", category: "consulting",
    role: "Co-Founder",
    imageSmall: "/catery-400.webp",
    imageLarge: "/catery-1200.webp",
    imageW: 1200, imageH: 615,
    imageAlt: "Catery's Swedish homepage on a green gradient, with a catering request field and three cards explaining the service.",
    short: "Built supply and demand sides of a foodtech marketplace from zero. Restaurants, corporate buyers, partnerships.",
    goal: "Build the supply side (restaurants) and demand side (corporate catering buyers) from zero. Own outreach, positioning, partnership deals, and the messaging.",
    highlights: [
      "Co-founded and led all business development from day one",
      "Closed restaurant partnerships across Stockholm",
      "Pitched corporate buyers and built the outbound sales motion",
      "Shaped brand positioning and go-to-market strategy"
    ],
    stack: ["B2B Sales", "Startup Operations", "Partnerships"],
    links: { live: "", github: "" }
  }
]

export const SERVICES = [
  { num: "I", title: "Sales & GTM Consulting", marker: "Engagement",
    desc: "A career built in sales, applied to your motion. Pipeline, positioning, the gap between what people say and what they actually need. Outbound systems that hold up under pressure." },
  { num: "II", title: "Product Strategy & Roadmap Audit", marker: "Engagement",
    desc: "An outside eye on the product. What is working, what is theatre, what should ship next. Honest feedback grounded in having built things end-to-end." },
  { num: "III", title: "Workflow & Operations Optimisation", marker: "Engagement",
    desc: "Most processes exist because nobody questioned them. Find the friction, redesign the workflow, automate what should be invisible." },
  { num: "IV", title: "AI Integration & Agentic Systems", marker: "Build",
    desc: "Practical AI inside your existing operation. LLM-powered tooling, agents that handle real work, integration into the systems your team already uses." },
  { num: "V", title: "Custom Build — Prototype to Product", marker: "Build",
    desc: "From sketch to production. Python, React, fullstack — built by the same person who scoped it. No handoff, no translation loss." },
  { num: "VI", title: "Investor & Capital Introductions", marker: "Network",
    desc: "Selective introductions across Nordic family offices, funds, and long-term capital. Through Nordic Wealth Network. For growth-stage companies whose values and horizons line up." },
  { num: "VII", title: "Fractional Advisor", marker: "Retainer",
    desc: "A part-time pair of hands and a sharper eye. Embedded as needed. Calls when you need them, work between." }
]

export const PROCESS = [
  { num: "I", title: "Listen", body: "Sales taught it first. Past what people say, to what they actually need. The first call is for understanding — not pitching, not proposing, not selling." },
  { num: "II", title: "Diagnose", body: "What is working, what is theatre, what is in the way. Honest reading of the situation, with the discipline of someone who has shipped real products." },
  { num: "III", title: "Build", body: "Strategy, prototype, or product — whatever the diagnosis calls for. One person, one standard, end-to-end. No handoffs." }
]
