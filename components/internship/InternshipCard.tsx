"use client";

import Image from "next/image";
import Link from "next/link";

import { Internship } from "@/types/internship";
import { formatDate } from "@/utils/formatDate";
import { useSavedInternships } from "@/hooks/useSavedInternships";

interface InternshipCardProps {
  internship: Internship;
}

export default function InternshipCard({ internship }: InternshipCardProps) {
  const { isSaved, save, remove } = useSavedInternships();

  const saved = isSaved(internship.id);

  function handleSave() {
    if (saved) {
      remove(internship.id);
    } else {
      save(internship);
    }
  }

  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-3">
        {internship.companyLogo ? (
          <Image
            src={internship.companyLogo}
            alt={internship.company}
            width={50}
            height={50}
            className="rounded-lg border"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-200 font-bold text-gray-600">
            {internship.company.charAt(0)}
          </div>
        )}

        <div>
          <p className="font-semibold text-blue-600">{internship.company}</p>

          <p className="text-sm text-gray-500">Remote Internship</p>
        </div>
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-900">
        {internship.title}
      </h2>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
        {internship.description.replace(/<[^>]*>/g, "")}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {internship.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <p className="mt-6 text-sm text-gray-600">
          <span className="font-semibold">Salary:</span>{" "}
          {internship.salary ?? "Not specified"}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Posted {formatDate(internship.postedDate)}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleSave}
            className={`flex-1 rounded-lg px-4 py-2 font-medium transition ${
              saved
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {saved ? "❤️ Saved" : "🤍 Save"}
          </button>

          <Link
            href={`/internships/${internship.id}`}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-center font-medium text-white transition hover:bg-blue-700"
          >
            More Details
          </Link>
        </div>
      </div>
    </article>
  );
}
