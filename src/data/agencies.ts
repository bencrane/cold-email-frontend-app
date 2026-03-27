export type Agency = {
  slug: string
  name: string
  description: string
  logo: string // initials placeholder
  heroGradient: string
  stats: { label: string; value: string }[]
  team: { name: string; title: string; initials: string; linkedinUrl: string }[]
  targetClient: string
  testimonial: {
    quote: string
    name: string
    title: string
    company: string
  }
  services: { name: string; description: string; icon: string }[]
  caseStudies: {
    clientType: string
    headlineMetric: string
    stats: string[]
  }[]
  videos: { title: string; thumbnail: string; url: string }[]
  resources: { title: string; description: string; type: string; url: string }[]
  bookingUrl: string
  certified: boolean
}

export const agencies: Agency[] = [
  {
    slug: "growthengine-x",
    name: "GrowthEngineX",
    description:
      "B2B lead generation for companies with $1M+ in revenue. We design, build, and run AI-powered outbound systems on Clay that turn buying signals into meetings and pipeline. Launch a free test campaign and see results before you commit.",
    logo: "GX",
    heroGradient: "from-red-500/80 to-orange-400/80",
    stats: [
      { label: "Emails / Month", value: "8M+" },
      { label: "Min. Engagement", value: "3 months" },
      { label: "Expertise", value: "B2B SaaS" },
      { label: "Founded", value: "2022" },
    ],
    team: [
      {
        name: "Eric Nowoslawski",
        title: "Founder & CEO",
        initials: "EN",
        linkedinUrl: "https://linkedin.com/in/ericnowoslawski",
      },
    ],
    targetClient:
      "Post-Series A to enterprise B2B teams with clear PMF, sales-led or PLG, ACVs $20k–$250k+, and the appetite to scale revenue with the right tools and the systems.",
    testimonial: {
      quote:
        "Constantly, we've been receiving leads every day on a weekly basis between 6 and 15 replies and this started on week 2. Three of those replies have already become existing clients. We didn't have to wait a long time, the conversion rate is great.",
      name: "Paloma Hernandez",
      title: "Head of Sales",
      company: "Patrice",
    },
    services: [
      {
        name: "AI-Powered Outbound",
        description: "Automated prospecting systems that identify and engage high-intent buyers using AI and real-time signals.",
        icon: "🤖",
      },
      {
        name: "ABM Infrastructure",
        description: "Build targeted account-based marketing systems that orchestrate multi-channel campaigns at scale.",
        icon: "🎯",
      },
      {
        name: "Clay Implementation",
        description: "Full-service Clay setup, optimization, and ongoing management to maximize your GTM efficiency.",
        icon: "🏺",
      },
      {
        name: "Signal-to-Meeting Automation",
        description: "Transform buying signals from 50+ data sources into qualified meetings on your calendar.",
        icon: "📡",
      },
    ],
    caseStudies: [
      {
        clientType: "B2B SaaS Startup",
        headlineMetric: "300% increase in qualified meetings",
        stats: ["2,500+ leads engaged", "18% reply rate", "62 meetings booked"],
      },
      {
        clientType: "Enterprise Tech Company",
        headlineMetric: "$1.7M pipeline generated in 90 days",
        stats: ["5,000+ accounts targeted", "24% open rate", "158 SQLs created"],
      },
      {
        clientType: "Professional Services Firm",
        headlineMetric: "Reduced CAC by 40%",
        stats: ["1,800+ prospects contacted", "32% positive response", "45 new clients"],
      },
    ],
    videos: [
      { title: "How We Write Subject Lines for 8M Emails/Month", thumbnail: "from-red-400 to-red-500", url: "#" },
      { title: "Building Your First Outbound Sequence", thumbnail: "from-red-400 to-rose-500", url: "#" },
      { title: "Signal-Based Prospecting Masterclass", thumbnail: "from-orange-400 to-red-500", url: "#" },
    ],
    resources: [
      {
        title: "The Ultimate Clay Workflow Guide",
        description: "Step-by-step guide to building your first automated outbound system with Clay.",
        type: "Guide",
        url: "#",
      },
      {
        title: "100+ Buyer Signal Prompts",
        description: "Ready-to-use AI prompts for identifying high-intent prospects across multiple channels.",
        type: "Template",
        url: "#",
      },
      {
        title: "Email Deliverability Checklist",
        description: "Complete technical setup guide to ensure your emails land in the inbox, not spam.",
        type: "Checklist",
        url: "#",
      },
    ],
    bookingUrl: "#",
    certified: true,
  },
  {
    slug: "leadbird",
    name: "Leadbird",
    description:
      "The largest cold email agency in the world. We send 10M+ emails per month across hundreds of client campaigns. Full-service outbound — from list building to inbox management. If you need meetings, we deliver.",
    logo: "LB",
    heroGradient: "from-blue-500/80 to-cyan-400/80",
    stats: [
      { label: "Emails / Month", value: "10M+" },
      { label: "Active Clients", value: "1,000+" },
      { label: "Expertise", value: "Full-Service" },
      { label: "Founded", value: "2018" },
    ],
    team: [
      {
        name: "Nick Abraham",
        title: "Founder & CEO",
        initials: "NA",
        linkedinUrl: "https://linkedin.com/in/nickabraham",
      },
      {
        name: "Jordan Lee",
        title: "Head of Operations",
        initials: "JL",
        linkedinUrl: "#",
      },
      {
        name: "Maria Santos",
        title: "VP of Deliverability",
        initials: "MS",
        linkedinUrl: "#",
      },
    ],
    targetClient:
      "B2B companies from startup to enterprise that need predictable pipeline. We work with SaaS, professional services, staffing, and any company where outbound email is a viable channel.",
    testimonial: {
      quote:
        "Leadbird took over our entire outbound operation and we went from 5 meetings per month to 40+ within the first quarter. Their infrastructure and deliverability expertise is world-class.",
      name: "David Kim",
      title: "VP of Sales",
      company: "TechScale Inc.",
    },
    services: [
      {
        name: "Full-Service Outbound",
        description: "End-to-end cold email campaigns — we handle everything from list building to reply management.",
        icon: "📨",
      },
      {
        name: "Deliverability Infrastructure",
        description: "Enterprise-grade email infrastructure with dedicated IPs, warmup, and monitoring.",
        icon: "🛡️",
      },
      {
        name: "List Building at Scale",
        description: "Custom prospect lists built with multi-source verification for maximum accuracy.",
        icon: "📋",
      },
      {
        name: "Reply Management",
        description: "Human-managed reply handling to qualify leads and book meetings directly on your calendar.",
        icon: "💬",
      },
    ],
    caseStudies: [
      {
        clientType: "SaaS Scaleup",
        headlineMetric: "40+ meetings per month (from 5)",
        stats: ["10,000+ prospects contacted/month", "22% reply rate", "8x pipeline increase"],
      },
      {
        clientType: "Staffing Agency",
        headlineMetric: "$2.4M in new contracts (Year 1)",
        stats: ["15,000+ companies reached", "340 qualified conversations", "67 closed deals"],
      },
    ],
    videos: [
      { title: "How We Manage 10M Emails/Month", thumbnail: "from-blue-400 to-blue-500", url: "#" },
      { title: "Cold Email Infrastructure Deep Dive", thumbnail: "from-blue-400 to-indigo-500", url: "#" },
    ],
    resources: [
      {
        title: "The Cold Email Playbook",
        description: "Everything we've learned sending 10M+ emails per month, distilled into one guide.",
        type: "Guide",
        url: "#",
      },
    ],
    bookingUrl: "#",
    certified: true,
  },
  {
    slug: "coldiq",
    name: "ColdIQ",
    description:
      "ColdIQ is a GTM engineering agency. We design, build, and run AI-powered outbound and ABM systems on Clay that turn buying signals into meetings and pipeline.",
    logo: "CQ",
    heroGradient: "from-purple-500/80 to-violet-400/80",
    stats: [
      { label: "Monthly Revenue", value: "$5M MRR" },
      { label: "Min. Budget", value: "$5K+/mo" },
      { label: "Expertise", value: "Clay / AI / ABM" },
      { label: "Founded", value: "2023" },
    ],
    team: [
      {
        name: "Alex Johnson",
        title: "Founder & GTM Engineer",
        initials: "AJ",
        linkedinUrl: "#",
      },
      {
        name: "Sarah Chen",
        title: "Head of Deliverability",
        initials: "SC",
        linkedinUrl: "#",
      },
      {
        name: "Marcus Williams",
        title: "Senior GTM Strategist",
        initials: "MW",
        linkedinUrl: "#",
      },
    ],
    targetClient:
      "Post-Series A to enterprise B2B teams with clear PMF, sales-led or PLG, ACVs $20k–$250k+, and the appetite to scale revenue with the right tools and the systems.",
    testimonial: {
      quote:
        "ColdIQ built us a signal-based outbound system that generates 3x more pipeline than our SDR team was producing manually. The ROI was obvious within the first month.",
      name: "Rachel Torres",
      title: "Director of Revenue",
      company: "CloudSync",
    },
    services: [
      {
        name: "AI-Powered Outbound",
        description: "Automated prospecting that identifies and engages high-intent buyers using AI and real-time signals.",
        icon: "🤖",
      },
      {
        name: "ABM Infrastructure",
        description: "Targeted account-based systems that orchestrate multi-channel campaigns at scale.",
        icon: "🎯",
      },
      {
        name: "Clay Implementation",
        description: "Full-service Clay setup, optimization, and ongoing management.",
        icon: "🏺",
      },
      {
        name: "Signal-to-Meeting Automation",
        description: "Transform buying signals from 50+ sources into qualified meetings.",
        icon: "📡",
      },
    ],
    caseStudies: [
      {
        clientType: "Series B SaaS",
        headlineMetric: "3x pipeline increase in 60 days",
        stats: ["4,200+ accounts targeted", "31% positive signal rate", "89 qualified meetings"],
      },
      {
        clientType: "Enterprise Software",
        headlineMetric: "$3.2M pipeline generated",
        stats: ["2,800+ decision-makers reached", "27% open rate", "212 SQLs created"],
      },
    ],
    videos: [
      { title: "Clay Fundamentals Workshop", thumbnail: "from-purple-400 to-purple-500", url: "#" },
      { title: "Building Your First ABM Campaign", thumbnail: "from-purple-400 to-violet-500", url: "#" },
    ],
    resources: [
      {
        title: "The GTM Engineering Playbook",
        description: "How to build AI-powered outbound systems that actually work.",
        type: "Guide",
        url: "#",
      },
      {
        title: "Signal Scoring Framework",
        description: "Our framework for scoring buying signals across 50+ data sources.",
        type: "Template",
        url: "#",
      },
    ],
    bookingUrl: "#",
    certified: true,
  },
  {
    slug: "revgrowth",
    name: "RevGrowth.ai",
    description:
      "Revenue growth through intelligent outbound. We combine data engineering with creative copywriting to build campaigns that convert cold prospects into warm opportunities.",
    logo: "RG",
    heroGradient: "from-emerald-500/80 to-teal-400/80",
    stats: [
      { label: "Emails / Month", value: "2M+" },
      { label: "Avg. Reply Rate", value: "14%" },
      { label: "Expertise", value: "Data + Copy" },
      { label: "Founded", value: "2023" },
    ],
    team: [
      {
        name: "Jake Morrison",
        title: "Co-Founder & Head of Data",
        initials: "JM",
        linkedinUrl: "#",
      },
      {
        name: "Priya Patel",
        title: "Co-Founder & Head of Creative",
        initials: "PP",
        linkedinUrl: "#",
      },
    ],
    targetClient:
      "B2B SaaS companies between $2M–$50M ARR that have product-market fit and want to add an outbound channel without building an SDR team.",
    testimonial: {
      quote:
        "RevGrowth replaced our 4-person SDR team with a system that generates better leads at 1/3 the cost. The data quality is night and day compared to what we were doing manually.",
      name: "Tom Bradley",
      title: "CRO",
      company: "DataFlow",
    },
    services: [
      {
        name: "Data-Driven Outbound",
        description: "Custom prospect lists built from buying signals, hiring patterns, and technographic data.",
        icon: "📊",
      },
      {
        name: "AI Copywriting",
        description: "Personalized email copy generated from prospect research and signal analysis.",
        icon: "✍️",
      },
      {
        name: "Campaign Management",
        description: "End-to-end campaign execution including A/B testing and optimization.",
        icon: "📈",
      },
    ],
    caseStudies: [
      {
        clientType: "Mid-Market SaaS",
        headlineMetric: "Replaced 4-person SDR team",
        stats: ["12,000+ prospects/quarter", "14% reply rate", "Cost reduced by 67%"],
      },
    ],
    videos: [],
    resources: [
      {
        title: "The Data-First Outbound Playbook",
        description: "How to build prospect lists that actually convert using signal-based enrichment.",
        type: "Guide",
        url: "#",
      },
    ],
    bookingUrl: "#",
    certified: false,
  },
]

export function getAgencyBySlug(slug: string): Agency | undefined {
  return agencies.find((a) => a.slug === slug)
}
