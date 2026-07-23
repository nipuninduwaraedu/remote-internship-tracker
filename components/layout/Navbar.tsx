"use client";

import Link from "next/link";
import useSavedCount from "@/hooks/useSavedCount";

export default function Navbar() {
  const savedCount = useSavedCount();

  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          InternHub
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/saved" className="hover:text-blue-600">
            Saved ({savedCount})
          </Link>
        </div>
      </nav>
    </header>
  );
}
