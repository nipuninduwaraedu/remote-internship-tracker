export interface Internship {
  id: number;
  title: string;
  company: string;
  companyLogo: string | null;
  description: string;
  tags: string[];
  salary: string | null;
  applyUrl: string;
  postedDate: string;
}
