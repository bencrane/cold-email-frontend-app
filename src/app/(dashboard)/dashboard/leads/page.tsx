"use client";

import { useState, useMemo } from "react";
import { leads, leadMagnets } from "@/data/dashboard";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

type SortKey = "name" | "email" | "company" | "leadMagnetName" | "capturedAt";
type SortDir = "asc" | "desc";

export default function LeadsPage() {
  const [search, setSearch] = useState("");
  const [filterMagnet, setFilterMagnet] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("capturedAt");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = leads;
    if (filterMagnet !== "all") {
      result = result.filter((l) => l.leadMagnetId === filterMagnet);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.email.toLowerCase().includes(q)
      );
    }
    result = [...result].sort((a, b) => {
      const aVal = a[sortKey] ?? "";
      const bVal = b[sortKey] ?? "";
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return result;
  }, [search, filterMagnet, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function exportCSV() {
    const headers = ["Name", "Email", "Phone", "Company", "Lead Magnet", "Captured At"];
    const rows = filtered.map((l) => [
      l.name,
      l.email,
      l.phone ?? "",
      l.company ?? "",
      l.leadMagnetName,
      l.capturedAt,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  const sortIcon = (key: SortKey) =>
    sortKey === key ? (sortDir === "asc" ? " ↑" : " ↓") : "";

  const inputClass =
    "rounded-lg border border-border px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">Leads</h1>
          <p className="mt-1 text-sm text-text-tertiary">
            {filtered.length} lead{filtered.length !== 1 ? "s" : ""} captured across all lead magnets.
          </p>
        </div>
        <button
          onClick={exportCSV}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text-secondary transition hover:bg-bg"
        >
          Export to CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`${inputClass} w-64`}
        />
        <select
          value={filterMagnet}
          onChange={(e) => setFilterMagnet(e.target.value)}
          className={inputClass}
        >
          <option value="all">All Lead Magnets</option>
          {leadMagnets.map((lm) => (
            <option key={lm.id} value={lm.id}>
              {lm.name}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="rounded-[var(--radius)] border border-border bg-surface">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase tracking-wider text-text-tertiary">
                {(
                  [
                    ["name", "Name"],
                    ["email", "Email"],
                    ["company", "Company"],
                    ["leadMagnetName", "Lead Magnet"],
                    ["capturedAt", "Captured At"],
                  ] as [SortKey, string][]
                ).map(([key, label]) => (
                  <th key={key} className="px-5 py-3">
                    <button
                      onClick={() => handleSort(key)}
                      className="inline-flex items-center gap-1 hover:text-text-secondary"
                    >
                      {label}
                      {sortIcon(key)}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light">
              {filtered.map((lead) => (
                <>
                  <tr
                    key={lead.id}
                    onClick={() =>
                      setExpandedId(expandedId === lead.id ? null : lead.id)
                    }
                    className="cursor-pointer hover:bg-bg"
                  >
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-text-primary">
                      {lead.name}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-text-secondary">
                      {lead.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-text-secondary">
                      {lead.company ?? "—"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-text-secondary">
                      {lead.leadMagnetName}
                    </td>
                    <td className="whitespace-nowrap px-5 py-3 text-text-tertiary">
                      {formatDate(lead.capturedAt)}
                    </td>
                  </tr>
                  {expandedId === lead.id && (
                    <tr key={`${lead.id}-detail`}>
                      <td colSpan={5} className="bg-bg px-5 py-4">
                        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
                          <div>
                            <p className="text-xs font-medium text-text-tertiary">Full Name</p>
                            <p className="text-text-primary">{lead.name}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-text-tertiary">Email</p>
                            <p className="text-text-primary">{lead.email}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-text-tertiary">Phone</p>
                            <p className="text-text-primary">{lead.phone ?? "Not provided"}</p>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-text-tertiary">Company</p>
                            <p className="text-text-primary">{lead.company ?? "Not provided"}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
