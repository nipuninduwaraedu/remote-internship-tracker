import { Internship } from "@/types/internship";

const STORAGE_KEY = "savedInternships";

export function getSavedInternships(): Internship[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveInternships(internships: Internship[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(internships));
}

export function isInternshipSaved(id: number): boolean {
  const internships = getSavedInternships();

  return internships.some((internship) => internship.id === id);
}

export function saveInternship(internship: Internship): void {
  const internships = getSavedInternships();

  if (internships.some((item) => item.id === internship.id)) {
    return;
  }

  internships.push(internship);

  saveInternships(internships);
}

export function removeInternship(id: number): void {
  const internships = getSavedInternships().filter(
    (internship) => internship.id !== id,
  );

  saveInternships(internships);
}
