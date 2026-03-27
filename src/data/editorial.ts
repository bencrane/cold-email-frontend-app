import type { EditorialContent, EditorialType } from "@/lib/types";

export const editorialContent: EditorialContent[] = [
  {
    slug: "growthengine-8m-emails",
    title: "How GrowthEngineX Sends 8M Cold Emails a Month",
    description:
      "Inside the infrastructure, tooling, and Clay workflows that power one of the highest-volume outbound agencies in the game.",
    type: "playbook",
    tag: "Agency Playbook",
    readTime: "12 min read",
    publishedAt: "2026-03-27",
    featured: true,
    coverStyle: "blue",
    tools: ["instantly", "clay", "smartlead"],
    agencies: ["growthengine"],
    subject: {
      name: "Marcus Chen",
      role: "Founder & CEO",
      company: "GrowthEngineX",
      url: "https://growthenginex.com",
      linkedinUrl: "https://linkedin.com/in/marcuschen",
    },
  },
  {
    slug: "instantly-vs-smartlead-2026",
    title: "Instantly vs SmartLead: The 2026 Breakdown",
    description:
      "Pricing, deliverability, infrastructure control, and which one actually fits your setup. No affiliate bias.",
    type: "breakdown",
    tag: "Tool Breakdown",
    readTime: "8 min read",
    publishedAt: "2026-03-27",
    featured: false,
    coverStyle: "dark",
    tools: ["instantly", "smartlead"],
  },
];

export function getEditorialBySlug(
  slug: string,
): EditorialContent | undefined {
  return editorialContent.find((e) => e.slug === slug);
}

export function getEditorialByType(type: EditorialType): EditorialContent[] {
  return editorialContent
    .filter((e) => e.type === type)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getFeaturedEditorial(): EditorialContent[] {
  return editorialContent
    .filter((e) => e.featured)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getAllEditorialSorted(): EditorialContent[] {
  return [...editorialContent].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
