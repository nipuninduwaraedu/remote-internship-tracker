"use client";

import { useMemo, useState } from "react";

import { Internship } from "@/types/internship";

import SearchBar from "@/components/home/SearchBar";
import PopularTags from "@/components/home/PopularTags";

import InternshipGrid from "./InternshipGrid";
import SectionHeading from "./SectionHeading";

interface InternshipSectionProps {
  internships: Internship[];
}

export default function InternshipSection({
  internships,
}: InternshipSectionProps) {
  const [search, setSearch] = useState("");

  const filteredInternships = useMemo(() => {
    if (!search.trim()) return internships;

    const keyword = search.toLowerCase();

    return internships.filter((internship) => {
      return (
        internship.title.toLowerCase().includes(keyword) ||
        internship.company.toLowerCase().includes(keyword) ||
        internship.tags.some((tag) => tag.toLowerCase().includes(keyword))
      );
    });
  }, [internships, search]);

  return (
    <section className="mt-16">
      <SearchBar value={search} onChange={setSearch} />

      <PopularTags onSelectTag={setSearch} />

      <SectionHeading
        title="Latest Remote Internships"
        subtitle={`${filteredInternships.length} internships found`}
      />

      <InternshipGrid internships={filteredInternships} />
    </section>
  );
}
