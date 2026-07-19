import Link from "next/link";

export default function Navbar() {
  return (
    <header className="broder-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Remote Internship Tracker
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            href="/saved"
            className="text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            Saved
          </Link>
        </div>
      </nav>
    </header>
  );
}

