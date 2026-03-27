import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ColdEmail.com — The Home for Everything Outbound",
  description:
    "Your resource hub for cold email strategies, tools, and expert insights. Discover the best outbound techniques from top creators and agencies.",
  openGraph: {
    title: "ColdEmail.com — The Home for Everything Outbound",
    description:
      "Your resource hub for cold email strategies, tools, and expert insights. Discover the best outbound techniques from top creators and agencies.",
    siteName: "ColdEmail.com",
    type: "website",
  },
};

const navLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/creators", label: "Creators" },
  { href: "/learn", label: "Learn" },
  { href: "/agencies", label: "Agencies" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {/* Navigation */}
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Wordmark */}
            <Link href="/" className="text-lg font-bold text-gray-900">
              ColdEmail.com
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/subscribe"
                className="rounded-md bg-blue-600 px-3.5 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </Link>
            </div>

            {/* Mobile nav */}
            <MobileNav />
          </nav>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6 text-center">
              {/* Footer wordmark */}
              <Link href="/" className="text-lg font-bold text-gray-900">
                ColdEmail.com
              </Link>

              {/* Footer nav */}
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Tagline */}
              <p className="max-w-md text-sm text-gray-500">
                Your resource hub for cold email strategies and tools
              </p>

              {/* Copyright */}
              <p className="text-xs text-gray-400">
                &copy; 2026 ColdEmail.com
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
