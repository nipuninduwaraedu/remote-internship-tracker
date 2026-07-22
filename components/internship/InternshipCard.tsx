import Link from "next/link";
import { Internship } from "@/types/internship";

interface InternshipCardProps {
  internship: Internship;
}

export default function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <p className="text-sm font-medium text-blue-600">{internship.company}</p>

      <h3 className="mt-2 text-xl font-bold text-gray-900">
        {internship.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {internship.tags.slice(0, 5).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-600">
        Salary: {internship.salary ?? "Not specified"}
      </p>

      <p className="mt-1 text-sm text-gray-600">
        Posted: {new Date(internship.postedDate).toLocaleDateString()}
      </p>

      <Link
        href={internship.applyUrl}
        target="_blank"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Apply Now
      </Link>
    </article>
  );
}
