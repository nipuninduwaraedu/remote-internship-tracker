"use client";

import Link from "next/link";
import useSavedCount from "@/hooks/useSavedCount";

export default function Navbar() {
  const savedCount = useSavedCount();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-4 lg:px-8">
        <Link href="/" className="text-xl font-bold text-blue-600 sm:text-2xl">
          InternHub
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-4 sm:text-base">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>

          <Link href="/saved" className="transition hover:text-blue-600">
            Saved ({savedCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}
