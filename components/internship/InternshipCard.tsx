import { Internship } from "@/types/internship";

export async function getInternships(): Promise<Internship[]> {
  const response = await fetch("http://localhost:3000/api/internships", {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load internships.");
  }

  return response.json();
}
