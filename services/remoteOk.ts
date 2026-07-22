import { Internship } from "@/types/internship";

const API_URL = "https://remoteok.com/api";

export async function getInternships(): Promise<Internship[]> {
  const response = await fetch(API_URL, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch internships");
  }

  const data = await response.json();

  const jobs = data.slice(1);

  return jobs.map((job: any) => ({
    id: Number(job.id),

    title: job.position || job.title || "Untitled Internship",

    company: job.company || "Unknown Company",

    companyLogo: job.logo || "",

    description: job.description || "",

    tags: job.tags || [],

    salary:
      job.salary_min && job.salary_max
        ? `$${job.salary_min} - $${job.salary_max}`
        : null,

    applyUrl: job.url,

    postedDate: job.date,
  }));
}

export async function getInternshipById(
  id: string,
): Promise<Internship | undefined> {
  const internships = await getInternships();

  return internships.find((internship) => internship.id.toString() === id);
}
