import { createMetadata } from "@/lib/seo";
import ToolsPageContent from "@/components/tools/ToolsPageContent";

export const metadata = createMetadata({
  title: "Cold Email Tools",
  description:
    "Browse and compare the best cold email tools — sending platforms, data enrichment, automation, and more. Independent reviews with no affiliate bias.",
  path: "/tools",
});

export default function ToolsPage() {
  return <ToolsPageContent />;
}
