import Image from "next/image";
import Link from "next/link";

import { Internship } from "@/types/internship";
import { formatDate } from "@/utils/formatDate";
import DetailBadge from "./DetailBadge";

interface InternshipDetailsProps {
  internship: Internship;
}

export default function InternshipDetails({
  internship,
}: InternshipDetailsProps) {
  return (
    <section className="mx-auto max-w-5xl">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-blue-600 hover:underline"
      >
        ← Back to Internships
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow">
        <div className="flex items-center gap-5">
          {internship.companyLogo ? (
            <Image
              src={internship.companyLogo}
              alt={internship.company}
              width={70}
              height={70}
              className="rounded-lg border"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200 text-xl font-bold">
              {internship.company.charAt(0)}
            </div>
          )}

          <div>
            <p className="text-blue-600 font-semibold">{internship.company}</p>

            <h1 className="text-4xl font-bold mt-2">{internship.title}</h1>

            <p className="mt-2 text-gray-500">
              Posted {formatDate(internship.postedDate)}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-lg">Salary</h2>

          <p className="mt-2 text-gray-600">
            {internship.salary ?? "Not specified"}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-lg mb-4">Technologies</h2>

          <div className="flex flex-wrap gap-3">
            {internship.tags.map((tag) => (
              <DetailBadge key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold">Job Description</h2>

          <div
            className="prose prose-blue mt-5 max-w-none"
            dangerouslySetInnerHTML={{
              __html: internship.description,
            }}
          />
        </div>

        <div className="mt-12">
          <Link
            href={internship.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold transition hover:bg-blue-700"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
