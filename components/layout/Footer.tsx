export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-600 md:flex-row">
        <p>
          © {new Date().getFullYear()} Remote Internship Tracker. All rights
          reserved.
        </p>

        <p>
          <span className="font-medium">Remotework</span>,{" "}
          <span className="font-medium">JobFinder</span> &{" "}
          <span className="font-medium">WorldWide</span>
        </p>
      </div>
    </footer>
  );
}
