export default function SearchBar() {
  return (
    <section className="mt-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm md:flex-row">
        <input
          type="text"
          placeholder="Search by React, Next.js, Python..."
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <button
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </section>
  );
}