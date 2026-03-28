"use client";

import { useState } from "react";
import type { LinkedInPostTopic } from "@/lib/types";
import { LINKEDIN_TOPICS } from "@/lib/types";
import TopicFilterPills from "@/components/linkedin/TopicFilterPills";
import LinkedInFeedGrid from "@/components/linkedin/LinkedInFeedGrid";

export default function FeedPage() {
  const [activeTopic, setActiveTopic] = useState<LinkedInPostTopic | null>(
    null,
  );

  return (
    <main className="mx-auto max-w-[var(--max-width)] px-6 pb-20 pt-12">
      <div className="mb-10">
        <h1 className="mb-3 font-display text-[clamp(36px,4vw,48px)] font-normal tracking-[-1px] text-text-primary">
          What&rsquo;s happening in outbound
        </h1>
        <p className="max-w-[560px] text-base leading-[1.65] text-text-secondary">
          Latest from the practitioners who do this every day.
        </p>
      </div>

      <div className="mb-8">
        <TopicFilterPills
          topics={LINKEDIN_TOPICS}
          activeTopic={activeTopic}
          onSelect={(topic) => setActiveTopic(topic as LinkedInPostTopic | null)}
        />
      </div>

      <LinkedInFeedGrid topic={activeTopic} />
    </main>
  );
}
