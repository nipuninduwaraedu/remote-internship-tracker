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
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export default function PopularTags({
  selectedTag,
  onSelectTag,
}: PopularTagsProps) {
  return (
    <section className="mt-6 px-2 sm:mt-8 sm:px-6 lg:px-8">
      <h2 className="mb-3 text-center text-sm font-semibold sm:mb-4 sm:text-base lg:text-lg">
        Popular Technologies
      </h2>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {tags.map((tag) => {
          const active = selectedTag === tag;

          return (
            <button
              key={tag}
              onClick={() => onSelectTag(tag)}
              className={`rounded-full px-3 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                active
                  ? "bg-blue-600 text-white"
                  : "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}
