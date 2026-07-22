import { Internship } from "@/types/internship";
import InternshipCard from "./InternshipCard";

interface InternshipGridProps {
  internships: Internship[];
}

export default function InternshipGrid({
  internships,
}: InternshipGridProps) {
  if (internships.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center">
        <h3 className="text-xl font-semibold">
          No internships found
        </h3>

        <p className="mt-2 text-gray-500">
          Try another search keyword.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {internships.map((internship) => (
        <InternshipCard
          key={internship.id}
          internship={internship}
        />
      ))}
    </section>
  );
}