const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "AI",
  "Backend",
  "Frontend",
];

export default function PopularTags() {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Popular Technologies
      </h2>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
