import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "What's Happening in Outbound",
  description:
    "The latest cold email insights, tips, and breakdowns from top outbound practitioners.",
  path: "/feed",
});

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
