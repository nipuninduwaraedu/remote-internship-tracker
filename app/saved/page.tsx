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
    <main className="mx-auto max-w-7xl px-6 py-10">
      <SectionHeading
        title="Saved Internships"
        subtitle={`${savedInternships.length} internship${
          savedInternships.length !== 1 ? "s" : ""
        } saved`}
      />

      {savedInternships.length > 0 ? (
        <InternshipGrid internships={savedInternships} />
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <div className="text-6xl">❤️</div>

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            No Saved Internships
          </h2>

          <p className="mt-3 text-gray-500">
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