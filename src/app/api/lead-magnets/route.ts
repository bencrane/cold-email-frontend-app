import { NextResponse } from "next/server";
import { addLeadMagnet } from "@/data/dashboard";
import type { LeadMagnet } from "@/lib/types";

interface CreatePayload {
  title: string;
  description: string;
  contentType: LeadMagnet["contentType"];
  contentUrl: string;
  formFields: { name: boolean; phone: boolean; company: boolean };
  buttonText: string;
  thankYouMessage: string;
  slug: string;
  status: "draft" | "live";
}

export async function POST(request: Request) {
  let body: CreatePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { title, slug, contentType, contentUrl, status } = body;

  if (!title || !slug || !contentType) {
    return NextResponse.json(
      { error: "title, slug, and contentType are required" },
      { status: 400 }
    );
  }

  if (
    (contentType === "video" || contentType === "external_link") &&
    !contentUrl
  ) {
    return NextResponse.json(
      { error: "contentUrl is required for video and external_link types" },
      { status: 400 }
    );
  }

  const id = `lm-${Date.now()}`;

  addLeadMagnet({
    id,
    agencySlug: "growthenginex",
    slug,
    name: title,
    title,
    description: body.description ?? "",
    contentType,
    contentUrl: contentUrl ?? "",
    formFields: body.formFields ?? { name: false, phone: false, company: false },
    buttonText: body.buttonText || "Get Access",
    thankYouMessage: body.thankYouMessage || "Thanks! Your content is ready.",
    status: status ?? "draft",
    noindex: status === "draft",
    views: 0,
    submissions: 0,
    createdAt: new Date().toISOString().split("T")[0],
  });

  return NextResponse.json({ success: true, id, slug });
}
