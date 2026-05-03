export const PROJECTS = [
  {
    id: "1", title: "Traided", year: "2025", category: "ventures",
    role: "Founder · Full-Stack",
    image: "/traided.png",
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
    id: "2", title: "DLetter", year: "2025", category: "ventures",
    role: "Founder · Full-Stack",
    image: "/dletter.png",
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
    id: "3", title: "Liatch", year: "2024", category: "academic",
    role: "Co-Founder · Full-Stack",
    image: "/liatch.png",
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
    id: "4", title: "Nordic Wealth Network", year: "2024 — present", category: "consulting",
    role: "BDM",
    image: "/nwn.png",
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
    id: "5", title: "Catery", year: "2024 — 2025", category: "consulting",
    role: "Co-Founder",
    image: "/catery.png",
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
