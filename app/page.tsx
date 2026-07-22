import Hero from "@/components/home/Hero";
import InternshipSection from "@/components/internship/InternshipSection";

import { getInternships } from "@/services/remoteOk";

export default async function HomePage() {
  const internships = await getInternships();

  return (
    <main>
      <Hero />

      <InternshipSection internships={internships} />
    </main>
  );
}