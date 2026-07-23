interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto mt-8 w-full max-w-2xl px-4 sm:mt-10 sm:px-0">
      <div className="relative">
        <input
          type="text"
          placeholder="Search internships..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 pr-12 text-sm shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 sm:text-base"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
