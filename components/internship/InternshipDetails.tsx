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
    <section className="mx-auto max-w-5xl px-2 sm:px-0">
      <Link
        href="/"
        className="mb-6 inline-flex items-center text-sm text-blue-600 hover:underline sm:mb-8 sm:text-base"
      >
        ← Back to Internships
      </Link>

      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow sm:p-6 lg:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
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

          <div className="min-w-0">
            <p className="font-semibold text-blue-600">{internship.company}</p>

            <h1 className="mt-2 break-words text-2xl font-bold sm:text-3xl lg:text-4xl">
              {internship.title}
            </h1>

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
            className="mt-5 max-w-none text-sm leading-7 text-gray-600 sm:text-base"
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
            className="inline-block w-full rounded-lg bg-blue-600 px-8 py-3 text-center font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            Apply Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
