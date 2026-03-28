import type { LinkedInCreator } from "@/lib/types";

export const linkedInCreators: LinkedInCreator[] = [
  {
    slug: "eric-nowoslawski",
    name: "Eric Nowoslawski",
    initials: "EN",
    headline: "Clay Expert & Outbound Strategist",
    linkedinUrl: "https://www.linkedin.com/in/ericnowoslawski/",
    active: true,
  },
  {
    slug: "saad-khan",
    name: "Saad Khan",
    initials: "SK",
    headline: "Founder @ Extractify | Cold Email Infrastructure",
    linkedinUrl: "https://www.linkedin.com/in/saadkhaan/",
    active: true,
  },
  {
    slug: "nick-saraev",
    name: "Nick Saraev",
    initials: "NS",
    headline: "Automation & AI for Outbound at Scale",
    linkedinUrl: "https://www.linkedin.com/in/nicksaraev/",
    active: true,
  },
  {
    slug: "alex-berman",
    name: "Alex Berman",
    initials: "AB",
    headline: "CEO @ Omni Lab | Cold Email Agency",
    linkedinUrl: "https://www.linkedin.com/in/alexberman/",
    active: true,
  },
  {
    slug: "kyle-coleman",
    name: "Kyle Coleman",
    initials: "KC",
    headline: "CMO @ Copy.ai | GTM Strategy",
    linkedinUrl: "https://www.linkedin.com/in/kyletcoleman/",
    active: true,
  },
  {
    slug: "nils-schneider",
    name: "Nils Schneider",
    initials: "NS",
    headline: "Co-founder @ Instantly.ai",
    linkedinUrl: "https://www.linkedin.com/in/nils-schneider/",
    active: true,
  },
  {
    slug: "ryan-reisert",
    name: "Ryan Reisert",
    initials: "RR",
    headline: "Outbound Sales Expert & Author",
    linkedinUrl: "https://www.linkedin.com/in/ryanreisert/",
    active: true,
  },
  {
    slug: "patrick-dang",
    name: "Patrick Dang",
    initials: "PD",
    headline: "Sales Coach & Cold Email Educator",
    linkedinUrl: "https://www.linkedin.com/in/patrickdang/",
    active: true,
  },
  {
    slug: "rohan-varma",
    name: "Rohan Varma",
    initials: "RV",
    headline: "Growth @ Clay | Data Enrichment",
    linkedinUrl: "https://www.linkedin.com/in/rohanvarma/",
    active: true,
  },
  {
    slug: "jesse-ouellette",
    name: "Jesse Ouellette",
    initials: "JO",
    headline: "Founder @ LeadMagic | B2B Data",
    linkedinUrl: "https://www.linkedin.com/in/jesseouellette/",
    active: true,
  },
  {
    slug: "tyler-hickey",
    name: "Tyler Hickey",
    initials: "TH",
    headline: "Cold Email Deliverability Consultant",
    linkedinUrl: "https://www.linkedin.com/in/tylerhickey/",
    active: true,
  },
  {
    slug: "zach-penty",
    name: "Zach Penty",
    initials: "ZP",
    headline: "Outbound Agency Operator",
    linkedinUrl: "https://www.linkedin.com/in/zachpenty/",
    active: true,
  },
  {
    slug: "smartlead-vaibhav",
    name: "Vaibhav Namburi",
    initials: "VN",
    headline: "Founder @ SmartLead.ai",
    linkedinUrl: "https://www.linkedin.com/in/vaibhavnamburi/",
    active: true,
  },
  {
    slug: "josh-braun",
    name: "Josh Braun",
    initials: "JB",
    headline: "Sales Messaging & Cold Email Copywriting",
    linkedinUrl: "https://www.linkedin.com/in/joshbraun/",
    active: true,
  },
  {
    slug: "jeremy-chatelaine",
    name: "Jeremy Chatelaine",
    initials: "JC",
    headline: "Founder @ QuickMail | Deliverability",
    linkedinUrl: "https://www.linkedin.com/in/jeremychatelaine/",
    active: true,
  },
  {
    slug: "cody-greer",
    name: "Cody Greer",
    initials: "CG",
    headline: "Outbound at Scale | Agency Growth",
    linkedinUrl: "https://www.linkedin.com/in/codygreer/",
    active: true,
  },
  {
    slug: "rob-lira",
    name: "Rob Lira",
    initials: "RL",
    headline: "Cold Email Infrastructure & Scaling",
    linkedinUrl: "https://www.linkedin.com/in/roblira/",
    active: true,
  },
];

export function getCreatorBySlug(
  slug: string,
): LinkedInCreator | undefined {
  return linkedInCreators.find((c) => c.slug === slug);
}

export function getActiveCreators(): LinkedInCreator[] {
  return linkedInCreators.filter((c) => c.active);
}
