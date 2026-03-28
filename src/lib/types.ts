export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  url: string;
  affiliateUrl?: string;
  categories: string[];
  pricing: { plan: string; price: string; features: string[] }[];
  founded?: string;
  bestFor?: string;
  prosAndCons: { good: string[]; watchOut: string[] };
  comparisons: { tool: string; summary: string }[];
  useCases: { title: string; description: string }[];
  features: string[];
  g2?: { rating: number; reviewCount: number; url: string };
}

export interface ToolReview {
  id: string;
  toolSlug: string;
  reviewerName: string;
  reviewerEmail: string;
  reviewerTitle?: string;
  reviewerCompany?: string;
  rating: number;
  title: string;
  body: string;
  useCase?: string;
  usageDuration?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export interface Agency {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  banner?: string;
  color: string;
  verified: boolean;
  stats: { label: string; value: string }[];
  team: { name: string; role: string; linkedin?: string }[];
  services: { icon: string; title: string; description: string }[];
  caseStudies: {
    label: string;
    headline: string;
    metrics: string[];
  }[];
  testimonials: {
    quote: string;
    name: string;
    title: string;
    company: string;
  }[];
  techStack: string[];
  videos: { title: string; url: string }[];
  bookingUrl?: string;
}

export type EditorialType =
  | "playbook"
  | "spotlight"
  | "breakdown"
  | "guide"
  | "opinion";

export type CoverStyle = "dark" | "blue" | "neutral";

export interface EditorialSubject {
  name: string;
  role: string;
  company: string;
  url: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

export interface VideoSource {
  title: string;
  url: string;
  creator: string;
}

export interface EditorialContent {
  slug: string;
  title: string;
  description: string;
  type: EditorialType;
  tag: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
  coverStyle: CoverStyle;
  tools?: string[];
  agencies?: string[];
  subject?: EditorialSubject;
  videoSource?: VideoSource;
}

/** @deprecated Use EditorialContent instead */
export type Playbook = EditorialContent;

export interface ToolCategory {
  slug: string;
  name: string;
  description: string;
  tools: string[];
}

export type LinkedInPostTopic =
  | "Deliverability"
  | "Clay & Enrichment"
  | "Copywriting"
  | "Infrastructure"
  | "Automation"
  | "Scaling"
  | "Tools"
  | "Agency Ops";

export const LINKEDIN_TOPICS: LinkedInPostTopic[] = [
  "Deliverability",
  "Clay & Enrichment",
  "Copywriting",
  "Infrastructure",
  "Automation",
  "Scaling",
  "Tools",
  "Agency Ops",
];

export interface LinkedInCreator {
  slug: string;
  name: string;
  initials: string;
  headline: string;
  linkedinUrl: string;
  avatarUrl?: string;
  active: boolean;
}

export interface LinkedInPost {
  id: string;
  creatorSlug: string;
  linkedinPostUrl: string;
  content: string;
  likes: number;
  comments: number;
  topic: LinkedInPostTopic;
  postedAt: string;
  fetchedAt: string;
}
