import { NextResponse } from "next/server";
import { getLeadMagnet } from "@/data/lead-magnets";

interface CapturePayload {
  agency_slug: string;
  magnet_slug: string;
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export async function POST(request: Request) {
  let body: CapturePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { agency_slug, magnet_slug, email } = body;

  if (!agency_slug || !magnet_slug || !email) {
    return NextResponse.json(
      { error: "agency_slug, magnet_slug, and email are required" },
      { status: 400 }
    );
  }

  const magnet = getLeadMagnet(agency_slug, magnet_slug);
  if (!magnet) {
    return NextResponse.json(
      { error: "Lead magnet not found" },
      { status: 404 }
    );
  }

  // In production this would write to the leads table in Supabase.
  // For now, log the capture.
  console.log("[lead-capture]", {
    agency_slug,
    magnet_slug,
    email,
    name: body.name ?? null,
    phone: body.phone ?? null,
    company: body.company ?? null,
    utm_source: body.utm_source ?? null,
    utm_medium: body.utm_medium ?? null,
    utm_campaign: body.utm_campaign ?? null,
    utm_term: body.utm_term ?? null,
    utm_content: body.utm_content ?? null,
    captured_at: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    content_url: magnet.contentUrl,
    content_type: magnet.contentType,
  });
}
