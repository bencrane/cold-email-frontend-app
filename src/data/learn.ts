export type Topic = {
  slug: string
  name: string
  description: string
  icon: string // emoji
}

export type Video = {
  slug: string
  title: string
  creatorSlug: string // references creators data
  creatorName: string
  topicSlugs: string[] // can belong to multiple topics
  views: string
  duration: string
  publishedDate: string
  description: string
  thumbnailGradient: string // tailwind gradient classes
  youtubeUrl: string
  mentionedToolSlugs: string[] // references tools data
}

export const topics: Topic[] = [
  {
    slug: "deliverability-warmup",
    name: "Deliverability & Warm-up",
    description:
      "Technical setup, sender reputation, inbox placement, and warming strategies.",
    icon: "📬",
  },
  {
    slug: "list-building",
    name: "List Building & Prospecting",
    description:
      "Finding the right people to email. ICP definition, data sources, and building targeted lists.",
    icon: "🎯",
  },
  {
    slug: "data-enrichment",
    name: "Data Enrichment",
    description:
      "Using Clay, Apollo, and other tools to enrich prospect data with signals, technographics, and intent.",
    icon: "🔍",
  },
  {
    slug: "copywriting-sequences",
    name: "Copywriting & Sequences",
    description:
      "Writing cold emails that get replies. Subject lines, body copy, CTAs, and multi-step sequences.",
    icon: "✍️",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure Setup",
    description:
      "Domains, mailboxes, DNS records, SPF, DKIM, DMARC — the technical foundation.",
    icon: "🔧",
  },
  {
    slug: "automation-workflows",
    name: "Automation & Workflows",
    description:
      "Building automated outbound systems with Make, n8n, Zapier, and custom integrations.",
    icon: "⚙️",
  },
  {
    slug: "scaling-agency",
    name: "Scaling & Agency Operations",
    description:
      "Growing from freelancer to agency. Client management, pricing, hiring, and operations.",
    icon: "📈",
  },
  {
    slug: "reply-management",
    name: "Reply Management & Follow-up",
    description:
      "Handling replies, qualifying leads, booking meetings, and follow-up strategies.",
    icon: "💬",
  },
  {
    slug: "multichannel",
    name: "LinkedIn + Email Multi-channel",
    description:
      "Combining LinkedIn outreach with cold email for higher response rates.",
    icon: "🔗",
  },
  {
    slug: "ai-cold-email",
    name: "AI & Cold Email",
    description:
      "Using AI for personalization, research, copywriting, and campaign optimization.",
    icon: "🤖",
  },
]

export const videos: Video[] = [
  // Eric Nowoslawski (6)
  {
    slug: "how-we-write-cold-email-subject-lines-for-8m-emails-month",
    title: "How We Write Cold Email Subject Lines for 8M Emails/Month",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["copywriting-sequences", "scaling-agency"],
    views: "12K",
    duration: "8:37",
    publishedDate: "Mar 12, 2026",
    description:
      "Eric breaks down the exact subject line frameworks his team uses across 8 million cold emails per month, including A/B testing methodology and the patterns that consistently drive opens.",
    thumbnailGradient: "from-red-400 to-orange-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["instantly", "smartlead"],
  },
  {
    slug: "the-complete-dns-setup-guide-for-cold-email",
    title: "The Complete DNS Setup Guide for Cold Email",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["infrastructure", "deliverability-warmup"],
    views: "18K",
    duration: "14:22",
    publishedDate: "Feb 20, 2026",
    description:
      "A step-by-step walkthrough of DNS configuration for cold email — SPF, DKIM, DMARC, and custom tracking domains — so your emails actually reach the inbox.",
    thumbnailGradient: "from-red-400 to-rose-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "building-a-programmatic-tam-with-clay",
    title: "Building a Programmatic TAM with Clay",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["data-enrichment", "list-building"],
    views: "8.5K",
    duration: "11:45",
    publishedDate: "Jan 30, 2026",
    description:
      "How to use Clay to build a total addressable market programmatically — pulling from multiple data sources, enriching with signals, and scoring leads automatically.",
    thumbnailGradient: "from-orange-400 to-red-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["clay", "apollo"],
  },
  {
    slug: "how-to-warm-up-50-email-accounts-in-2-weeks",
    title: "How to Warm Up 50 Email Accounts in 2 Weeks",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["deliverability-warmup", "infrastructure"],
    views: "22K",
    duration: "9:15",
    publishedDate: "Mar 5, 2026",
    description:
      "The exact warmup schedule and methodology for spinning up 50 email accounts simultaneously without getting flagged or destroying sender reputation.",
    thumbnailGradient: "from-red-400 to-red-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "scaling-from-1m-to-8m-emails-month-what-broke",
    title: "Scaling from 1M to 8M Emails/Month — What Broke",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["scaling-agency"],
    views: "15K",
    duration: "16:40",
    publishedDate: "Feb 8, 2026",
    description:
      "The infrastructure, team, and process failures that happened when scaling from 1 million to 8 million emails per month — and how they were fixed.",
    thumbnailGradient: "from-red-500 to-orange-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "ai-powered-prospect-research-with-claude",
    title: "AI-Powered Prospect Research with Claude",
    creatorSlug: "eric-nowoslawski",
    creatorName: "Eric Nowoslawski",
    topicSlugs: ["ai-cold-email", "data-enrichment"],
    views: "9K",
    duration: "12:08",
    publishedDate: "Mar 18, 2026",
    description:
      "Using Claude AI to research prospects at scale — pulling insights from LinkedIn, company websites, and news to write hyper-personalized opening lines.",
    thumbnailGradient: "from-orange-400 to-amber-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["clay"],
  },

  // Saad Khan (6)
  {
    slug: "ai-wrote-me-this-cold-email-it-made-48732",
    title: "AI Wrote Me This Cold Email... It Made $48,732",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["ai-cold-email", "copywriting-sequences"],
    views: "45K",
    duration: "10:22",
    publishedDate: "Jan 18, 2026",
    description:
      "Saad tests AI-generated cold emails against his best-performing human-written ones. The results are surprising — and he breaks down exactly why the AI version converted.",
    thumbnailGradient: "from-blue-400 to-blue-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "how-to-book-50-sales-calls-in-30-days",
    title: "How To Book 50 Sales Calls in 30 Days",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["scaling-agency", "reply-management"],
    views: "28K",
    duration: "15:30",
    publishedDate: "Feb 14, 2026",
    description:
      "The complete playbook for booking 50 sales calls in a month using cold email — from list building to reply management and meeting scheduling.",
    thumbnailGradient: "from-blue-400 to-indigo-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "the-cold-email-automation-stack-make-clay-instantly",
    title: "The Cold Email Automation Stack (Make + Clay + Instantly)",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["automation-workflows", "infrastructure"],
    views: "32K",
    duration: "18:45",
    publishedDate: "Mar 1, 2026",
    description:
      "A full tutorial on building an automated cold email stack using Make.com for orchestration, Clay for enrichment, and Instantly for sending.",
    thumbnailGradient: "from-indigo-400 to-blue-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["make", "clay", "instantly"],
  },
  {
    slug: "building-b2b-lists-that-actually-convert",
    title: "Building B2B Lists That Actually Convert",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["list-building", "data-enrichment"],
    views: "19K",
    duration: "11:20",
    publishedDate: "Feb 25, 2026",
    description:
      "Most cold email lists are garbage. Saad shows how to build targeted B2B lists using Apollo and Clay that actually lead to booked meetings.",
    thumbnailGradient: "from-blue-500 to-cyan-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["apollo", "clay"],
  },
  {
    slug: "linkedin-cold-email-the-multi-channel-playbook",
    title: "LinkedIn + Cold Email: The Multi-Channel Playbook",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["multichannel"],
    views: "14K",
    duration: "13:15",
    publishedDate: "Mar 22, 2026",
    description:
      "How to combine LinkedIn connection requests and messaging with cold email sequences for 2-3x higher response rates.",
    thumbnailGradient: "from-blue-400 to-violet-400",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "writing-follow-up-sequences-that-dont-feel-desperate",
    title: "Writing Follow-Up Sequences That Don't Feel Desperate",
    creatorSlug: "saad-khan",
    creatorName: "Saad Khan",
    topicSlugs: ["copywriting-sequences", "reply-management"],
    views: "21K",
    duration: "9:50",
    publishedDate: "Jan 10, 2026",
    description:
      "The art of the follow-up — how to write 3-5 step sequences that add value instead of just saying 'bumping this to the top of your inbox.'",
    thumbnailGradient: "from-cyan-400 to-blue-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },

  // Nick Saraev (6)
  {
    slug: "i-built-a-20k-month-agency-with-make-com",
    title: "I Built a $20K/Month Agency with Make.com",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["scaling-agency", "automation-workflows"],
    views: "95K",
    duration: "22:15",
    publishedDate: "Jan 5, 2026",
    description:
      "The full story of building a $20K/month lead generation agency powered almost entirely by Make.com automations — from first client to scaling operations.",
    thumbnailGradient: "from-emerald-400 to-emerald-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["make"],
  },
  {
    slug: "the-ai-automation-stack-that-replaced-my-team",
    title: "The AI Automation Stack That Replaced My Team",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["ai-cold-email", "automation-workflows"],
    views: "67K",
    duration: "19:30",
    publishedDate: "Feb 3, 2026",
    description:
      "How Nick replaced three team members with AI-powered automations using Make.com and Zapier — and why the output quality actually improved.",
    thumbnailGradient: "from-green-400 to-emerald-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["make", "zapier"],
  },
  {
    slug: "make-com-cold-email-automation-complete-tutorial",
    title: "Make.com Cold Email Automation (Complete Tutorial)",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["automation-workflows", "infrastructure"],
    views: "120K",
    duration: "28:40",
    publishedDate: "Mar 10, 2026",
    description:
      "The most comprehensive Make.com cold email automation tutorial — from webhook triggers to enrichment flows to sending sequences, with every module explained.",
    thumbnailGradient: "from-emerald-400 to-teal-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["make", "instantly"],
  },
  {
    slug: "how-to-enrich-10000-leads-in-5-minutes",
    title: "How to Enrich 10,000 Leads in 5 Minutes",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["data-enrichment", "list-building"],
    views: "34K",
    duration: "8:55",
    publishedDate: "Feb 18, 2026",
    description:
      "A speed-run through enriching 10,000 leads using Clay — from raw company names to fully enriched contacts with emails, titles, and buying signals.",
    thumbnailGradient: "from-teal-400 to-emerald-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["clay"],
  },
  {
    slug: "n8n-vs-make-com-for-cold-email-honest-comparison",
    title: "n8n vs Make.com for Cold Email — Honest Comparison",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["automation-workflows"],
    views: "42K",
    duration: "16:10",
    publishedDate: "Mar 25, 2026",
    description:
      "An honest, hands-on comparison of n8n and Make.com for cold email automation workflows — pricing, ease of use, reliability, and which one Nick actually uses.",
    thumbnailGradient: "from-emerald-500 to-green-400",
    youtubeUrl: "#",
    mentionedToolSlugs: ["make"],
  },
  {
    slug: "zapier-automations-for-reply-management",
    title: "Zapier Automations for Reply Management",
    creatorSlug: "nick-saraev",
    creatorName: "Nick Saraev",
    topicSlugs: ["automation-workflows", "reply-management"],
    views: "18K",
    duration: "10:35",
    publishedDate: "Jan 22, 2026",
    description:
      "Building Zapier automations to handle cold email replies — auto-categorization, CRM updates, Slack notifications, and meeting booking flows.",
    thumbnailGradient: "from-green-400 to-teal-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["zapier"],
  },

  // Alex Berman (6)
  {
    slug: "cold-email-copywriting-masterclass-2026",
    title: "Cold Email Copywriting Masterclass (2026)",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["copywriting-sequences"],
    views: "88K",
    duration: "25:00",
    publishedDate: "Jan 15, 2026",
    description:
      "Alex Berman's definitive guide to cold email copywriting — covering subject lines, opening hooks, value propositions, CTAs, and the psychology behind emails that get replies.",
    thumbnailGradient: "from-amber-400 to-orange-400",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "how-i-built-a-7-figure-agency-on-cold-email",
    title: "How I Built a 7-Figure Agency on Cold Email",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["scaling-agency"],
    views: "156K",
    duration: "20:15",
    publishedDate: "Feb 10, 2026",
    description:
      "The full story of building a 7-figure agency powered by cold email — the systems, the hires, the failures, and the playbook that made it work.",
    thumbnailGradient: "from-orange-400 to-amber-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "the-3-line-cold-email-that-books-meetings",
    title: "The 3-Line Cold Email That Books Meetings",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["copywriting-sequences", "reply-management"],
    views: "72K",
    duration: "7:30",
    publishedDate: "Mar 20, 2026",
    description:
      "Why shorter emails outperform longer ones, and the exact 3-line framework Alex uses to book meetings with enterprise decision-makers.",
    thumbnailGradient: "from-amber-500 to-yellow-400",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "linkedin-outreach-cold-email-3x-replies",
    title: "LinkedIn Outreach + Cold Email = 3x Replies",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["multichannel", "copywriting-sequences"],
    views: "38K",
    duration: "12:45",
    publishedDate: "Mar 8, 2026",
    description:
      "The multi-channel approach that triples reply rates — how to sequence LinkedIn touches with cold email for maximum impact.",
    thumbnailGradient: "from-orange-400 to-rose-400",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "cold-email-infrastructure-for-beginners",
    title: "Cold Email Infrastructure for Beginners",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["infrastructure", "deliverability-warmup"],
    views: "54K",
    duration: "17:20",
    publishedDate: "Jan 28, 2026",
    description:
      "Everything a beginner needs to know about cold email infrastructure — buying domains, setting up mailboxes, configuring DNS, and warming accounts.",
    thumbnailGradient: "from-amber-400 to-orange-500",
    youtubeUrl: "#",
    mentionedToolSlugs: [],
  },
  {
    slug: "list-building-with-apollo-io-step-by-step",
    title: "List Building with Apollo.io (Step by Step)",
    creatorSlug: "alex-berman",
    creatorName: "Alex Berman",
    topicSlugs: ["list-building", "data-enrichment"],
    views: "29K",
    duration: "14:00",
    publishedDate: "Feb 22, 2026",
    description:
      "A step-by-step tutorial on using Apollo.io to build targeted B2B prospect lists — from defining your ICP to exporting verified contacts.",
    thumbnailGradient: "from-yellow-400 to-amber-500",
    youtubeUrl: "#",
    mentionedToolSlugs: ["apollo"],
  },
]

// Helper functions

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug)
}

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug)
}

export function getVideosByTopic(topicSlug: string): Video[] {
  return videos.filter((v) => v.topicSlugs.includes(topicSlug))
}

export function getVideosByCreator(creatorSlug: string): Video[] {
  return videos.filter((v) => v.creatorSlug === creatorSlug)
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

export function getRecentVideos(count: number): Video[] {
  return [...videos]
    .sort(
      (a, b) =>
        parseDate(b.publishedDate).getTime() -
        parseDate(a.publishedDate).getTime(),
    )
    .slice(0, count)
}

export function getAllTopics(): Topic[] {
  return topics
}

export function getRelatedVideos(videoSlug: string, count: number): Video[] {
  const video = getVideoBySlug(videoSlug)
  if (!video) return []

  const scored = videos
    .filter((v) => v.slug !== videoSlug)
    .map((v) => {
      const sharedTopics = v.topicSlugs.filter((t) =>
        video.topicSlugs.includes(t),
      ).length
      return { video: v, score: sharedTopics }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, count).map((s) => s.video)
}
