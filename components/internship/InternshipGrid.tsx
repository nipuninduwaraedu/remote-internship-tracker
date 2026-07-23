import { Internship } from "@/types/internship";
import InternshipCard from "./InternshipCard";

interface InternshipGridProps {
  internships: Internship[];
}

export default function InternshipGrid({ internships }: InternshipGridProps) {
  if (internships.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center sm:mt-12 sm:p-12">
        <div className="text-5xl sm:text-6xl">🔍</div>

        <h2 className="mt-6 text-xl font-bold text-gray-800 sm:text-2xl">
          No internships found
        </h2>

        <p className="mt-3 text-sm text-gray-500 sm:text-base">
          Try another keyword or choose a different technology.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
      {internships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </div>
  );
}
