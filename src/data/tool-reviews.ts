import type { ToolReview } from "@/lib/types";

export const toolReviews: ToolReview[] = [
  {
    id: "tr-1",
    toolSlug: "instantly",
    reviewerName: "Derek Huang",
    reviewerEmail: "derek@saleshq.io",
    reviewerTitle: "Head of Outbound",
    reviewerCompany: "SalesHQ",
    rating: 5,
    title: "Best cold email platform we've used",
    body: "We switched from Lemlist to Instantly about 8 months ago and haven't looked back. The warmup network is legit — our deliverability went from ~40% inbox placement to over 80% within the first two weeks. Campaign management is intuitive, and the unified inbox saves us hours every week. The only thing I wish they'd improve is the CRM integration, but the core sending product is rock solid.",
    useCase: "Agency outbound for B2B SaaS clients",
    usageDuration: "6-12 months",
    status: "approved",
    createdAt: "2026-03-10T14:30:00Z",
  },
  {
    id: "tr-2",
    toolSlug: "instantly",
    reviewerName: "Maria Kowalski",
    reviewerEmail: "maria@outboundlab.com",
    reviewerTitle: "Founder",
    reviewerCompany: "OutboundLab",
    rating: 4,
    title: "Great for scale, a few rough edges",
    body: "Instantly handles volume better than any tool I've tested. We're running 50+ inboxes across 12 client accounts and it just works. The warmup is automatic and the analytics are clear. My only gripe is that the Lead Finder database quality is inconsistent — we still use Clay for enrichment. But as a sending platform, it's hard to beat at this price point.",
    useCase: "Multi-client cold email agency",
    usageDuration: "1-2 years",
    status: "approved",
    createdAt: "2026-03-15T09:00:00Z",
  },
  {
    id: "tr-3",
    toolSlug: "instantly",
    reviewerName: "Tom Bradley",
    reviewerEmail: "tom@revops.co",
    reviewerTitle: "SDR Manager",
    reviewerCompany: "RevOps.co",
    rating: 5,
    title: "Scaled our SDR team from 5 to 40 meetings/month",
    body: "We were doing manual outreach with Gmail before Instantly. Night and day difference. The inbox rotation means we never hit sending limits, and A/B testing helped us find messaging that actually converts. Our team went from booking 5 meetings a month to consistently hitting 40+. Setup took about a day and the support team was responsive when we had questions.",
    useCase: "SDR team prospecting for mid-market SaaS",
    usageDuration: "6-12 months",
    status: "approved",
    createdAt: "2026-03-18T16:45:00Z",
  },
  {
    id: "tr-4",
    toolSlug: "instantly",
    reviewerName: "Aisha Patel",
    reviewerEmail: "aisha@growthnow.io",
    reviewerTitle: "Growth Lead",
    reviewerCompany: "GrowthNow",
    rating: 5,
    title: "The warmup alone is worth the price",
    body: "Honestly, we signed up mostly for the warmup network and stayed for everything else. Our domains were getting killed before Instantly — now we maintain 85%+ inbox placement across 20 accounts. The campaign builder is clean and the analytics tell you exactly what's working. Huge fan of this product and the team behind it.",
    useCase: "B2B lead generation for startups",
    usageDuration: "Less than 6 months",
    status: "approved",
    createdAt: "2026-03-22T11:20:00Z",
  },
  {
    id: "tr-5",
    toolSlug: "instantly",
    reviewerName: "Jake Morrison",
    reviewerEmail: "jake@closedeal.co",
    rating: 4,
    title: "Solid platform, wish the CRM was better",
    body: "The sending infrastructure is great but I really wish the built-in CRM was more mature. We end up exporting leads to HubSpot which adds friction to our workflow. That said, the core email sending, warmup, and inbox rotation features are best-in-class. If they nail the CRM piece, this becomes the only tool you need for outbound.",
    useCase: "Outbound sales for a SaaS startup",
    usageDuration: "1-2 years",
    status: "pending",
    createdAt: "2026-03-25T08:10:00Z",
  },
  {
    id: "tr-6",
    toolSlug: "clay",
    reviewerName: "Sophie Chen",
    reviewerEmail: "sophie@datadriven.agency",
    reviewerTitle: "CEO",
    reviewerCompany: "DataDriven Agency",
    rating: 5,
    title: "Changed how we do outbound forever",
    body: "Clay is the single most impactful tool we've added to our stack. The waterfall enrichment means we're getting 95%+ email find rates, and the AI personalization features let us write first lines that actually feel human. Yes, it has a learning curve, and yes, credits add up — but the ROI is insane. Our reply rates went from 3% to 11% after switching to Clay-powered workflows.",
    useCase: "Enrichment and personalization for agency clients",
    usageDuration: "1-2 years",
    status: "approved",
    createdAt: "2026-03-08T10:15:00Z",
  },
  {
    id: "tr-7",
    toolSlug: "clay",
    reviewerName: "Ryan Torres",
    reviewerEmail: "ryan@signalops.io",
    reviewerTitle: "GTM Engineer",
    reviewerCompany: "SignalOps",
    rating: 5,
    title: "If you do outbound and don't use Clay, you're behind",
    body: "I've built over 50 Clay workflows for various clients and the platform just keeps getting better. The ability to chain data providers, run AI enrichment, and output directly to your sending tool is unmatched. The community templates save tons of time, and the support team actually understands GTM use cases. Only downside is credit consumption on complex workflows — budget accordingly.",
    useCase: "Building GTM automation workflows for B2B companies",
    usageDuration: "2+ years",
    status: "approved",
    createdAt: "2026-03-14T14:00:00Z",
  },
  {
    id: "tr-8",
    toolSlug: "clay",
    reviewerName: "Nina Fernandez",
    reviewerEmail: "nina@leadcraft.co",
    reviewerTitle: "Operations Manager",
    reviewerCompany: "LeadCraft",
    rating: 4,
    title: "Powerful but steep learning curve",
    body: "Clay can do basically anything you need for enrichment and data workflows, but be prepared to invest time learning it. We spent about two weeks getting comfortable before we could build workflows confidently. Once you get past that, it's incredibly powerful. The 100+ data integrations mean you rarely hit a dead end, and the AI features keep improving. Worth the investment if you're serious about outbound.",
    useCase: "Prospect enrichment and list building",
    usageDuration: "6-12 months",
    status: "approved",
    createdAt: "2026-03-20T09:30:00Z",
  },
];

export function getToolReviewsBySlug(toolSlug: string): ToolReview[] {
  return toolReviews.filter((r) => r.toolSlug === toolSlug);
}

export function getApprovedToolReviews(toolSlug: string): ToolReview[] {
  return toolReviews
    .filter((r) => r.toolSlug === toolSlug && r.status === "approved")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export function getToolReviewStats(toolSlug: string) {
  const approved = getApprovedToolReviews(toolSlug);
  if (approved.length === 0) return null;
  const avg =
    approved.reduce((sum, r) => sum + r.rating, 0) / approved.length;
  return {
    average: Math.round(avg * 10) / 10,
    count: approved.length,
  };
}

export function getAllToolReviews(): ToolReview[] {
  return [...toolReviews].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
