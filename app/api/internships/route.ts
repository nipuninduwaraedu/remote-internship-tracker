import { NextResponse } from "next/server";

import { Internship } from "@/types/internship";

const REMOTE_OK_API = "https://remoteok.com/api";

export async function GET() {
  try {
    const response = await fetch(REMOTE_OK_API, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch internships");
    }
    const data = await response.json();
    const jobs = data.slice(1);

    const internships: Internship[] = jobs.map((job: any) => ({
      id: job.id,

      title: job.position ?? "Untitled Internship",

      company: job.company ?? "Unknown Company",

      companyLogo: job.logo ?? null,

      description: job.description ?? "",

      tags: job.tags ?? [],

      salary: job.salary_min ? `$${job.salary_min} - $${job.salary_max}` : null,

      applyUrl: job.url ?? "#",

      postedDate: job.date ?? "",
    }));

    return NextResponse.json(internships);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Unable to load internships.",
      },
      {
        status: 500,
      },
    );
  }
}
