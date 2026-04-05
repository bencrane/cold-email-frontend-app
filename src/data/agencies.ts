import type { Agency } from "@/lib/types";

export const agencies: Agency[] = [
  {
    slug: "growthengine",
    name: "GrowthEngineX",
    tagline: "Revenue-Focused Cold Email for B2B SaaS",
    description:
      "B2B lead generation for companies with $1M+ in revenue. AI-powered outbound systems on Clay that turn buying signals into meetings.",
    logo: "GX",
    color: "#DC2626",
    verified: true,
    stats: [
      { label: "Emails / month", value: "8M+" },
      { label: "Clients served", value: "80+" },
      { label: "Founded", value: "2021" },
    ],
    team: [
      { name: "Marcus Chen", role: "Founder & CEO", linkedin: "https://linkedin.com/in/marcuschen" },
      { name: "Sarah Kim", role: "Head of Deliverability", linkedin: "https://linkedin.com/in/sarahkim" },
      { name: "Jake Torres", role: "Lead Copywriter", linkedin: "https://linkedin.com/in/jaketorres" },
      { name: "Priya Patel", role: "Data Analyst", linkedin: "https://linkedin.com/in/priyapatel" },
    ],
    services: [
      { icon: "📧", title: "Cold Email Campaigns", description: "End-to-end campaign management from list building to reply handling" },
      { icon: "🎯", title: "Signal-Based Prospecting", description: "Intent data and trigger events to reach buyers at the right moment" },
      { icon: "🔧", title: "Deliverability Optimization", description: "Infrastructure setup, domain warming, and inbox placement monitoring" },
      { icon: "📊", title: "Analytics & Reporting", description: "Weekly performance reports with actionable recommendations" },
    ],
    caseStudies: [
      { label: "Series A SaaS", headline: "312% increase in pipeline", metrics: ["47 meetings/month from cold email", "$2.1M pipeline generated in 90 days", "62% open rate average"] },
      { label: "B2B Marketplace", headline: "$890K closed from outbound", metrics: ["23% reply rate on cold sequences", "89 SQLs generated in 6 months", "4.2x ROI on agency retainer"] },
      { label: "DevTools Startup", headline: "8x meeting volume", metrics: ["From 5 to 40+ meetings per month", "Scaled to 3 SDRs managed", "Cost per meeting dropped 67%"] },
    ],
    testimonials: [
      { quote: "GrowthEngineX transformed our outbound. We went from struggling to book 5 meetings a month to consistently landing 40+. Their deliverability expertise is unmatched.", name: "Alex Rivera", title: "VP of Sales", company: "DataStack.io" },
      { quote: "The signal-based approach they use is a game changer. We're reaching prospects exactly when they're evaluating solutions like ours.", name: "Jordan Lee", title: "Head of Growth", company: "Metric Labs" },
    ],
    techStack: ["instantly", "clay", "apollo", "smartlead"],
    videos: [
      { title: "How We Send 8M Emails a Month", url: "https://youtube.com/watch?v=example1" },
    ],
    bookingUrl: "https://calendly.com/growthenginex/discovery",
  },
  {
    slug: "leadbird",
    name: "Leadbird",
    tagline: "The largest cold email agency in the world.",
    description:
      "Full-service outbound — from list building to inbox management at scale. The largest cold email agency in the world.",
    logo: "LB",
    color: "#1D4ED8",
    verified: true,
    stats: [
      { label: "Emails / month", value: "10M+" },
      { label: "Clients served", value: "200+" },
      { label: "Founded", value: "2019" },
    ],
    team: [
      { name: "Alex Berman", role: "CEO" },
    ],
    services: [
      { icon: "📧", title: "Cold Email at Scale", description: "High-volume outbound campaigns with dedicated infrastructure" },
      { icon: "📋", title: "List Building", description: "Custom prospect lists built from verified data sources" },
      { icon: "📬", title: "Inbox Management", description: "Full reply handling and lead qualification" },
      { icon: "🔧", title: "Infrastructure Setup", description: "Domain procurement, warmup, and deliverability management" },
    ],
    caseStudies: [],
    testimonials: [],
    techStack: ["instantly", "smartlead", "apollo"],
    videos: [],
    bookingUrl: "https://leadbird.io/book",
  },
  {
    slug: "coldiq",
    name: "ColdIQ",
    tagline: "GTM engineering agency.",
    description:
      "GTM engineering agency. AI-powered outbound and ABM systems on Clay that turn buying signals into pipeline.",
    logo: "CQ",
    color: "#7C3AED",
    verified: true,
    stats: [
      { label: "Emails / month", value: "2M+" },
      { label: "Clients served", value: "50+" },
      { label: "Founded", value: "2022" },
    ],
    team: [],
    services: [
      { icon: "🤖", title: "AI-Powered Outbound", description: "Automated prospecting and personalization at scale" },
      { icon: "🏺", title: "Clay Implementation", description: "Custom Clay workflows for enrichment and signal detection" },
      { icon: "🎯", title: "ABM Infrastructure", description: "Account-based marketing systems that target decision makers" },
      { icon: "📡", title: "Signal Detection", description: "Real-time buying signal monitoring and response" },
    ],
    caseStudies: [],
    testimonials: [],
    techStack: ["clay", "instantly", "apollo"],
    videos: [],
  },
  {
    slug: "revgrowth",
    name: "RevGrowth.ai",
    tagline: "Revenue growth through intelligent outbound.",
    description:
      "Revenue growth through intelligent outbound. Data engineering with creative copywriting that converts cold prospects.",
    logo: "RG",
    color: "#0D9488",
    verified: true,
    stats: [
      { label: "Emails / month", value: "3M+" },
      { label: "Clients served", value: "60+" },
      { label: "Founded", value: "2020" },
    ],
    team: [],
    services: [
      { icon: "📊", title: "Data Engineering", description: "Build enriched prospect databases with signal-based targeting" },
      { icon: "✍️", title: "Copywriting", description: "Research-backed cold email copy that gets responses" },
      { icon: "🚀", title: "Campaign Management", description: "Full lifecycle campaign management and optimization" },
      { icon: "📈", title: "Revenue Analytics", description: "Pipeline attribution and ROI tracking" },
    ],
    caseStudies: [],
    testimonials: [],
    techStack: ["clay", "instantly", "lemlist"],
    videos: [],
  },
];

export function getAgencyBySlug(slug: string): Agency | undefined {
  return agencies.find((a) => a.slug === slug);
}
