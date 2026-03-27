// Demo data for GrowthEngineX agency dashboard

export type LeadMagnet = {
  id: string;
  name: string;
  slug: string;
  status: "live" | "draft";
  contentType: "pdf" | "video" | "link";
  pageTitle: string;
  description: string;
  fileUrl?: string;
  videoUrl?: string;
  linkUrl?: string;
  formFields: { name: boolean; phone: boolean; company: boolean };
  buttonText: string;
  thankYouMessage: string;
  noIndex: boolean;
  views: number;
  submissions: number;
  createdAt: string;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  leadMagnetId: string;
  leadMagnetName: string;
  capturedAt: string;
};

export type DailyViews = { date: string; views: number };

export type TeamMember = {
  name: string;
  role: string;
  linkedinUrl: string;
  initials: string;
};

export type Service = { icon: string; title: string; description: string };

export type CaseStudy = {
  headlineStat: string;
  metrics: string[];
  companyType: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

export const agencyProfile = {
  slug: "growthenginex",
  name: "GrowthEngineX",
  tagline: "Revenue-Focused Cold Email for B2B SaaS",
  description:
    "We help B2B SaaS companies build predictable outbound pipelines through cold email. Our data-driven approach combines intent signals, AI personalization, and multi-channel sequences to book qualified meetings at scale.",
  logo: "GX",
  bannerGradient: "from-blue-600 to-cyan-500",
  bookingUrl: "https://calendly.com/growthenginex/discovery",
  showBookingButton: true,
  publicUrl: "/agencies/growthenginex",
  resourcesUrl: "/agencies/growthenginex/resources",
  team: [
    { name: "Marcus Chen", role: "Founder & CEO", linkedinUrl: "https://linkedin.com/in/marcuschen", initials: "MC" },
    { name: "Sarah Kim", role: "Head of Deliverability", linkedinUrl: "https://linkedin.com/in/sarahkim", initials: "SK" },
    { name: "Jake Torres", role: "Lead Copywriter", linkedinUrl: "https://linkedin.com/in/jaketorres", initials: "JT" },
    { name: "Priya Patel", role: "Data Analyst", linkedinUrl: "https://linkedin.com/in/priyapatel", initials: "PP" },
  ] as TeamMember[],
  services: [
    { icon: "📧", title: "Cold Email Campaigns", description: "End-to-end campaign management from list building to reply handling" },
    { icon: "🎯", title: "Signal-Based Prospecting", description: "Intent data and trigger events to reach buyers at the right moment" },
    { icon: "🔧", title: "Deliverability Optimization", description: "Infrastructure setup, domain warming, and inbox placement monitoring" },
    { icon: "📊", title: "Analytics & Reporting", description: "Weekly performance reports with actionable recommendations" },
  ] as Service[],
  caseStudies: [
    { headlineStat: "312% increase in pipeline", metrics: ["47 meetings/month from cold email", "$2.1M pipeline generated in 90 days", "62% open rate average"], companyType: "Series A SaaS" },
    { headlineStat: "$890K closed from outbound", metrics: ["23% reply rate on cold sequences", "89 SQLs generated in 6 months", "4.2x ROI on agency retainer"], companyType: "B2B Marketplace" },
    { headlineStat: "8x meeting volume", metrics: ["From 5 to 40+ meetings per month", "Scaled to 3 SDRs managed", "Cost per meeting dropped 67%"], companyType: "DevTools Startup" },
  ] as CaseStudy[],
  testimonials: [
    { quote: "GrowthEngineX transformed our outbound. We went from struggling to book 5 meetings a month to consistently landing 40+. Their deliverability expertise is unmatched.", name: "Alex Rivera", title: "VP of Sales", company: "DataStack.io" },
    { quote: "The signal-based approach they use is a game changer. We're reaching prospects exactly when they're evaluating solutions like ours.", name: "Jordan Lee", title: "Head of Growth", company: "Metric Labs" },
  ] as Testimonial[],
  techStack: ["Instantly", "Clay", "Apollo", "Smartlead", "Findymail"],
  videos: ["https://youtube.com/watch?v=example1", "https://youtube.com/watch?v=example2"],
};

export const leadMagnets: LeadMagnet[] = [
  {
    id: "lm-1",
    name: "The Cold Email Deliverability Checklist",
    slug: "deliverability-checklist",
    status: "live",
    contentType: "pdf",
    pageTitle: "The Ultimate Cold Email Deliverability Checklist",
    description: "42-point checklist to ensure your cold emails land in the primary inbox every time. Covers DNS setup, warming protocols, content optimization, and monitoring.",
    fileUrl: "/files/deliverability-checklist.pdf",
    formFields: { name: true, phone: false, company: true },
    buttonText: "Download the Checklist",
    thankYouMessage: "Your checklist is ready! Click the button below to download.",
    noIndex: false,
    views: 1847,
    submissions: 312,
    createdAt: "2026-02-15",
  },
  {
    id: "lm-2",
    name: "8M Subject Line Swipe File",
    slug: "subject-line-swipe-file",
    status: "live",
    contentType: "pdf",
    pageTitle: "8 Million Emails Analyzed: The Subject Line Swipe File",
    description: "We analyzed 8 million cold emails to find the subject lines that actually get opened. Get our top 50 performing templates with fill-in-the-blank formulas.",
    fileUrl: "/files/subject-line-swipe-file.pdf",
    formFields: { name: true, phone: false, company: false },
    buttonText: "Get the Swipe File",
    thankYouMessage: "Here's your swipe file! Start using these subject lines today.",
    noIndex: false,
    views: 3214,
    submissions: 589,
    createdAt: "2026-01-22",
  },
  {
    id: "lm-3",
    name: "Signal-Based Prospecting Masterclass",
    slug: "signal-prospecting-masterclass",
    status: "live",
    contentType: "video",
    pageTitle: "Signal-Based Prospecting Masterclass",
    description: "45-minute deep dive into how we use intent signals, job changes, funding events, and tech installs to find prospects who are ready to buy right now.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    formFields: { name: true, phone: true, company: true },
    buttonText: "Watch the Masterclass",
    thankYouMessage: "Enjoy the masterclass! The video is ready to play below.",
    noIndex: false,
    views: 956,
    submissions: 178,
    createdAt: "2026-03-05",
  },
];

export const leads: Lead[] = [
  { id: "l-1", name: "Emily Zhang", email: "emily.zhang@techcorp.io", company: "TechCorp", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-27T09:14:00Z" },
  { id: "l-2", name: "David Park", email: "dpark@salesforce.com", phone: "+1-415-555-0142", company: "Salesforce", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-03-26T16:32:00Z" },
  { id: "l-3", name: "Rachel Morrison", email: "rachel@growthly.co", company: "Growthly", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-26T11:05:00Z" },
  { id: "l-4", name: "James Okafor", email: "james.okafor@revops.dev", company: "RevOps.dev", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-25T14:48:00Z" },
  { id: "l-5", name: "Lisa Chen", email: "lisa@outbound.ai", company: "Outbound AI", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-25T08:22:00Z" },
  { id: "l-6", name: "Tom Westbrook", email: "tom.w@pipeline.so", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-24T17:11:00Z" },
  { id: "l-7", name: "Nina Patel", email: "nina@datastack.io", phone: "+1-650-555-0198", company: "DataStack.io", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-03-23T13:45:00Z" },
  { id: "l-8", name: "Carlos Ruiz", email: "cruiz@closedloop.com", company: "ClosedLoop", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-22T10:30:00Z" },
  { id: "l-9", name: "Sophie Taylor", email: "sophie@leadgen.co", company: "LeadGen Co", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-21T15:55:00Z" },
  { id: "l-10", name: "Andre Williams", email: "andre@metric-labs.com", phone: "+1-212-555-0167", company: "Metric Labs", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-03-20T09:18:00Z" },
  { id: "l-11", name: "Hannah Moore", email: "hmoore@sendscale.io", company: "SendScale", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-19T12:42:00Z" },
  { id: "l-12", name: "Ryan Nakamura", email: "ryan@coldcraft.co", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-18T08:07:00Z" },
  { id: "l-13", name: "Maria Santos", email: "maria.santos@b2bgrow.com", phone: "+1-305-555-0134", company: "B2BGrow", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-03-16T14:29:00Z" },
  { id: "l-14", name: "Kevin O'Brien", email: "kob@replyengine.io", company: "Reply Engine", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-14T11:53:00Z" },
  { id: "l-15", name: "Aisha Johnson", email: "aisha@prospectiq.com", company: "ProspectIQ", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-12T16:14:00Z" },
  { id: "l-16", name: "Mike Brennan", email: "mbrennan@sdrhq.co", phone: "+1-512-555-0189", company: "SDR HQ", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-03-10T10:37:00Z" },
  { id: "l-17", name: "Diana Volkov", email: "diana@inboxwarm.com", company: "InboxWarm", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-08T13:21:00Z" },
  { id: "l-18", name: "Brandon Lee", email: "brandon.lee@sequencelab.io", company: "SequenceLab", leadMagnetId: "lm-2", leadMagnetName: "8M Subject Line Swipe File", capturedAt: "2026-03-05T09:45:00Z" },
  { id: "l-19", name: "Olivia Grant", email: "olivia@smartreach.co", company: "SmartReach", leadMagnetId: "lm-1", leadMagnetName: "The Cold Email Deliverability Checklist", capturedAt: "2026-03-02T15:08:00Z" },
  { id: "l-20", name: "Jason Wu", email: "jwu@coldpipeline.com", phone: "+1-408-555-0156", company: "ColdPipeline", leadMagnetId: "lm-3", leadMagnetName: "Signal-Based Prospecting Masterclass", capturedAt: "2026-02-28T11:33:00Z" },
];

// Profile views per day for the last 30 days
export const profileViews: DailyViews[] = [
  { date: "2026-02-26", views: 34 }, { date: "2026-02-27", views: 41 },
  { date: "2026-02-28", views: 38 }, { date: "2026-03-01", views: 52 },
  { date: "2026-03-02", views: 47 }, { date: "2026-03-03", views: 29 },
  { date: "2026-03-04", views: 33 }, { date: "2026-03-05", views: 58 },
  { date: "2026-03-06", views: 63 }, { date: "2026-03-07", views: 55 },
  { date: "2026-03-08", views: 42 }, { date: "2026-03-09", views: 36 },
  { date: "2026-03-10", views: 44 }, { date: "2026-03-11", views: 51 },
  { date: "2026-03-12", views: 67 }, { date: "2026-03-13", views: 72 },
  { date: "2026-03-14", views: 59 }, { date: "2026-03-15", views: 48 },
  { date: "2026-03-16", views: 39 }, { date: "2026-03-17", views: 45 },
  { date: "2026-03-18", views: 53 }, { date: "2026-03-19", views: 61 },
  { date: "2026-03-20", views: 78 }, { date: "2026-03-21", views: 69 },
  { date: "2026-03-22", views: 57 }, { date: "2026-03-23", views: 43 },
  { date: "2026-03-24", views: 50 }, { date: "2026-03-25", views: 64 },
  { date: "2026-03-26", views: 71 }, { date: "2026-03-27", views: 46 },
];

export const dashboardStats = {
  profileViews: profileViews.reduce((sum, d) => sum + d.views, 0),
  totalLeads: leads.length,
  leadMagnetViews: leadMagnets.reduce((sum, lm) => sum + lm.views, 0),
  conversionRate: (() => {
    const totalViews = leadMagnets.reduce((sum, lm) => sum + lm.views, 0);
    const totalSubs = leadMagnets.reduce((sum, lm) => sum + lm.submissions, 0);
    return totalViews > 0 ? ((totalSubs / totalViews) * 100).toFixed(1) : "0";
  })(),
};

export const settings = {
  bookingUrl: "https://calendly.com/growthenginex/discovery",
  showBookingButton: true,
  emailNotifications: true,
  plan: "Agency Pro",
  renewalDate: "2026-04-15",
};
