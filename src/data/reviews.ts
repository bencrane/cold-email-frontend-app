export type Review = {
  id: string;
  agencySlug: string;
  name: string;
  jobTitle: string;
  company: string;
  text: string;
  rating: number | null;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
};

export const reviews: Review[] = [
  {
    id: "r-1",
    agencySlug: "growthenginex",
    name: "Chris Donovan",
    jobTitle: "CEO",
    company: "ScaleOps",
    text: "Absolutely stellar results. Within 60 days our outbound pipeline tripled and the quality of meetings improved dramatically. Highly recommend.",
    rating: 5,
    status: "approved",
    submittedAt: "2026-03-10T14:22:00Z",
  },
  {
    id: "r-2",
    agencySlug: "growthenginex",
    name: "Tanya Morrison",
    jobTitle: "Head of Demand Gen",
    company: "FinLead",
    text: "GrowthEngineX helped us crack into enterprise accounts we'd been chasing for months. Their signal-based approach is the real deal.",
    rating: 5,
    status: "pending",
    submittedAt: "2026-03-22T09:15:00Z",
  },
  {
    id: "r-3",
    agencySlug: "growthenginex",
    name: "Sam Patel",
    jobTitle: "VP Revenue",
    company: "Clearbit",
    text: "Good agency, solid deliverability work. Reply rates are above industry average. Would like to see more creative in the copy.",
    rating: 4,
    status: "pending",
    submittedAt: "2026-03-25T11:40:00Z",
  },
  {
    id: "r-4",
    agencySlug: "growthenginex",
    name: "Rebecca Ortiz",
    jobTitle: "Marketing Director",
    company: "NexGen SaaS",
    text: "We tested three agencies and GrowthEngineX was the only one that actually moved the needle. 4x more meetings booked in month two.",
    rating: 5,
    status: "pending",
    submittedAt: "2026-03-26T16:08:00Z",
  },
];

export function getReviewsByAgency(slug: string) {
  return reviews.filter((r) => r.agencySlug === slug);
}

export function getPendingReviews(slug: string) {
  return reviews.filter((r) => r.agencySlug === slug && r.status === "pending");
}

export function getApprovedReviews(slug: string) {
  return reviews.filter((r) => r.agencySlug === slug && r.status === "approved");
}
