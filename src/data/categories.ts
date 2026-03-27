import type { ToolCategory } from "@/lib/types";

export const categories: ToolCategory[] = [
  {
    slug: "cold-email",
    name: "Cold Email",
    description: "Platforms for sending, managing, and optimizing cold email campaigns at scale.",
    tools: ["instantly", "smartlead", "lemlist"],
  },
  {
    slug: "email-sending",
    name: "Email Sending",
    description: "Infrastructure and tools for sending outbound emails with high deliverability.",
    tools: ["instantly", "smartlead", "lemlist"],
  },
  {
    slug: "data-enrichment",
    name: "Data Enrichment",
    description: "Tools for enriching prospect data with emails, phone numbers, company info, and intent signals.",
    tools: ["clay", "apollo", "leadmagic"],
  },
  {
    slug: "automation",
    name: "Automation",
    description: "Workflow automation tools that connect your outbound stack and eliminate manual work.",
    tools: ["clay"],
  },
  {
    slug: "crm",
    name: "CRM",
    description: "Customer relationship management platforms for tracking deals and managing pipelines.",
    tools: ["apollo"],
  },
  {
    slug: "deanonymization",
    name: "Deanonymization",
    description: "Tools that identify anonymous website visitors and turn them into actionable leads.",
    tools: ["leadmagic"],
  },
];

export function getCategoryBySlug(slug: string): ToolCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
