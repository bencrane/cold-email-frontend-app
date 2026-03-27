import { tools, toolCategories } from "@/data/tools";
import ToolFilter from "@/components/tool-filter";

export default function ToolsPage() {
  return (
    <div className="min-h-screen text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Cold Email Tools
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            The complete directory of tools for outbound.
          </p>
        </div>

        {/* Filter + Grid (Client Component) */}
        <ToolFilter tools={tools} categories={toolCategories} />

        {/* Missing Tool CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Missing a tool?{" "}
            <a
              href="mailto:hello@coldemail.com"
              className="text-blue-600 transition hover:text-blue-700"
            >
              Let us know &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
