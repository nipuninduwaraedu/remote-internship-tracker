import { Internship } from "@/types/internship";
import InternshipCard from "./InternshipCard";

interface InternshipGridProps {
  internships: Internship[];
}

export default function InternshipGrid({ internships }: InternshipGridProps) {
  if (internships.length === 0) {
    return (
      <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
        <div className="text-6xl">🔍</div>

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          No internships found
        </h2>

        <p className="mt-3 text-gray-500">
          Try another keyword or choose a different technology.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
}
