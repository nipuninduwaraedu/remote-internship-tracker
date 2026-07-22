interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search internships..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-blue-600"
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
