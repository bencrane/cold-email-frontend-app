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

export interface Playbook {
  slug: string;
  title: string;
  description: string;
  tag: string;
  readTime: string;
  publishedAt: string;
  tools?: string[];
  agencies?: string[];
}

export interface ToolCategory {
  slug: string;
  name: string;
  description: string;
  tools: string[];
}
