export type Tool = {
  slug: string
  name: string
  description: string
  category: string[]
  logo: string // emoji placeholder for now
  website: string
  bestFor: string
  pricingTier: string
  features: string[]
  founded: string
  // Rich content (optional — populated for featured tools)
  verdict?: string
  pros?: string[]
  cons?: string[]
  useCases?: { title: string; description: string }[]
  comparison?: { tool: string; slug: string; difference: string }[]
  pricingPlans?: { name: string; price: string; description: string }[]
}

export const tools: Tool[] = [
  {
    slug: "instantly",
    name: "Instantly",
    description: "All-in-one cold email platform — scale with deliverability in mind.",
    category: ["Cold Email", "Email Sending"],
    logo: "⚡",
    website: "https://instantly.ai",
    bestFor: "Agencies and teams sending 10K+ emails/month who want built-in warmup and deliverability.",
    pricingTier: "From $30/mo",
    features: [
      "Unlimited email accounts",
      "Built-in email warmup",
      "AI-powered sequence writing",
      "Unified inbox for replies",
    ],
    founded: "2021",
    verdict:
      "Instantly is the go-to cold email platform for most agencies getting started. The unlimited email accounts and built-in warmup make it dead simple to scale sending volume without managing infrastructure yourself. Where it falls short is on the enterprise side — if you're managing 50+ client campaigns with dedicated IPs, SmartLead gives you more control. But for 80% of cold email use cases, Instantly is the fastest path from zero to sending.",
    pros: [
      "Fastest setup time — you can be sending within an hour",
      "Built-in warmup means you don't need a separate tool",
      "Unlimited email accounts on all plans",
      "AI sequence writer actually produces usable first drafts",
      "Unified inbox keeps reply management clean",
    ],
    cons: [
      "Less control over infrastructure than SmartLead for high-volume agencies",
      "White-label options are limited compared to competitors",
      "Analytics could be deeper — hard to get granular campaign insights",
      "No native LinkedIn automation steps",
    ],
    useCases: [
      {
        title: "Agency launching outbound for a new client",
        description:
          "Spin up email accounts, warm them for 2 weeks, launch sequences — all in one platform. No Frankenstein stack required.",
      },
      {
        title: "Founder doing their own cold outreach",
        description:
          "If you're a founder sending 500-2,000 emails/month, Instantly is the simplest choice. Connect your accounts, write sequences, go.",
      },
      {
        title: "SDR team scaling multi-channel",
        description:
          "Pair with Clay for enrichment and use Instantly as the sending layer. The API makes it easy to push contacts in programmatically.",
      },
    ],
    comparison: [
      {
        tool: "SmartLead",
        slug: "smartlead",
        difference:
          "SmartLead gives you dedicated IPs and more infrastructure control. Instantly is simpler to set up and better for smaller volumes.",
      },
      {
        tool: "Lemlist",
        slug: "lemlist",
        difference:
          "Lemlist has personalized images and LinkedIn steps. Instantly is more focused on pure email at scale.",
      },
      {
        tool: "Apollo.io",
        slug: "apollo",
        difference:
          "Apollo bundles data + sending. Instantly is sending-only but does it better. Most agencies pair Instantly with Clay for data.",
      },
    ],
    pricingPlans: [
      {
        name: "Growth",
        price: "$30/mo",
        description:
          "1,000 active contacts, unlimited email accounts, email warmup, 5,000 emails/month.",
      },
      {
        name: "Hypergrowth",
        price: "$77.6/mo",
        description:
          "25,000 active contacts, unlimited accounts, premium warmup, 100,000 emails/month.",
      },
      {
        name: "Light Speed",
        price: "$286.3/mo",
        description:
          "500,000 active contacts, 100M+ leads database, priority support, dedicated account manager.",
      },
    ],
  },
  {
    slug: "smartlead",
    name: "SmartLead",
    description: "Deliverability-first cold email platform with unlimited sending.",
    category: ["Cold Email", "Email Sending"],
    logo: "📧",
    website: "https://smartlead.ai",
    bestFor: "High-volume agencies managing multiple client campaigns with dedicated infrastructure.",
    pricingTier: "From $39/mo",
    features: [
      "Unlimited mailboxes",
      "Dedicated IP infrastructure",
      "Multi-client white-label",
      "Auto-rotation and warmup",
    ],
    founded: "2022",
  },
  {
    slug: "clay",
    name: "Clay",
    description: "Best-in-class enrichment platform for outbound teams.",
    category: ["Data Enrichment", "Automation"],
    logo: "🏺",
    website: "https://clay.com",
    bestFor: "GTM engineers building signal-based outbound with 50+ data provider integrations.",
    pricingTier: "From $149/mo",
    features: [
      "75+ data providers in one platform",
      "AI research agent for enrichment",
      "Waterfall enrichment across providers",
      "CRM and sequencer integrations",
    ],
    founded: "2017",
  },
  {
    slug: "apollo",
    name: "Apollo.io",
    description: "Sales intelligence and engagement platform for B2B teams.",
    category: ["Data Enrichment", "CRM"],
    logo: "🚀",
    website: "https://apollo.io",
    bestFor: "Sales teams that want prospecting, enrichment, and outreach in one platform.",
    pricingTier: "Free tier available",
    features: [
      "275M+ contact database",
      "Email and phone verification",
      "Multi-channel sequences",
      "Chrome extension for LinkedIn",
    ],
    founded: "2015",
  },
  {
    slug: "make",
    name: "Make.com",
    description: "Powerful visual automation platform for teams and businesses.",
    category: ["Automation"],
    logo: "🔧",
    website: "https://make.com",
    bestFor: "Teams building complex multi-step automations with visual workflows.",
    pricingTier: "Free tier available",
    features: [
      "Visual automation builder",
      "1000+ app integrations",
      "Error handling and routing",
      "Team collaboration features",
    ],
    founded: "2012",
  },
  {
    slug: "leadmagic",
    name: "LeadMagic",
    description: "Reveal companies visiting your site — with deanonymized data.",
    category: ["Deanonymization", "Data Enrichment"],
    logo: "🔮",
    website: "https://leadmagic.io",
    bestFor: "B2B companies that want to convert anonymous website visitors into pipeline.",
    pricingTier: "From $99/mo",
    features: [
      "Website visitor identification",
      "Company and contact enrichment",
      "Intent signal detection",
      "CRM sync",
    ],
    founded: "2022",
  },
  {
    slug: "lemlist",
    name: "Lemlist",
    description: "Personalized cold email outreach with advanced automation.",
    category: ["Cold Email", "Email Sending"],
    logo: "🍋",
    website: "https://lemlist.com",
    bestFor: "Teams that want personalized images and videos in cold email campaigns.",
    pricingTier: "From $59/mo",
    features: [
      "Personalized image and video",
      "Multi-channel sequences",
      "Email warmup (Lemwarm)",
      "LinkedIn automation steps",
    ],
    founded: "2018",
  },
  {
    slug: "prospeo",
    name: "Prospeo",
    description: "Fast, accurate bulk email verification for B2B lists.",
    category: ["Email Verification", "Data Enrichment"],
    logo: "✅",
    website: "https://prospeo.io",
    bestFor: "Agencies and teams verifying large email lists before campaigns.",
    pricingTier: "From $39/mo",
    features: [
      "Bulk email verification",
      "Email finder from LinkedIn",
      "Domain search",
      "API access",
    ],
    founded: "2020",
  },
  {
    slug: "zapier",
    name: "Zapier",
    description: "Connect your apps and automate workflows without code.",
    category: ["Automation"],
    logo: "⚙️",
    website: "https://zapier.com",
    bestFor: "Non-technical teams automating simple workflows between apps.",
    pricingTier: "Free tier available",
    features: [
      "7000+ app integrations",
      "Multi-step Zaps",
      "Filters and formatters",
      "Team sharing",
    ],
    founded: "2011",
  },
  {
    slug: "hunter",
    name: "Hunter.io",
    description: "Find and verify professional email addresses at scale.",
    category: ["Data Enrichment", "Email Verification"],
    logo: "🎯",
    website: "https://hunter.io",
    bestFor: "Sales reps finding decision-maker emails for targeted outreach.",
    pricingTier: "Free tier available",
    features: [
      "Domain search",
      "Email finder",
      "Email verifier",
      "Bulk tasks and API",
    ],
    founded: "2015",
  },
  {
    slug: "sendgrid",
    name: "SendGrid",
    description: "Email delivery service trusted by developers and marketers.",
    category: ["Email Sending"],
    logo: "📬",
    website: "https://sendgrid.com",
    bestFor: "Developers needing reliable transactional and marketing email infrastructure.",
    pricingTier: "Free tier available",
    features: [
      "Transactional email API",
      "Marketing campaigns",
      "Email validation",
      "Deliverability insights",
    ],
    founded: "2009",
  },
  {
    slug: "clearbit",
    name: "Clearbit",
    description: "Real-time business intelligence and lead enrichment.",
    category: ["Data Enrichment"],
    logo: "💎",
    website: "https://clearbit.com",
    bestFor: "Marketing teams enriching leads and personalizing experiences in real-time.",
    pricingTier: "Custom pricing",
    features: [
      "Company and contact enrichment",
      "Real-time form enrichment",
      "Reveal website visitors",
      "Salesforce native integration",
    ],
    founded: "2014",
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  if (category === "All") return tools
  return tools.filter((t) => t.category.includes(category))
}

export const toolCategories = [
  "All",
  "Cold Email",
  "Email Sending",
  "Automation",
  "Data Enrichment",
  "Deanonymization",
  "Email Verification",
  "CRM",
]
