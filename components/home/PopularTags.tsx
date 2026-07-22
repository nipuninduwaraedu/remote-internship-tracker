const tags = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "Node.js",
  "AI",
];

interface PopularTagsProps {
  onSelectTag: (tag: string) => void;
}

export default function PopularTags({ onSelectTag }: PopularTagsProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-center text-lg font-semibold">
        Popular Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onSelectTag(tag)}
            className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-600 hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}
