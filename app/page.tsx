import Hero from "@/components/home/Hero";
import SearchBar from "@/components/home/SearchBar";
import PopularTags from "@/components/home/PopularTags";
import SectionHeading from "@/components/internship/SectionHeading";
import InternshipGrid from "@/components/internship/InternshipGrid";

import { getInternships } from "@/services/remoteOk";

export default async function HomePage() {
  const internships = await getInternships();

  return (
    <main>
      <Hero />
      <SearchBar />
      <PopularTags />

      <SectionHeading
        title="Latest Internships"
        subtitle="Browse the newest remote internship opportunities."
      />

      <InternshipGrid internships={internships} />
    </main>
  );
}