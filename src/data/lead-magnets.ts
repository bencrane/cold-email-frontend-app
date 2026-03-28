import type { LeadMagnet } from "@/lib/types";
import { leadMagnets as dashboardLeadMagnets } from "./dashboard";

// Re-export all lead magnets as the public LeadMagnet type
// (strips dashboard-only fields like views/submissions/name)
export const allLeadMagnets: LeadMagnet[] = dashboardLeadMagnets;

export function getLeadMagnet(
  agencySlug: string,
  magnetSlug: string
): LeadMagnet | undefined {
  return allLeadMagnets.find(
    (lm) => lm.agencySlug === agencySlug && lm.slug === magnetSlug && lm.status === "live"
  );
}
