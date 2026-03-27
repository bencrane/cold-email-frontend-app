import type { Tool } from "@/lib/types";

export const tools: Tool[] = [
  {
    slug: "instantly",
    name: "Instantly",
    tagline: "All-in-one cold email platform — scale with deliverability in mind.",
    description:
      "Instantly is a cold email platform designed for agencies and sales teams who need to scale outbound without sacrificing deliverability. It handles email warmup, campaign management, inbox rotation, and analytics in a single dashboard.",
    icon: "⚡",
    url: "https://instantly.ai",
    categories: ["cold-email", "email-sending"],
    pricing: [
      { plan: "Growth", price: "$30/mo", features: ["1,000 contacts", "5,000 emails/mo", "Email warmup"] },
      { plan: "Hypergrowth", price: "$77.6/mo", features: ["25,000 contacts", "75,000 emails/mo", "Advanced analytics"] },
      { plan: "Light Speed", price: "$286.3/mo", features: ["500,000 contacts", "Unlimited emails", "Priority support"] },
    ],
    founded: "2021",
    bestFor: "Agencies scaling cold email volume with deliverability controls",
    prosAndCons: {
      good: [
        "Built-in email warmup with Instantly Warmup network",
        "Unlimited email accounts on all plans",
        "Clean UI with strong campaign analytics",
        "Active product development and feature releases",
      ],
      watchOut: [
        "Lead database (Lead Finder) quality can vary",
        "CRM features are still maturing",
        "No native LinkedIn automation",
      ],
    },
    comparisons: [
      { tool: "smartlead", summary: "Instantly has a cleaner UI; SmartLead offers more infrastructure control and API flexibility." },
      { tool: "lemlist", summary: "Instantly focuses on scale; Lemlist emphasizes personalization and multi-channel." },
    ],
    useCases: [
      { title: "Agency Outbound at Scale", description: "Run campaigns across dozens of client accounts with centralized warmup and analytics." },
      { title: "SDR Team Prospecting", description: "Equip SDRs with warmed inboxes and automated follow-up sequences." },
    ],
    features: ["Email warmup", "Inbox rotation", "Campaign analytics", "A/B testing", "Unified inbox", "Lead database", "API access"],
    g2: { rating: 4.8, reviewCount: 342, url: "https://www.g2.com/products/instantly-ai/reviews" },
  },
  {
    slug: "smartlead",
    name: "SmartLead",
    tagline: "Deliverability-first cold email platform with unlimited sending.",
    description:
      "SmartLead is built for high-volume cold email senders who need granular control over infrastructure, mailbox rotation, and deliverability. Popular with agencies running outbound for multiple clients.",
    icon: "📧",
    url: "https://smartlead.ai",
    categories: ["cold-email", "email-sending"],
    pricing: [
      { plan: "Basic", price: "$39/mo", features: ["2,000 contacts", "6,000 emails/mo", "Email warmup"] },
      { plan: "Pro", price: "$94/mo", features: ["30,000 contacts", "150,000 emails/mo", "API access"] },
      { plan: "Custom", price: "$174/mo", features: ["Unlimited contacts", "Custom limits", "Dedicated support"] },
    ],
    founded: "2022",
    bestFor: "High-volume senders who want infrastructure-level control",
    prosAndCons: {
      good: [
        "Master inbox for all replies in one place",
        "Strong API for custom integrations",
        "Granular mailbox rotation controls",
        "Unlimited email accounts",
      ],
      watchOut: [
        "UI can feel cluttered compared to Instantly",
        "Learning curve for advanced features",
        "Reporting dashboards less polished",
      ],
    },
    comparisons: [
      { tool: "instantly", summary: "SmartLead offers more infrastructure control; Instantly has a cleaner UX." },
    ],
    useCases: [
      { title: "Multi-Client Agency", description: "Manage dozens of client campaigns with separate mailbox pools and white-label reporting." },
      { title: "Custom Workflow Builders", description: "Use the API to integrate cold email into custom sales stacks." },
    ],
    features: ["Email warmup", "Master inbox", "Mailbox rotation", "API access", "White-label", "Webhooks", "Sub-accounts"],
    g2: { rating: 4.6, reviewCount: 189, url: "https://www.g2.com/products/smartlead/reviews" },
  },
  {
    slug: "clay",
    name: "Clay",
    tagline: "Best-in-class enrichment platform for outbound teams.",
    description:
      "Clay connects to 100+ data providers and lets you build enrichment workflows that turn raw prospect lists into highly personalized outbound campaigns. Think of it as a spreadsheet with superpowers for sales teams.",
    icon: "🏺",
    url: "https://clay.com",
    categories: ["data-enrichment", "automation"],
    pricing: [
      { plan: "Starter", price: "$134/mo", features: ["2,000 credits", "Basic enrichments", "Email finder"] },
      { plan: "Explorer", price: "$314/mo", features: ["10,000 credits", "AI enrichments", "CRM integrations"] },
      { plan: "Pro", price: "$720/mo", features: ["50,000 credits", "Advanced workflows", "Priority support"] },
    ],
    founded: "2020",
    bestFor: "Outbound teams that need deep prospect enrichment and personalization",
    prosAndCons: {
      good: [
        "100+ data provider integrations in one platform",
        "AI-powered enrichment and personalization",
        "Extremely flexible workflow builder",
        "Strong community and template library",
      ],
      watchOut: [
        "Credit-based pricing can get expensive at scale",
        "Steep learning curve for complex workflows",
        "Not a sending platform — need to pair with Instantly, SmartLead, etc.",
      ],
    },
    comparisons: [
      { tool: "apollo", summary: "Clay is enrichment-focused; Apollo is an all-in-one with its own database." },
    ],
    useCases: [
      { title: "Signal-Based Outbound", description: "Detect hiring, funding, and tech install signals to reach buyers at the right moment." },
      { title: "Hyper-Personalized Campaigns", description: "Use AI to generate custom first lines based on enriched prospect data." },
    ],
    features: ["100+ data providers", "AI enrichment", "Workflow builder", "CRM sync", "Email finder", "Waterfall enrichment", "API"],
    g2: { rating: 4.9, reviewCount: 276, url: "https://www.g2.com/products/clay/reviews" },
  },
  {
    slug: "apollo",
    name: "Apollo.io",
    tagline: "Sales intelligence and engagement platform for B2B teams.",
    description:
      "Apollo combines a massive B2B contact database with email sequencing, dialer, and CRM features. It's the go-to all-in-one platform for teams that want prospecting and outreach in a single tool.",
    icon: "🚀",
    url: "https://apollo.io",
    categories: ["data-enrichment", "crm"],
    pricing: [
      { plan: "Free", price: "$0", features: ["250 emails/day", "Basic filters", "Chrome extension"] },
      { plan: "Basic", price: "$49/mo", features: ["Unlimited emails", "Advanced filters", "Intent data"] },
      { plan: "Professional", price: "$79/mo", features: ["Everything in Basic", "Dialer", "Custom reports"] },
    ],
    founded: "2015",
    bestFor: "Teams that want prospecting database + outreach in one tool",
    prosAndCons: {
      good: [
        "Massive B2B database with strong coverage",
        "Generous free tier for getting started",
        "Built-in sequencing and dialer",
        "Intent data and buying signals",
      ],
      watchOut: [
        "Email data accuracy varies by region",
        "Deliverability features less advanced than dedicated platforms",
        "Can feel bloated for teams that only need enrichment",
      ],
    },
    comparisons: [
      { tool: "clay", summary: "Apollo is all-in-one; Clay is specialized for enrichment workflows." },
    ],
    useCases: [
      { title: "Full-Stack Prospecting", description: "Find contacts, build lists, and launch sequences without leaving the platform." },
      { title: "Market Research", description: "Use filters and intent signals to map your total addressable market." },
    ],
    features: ["B2B database", "Email sequencing", "Chrome extension", "Intent data", "Dialer", "CRM", "API"],
    g2: { rating: 4.7, reviewCount: 1280, url: "https://www.g2.com/products/apollo-io/reviews" },
  },
  {
    slug: "lemlist",
    name: "Lemlist",
    tagline: "Personalized cold email outreach with advanced automation.",
    description:
      "Lemlist focuses on personalization and multi-channel outreach. It combines cold email with LinkedIn automation and phone touches, making it popular with teams that want more than just email.",
    icon: "🍋",
    url: "https://lemlist.com",
    categories: ["cold-email", "email-sending"],
    pricing: [
      { plan: "Email Starter", price: "$32/mo", features: ["Unlimited campaigns", "Email finder", "Custom text variables"] },
      { plan: "Email Pro", price: "$55/mo", features: ["CRM integrations", "Custom images", "A/B testing"] },
      { plan: "Multi-Channel Expert", price: "$79/mo", features: ["LinkedIn automation", "Phone steps", "Advanced conditions"] },
    ],
    founded: "2018",
    bestFor: "Teams that want multi-channel outreach with strong personalization",
    prosAndCons: {
      good: [
        "Built-in LinkedIn automation on higher plans",
        "Custom image and video personalization",
        "Strong community and educational content",
        "Good deliverability features",
      ],
      watchOut: [
        "Per-seat pricing gets expensive for larger teams",
        "LinkedIn features require browser extension",
        "Less suited for pure high-volume sending",
      ],
    },
    comparisons: [
      { tool: "instantly", summary: "Lemlist emphasizes multi-channel; Instantly focuses on email scale." },
    ],
    useCases: [
      { title: "Multi-Channel Sequences", description: "Combine email, LinkedIn, and phone in a single automated sequence." },
      { title: "Personalized Outbound", description: "Use custom images and variables to stand out in crowded inboxes." },
    ],
    features: ["Email sequences", "LinkedIn steps", "Custom images", "A/B testing", "CRM sync", "Email warmup", "Lead database"],
    g2: { rating: 4.5, reviewCount: 245, url: "https://www.g2.com/products/lemlist/reviews" },
  },
  {
    slug: "leadmagic",
    name: "LeadMagic",
    tagline: "Reveal companies visiting your site — with deanonymized data.",
    description:
      "LeadMagic identifies anonymous website visitors and enriches them with contact data, letting you turn website traffic into actionable leads. Great for intent-based outbound strategies.",
    icon: "🔮",
    url: "https://leadmagic.io",
    categories: ["deanonymization", "data-enrichment"],
    pricing: [
      { plan: "Starter", price: "$99/mo", features: ["500 reveals", "Company identification", "Basic enrichment"] },
      { plan: "Growth", price: "$249/mo", features: ["2,000 reveals", "Contact enrichment", "CRM integrations"] },
      { plan: "Scale", price: "$499/mo", features: ["5,000 reveals", "Advanced filters", "API access"] },
    ],
    founded: "2023",
    bestFor: "Teams that want to convert anonymous website traffic into outbound leads",
    prosAndCons: {
      good: [
        "High accuracy on company identification",
        "Direct integration with outbound tools",
        "Real-time visitor identification",
        "Competitive pricing for the category",
      ],
      watchOut: [
        "Contact-level enrichment requires higher plans",
        "Smaller company compared to alternatives like Clearbit",
        "Results depend heavily on your site traffic volume",
      ],
    },
    comparisons: [],
    useCases: [
      { title: "Intent-Based Outbound", description: "Reach out to companies that already visited your pricing page or case studies." },
      { title: "ABM Validation", description: "Confirm whether target accounts are engaging with your content before outreach." },
    ],
    features: ["Website visitor ID", "Company enrichment", "Contact enrichment", "Real-time alerts", "CRM sync", "API", "Slack notifications"],
    g2: { rating: 4.8, reviewCount: 58, url: "https://www.g2.com/products/leadmagic/reviews" },
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  return tools.filter((t) => t.categories.includes(categorySlug));
}
