"use client";

import { useState, useMemo } from "react";
import { profileViews, leadMagnets, leads } from "@/data/dashboard";

type Range = "7d" | "30d" | "90d" | "all";

export default function AnalyticsPage() {
  const [range, setRange] = useState<Range>("30d");

  const filteredViews = useMemo(() => {
    if (range === "all") return profileViews;
    const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
    return profileViews.slice(-days);
  }, [range]);

  const totalViews = filteredViews.reduce((s, d) => s + d.views, 0);
  const maxViews = Math.max(...filteredViews.map((d) => d.views));

  // SVG line chart dimensions
  const chartW = 800;
  const chartH = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 45 };
  const innerW = chartW - padding.left - padding.right;
  const innerH = chartH - padding.top - padding.bottom;

  const points = filteredViews.map((d, i) => {
    const x = padding.left + (i / Math.max(filteredViews.length - 1, 1)) * innerW;
    const y = padding.top + innerH - (d.views / (maxViews || 1)) * innerH;
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1]?.x ?? 0} ${padding.top + innerH} L ${points[0]?.x ?? 0} ${padding.top + innerH} Z`;

  // Lead magnet analytics
  const magnetStats = leadMagnets.map((lm) => {
    const lmLeads = leads.filter((l) => l.leadMagnetId === lm.id);
    return {
      ...lm,
      leadCount: lmLeads.length,
      rate: lm.views > 0 ? ((lm.submissions / lm.views) * 100).toFixed(1) : "0",
    };
  });

  const maxMagnetViews = Math.max(...magnetStats.map((m) => m.views));

  const rangeButtons: { label: string; value: Range }[] = [
    { label: "7 days", value: "7d" },
    { label: "30 days", value: "30d" },
    { label: "90 days", value: "90d" },
    { label: "All time", value: "all" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Analytics</h1>
          <p className="mt-1 text-sm text-text-tertiary">Track your profile and lead magnet performance.</p>
        </div>
        <div className="flex gap-1 rounded-lg border border-border bg-surface p-1">
          {rangeButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setRange(btn.value)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                range === btn.value
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:bg-bg"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Profile Analytics */}
      <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-text-primary">Profile Views</h2>
          <p className="text-2xl font-bold text-text-primary">{totalViews.toLocaleString()}</p>
        </div>
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct) => {
            const y = padding.top + innerH * (1 - pct);
            return (
              <g key={pct}>
                <line x1={padding.left} y1={y} x2={chartW - padding.right} y2={y} stroke="#f3f4f6" strokeWidth={1} />
                <text x={padding.left - 8} y={y + 4} textAnchor="end" className="fill-gray-400" fontSize={10}>
                  {Math.round(maxViews * pct)}
                </text>
              </g>
            );
          })}
          {/* Area fill */}
          <path d={areaPath} fill="url(#blueGradient)" />
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#2563eb" stopOpacity={0.01} />
            </linearGradient>
          </defs>
          {/* Line */}
          <path d={linePath} fill="none" stroke="#2563eb" strokeWidth={2} strokeLinejoin="round" />
          {/* Data points */}
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={2.5} fill="#2563eb" />
          ))}
          {/* X-axis labels */}
          {points
            .filter((_, i) => i % Math.max(1, Math.floor(points.length / 6)) === 0 || i === points.length - 1)
            .map((p) => (
              <text key={p.date} x={p.x} y={chartH - 5} textAnchor="middle" className="fill-gray-400" fontSize={10}>
                {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </text>
            ))}
        </svg>
      </div>

      {/* Lead Magnet Analytics */}
      <div className="rounded-[var(--radius)] border border-border bg-surface p-5">
        <h2 className="mb-4 text-base font-semibold text-text-primary">Lead Magnet Performance</h2>

        {/* Bar chart - views vs submissions */}
        <div className="mb-6 space-y-4">
          {magnetStats.map((m) => (
            <div key={m.id} className="space-y-1.5">
              <p className="text-sm font-medium text-text-secondary">{m.name}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-5 rounded bg-surface-muted">
                    <div
                      className="h-5 rounded bg-accent"
                      style={{ width: `${(m.views / (maxMagnetViews || 1)) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="w-16 text-right text-xs text-text-tertiary">{m.views.toLocaleString()} views</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-5 rounded bg-surface-muted">
                    <div
                      className="h-5 rounded bg-accent-muted"
                      style={{ width: `${(m.submissions / (maxMagnetViews || 1)) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="w-16 text-right text-xs text-text-tertiary">{m.submissions.toLocaleString()} subs</span>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-4 text-xs text-text-tertiary">
            <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded bg-accent" /> Views</span>
            <span className="flex items-center gap-1"><span className="inline-block h-2.5 w-2.5 rounded bg-accent-muted" /> Submissions</span>
          </div>
        </div>

        {/* Performance table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-wider text-text-tertiary">
                <th className="px-3 py-2">Lead Magnet</th>
                <th className="px-3 py-2 text-right">Views</th>
                <th className="px-3 py-2 text-right">Submissions</th>
                <th className="px-3 py-2 text-right">Conv. Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {magnetStats.map((m) => (
                <tr key={m.id} className="hover:bg-bg">
                  <td className="px-3 py-2 font-medium text-text-primary">{m.name}</td>
                  <td className="px-3 py-2 text-right text-text-secondary">{m.views.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-text-secondary">{m.submissions.toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-text-secondary">{m.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
