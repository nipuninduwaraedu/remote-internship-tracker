import Link from "next/link";

import { Internship } from "@/types/internship";
import DetailBadge from "./DetailBadge";
import { formatDate } from "@/utils/formatDate";

interface InternshipDetailsProps {
  internship: Internship;
}

export default function InternshipDetails({
  internship,
}: InternshipDetailsProps) {
  return (
    <section className="mx-auto max-w-5xl rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <p className="text-lg font-semibold text-blue-600">
        {internship.company}
      </p>

      <h1 className="mt-2 text-4xl font-bold text-gray-900">
        {internship.title}
      </h1>

      <p className="mt-3 text-sm text-gray-500">
        Posted {formatDate(internship.postedDate)}
      </p>

      <div className="mt-6">
        <h2 className="font-semibold text-gray-800">Salary</h2>

        <p className="mt-2 text-gray-600">
          {internship.salary ?? "Not specified"}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 font-semibold text-gray-800">Technologies</h2>

        <div className="flex flex-wrap gap-3">
          {internship.tags.map((tag) => (
            <DetailBadge key={tag} text={tag} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold text-gray-800">Job Description</h2>

        <div
          className="prose mt-4 max-w-none"
          dangerouslySetInnerHTML={{
            __html: internship.description,
          }}
        />
      </div>

      <Link
        href={internship.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Apply Now
      </Link>
    </section>
  );
}
