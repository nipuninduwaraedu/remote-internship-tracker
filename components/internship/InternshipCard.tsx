import Link from "next/link";

import { Internship } from "@/types/internship";
import { formatDate } from "@/utils/formatDate";

interface InternshipCardProps {
  internship: Internship;
}

export default function InternshipCard({ internship }: InternshipCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-semibold text-blue-600">
        {internship.company}
      </p>

      <h3 className="mt-2 text-xl font-bold text-gray-900">
        {internship.title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {internship.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-5 text-sm text-gray-600">
        Salary:
        <span className="font-medium">
          {" "}
          {internship.salary ?? "Not specified"}
        </span>
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Posted {formatDate(internship.postedDate)}
      </p>

      <Link
        href={`/internships/${internship.id}`}
        className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        More Details
      </Link>
    </article>
  );
}
