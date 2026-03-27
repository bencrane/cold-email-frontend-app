import type { Metadata } from "next";
import { agencyProfile, leadMagnets } from "@/data/dashboard";
import { agencies } from "@/data/agencies";

const SITE_URL = "https://coldemail.com";

export function generateStaticParams() {
  const params: { slug: string; magnetSlug: string }[] = [];
  for (const agency of agencies) {
    for (const lm of leadMagnets) {
      params.push({ slug: agency.slug, magnetSlug: lm.slug });
    }
  }
  // Also include the dashboard agency profile slug
  if (!agencies.some((a) => a.slug === agencyProfile.slug)) {
    for (const lm of leadMagnets) {
      params.push({ slug: agencyProfile.slug, magnetSlug: lm.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; magnetSlug: string }>;
}): Promise<Metadata> {
  const { slug, magnetSlug } = await params;
  const magnet = leadMagnets.find((lm) => lm.slug === magnetSlug);

  if (!magnet) {
    return { title: "Not Found — ColdEmail.com" };
  }

  const canonicalUrl = `${SITE_URL}/agencies/${slug}/resources/${magnetSlug}`;
  const agencyName = agencies.find((a) => a.slug === slug)?.name ?? agencyProfile.name;

  return {
    title: `${magnet.pageTitle} — ${agencyName} | ColdEmail.com`,
    description: magnet.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: magnet.pageTitle,
      description: magnet.description,
      url: canonicalUrl,
      siteName: "ColdEmail.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: magnet.pageTitle,
      description: magnet.description,
    },
    ...(magnet.noIndex && {
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
