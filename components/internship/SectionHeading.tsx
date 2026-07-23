interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 px-1 sm:mb-8 sm:px-0">
      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
