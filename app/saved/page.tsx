"use client";

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
        subtitle={`${savedInternships.length} internship(s) saved`}
      />

      {savedInternships.length > 0 ? (
        <InternshipGrid internships={savedInternships} />
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-12 text-center">
          <h2 className="text-2xl font-semibold">No Saved Internships</h2>

          <p className="mt-3 text-gray-600">
            Save internships from the home page to see them here.
          </p>
        </div>
      )}
    </main>
  );
}
