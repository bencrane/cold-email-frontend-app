export type Creator = {
  slug: string
  name: string
  tagline: string
  bio: string
  avatar: string // emoji placeholder
  bannerGradient: string // CSS gradient for placeholder banner
  socials: { platform: string; url: string; label: string }[]
  featuredVideos: {
    title: string
    thumbnail: string // gradient placeholder
    url: string
    views: string
  }[]
  recommendedTools: string[] // tool slugs
  resources: { title: string; description: string; type: string; url: string }[]
  communityName: string
  communityUrl: string
}

export const creators: Creator[] = [
  {
    slug: "eric-nowoslawski",
    name: "Eric Nowoslawski",
    tagline: "We Send 8M+ Emails Per Month. We Know What Converts.",
    bio: "Founder of GrowthEngineX. Building AI-powered outbound systems for B2B companies with $1M+ in revenue. My goal is to build things people can learn from so they don't have to go through the hardcore learning curve I had to.",
    avatar: "EN",
    bannerGradient: "from-red-500 to-orange-400",
    socials: [
      { platform: "YouTube", url: "https://youtube.com/@ericnowoslawski", label: "YouTube" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/ericnowoslawski", label: "LinkedIn" },
      { platform: "Twitter", url: "https://x.com/ericnowoslawski", label: "X" },
    ],
    featuredVideos: [
      {
        title: "How We Write Cold Email Subject Lines for 8M Emails/Month",
        thumbnail: "from-red-400 to-red-500",
        url: "#",
        views: "12K",
      },
      {
        title: "The Programmatic TAM Builder That Changed Everything",
        thumbnail: "from-orange-400 to-red-500",
        url: "#",
        views: "8.5K",
      },
      {
        title: "Cold Email Deliverability Masterclass (2026)",
        thumbnail: "from-red-400 to-rose-500",
        url: "#",
        views: "22K",
      },
      {
        title: "How to Get Every Company in Your Client's Industry",
        thumbnail: "from-red-400 to-orange-400",
        url: "#",
        views: "15K",
      },
    ],
    recommendedTools: ["instantly", "clay", "smartlead", "apollo", "leadmagic"],
    resources: [
      {
        title: "The Cold Email Deliverability Checklist",
        description: "Complete technical setup guide to ensure your emails land in the inbox, not spam.",
        type: "Guide",
        url: "#",
      },
      {
        title: "8M Email Subject Line Swipe File",
        description: "Our best-performing subject lines across 8 million cold emails sent last month.",
        type: "Template",
        url: "#",
      },
    ],
    communityName: "GrowthEngineX Community",
    communityUrl: "#",
  },
  {
    slug: "saad-khan",
    name: "Saad Khan",
    tagline: "Scale Cold Email with Systems",
    bio: "If you're building an AI agency, lead generation agency, or automation business with cold email outreach, I'll show you exactly how to avoid bad lists and create campaigns that land meetings and drive revenue.",
    avatar: "SK",
    bannerGradient: "from-blue-500 to-cyan-400",
    socials: [
      { platform: "YouTube", url: "#", label: "YouTube" },
      { platform: "LinkedIn", url: "#", label: "LinkedIn" },
    ],
    featuredVideos: [
      {
        title: "AI Wrote Me This Cold Email... It Made $48,732",
        thumbnail: "from-blue-400 to-blue-500",
        url: "#",
        views: "45K",
      },
      {
        title: "AI Automated Cold Email Outreach That Actually Gets Replies (40%+)",
        thumbnail: "from-indigo-400 to-blue-500",
        url: "#",
        views: "32K",
      },
      {
        title: "How To Book 50 Sales Calls in 30 Days With AI Cold Email",
        thumbnail: "from-blue-400 to-indigo-500",
        url: "#",
        views: "28K",
      },
    ],
    recommendedTools: ["instantly", "clay", "make", "apollo", "sendgrid", "hunter"],
    resources: [
      {
        title: "Systems Scaling Guide",
        description: "Step-by-step guide to building your first automated outbound system.",
        type: "Guide",
        url: "#",
      },
      {
        title: "Cold Email Masterclass",
        description: "Full course on writing cold emails that convert.",
        type: "Course",
        url: "#",
      },
    ],
    communityName: "Saad's Community",
    communityUrl: "#",
  },
  {
    slug: "nick-saraev",
    name: "Nick Saraev",
    tagline: "Make Money with Make",
    bio: "The straightest-line path to scaling your lead gen agency to $20,000/month, from someone who's already done it. Automation, AI, and systems that actually work.",
    avatar: "NS",
    bannerGradient: "from-emerald-500 to-teal-400",
    socials: [
      { platform: "YouTube", url: "#", label: "YouTube" },
      { platform: "LinkedIn", url: "#", label: "LinkedIn" },
      { platform: "Twitter", url: "#", label: "X" },
    ],
    featuredVideos: [
      {
        title: "I Built a $20K/Month Agency with Make.com",
        thumbnail: "from-emerald-400 to-emerald-500",
        url: "#",
        views: "95K",
      },
      {
        title: "The AI Automation Stack That Replaced My Team",
        thumbnail: "from-green-400 to-emerald-500",
        url: "#",
        views: "67K",
      },
      {
        title: "Make.com Automation Tutorial (Complete 2026 Guide)",
        thumbnail: "from-emerald-400 to-teal-500",
        url: "#",
        views: "120K",
      },
    ],
    recommendedTools: ["make", "clay", "instantly", "zapier", "leadmagic"],
    resources: [
      {
        title: "Make.com Automation Playbook",
        description: "Every automation template you need to run a lead gen agency on Make.com.",
        type: "Template",
        url: "#",
      },
    ],
    communityName: "Nick's Make.com Community",
    communityUrl: "#",
  },
]

export function getCreatorBySlug(slug: string): Creator | undefined {
  return creators.find((c) => c.slug === slug)
}
