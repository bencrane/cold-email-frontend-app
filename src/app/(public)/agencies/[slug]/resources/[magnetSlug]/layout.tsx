import type { Metadata } from "next";
import { allLeadMagnets } from "@/data/lead-magnets";
import { agencies } from "@/data/agencies";

const SITE_URL = "https://coldemail.com";

export function generateStaticParams() {
  return allLeadMagnets
    .filter((lm) => lm.status === "live")
    .map((lm) => ({
      slug: lm.agencySlug,
      magnetSlug: lm.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; magnetSlug: string }>;
}): Promise<Metadata> {
  const { slug, magnetSlug } = await params;
  const magnet = allLeadMagnets.find(
    (lm) => lm.agencySlug === slug && lm.slug === magnetSlug
  );

  if (!magnet) {
    return { title: "Not Found — ColdEmail.com" };
  }

  const canonicalUrl = `${SITE_URL}/agencies/${slug}/resources/${magnetSlug}`;
  const agencyName =
    agencies.find((a) => a.slug === slug)?.name ?? slug;

  return {
    title: `${magnet.title} — ${agencyName} | ColdEmail.com`,
    description: magnet.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: magnet.title,
      description: magnet.description,
      url: canonicalUrl,
      siteName: "ColdEmail.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: magnet.title,
      description: magnet.description,
    },
    ...(magnet.noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export default function LeadMagnetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
