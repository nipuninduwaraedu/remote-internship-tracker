import { notFound } from "next/navigation";

import InternshipDetails from "@/components/internship/InternshipDetails";
import { getInternshipById } from "@/services/remoteOk";

interface InternshipPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function InternshipPage({ params }: InternshipPageProps) {
  const { id } = await params;

  const internship = await getInternshipById(id);

  if (!internship) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <InternshipDetails internship={internship} />
    </main>
  );
}
