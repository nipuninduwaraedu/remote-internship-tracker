"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import InternshipGrid from "@/components/internship/InternshipGrid";
import SectionHeading from "@/components/internship/SectionHeading";

import { Internship } from "@/types/internship";
import { getSavedInternships } from "@/utils/localStorage";

export default function SavedPage() {
  const [savedInternships, setSavedInternships] = useState<Internship[]>([]);

  useEffect(() => {
    setSavedInternships(getSavedInternships());
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <SectionHeading
        title="Saved Internships"
        subtitle={`${savedInternships.length} internship${
          savedInternships.length !== 1 ? "s" : ""
        } saved`}
      />

      {savedInternships.length > 0 ? (
        <InternshipGrid internships={savedInternships} />
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center sm:mt-10 sm:p-10 lg:p-12">
          <div className="text-5xl sm:text-6xl">❤️</div>

          <h2 className="mt-6 text-xl font-bold text-gray-900 sm:text-2xl">
            No Saved Internships
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Save internships from the homepage and they'll appear here.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Browse Internships
          </Link>
        </div>
      )}
    </main>
  );
}
