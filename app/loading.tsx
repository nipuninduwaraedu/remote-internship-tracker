import Hero from "@/components/home/Hero";
import InternshipSkeleton from "@/components/internship/InternshipSkeleton";

export default function Loading() {
  return (
    <main>
      <Hero />

      <section className="mx-auto mt-16 max-w-7xl px-6">
        <div className="mb-10 h-10 w-72 animate-pulse rounded bg-gray-300"></div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <InternshipSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
