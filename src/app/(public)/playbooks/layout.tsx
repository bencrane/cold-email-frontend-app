import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Playbooks",
  description:
    "Deep dives, comparisons, and tactical guides on cold email — from the agencies and operators who do it at scale.",
  path: "/playbooks",
});

export default function PlaybooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
