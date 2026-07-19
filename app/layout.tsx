import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Remote Internship Tracker",
  description: "Find the latest remote internships from around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
