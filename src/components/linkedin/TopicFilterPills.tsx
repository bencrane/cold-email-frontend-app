"use client";

export default function TopicFilterPills({
  topics,
  activeTopic,
  onSelect,
}: {
  topics: string[];
  activeTopic: string | null;
  onSelect: (topic: string | null) => void;
}) {
  return (
    <div className="scrollbar-hide flex flex-wrap gap-2 overflow-x-auto">
      <button
        onClick={() => onSelect(null)}
        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
          activeTopic === null
            ? "bg-text-primary text-surface"
            : "bg-surface-muted text-text-secondary hover:bg-surface-hover hover:text-text-primary"
        }`}
      >
        All
      </button>
      {topics.map((topic) => (
        <button
          key={topic}
          onClick={() => onSelect(topic)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            activeTopic === topic
              ? "bg-text-primary text-surface"
              : "bg-surface-muted text-text-secondary hover:bg-surface-hover hover:text-text-primary"
          }`}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
