import type { LinkedInPost, LinkedInPostTopic } from "@/lib/types";

export const linkedInPosts: LinkedInPost[] = [
  // --- Deliverability ---
  {
    id: "lp-001",
    creatorSlug: "tyler-hickey",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:001",
    content:
      "Your open rates tanked overnight? Before you blame your copy, check your DNS. 90% of the deliverability issues I debug come down to misconfigured SPF or DKIM records. Takes 5 minutes to fix, saves your entire campaign.",
    likes: 847,
    comments: 92,
    topic: "Deliverability",
    postedAt: "2026-03-27T09:30:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-002",
    creatorSlug: "jeremy-chatelaine",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:002",
    content:
      "We tracked 2.4M emails across 180 accounts last month. The data is clear: accounts that warm up for 21+ days before sending have 3.2x better inbox placement than those that start at 14 days. Patience pays.",
    likes: 1243,
    comments: 156,
    topic: "Deliverability",
    postedAt: "2026-03-26T14:15:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-003",
    creatorSlug: "rob-lira",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:003",
    content:
      "Stop sending from your main domain. I don't care how good your warmup is. One spam complaint on your primary domain and your entire company email reputation is toast. Secondary domains cost $12/year. Use them.",
    likes: 634,
    comments: 78,
    topic: "Deliverability",
    postedAt: "2026-03-24T11:00:00Z",
    fetchedAt: "2026-03-25T08:00:00Z",
  },
  {
    id: "lp-004",
    creatorSlug: "nils-schneider",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:004",
    content:
      "Google just rolled out new sender requirements for bulk email. If you're sending 5,000+ messages/day you need one-click unsubscribe headers. We've already updated Instantly to handle this automatically.",
    likes: 1876,
    comments: 189,
    topic: "Deliverability",
    postedAt: "2026-03-22T16:45:00Z",
    fetchedAt: "2026-03-23T08:00:00Z",
  },
  {
    id: "lp-005",
    creatorSlug: "tyler-hickey",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:005",
    content:
      "Inbox rotation is not a deliverability strategy. It's a band-aid. If you need to rotate through 50 inboxes to hit volume, you have a reputation problem. Fix the root cause: your sending patterns and content.",
    likes: 523,
    comments: 67,
    topic: "Deliverability",
    postedAt: "2026-03-20T08:30:00Z",
    fetchedAt: "2026-03-20T12:00:00Z",
  },

  // --- Clay & Enrichment ---
  {
    id: "lp-006",
    creatorSlug: "eric-nowoslawski",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:006",
    content:
      "Built a Clay workflow that finds companies hiring for SDRs on LinkedIn, enriches the VP Sales contact, checks their tech stack for outbound tools, and writes a personalized first line. 200 leads/day on autopilot.",
    likes: 1567,
    comments: 134,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-27T07:00:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-007",
    creatorSlug: "rohan-varma",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:007",
    content:
      "The #1 mistake I see with Clay: people try to enrich everything at once. Start with your highest-signal data point, filter aggressively, then enrich the survivors. You'll save 80% on credits and get better data.",
    likes: 892,
    comments: 103,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-25T13:20:00Z",
    fetchedAt: "2026-03-26T08:00:00Z",
  },
  {
    id: "lp-008",
    creatorSlug: "jesse-ouellette",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:008",
    content:
      "Waterfall enrichment is the only way to get 90%+ email coverage. We chain Prospeo → Dropcontact → Hunter → Findymail in that order. Each one catches what the others miss. Single-provider enrichment tops out at 60%.",
    likes: 745,
    comments: 88,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-23T10:00:00Z",
    fetchedAt: "2026-03-24T08:00:00Z",
  },
  {
    id: "lp-009",
    creatorSlug: "eric-nowoslawski",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:009",
    content:
      "Clay tip: use the HTTP request action to hit any API, not just the built-in integrations. I pull G2 reviews, job postings from Greenhouse, and funding data from Crunchbase — all in one table. The flexibility is insane.",
    likes: 1102,
    comments: 119,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-21T15:30:00Z",
    fetchedAt: "2026-03-22T08:00:00Z",
  },
  {
    id: "lp-010",
    creatorSlug: "rohan-varma",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:010",
    content:
      "Just shipped: Clay now supports conditional enrichment paths. If the company is >500 employees, run enrichment path A. If <500, run path B. Different ICP segments, different data needs, one workflow.",
    likes: 1340,
    comments: 145,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-18T09:00:00Z",
    fetchedAt: "2026-03-18T12:00:00Z",
  },

  // --- Copywriting ---
  {
    id: "lp-011",
    creatorSlug: "josh-braun",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:011",
    content:
      "The best cold emails don't sell. They start conversations. Instead of 'We help companies like yours increase revenue by 40%' try 'Noticed you're hiring 3 AEs — is outbound part of the plan or are you going inbound-first?'",
    likes: 1923,
    comments: 178,
    topic: "Copywriting",
    postedAt: "2026-03-27T06:00:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-012",
    creatorSlug: "patrick-dang",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:012",
    content:
      "Your subject line has one job: get the email opened. Stop trying to be clever. 'Quick question about [Company]' still outperforms 90% of the creative subject lines I test. Boring works.",
    likes: 678,
    comments: 54,
    topic: "Copywriting",
    postedAt: "2026-03-26T10:45:00Z",
    fetchedAt: "2026-03-27T08:00:00Z",
  },
  {
    id: "lp-013",
    creatorSlug: "alex-berman",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:013",
    content:
      "Tested 12 different CTA styles across 50K emails last month. 'Worth a chat?' crushed everything. 23% reply rate vs 11% for the next best. Soft CTAs win because they lower the commitment ask.",
    likes: 1456,
    comments: 167,
    topic: "Copywriting",
    postedAt: "2026-03-24T08:15:00Z",
    fetchedAt: "2026-03-25T08:00:00Z",
  },
  {
    id: "lp-014",
    creatorSlug: "josh-braun",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:014",
    content:
      "If your cold email is longer than 4 sentences, it's too long. People scan, they don't read. First line: relevance. Second line: observation. Third line: value. Fourth line: CTA. That's it.",
    likes: 2134,
    comments: 198,
    topic: "Copywriting",
    postedAt: "2026-03-21T07:30:00Z",
    fetchedAt: "2026-03-22T08:00:00Z",
  },
  {
    id: "lp-015",
    creatorSlug: "ryan-reisert",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:015",
    content:
      "Personalization that actually works isn't 'Hey {firstName}.' It's referencing something specific — a podcast they were on, a post they wrote, a hire they made. Takes 30 seconds per lead. Doubles your reply rate.",
    likes: 934,
    comments: 87,
    topic: "Copywriting",
    postedAt: "2026-03-19T14:00:00Z",
    fetchedAt: "2026-03-20T08:00:00Z",
  },

  // --- Infrastructure ---
  {
    id: "lp-016",
    creatorSlug: "rob-lira",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:016",
    content:
      "My infrastructure setup for 100K emails/month: 30 domains, 3 mailboxes each, Google Workspace. Total cost: ~$2,100/month. Each mailbox sends max 40/day. Never been blacklisted in 18 months.",
    likes: 1678,
    comments: 143,
    topic: "Infrastructure",
    postedAt: "2026-03-26T08:00:00Z",
    fetchedAt: "2026-03-27T08:00:00Z",
  },
  {
    id: "lp-017",
    creatorSlug: "saad-khan",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:017",
    content:
      "Outlook vs Google Workspace for cold email in 2026: Google still wins on deliverability for B2B tech. Outlook is better for enterprise and .edu targets. Match your infrastructure to your ICP.",
    likes: 567,
    comments: 72,
    topic: "Infrastructure",
    postedAt: "2026-03-25T11:30:00Z",
    fetchedAt: "2026-03-26T08:00:00Z",
  },
  {
    id: "lp-018",
    creatorSlug: "smartlead-vaibhav",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:018",
    content:
      "Just launched unified inbox 2.0 at SmartLead. Replies from all your sending accounts in one view, auto-categorized by sentiment. Positive replies surface first so your team closes faster.",
    likes: 823,
    comments: 94,
    topic: "Infrastructure",
    postedAt: "2026-03-23T09:15:00Z",
    fetchedAt: "2026-03-24T08:00:00Z",
  },
  {
    id: "lp-019",
    creatorSlug: "nils-schneider",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:019",
    content:
      "The biggest infrastructure mistake: buying cheap domains from random registrars. Stick with Namecheap, Cloudflare, or Google Domains. Domain age and registrar reputation matter for deliverability.",
    likes: 456,
    comments: 51,
    topic: "Infrastructure",
    postedAt: "2026-03-20T15:00:00Z",
    fetchedAt: "2026-03-21T08:00:00Z",
  },
  {
    id: "lp-020",
    creatorSlug: "rob-lira",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:020",
    content:
      "DMARC policy set to p=none is the same as having no DMARC. Set it to p=quarantine at minimum. Yes, it's scary. Yes, it's necessary. Monitor with EasyDMARC for 2 weeks first, then flip the switch.",
    likes: 389,
    comments: 44,
    topic: "Infrastructure",
    postedAt: "2026-03-17T10:00:00Z",
    fetchedAt: "2026-03-18T08:00:00Z",
  },

  // --- Automation ---
  {
    id: "lp-021",
    creatorSlug: "nick-saraev",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:021",
    content:
      "Built an n8n workflow that monitors G2 for new reviews of competitor products, enriches the reviewer in Clay, and adds them to a targeted Instantly campaign within 2 hours. Warm intent + fast execution = meetings.",
    likes: 1345,
    comments: 121,
    topic: "Automation",
    postedAt: "2026-03-27T08:00:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-022",
    creatorSlug: "nick-saraev",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:022",
    content:
      "The Make vs n8n vs Zapier debate for outbound automation: Zapier for simple triggers. Make for visual workflows. n8n for anything that needs custom code or runs at volume. Pick based on your technical comfort.",
    likes: 789,
    comments: 95,
    topic: "Automation",
    postedAt: "2026-03-24T12:00:00Z",
    fetchedAt: "2026-03-25T08:00:00Z",
  },
  {
    id: "lp-023",
    creatorSlug: "eric-nowoslawski",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:023",
    content:
      "Webhook + Clay + Instantly is the holy trinity of outbound automation. Trigger on any event (new signup, form fill, job posting), enrich in Clay, push to a sequence. Zero manual work after setup.",
    likes: 1089,
    comments: 98,
    topic: "Automation",
    postedAt: "2026-03-22T14:30:00Z",
    fetchedAt: "2026-03-23T08:00:00Z",
  },
  {
    id: "lp-024",
    creatorSlug: "kyle-coleman",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:024",
    content:
      "AI-generated emails are table stakes now. The competitive edge is AI-generated sequences that adapt based on engagement signals. If they opened email 2 but didn't reply, email 3 should acknowledge that differently.",
    likes: 934,
    comments: 112,
    topic: "Automation",
    postedAt: "2026-03-19T09:45:00Z",
    fetchedAt: "2026-03-20T08:00:00Z",
  },
  {
    id: "lp-025",
    creatorSlug: "jesse-ouellette",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:025",
    content:
      "If you're manually uploading CSV files to your sequencer in 2026, you're leaving money on the table. API integrations between your enrichment and sending tools should run on autopilot. Set it once.",
    likes: 412,
    comments: 38,
    topic: "Automation",
    postedAt: "2026-03-16T11:00:00Z",
    fetchedAt: "2026-03-17T08:00:00Z",
  },

  // --- Scaling ---
  {
    id: "lp-026",
    creatorSlug: "alex-berman",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:026",
    content:
      "Scaled from 10K to 500K emails/month in 6 months. The secret wasn't more domains or better copy. It was segmentation. 20 micro-campaigns of 25K beats 1 blast of 500K every single time.",
    likes: 1876,
    comments: 167,
    topic: "Scaling",
    postedAt: "2026-03-26T07:30:00Z",
    fetchedAt: "2026-03-27T08:00:00Z",
  },
  {
    id: "lp-027",
    creatorSlug: "cody-greer",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:027",
    content:
      "Growing an outbound agency past $50K MRR requires one thing: systems. If your campaign setup takes more than 30 minutes, if your reporting is manual, if your client onboarding isn't templated — you won't scale.",
    likes: 723,
    comments: 89,
    topic: "Scaling",
    postedAt: "2026-03-25T08:45:00Z",
    fetchedAt: "2026-03-26T08:00:00Z",
  },
  {
    id: "lp-028",
    creatorSlug: "ryan-reisert",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:028",
    content:
      "Reply rates drop when you scale because you sacrifice personalization for volume. The fix: tier your leads. Top 20% get manual personalization. Middle 60% get AI personalization. Bottom 20% get template only.",
    likes: 567,
    comments: 64,
    topic: "Scaling",
    postedAt: "2026-03-23T13:00:00Z",
    fetchedAt: "2026-03-24T08:00:00Z",
  },
  {
    id: "lp-029",
    creatorSlug: "saad-khan",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:029",
    content:
      "Went from 5 to 50 sending accounts in a month. Biggest learning: stagger your warmup. Don't start all 50 on the same day. Start 5 per week over 10 weeks. Your domain reputation will thank you.",
    likes: 478,
    comments: 53,
    topic: "Scaling",
    postedAt: "2026-03-20T10:30:00Z",
    fetchedAt: "2026-03-21T08:00:00Z",
  },
  {
    id: "lp-030",
    creatorSlug: "zach-penty",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:030",
    content:
      "We send 2M+ cold emails per month across 40 clients. The one metric I obsess over isn't reply rate — it's meetings booked per 1,000 emails sent. If that number drops, everything upstream is broken.",
    likes: 1234,
    comments: 142,
    topic: "Scaling",
    postedAt: "2026-03-18T07:00:00Z",
    fetchedAt: "2026-03-19T08:00:00Z",
  },

  // --- Tools ---
  {
    id: "lp-031",
    creatorSlug: "smartlead-vaibhav",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:031",
    content:
      "SmartLead just hit 30,000 active users. When we launched 2 years ago, people said the market was saturated. Turns out there's always room for a product that solves a real problem better. Keep building.",
    likes: 1567,
    comments: 134,
    topic: "Tools",
    postedAt: "2026-03-27T10:00:00Z",
    fetchedAt: "2026-03-27T12:00:00Z",
  },
  {
    id: "lp-032",
    creatorSlug: "jeremy-chatelaine",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:032",
    content:
      "QuickMail vs Instantly vs SmartLead — I'm biased but here's my honest take: Instantly for simplicity at scale. SmartLead for power users who want control. QuickMail for agencies who need white-label and deliverability.",
    likes: 923,
    comments: 145,
    topic: "Tools",
    postedAt: "2026-03-25T15:30:00Z",
    fetchedAt: "2026-03-26T08:00:00Z",
  },
  {
    id: "lp-033",
    creatorSlug: "jesse-ouellette",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:033",
    content:
      "LeadMagic just launched real-time email verification on enrichment. No more bounced emails from stale data. Verify at the point of enrichment, not as a separate step. Saves time and credits.",
    likes: 645,
    comments: 72,
    topic: "Tools",
    postedAt: "2026-03-22T11:15:00Z",
    fetchedAt: "2026-03-23T08:00:00Z",
  },
  {
    id: "lp-034",
    creatorSlug: "kyle-coleman",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:034",
    content:
      "The cold email tool stack is converging. Every sequencer is adding enrichment, every enrichment tool is adding sequences. In 12 months, the winners will be the ones with the best data moat, not the best UI.",
    likes: 1123,
    comments: 98,
    topic: "Tools",
    postedAt: "2026-03-19T16:00:00Z",
    fetchedAt: "2026-03-20T08:00:00Z",
  },
  {
    id: "lp-035",
    creatorSlug: "nils-schneider",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:035",
    content:
      "We're launching Instantly's lead database next week. 160M+ verified B2B contacts, built-in enrichment, and direct push to campaigns. No more juggling 4 different tools to build a list.",
    likes: 1890,
    comments: 201,
    topic: "Tools",
    postedAt: "2026-03-17T08:30:00Z",
    fetchedAt: "2026-03-18T08:00:00Z",
  },

  // --- Agency Ops ---
  {
    id: "lp-036",
    creatorSlug: "zach-penty",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:036",
    content:
      "Running an outbound agency is a margin game. Infrastructure costs, tool subscriptions, and VA salaries eat into your retainer fast. If you're not tracking cost per meeting booked, you're flying blind.",
    likes: 567,
    comments: 64,
    topic: "Agency Ops",
    postedAt: "2026-03-26T12:00:00Z",
    fetchedAt: "2026-03-27T08:00:00Z",
  },
  {
    id: "lp-037",
    creatorSlug: "cody-greer",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:037",
    content:
      "Client churn in outbound agencies comes from one place: misaligned expectations. If the client thinks you're booking 30 meetings/month and you know 8-12 is realistic, that's a retention problem from day one.",
    likes: 834,
    comments: 97,
    topic: "Agency Ops",
    postedAt: "2026-03-24T09:30:00Z",
    fetchedAt: "2026-03-25T08:00:00Z",
  },
  {
    id: "lp-038",
    creatorSlug: "alex-berman",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:038",
    content:
      "Charging per meeting booked instead of a flat retainer changed our agency. Clients are happier because they only pay for results. We're happier because top performers earn more. Align incentives, win together.",
    likes: 1345,
    comments: 156,
    topic: "Agency Ops",
    postedAt: "2026-03-22T07:45:00Z",
    fetchedAt: "2026-03-23T08:00:00Z",
  },
  {
    id: "lp-039",
    creatorSlug: "patrick-dang",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:039",
    content:
      "Hiring your first campaign manager? Look for someone who's run their own cold email campaigns, not someone with 'SDR experience' at a big company. Outbound agency work is scrappy. You need builders, not process followers.",
    likes: 456,
    comments: 52,
    topic: "Agency Ops",
    postedAt: "2026-03-20T13:00:00Z",
    fetchedAt: "2026-03-21T08:00:00Z",
  },
  {
    id: "lp-040",
    creatorSlug: "zach-penty",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:040",
    content:
      "White-labeling your sequencer is the fastest way to look legit as a new agency. Clients don't want to see SmartLead or Instantly in their reports. They want to see YOUR brand. QuickMail and SmartLead both offer this.",
    likes: 345,
    comments: 41,
    topic: "Agency Ops",
    postedAt: "2026-03-17T14:30:00Z",
    fetchedAt: "2026-03-18T08:00:00Z",
  },

  // --- Additional posts for coverage ---
  {
    id: "lp-041",
    creatorSlug: "saad-khan",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:041",
    content:
      "Custom tracking domains are non-negotiable in 2026. Shared tracking domains are spam traps waiting to happen. Set up your own CNAME, point it to your sequencer's tracking server. 10 minutes of work.",
    likes: 389,
    comments: 45,
    topic: "Deliverability",
    postedAt: "2026-03-15T09:00:00Z",
    fetchedAt: "2026-03-16T08:00:00Z",
  },
  {
    id: "lp-042",
    creatorSlug: "nick-saraev",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:042",
    content:
      "New automation trick: use GPT-4o to classify incoming replies by intent (interested, not now, unsubscribe, wrong person) and auto-route them. Interested → CRM. Not now → nurture sequence. Wrong person → suppression list.",
    likes: 1123,
    comments: 108,
    topic: "Automation",
    postedAt: "2026-03-14T10:30:00Z",
    fetchedAt: "2026-03-15T08:00:00Z",
  },
  {
    id: "lp-043",
    creatorSlug: "patrick-dang",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:043",
    content:
      "The 3-email sequence outperforms the 7-email sequence for enterprise prospects. Decision-makers don't have time for 7 touches. Make your 3 emails count: value, proof, direct ask. Move on if no response.",
    likes: 712,
    comments: 83,
    topic: "Copywriting",
    postedAt: "2026-03-15T12:15:00Z",
    fetchedAt: "2026-03-16T08:00:00Z",
  },
  {
    id: "lp-044",
    creatorSlug: "rohan-varma",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:044",
    content:
      "Clay's new AI column just got way better. You can now run multi-step reasoning — 'look at their website, identify their ICP, then write a relevant first line.' One column replaces what used to take three.",
    likes: 967,
    comments: 89,
    topic: "Clay & Enrichment",
    postedAt: "2026-03-14T14:00:00Z",
    fetchedAt: "2026-03-15T08:00:00Z",
  },
  {
    id: "lp-045",
    creatorSlug: "cody-greer",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:045",
    content:
      "Signed 3 new agency clients this week by offering a free 1,000-email pilot. Zero risk for them, costs us maybe $50 in infrastructure. If we book meetings, they sign a 6-month contract. Best sales motion we've ever run.",
    likes: 678,
    comments: 76,
    topic: "Agency Ops",
    postedAt: "2026-03-16T08:00:00Z",
    fetchedAt: "2026-03-17T08:00:00Z",
  },
  {
    id: "lp-046",
    creatorSlug: "josh-braun",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:046",
    content:
      "Cold email is not spam. Spam is unsolicited bulk email with no relevance. A well-researched, personalized email to someone who fits your ICP and would genuinely benefit from your offer is just... outreach. There's a difference.",
    likes: 2345,
    comments: 213,
    topic: "Copywriting",
    postedAt: "2026-03-16T06:30:00Z",
    fetchedAt: "2026-03-17T08:00:00Z",
  },
  {
    id: "lp-047",
    creatorSlug: "ryan-reisert",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:047",
    content:
      "Scaling to 50K emails/month? Here's the math: 50 domains × 3 mailboxes × 11 emails/mailbox/day = ~50K/month. Warmup all mailboxes for 3 weeks. Budget: ~$3,500/month all-in. That's the proven formula.",
    likes: 856,
    comments: 94,
    topic: "Scaling",
    postedAt: "2026-03-15T11:00:00Z",
    fetchedAt: "2026-03-16T08:00:00Z",
  },
  {
    id: "lp-048",
    creatorSlug: "jeremy-chatelaine",
    linkedinPostUrl: "https://www.linkedin.com/feed/update/urn:li:activity:048",
    content:
      "Inbox placement testing should be part of every campaign launch. Send test emails to seed accounts across Gmail, Outlook, and Yahoo before going live. A 5-minute check saves your entire campaign from landing in spam.",
    likes: 534,
    comments: 61,
    topic: "Tools",
    postedAt: "2026-03-14T08:45:00Z",
    fetchedAt: "2026-03-15T08:00:00Z",
  },
];

export function getRecentPosts(limit?: number): LinkedInPost[] {
  const sorted = [...linkedInPosts].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
  );
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getPostsByTopic(topic: LinkedInPostTopic): LinkedInPost[] {
  return linkedInPosts
    .filter((p) => p.topic === topic)
    .sort(
      (a, b) =>
        new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
    );
}

export function getPostsByCreator(creatorSlug: string): LinkedInPost[] {
  return linkedInPosts
    .filter((p) => p.creatorSlug === creatorSlug)
    .sort(
      (a, b) =>
        new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
    );
}

export function getPostsForFeed(
  topic: LinkedInPostTopic | null,
  limit?: number,
): LinkedInPost[] {
  const filtered = topic
    ? linkedInPosts.filter((p) => p.topic === topic)
    : linkedInPosts;
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
