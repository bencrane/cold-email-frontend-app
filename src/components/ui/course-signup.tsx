"use client";

import { useState } from "react";

export default function CourseSignup() {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="relative z-10 mx-auto flex max-w-[420px] gap-2.5"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="flex-1 rounded-[var(--radius-sm)] border border-white/12 bg-white/6 px-4 py-[13px] text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/30"
      />
      <button
        type="submit"
        className="cursor-pointer whitespace-nowrap rounded-[var(--radius-sm)] border-none bg-white px-6 py-[13px] text-sm font-semibold text-text-primary transition-colors hover:bg-surface-hover"
      >
        Start Free Course
      </button>
    </form>
  );
}
