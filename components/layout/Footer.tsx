export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} Remote Internship Tracker. All rights
          reserved.
        </p>

        <p>
          Built with <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">TypeScript</span> &{" "}
          <span className="font-medium">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
